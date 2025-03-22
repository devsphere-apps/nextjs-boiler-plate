const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'cucumber-report.json',
  output: 'cucumber-report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {
    "App Version": "0.1.0",
    "Test Environment": "Development",
    "Platform": "Web",
    "Browser": "Chrome"
  }
};

reporter.generate(options); 