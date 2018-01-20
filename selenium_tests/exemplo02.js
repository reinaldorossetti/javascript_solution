// Exemplo de Selenium em JS, esse exemplo basico tem espera,
// mas ela nao e assicrona o pode gerar erro.
const { Builder, By, Key, until } = require('selenium-webdriver');

var d = new Builder().forBrowser('chrome').build();

d.get('http://www.google.com/');
let el = d.findElement(By.name('q'));
d.wait(until.elementIsVisible(el),5000); 
el.sendKeys('xxx', Key.RETURN);
d.wait(until.titleIs('webdriver - Google Search'), 5000);
d.close();