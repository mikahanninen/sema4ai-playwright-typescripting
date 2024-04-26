const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://portal.robocorp.com');
  console.log(await page.title());  // Should log 'Robocorp Portal'
  await page.screenshot({ path: 'portal.png', fullPage: true});
  await browser.close();
})();