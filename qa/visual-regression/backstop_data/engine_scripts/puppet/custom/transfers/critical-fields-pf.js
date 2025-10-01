module.exports = async page => {
  await page.waitFor(1000);
  await page.waitForSelector('[data-test="bankBranch"]');

  await page.click('[data-test="bankBranch"]');
  await page.click('[data-test="recipientBankAccount"]');
  await page.click('[data-test="verifyDigit"]');

  await page.waitForSelector('[data-test="Scheduled"]');

  await page.click('[data-test="Scheduled"]');
  await page.waitForSelector('[data-test="transferDate"]');
  await page.type("[data-test=transferDate]", "");

  await page.waitForSelector('[data-test="Increment_50000"]');
  await page.click('[data-test="Increment_50000"]');
  await page.waitForSelector('[data-test="InvalidValue"]', { visible: true });

  await page.waitFor(1000);
};
