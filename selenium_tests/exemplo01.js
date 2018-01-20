// Exemplo de Selenium em JS, esse exemplo basico não tem espera,
// o pode gerar erro.

const { Builder, By, until } = require('selenium-webdriver');

var driver = new Builder().forBrowser('chrome').build();

driver.get('http://www.google.com/ncr');
driver.findElement(By.name('q')).sendKeys('webdriver');
driver.findElement(By.name('btnK')).click();
driver.wait(until.titleIs('webdriver - Google Search'), 10000);
driver.close();