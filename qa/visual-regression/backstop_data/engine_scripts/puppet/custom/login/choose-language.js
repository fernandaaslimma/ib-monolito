module.exports = async page => {
  await page.waitForSelector('[data-test="Header"]');
  await page.click('[data-test="ChangeLanguage_Open"]');
  await page.waitForSelector('[data-test="LanguagePopup"]');
};
