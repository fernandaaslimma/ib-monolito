const { feedbackPage } = require("../modules/feedback-page");

module.exports = async (page, scenario, viewport, isReference) => {
  const url = isReference ? scenario.referenceUrl : scenario.url;

  await feedbackPage(
    page,
    url,
    "exchanges/sign-confirmation",
    '[data-test="SignConfirmation"]'
  );
  await page.waitFor(5000);
};
