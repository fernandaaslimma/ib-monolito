import Page from './page';
import InvestmentFundPage from '../pageobjects/investment_fund.page';
import { pj5Secret } from '../../utils/constants';
const timeout = 30000;

class PositionsPage extends Page {
  get positionMenuButton() { return $('//span[contains(text(),"Posições")]') }
  get fundMenuButton() { return $('//li[contains(text(),"Fundos")]') }
  get LinkToPreviousButton() { return $('[data-test="LinkToPrevious"]') }
  get LinkToSimplifiedButton() { return $('[data-test="LinkToSimplified"]') }
  get numberOfActiveTotal() { return $('[data-test="activeTotal"]') }
  get listFunds() { return $('[data-test="listFunds"]') }
  get withoutRentabilityRedemption() { return $('//*[contains(text(), "---")]') }
  get rentabilityRedemption() { return $('//*[contains(text(), "D +")]') }
  get explanationAlert() { return $('[data-test="explanation"]') }
  get positionInvestmentButton() { return $('[data-test="positionInvestButton"]') }
  get fundsToRedeem() { return $('[data-test="nameFund_BAHIA AM MARAÚ FEEDER BOCOM BBM FIC MULTIMERCADO"]') }
  get redeemButton() { return $('[data-test="fundsRedeemButton"]') }
  get continueRedemptionButton() { return $('[data-test="continueRedeemButton"]') }
  get minimumMovementValue() { return $('[data-test="redeemGeneralInfoCard"]').$('[data-test="value_0"]') }
  get minimumBalance() { return $('[data-test="redeemGeneralInfoCard"]').$('[data-test="value_1"]') }
  get grossBalance() { return $('[data-test="redeemGeneralInfoCard"]').$('[data-test="value_2"]') }
  get avaiableValue() { return $('[data-test="avaiableForRedemption"]').$('[data-test="value"]') }
  get profitabilty() { return $('[data-test="title_Rendimento liquido"]') }

  accessFundsPositionMenu() {
    this.positionMenuButton.waitForClickable({ timeout });
    this.positionMenuButton.click();
    this.fundMenuButton.click();
  }

  accessPreviousVersion() {
    this.LinkToPreviousButton.waitForClickable({ timeout });
    this.LinkToPreviousButton.click();
  }

  existAccessSimplifiedVersion() {
    this.waitLoading();
    return this.LinkToSimplifiedButton.isExisting();
  }

  valueOfActiveTotal() {
    this.numberOfActiveTotal.waitForExist({ timeout });
    const value = this.numberOfActiveTotal.getText();
    const valueConverted = this.convertStringToInteger(value);

    this.listFunds.waitForExist({ timeout });
    const valueList = browser.jsChildElementCount(this.listFunds.selector);

    // -1 em valueList porque é injetado um elemento na listagem dos fundos pelo front.
    return valueConverted === valueList -1 ? true : false;
  }

  accessIndisponibleFunds() {
    this.withoutRentabilityRedemption.waitForClickable({ timeout });
    this.withoutRentabilityRedemption.click();
  }

  accessDisponibleFunds() {
    this.rentabilityRedemption.waitForClickable({ timeout});
    this.rentabilityRedemption.click();
  }

  textExplanationAlert() {
    this.explanationAlert.waitForExist({ timeout });
    return this.explanationAlert.getText();
  }

  accessInvestmentFromPositions() {
    this.positionInvestmentButton.waitForClickable({ timeout });
    this.positionInvestmentButton.click();
  }

  accessfundsToRedeem() {
    this.fundsToRedeem.waitForClickable({ timeout });
    this.fundsToRedeem.click();
  }

  redeem() {
    this.redeemButton.waitForEnabled({ timeout });
    this.redeemButton.scrollIntoView();
    this.redeemButton.click();
  }

  existProfitabilty() {
    return this.profitabilty.isDisplayed();
  }

  insertValueToRedemption(type) {
    let valueConverted;
    let minimumMovementValue;
    let grossValue
    let minimumBalance;
    let avaiableForRedemption;
    switch (type) {
      case 'redeem':
        minimumMovementValue =  this.minimumMovementValue.getText();
        valueConverted = this.convertStringToInteger(minimumMovementValue);
        InvestmentFundPage.setInvestmentAmount(valueConverted);
        break;

      case 'redeemMinimum':
        minimumMovementValue =  this.minimumMovementValue.getText();
        valueConverted = this.convertStringToInteger(minimumMovementValue) - 1;
        InvestmentFundPage.setInvestmentAmount(valueConverted);
        break;

      case 'redeemMaximum':
        grossValue =  this.grossBalance.getText();
        minimumBalance = this.minimumBalance.getText();
        valueConverted = this.convertStringToInteger(grossValue) - this.convertStringToInteger( minimumBalance);
        InvestmentFundPage.setInvestmentAmount(valueConverted);
        break;

      case 'redeemAll':
        avaiableForRedemption = this.avaiableValue.getText();
        valueConverted = this.convertStringToInteger(avaiableForRedemption) + 1;
        InvestmentFundPage.setInvestmentAmount(valueConverted);
        break;

      default:
        throw new Error('Type do not exist in "insertValueToRedemption"')
    }
  }

  continueRedemption() {
    this.continueRedemptionButton.waitForClickable({ timeout });
    this.continueRedemptionButton.click();
  }

  isDisabledContinueRedemption() {
    this.continueRedemptionButton.waitForExist({timeout});
    return this.continueRedemptionButton.getAttribute('disabled');
  }

  mfaProcess() {
    this.flowMFA(pj5Secret);
  }
}

export default new PositionsPage();
