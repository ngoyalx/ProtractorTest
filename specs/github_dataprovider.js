var githubcredentials = require('../testdata/github_testdata.js');
var using = require('jasmine-data-provider');
describe('login with different github credentials', function () {
    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://github.com');
    });

    using(githubcredentials.users, function (data) {
        it("Google search for", function () {
            element(by.xpath('//a[@href="/login"]')).click();
            element(by.id('login_field')).sendKeys(data.username);
            element(by.id('password')).sendKeys(data.password);
            browser.driver.sleep(4000);
            element(by.xpath('//input[@id="password"]/following-sibling::input')).click();
            browser.driver.sleep(4000);
            element(by.xpath('//span[@class="dropdown-caret"]')).click();
            element(by.xpath('(//button[@class="dropdown-item dropdown-signout"])[1]')).click();
        });
    });
});