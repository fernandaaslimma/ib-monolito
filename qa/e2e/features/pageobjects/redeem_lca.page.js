import Page from "./page";
const timeout = 30000;

class RedeemPage extends Page {
  get positionButton() { return $('[data-test="SubnavTab-1"]') }
  get fixedIncomeOption() { return $('[data-test="ThirdnavTab-0"]') }
  get withdrawLCA() { return $('[data-test="ButtonWithdrawLCA"]') }
  get continueWithdraw() { return $('[data-test="continueToNextStep"]') }
  get prioritizeByDate() { return $('[data-test="Priority_0"]') }
  get prioritizeByIncome() { return $('[data-test="Priority_1"]') }
  get continuePriorityStep() { return $('[data-test="continueToPriorityStep"]') }
  get firstSuggestedValue() { return $('[data-test="0_OptionButton"]') }
  get secondSuggestedValue() { return $('[data-test="1_OptionButton"]') }
  get finishWithdraw() { return $('[data-test="finishWithdraw"]') }
  get alertMessageWithdrawalInProcess() { return $('[data-test="withdrawalInProcess"]') }
  get alertMessageLCA() { return $('[data-test="alertMessageLCA"]') }
  get emptyState() { return $('[data-test="Empty_Position"]') }
  get inputWithDraw() { return $('[data-test="Ammount"]') }
  get imgSuccess() { return $('[data-test="SuccessIcon"]') }
  get limitMessage() { return $('[data-test="title"]') }
  get suggestedValue() { return $('[data-test="0_OptionButton"]') }
  get confirmationButton() { return $('[data-test="continueToConfirmationStep"]') }

  async clickSubMenuIncomeFixed() {
    await this.waitLoadingAsync();
    await browser.pause(1000);
    await (await this.positionButton).waitForClickable({ timeout });
    await this.waitLoadingAsync();
    await browser.pause(1000);
    await (await this.positionButton).click();
    await this.waitLoadingAsync();
  }

  async clickFixedIncomeOption() {
    await this.waitLoadingAsync();
    await (await this.fixedIncomeOption).waitForClickable({ timeout });
    await this.waitLoadingAsync();
    await (await this.fixedIncomeOption).click();
    await browser.pause(1000);
    await this.waitLoadingAsync();
  }

  async clickWithdrawLCAButton() {
    await this.waitLoadingAsync();
    await browser.waitAndClick(await this.withdrawLCA.selector);
  }

  async isDisabledWithdrawLCAButton() {
    await (await this.withdrawLCA).waitForExist({ timeout });
    return (await this.withdrawLCA).getAttribute("disabled");
  }

  async clickContinueWithdraw() {
    await this.waitLoadingAsync();
    await browser.pause(1000);
    await (await this.continueWithdraw).waitForClickable({ timeout });
    await (await this.continueWithdraw).click();
  }

  async clickPrioritizeByDate() {
    await this.waitLoadingAsync();
    await browser.pause(1000);
    await (await this.prioritizeByDate).waitForClickable({ timeout });
    await (await this.prioritizeByDate).click();
  }

  async clickPrioritizeByIncome() {
    await this.waitLoadingAsync();
    await (await this.prioritizeByIncome).waitForClickable({ timeout });
    await (await this.prioritizeByIncome).click();
  }

  async clickContinuePriorityStep() {
    await this.waitLoadingAsync();
    await (await this.continuePriorityStep).waitForClickable({ timeout });
    await (await this.continuePriorityStep).click();
  }

  async getFirstSuggestedValue() {
    await this.waitLoadingAsync();
    await (await this.firstSuggestedValue).waitForClickable({ timeout });
    return (await this.firstSuggestedValue).getText();
  }

  async getSecondSuggestedValue() {
    await (await this.secondSuggestedValue).waitForClickable({ timeout });
    return (await this.secondSuggestedValue).getText();
  }

  async clickFinishWithdraw() {
    await (await this.finishWithdraw).waitForClickable({ timeout });
    await (await this.finishWithdraw).click();
  }

  async getAlertMessageWithdrawalInProcess() {
    await (await this.alertMessageWithdrawalInProcess).waitForExist({ timeout });
    let value = await (await this.alertMessageWithdrawalInProcess).getText();

    while (value == '') {
      value = await (await this.alertMessageWithdrawalInProcess).getText();
    }

    return value;
  }

  async getAlertMessageLCA() {
    await (await this.alertMessageLCA).waitForExist({ timeout });
    return (await this.alertMessageLCA).getText();
  }

  async existsEmptyState() {
    await browser.pause(5000);
    await this.waitLoadingAsync();
    return (await this.emptyState).isExisting();
  }

  async setValueInputWithDraw(value) {
    await (await this.inputWithDraw).waitForExist({ timeout });
    const arrayOfDigits = Array.from(String(value), Number);
    for (let i = 0; i < arrayOfDigits.length; i++) {
      await (await this.inputWithDraw).addValue(arrayOfDigits[i]);
     }
     await browser.pause(1000);
     await this.waitLoadingAsync();
  }

  async verifyImgSucess() {
    await (await this.imgSuccess).waitForExist({ timeout });
    return (await this.imgSuccess).isExisting();
  }

  async getLimitMessage() {
    await (await this.limitMessage).waitForExist({ timeout });
    return (await this.limitMessage).getText();
  }

  async selectSuggestedValue() {
    await (await this.suggestedValue).waitForClickable({ timeout });
    await (await this.suggestedValue).click();
  }

  async confirmationStep() {
    await (await this.confirmationButton).waitForClickable({ timeout });
    await (await this.confirmationButton).click();
  }

}

export default new RedeemPage();
