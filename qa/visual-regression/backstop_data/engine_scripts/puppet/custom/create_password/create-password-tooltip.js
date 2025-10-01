module.exports = async page => {
  await page.click("[name=password]");
  await page.waitForSelector('[data-test="PasswordTooltip"]');
};
