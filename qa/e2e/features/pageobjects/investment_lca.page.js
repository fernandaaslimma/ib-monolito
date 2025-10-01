import Page from "./page";
const timeout = 30000;

class InvestmentLCAPage extends Page {
  get firstCard() { return $('[data-test="LCA"]') }
  get investmentFixedIncomeButton() { return $('[data-test="investmentFixedIncomeButton"]') }
  get investFixedIncome() { return $('[data-test="investFixedIncome"]') }
  get increment5000() { return $('[data-test="Increment_5000"]') }
  get continueInvestButton() { return $('[data-test="continueInvestButton"]') }
  get successIcon() { return $('[data-test="SuccessIcon"]') }
  get investSubButton() { return $('[data-test="SubnavTab-3"]') }
  get invalidValue() { return $('[data-test="InvalidValue"]') }
  get suitabilityPendencie() { return $('[data-test="typeOfFundPendencie"]') }
  get modalTransactionInMovement() { return $('[data-test="transactionInMovement"]') }
  get buttonYesFromModalTransactionInMovement() { return  $('/html/body/div[4]/div[2]/div/div[2]/div[2]/div') }

  async accessInvestSubButton() {
    await (await this.investSubButton).waitForClickable({ timeout });
    await (await this.investSubButton).click();
  }

  async chooseInvestmentFixIncome() {
    await (await this.investmentFixedIncomeButton).waitForClickable({ timeout });
    await (await this.investmentFixedIncomeButton).click();
  }

  async existFirstCard() {
    await (await this.firstCard).waitForExist({ timeout });
    return (await this.firstCard).isExisting();
  }

  async clickFirstCard() {
    await (await this.firstCard).waitForClickable({ timeout });
    await (await this.firstCard).click();
  }

  async clickInvestment() {
    await (await this.investFixedIncome).waitForClickable({ timeout });
    await (await this.investFixedIncome).click();
  }

  async clickIncrement5000() {
    await (await this.increment5000).waitForClickable({ timeout });
    await (await this.increment5000).click();
  }

  async clickContinueInvestment(time = 1) {
    for (let index = 0; index < time; index++) {
      await (await this.continueInvestButton).waitForClickable({ timeout });
      await (await this.continueInvestButton).click();
    }
  }

  async existTransactionInProgress() {
    try {
      if (await (await this.modalTransactionInMovement).isExisting() == true) {
        await (await this.buttonYesFromModalTransactionInMovement).waitForExist({ timeout });
        await (await this.buttonYesFromModalTransactionInMovement).click();
      }
    } catch (error) {
      return;
    }
  }

  async existSuccessIcon() {
    await (await this.successIcon).waitForExist({ timeout });
    return (await this.successIcon).isExisting();
  }

  async feedbackInvalidValue() {
    await (await this.invalidValue).waitForDisplayed({ timeout });
    return (await this.invalidValue).getText();
  }

  async existTransactionInProgressAtTime() {
    return (await this.suitabilityPendencie).isExisting();
  }

}

export default new InvestmentLCAPage();
