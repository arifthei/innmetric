import { randomUUID } from "node:crypto";
import { getStore } from "@netlify/blobs";
import { applyDemoAction, createInitialState, currentActor, DemoDomainError, deriveBalances, openItems } from "../collab-runtime/domain.ts";
import { projectEvents, projectState } from "../collab-runtime/projection.ts";
import { ApplyProgrammeDemoActionBody, ApplyProgrammeDemoActionHeader } from "../collab-runtime/schema.ts";
import programme from "../collab-runtime/programme-demo.json" with { type: "json" };
import hotel from "../collab-runtime/hotel-service.json" with { type: "json" };

const base = "/collab/api";
export const config = { path: ["/collab/api/healthz", "/collab/api/demo", "/collab/api/demo/actions", "/collab/api/demo/export"] };
const headers = { "Cache-Control": "private, no-store", "Vary": "X-Demo-Session" };
const actionSchema = ApplyProgrammeDemoActionBody.strict();

function newSession() {
  return {
    state: createInitialState(programme, hotel),
    events: [{
      id: randomUUID(), sequence: 1, actorRole: "system", actorId: "synthetic-fixture",
      action: "session.created", entityId: "programme-demo", previousStatus: null,
      newStatus: "synthetic_session_ready", reason: "Opened a new demo.",
      evidenceIds: [], payload: {}, createdAt: new Date().toISOString(),
    }],
  };
}

function snapshot(sessionId, record) {
  const state = projectState(record.state);
  const events = projectEvents(state, record.events).map(event => {
    const visible = { ...event };
    delete visible.idempotencyKey;
    return visible;
  });
  return { sessionId, version: record.events.length, state, events };
}

function exportSession(view) {
  return {
    ...view, dataMode: "synthetic", exportedAt: new Date().toISOString(),
    notice: "Demo hotels, people and payments.", fixture: view.state.fixture,
    balances: view.state.scope.canViewFinance ? deriveBalances(view.state) : null,
    openItems: view.state.scope.canViewPortfolio ? openItems(view.state) : ["This export covers the selected role."],
  };
}

async function sessionRequest(store, sessionId, action, exporting) {
  // Keep each event and its state update in one conditional write. A concurrent tab
  // retries the action against the latest state and the same idempotency history.
  for (let attempt = 0; attempt < 5; attempt++) {
    const saved = await store.getWithMetadata(sessionId, { type: "json" });
    if (!saved && action) throw new DemoDomainError("Open the demo before taking an action.", 404);
    const record = saved?.data ?? newSession();
    if (action) {
      const prior = action.idempotencyKey && record.events.find(event => event.idempotencyKey === action.idempotencyKey);
      if (prior) {
        if (prior.action !== action.action) throw new DemoDomainError("This action key has already been used.", 409);
        return snapshot(sessionId, record);
      }
      if (record.events.length >= 1000) throw new DemoDomainError("This demo is full. Start a new session.", 409);
      const actor = currentActor(record.state);
      const id = randomUUID();
      const applied = applyDemoAction(record.state, action, actor, id);
      record.state = applied.state;
      record.events.push({
        ...applied.event, id, actorId: actor.actorId, actorRole: actor.role,
        sequence: record.events.length + 1, idempotencyKey: action.idempotencyKey,
        createdAt: new Date().toISOString(),
      });
    }
    if (!saved || action) {
      const condition = saved ? { onlyIfMatch: saved.etag } : { onlyIfNew: true };
      const result = await store.setJSON(sessionId, record, condition);
      if (!result.modified) continue;
    }
    const view = snapshot(sessionId, record);
    return exporting ? exportSession(view) : view;
  }
  throw new DemoDomainError("Another change was just saved. Try again.", 409);
}

export default async function handler(request) {
  try {
    const path = new URL(request.url).pathname.replace(/\/$/, "");
    const writing = path === base + "/demo/actions";
    const exporting = path === base + "/demo/export";
    if (!config.path.includes(path)) throw new DemoDomainError("Unknown demo route.", 404);
    if (request.method !== (writing ? "POST" : "GET")) throw new DemoDomainError("Method unavailable.", 405);
    if (path === base + "/healthz") return Response.json({ status: "ok" }, { headers });
    const rawId = request.headers.get("x-demo-session") ?? (!writing && !exporting ? randomUUID() : null);
    const session = ApplyProgrammeDemoActionHeader.shape["X-Demo-Session"].safeParse(rawId);
    if (!session.success) throw new DemoDomainError("A demo session ID is required.", 400);
    let action;
    if (writing) {
      const body = await request.text();
      if (body.length > 16000) throw new DemoDomainError("The demo action is too large.", 413);
      let input;
      try { input = JSON.parse(body); } catch { throw new DemoDomainError("Invalid JSON.", 400); }
      const parsed = actionSchema.safeParse(input);
      if (!parsed.success) throw new DemoDomainError("Invalid demo action.", 400);
      action = parsed.data;
    }
    const store = getStore({ name: "collab-demo-v1", consistency: "strong" });
    return Response.json(await sessionRequest(store, session.data, action, exporting), { headers });
  } catch (error) {
    if (error instanceof DemoDomainError) return Response.json({ error: error.message }, { status: error.statusCode, headers });
    console.error("Collab demo request failed", error.name, error.message);
    return Response.json({ error: "The demo could not load. Please try again." }, { status: 503, headers });
  }
}
