// Quick crawl test — record all non-standard links from key pages
const PAGES = [
  'https://playsunquest.com/the-crypt/',
  'https://playsunquest.com/the-crypt/crypt-l-book/',
  'https://playsunquest.com/cave-upper-skull-eye-2/',
  'https://playsunquest.com/down-well/',
  'https://playsunquest.com/cave-upper-well-no/',
  'https://playsunquest.com/skull-dungeon-need/',
  'https://playsunquest.com/skull-dungeon-sword/',
  'https://playsunquest.com/dk-remove/',
  'https://playsunquest.com/bounty-quest/avenr/',
  'https://playsunquest.com/a-jail-quest/the-orc-stole-key/',
];

for (const url of PAGES) {
  console.log(`PAGE: ${url}`);
}
