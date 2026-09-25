#!/usr/bin/env node
// Submits every URL in the live sitemap to IndexNow (Bing, Yandex, Seznam, Naver).
// Run after a production deploy: npm run indexnow
const HOST = "innmetric.com";
const KEY = "a74e26f6410a4b340ae448deaf098348";
const SITEMAP = `https://${HOST}/sitemap.xml`;

const sitemap = await fetch(SITEMAP);
if (!sitemap.ok) {
  console.error(`indexnow: ${SITEMAP} returned ${sitemap.status}`);
  process.exit(1);
}
const urlList = [...(await sitemap.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  (match) => match[1]
);
const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList,
  }),
});

console.log(`indexnow: ${response.status} for ${urlList.length} URLs`);
if (response.status >= 300) {
  console.error(await response.text());
  process.exit(1);
}
