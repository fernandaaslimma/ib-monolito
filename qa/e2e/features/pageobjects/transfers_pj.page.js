"use strict";
const Page = require("./page");
const timeout = 30000;
const moment = require("moment");
const totpGenerator = require("totp-generator");
const constants = require("../../utils/constants");
let dateUnix = +moment().unix();
let dateInvalid;
let mutableTransferData = {
  transferDate: "",
  amount: "",
  recipient: "REINALDO Montenegro",
  recipientBank: "747 Ajinomoto 3090",
  bankBranch: "",
  taxId: "647.262.642-14",
  bankAccount: "",
  accountDigit: "",
  originAccount: "",
};
class TransfersPage extends Page {
  get buttonTransfers() { return $('[data-test="SubnavTab-0"]') }
  get buttonNewTransfer() { return $('[data-test="btnNewTrans"]') }
  get buttonExit() { return $('[data-test="Sair"]') }
  get modalTranfersBox() { return $('[data-test="newTransferBox"]') }
  get modalTransfer() { return $('[data-test="CustomModal"]') }
  get originAccount() { return $('[data-test="originAccount"]') }
  get transferDate() { return $('[data-test="transferDate"]') }
  get transferAmount() { return $('[data-test="transferAmount"]') }
  get recipientBank() { return $('[data-test="recipientBank"]') }
  get bankList() { return $$("ul > li") }
  get bankBranch() { return $('[data-test="bankBranch"]') }
  get recipientBankAccount() { return $('[data-test="recipientBankAccount"]') }
  get bankAccountDigit() { return $('[data-test="Input"]') }
  get buttonConfirmScheduling() { return $('[data-test="Confirm"]') }
  get buttonSubmitTransfer() { return $('[data-test="submitTransferBtn"]') }
  get buttonReviewDate() { return $('[data-test="ScheduleSuggest"]') }
  get transactionTokenField() { return $('[data-test="TransactionTokenField"]') }
  get buttonConfirmTransaction() { return $('[data-test="Confirm"]') }
  get filterMenu() { return $('[data-test="DashboardCategoryFilter"]') }
  get buttonApply() { return $$('[data-test="Button"]') }
  get modalConfirmInsufficientFunds() { return $('[data-test="transferInsufficientFundsModal"]') }
  get verifyTableExist() { return $("//tr[starts-with(@data-test,'Row')]") }
  get butttonAgendOtherDate() { return $('[data-test="ScheduleSuggestAnotherDate"]') }
  get buttonCloseToastr() { return $('[data-test="ToastrClose"]') }
  get originAccountBalance() { return $('[data-test="originAccountBalance"]') }
  get buttonCancel() { return $('[data-test="Cancel"]') }
  get tedCreated() {
    if (mutableTransferData.transferDate || mutableTransferData.amount) {
      return `//span[contains(text(), '${mutableTransferData.transferDate}')]/../..//span[contains(text(), '${mutableTransferData.amount}')]/../..`;
    } else {
      return `//span[contains(text(), '${moment().format(
        "DD/MM/YYYY"
      )}')]/../..`;
    }
  }
  get buttonSwitchNewAccontDisabled() { return $('[data-test="switchSaveAccount_false"]') }
  get buttonSwitchNewAccont() { return $('[data-test="switchNewAccount"]') }
  get buttonAppove() { return $('[data-test="Approve"]') }
  get optionFavoredAccounts() { return $('[data-test="favoredAccounts"]') }
  get optionTargetAccount() { return $('[data-test="targetAccount"]') }
  get invalidCNPJ() { return $('[data-test="recipientCnpjMsgError"]') }
  get recipientCNPJ() { return $('[data-test="recipientCnpj"]') }
  get favoredListButton() { return $('[data-test="tab_Lista de favorecidos"]') }
  get deleteButton() { return $('[data-test="trashcan"]') }
  get confirmDeleteButton() { return $('[data-test="delete"]') }
  get noRegisteredFavored() { return $('[data-test="noRecordFavoredListTitle"]') }
  get originAccountWithFavored() {  return $('[data-test="option_1"]') }
  get originAccountWithoutFavored() { return $('[data-test="option_3"]') }

  async clickSwitchNewAccount() {
    await (await this.buttonSwitchNewAccont).waitForClickable({ timeout });
    await (await this.buttonSwitchNewAccont).click();
  }

  async accessTransfersMenu() {
    await (await this.buttonTransfers).waitForClickable({ timeout });
    await this.waitLoadingAsync();
    await (await this.buttonTransfers).click();
  }

  async createNewTransfer() {
    await (await this.buttonNewTransfer).waitForClickable({ timeout });
    await (await this.buttonNewTransfer).click();
  }

  async cancelTransfer() {
    await (await this.buttonExit).waitForExist({ timeout });
    await (await this.buttonExit).click();
  }

  async existCancelButton() {
    return (await this.buttonExit).isExisting();
  }

  async existTransferBox() {
    await (await this.modalTranfersBox).waitForExist({ timeout });
    return (await this.modalTranfersBox).isExisting();
  }

  async existModal() {
    return (await this.modalTransfer).isExisting();
  }

  async cancelTransferButton() {
    await (await this.buttonCancel).waitForExist({ timeout });
    await (await this.buttonCancel).click();
  }

  async confirmTedButton() {
    await (await this.buttonConfirmTransaction).waitForExist({ timeout });
    await (await this.buttonConfirmTransaction).click();
  }

  async filteMenuDependece(menu) {
    await (await this.filterMenu).waitForExist({ timeout });
    await (await this.filterMenu).selectByIndex(menu);
  }

  async textTransactionTokenField() {
    await (await this.transactionTokenField).waitForExist({ timeout });
    await (await this.transactionTokenField).click();
  }

  async agendeOtherDate() {
    await (await this.butttonAgendOtherDate).waitForExist({ timeout });
    await (await this.butttonAgendOtherDate).click();
    await (await this.transferDate).click();
    for (let index = 0; index < 10; index++) {
      await browser.keys("Backspace");
    }
    (mutableTransferData.transferDate = moment
      .unix(moment().day(7).add(3, "days").unix())
      .format("DD/MM/YYYY")),
      await (await this.transferDate).setValue(mutableTransferData.transferDate);
    await browser.keys("Tab");
    await browser.pause(6000);
  }

  async submitTransfer() {
    await (await this.buttonSubmitTransfer).waitForClickable({ timeout });
    await (await this.buttonSubmitTransfer).click();
  }

  async reviewDate() {
    await (await this.buttonReviewDate).waitForExist({ timeout });
    await (await this.buttonReviewDate).click();
    await browser.keys("Tab");
    await this.waitLoadingAsync();
    await browser.pause(6000);
  }

  async confirmTransactionToken(token) {
    await (await this.transactionTokenField).waitForExist({ timeout });
    await (await this.transactionTokenField).setValue(token);
    await (await this.buttonConfirmTransaction).waitForEnabled({ timeout });
    await (await this.buttonConfirmTransaction).click();
  }

  async approveTED() {
    await browser.pause(4000);
    await (await this.verifyTableExist).waitForExist({ timeout });
    await this.waitLoadingAsync();
    const buttonApproveTed = await $(`${this.tedCreated}//button`);
    await (await buttonApproveTed).waitForExist({ timeout });
    await (await buttonApproveTed).click();
    
    await (await this.buttonAppove).waitForClickable({ timeout });
    await (await this.buttonAppove).click();
  }

  async cancelScheduling() {
    await (await this.buttonCancel).waitForExist({ timeout });
    await (await this.buttonCancel).click();
  }

  async confirmInsufficientFunds() {
    return (await this.modalConfirmInsufficientFunds).isExisting();
  }

  async confirmScheduling() {
    await (await this.buttonConfirmScheduling).waitForExist({ timeout });
    await (await this.buttonConfirmScheduling).click();
  }

  async filterApply() {
    await this.waitLoadingAsync();
    await (await this.buttonApply)[0].waitForExist({ timeout });
    await (await this.buttonApply)[0].click();
  }

  closeToastr() {
    this.buttonCloseToastr.waitForExist(timeout);
    this.buttonCloseToastr.click();
  }

  invalidDate() {
    var today = +moment().isoWeekday();
    if (today == 1) {
      dateInvalid = +moment().add(6, "days").unix();
    } else {
      if (today == 2) {
        dateInvalid = +moment().add(5, "days").unix();
      } else {
        if (today == 3) {
          dateInvalid = +moment().add(4, "days").unix();
        } else {
          if (today == 4) {
            dateInvalid = +moment().add(3, "days").unix();
          } else {
            if (today == 5) {
              dateInvalid = +moment().add(2, "days").unix();
            }
          }
        }
      }
    }
    return moment.unix(dateInvalid).format("DD/MM/YYYY");
  }

  generateAmountTED() {
    let min = 1; //$0.01
    let max = 99999; //$999.99
    let amountTED = Math.floor(Math.random() * (+max - +min)) + +min;
    amountTED = amountTED.toString().replace(/\D/g, "");
    amountTED = amountTED.toString().replace(/(\d)(\d{8})$/, "$1.$2");
    amountTED = amountTED.toString().replace(/(\d)(\d{5})$/, "$1.$2");
    amountTED = amountTED.toString().replace(/(\d)(\d{2})$/, "$1,$2");
    mutableTransferData.amount = amountTED;
    return amountTED;
  }

  async generateAgency() {
    let min = 1000;
    let max = 9999;
    let agency = Math.floor(Math.random() * (+max - +min)) + +min;
    return agency;
  }

  async generateAccount() {
    let min = 100000;
    let max = 999999;
    let acount = Math.floor(Math.random() * (+max - +min)) + +min;
    return acount;
  }

  async generateDigit() {
    let min = 0;
    let max = 9;
    let digit = Math.floor(Math.random() * (+max - +min)) + +min;
    return digit;
  }

  generateAmountTEDWithoutAmount() {
    let min = 20000000000; //$200.000.000,00
    let max = 99999999999; //$999,999,999.99
    let valorTED = Math.floor(Math.random() * (+max - +min)) + +min;
    valorTED = valorTED.toString().replace(/\D/g, "");
    valorTED = valorTED.toString().replace(/(\d)(\d{8})$/, "$1.$2");
    valorTED = valorTED.toString().replace(/(\d)(\d{5})$/, "$1.$2");
    valorTED = valorTED.toString().replace(/(\d)(\d{2})$/, "$1,$2");
    mutableTransferData.amount = valorTED;
    return valorTED;
  }

  async selectAccountWithBalance() {
    await (await this.originAccount).waitForExist({ timeout });
    let accounts = await $$('[data-test="originAccount"] > option');
    let accountSelected = false;
    for (let index = 0; index < accounts.length; index++) {
      await (await this.originAccount).selectByIndex(index);
      let balance = await (await this.originAccountBalance).getText();
      balance = balance.replace(/[R$ .,]/gi, "");
      if (parseInt(balance) > 100000 /* R$1.000,00 */) {
        accountSelected = true;
        break;
      }
    }
    if (!accountSelected) {
      throw new Error("No account has necessary balance");
    }
  }

  async createTransfer(isFuture, notAmount) {
    await (await this.buttonNewTransfer).waitForEnabled({ timeout });
    await (await this.buttonNewTransfer).click();
    await this.selectAccountWithBalance();
    await (await this.transferAmount).waitForExist({ timeout });
    switch (notAmount) {
      case true:
        await (await this.transferAmount).setValue(this.generateAmountTEDWithoutAmount());
        break;
      case false:
        await (await this.transferAmount).setValue(this.generateAmountTED());
        break;
    }
    await (await this.transferDate).click();
    for (let index = 0; index < 10; index++) {
      await browser.keys("Backspace");
    }
    switch (isFuture) {
      case false:
        mutableTransferData.transferDate = moment
          .unix(dateUnix)
          .format("DD/MM/YYYY");
        break;
      case true:
        mutableTransferData.transferDate = moment
          .unix(moment().add(7, "days").unix())
          .format("DD/MM/YYYY");
        break;
    }
    await (await this.transferDate).setValue(mutableTransferData.transferDate);
    await browser.pause(4000);
    await this.waitLoadingAsync();

    if ((await this.buttonSwitchNewAccontDisabled).isExisting()) {
      await this.clickSwitchNewAccount();
    }

    await (await this.recipientBank).waitForExist({ timeout });
    await (await this.recipientBank).click();
    await (await this.bankList)[18].click();
    await (await this.bankBranch).setValue(await this.generateAgency());
    await (await this.recipientBankAccount).setValue(await this.generateAccount());
    await (await this.bankAccountDigit).setValue(await this.generateDigit());
    await (await this.buttonSubmitTransfer).waitForExist({ timeout });
    await this.waitLoadingAsync();
    await (await this.buttonSubmitTransfer).click();
  }

  async createNewTransferWithExistingAccount(isFuture, notAmount) {
    await (await this.buttonNewTransfer).waitForEnabled({ timeout });
    await (await this.buttonNewTransfer).click();
    await this.selectAccountWithBalance();
    await browser.pause(4000);

    await (await this.transferAmount).waitForExist({ timeout });
    
    switch (notAmount) {
      case true:
        await (await this.transferAmount).setValue(this.generateAmountTEDWithoutAmount());
        break;
      case false:
        await (await this.transferAmount).setValue(this.generateAmountTED());
        break;
    }
    
    await (await this.transferDate).click();
    for (let index = 0; index < 10; index++) {
      await browser.keys("Backspace");
    }
    
    switch (isFuture) {
      case false:
        mutableTransferData.transferDate = moment
          .unix(dateUnix)
          .format("DD/MM/YYYY");
        break;
      case true:
        mutableTransferData.transferDate = moment
          .unix(moment().add(7, "days").unix())
          .format("DD/MM/YYYY");
        break;
    }

    await (await this.transferDate).setValue(mutableTransferData.transferDate);
    await this.waitLoadingAsync();

    await (await this.optionFavoredAccounts).waitForClickable({ timeout });
    await (await this.optionFavoredAccounts).selectByIndex(1);
    await (await this.optionTargetAccount).waitForClickable({ timeout });
    await (await this.optionTargetAccount).selectByIndex(1);

    await this.waitLoadingAsync();
    await (await this.buttonSubmitTransfer).click();
  }

  async createdTransferInvalidDate() {
    await (await this.buttonNewTransfer).waitForEnabled({ timeout });
    await (await this.buttonNewTransfer).click();
    await this.selectAccountWithBalance();
    await browser.pause(4000);
    
    await (await this.transferAmount).waitForExist({ timeout })
    await (await this.transferAmount).setValue(this.generateAmountTED());
    await this.waitLoadingAsync();

     if ((await this.buttonSwitchNewAccontDisabled).isExisting()) {
      await this.clickSwitchNewAccount();
    }

    await (await this.recipientBank).click();
    await (await this.bankList)[18].click();
    await (await this.bankBranch).setValue(await this.generateAgency());
    await (await this.recipientBankAccount).setValue(await this.generateAccount());
    await (await this.bankAccountDigit).setValue(await this.generateDigit());

    await (await this.transferDate).click();
    for (let index = 0; index < 10; index++) {
      await browser.keys("Backspace");
    }
    await (await this.transferDate).setValue(this.invalidDate());
    await browser.keys("Tab");
    await browser.pause(6000);
  }

  async getToken(user) {
    let token;

    switch (user) {
      case "PJ5":
        token = totpGenerator(constants.pj5Secret);
        break;
      case "PJ6":
        token = totpGenerator(constants.pj6Secret);
        break;
      case "PJ8":
        token = totpGenerator(constants.pj8Secret);
        break;
      case "PJ9":
        token = totpGenerator(constants.pj9Secret);
        break;
      default:
        break;
    }
    return token;
  }

  async verifyTransferStatus() {
    await browser.pause(7000);
    await (await this.verifyTableExist).waitForExist({ timeout });
    const transferOrderID = await (await $(this.tedCreated)).getAttribute("data-test");
    const transferStatus = await (await $(`[data-test="${transferOrderID}"] :nth-child(6)`)).getText();
    return transferStatus;
  }

  async thereIsNoMFAProcess() {
    await browser.pause(2000);
    return await (await this.transactionTokenField).isExisting();
  }

  getTransferObjectValue() {
    return mutableTransferData;
  }

  async invalidCNPJAlert() {
    await (await this.invalidCNPJ).waitForExist({ timeout });
    return (await this.invalidCNPJ).getText();
  }

  async submitTransferBtnDisabled() {
    return (await this.buttonSubmitTransfer).getAttribute("disabled");
  }

  async createdTransferInvalidCNPJ() {
    mutableTransferData.transferDate = moment
          .unix(dateUnix)
          .format("DD/MM/YYYY");
    await (await this.buttonNewTransfer).waitForEnabled({ timeout });
    await (await this.buttonNewTransfer).click();
    await this.selectAccountWithBalance();
    await (await this.transferAmount).waitForExist({ timeout })
    await (await this.transferAmount).setValue(this.generateAmountTED());
    await (await this.transferDate).setValue(mutableTransferData.transferDate);
    await browser.pause(6000);
     if ((await this.buttonSwitchNewAccontDisabled).isExisting()) {
      await this.clickSwitchNewAccount();
    }

    await (await this.recipientCNPJ).click();
    for (let index = 0; index < 7; index++) {
      await browser.keys("Backspace");
    }
    await (await this.recipientCNPJ).setValue("000100");
    await (await this.recipientBank).click();
    await (await this.bankList)[18].click();
    await (await this.bankBranch).setValue(this.generateAgency());
    await (await this.recipientBankAccount).setValue(this.generateAccount());
    await (await this.bankAccountDigit).setValue(this.generateDigit());
    browser.keys("Tab");
  }

  async accessFavoredList() {
    await (await this.favoredListButton).waitForClickable({ timeout });
    await this.waitLoadingAsync();
    await (await this.favoredListButton).click();
  }

  async chooseOriginAccount(withFavored) {
    await (await this.originAccount).click();
    switch (withFavored) {
      case true:
        await (await this.originAccountWithFavored).click();
        break;
      case false:
        await (await this.originAccountWithoutFavored).click();
        break;
    }
  }

  async clickDeleteButton() {
    await (await this.deleteButton).waitForClickable({ timeout });
    await (await this.deleteButton).click();
  }

  async confirmDelete() {
    await (await this.confirmDeleteButton).waitForClickable({ timeout });
    await (await this.confirmDeleteButton).click();
  }

  async withoutRegisteredFavored() {
    await (await this.noRegisteredFavored).waitForExist({ timeout });
    return (await this.noRegisteredFavored).getText();
  }

}
module.exports = new TransfersPage();
