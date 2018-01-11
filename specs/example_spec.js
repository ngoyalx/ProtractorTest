describe('Protractor Demo App', function() {
  it('should have a title', function() {
    //browser.waitForAngularEnabled(false);
    browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
    //expect(browser.getTitle()).toEqual('Google');
    
    element(by.model('Auth.user.name')).sendKeys('angular');
    element(by.model('Auth.user.password')).sendKeys('password');
    element(by.model('model[options.key]')).sendKeys('username');
    element(by.xpath("//button[@class='btn btn-danger']")).click();

    var Heading = element(by.xpath("//h1[@class='ng-scope']"));
    expect(Heading.getText()).toEqual('Home');
  });
});