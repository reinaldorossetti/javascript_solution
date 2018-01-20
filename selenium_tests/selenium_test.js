const {Builder, By, Key, until} = require('selenium-webdriver')
const d = new Builder().forBrowser('chrome').build(); d.get('http://www.google.com/');
(async function google_search() {
    await d.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await d.wait(until.titleIs('webdriver - Google Search'), 5000); // Nao precisa de assert, se nao encontra vai dar erro.
}
d.close();
})();
