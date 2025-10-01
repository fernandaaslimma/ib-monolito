module.exports = async page => {
  await page.waitFor(5000);
  await page.click('[data-test="FilterInfo"]');
  await page.waitForSelector('[data-test="FilterForm"]');

  await page.waitFor(5000);
};
