module.exports = async page => {
  await page.waitFor(5000);
  if ((await page.waitForSelector('[data-test="PageAsModal"]')) == true) {
    await page.click('[data-test="Button"]');
    await page.waitFor(5000);
  }
};
