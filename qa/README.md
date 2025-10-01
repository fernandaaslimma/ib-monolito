# UI Tests

Tests projects for BBM Internet Banking application.

---

## End-to-end

This strategy consists in validate application's flows and at the top layer of the application (UI).

This projects uses the [page object](https://martinfowler.com/bliki/PageObject.html) pattern in order to re-use DOM elements and avoid rework.

#### Running

The project is currently using [wdio docker](https://github.com/stsvilik/wdio-docker-service) plugin to isolate the environment under test.

To be able to debug tests, use the following options:

~~~~
dockerOptions: {
        image: 'selenium/standalone-chrome-debug', // Selenium Standalone with Chrom e installed and runs a VNC server
        healthCheck: 'http://localhost:4444',
        options: {
            e: ['VNC_NO_PASSWORD=1'], // If you want to run VNC without password authentication
            p: ['4444:4444', '5900:5900'], // Port 5900 to VNC
            v: [`${path.join(__dirname, "/downloads/")}:///home/seluser/Downloads/`],
            shmSize: '2g',
        }
    },
~~~~

You will have to download [VNC viewer](https://www.realvnc.com/en/connect/download/viewer/).

### [Webdriver.io](http://webdriver.io/)

Node.js implementation of webdriver. Used to manipulate the browser and its dependencies.

- `npm tests` to run tests.

### [Chai](http://www.chaijs.com/)

Assertion library used combined with any javascript/node.js testing framework

### [Cucumber.js](https://github.com/cucumber/cucumber-js)

Used as business layer on the top of code to document the behavior of the application (BDD).

Also used as test runner.

### [Featurebook-express](https://github.com/menezes-ssz/feature-express)

Application to expose business rules to project's stakeholders.

- `npm run featurebook` to run.

### [ESlint](https://eslint.org/)

Used to evaluate code standards.

- `npm run lint` to evaluate te code.
- `num run lint:fix` to evalute and automatically fix the issues found.

---

## Visual Regression

This strategy consists in check the impact of the current development version against a stable version of the application.



###[BackstopJS](https://github.com/garris/BackstopJS)

Automates visual regression testing of your responsive web UI by comparing DOM screenshots over time.

This suite is currently using [puppeteer](https://github.com/GoogleChrome/puppeteer) as handler for [chrome headless](https://developers.google.com/web/updates/2017/04/headless-chrome).

- `npm test` to execut tests.
- `npm run test:reference` to gather reference screenshots.
- `npm run test:approve` to promote new reference screenshots.