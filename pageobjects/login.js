
var LoginPage = function(){

this.username = element(by.model('Auth.user.name'));
     
this.password = element(by.model('Auth.user.password'));
  
this.userNameText = element(by.model('model[options.key]'));

this.loginButton = element(by.xpath("//button[@class='btn btn-danger']"));

this.login = function(username,password,userNameText){
this.username.sendKeys(username);
this.password.sendKeys(password);
this.userNameText.sendKeys(userNameText);
this.loginButton.click();
return require('./homepage.js');
return HomePage();
};
};
module.exports = new LoginPage();