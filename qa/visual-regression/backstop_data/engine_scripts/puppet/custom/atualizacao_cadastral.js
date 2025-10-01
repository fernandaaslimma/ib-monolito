module.exports = async (page, scenario) => {
  let agreeButton = await page.$$('[name="authorizationRadio"]');
  let submitButton = await page.$('[data-test="Button"]');

  if (scenario.label == "Atualizacao Cadastral - Formulario") {
    await page.waitFor(8000);
    await page.waitForSelector('[data-test="PageAsModal"]');
  }

  if (scenario.label == "Atualizacao Cadastral - I Agree") {
    await page.waitFor(8000);
    agreeButton = agreeButton[0];
    await agreeButton.click();
    await submitButton.click();
    await page.waitFor(2000);
    await page.type('[data-test="TransactionTokenField"]', "123456");
    await page.waitFor(1000);
    let confirmBtn = await page.$('[data-test="Confirm"]');
    await confirmBtn.click();
    await page.waitFor(2000);
    await page.waitForSelector('[data-test="PageAsModal"]');
  }

  if (scenario.label == "Atualizacao Cadastral - I don't Agree") {
    await page.waitFor(4000);
    agreeButton = agreeButton[1];
    await agreeButton.click();
    await submitButton.click();
    await page.waitFor(2000);
    await page.type('[data-test="TransactionTokenField"]', "123456");
    await page.waitFor(1000);
    let confirmBtn = await page.$('[data-test="Confirm"]');
    await confirmBtn.click();
    await page.waitFor(2000);
    await page.waitForSelector('[data-test="PageAsModal"]');
  }

  if (scenario.label == "Atualizacao Cadastral - Exit") {
    await page.waitForXPath('//span[contains(@width,"20")]', 2000);
    const exitBtn = (await page.$x('//span[contains(@width,"20")]'))[0];
    exitBtn.click();
    await page.waitFor(2000);
    await page.waitForSelector('[data-test="PageAsModal"]');
  }

  if (scenario.label == "Atualizacao Cadastral - All Fields Expanded") {
    let button = await page.$('[data-test="PersonalDetails"]');
    await button.click();
    await page.waitFor(1000);
    await page.waitForSelector('[data-test="PersonalDetails"]');
    button = await page.$('[data-test="CorrespondenceAndContacts"]');
    await button.click();
    await page.waitFor(1000);
    await page.waitForSelector('[data-test="CorrespondenceAndContacts"]');
    button = await page.$('[data-test="OtherNationality"]');
    await button.click();
    await page.waitFor(1000);
    await page.waitForSelector('[data-test="OtherNationality"]');
    button = await page.$('[data-test="PurposeWithInstitution"]');
    await button.click();
    await page.waitFor(1000);
    await page.waitForSelector('[data-test="PurposeWithInstitution"]');
    button = await page.$('[data-test="SectionedFormContent"]');
    await button.click();
    await page.waitFor(1000);
    await page.waitForSelector('[data-test="SectionedFormContent"]');
    button = await page.$('[data-test="RelatedPerson"]');
    await button.click();
    await page.waitFor(1000);
    await page.waitForSelector('[data-test="RelatedPerson"]');
    button = await page.$('[data-test="PolliticallyExposedPerson"]');
    await button.click();
    await page.waitFor(1000);
    await page.waitForSelector('[data-test="PolliticallyExposedPerson"]');
    button = await page.$('[data-test="FinancialInformation"]');
    await button.click();
    await page.waitFor(1000);
    await page.waitForSelector('[data-test="FinancialInformation"]');
  }
};
