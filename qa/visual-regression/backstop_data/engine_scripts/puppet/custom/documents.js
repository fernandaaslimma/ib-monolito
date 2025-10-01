module.exports = async page => {
  await page.waitForSelector('[data-test="ListFileItem_0"]');

  await page.click('[data-test="ListFileItem_0"]');
  await page.waitFor(5000);
  await page.click('[data-test="ListFileItem_1"]');
  await page.waitFor(5000);
  await page.click('[data-test="ListFileItem_2"]');
  await page.waitFor(5000);
};
