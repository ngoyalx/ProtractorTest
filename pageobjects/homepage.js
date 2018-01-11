var HomePage = function(){

this.heading = element(by.xpath("//h1[@class='ng-scope']"));

this.getExpectedText = function(){
    return this.heading.getText();
};

};

module.exports = new HomePage();