module.exports = async (page, scenario) => {
  await page.waitFor(20000);
  let btnNewTransfer = await page.$$('[data-test="Button"]');
  btnNewTransfer = btnNewTransfer[1];
  await btnNewTransfer.click();
  await page.waitFor(2000);
  await page.waitForSelector('[data-test="newTransferBox"]');
  await page.waitFor(10000);
  let recipientBank = await page.$$("ul > li");

  // await page.type('[data-test=transferDate]', '12102019')

  await page.type("[data-test=transferAmount]", "100.000.000.000,00");

  await page.click("[data-test=recipientBank]");
  recipientBank = recipientBank[16];
  await recipientBank.click();

  await page.type("[data-test=bankBranch]", "123");

  await page.type("[data-test=recipientBankAccount]", "123");

  await page.type("[data-test=originAccount]", "107 2 304020-3");

  if (scenario.label == "Transfers - Confirmation Modal") {
    await page.click("[data-test='submitTransferBtn']");
  }

  if (scenario.label == "Transfers - Insuficients Funds") {
    await page.click("[data-test='submitTransferBtn']");
    await page.waitFor(5000);
    await page.click("[data-test='Confirm']");
  }

  if (scenario.label == "Transfers - Token Modal") {
    await page.click("[data-test='submitTransferBtn']");
    await page.waitFor(4000);
    await page.click("[data-test='Confirm']");
    await page.waitFor(4000);
    await page.click("[data-test='Confirm']");
  }
  await page.waitForSelector(scenario.selectors);
};
