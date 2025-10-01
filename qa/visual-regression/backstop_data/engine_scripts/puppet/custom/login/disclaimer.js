module.exports = async page => {
  await page.waitForSelector('[data-test="toggle-seemore"]');
  page.click('[data-test="toggle-seemore"]');
  await page.waitForSelector('[data-test="footer-wrapper"]');
};
