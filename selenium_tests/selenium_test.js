const {Builder, By, Key, until} = require('selenium-webdriver');
(async function example() {
  const driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://www.google.com/');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 5000);
  } finally { await driver.close();}
})();
