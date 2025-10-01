module.exports = async (page, scenario) => {
  // await login(page, "soposition@bocombbm.com.br", "00112233");
  // await page.waitFor(10000);

  if (scenario.label == "Disclaimer - Expanded") {
    page.click('[data-test="toggle-seemore"]');
    page.waitForSelector('[data-test="footer-wrapper"]');
  }
  if (scenario.label == "Disclaimer - Collapsed") {
    await page.waitForSelector('[data-test="footer-wrapper"]');
    await page.waitFor(5000);
  }
  if (scenario.label == "Disclaimer") {
    await page.waitForSelector('[data-test="footer-wrapper"]');
    await page.waitFor(5000);
  }
};
