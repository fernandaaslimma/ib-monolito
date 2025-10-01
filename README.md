# BBM Front SPA

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Interface to manage BBM accounts.

## Running

### Development server

* Install all dependencies `npm install`
* Start development server `npm start`

### Production server

* Install all dependencies `npm install`
* Set the process.env variables
  `example: export PORT=8080 && export NODE_ENV=production && export API=http://bbm-test.dev.com`
* Start production server `npm run start:server`

## Testing

---

* Without coverage `npm test`
* With coverage `npm run test:coverage`
* With watch `npm run test:watch`

## Testing the UI

---

* Read [this](/qa/README.md) to know about testing in the UI.

## Mock Server Apiary

---

* File with config to Apiary [MOCK_APIARY.md](MOCK_APIARY.md)

## Technologies

---

* [React:](https://reactjs.org/) A declarative, component-based library widely used to create user interfaces
* [Redux-zero:](https://github.com/concretesolutions/redux-zero) Mananging states with a single source of truth, undocking business logics from UI in an easy way
* [Styled components:](https://www.styled-components.com/) Style reacts components in a simple way, avoiding styling conflicts as the project grows
* [Express:](https://expressjs.com/) Minimal and flexible Node.js web application framework
* [Webpack:](https://webpack.js.org/) Module bundler
* [Jest:](https://facebook.github.io/jest/) Testing tools
* [Eslint:](https://eslint.org/) Code linting
* [Nsp:](https://github.com/nodesecurity/nsp) Security issues analysis package

## Contributing

---

* To start lint run `npm run lint`
* This project uses eslint with custom [airbnb config](https://www.npmjs.com/package/eslint-config-airbnb) as a lint tool, to start lint only on js files run `npm run lint:js`
* To lint only styles with stylelint run `npm run lint:css`
* Commiting messages uses Commitizen convention, to commit with right conventions run `npm run commit`
