import { When, Then } from '@cucumber/cucumber';
import OverviewPage from "../pageobjects/overview.page";
import { expect } from "chai";

When("seleciono a opção renda fixa a partir do gráfico de visão geral", () => {
  OverviewPage.selectFixedIncome();
  OverviewPage.clickShowButtonDetailed();
});

When("seleciono a opção renda variável a partir do gráfico de visão geral", () => {
  OverviewPage.selectVariableIncome();
  OverviewPage.clickShowButtonDetailed();
});

When("seleciono a opção fundo de investimento a partir do gráfico de visão geral", () => {
  OverviewPage.selectFundsIncome();
  OverviewPage.clickShowButtonDetailed();
});

When("acesso a classe de ativos a partir do gráfico de visão geral", () => {
  OverviewPage.rightArrow();
});

When("acesso a opção movimentações a partir do gráfico de visão geral", () => {
  OverviewPage.accessTabMovements();
});

When("filtro por {string}", filter => {
  OverviewPage.typeFilter(filter);
});

When("decido ver mais", () => {
  OverviewPage.saveFirstCards();
  OverviewPage.clickViewMore();
});

Then("visualizo o meu gráfico de investimento", () => {
  expect(OverviewPage.existProductChart()).to.be.true;
});

Then("visualizo as posições investidas em renda fixa", () => {
  expect(OverviewPage.valueUrl()).to.contains('/positions/fixed-income');
});

Then("visualizo as posições investidas em renda variável", () => {
  expect(OverviewPage.valueUrl()).to.contains('/positions/equities');
});

Then("visualizo as posições do fundo de investimento", () => {
  expect(OverviewPage.valueUrl()).to.contains('/positions/funds');
});

Then("visualizo as classes a qual eu possuo investimento", () => {
  expect(OverviewPage.existAssetsChart()).to.be.true;
});

Then("visualizo que possuo investimentos", () => {
  expect(OverviewPage.existAnInvestment()).to.be.true;
});

Then("visualizo a movimentação desejada", () => {
  expect(OverviewPage.existPeriodResearched()).to.equal("Ter, 02 de Jun 2020");
});

Then("visualizo que existe mais movimentações sendo exibida", () => {
  expect(OverviewPage.verifyQuantityCards()).to.be.true;
});

Then("visualizo apenas as movimentações de renda fixa", () => {
  expect(OverviewPage.verifyQuantityFixedIncomeByFilter()).to.be.true;
});

Then("visualizo apenas as movimentações de renda variável", () => {
  expect(OverviewPage.verifyQuantityVariableIncomeByFilter()).to.be.true;
});

Then("visualizo que nenhum resultado foi encontrado", () => {
  expect(OverviewPage.existEmptyState()).to.be.true;
});

Then("visualizo que não possuo investimento no tipo de produto selecionado", () => {
  expect(OverviewPage.existTextEmptyState()).to.equal('Você não possui nenhuma movimentação nesse tipo de ativo em sua conta.');
});
