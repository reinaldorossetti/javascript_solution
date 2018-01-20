const {Builder, By, Key, until} = require('selenium-webdriver')
const d = new Builder().forBrowser('chrome').build(); d.get('http://www.google.com/');
(async function google_search() {
    await d.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await d.wait(until.titleIs('webdriver - Pesquisa Google'), 15000);
    await d.close();
})();
