import { Given, When, Then } from "@cucumber/cucumber";
import PositionsPage from '../pageobjects/positions.page';
import InvestmentFundPage from '../pageobjects/investment_fund.page';
import { expect } from "chai";

Given("acesso a funcionalidade de fundos de posições", () => {
  PositionsPage.accessFundsPositionMenu();
});

When("vou para versão anterior de fundos de posições", () => {
  PositionsPage.accessPreviousVersion();
});

When("tento acessar um fundo da minha listagem com o tipo de resgate como indefinido", () => {
  PositionsPage.accessIndisponibleFunds();
});

When("seleciono um fundo com prazo de regaste", () => {
  PositionsPage.accessDisponibleFunds();
});

When("seleciono em investir", () => {
  PositionsPage.accessInvestmentFromPositions();
});

When("solicito um resgate de um fundo disponível", () => {
  PositionsPage.accessfundsToRedeem();
  PositionsPage.redeem();

  PositionsPage.insertValueToRedemption('redeem');
  PositionsPage.continueRedemption();
  InvestmentFundPage.chooseAnotherAccount();
  PositionsPage.continueRedemption();

  PositionsPage.mfaProcess();
});

When("tento efetuar um resgate abaixo da movimentação mínima permitida", () => {
  PositionsPage.accessfundsToRedeem();
  PositionsPage.redeem();

  PositionsPage.insertValueToRedemption('redeemMinimum');
});

When("tento efetuar um resgate cujo saldo mínimo para permanência fique abaixo do permitido", () => {
  PositionsPage.accessfundsToRedeem();
  PositionsPage.redeem();

  PositionsPage.insertValueToRedemption('redeemMaximum');
});

When("tento efetuar um resgate maior que o saldo bruto disponível", () => {
  PositionsPage.accessfundsToRedeem();
  PositionsPage.redeem();

  PositionsPage.insertValueToRedemption('redeemAll');
});

Then("visualizo a versão antiga de fundo de posições", () => {
  expect(PositionsPage.valueUrl()).to.have.string('/positions/funds-previous');
});

Then("vejo que é possível retornar para a versão simplificada", () => {
  expect(PositionsPage.existAccessSimplifiedVersion()).to.be.true;
});

Then(
  "visualizo que a quantidade de ativos refletem na listagem de fundos efetivados",
  () => {
    expect(PositionsPage.valueOfActiveTotal()).to.equal(true);
  });

Then("visualizo que a informação do fundo está indisponível", () => {
  expect(PositionsPage.textExplanationAlert()).to.have.string('Não é possível exibir as informações detalhadas deste fundo.');
});

Then("visualizo que é possível ver informações de rendimento", () => {
  expect(PositionsPage.existProfitabilty()).to.be.true;
});

Then("vejo que é possível investir novamente nesse mesmo fundo", () => {
  expect(InvestmentFundPage.isDisabledInvestButton()).to.equal(false);
});

Then(
  "visualizo que é possível acessar a funcionalidade de Fundos de Investimento",
  () => {
    expect(InvestmentFundPage.isDisplayedInvestmentFundsButton()).to.be.true;
  }
);

Then("visualizo o toastr de que a solicitação de resgate foi realizada com sucesso", () => {
  expect(InvestmentFundPage.getToastrFeedback()).to.equal('Solicitação de resgate realizada com sucesso');
})

Then("visualizo uma crítica de valor mínimo a ser resgatado", () => {
  expect(InvestmentFundPage.balanceInsufficient()).to.contains('Valor mín. para resgate: R$');
});

Then("visualizo uma crítica de saldo mínimo para permanência", () => {
  expect(InvestmentFundPage.balanceInsufficient()).to.contains('Saldo mín. para permanência: R$');
});

Then("vejo que não é possível continuar com o resgate", () => {
  expect(PositionsPage.isDisabledContinueRedemption()).to.equal('true');
});

Then("visualizo uma crítica de valor maior que saldo disponível", () => {
  expect(InvestmentFundPage.balanceInsufficient()).to.equal('Valor maior que saldo disponível para resgate');
});
