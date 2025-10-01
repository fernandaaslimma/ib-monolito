const fs = require("fs-extra");
const { assert } = require("chai");

let rawFile = fs.readFileSync("./data-test/users.json");
let users = JSON.parse(rawFile);
const totpGenerator = require("totp-generator");

const constants = require("../../utils/constants");
const timeout = 50000;

class Page {
  get subnavTabStatementsButton() { return $('[data-test="subnavTabStatements"]') }
  get iconViewButton() { return $('[data-test="iconView"]') }
  get loadingModal() { return $('[data-visible="true"]') }


  get transactionsMenuOption() {
    return $('[data-test="Navbar_Transactions"]');
  }

  get foreignExchageMenuOption() {
    return $('[data-test="Navbar_Exchanges"]');
  }

  get documentsMenuOption() {
    return $('[data-test="Navbar_Documents"]');
  }

  get transfersMenuOption() {
    return $('[data-test="Navbar_CashAccounts"]');
  }

  get forgotMyPassword() {
    return $('[data-test="ForgotPasswordLink"]');
  }

  get header() {
    return $('[data-test="Header"]');
  }

  get permissionDeniedPage() {
    return $('[data-test="PermissionDenied"]');
  }

  get toastr() {
    return $('[data-test="Toastr"]');
  }

  get headerUserMenu() {
    return $('[data-test="Header_UserName"]');
  }

  get optionMenuMyData() {
    return $('[data-test="userContextMyData"]');
  }

  get optionMenuSuitability() {
    return $(`[data-test="userContextSuitability"]`);
  }

  get optionMenuTerms() {
    return $(`[data-test="userContextTerms"]`);
  }

  get menuPosition() {
    return $('[data-test="Navbar_Position"]');
  }

  get subMenuWithdraw() {
    return $('[data-test="SubnavTab-4"]');
  }

  get loading() {
    return $('[data-test="Loading"]');
  }

  get tokenField() {
    return $('[data-test="TransactionTokenField"]');
  }

  get confirmBtn() {
    return $('[data-test="Confirm"]');
  }

  get messageErrorDefault() { return $('[data-test="error-boundary"]') }

  get alertMessageText() { return $('[data-test="alertMessage"]') }
  accessStatementMenu() {
    this.subnavTabStatementsButton.waitForClickable({ timeout });
    this.subnavTabStatementsButton.click();
  }

  iconViewValue() {
    try {
      this.iconViewButton.waitForClickable({ timeout });
      this.iconViewButton.click();
    } catch (error) {
      return false;
    }
  }

  async valueUrl() {
    return (await browser).getUrl();
  }

  buttonHeaderUserMenu() {
    this.headerUserMenu.waitForExist(timeout);
    return this.headerUserMenu.click();
  }

  transfersMenuOptionButton(){
    this.transfersMenuOption.waitForExist({ timeout });
    this.transfersMenuOption.click();
  }

  generatePassword(user) {
    users[user].password =
      Math.round(Math.random() * (99999999 - 10000000 + 1)) + 10000000;

    return users;
  }

  saveGeneratedPassword(usersData) {
    let data = JSON.stringify(usersData, null, 2);

    fs.writeFileSync("./data-test/users.json", data);
  }

  readPassword() {
    return (this.password = users.password);
  }

  open(url) {
    browser.url(url);
  }

  async openAsync(url) {
    await browser.url(url);
  }

  async selectOption(option) {
    switch (option) {
      case "esqueci minha senha":
        await (await this.forgotMyPassword).waitForExist({ timeout });
        await (await this.forgotMyPassword).click();
        break;
      case "transactions":
        await (await this.transactionsMenuOption).waitForExist({ timeout });
        await (await this.transactionsMenuOption).click();
        break;
      case "foreign exchange":
        await (await this.foreignExchageMenuOption).waitForExist({ timeout });
        await (await this.foreignExchageMenuOption).click();
        break;
      case "documents page":
        await (await this.documentsMenuOption).waitForExist({ timeout });
        await (await this.documentsMenuOption).click();
        break;
      case "transfers":
        await (await this.transfersMenuOption).waitForExist({ timeout });
        await (await this.transfersMenuOption).click();
        break;
      default:
        throw new Error("Opção Inválida");
    }
  }

  checkUnavailableFeature(feature) {
    let result = false;

    switch (feature) {
      case "câmbio":
        this.open(constants.pendingContracts);
        this.permissionDeniedPage.waitForExist(timeout);
        result = true;
        break;
      case "posição":
        this.open(constants.position);
        this.permissionDeniedPage.waitForExist(timeout);
        this.open(constants.summary);
        this.permissionDeniedPage.waitForExist(timeout);
        result = true;
        break;
      case "movimentações":
        this.open(constants.transactions);
        this.permissionDeniedPage.waitForExist(timeout);
        this.open(constants.summary);
        this.permissionDeniedPage.waitForExist(timeout);
        result = true;
        break;
      case "documentos":
        this.open(constants.documents);
        this.permissionDeniedPage.waitForExist(timeout);
        result = true;
        break;
      default:
        throw new Error("Funcionalidade Inválida: " + feature);
    }

    assert.isTrue(result);
  }

  async getToastrFeedback() {
    try {
      let text = "";
      while (text === "") {
        text = await (await this.toastr).getText();
      }
      return text;
    } catch (error) {
      throw new Error("Error in getToastrFeedback: ", error);
    }
  }

  async getToastrFeedbackAsync(limit = 40) {
    try {
      let text = "";
      let times = 0;
      while (text === "" && times < limit) {
        text = await (await this.toastr).getText();
        times++;
      }
      return text;
    } catch (error) {
      throw new Error("Error in getToastrFeedback: ", error);
    }
  }

  refreshPage() {
    browser.refresh();
  }

  async checkDownloadsFolder() {
    await this.openAsync("chrome://downloads");

    const script = await browser.execute(
      "return document.querySelector('downloads-manager').shadowRoot.querySelector('#downloadsList').items.filter(e => e.state === 'COMPLETE').map(e => e.fileName || e.file_name)[0];"
    );

    return script;
  }

  changelanguagePT_BR() {
    if (
      $('[data-test="ChangeLanguage_Open"]')
        .$$("span")[1]
        .getText()
        .toLowerCase() != "pt"
    ) {
      $('[data-test="ChangeLanguage_Open"]').click();
      $('[data-test="LanguagePopup_pt-BR"]').click();
    }
  }

  changelanguageEN_US() {
    if (
      $('[data-test="ChangeLanguage_Open"]')
        .$$("span")[1]
        .getText()
        .toLowerCase() != "en"
    ) {
      $('[data-test="ChangeLanguage_Open"]').click();
      $('[data-test="LanguagePopup_en-US"]').click();
    }
  }

  accessMenuPosition() {
    this.menuPosition.waitForExist(timeout);
    return this.menuPosition.click();
  }

  accessSubMenuWithdraw() {
    this.subMenuWithdraw.waitForExist(timeout);
    return this.subMenuWithdraw.click();
  }

  accessMenuMyData() {
    this.optionMenuMyData.waitForExist(timeout);
    this.optionMenuMyData.click();
  }

  async tokenGenerator(secret) {
    if (secret) {
      let token = totpGenerator(secret);
      return token;
    } else {
      throw new Error('ERROR: "tokenGenerator" com problema');
    }
  }

  async flowMFA(secret) {
    const token = await this.tokenGenerator(secret);

    if (token) {
      await (await this.tokenField).waitForExist({ timeout });
      await (await this.tokenField).setValue(token);
      await (await this.confirmBtn).waitForClickable({ timeout });
      await (await this.confirmBtn).click();
    } else {
      throw new Error('ERROR: "flowMFA" com problema');
    }
  }

  existFlowMFA() {
    this.tokenField.waitForExist({timeout});
    return this.tokenField.isExisting();
  }

  waitLoading() {
    let status = this.loading.isExisting();

    while (status != false) {
      status = this.loading.isExisting();
    }
  }

  async waitLoadingAsync() {
    let status = await (await this.loading).isExisting();

    while (status != false) {
      status = await (await this.loading).isExisting();
    }
  }

  async waitLoadingModal() {
    await (await this.loadingModal).waitForExist({ timeout });
  }

  waitHeader() {
    let status = this.header.isExisting();
    while (status != true) {
      status = this.header.isExisting();
    }
  }

  convertStringToInteger(value) {
    const valueConverted = value.replace(/[^0-9]/g,'');
    return parseInt(valueConverted);
  }

  async forceWait(timeout = 10000){
    await browser.pause(timeout);
  }
  
  alertMessage() {
    this.alertMessageText.waitForDisplayed({ timeout });
    return this.alertMessageText.getText();
  }
  
  forceWait(timeout = 10000){
    browser.pause(timeout);
  }

  async getMessageErrorDefault() {
    await (await this.messageErrorDefault).waitForExist({ timeout });
    return (await this.messageErrorDefault).getText();
  }
}

module.exports = Page;
