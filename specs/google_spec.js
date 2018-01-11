describe('Google home page', function(){
it('Verify google homepage title', function(){
 
    browser.waitForAngularEnabled(false);
    browser.get('https://www.google.com');
    expect(browser.getTitle()).toEqual('Google');

});
});   