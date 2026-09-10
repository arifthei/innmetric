export const FORM_NAME = "distribution-review";
export const SUBMIT_TIMEOUT_MS = 20_000;

export async function postEnquiry(
  data: FormData,
  signal: AbortSignal,
  fetchImpl: typeof fetch = fetch
): Promise<void> {
  const body = new URLSearchParams();

  data.forEach((value, name) => {
    if (typeof value !== "string") throw new Error("Files are not accepted");
    if (name !== "systems") body.append(name, value);
  });

  body.set("form-name", FORM_NAME);
  body.set("bot-field", String(data.get("bot-field") ?? ""));
  body.set("systems", data.getAll("systems").map(String).join(", "));

  const response = await fetchImpl("/__forms.html", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
    signal,
  });

  if (!response.ok) {
    throw new Error(`Submission returned HTTP ${response.status}`);
  }
}
