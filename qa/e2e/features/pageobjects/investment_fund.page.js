"use strict";

const Page = require("./page");
const timeout = 30000;

class InvestmentFundPage extends Page {

  get formStep () { return $('[id="FormStep"]') }
  get detailsStep () { return $('[id="DetailsStep"]') }
  get ResumeStep () { return $('[id="ResumeStep"]') }
  get menuInvestmentProducts () { return $('[data-test="SubnavTab-3"]') }
  get investButton () { return $('[data-test="investFund"]') }
  get investmentFundsButton () { return $('[data-test="investmentFundsButton"]') }
  get continueInvestmentButton () { return $('[data-test="continueInvestButton"]') }
  get yesUnsuitableButton () { return $$('[data-test="yesButton"]')[2] }
  get continueAcceptAdhesionTermFundsButton () { return $('[data-test="buttonAcceptAdhesionTermFunds"]') }
  get knowMoreButton () { return $('[data-test="knowMoreButton"]') }
  get explanationText () { return $('[data-test="explanation"]') }
  get fundAvailable () { return $('[data-test="nameFund_BOCOM BBM CORPORATE CREDIT 60 FIC FIM CP"]') }
  get fundLessThan6Months () { return $('[data-test="nameFund_BOCOM BBM CHINA FIC FIA IE"]') }
  get fundLessThan12Months (){ return $('[data-test="nameFund_GÁVEA MACRO FEEDER I FIC FIM"]') }
  get fundMoreThan12Months () { return $('[data-test="nameFund_BOCOM BBM CORPORATE CREDIT HIGH YIELD FIC FIM CP"]') }
  get fundNeverApplied () { return $('[data-test="nameFund_Fundo Sem posicao"]') }
  get fundApplied () { return $('[data-test="nameFund_BAHIA AM FI RENDA FIXA REFERENCIADO DI"]') }
  get fundAppliedAgain () { return $('[data-test="nameFund_KAPITALO KAPPA FEEDER I FIC MULTIMERCADO"]') }
  get fundAppliedAgressive () { return $('[data-test="nameFund_BAHIA AM VALUATION FIC AÇÕES"]') }
  get profitabilityBefore6Months () { return $('[data-test="profitabilityBefore6Months"]') }
  get profitabilityWithLessThan12Months () { return $('[data-test="profitabilityWithLessThan12Months"]') }
  get selectAccountButton () { return $('[data-test="selectAccountButton"]') }
  get hideableValueButton () { return $('[data-test="hideableValueIcon"]') }
  get accountNumber () { return $('[data-test="accountNumber"]') }
  get saveChangesAccount () { return $('[data-test="saveAccount"]') }
  get alertMessageBalanceNotAvailable () { return $('[data-test="InvalidValue"]') }
  get typeOfFundPendencie() { return $('/html/body/div[3]/div[2]/div/div[1]/span') }
  get investmentAmountInput () { return $('[data-test="Ammount"]') }
  get alertModal () { return $('[data-test="alertModal"]') }
  get confirmAdhesionTermFundsCheckbox() { return $('[data-test="checkboxAcceptAdhesionTermFunds"]')}
  get successfulImage () { return $('[data-test="SuccessIcon"]') }
  get concludeButton () { return $('[data-test="concludeButton"]') }
  get productQualified () { return $('//div[contains(text(), "Produto para investidor qualificado")]') }
  get productClosed () { return $('[data-test="productClosed"]') }
  get notAllowedSubscriptionsMessage () { return $('[data-test="notAllowedSubscriptionsMessage"]') }
  get alertMessage () { return $('[data-test="alertMessage"]') }
  get hasMovementInProgress () { return $('[data-test="hasMovementInProgress"]') }
  get yesMovementInProgressButton () { return $$('[data-test="yesButton"]')[1] }

  waitFormStep() {
    this.formStep.waitForEnabled({ timeout });
  }

  accessInvestmentFund() {
    this.menuInvestmentProducts.waitForClickable({ timeout });
    return this.menuInvestmentProducts.click();
  }

  investFund() {
    this.detailsStep.waitForEnabled({ timeout });
    this.investButton.waitForClickable({ timeout });
    return this.investButton.click();
  }

  existInvestButton() {
    return this.investButton.isExisting();
  }

  isDisabledInvestButton() {
    this.investButton.waitForExist({ timeout });
    return this.investButton.getAttribute('disabled') || false;
  }

  continueInvestment(times = 1) {
    this.continueInvestmentButton.waitForClickable({ timeout });
    for (let index = 0; index < times; index++) {
      this.continueInvestmentButton.waitForClickable({ timeout });
      this.continueInvestmentButton.click();
    }
  }

  verifyMovementsInProgress() {
    try {
      if (this.hasMovementInProgress.isExisting()) {
        this.yesMovementInProgressButton.waitForClickable({ timeout });
        this.yesMovementInProgressButton.click();
      }
    } catch (error) {
      return;
    }
  }

  confirmHasUnsuitableTerm() {
    this.yesUnsuitableButton.waitForClickable({ timeout });
    return this.yesUnsuitableButton.click();
  }

  isDisabledContinueInvest() {
    this.continueInvestmentButton.waitForExist({ timeout });
    return this.continueInvestmentButton.getAttribute('disabled');
  }

  continueAcceptAdhesionTermFunds() {
    this.continueAcceptAdhesionTermFundsButton.waitForClickable();
    this.continueAcceptAdhesionTermFundsButton.click();
  }

  isDisabledAcceptAdhesionTermFunds(){
    this.continueAcceptAdhesionTermFundsButton.waitForExist({ timeout });
    return this.continueAcceptAdhesionTermFundsButton.getAttribute('disabled');
  }

  chooseInvestmentFund() {
    this.investmentFundsButton.waitForClickable({ timeout });
    return this.investmentFundsButton.click();
  }

  openKnowMore() {
    this.knowMoreButton.waitForClickable({ timeout });
    return this.knowMoreButton.click();
  }

  existExplanationText() {
    return this.explanationText.isExisting();
  }

  accessFundAvailable() {
    this.fundAvailable.waitForClickable({ timeout });
    return this.fundAvailable.click();
  }

  accessFundWithoutHistory() {
    this.fundLessThan6Months.waitForClickable({ timeout });
    return this.fundLessThan6Months.click();
  }

  accessFundLessThen12Months() {
    this.fundLessThan12Months.waitForClickable({ timeout });
    return this.fundLessThan12Months.click();
  }

  accessFundMoreThan12Months() {
    this.fundMoreThan12Months.waitForClickable({ timeout });
    return this.fundMoreThan12Months.click();
  }

  accessFundNeverApplied() {
    this.fundNeverApplied.waitForClickable({ timeout });
    return this.fundNeverApplied.click();
  }

  accessFundForApplication() {
    this.fundApplied.waitForClickable({ timeout });
    return this.fundApplied.click();
  }

  accessFundForApplicationAgain() {
    this.fundAppliedAgain.waitForClickable({ timeout });
    return this.fundAppliedAgain.click();
  }

  accessFundForApplicationAgressive() {
    this.fundAppliedAgressive.waitForClickable({ timeout });
    return this.fundAppliedAgressive.click()
  }

  accessFundQualified() {
    this.productQualified.waitForClickable({ timeout });
    this.productQualified.click();
  }

  accessFundClosed() {
    this.productClosed.waitForClickable({ timeout });
    this.productClosed.click();
  }

  existProfitabilityBefore6Months() {
    return this.profitabilityBefore6Months.isExisting();
  }

  existProfitabilityWithLessThan12Months() {
    return this.profitabilityWithLessThan12Months.isExisting();
  }

  openSelectAccount(){
    this.formStep.waitForEnabled({ timeout });
    this.selectAccountButton.waitForClickable({ timeout });
    return this.selectAccountButton.click();
  }

  chooseAnotherAccount(position = 1) {
    const account = $(`[data-test="Account_${position}"]`);
    account.waitForClickable({ timeout });
    account.click();
    return this.saveChangesAccount.click();
  }

  showHiddenValue(){
    this.hideableValueButton.waitForClickable({ timeout });
    return this.hideableValueButton.click();
  }

  getAccountNumber() {
    this.accountNumber.waitForExist({ timeout });
    const value = this.accountNumber.getText();
    return parseInt(value.replace(/[^\d]+/g, ""));
  }

  balanceInsufficient() {
    this.alertMessageBalanceNotAvailable.waitForExist();
    return this.alertMessageBalanceNotAvailable.getText();
  }

  async setInvestmentAmount(value = 1) {
    await (await this.investmentAmountInput).waitForExist({ timeout });

    const arrayOfDigits = Array.from(String(value), Number);

    for (let i = 0; i < arrayOfDigits.length; i++) {
      await (await this.investmentAmountInput).addValue(arrayOfDigits[i]);
     }
  }

  existAlertModal() {
    this.alertModal.waitForDisplayed({ timeout });
    return this.alertModal.getText();
  }

  noTermToBeSigned() {
    return this.alertModal.isExisting();
  }

  confirmAdhesionTermFunds() {
    this.confirmAdhesionTermFundsCheckbox.waitForClickable({ timeout });
    return this.confirmAdhesionTermFundsCheckbox.click();
  }

  async operationSuccessful() {
    await (await this.ResumeStep).waitForExist({ timeout });
    if ((await this.ResumeStep).isExisting()) return (await this.successfulImage).isExisting();
    else throw new Error("Error in validate operation 'operationSuccessful'");
  }

  goToOverview() {
    this.concludeButton.waitForClickable({ timeout });
    return this.concludeButton.click();
  }

  async getTypeOfFundPendencie() {
    await browser.pause(1000);
    await (await this.typeOfFundPendencie).waitForExist({ timeout });
    return (await this.typeOfFundPendencie).getText();
  }

  existNotAllowedSubscriptionsMessage() {
    this.detailsStep.waitForEnabled({ timeout });
    return this.notAllowedSubscriptionsMessage.isExisting();
  }

  getTextAlertMessage() {
    this.alertMessage.waitForExist({ timeout });
    return this.alertMessage.getText();
  }

  isDisplayedInvestmentFundsButton(){
    return this.investmentFundsButton.isDisplayed();
  }
}
module.exports = new InvestmentFundPage();
