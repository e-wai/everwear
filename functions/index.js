const chromium = require('chrome-aws-lambda');
const puppeteer = require('puppeteer');

const SITES = [
  'alternativeapparel.com',
  'bodenusa.com',
  'everlane.com',
  'fordays.com',
  'kotn.com',
  'livefashionable.com',
  'outdoorvoices.com',
  'peopletree.co.uk',
  'tentree.ca',
  'thereformation.com',
  'thredup.com',
  'wearethought.com',
  'wearpact.com',
];

let searchBySiteWithBrowser = async function(browser, site, q, imageUrl) {
    const page = await browser.newPage();
    const url = `https://www.google.com/searchbyimage?image_url=${imageUrl}&as_q=${q}&as_sitesearch=${site}`;
    console.log(`GET ${url}`);

    try {
      await page.goto(url);
      //await page.screenshot({ path: `screenshots/${site}.png`, fullPage: true });
      const [imgSrc, imgTitle] = await page.$eval('#iur img', el => [el.src, el.title]);
      return { site, src: imgSrc, href: imgTitle };
    } catch (err) {
      return null;
    }
};

let search = async function(q, imageUrl) {
  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: true,
  });

  try {
    const results = await Promise.all(
      SITES.map(site => searchBySiteWithBrowser(browser, site, q, imageUrl))
    );
    return results.filter(result => result);
  } catch (err) {
    throw err;
  } finally {
    await browser.close();
  }
};

exports.search = async (req, res) => {
  console.log('REQUEST: %j', req.body);
  // Set CORS headers for preflight requests
  res.set('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') {
    // Allows POSTs from any origin with the Content-Type header
    res.set('Access-Control-Allow-Methods', 'POST');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.status(204).send('');
  } else {
    const { q = '', imageUrl } = req.body;
    const ret = await search(q, imageUrl);
    res.json(ret);
  }
};

// const q = 'black';
// const imageUrl = 'https://underarmour.scene7.com/is/image/Underarmour/V5-1216010-001_FC_Main?scl=1&fmt=jpg';
// search(q, imageUrl).then(console.log).catch(console.err);
