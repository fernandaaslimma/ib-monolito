const { login } = require("../modules/login");

// Not using feedback-page due not using default user
// And to avoid adding complexity to the module

module.exports = async (page, scenario) => {
  await login(page, "semcambio@bocombbm.com.br", "00112233");

  await page.waitForSelector('[data-test="Header"]');

  await page.goto(scenario.url + "exchanges/sign-confirmation");

  await page.waitForSelector('[data-test="PermissionDenied"]');
  await page.waitFor(5000);
};
