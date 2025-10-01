// const { login } = require("../modules/login");

module.exports = async page => {
  //   await login(page, "pj1@bocombbm.com.br", "55667788");
  //   await page.waitFor(3000);

  await page.waitFor(2000);
  page.click('[data-test="toggle-seemore"]');
  await page.waitForSelector('[data-test="footer-wrapper"]');
};
