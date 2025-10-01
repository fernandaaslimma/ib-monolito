const { login } = require("../modules/login");

module.exports = async page => {
  await login(page, "pj_yuriramos@bocombbm.com.br", "55667788");
  await page.waitFor(45000);
};
