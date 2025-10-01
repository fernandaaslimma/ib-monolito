module.exports = async page => {
  await page.waitFor(5000);
  await page.waitForSelector('[data-test="DashboardFilters"]');
  await page.select('[data-test="DashboardCategoryFilter"]', "history");
  await page.waitFor(5000);
};
