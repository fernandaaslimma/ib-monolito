module.exports = async (page, scenario) => {
  switch (scenario.label) {
    case "[Login] - Summary - Dados da conta corrente em posição consolidada":
      await page.waitForSelector('[data-test="Row_0"]');
      await page.click('[data-test="Row_0"]');
      await page.waitFor(4000);
      break;

    case "[Login] - Summary - Dados de renda fixa em posição consolidada":
      await page.waitForSelector('[data-test="Row_1"]');
      await page.click('[data-test="Row_1"]');
      await page.waitFor(40000);
      break;

    case "[Login] - Summary - Dados de fundos em posição consolidada":
      await page.waitForSelector('[data-test="Row_2"]');
      await page.click('[data-test="Row_2"]');
      await page.waitFor(4000);
      break;

    default:
      throw new Error("Error scenario not found");
  }
};
