var searchKeywords = require('../testdata/google_testdata.js');
var using = require('jasmine-data-provider');
describe('Google search with different keywords', function () {
    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://google.com');
    });
    using(searchKeywords.googlesearchkeywords, function (data) {
        it("Google search for", function () {
            element(by.id('lst-ib')).sendKeys(data.keyword);
            // Clicks on 'Add' button
            element(by.name('btnK')).click();
            // Getting all Todo lists displayed
            browser.navigate().back();
        });
    });
});