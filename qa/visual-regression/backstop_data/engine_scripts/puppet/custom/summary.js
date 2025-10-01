module.exports = async (page, scenario, vp) => {
  if ((await page.waitForSelector('[data-test="PageAsModal"]')) == true) {
    await page.click('[data-test="Button"]');
    await page.waitFor(5000);
  }

  if (vp.label == "desktop") {
    await page.waitForSelector('[data-test="Consolidated_Position_Row1"]');

    await page.click('[data-test="Consolidated_Position_Row1"]');
    await page.waitFor(5000);
  } else {
    await page.waitForSelector(
      '[data-test="Mobile_Consolidated_Position_Row1"]'
    );

    await page.click('[data-test="Mobile_Consolidated_Position_Row1"]');
    await page.waitFor(5000);
  }
};
