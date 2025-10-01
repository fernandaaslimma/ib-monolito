import moment from "moment";
import Page from "./page";
import transferPagePJ from "../pageobjects/transfers_pj.page";
import transferPagePF from "../pageobjects/transfers_pf.page";
import { pj5Secret, pj9Secret } from "../../utils/constants";
const timeout = 30000;
const thatPJ = transferPagePJ;
const thatPF = transferPagePF;

let dataToTransaction = {
  dateTransactions: "",
  amount: "",
  agency: "",
  account: "",
  digit: "",
};

let serverDate;
class TansactionStatementPage extends Page {
  get futureTransactionsButton() { return $('[data-test="futureTransactions"]') }
  get listStatement() { return $('[data-test="cardFutureTransactions"]') }
  get statement() { return $('[data-test="cardStatement"]') }
  get firstVoucher() { return $('[data-test="cardTransactionType"]') }
  get changeAccount() { return $('[data-test="Button"]') }
  get selectSecondAccount() { return $('[data-test="RadioStatementsAccount_1"]') }
  get confirmChangeAccount() {return $('[data-test="confirmButton"]'); }
  get numberAgency() { return $('[id="AccountInfoItem_2"]') }
  get filterButton() { return $('[data-test="filterButton"]')}
  get filterDateFrom() { return $('[data-test="filterDateFrom"]')}
  get filterDateTo() { return $('[data-test="filterDateTo"]')}
  get invalidFutureDate() { return $('[data-test="invalidFutureDate"]') }

  accessFirstVoucher() {
    this.firstVoucher.waitForClickable({ timeout });
    this.firstVoucher.click();
  }

  searchStatementByValue() {
    this.waitStatusFutureTransactions();
    this.iconViewValue();
    this.statement.waitForExist({ timeout });
    const card = $(`//*[@data-test="cardStatement"]//*[@data-test="cardValue"][contains(text(),"${dataToTransaction.amount}")]`);
    card.waitForClickable({ timeout });
    card.click();
  }

  waitStatusFutureTransactions() {
    this.waitLoading();
    this.futureTransactionsButton.waitForClickable({ timeout });
    let statusTransactions = this.futureTransactionsButton.isExisting();

    while (statusTransactions != false) {
      this.waitLoading();
      this.statement.waitForDisplayed({ timeout });
      statusTransactions = this.futureTransactionsButton.isExisting();
      browser.pause(5000);
      this.refreshPage();
    }
  }

  scheduleNewTransferPJ(weekday) {
    thatPJ.createNewTransfer();
    thatPJ.selectAccountWithBalance();

    serverDate = this.getCurrentDate();

    thatPJ.transferDate.click();
    for (let index = 0; index < 10; index++) {
      browser.keys("Backspace");
    }

    thatPJ.transferDate.setValue(this.schedulingDay(weekday, serverDate));
    thatPJ.transferAmount.waitForExist({ timeout });
    thatPJ.transferAmount.setValue(thatPJ.generateAmountTED());
    thatPJ.recipientBank.click();
    thatPJ.bankList.click();
    thatPJ.bankBranch.setValue(thatPJ.generateAgency());
    thatPJ.recipientBankAccount.setValue(thatPJ.generateAccount());
    thatPJ.bankAccountDigit.setValue(thatPJ.generateDigit());

    this.waitLoading();
    thatPJ.submitTransfer();
    this.waitLoading();
    thatPJ.confirmTedButton();

    this.flowMFA(pj9Secret);
  }

  scheduleNewTransferPF(weekday) {
    thatPF.chooseNewAccountButton();
    thatPF.fiveThousandsIncrementButton.waitForExist({ timeout });

    dataToTransaction.amount = thatPJ.generateAmountTED();
    thatPF.setTransferAmount(dataToTransaction.amount);
    thatPF.recipientBank.setValue("");
    thatPF.bankList.click();
    thatPF.bankBranchInput.setValue(thatPJ.generateAgency());
    thatPF.recipientBankAccountInput.setValue(thatPJ.generateAccount());
    thatPF.verifyDigitInput.setValue(thatPJ.generateDigit());

    serverDate = moment().format("DD/MM/YYYY");

    this.schedulingDay(weekday, serverDate);
    thatPF.schedulingRadio.click();
    thatPF.schedulingDateInput.setValue(dataToTransaction.dateTransactions);

    thatPF.reviewData();
    thatPF.confirmTransaction();

    this.flowMFA(pj5Secret);
  }

  newTransferPF() {
    thatPF.chooseNewAccountButton();
    thatPF.fiveThousandsIncrementButton.waitForExist({ timeout });

    dataToTransaction.amount = thatPJ.generateAmountTED();
    dataToTransaction.agency = thatPJ.generateAgency();
    dataToTransaction.account = thatPJ.generateAccount();
    dataToTransaction.digit = thatPJ.generateDigit();

    thatPF.newAccountButton.waitForClickable({ timeout });
    thatPF.newAccountButton.click();

    thatPF.setTransferAmount(dataToTransaction.amount);
    thatPF.recipientBank.setValue("");
    thatPF.bankList.click();
    thatPF.bankBranchInput.setValue(dataToTransaction.agency);
    thatPF.recipientBankAccountInput.setValue(dataToTransaction.account);
    thatPF.verifyDigitInput.setValue(dataToTransaction.digit);

    thatPF.reviewData();
    thatPF.confirmTransaction();

    this.flowMFA(pj5Secret);
  }


  accessFutureTransactions() {
    this.accessStatementMenu();

    this.futureTransactionsButton.waitForExist({ timeout });
    this.futureTransactionsButton.click();
  }

  verifiedValuePJ() {
    this.listStatement.waitForExist({ timeout });

    let value = this.getValueLastTransactionPJ();
    value = value.replace("-", "");

    if (value == thatPJ.getTransferObjectValue().amount) return true;
    else return false;
  }

  verifiedValuePF() {
    let value = this.getValueLastTransactionPF();
    value = value.replace(/[^0-9,]/g, "");

    if (value == dataToTransaction.amount) return true;
    else return false;
  }

  getValueLastTransactionPJ() {
    const element = $(
      `//h1[text()= '${dataToTransaction.dateTransactions}']/../..//li[last()]//div[contains(@data-test, "HideableValue")]`
    );

    const value = element.getText();

    return value;
  }

  getValueLastTransactionPF() {
    const dateConverted = moment(dataToTransaction.dateTransactions, "DD/MM/YYYY").locale("pt-br").format("ddd, DD [de] MMM");
    const normalizedData = dateConverted.charAt(0).toUpperCase().concat(dateConverted.slice(1, -3)).concat(
      dateConverted.slice(-3).charAt(0).toUpperCase(),
      dateConverted.slice(-2)
  )
    const element = $(
      `//*[@data-test="card"]//*[contains(text(), '${normalizedData}')]/..//li[last()]/div`
    );

    const value = element.getText();

    return value;
  }

  getCurrentDate() {
    thatPJ.transferDate.waitForExist();
    return thatPJ.transferDate.getValue();
  }

  schedulingDay(weekday, serverDate) {
    if (weekday !== "Segunda" && weekday !== "Quarta" && weekday != "Sexta") {
      throw new Error(`Error in schedulingDay, weekday ${weekday} not mapped.`);
    } else {
      const weekdayDictionary = {
        Segunda: "Monday",
        Quarta: "Wednesday",
        Sexta: "Friday",
      };

      const day = weekdayDictionary[weekday];

      let dayScheduled = moment(serverDate, "DD/MM/YYYY")
        .isoWeekday(day)
        .add(1, "week")
        .utc()
        .format("DD/MM/YYYY");

      dataToTransaction.dateTransactions = dayScheduled;

      return dayScheduled;
    }
  }

  changeAccountPJ(){
      this.changeAccount.waitForClickable({ timeout });
      this.changeAccount.click();
  }

  selectSecondAccountPJ(){
      this.selectSecondAccount.waitForExist({ timeout });
      browser.jsClick(this.selectSecondAccount.selector);
  }

  confirmChangedAccount(){
      this.confirmChangeAccount.waitForClickable({ timeout });
      this.confirmChangeAccount.click();
  }

  numberAgencyPJ(){
      this.waitLoading();
      this.numberAgency.waitForExist({ timeout });
      return this.numberAgency.getText();
  }

  getDataTransaction() {
    return dataToTransaction;
  }

  filterBySpecificPeriod(){
    const today = moment().format("DD/MM/YYYY");
    const dateFuture = moment(today, "DD/MM/YYYY").add(1, "day").format("DD/MM/YYYY");

    this.filterButton.waitForClickable({ timeout });
    this.filterButton.click();

    this.filterDateFrom.waitForClickable({ timeout });
    this.filterDateFrom.addValue(today);
    this.filterDateTo.addValue(dateFuture);
  }

  existMesageInvalidFutureDate() {
    this.invalidFutureDate.waitForExist();
    return this.invalidFutureDate.getText();
  }
}

export default new TansactionStatementPage();
