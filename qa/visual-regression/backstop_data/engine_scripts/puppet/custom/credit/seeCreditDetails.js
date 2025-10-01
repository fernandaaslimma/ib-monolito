module.exports = async page => {
  await page.waitForSelector('[data-test="DataTable_0"]');
  await page.click('[data-test="DataTable_0"]');
  await page.waitForSelector('[data-test="DataTable_0"]');
};
