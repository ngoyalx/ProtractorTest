
exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    suites: {
        example : './specs/example_spec.js',
        //google : './specs/google_spec.js'
        //javascript: './specs/javascript.js'
    },
    capabilities: {
        browserName: 'chrome'
      },
      jasmineNodeOpts: {
        showColors: true,
        silent: true,
        defaultTimeoutInterval: 360000,
        print: function () {
        }
      }, 
      onPrepare: function() {
        var HtmlReporter = require('protractor-html-screenshot-reporter');
        jasmine.getEnv().addReporter(
          new HtmlReporter({
            baseDirectory: '/html/screenshots/',
            docName: 'index.html',
            docTitle: 'my reporter'
          })
        );
    }
  }