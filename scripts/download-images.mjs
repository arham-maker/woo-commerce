import { mkdir, writeFile, access } from "node:fs/promises";
import { createWriteStream } from "node:fs";
import { dirname, join, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { pipeline } from "node:stream/promises";
import { Readable } from "node:stream";
import { readFileSync } from "node:fs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const CONSTANTS_PATH = join(ROOT, "lib", "constants.ts");
const PUBLIC_DIR = join(ROOT, "public");
const HOST = "woocommercelaunchpad.com";

function urlToLocalPath(urlString) {
  const url = new URL(urlString);
  // Keep original site path under /images/...
  // e.g. /assets/images/banner/x.webp -> /images/assets/images/banner/x.webp
  // e.g. /lp1/assets/... -> /images/lp1/assets/...
  let pathname = url.pathname.split("?")[0].split("#")[0];
  pathname = pathname.replace(/\/+/g, "/");
  if (!pathname.startsWith("/")) pathname = `/${pathname}`;
  return `/images${pathname}`;
}

function collectRemoteUrls(source) {
  const re = /https:\/\/woocommercelaunchpad\.com[^"'\\\s]+/g;
  const found = source.match(re) ?? [];
  return [...new Set(found.map((u) => u.replace(/\\+$/, "")))];
}

async function downloadOne(urlString) {
  const localUrlPath = urlToLocalPath(urlString);
  const absPath = join(PUBLIC_DIR, localUrlPath.replace(/^\//, ""));

  try {
    await access(absPath);
    return { urlString, localUrlPath, status: "skipped", absPath };
  } catch {
    // not exists — download
  }

  await mkdir(dirname(absPath), { recursive: true });

  const res = await fetch(urlString, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (compatible; WooCommerceWebImageSync/1.0)",
      Accept: "*/*",
    },
    redirect: "follow",
  });

  if (!res.ok) {
    throw new Error(`HTTP ${res.status} for ${urlString}`);
  }

  if (!res.body) {
    throw new Error(`Empty body for ${urlString}`);
  }

  const fileStream = createWriteStream(absPath);
  await pipeline(Readable.fromWeb(res.body), fileStream);

  // Ensure we have an extension; if missing, try content-type
  if (!extname(absPath)) {
    console.warn(`  ! No extension: ${localUrlPath}`);
  }

  return { urlString, localUrlPath, status: "downloaded", absPath };
}

async function main() {
  const source = readFileSync(CONSTANTS_PATH, "utf8");
  const urls = collectRemoteUrls(source);

  console.log(`Found ${urls.length} unique remote URLs\n`);

  const results = [];
  let ok = 0;
  let skip = 0;
  let fail = 0;

  // Concurrency-limited downloads
  const concurrency = 6;
  let index = 0;

  async function worker() {
    while (index < urls.length) {
      const i = index++;
      const url = urls[i];
      process.stdout.write(`[${i + 1}/${urls.length}] ${url}\n`);
      try {
        const result = await downloadOne(url);
        results.push(result);
        if (result.status === "skipped") skip++;
        else ok++;
      } catch (err) {
        fail++;
        console.error(`  FAIL: ${err.message}`);
        results.push({
          urlString: url,
          localUrlPath: urlToLocalPath(url),
          status: "failed",
          error: String(err.message || err),
        });
      }
    }
  }

  await Promise.all(
    Array.from({ length: concurrency }, () => worker()),
  );

  // Rewrite constants.ts — only replace successful + skipped (file exists)
  let nextSource = source;
  const replacements = results.filter((r) => r.status !== "failed");
  for (const r of replacements) {
    nextSource = nextSource.split(r.urlString).join(r.localUrlPath);
  }

  const { writeFile: wf } = await import("node:fs/promises");
  await wf(CONSTANTS_PATH, nextSource, "utf8");

  console.log("\n--- Summary ---");
  console.log(`Downloaded: ${ok}`);
  console.log(`Already existed: ${skip}`);
  console.log(`Failed: ${fail}`);
  console.log(`Updated: ${CONSTANTS_PATH}`);

  if (fail > 0) {
    console.log("\nFailed URLs:");
    for (const r of results.filter((x) => x.status === "failed")) {
      console.log(` - ${r.urlString}`);
      console.log(`   ${r.error}`);
    }
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
