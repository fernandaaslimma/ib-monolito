import Page from "./page";
import moment from 'moment';
const timeout = 30000;

import { approveConsent, createLinkToRedirect, prepareConsentPending } from "../../utils/prepare-consent";
import { bbmUrl } from "../../utils/constants";
class OpenBankingPage extends Page {
  get cpfOrCnpjLabel() { return $('[data-test="cpfOrCnpjLabel"]') }
  get organizationNameLabel() { return $('[data-test="destinationInstitutionLabel"]') }
  get expirationDateTime() { return $('[data-test="expirationDateTime"]') }
  get continueButton() { return $('[data-test="continueButton"]') }
  get cancelButton() { return $('[data-test="cancelButton"]') }
  get confirmCancelSharing() { return $('[data-test="cancelOpenBankingButton"]') }
  get consentMessageStatus() { return $('[data-test="consentMessageStatus"]') }
  get openBankingMenu() { return $('[data-test="Navbar_Open_Banking"]') }
  get newConsentSubMenu() { return $('[data-test="Open_Banking_New_Consent"]') }
  get openTabTransmitted() { return $('[data-test="tab_Transmitidos"]') }
  get selectBank() { return $('[data-test="selectBank"]') }
  get cardBank() { return $('[data-test="cardBank_BOCOM BBM"]') }
  get continueNewConsentButton() { return $('[data-test="continueNewConsentButton"]') }
  get consentConfirmButton() { return $('[data-test="consentConfirmButton"]') }
  get loginRedirectButton() { return $('[data-test="LoginBtn"]') }
  get firstCard() { return $('[data-test="card"]') }
  get cardEndSharing() { return $('[data-test="card_end_sharing"]') }
  get confirmEndSharing() { return $('[data-test="openBankingConfirmCancel"]') }
  get messageEndSharing() { return $('[data-test="messageEndSharing"]') }
  get selectReceived() { return $('[data-test="tab_Recebidos"]') }
  get screenRedirect() { return $('[data-test="screenRedirect"]') }
  get cardPendentApprovers() { return $('[data-test="pendentApprovers"]') }
  get mySharesSubMenu() { return $('[data-test="Open_Banking_My_Shares"]') }
  get selectTransmitted() { return $('[data-test="tab_Transmitidos"]') }
  get statusActive() { return $('[data-test="status_0"]') }

  calculateTime(month = 12) {
    const date = moment().add(month, 'M').format('DD/MM/YYYY');
    return date.toString();
  }

  async openBankingUrl(user, typeToShare) {
    const urlToRedirect = await createLinkToRedirect(user, typeToShare);
    const url = await bbmUrl + urlToRedirect[1];

    return [urlToRedirect[0], url];
  }

  async prepareConsentToTransmission(user){
    await prepareConsentPending(user);
  }

  async createConsentActive(user){
    await approveConsent(user);
  }

  async clickSelectAccountModal() {
    let selector;

    await (await this.openAccountButton).waitForClickable({ timeout });
    await (await this.openAccountButton).click();

    await (await this.selectFirstOptionAccountCheckbox).waitForExist({ timeout });

    selector = await (await this.selectFirstOptionAccountCheckbox).selector;
    browser.waitAndClick(selector);

    selector = await (await this.saveDataSourceButton).selector;
    browser.waitAndClick(selector);
  }

  async clickSelectFinancingModal() {
    let selector;

    await (await this.openFinancingButton).waitForClickable({ timeout });
    await (await this.openFinancingButton).click();

    await (await this.selectFirstOptionFinancingCheckbox).waitForExist({ timeout });

    selector = await (await this.selectFirstOptionFinancingCheckbox).selector;
    browser.waitAndClick(selector);

    selector = await (await this.saveDataSourceButton).selector;
    browser.waitAndClick(selector);
  }

  async clickSelectDiscountedCreditModal() {
    let selector;

    await (await this.openDiscountedCreditButton).waitForClickable({ timeout });
    await (await this.openDiscountedCreditButton).click();

    await (await this.selectFirstOptionDiscountedCreditCheckbox).waitForExist({ timeout });

    selector = await (await this.selectFirstOptionDiscountedCreditCheckbox).selector;
    browser.waitAndClick(selector);

    selector = await (await this.saveDataSourceButton).selector;
    browser.waitAndClick(selector);
  }

  async clickSelectLoansModal() {
    let selector;

    await (await this.openLoansButton).waitForClickable({ timeout });
    await (await this.openLoansButton).click();

    await (await this.selectFirstOptionLoansCheckbox).waitForExist({ timeout });
    selector = await (await this.selectFirstOptionLoansCheckbox).selector;
    browser.waitAndClick(selector);

    selector = await (await this.saveDataSourceButton).selector;
    browser.waitAndClick(selector);
  }

  async getValueCpfOrCnpjLabel() {
    await (await this.cpfOrCnpjLabel).waitForExist({ timeout });
    return (await this.cpfOrCnpjLabel).getText();
  }

  async getValueOrganizationNameLabel() {
    await (await this.organizationNameLabel).waitForExist({ timeout });
    return (await this.organizationNameLabel).getText();
  }

  async getValueExpirationDateTime() {
    await (await this.expirationDateTime).waitForExist({ timeout });
    return (await this.expirationDateTime).getText();
  }

  async existApprovers() {
    return (await this.cardPendentApprovers).isExisting();
  }

  async clickContinueButton(times = 1) {
    await (await this.continueButton).waitForClickable({ timeout });

    for (let index = 0; index < times; index++) {
      await (await this.continueButton).waitForClickable({ timeout });
      const { selector } = await this.continueButton;
      browser.waitAndClick(selector);
    }
  }

  async checkRedirectSuccessful() {
    let status = await (await this.screenRedirect).isExisting();
    await (await this.screenRedirect).waitForExist({ timeout })

    while (status != false) {
      status = await (await this.screenRedirect).isExisting();
    }

    await browser.pause(4000);

    if (bbmUrl.includes("http://localhost:8080")) {
      const url = await browser.getUrl();
      const urlPrepared = `/${url.slice(url.indexOf("home"))}`
      const finalUrl = bbmUrl + urlPrepared;

      await browser.url(finalUrl.toString());
    }

    await (await this.consentMessageStatus).waitForExist({ timeout });
    return (await this.consentMessageStatus).getText();
  }

  async clickOpenBankingMenu(){
    await (await this.openBankingMenu).waitForClickable({ timeout });
    await (await this.openBankingMenu).click();
  }

  async clickOpenTabTransmitted(){
    await (await this.openTabTransmitted).waitForClickable({ timeout });
    await (await this.openTabTransmitted).click();
  }

  async clickNewConsentSubMenu(){
    await (await this.newConsentSubMenu).waitForClickable({ timeout });
    await (await this.newConsentSubMenu).click();
  }

  async clickSelectBank() {
    await (await this.selectBank).waitForClickable({ timeout });
    await (await this.selectBank).click();
  }

  async clickCardBank() {
    await (await this.cardBank).waitForExist({ timeout });
    const { selector } = await this.cardBank;
    browser.jsClick(selector);
  }

  async clickContinueNewConsentButton() {
    await (await this.continueNewConsentButton).waitForExist({ timeout });
    const { selector } = await this.continueNewConsentButton;
    browser.jsClick(selector);
  }

  async clickConsentConfirmButton() {
    await (await this.consentConfirmButton).waitForClickable({ timeout });
    await (await this.consentConfirmButton).click();
  }

  async confirmRedirect() {
    await (await this.loginRedirectButton).waitForExist({ timeout });
    return  (await this.loginRedirectButton).isExisting();
  }

  async clickCancelButton() {
    await (await this.cancelButton).waitForClickable({ timeout });
    await (await this.cancelButton).click();
  }

  async clickCancelSharingButton() {
    await (await this.confirmCancelSharing).waitForExist({ timeout });
    const { selector } = await this.confirmCancelSharing;
    browser.jsClick(selector);
  }

  async clickFirstCard(){
    await (await this.firstCard).waitForClickable({ timeout });
    await (await this.firstCard).click()
  }

  async clickCardEndSharing(){
    await (await this.cardEndSharing).waitForClickable({ timeout });
    await (await this.cardEndSharing).click();
  }

  async clickConfirmEndSharing(){
    await (await this.confirmEndSharing).waitForExist({ timeout });
    const { selector } = await this.confirmEndSharing;
    browser.jsClick(selector);
  }

  async getMessageAccount() {
    await (await this.messageEndSharing).waitForExist({ timeout });
    return (await this.messageEndSharing).getText();
  }

  async clickReceived(){
    await (await this.selectReceived).waitForExist({ timeout });
    await (await this.selectReceived).click();
  }

  async doesNotExistEndSharing() {
    return (await this.cardEndSharing).isExisting();
  }

  async doesExistReceived(){
    return (await this.selectReceived).isExisting();
  }

  async doesExistTransmitted(){
    return (await this.selectTransmitted).isExisting();
  }

  async messageStatus(){
    const consentMessageStatus = await $('//*/div[contains(@data-test, "consentMessageStatus")]');
    consentMessageStatus.waitForExist({ timeout });
    return (await consentMessageStatus).getText();
  }

  clickBackButton() {
    this.backButton.waitForClickable({ timeout });
    this.backButton.click();
  }

  clickListAccountButton() {
    this.listAccountButton.waitForClickable({ timeout });
    this.listAccountButton.click()
  }

  clickSelectSecondAccountFromList() {
    this.selectSecondAccountFromList.waitForClickable({ timeout });
    this.selectSecondAccountFromList.click()
  }

  clickSaveListAccountButton() {
    this.saveListAccountButton.waitForClickable({ timeout });
    this.saveListAccountButton.click()
  }

  async isExistScreenRedirect() {
    await (await this.screenRedirect).waitForExist({ timeout });
    return (await this.screenRedirect).isExisting();
  }

  async getCardAccount() {
    await (await this.cardAccount).waitForExist({ timeout });
    return await (await this.cardAccount).getText();
  }

  doNotExistCard() {
    return this.cardNotExist.isExisting();
  }

  async clickOpenBankingButton(){
    await (await this.openBankingButton).waitForClickable({ timeout });
    await (await this.openBankingButton).click();
  }

  async clickTransmitidos(){
    await (await this.transmitidosButton).waitForClickable({ timeout });
    await (await this.transmitidosButton).click();
  }

  clickCardWithStatusPending(){
    this.statusPending.waitForClickable({ timeout });
    this.statusPending.click();
  }

  clickLastCard(){
    const element = $('//*[@data-test="card"]/..//section[last()]//*[@data-test="date"][contains(text(), "08/10/2021")]');
    element.waitForClickable({ timeout });
    element.click();
  }

  clickCloseEndSharing(){
    this.closeEndSharing.waitForClickable({ timeout });
    this.closeEndSharing.click();
  }

  existResumeStep(){
    return this.resumeStep.isExisting();
  }

  clickCancelConsent(){
    this.cancelConsentButton.waitForClickable({ timeout });
    this.cancelConsentButton.click();
  }

  existSucessIcon(){
    return this.successIcon.isExisting();
  }

  async existCardEndSharing(){
    return await (await this.cardEndSharing).isExisting();
  }

  async clickMyShares(){
    await (await this.mySharesSubMenu).waitForClickable({ timeout });
    await (await this.mySharesSubMenu).click();
  }
}

export default new OpenBankingPage();
