var HomePage = require("../pageobjects/homepage.js");
var LoginPage = require('../pageobjects/login.js');

describe('PO test', function(){
    
    beforeAll(function(){
        browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
    });

    it('verify login',function(){
        var HomePage = LoginPage.login('angular','password','username');
    });

    it('verify homepage',function(){
    var expectedText = HomePage.getExpectedText();
    console.log(expectedText + ',,,,,,,,,,,,,,,,,,,,,,,,,');
    expect(expectedText).toEqual('Home');
    });
});