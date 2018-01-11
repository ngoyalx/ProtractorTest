
exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    suites: {
        //example : './specs/example_spec.js'
        google : './specs/google_spec.js'
        //javascript: './specs/javascript.js'
    },
    capabilities: {
        browserName: 'chrome'
      },
      onPrepare: function() {
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(
          new AllureReporter({
            //fileName : 'TestReport',
            //savePath: './test/reports/'
            resultsDir: './allure-results/'
          })
        );
    }
  }