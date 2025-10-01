const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
const investmentFundPage = require("../pageobjects/investment_fund.page.js");
const transfersPagePF = require("../pageobjects/transfers_pf.page.js");
const suitabilityPage = require("../pageobjects/suitability.page.js");
const atualizacaoCadastralPage = require('../pageobjects/atualizacao_cadastral.page.js');
const constants = require("../../utils/constants");

Given("acesso a funcionalidade de fundos de investimento", () => {
  suitabilityPage.fecharSuitability();
  atualizacaoCadastralPage.fecharAtualizacaoCadastral();
  investmentFundPage.accessInvestmentFund();
  investmentFundPage.chooseInvestmentFund();
});

When("acesso um fundo disponível para aplicação", () => {
  investmentFundPage.accessFundAvailable();
});

// Verificar porque não está fazendo esse passo
When("desejo saber mais sobre fundo de investimentos", () => {
  investmentFundPage.openKnowMore();
});

When("acesso um fundo que possui a rentabilidade sem histórico", () => {
  investmentFundPage.accessFundWithoutHistory();
});

When("acesso um fundo que possui alguma rentabilidade no período entre 6 a 12 meses de constituição", () => {
  investmentFundPage.accessFundLessThen12Months();
});

When("acesso um fundo que possui alguma rentabilidade com constituição acima de 12 meses", () => {
  investmentFundPage.accessFundMoreThan12Months();
});

When("acesso um fundo para aplicar um valor de investimento", () => {
  investmentFundPage.accessFundAvailable();
  investmentFundPage.investFund();
});

When("informo um valor para aplicação do fundo de R$ 500,00", () => {
  investmentFundPage.setInvestmentAmount(50000);
});

When("preencho um valor acima do disponível na minha conta em fundo de investimento", () => {
  investmentFundPage.setInvestmentAmount(1111111111);
});

When("acesso um fundo que nunca fiz uma aplicação", () => {
  investmentFundPage.accessFundNeverApplied();
  investmentFundPage.investFund();
});

When("preencho um valor abaixo da aplicação mínima", () => {
  investmentFundPage.waitFormStep();
  investmentFundPage.setInvestmentAmount(500000);
});

When("seleciono outra conta disponível", () => {
  investmentFundPage.openSelectAccount();
  investmentFundPage.chooseAnotherAccount();
});

When("informo um determinado valor em um fundo que nunca efetuei uma aplicação", () => {
  investmentFundPage.accessFundNeverApplied();
  investmentFundPage.investFund();

  investmentFundPage.setInvestmentAmount(2000000);
  investmentFundPage.continueInvestment(2);
});

When("preencho os dados necessário para realizar um investimento", () => {
  investmentFundPage.accessFundForApplication();
  investmentFundPage.investFund();

  investmentFundPage.setInvestmentAmount(2000000);
  investmentFundPage.continueInvestment(2);

  investmentFundPage.verifyMovementsInProgress();
});

When("preencho os dados necessário para realizar um investimento em um fundo que ja possuo investimento", () => {
  investmentFundPage.accessFundForApplicationAgain();
  investmentFundPage.investFund();

  investmentFundPage.setInvestmentAmount(500000);
  investmentFundPage.continueInvestment(2);

  investmentFundPage.verifyMovementsInProgress();
});

When("realizo um investimento do tipo agressivo", () => {
  investmentFundPage.accessFundForApplicationAgressive();
  investmentFundPage.investFund();

  investmentFundPage.setInvestmentAmount(2000000);
  investmentFundPage.continueInvestment(2);

  investmentFundPage.verifyMovementsInProgress();

  expect(investmentFundPage.existAlertModal()).to.equal("Desenquadramento de perfil");
  investmentFundPage.confirmHasUnsuitableTerm();

  investmentFundPage.confirmAdhesionTermFunds();
  investmentFundPage.continueAcceptAdhesionTermFunds();

  investmentFundPage.flowMFA(constants.pj5Secret);
});

When("acesso novamente o mesmo fundo para efetuar uma aplicação", () => {
  investmentFundPage.goToOverview();
  investmentFundPage.accessInvestmentFund();
  investmentFundPage.chooseInvestmentFund();

  investmentFundPage.accessFundForApplicationAgressive();
  investmentFundPage.investFund();

  investmentFundPage.setInvestmentAmount(2000000);
  investmentFundPage.continueInvestment(2);

  investmentFundPage.verifyMovementsInProgress();
});

When("vou realizar uma aplicação em um fundo do tipo agressivo", () => {
  investmentFundPage.accessFundForApplicationAgressive();
  investmentFundPage.investFund();

  investmentFundPage.setInvestmentAmount(2000000);
  investmentFundPage.continueInvestment(2);
});

When("preencho os dados necessário para realizar um investimento do tipo qualificado", () => {
  investmentFundPage.accessFundQualified();
  investmentFundPage.investFund();

  investmentFundPage.setInvestmentAmount(100);
  investmentFundPage.continueInvestment(2);

  investmentFundPage.verifyMovementsInProgress();
});

When("tento investir em um fundo do tipo qualificado", () => {
  investmentFundPage.accessFundQualified();
});

When("acesso um fundo que está fechado para investimento", () => {
  investmentFundPage.accessFundClosed();
});

Then("visualizo a descrição sobre fundos de investimento", () => {
  expect(investmentFundPage.existExplanationText()).to.be.true;
});

Then("visualizo o disclaimer informando que a rentabilidade só pode ser exibida após 6 meses de constituição", () => {
  expect(investmentFundPage.existProfitabilityBefore6Months()).to.be.true;
  expect(investmentFundPage.existProfitabilityWithLessThan12Months()).to.equal(false);
});

Then("visualizo o disclaimer informando que o produto possui menos de 12 meses de constituição", () => {
  expect(investmentFundPage.existProfitabilityWithLessThan12Months()).to.be.true;
  expect(investmentFundPage.existProfitabilityBefore6Months()).to.equal(false);
});

Then("vejo que não é exibido disclaimer de período de contribuição", () => {
  expect(investmentFundPage.existProfitabilityWithLessThan12Months()).to.equal(false);
  expect(investmentFundPage.existProfitabilityBefore6Months()).to.equal(false);
});

Then("visualizo que não existe a opção para investir", () => {
  expect(investmentFundPage.existInvestButton()).to.equal(false);
});

Then("vejo que não é possível continuar com a aplicação", () => {
  expect(investmentFundPage.isDisabledContinueInvest() || investmentFundPage.isDisabledAcceptAdhesionTermFunds()).to.equal('true')
});

Then("visualizo uma crítica de que meu saldo é insuficiente para essa aplicação", () => {
  expect(investmentFundPage.balanceInsufficient()).to.equal("Seu saldo não é suficiente para essa aplicação");
});

Then("visualizo uma crítica de valor mínimo a ser aplicado", () => {
  expect(transfersPagePF.balanceInsufficient()).to.contains('Valor mínimo: R$');
});

Then("visualizo que minha conta foi alterada", () => {
  expect(investmentFundPage.getAccountNumber()).to.equal(10723052368);
});

Then("visualizo que é necessário realizar o preenchimento do meu Suitability", async () => {
  expect(await investmentFundPage.getTypeOfFundPendencie()).to.equal('Para realizar uma aplicação, é necessário preencher o seu perfil de investidor. Deseja preencher agora?');
});

Then("visualizo que é necessário realizar a atualização dos meus dados cadastrais", () => {
  expect(investmentFundPage.getTypeOfFundPendencie()).to.equal('Para realizar uma aplicação, é necessário estar com os dados cadastrais atualizados. Deseja atualizar agora?');
});

Then("visualizo que é exibido os termos de aceite para efetuar uma aplicação", () => {
  expect(investmentFundPage.existAlertModal()).to.equal("Termos de aceite");
});

Then("visualizo que não é solicitado o termo de aceite", () => {
  expect(investmentFundPage.noTermToBeSigned()).to.equal(false);
});

Then("vejo que é solicitado uma identificação por dois fatores", () => {
  expect(investmentFundPage.existFlowMFA()).to.be.true;
});

Then("visualizo o toastr de que a solicitação de aplicação foi realizada com sucesso", async () => {
  expect(await investmentFundPage.getToastrFeedback()).to.equal("Solicitação de aplicação realizada com sucesso");
});

Then("vejo que é possível ver o resumo da operação", async () => {
  expect(await investmentFundPage.operationSuccessful()).to.be.true;
});

Then("visualizo que é exibido a opção de desenquadramento", () => {
  expect(investmentFundPage.existAlertModal()).to.equal("Desenquadramento de perfil");
})

Then("visualizo que sempre será exibida a informação de desenquadramento de perfil", () => {
  expect(investmentFundPage.existAlertModal()).to.equal("Desenquadramento de perfil");
});

Then("visualizo uma mensagem de alerta indicando que não consigo investir em um fundo do tipo qualificado", () => {
  expect(investmentFundPage.existNotAllowedSubscriptionsMessage()).to.be.true;
});

Then("vejo que a opção de investir está desabilitada", () => {
  expect(investmentFundPage.isDisabledInvestButton()).to.equal("true");
});

Then("visualizo uma mensagem de alerta que o fundo está fechado para novas aplicações", () => {
  expect(investmentFundPage.getTextAlertMessage()).to.equal("Este fundo está fechado para novas aplicações.");
});
