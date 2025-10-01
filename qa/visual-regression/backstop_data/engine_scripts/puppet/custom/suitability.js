//const { loginsuitability } = require("../modules/login.suitability");

module.exports = async (page, vp) => {
  if (vp.label == "mobile") {
    // await loginsuitability(page, "pj_andremendes@bancobbm.com.br", "55667788");
    await page.waitFor(5000);
    await page.waitForSelector('[data-test="PageAsModal"]');
    await page.waitFor(5000);
  } else {
    // await loginsuitability(page, "pj_yuriramos@bocombbm.com.br", "55667788");
    await page.waitFor(5000);
    await page.waitForSelector('[data-test="PageAsModal"]');
    await page.waitFor(5000);
  }
};
