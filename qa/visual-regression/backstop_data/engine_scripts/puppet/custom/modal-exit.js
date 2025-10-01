const { login } = require("../modules/login");

module.exports = async page => {
  await login(page);

  await page.waitForSelector('[data-test="Header"]');
  await page.click('[data-test="Header_Logout"]');
  await page.waitForSelector('[data-test="ConfirmationModal"]');
  await page.waitFor(5000);
};
