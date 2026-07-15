const assert = require("node:assert/strict");
const test = require("node:test");
const { selectMarketplaceProof } = require("../.test-dist/marketplace-proof.js");

const now = Date.parse("2026-06-21T00:00:00.000Z");

function task(overrides = {}) {
  return {
    id: "task-1",
    title: "Build a useful feature",
    deadline: "2026-07-01T00:00:00.000Z",
    tags: ["Development"],
    isOpen: true,
    isHidden: false,
    allowOnlyVerifiedSubmissions: false,
    remainingAmount: 50,
    asset: { symbol: "USDC", imageUrl: "https://cdn.gib.work/usdc.png" },
    type: "tasks",
    ...overrides,
  };
}

test("filters closed, hidden, expired, and unfunded listings", () => {
  const proof = selectMarketplaceProof(
    {
      results: [
        task(),
        task({ id: "closed", isOpen: false }),
        task({ id: "hidden", isHidden: true }),
        task({ id: "expired", deadline: "2026-06-20T00:00:00.000Z" }),
        task({ id: "empty", remainingAmount: 0 }),
      ],
    },
    now,
  );

  assert.equal(proof.isLive, true);
  assert.deepEqual(proof.tasks.map(({ id }) => id), ["task-1"]);
  assert.deepEqual(proof.stats, {
    openTasks: 1,
    availableRewards: 50,
    categories: 1,
    highestReward: 50,
  });
});

test("selects a category-diverse preview and deprioritizes social-only work", () => {
  const proof = selectMarketplaceProof(
    {
      results: [
        task({ id: "social", title: "Post on X", tags: ["Social Media"], remainingAmount: 900 }),
        task({ id: "dev", title: "Build", tags: ["Development"], remainingAmount: 100 }),
        task({ id: "design", title: "Design", tags: ["Design"], remainingAmount: 80 }),
        task({ id: "docs", title: "Document", tags: ["Open Source"], remainingAmount: 60 }),
      ],
    },
    now,
  );

  assert.deepEqual(proof.tasks.map(({ id }) => id), ["dev", "design", "docs"]);
  assert.equal(proof.stats.availableRewards, 1140);
  assert.equal(proof.stats.categories, 4);
});

test("uses safe generic fallbacks when the feed is unavailable", () => {
  const proof = selectMarketplaceProof({ results: [] }, now);

  assert.equal(proof.isLive, false);
  assert.equal(proof.stats, null);
  assert.equal(proof.tasks.length, 3);
  assert.ok(proof.tasks.every(({ href }) => href === "https://app.gib.work/"));
});
