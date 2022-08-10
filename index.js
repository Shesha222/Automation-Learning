const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://en.wikipedia.org/wiki/Coronavirus');
  await page.screenshot({path: 'wiki.png'});
  const result = await page.evaluate(() => {
      let headingFormWeb = document.querySelectorAll(".mw-headline");
      const headingList = [...headingFormWeb];
      return headingList.map(h => h.innerText);
  });

    const hrefs = await page.$$eval('a', as => as.map(a => a.href));
    console.log(hrefs);

    console.log(result);
  // console.log(result2);

  // const href1s = await page.


  await browser.close();
})();