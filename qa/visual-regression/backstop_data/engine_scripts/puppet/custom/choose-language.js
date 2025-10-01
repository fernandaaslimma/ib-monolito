// const {login} = require('../modules/login');

module.exports = async page => {
  // await login(page)
  await page.waitForSelector('[data-test="PageAsModal"]');
  await page.click('[data-test="Button"]');
  await page.waitFor(5000);
  await page.waitForSelector('[data-test="Header"]');
  await page.click('[data-test="ChangeLanguage_Open"]');
  await page.waitForSelector('[data-test="LanguagePopup"]');
  await page.waitFor(5000);
};
