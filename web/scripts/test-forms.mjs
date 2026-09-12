import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import {
  existsSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { formsEnabled } from "./forms-enabled.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const webRoot = join(here, "..");
const publicForms = join(webRoot, "public", "__forms.html");
const template = join(webRoot, "src", "forms", "detector.html.template");
const nextDir = join(webRoot, ".next");
const prepare = join(here, "prepare-forms.mjs");

const FIELD_NAMES = [
  "form-name",
  "bot-field",
  "contact-name",
  "email",
  "role",
  "properties",
  "hotel",
  "website",
  "systems",
  "problem",
  "outcome",
  "consent",
];

function runPrepare(envOverrides) {
  const env = { ...process.env };
  delete env.CONTEXT;
  delete env.INNMETRIC_FORMS_ENABLED;
  Object.assign(env, envOverrides);
  const result = spawnSync(process.execPath, [prepare], {
    env,
    cwd: webRoot,
    encoding: "utf8",
  });
  if (result.status !== 0) {
    throw new Error(
      `prepare-forms failed (${result.status}): ${result.stderr || result.stdout}`
    );
  }
  return result;
}

function walkFiles(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walkFiles(full, out);
    else out.push(full);
  }
  return out;
}

function assertDisabledOutput() {
  assert.equal(existsSync(publicForms), false, "public/__forms.html must be absent");
  const leftover = walkFiles(nextDir).filter((file) =>
    file.replaceAll("\\", "/").endsWith("/__forms.html")
  );
  assert.equal(leftover.length, 0, `no leftover detector: ${leftover.join(", ")}`);
  const htmlHits = walkFiles(nextDir).filter((file) => {
    if (!file.endsWith(".html") && !file.endsWith(".html.rsc")) return false;
    const text = readFileSync(file, "utf8");
    return text.includes("data-netlify");
  });
  assert.equal(
    htmlHits.length,
    0,
    `preview HTML must not contain data-netlify: ${htmlHits.join(", ")}`
  );
  console.log("assert-disabled: no detector in public or .next");
}

function assertEnabledOutput() {
  assert.equal(existsSync(publicForms), true, "public/__forms.html must exist");
  const html = readFileSync(publicForms, "utf8");
  const expected = readFileSync(template, "utf8");
  assert.equal(html, expected);
  assert.match(html, /name="distribution-review"/);
  assert.match(html, /data-netlify="true"/);
  for (const name of FIELD_NAMES) {
    assert.match(html, new RegExp(`name="${name}"`));
  }
  console.log("assert-enabled: detector matches template field names");
}

async function testEnquiry() {
  const mod = await import(pathToFileURL(join(webRoot, "src", "lib", "enquiry.ts")).href);
  const { postEnquiry, FORM_NAME, SUBMIT_TIMEOUT_MS } = mod;

  assert.equal(FORM_NAME, "distribution-review");
  assert.equal(SUBMIT_TIMEOUT_MS, 20_000);

  const data = new FormData();
  data.set("contact-name", "Ada");
  data.set("email", "ada@example.com");
  data.set("role", "General manager");
  data.set("properties", "1");
  data.set("hotel", "Test Hotel");
  data.set("website", "https://example.com");
  data.append("systems", "PMS");
  data.append("systems", "Channel manager");
  data.set("problem", "Something else");
  data.set("outcome", "Reopened dates should be bookable.");
  data.set("consent", "yes");
  data.set("bot-field", "");

  let captured;
  await postEnquiry(data, new AbortController().signal, async (url, init) => {
    captured = { url, init };
    return { ok: true, status: 200 };
  });
  assert.equal(captured.url, "/__forms.html");
  assert.equal(captured.init.method, "POST");
  assert.equal(
    captured.init.headers["Content-Type"],
    "application/x-www-form-urlencoded"
  );
  const body = new URLSearchParams(captured.init.body);
  assert.equal(body.get("form-name"), FORM_NAME);
  assert.equal(body.get("contact-name"), "Ada");
  assert.equal(body.get("systems"), "PMS, Channel manager");
  assert.equal(body.get("bot-field"), "");
  assert.equal(body.getAll("systems").length, 1);

  await assert.rejects(
    () =>
      postEnquiry(data, new AbortController().signal, async () => ({
        ok: false,
        status: 500,
      })),
    /HTTP 500/
  );

  await assert.rejects(
    () =>
      postEnquiry(data, new AbortController().signal, async () => {
        throw new Error("network fail");
      }),
    /network fail/
  );

  const controller = new AbortController();
  const pending = postEnquiry(
    data,
    controller.signal,
    (_url, init) =>
      new Promise((_, reject) => {
        init.signal.addEventListener("abort", () => {
          const error = new Error("The operation was aborted");
          error.name = "AbortError";
          reject(error);
        });
      })
  );
  controller.abort();
  await assert.rejects(pending);

  const fileData = new FormData();
  fileData.set("file", new File(["x"], "a.txt"));
  await assert.rejects(
    () => postEnquiry(fileData, new AbortController().signal, async () => ({ ok: true })),
    /Files are not accepted/
  );

  let calls = 0;
  const slow = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        calls += 1;
        resolve({ ok: true, status: 200 });
      }, 40);
    });
  const lock = { current: false };
  async function guarded() {
    if (lock.current) return;
    lock.current = true;
    try {
      await postEnquiry(data, new AbortController().signal, slow);
    } finally {
      lock.current = false;
    }
  }
  await Promise.all([guarded(), guarded()]);
  assert.equal(calls, 1, "in-flight guard must ignore a second submit");

  console.log("enquiry: 2xx, non-2xx, network, abort, files, double-submit");
}

function testGateAndContract() {
  assert.equal(formsEnabled({}), false);
  assert.equal(formsEnabled({ NODE_ENV: "production" }), false);
  assert.equal(formsEnabled({ CONTEXT: "production" }), false);
  assert.equal(
    formsEnabled({ CONTEXT: "production", INNMETRIC_FORMS_ENABLED: "true" }),
    true
  );
  assert.equal(
    formsEnabled({
      CONTEXT: "deploy-preview",
      INNMETRIC_FORMS_ENABLED: "true",
    }),
    false
  );

  const form = readFileSync(join(webRoot, "src", "components", "ReviewForm.tsx"), "utf8");
  assert.match(form, /if \(!FORMS_ENABLED\) \{\s*setError\(true\);\s*return;/);
  assert.doesNotMatch(form, /Local preview/);
  assert.doesNotMatch(form, /does not send/);
  assert.match(form, /if \(inFlight\.current \|\| sending\) return;/);
  assert.match(form, /Sending\.\.\./);
  assert.match(form, /Thanks\. Your enquiry has been submitted\./);
  assert.doesNotMatch(form, /data-netlify/);
  assert.match(form, /name="distribution-review"/);

  const thanks = readFileSync(join(webRoot, "src", "app", "thanks", "page.tsx"), "utf8");
  assert.match(thanks, /does not confirm/);
  assert.doesNotMatch(thanks, /has been submitted/);

  console.log("gate and source contract");
}

function testPrepareForms() {
  runPrepare({ CONTEXT: "production", INNMETRIC_FORMS_ENABLED: "true" });
  assert.equal(existsSync(publicForms), true);
  runPrepare({});
  assert.equal(existsSync(publicForms), false);

  writeFileSync(publicForms, "<html>leftover</html>");
  runPrepare({});
  assert.equal(existsSync(publicForms), false, "disabled prepare must delete leftovers");

  console.log("prepare-forms: copy, omit, leftover delete");
}

const mode = process.argv[2] || "unit";

if (mode === "assert-disabled") {
  assertDisabledOutput();
} else if (mode === "assert-enabled") {
  assertEnabledOutput();
} else if (mode === "unit") {
  testGateAndContract();
  testPrepareForms();
  await testEnquiry();
  console.log("form unit tests passed");
} else {
  throw new Error(`unknown mode ${mode}`);
}
