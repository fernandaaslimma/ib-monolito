import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "chai";
import redeemPage from "../pageobjects/redeem_lca.page";
import suitabilityPage from "../pageobjects/suitability.page";
import { pj5Secret } from "../../utils/constants";

Given("que vou realizar resgate de LCA", async () => {
  await suitabilityPage.fecharSuitability();
  await redeemPage.clickSubMenuIncomeFixed();
  await redeemPage.clickFixedIncomeOption();
  await redeemPage.clickWithdrawLCAButton();
});

When("informo o valor a ser resgatado", async () => {
  await redeemPage.setValueInputWithDraw("221148");
  await redeemPage.clickContinueWithdraw();
  await redeemPage.clickPrioritizeByDate();
  await redeemPage.clickContinuePriorityStep();
});

When("realizo o resgate", async () => {
  await redeemPage.selectSuggestedValue();
  await redeemPage.confirmationStep();
  await redeemPage.clickContinuePriorityStep();
  await redeemPage.clickFinishWithdraw();
  await redeemPage.flowMFA(pj5Secret);
});

When("informo um determinado valor", async () => {
  await redeemPage.setValueInputWithDraw("500000");
  await redeemPage.clickContinueWithdraw();
});

When(/escolho a priorização por menor ([^"]*)/, async (typePrioritize) => {
  typePrioritize == "data de vencimento"
    ? await redeemPage.clickPrioritizeByDate()
    : await redeemPage.clickPrioritizeByIncome();

  await redeemPage.clickContinuePriorityStep();
});

When("acesso os meus rendimentos de renda fixa", async () => {
  await suitabilityPage.fecharSuitability();
  await redeemPage.clickSubMenuIncomeFixed();
  await redeemPage.clickFixedIncomeOption();
});

When("informo um valor acima do limite de resgate", async () => {
  await redeemPage.setValueInputWithDraw("30100000");
  await redeemPage.clickContinueWithdraw();
});

Then("visualizo que realizei o resgate do LCA", async () => {
  expect(await redeemPage.verifyImgSucess()).to.be.true;
  expect(await redeemPage.getAlertMessageWithdrawalInProcess()).to.equal(
    "Seu resgate está em processamento"
  );
});

Then(
  "visualizo as opções de resgate disponíveis por menor data de vencimento",
  async () => {
    expect(await redeemPage.getFirstSuggestedValue()).to.equal("R$ 6.634,46");
    expect(await redeemPage.getSecondSuggestedValue()).to.equal("R$ 4.422,97");
  }
);

Then("visualizo as opções de resgate disponíveis por menor rendimento", async () => {
  expect(await redeemPage.getFirstSuggestedValue()).to.equal("R$ 6.634,46");
  expect(await redeemPage.getSecondSuggestedValue()).to.equal("R$ 4.422,97");
});

Then(
  "visualizo a mensagem que não há LCA disponível para resgate no momento",
  async () => {
    expect(await redeemPage.existsEmptyState()).to.be.true;
    expect(await redeemPage.getAlertMessageLCA()).to.equal(
      "Você não possui LCA com liquidez para efetuar o resgate"
    );
    expect(await redeemPage.isDisabledWithdrawLCAButton()).to.equal("true");
  }
);

Then("visualizo uma mensagem de notificação de que o valor está acima do limite de resgate", async () => {
  expect(await redeemPage.getLimitMessage()).to.equal("Limite atingido");
});
