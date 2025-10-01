const { config } = require("./wdio.conf");
const moment = require("moment");
const BUILD = process.env.BUILDNUMBER || "localhost";
const FRONT_VERSION = process.env.FRONT_VERSION || "localhost";
const { generate } = require("multiple-cucumber-html-reporter");

exports.config = {
  ...config,
    ...{
      //
      // If you are using Cucumber you need to specify the location of your step definitions.
      cucumberOpts: {
         // <string[]> (file/dir) require files before executing features
        require: ["./features/step-definitions/*.js"],
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        requireModule: ["@babel/register"],
        // <boolean> invoke formatters without executing steps
        dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        format: ["pretty"],
        // <boolean> hide step definition snippets for pending steps
        snippets: false,
        // <string> specify a custom snippet syntax
        snippetSyntax: undefined,
        // <boolean> hide source uris
        source: true,
        // <string[]> (name) specify the profile to use
        profile: [],
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string> (expression) only execute the features or scenarios with tags matching the expression
        tagExpression: "@Pilot and not @Skip and not @NotImplemented and not @Manual",
        // <boolean> add cucumber tags to feature or scenario name
        tagsInTitle: false,
        // <number> timeout for step definitions
        timeout: 600000,
        // <boolean> Enable this config to treat undefined definitions as warnings.
        ignoreUndefinedDefinitions: true,
        // <boolean> Enable this config to treat ambiguous definitions as errors
        failAmbiguousDefinitions: true,
        // Enable this to make webdriver.io behave as if scenarios and not steps were the tests.
        scenarioLevelReporter: false,
        // <boolean> disable colors in formatter output
        colors: true
      },

      // eslint-disable-next-line no-unused-vars
      onComplete: function (exitCode, config, capabilities, results) {
        generate({
          openReportInBrowser: true,
          pageTitle: "Relatório de execução de testes" + "_" + moment().format(),
          reportName: "Relatório de excução de testes - E2E - Pilot Testing",
          screenshotPath: "./reportsQa/screenshots/",
          displayDuration: true,
          saveCollectedJSON: true,
          jsonDir: ".tmp/json/",
          reportPath: "./reports/tfs/pilot_test",
          pageFooter: '<img src="./utils/img/logo-bocombbm.png" style="margin-left: 20px" height="35" width="226" />',
          customData: {
            title: "Informações de execução",
            data: [
              { label: "Projeto", value: "BBM-IB" },
              { label: "Release", value: FRONT_VERSION },
              { label: "Versão Build", value: BUILD }
            ],
          },
        });
      },
    }
};
