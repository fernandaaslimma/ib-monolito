const storage = require("node-persist");

module.exports = async page => {
  storage.initSync();
  await page.evaluateOnNewDocument(() => {
    sessionStorage.setItem("preferredLanguage", "zh-CN");
  });
};
