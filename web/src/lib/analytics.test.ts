import assert from "node:assert/strict";
import test from "node:test";
import { readGtmId, scrollMarksToFire } from "./analytics.ts";

test("aceita somente um ID de GTM no formato esperado", () => {
  assert.equal(readGtmId("GTM-ABC123"), "GTM-ABC123");
  assert.equal(readGtmId(undefined), null);
  assert.equal(readGtmId(""), null);
  assert.equal(readGtmId("gtm-abc123"), null);
  assert.equal(readGtmId("GTM-abc"), null);
  assert.equal(readGtmId("GTM-"), null);
});

test("marca a profundidade uma vez em cada limite", () => {
  assert.deepEqual(scrollMarksToFire(0.5, []), [50]);
  assert.deepEqual(scrollMarksToFire(0.8, []), [50, 75]);
  assert.deepEqual(scrollMarksToFire(1, [50]), [75, 100]);
  assert.deepEqual(scrollMarksToFire(Number.NaN, []), []);
});

test("os eventos não levam e-mail nem telefone", () => {
  const events = [
    { event: "whatsapp_click", local: "hero" },
    { event: "generate_lead" },
    { event: "scroll_depth", percent: 100 },
  ];
  const serialized = JSON.stringify(events);
  assert.equal(serialized.includes("@"), false);
  assert.equal(serialized.includes("5571"), false);
});
