const BASE_URL = 'https://playsunquest.com';
const puppeteer = require('/opt/homebrew/lib/node_modules/puppeteer');

async function sampleCombat(page, url, name) {
  const results = [];
  for (let i = 0; i < 10; i++) {
    await page.goto(url, { waitUntil: 'networkidle0' });
    
    const link0Info = await page.evaluate(() => {
      const link = document.getElementById('link-0');
      return link ? { href: link.href, text: link.textContent.trim() } : null;
    });
    
    await page.evaluate(() => document.getElementById('link-0').click());
    await page.waitForLoadState('networkidle0');
    
    const resultUrl = page.url();
    results.push({
      iteration: i + 1,
      before_url: url,
      link0_href: link0Info ? link0Info.href : null,
      result_url: resultUrl
    });
    
    console.log(name + ' sample ' + (i+1) + '/10: ' + resultUrl);
  }
  return results;
}

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  console.log('Testing /skull-dungeon/714-2/...');
  const r1 = await sampleCombat(page, BASE_URL + '/skull-dungeon/714-2/', '714-2');
  
  console.log('\nTesting /skull-dungeon/skull-dungeon-2/...');
  const r2 = await sampleCombat(page, BASE_URL + '/skull-dungeon/skull-dungeon-2/', 'dungeon2');
  
  console.log('\n=== RESULTS ===');
  console.log('714-2:', JSON.stringify(r1, null, 2));
  console.log('dungeon2:', JSON.stringify(r2, null, 2));
  
  await browser.close();
})();
