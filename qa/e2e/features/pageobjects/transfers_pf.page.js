"use strict";

const moment = require("moment");
const Page = require("./page");
const TransfersPJPage = require("./transfers_pj.page");
const AtualizacaoCadastralPage = require("./atualizacao_cadastral.page");
const constants = require("../../utils/constants");
const timeout = 50000;

let mutableTransferData = {
  amount: "",
  scheduled: "",
  bankBranch: "",
  bankAccount: "",
  verifyDigit: ""
};

class TransfersPFPage extends Page {

  get accessCashAccount() {
    return $('[data-test="Navbar_CashAccounts"]');
  }

  get transferMenu() {
    return $('[data-test="SubnavTab-1"]');
  }

  get firstStep() {
    return $('[id="FillStep"]');
  }

  get secondStep() {
    return $('[id="ConfirmationStep"]');
  }

  get thirdStep() {
    return $('[id="ResumeStep"]');
  }

  get selectAccountMenu() {
    return $('[data-test="selectAccountMenu"]');
  }

  get accountListRadioRadio() {
    return $('[data-test="Account_1"]');
  }

  get accountBalance() {
    return $('[data-test="accountBalance"]');
  }

  get saveAccountButton() {
    return $('[data-test="SaveAccountButton"]');
  }

  get transferAmountInput() {
    return $('[data-test="Ammount"]');
  }

  get fiveThousandsIncrementButton() {
    return $('[data-test="Increment_5000"]');
  }

  get incrementTotalButton() {
    return $('[data-test="IncrementTotal"]');
  }

  get recipientBank() {
    return $('//div[contains(@data-test, "recipientBank")]//input');
  }

  get bankList() {
    return $$("ul > li")[38];
  }

  get bankBranchInput() {
    return $('[data-test="bankBranch"]');
  }

  get recipientBankAccountInput() {
    return $('[data-test="recipientBankAccount"]');
  }

  get verifyDigitInput() {
    return $('[data-test="verifyDigit"]');
  }

  get todayRadio() {
    return $('[data-test="Today"]');
  }

  get schedulingRadio() {
    return $('[data-test="Scheduled"]');
  }

  get schedulingDateInput() {
    return $('[data-test="transferDate"]');
  }

  get disclaimerTransactionPeriod() {
    return $('[data-test="TransactionPeriod"]');
  }

  get alertMessageInvalidDayToTransaction() {
    return $('[data-test="InvalidDay"]');
  }

  get alertMessageUnavailableDate() {
    return $('[data-test="ProvideValidDate"]');
  }

  get alertMessageQuantityNotAvailable() {
    return $('[data-test="InvalidValue"]');
  }

  get continueButton() {
    return $('[data-test="continueButton"]');
  }

  get backButton() {
    return $('[data-test="transferBackButton"]');
  }

  get transferConfirmButton() {
    return $('[data-test="transferConfirmButton"]');
  }

  get successfulImage() {
    return $('[data-test="SuccessIcon"]');
  }

  get resumeTransferDate() {
    return $('[data-test="ScheduleDateResume_0"]');
  }

  get resumeValueTed() {
    return $('[data-test="ValueTED_0"]');
  }

  get resumeAgency() {
    return $('[data-test="DestinationTED_3"]');
  }

  get resumeAccount() {
    return $('[data-test="DestinationTED_4"]');
  }

  get savedAccountButton() {
    return $('[data-test="savedAccounts"]');
  }

  get newAccountButton() {
    return $('[data-test="newAccount"]');
  }

  get switchSaveAccount() {
    return $('[data-test="switchSaveAccount"]');
  }

  get favoredAccountList() {
    return $('[data-test="favoredAccountList"]');
  }

  get changeFavoreAccountLink() {
    return $('[data-test="changeFavored"]');
  }

  get agencyFavoredSelected() {
    return $('[data-test="agencySelected"]');
  }

  get accountFavoredSelected() {
    return $('[data-test="accountSelected"]');
  }

  get firstSavedAccountFromList() {
    return $('[data-test="bankName_BANCO BRADESCO S.A."]');
  }

  get secondSavedAccountFromList() {
    return $('[data-test="bankName_BANCO DO BRASIL S.A."]');
  }

  get accountDataFromList() {
    return $$('[data-test="accountData"]');
  }

  get newTransferButton() {
    return $('[data-test="NewTransfer"]');
  }

  get searchBarFavoredAccountInput() {
    return $('[data-test="searchBarFavored"]');
  }

  get searchBarWarningMessage() {
    return $('[data-test="searchBarWarningMessage"]');
  }

  get ButtonNewAccountOtherRecipient() {
    return $('[data-test="ButtonNewAccountOtherRecipient"]');
  }

  get InputNewAccountFullName() {
    return $('[data-test="InputNewAccountFullName"]');
  }

  get InputNewAccountDocument() {
    return $('[data-test="InputNewAccountDocument"]');
  }

  get tedLimitReached() {
    return $('[data-test="tedLimitReached"]');
  }


  async clickAccessCashAccount() {
    await (await this.accessCashAccount).waitForClickable({ timeout });
    await (await this.accessCashAccount).click();
  }

  async clickAccessTransferMenu() {
    await (await this.transferMenu).waitForClickable({ timeout });
    await (await this.transferMenu).click();
  }

  async searchByAccountRegistered(registeredAccount) {
    await (await this.searchBarFavoredAccountInput).waitForExist({ timeout });
    await (await this.searchBarFavoredAccountInput).setValue(registeredAccount);
  }

  async existsRegisteredAccount() {
    return (await this.searchBarWarningMessage).isExisting();
  }

  async acessarOutraConta() {
    await (await this.ButtonNewAccountOtherRecipient).waitForClickable({ timeout });
    await (await this.ButtonNewAccountOtherRecipient).click();
  }

  async nomeDoNovoContato(name) {
    await (await this.InputNewAccountFullName).waitForExist({ timeout });
    await (await this.InputNewAccountFullName).setValue(name);
  }

  async documentoDoNovoContato(document) {
    await (await this.InputNewAccountDocument).waitForExist({ timeout });
    await (await this.InputNewAccountDocument).setValue(document);
  }

  async existTedLimitReached() {
    return (await this.tedLimitReached).isExisting();
  }

  async chooseAccount() {
    await browser.pause(1000);
    await (await this.selectAccountMenu).waitForClickable({ timeout });
    await (await this.selectAccountMenu).click();
    await (await this.accountListRadioRadio).waitForExist({ timeout });
    const { selector } = await this.accountListRadioRadio;
    browser.jsClick(selector);
    await (await this.saveAccountButton).waitForExist({ timeout });
    browser.jsClick((await this.saveAccountButton.selector));
  }

  async setTransferAmount(value = 1) {
    await this.chooseAccount();
    await this.waitLoadingAsync();
    await (await this.transferAmountInput).waitForExist({ timeout });
    await (await this.transferAmountInput).setValue(value);
  }

  async chooseFiveThousandsIncrement(times = 1) {
    await (await this.fiveThousandsIncrementButton).waitForClickable({ timeout });
    if (times > 1) {
      for (let index = 0; index < times; index++) {
        await browser.pause(500);
        await (await this.fiveThousandsIncrementButton).click();
      }
    } else {
      await (await this.fiveThousandsIncrementButton).click();
      await browser.pause(500);
      mutableTransferData.amount = await (await this.transferAmountInput).getValue();
    }
  }

  async chooseAmountTotalButton() {
    if ((await this.getOnlyAmount()) > 0) {
      await (await this.incrementTotalButton).waitForClickable({ timeout });
      await (await this.incrementTotalButton).click();
    } else {
      throw new Error("Account without balance");
    }
  }

  async chooseNewAccountButton() {
    await (await this.newAccountButton).waitForClickable({ timeout });
    await (await this.newAccountButton).click();
  }

  async createTransferSuccessful(typeTransaction, isToday = true) {
    await this.chooseAccount();
    await this.waitLoadingAsync();

    mutableTransferData.amount = TransfersPJPage.generateAmountTED();
    await (await this.transferAmountInput).setValue(mutableTransferData.amount);

    await browser.keys("Tab");
    await this.waitLoadingAsync();

    if (
      typeTransaction == "cadastrando uma nova conta" &&
      !(typeTransaction == true)
    ) {

      await (await this.newAccountButton).waitForClickable({ timeout });
      await (await this.newAccountButton).click();

      await (await this.recipientBank).waitForClickable({ timeout });
      await (await this.recipientBank).setValue("");
      await (await this.bankList).click();

      mutableTransferData.bankBranch = await TransfersPJPage.generateAgency();
      mutableTransferData.bankAccount = await TransfersPJPage.generateAccount();
      mutableTransferData.verifyDigit = await TransfersPJPage.generateDigit();

      await (await this.bankBranchInput).setValue(mutableTransferData.bankBranch);
      await (await this.recipientBankAccountInput).setValue(mutableTransferData.bankAccount);
      await (await this.verifyDigitInput).setValue(mutableTransferData.verifyDigit);

      await (await this.switchSaveAccount).waitForClickable({ timeout });
      await (await this.switchSaveAccount).click();

    } else if (
      typeTransaction == "selecionando uma conta previamente cadastrada"
    ) {

      await this.accessFavoredAccountList();
      await this.selectARegisteredAccount();
      await browser.pause(1000);
      await browser.keys("Tab");

    } else if (typeTransaction == "para uma conta terceira") {

      await (await this.newAccountButton).waitForClickable({ timeout });
      await (await this.newAccountButton).click();


      await (await this.recipientBank).waitForClickable({ timeout });
      await (await this.recipientBank).setValue("");
      await (await this.bankList).click();

      mutableTransferData.bankBranch = await TransfersPJPage.generateAgency();
      mutableTransferData.bankAccount = await TransfersPJPage.generateAccount();
      mutableTransferData.verifyDigit = await TransfersPJPage.generateDigit();

      await (await this.bankBranchInput).setValue(mutableTransferData.bankBranch);
      await (await this.recipientBankAccountInput).setValue(mutableTransferData.bankAccount);
      await (await this.verifyDigitInput).setValue(mutableTransferData.verifyDigit);

      await (await this.ButtonNewAccountOtherRecipient).waitForClickable({ timeout });
      await (await this.ButtonNewAccountOtherRecipient).click();

      await (await this.InputNewAccountFullName).waitForExist({ timeout });
      await (await this.InputNewAccountFullName).setValue("TED PF Terceiro Teste");

      await (await this.InputNewAccountDocument).setValue(93179818603);
      await browser.pause(1000);
      await browser.keys("Tab");

    } else {

      await (await this.newAccountButton).waitForClickable({ timeout });
      await (await this.newAccountButton).click();

      await (await this.recipientBank).waitForClickable({ timeout });
      await (await this.recipientBank).setValue("");
      await (await this.bankList).click();

      mutableTransferData.bankBranch = 1111;
      mutableTransferData.bankAccount = 22222;
      mutableTransferData.verifyDigit = 3;

      await (await this.bankBranchInput).setValue(mutableTransferData.bankBranch);
      await (await this.recipientBankAccountInput).setValue(mutableTransferData.bankAccount);
      await (await this.verifyDigitInput).setValue(mutableTransferData.verifyDigit);
      await browser.pause(1000);
      await browser.keys("Tab");

    }

    if (!isToday) {
      await (await this.schedulingRadio).waitForClickable({ timeout });
      await (await this.schedulingRadio).click();
      mutableTransferData.scheduled = moment
        .unix(moment().day(7).add(3, "days").unix())
        .format("DD/MM/YYYY");
      await (await this.schedulingDateInput).setValue(mutableTransferData.scheduled);

      await browser.keys("Tab");
      await this.waitLoadingAsync();
    }
    // if (this.disclaimerTransactionPeriod.isExisting()) {
    await browser.keys("Tab");
    await this.reviewData();
    // } else throw new Error("Invalid scheduling to transaction");
  }

  async fillBankData() {
    await (await this.recipientBank).setValue("");
    await (await this.bankList).click();
    mutableTransferData.bankBranch = await TransfersPJPage.generateAgency();
    mutableTransferData.bankAccount = await TransfersPJPage.generateAccount();
    mutableTransferData.verifyDigit = await TransfersPJPage.generateDigit();
    await (await this.bankBranchInput).setValue(mutableTransferData.bankBranch);
    await (await this.recipientBankAccountInput).setValue(mutableTransferData.bankAccount);
    await (await this.verifyDigitInput).setValue(mutableTransferData.verifyDigit);
  }

  async notcreateTransferInvalidDate() {
    await this.accessFavoredAccountList();
    await this.selectARegisteredAccount();

    await (await this.schedulingRadio).waitForClickable({ timeout });
    await (await this.schedulingRadio).click();
    await (await this.schedulingDateInput).setValue(TransfersPJPage.invalidDate());
    await browser.keys("Tab");
  }

  async notcreateTransferWithoutDate() {
    await this.accessFavoredAccountList();
    await this.selectARegisteredAccount();

    await (await this.schedulingRadio).waitForClickable({ timeout });
    await (await this.schedulingRadio).click();
    await (await this.schedulingDateInput).setValue("a");
    await browser.keys("Tab");
  }

  async alterRecipientBankAccount() {
    await (await this.secondStep).waitForEnabled({ timeout });
    await (await this.backButton).click();

    await (await this.firstStep).waitForEnabled({ timeout });
    await (await this.recipientBank).setValue("");
    await (await this.bankList).click();

    mutableTransferData.bankBranch = await TransfersPJPage.generateAgency();
    mutableTransferData.bankAccount = await TransfersPJPage.generateAccount();
    mutableTransferData.verifyDigit = await TransfersPJPage.generateDigit();

    await AtualizacaoCadastralPage.eraseData(this.bankBranchInput);
    await AtualizacaoCadastralPage.eraseData(this.recipientBankAccountInput);
    await AtualizacaoCadastralPage.eraseData(this.verifyDigitInput);

    await this.setBankBranch(mutableTransferData.bankBranch);
    await this.setBankAccount(mutableTransferData.bankAccount);
    await this.setVerifyDigit(mutableTransferData.verifyDigit);

    await browser.pause(1000);
    await browser.keys("Tab");
    await this.reviewData();

    await this.secondStep.waitForEnabled({ timeout });
    await this.confirmTransaction();
  }

  async alterTransferToScheduling() {
    await (await this.secondStep).waitForEnabled({ timeout });
    await (await this.backButton).click();

    await (await this.firstStep).waitForEnabled({ timeout });

    await (await this.recipientBank).setValue("");
    await (await this.bankList).click();
    await this.waitLoadingAsync();
    await (await this.schedulingRadio).waitForClickable({ timeout });
    await (await this.schedulingRadio).click();
    await (await this.schedulingDateInput).setValue(
      moment.unix(moment().day(7).add(3, "days").unix()).format("DD/MM/YYYY")
    );

    await browser.keys("Tab");
    await this.waitLoadingAsync();

    await this.reviewData();

    await (await this.secondStep).waitForEnabled({ timeout });
    await this.confirmTransaction();
  }

  async mfaProcess() {
    await this.flowMFA(constants.pj5Secret);
  }

  async setBankBranch(account) {
    await (await this.bankBranchInput).waitForExist({ timeout });
    await (await this.bankBranchInput).setValue(account);
  }

  async setBankAccount(account) {
    await (await this.recipientBankAccountInput).waitForExist({ timeout });
    await (await this.recipientBankAccountInput).setValue(account);
  }

  async setVerifyDigit(verifyDigit) {
    await (await this.verifyDigitInput).waitForExist({ timeout });
    await (await this.verifyDigitInput).setValue(verifyDigit);
  }

  async chooseTodayTransfer() {
    await (await this.todayRadio).waitForClickable({ timeout });
    await (await this.todayRadio).click();
  }

  async chooseScheduling() {
    await (await this.schedulingRadio).waitForClickable({ timeout });
    await (await this.schedulingRadio).click();
  }

  async setSchedulingDate(date) {
    await (await this.schedulingDateInput).waitForExist({ timeout });
    await (await this.schedulingDateInput).setValue(date);
  }

  async reviewData() {
    await (await this.continueButton).waitForClickable({ timeout });
    await (await this.continueButton).click();
  }

  async reviewDataButtonIsDisabled() {
    await (await this.continueButton).waitForExist({ timeout });
    return (await this.continueButton).getAttribute("disabled");
  }

  async confirmTransaction() {
    await browser.pause(3000);
    await (await this.transferConfirmButton).click();
  }

  async disclaimerTransactionPeriodText() {
    await (await this.disclaimerTransactionPeriod).waitForExist(timeout);
    return (await this.disclaimerTransactionPeriod).getText();
  }

  async disclaimerSchedulingDateText() {
    await (await this.disclaimerSchedulingDate).waitForExist({ timeout });
    return (await this.disclaimerSchedulingDate).getText();
  }

  async alertMessageInvalidDay() {
    await (await this.alertMessageInvalidDayToTransaction).waitForExist({ timeout });
    return (await this.alertMessageInvalidDayToTransaction).getText();
  }

  async alertMessageInvalidDate() {
    await (await this.alertMessageUnavailableDate).waitForExist({ timeout });
    return (await this.alertMessageUnavailableDate).getText();
  }

  async operationSuccessful() {
    await (await this.thirdStep).waitForExist({ timeout });
    if ((await this.thirdStep).isExisting()) return (await this.successfulImage).isExisting();
    else throw new Error("Error in validate operation 'operationSuccessful'");
  }

  async hasScheduled() {
    await (await this.thirdStep).waitForExist({ timeout });
    if ((await this.thirdStep).isExisting())
      return (await this.resumeTransferDate).isExisting();
    else throw new Error("Error in validate operation 'hasScheduled'");
  }

  async resumeOperationValueTed() {
    await (await this.resumeValueTed).waitForExist({ timeout });
    return (await this.resumeValueTed).getText();
  }

  async resumeOperationAgency() {
    await (await this.resumeAgency).waitForExist({ timeout });
    const result = await (await this.resumeAgency).getText();

    return parseInt(result.replace(/[^\d]+/g, ""));
  }

  async resumeOperationAccount() {
    await (await this.resumeAccount).waitForExist({ timeout });
    return (await this.resumeAccount).getText();
  }

  async resultTransfer() {
    return mutableTransferData;
  }

  async getOnlyAmount() {
    await (await this.accountBalance).waitForDisplayed({ timeout });
    let amount  = await (await this.accountBalance).getText();
    amount = amount.split("R$", 2);
    return (amount = amount[amount.length - 1].replace(/[^\d]+/g, ""));
  }

  addingBalanceInsufficient() {
    return this.setTransferAmount(this.getOnlyAmount() + 1);
  }

  async balanceInsufficient() {
    await (await this.alertMessageQuantityNotAvailable).waitForExist({ timeout });
    return (await this.alertMessageQuantityNotAvailable).getText();
  }

  async getAmountInput() {
    await this.waitLoadingAsync();
    const amount = await (await this.transferAmountInput).getValue();
    return amount.replace(/[^\d]+/g, "");
  }

  async accessFavoredAccountList() {
    await this.waitLoadingAsync();
    await (await this.favoredAccountList).waitForClickable({ timeout });
    await (await this.favoredAccountList).click();
  }

  async changeFavoreAccount() {
    await (await this.changeFavoreAccountLink).waitForClickable({ timeout });
    await (await this.changeFavoreAccountLink).click();
  }

  async selectARegisteredAccount() {
    await (await this.firstSavedAccountFromList).waitForExist({ timeout });
    browser.waitAndClick((await this.firstSavedAccountFromList.selector));
    await browser.keys("Tab");
    await browser.keys("Tab");
  }

  async selectAnotherRegisteredAccount() {
    await (await this.secondSavedAccountFromList).waitForExist({ timeout });
    browser.waitAndClick((await this.secondSavedAccountFromList.selector));
  }

  async existRegisteredAccount() {
    await (await this.firstSavedAccountFromList).waitForExist({ timeout });

    for (let index = 0; index < this.accountDataFromList.length; index++) {
      const value = await (await this.accountDataFromList[index]).getText();
      if (
        value.includes(`Agência ${mutableTransferData.bankBranch}`) &&
        value.includes(
          `CC ${mutableTransferData.bankAccount}-${mutableTransferData.verifyDigit}`
        )
      )
        return true;
    }

    return false;
  }

  async agencyFavored() {
    await (await this.agencyFavoredSelected).waitForDisplayed({ timeout });
    return (await this.agencyFavoredSelected).getText();
  }

  async accountFavored() {
    await (await this.accountFavoredSelected).waitForDisplayed({ timeout });
    return (await this.accountFavoredSelected).getText();
  }

  async newTransfer() {
    await (await this.newTransferButton).waitForClickable({ timeout });
    await (await this.newTransferButton).click();
  }
}

module.exports = new TransfersPFPage();
