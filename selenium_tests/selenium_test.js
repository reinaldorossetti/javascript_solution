const {Builder, By, Key, until} = require('selenium-webdriver')
const d = await new Builder().forBrowser('chrome').build();
(async function google_search() {
  try {
    await d.get('http://www.google.com/ncr');
    await d.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await d.wait(until.titleIs('webdriver - Search'), 5000);
  } finally { await d.close();}
})();
