
exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    suites: {
        //example : './specs/example_spec.js',
        //google : './specs/google_spec.js'
       // javascript: './specs/javascript.js'
         //po: './specs/potest.js'
         //dataprovidertest: './specs/dataprovider_spec.js'
         githubdataprovidertest: './specs/github_dataprovider.js'
    },
    capabilities: {
        browserName: 'firefox'
      },
      jasmineNodeOpts: {
        showColors: true,
        silent: true,
        defaultTimeoutInterval: 360000,
        print: function () {
        }
      }, 
      onPrepare: function() {
        var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
        jasmine.getEnv().addReporter(
          new Jasmine2HtmlReporter({
            fileName : 'TestReport',
            savePath: './test/reports/'
          })
        );
    }
  }