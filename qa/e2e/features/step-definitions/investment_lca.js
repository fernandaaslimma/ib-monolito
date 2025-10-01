import {
  Given,
  When,
  Then
} from '@cucumber/cucumber';
import {
  expect
} from 'chai';
import InvestmentLCAPage from "../pageobjects/investment_lca.page";
import InvestmentFundPage from "../pageobjects/investment_fund.page";
import SuitabilityPage from "../pageobjects/suitability.page";
import UpdatingRegistationDataPage from "../pageobjects/atualizacao_cadastral.page";
import {
  pj5Secret
} from "../../utils/constants";

Given("acesso a opção de investir em Renda Fixa", async () => {
  await SuitabilityPage.closeSuitabilityAsync();
  await UpdatingRegistationDataPage.closeUpdatingRegistrationData();
  await InvestmentLCAPage.accessInvestSubButton();
  await InvestmentLCAPage.chooseInvestmentFixIncome();
});

When("invisto em um LCA do tipo Conservador", async () => {
  await InvestmentLCAPage.waitLoadingAsync();
  await InvestmentLCAPage.clickFirstCard();
  await InvestmentLCAPage.clickInvestment();
  await InvestmentLCAPage.clickIncrement5000();
  await InvestmentLCAPage.clickContinueInvestment(2);
  await InvestmentLCAPage.waitLoadingAsync();
  await InvestmentLCAPage.existTransactionInProgress();
  await InvestmentLCAPage.flowMFA(pj5Secret);
});

When("tento investir em LCA com um valor mínimo", async () => {
  await InvestmentLCAPage.clickFirstCard();
  await InvestmentLCAPage.clickInvestment();
  await InvestmentFundPage.setInvestmentAmount();
});

When("tento investir em LCA com um valor máximo", async () => {
  await InvestmentLCAPage.clickFirstCard();
  await InvestmentLCAPage.clickInvestment();
  await InvestmentFundPage.setInvestmentAmount(1000001);
});

When("tento efetuar um investimento em LCA", async () => {
  await InvestmentLCAPage.clickFirstCard();
  await InvestmentLCAPage.clickInvestment();
  await InvestmentLCAPage.waitLoadingAsync();
});

When("tento investir no mesmo LCA em seguida", async () => {
  await InvestmentLCAPage.accessInvestSubButton();
  await InvestmentLCAPage.chooseInvestmentFixIncome();
  await InvestmentLCAPage.waitLoadingAsync();
  await InvestmentLCAPage.clickFirstCard();
  await InvestmentLCAPage.clickInvestment();
  await InvestmentLCAPage.clickIncrement5000();
  await InvestmentLCAPage.clickContinueInvestment(2);
  await InvestmentLCAPage.waitLoadingAsync();
});

Then("visualizo os cards disponíveis para investimento", async () => {
  expect(await InvestmentLCAPage.existFirstCard()).to.be.true;
});

Then("visualizo uma mensagem de valor mínimo a ser aplicado", async () => {
  expect(await InvestmentLCAPage.feedbackInvalidValue()).to.contains('Valor mínimo: R$');
});

Then("visualizo uma mensagem de valor máximo a ser aplicado", async () => {
  expect(await InvestmentLCAPage.feedbackInvalidValue()).to.contains('Valor máximo: R$');
});

Then("visualizo o alerta de que já existe movimentações em andamento para essa aplicação em renda fixa", async () => {
  expect(await InvestmentLCAPage.existTransactionInProgressAtTime()).to.be.true;
});
