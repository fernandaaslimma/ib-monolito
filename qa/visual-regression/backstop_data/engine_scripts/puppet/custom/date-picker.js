const filters = require("./filters");

module.exports = async (page, scenario, vp) => {
  let perPeriodRadio = await page.$$('[data-test="PerPeriodRadioBtn"]');
  let selectDatePeriod = await page.$$('[data-test="SelectDatePeriod"]');
  let sinceRadioBtn = await page.$$('[data-test="SinceRadioBtn"]');
  let selectDate = await page.$$('[data-test="SelectDate"]');

  if (vp.label == "mobile") {
    await filters(page);
    perPeriodRadio = perPeriodRadio[0];
    selectDatePeriod = selectDatePeriod[0];
    sinceRadioBtn = sinceRadioBtn[0];
    selectDate = selectDate[0];
    await page.waitFor(5000);
  } else {
    perPeriodRadio = perPeriodRadio[1];
    selectDatePeriod = selectDatePeriod[1];
    sinceRadioBtn = sinceRadioBtn[1];
    selectDate = selectDate[1];
    await page.waitFor(5000);
  }

  if (scenario.label == "Transactions - Filtering per period") {
    await perPeriodRadio.click();
    await selectDatePeriod.click();
    await page.waitFor(5000);
  }

  if (scenario.label == "Transactions - Filtering since") {
    await sinceRadioBtn.click();
    await selectDate.click();
    await page.waitFor(5000);
  }
};
