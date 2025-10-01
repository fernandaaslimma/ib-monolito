const { login } = require("../modules/login");

module.exports = async page => {
  await login(page);
  await page.waitForSelector('[data-test="PageAsModal"]');
  await page.click('[data-test="Button"]');
  await page.waitFor(5000);
  await page.waitForSelector('[data-test="Header"]');
  await page.waitFor(5000);
};
