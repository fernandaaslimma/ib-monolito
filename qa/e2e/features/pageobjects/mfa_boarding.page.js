
"use strict";

const users = require("../../data-test/users");
const page = require("./page");
const registrationDataPage = require('./atualizacao_cadastral.page')
const { decodeSvgQRCode, getSecretDatabase, updateSecretDatabase } = require('../../utils/util');
const timeout = 30000;
const shortTimeout = 10000;

class MfaBoardingPage extends page {
  get titleModalBoarding() {
    return $('[data-test="MfaSelectionTypeTitle"]');
  }

  get buttonAppBocom() {
    return $('[data-test="MfaSelectionTypeBtn_1"]');
  }

  get buttonUnderstood() {
    return $('[data-test="UnderStoodButton"]');
  }

  get buttonAppAuthenticator() {
    return $('[data-test="MfaSelectionTypeBtn_2"]');
  }

  get buttonShowQrCode() {
    return $('[data-test="ShowQrCodeButton"]');
  }

  get buttonConfirm() {
    return $('[data-test="Confirm"]');
  }

  get buttonConfirmQrCode() {
    return $('[data-test="QrCodeButton"]');
  }

  get buttonRegisterLater() {
    return $('[data-test="RegisterLater"]');
  }

  get buttonRegisterNow() {
    return $('[data-test="RegiterNowBtn"]');
  }

  get buttonExitConfirmation() {
    return $('[data-test="exit-confirmation-exit"]');
  }

  get inputQrCode() {
    return $('[data-test="QrCodeInput"]');
  }

  get imgMfaSuccess() {
    return $('[data-test="MfaSuccessImage"]');
  }

  get imgNewQrCode() {
    return $('[data-test="qrCodeImg"]');
  }

  get mfaMethod() {
    return $('[data-test="selectMFAMethod"]');
  }

  get buttonMethodMail() {
    return $('[data-test="MethodSelectionButton_mail"]');
  }

  get buttonMethodAppBocom() {
    return $('[data-test="MethodSelectionButton_mobile"]');
  }

  get buttonMethodTotp() {
    return $('[data-test="MethodSelectionButton_totp"]');
  }

  get methodDisclaimer() {
    return $('[data-test="methodDisclaimer"]');
  }

  get buttonBack() {
    return $('[data-test="backButton"]');
  }

  flowAppAuthenticator() {
    this.buttonAppAuthenticator.waitForEnabled(timeout);
    this.buttonAppAuthenticator.click();
    this.buttonShowQrCode.waitForEnabled(timeout);
    this.buttonShowQrCode.click();
  }

  flowAppBocom() {
    this.buttonAppBocom.waitForExist(timeout);
    this.buttonAppBocom.click();
  }

  confirmAppBocomFlow() {
    this.buttonUnderstood.waitForExist(timeout);
    this.buttonUnderstood.click();
  }

  async getSecret() {
    const { email } = users.mfaembarcadopj;
    const currentSecretDatabase = await getSecretDatabase(email);
    return currentSecretDatabase;
  }

  existModalBoarding(wait) {
    if (wait) {
      this.titleModalBoarding.waitForExist(timeout);
      return this.titleModalBoarding.isExisting();
    } else {
      return this.titleModalBoarding.isExisting();
    }
  }

  registerLater() {
    this.buttonRegisterLater.waitForClickable({shortTimeout});
    this.buttonRegisterLater.click();
  }

  closeMfaBoarding() {
    try {
      this.registerLater(10000);
      this.registerLater(10000);
      this.exitConfirmation(10000);
      return true
    }
    catch (error) {
      return false
    }
  }

  registerNow() {
    this.buttonRegisterNow.waitForExist(timeout);
    return this.buttonRegisterNow.click();
  }

  exitConfirmation() {
    this.buttonExitConfirmation.waitForClickable({shortTimeout});
    this.buttonExitConfirmation.click();
  }

  confirmToken() {
    this.buttonConfirm.waitForExist(timeout);
    return this.buttonConfirm.click();
  }

  insertQrCodeToken(token) {
    if (token) {
      this.inputQrCode.waitForExist(timeout);
      this.inputQrCode.setValue(token);
      this.buttonConfirmQrCode.waitForExist(timeout);
      this.buttonConfirmQrCode.click();
    } else {
      throw new Error('ERROR: "insertQrCodeToken" com problema');
    }
  }

  registerSuccessful() {
    this.imgMfaSuccess.waitForExist(timeout);
    return this.imgMfaSuccess.isExisting();
  }

  async setCurrentSecretDatabase(secret) {
    const { email } = users.mfaembarcadopj;
    const result = await updateSecretDatabase(secret, email);
    return result;
  }

  getHtmlValue() {
    this.imgNewQrCode.waitForExist(timeout);
    const valueQrCode = this.imgNewQrCode.getHTML();
    return valueQrCode;
  }

  existButtonMfaMethod() {
    registrationDataPage.tokenField.waitForExist(timeout);
    return this.mfaMethod.isExisting();
  }

  changeMfaMethod(typeMethod) {

    this.flowAppAuthenticator();
    this.mfaMethod.waitForExist(timeout);
    this.mfaMethod.click();

    switch (typeMethod) {
      case "Aplicativo Autenticador":
        this.buttonMethodTotp.waitForExist(timeout);
        this.buttonMethodTotp.click();
        break;

      case "Email":
        this.buttonMethodTotp.waitForExist(timeout);
        this.buttonMethodTotp.click();
        this.mfaMethod.waitForExist(timeout);
        this.mfaMethod.click();
        this.buttonMethodMail.waitForExist(timeout);
        this.buttonMethodMail.click();
        break;

      case "APP BOCOM":
        this.buttonMethodAppBocom.waitForExist(timeout);
        this.buttonMethodAppBocom.click();
        break;

      default:
        throw new Error("Invalid Option in changeMfaMethod");
    }

  }

  lookMfaMethods() {
    this.flowAppAuthenticator();
    this.mfaMethod.waitForExist(timeout);
    return this.mfaMethod.click();
  }

  currentDisclaimer() {
    this.methodDisclaimer.waitForExist(timeout);
    return this.methodDisclaimer.getText()
  }

  backModalMfa() {
    this.buttonBack.waitForExist(timeout);
    return this.buttonBack.click();
  }

  async secretTreatment(valueQrCode) {
    let secret;

    try {
      secret = await decodeSvgQRCode(valueQrCode);
    } catch (error) {
      throw error;
    }

    if (secret) {
      let array = secret.match(/secret=([^=]*)/g);
      const newArray = array[0].split("=");
      secret = newArray[1];
    } else {
      throw new Error("ERROR: Secret is not generated");
    }

    return secret;
  }
}
module.exports = new MfaBoardingPage();
