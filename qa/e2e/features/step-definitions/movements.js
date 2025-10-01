import {
  Given,
  When,
  Then
} from '@cucumber/cucumber';
import {
  expect
} from 'chai';
import loginPage from '../pageobjects/login.page';
import suitabilityPage from '../pageobjects/suitability.page';
import constants from '../../utils/constants';
import movementsPage from '../pageobjects/movements.page';
import investmentFundPage from '../pageobjects/investment_fund.page';

Given("que estou logado no Internet Banking com um usuário que não possui nenhum investimento", () => {
  loginPage.open(constants.bbmUrl);
  loginPage.login("fundoinvestimentosuitability");
  loginPage.submit();

  suitabilityPage.fecharSuitability();
});

Given("efetuo uma aplicação em fundos de investimento", () => {
  investmentFundPage.accessInvestmentFund();
  investmentFundPage.chooseInvestmentFund();

  investmentFundPage.accessFundForApplication();
  investmentFundPage.investFund();

  investmentFundPage.setInvestmentAmount(2000000);
  investmentFundPage.continueInvestment(2);

  movementsPage.autorizationMFA();

  investmentFundPage.goToOverview();

  movementsPage.waitUpdated();

});

When("acesso as minha movimentações em andamento", () => {
  movementsPage.accessMovementsInProgress();
});

Then("visualizo todas as minhas movimentações em andamento", () => {
  expect(movementsPage.existOneOrMoreMovements()).to.be.true;
});

Then("visualizo que a aplicação que eu realizei está sendo exibida", () => {
  expect(movementsPage.showingLastMovements()).to.be.true;
});

Then("visualizo que a informação de movimentações não é exibida", () => {
  expect(movementsPage.existMovementsInProgress()).to.equal(false);
});
