const { login } = require("../modules/login");

async function feedbackPage(page, url, route, element) {
  await login(page);

  await page.goto(url + route);

  await page.waitForSelector(element);
}

module.exports = { feedbackPage };
