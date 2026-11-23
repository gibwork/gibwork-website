import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { createRequire } from "node:module";
import ts from "typescript";

const require = createRequire(import.meta.url);
const ROOT_DIR = path.resolve(import.meta.dirname, "..");

/**
 * Transpiles and evaluates a local TypeScript module in-memory using the
 * project's installed TypeScript compiler so tests run via `node --test`
 * with zero additional dependencies.
 */
function loadTsModule(relativePath, mocks = {}) {
  const fullPath = path.join(ROOT_DIR, relativePath);
  const source = fs.readFileSync(fullPath, "utf8");

  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      jsx: ts.JsxEmit.ReactJSX,
      esModuleInterop: true,
    },
    fileName: fullPath,
  });

  const moduleObj = { exports: {} };
  const customRequire = (id) => {
    if (id in mocks) {
      return mocks[id];
    }
    if (id.startsWith("@/")) {
      const targetRel = id.slice(2) + ".ts";
      if (fs.existsSync(path.join(ROOT_DIR, targetRel))) {
        return loadTsModule(targetRel, mocks);
      }
      const targetTsx = id.slice(2) + ".tsx";
      if (fs.existsSync(path.join(ROOT_DIR, targetTsx))) {
        return loadTsModule(targetTsx, mocks);
      }
    }
    return require(id);
  };

  const wrapper = new vm.Script(
    `(function (exports, require, module, __filename, __dirname) { ${outputText}\n})`,
    { filename: fullPath }
  );

  const compiledFn = wrapper.runInThisContext();
  compiledFn(
    moduleObj.exports,
    customRequire,
    moduleObj,
    fullPath,
    path.dirname(fullPath)
  );
  return moduleObj.exports;
}

const { siteConfig } = loadTsModule("lib/site-config.ts");
const {
  REFERRAL_QUERY_PARAM,
  sanitizeReferralCode,
  extractReferralCode,
  getAppHref,
} = loadTsModule("lib/referral.ts");

test("sanitizeReferralCode accepts valid referral handles and trims outer whitespace", () => {
  assert.equal(sanitizeReferralCode("blackknighttech"), "blackknighttech");
  assert.equal(sanitizeReferralCode("  blackknighttech  "), "blackknighttech");
  assert.equal(sanitizeReferralCode("gib_work-2026"), "gib_work-2026");
  assert.equal(sanitizeReferralCode("A1_b2-C3"), "A1_b2-C3");
  assert.equal(sanitizeReferralCode("a".repeat(64)), "a".repeat(64));
});

test("sanitizeReferralCode rejects empty, malformed, overly long, or XSS payloads", () => {
  assert.equal(sanitizeReferralCode(""), null);
  assert.equal(sanitizeReferralCode("   "), null);
  assert.equal(sanitizeReferralCode(null), null);
  assert.equal(sanitizeReferralCode(undefined), null);
  assert.equal(sanitizeReferralCode(12345), null);
  assert.equal(sanitizeReferralCode("a".repeat(65)), null);
  assert.equal(sanitizeReferralCode("has space"), null);
  assert.equal(sanitizeReferralCode("<script>alert(1)</script>"), null);
  assert.equal(sanitizeReferralCode("javascript:alert(1)"), null);
  assert.equal(sanitizeReferralCode("ref&admin=true"), null);
  assert.equal(sanitizeReferralCode("../etc/passwd"), null);
});

test("extractReferralCode reads only the intended ref parameter from various inputs", () => {
  assert.equal(
    extractReferralCode("?ref=blackknighttech"),
    "blackknighttech"
  );
  assert.equal(
    extractReferralCode("ref=blackknighttech&foo=bar&admin=1"),
    "blackknighttech"
  );
  assert.equal(
    extractReferralCode("https://gib.work/?ref=blackknighttech&utm_source=x"),
    "blackknighttech"
  );
  assert.equal(
    extractReferralCode(new URLSearchParams("ref=blackknighttech&extra=ignored")),
    "blackknighttech"
  );
  assert.equal(
    extractReferralCode({ ref: "blackknighttech", other: "ignored" }),
    "blackknighttech"
  );
  assert.equal(
    extractReferralCode({ ref: ["blackknighttech", "second"] }),
    "blackknighttech"
  );
  assert.equal(extractReferralCode("blackknighttech"), "blackknighttech");
});

test("extractReferralCode returns null when ref is absent or invalid", () => {
  assert.equal(extractReferralCode(), null);
  assert.equal(extractReferralCode(null), null);
  assert.equal(extractReferralCode(""), null);
  assert.equal(extractReferralCode("?foo=bar&baz=qux"), null);
  assert.equal(extractReferralCode("?ref="), null);
  assert.equal(extractReferralCode("?ref=%3Cscript%3E"), null);
  assert.equal(extractReferralCode(new URLSearchParams("foo=bar")), null);
});

test("getAppHref preserves valid referral attribution on siteConfig.appUrl", () => {
  assert.equal(
    getAppHref("?ref=blackknighttech"),
    "https://app.gib.work/?ref=blackknighttech"
  );
  assert.equal(
    getAppHref("blackknighttech"),
    "https://app.gib.work/?ref=blackknighttech"
  );
  assert.equal(
    getAppHref(new URLSearchParams({ [REFERRAL_QUERY_PARAM]: "solana_builder" })),
    "https://app.gib.work/?ref=solana_builder"
  );
});

test("getAppHref does not forward arbitrary query parameters and falls back to exact siteConfig.appUrl", () => {
  assert.equal(getAppHref(), siteConfig.appUrl);
  assert.equal(getAppHref(""), siteConfig.appUrl);
  assert.equal(getAppHref(null), siteConfig.appUrl);
  assert.equal(getAppHref("?foo=bar&utm_source=test"), siteConfig.appUrl);
  assert.equal(
    getAppHref("?ref=blackknighttech&foo=bar&evil=1"),
    "https://app.gib.work/?ref=blackknighttech"
  );
  assert.equal(
    getAppHref("?ref=<img src=x onerror=alert(1)>"),
    siteConfig.appUrl
  );
});

test("getAppHref rejects unsafe baseUrl protocols and falls back to siteConfig.appUrl", () => {
  assert.equal(
    getAppHref("?ref=blackknighttech", "javascript:alert(1)"),
    "https://app.gib.work/?ref=blackknighttech"
  );
});

test("AppCtaLink renders SSR-safe anchor with preserved referral attribution and merges Button asChild props", () => {
  const React = require("react");
  const ReactDOMServer = require("react-dom/server");

  const { AppCtaLink } = loadTsModule("components/ui/app-cta-link.tsx", {
    "next/link": {
      __esModule: true,
      default: React.forwardRef(function MockNextLink(
        { href, children, ...props },
        ref
      ) {
        return React.createElement("a", { ref, href, ...props }, children);
      }),
    },
  });

  const defaultHtml = ReactDOMServer.renderToString(
    React.createElement(
      AppCtaLink,
      { className: "cta-btn" },
      "Get Started For Free"
    )
  );
  assert.match(defaultHtml, /href="https:\/\/app\.gib\.work\/"/);
  assert.match(defaultHtml, /target="_blank"/);
  assert.match(defaultHtml, /class="cta-btn"/);
  assert.match(defaultHtml, /Get Started For Free/);

  const referralHtml = ReactDOMServer.renderToString(
    React.createElement(
      AppCtaLink,
      {
        referralSearch: "?ref=blackknighttech&arbitrary=ignored",
        className: "nav-open-app",
      },
      "Open App"
    )
  );
  assert.match(
    referralHtml,
    /href="https:\/\/app\.gib\.work\/\?ref=blackknighttech"/
  );
  assert.doesNotMatch(referralHtml, /arbitrary/);
  assert.match(referralHtml, /class="nav-open-app"/);
});

test("Landing page CTA components (hero, nav, cta, looking-for) all wire AppCtaLink", () => {
  const ctaFiles = [
    "components/hero.tsx",
    "components/nav.tsx",
    "components/cta.tsx",
    "components/looking-for.tsx",
  ];

  for (const relPath of ctaFiles) {
    const content = fs.readFileSync(path.join(ROOT_DIR, relPath), "utf8");
    assert.ok(
      content.includes("AppCtaLink"),
      `Expected ${relPath} to use AppCtaLink for referral-preserving app links`
    );
  }
});
