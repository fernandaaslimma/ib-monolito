//const { login } = require("../modules/login");

module.exports = async (page, vp) => {
  // await login(page, "pj_leonardolima@bocombbm.com.br", "00112233");
  // await page.waitFor(3000);

  if (vp.label == "mobile") {
    // let registratolink = await page.$(
    //   '[data-test="footer-wrapper"] :nth-child(4) :nth-child(2)'
    // );
    // await registratolink.click();
    await page.waitForSelector('[data-test="RegistratoPage"]');
    await page.waitFor(5000);
  } else {
    // let registratolink = await page.$(
    //   '[data-test="footer-wrapper"] :nth-child(4) :nth-child(2)'
    // );
    // await registratolink.click();
    await page.waitForSelector('[data-test="RegistratoPage"]');
    await page.waitFor(5000);
  }
};
