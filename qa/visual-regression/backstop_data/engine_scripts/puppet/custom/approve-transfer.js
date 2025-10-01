module.exports = async page => {
  await page.waitForSelector('[data-test="approveTransferBtn"]');

  await page.click('[data-test="approveTransferBtn"]');

  await page.waitForSelector('[data-test="CustomModal"]');
};
