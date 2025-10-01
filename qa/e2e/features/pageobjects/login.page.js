import Page from "./page";
import { bbmUrl } from "../../utils/constants";
const dataGenerator = require("../../utils/data-generator");
const users = require("../../data-test/users.json");
const timeout = 50000;

class LoginPage extends Page {
  get document() {
    return $("[name=document]");
  }
  get inputEmail() {
    return $('[data-test="RecoveryEmail"]');
  }
  get email() {
    return $("[name=email]");
  }
  get password() {
    return $("[name=password]");
  }
  get passwordConfirmation() {
    return $("[name=passwordConfirmation]");
  }
  get submitButton() {
    return $('[data-test="LoginBtn"]');
  }
  get createPasswordBtn() {
    return $('[data-test="CreatePasswordBtn"]');
  }
  get eraseButton() {
    return $('[data-test="eraseButton"]');
  }
  get header() {
    return $('[data-test="Header"]');
  }
  get buttonLogout() {
    return $('[data-test="Header_Logout"]');
  }
  get loginScreen() {
    return $('[data-test="Login"]');
  }
  get buttonConfirmLogout() {
    return $('[data-test="ConfirmLogout"]');
  }
  get createPasswordErrorMsg() {
    return $('[data-test="CreatePasswordError"]');
  }
  get recoveryPassword() {
    return $('[data-test="Email"]');
  }
  get sendButton() {
    return $('[data-test="SendButton"]');
  }
  get recoverPasswordScreen() {
    return $('[data-test="RecoverPassword"]');
  }
  get emailSentText() {
    return $('[data-test="EmailSentFeedbackMsg"]');
  }
  get equitiesSubMenu() {
    return $('[data-test="SubnavTab-1"]');
  }
  get modalTerm() {
    return $('[data-test="PageAsModal"]');
  }
  get closeButton() {
    return $('[data-test="registration-data-close"]')
  }
  get acceptTermsCheckbox() {
    return $('[data-test="CheckboxNewTerms"]')
  }

  async onLoginScreen() {
    return (await this.loginScreen).isExisting();
  }

  virtualKeyboard(keyValue) {
    return $(`[data-test="virtualKeyboardKey${keyValue}"]`);
  }

  async verifyHeaderSucess() {
    await (await this.header).waitForExist({ timeout });
    return (await this.header).isExisting();
  }

  verifyHeaderFalied() {
    return this.header.isExisting();
  }

  async searchUser(user) {
    const convertedUser = user
      .replace(/ /g, "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f-\u002D]/g, "");

    const usersDictionary = {
      pf: "rodrigo",
      atualizacaocadastralnaoeditavel: "atualizacaocadastralconfirm",
      trocamfaembarcadopf: "mfatrocapf",
      fundoinvestimentocadastral: "fundoinvestimentoatcadastral",
      fundoinvestimentodesqualificado: "fundoinvestimento",
      fundoinvestimentovisaogeral: "fundoinvestimentoatcadastral",
      investidorprocuracaovencida: "procuracaovencida"
    };

    const userFound = await usersDictionary[convertedUser] || convertedUser;
    return userFound;
  }

  login(user, accessControlScenario = false) {
    // For access-controls scenarios
    if (accessControlScenario) {
      switch (user) {
        case "câmbio":
          user = "semcambio";
          break;
        case "posição":
          user = "sotransactions";
          break;
        case "movimentações":
          user = "soposition";
          break;
        case "documentos":
          user = "semdocumentos";
          break;
        default:
          throw new Error("Funcionalidade Invalida");
      }
    }
    const currentUser = users[user];
    if (!currentUser) throw new Error("Invalid User!");

    this.email.waitForExist({ timeout });
    this.email.setValue(currentUser.email);
    this.virtualKeyboardHandler("password", "" + currentUser.password);
  }

  async loginAsync(user, accessControlScenario = false) {
    // For access-controls scenarios
    if (accessControlScenario) {
      switch (user) {
        case "câmbio":
          user = "semcambio";
          break;
        case "posição":
          user = "sotransactions";
          break;
        case "movimentações":
          user = "soposition";
          break;
        case "documentos":
          user = "semdocumentos";
          break;
        default:
          throw new Error("Funcionalidade Invalida");
      }
    }
    const currentUser = users[user];
    if (!currentUser) throw new Error("Invalid User!");

    await (await this.email).waitForExist({ timeout });
    await (await this.email).setValue(currentUser.email);
    await this.virtualKeyboardHandlerAsync("password", "" + currentUser.password);
  }

  async setPassword(password) {
    await this.virtualKeyboardHandlerAsync("password", "" + password);
    await this.virtualKeyboardHandlerAsync("confirm password", "" + password);
  }

  createRandomPassword(user) {
    let pass = this.generatePassword(user);
    this.setPassword(pass);
  }

  async getCreatePasswordFeedbackerror() {
    try {
      let text = "";
      while (text === "") {
        text = await (await this.createPasswordErrorMsg).getText();
      }
      return text;
    } catch (error) {
      throw new Error("Error in getCreatePasswordFeedbackerror: ", error);
    }
  }

  virtualKeyboardHandler(field, password) {
    if (field == "password") {
      this.password.click();
    } else if (field == "confirm password") {
      this.passwordConfirmation.click();
    }

    for (let i = 0; i < password.length; i++) {
      this.virtualKeyboard(password.charAt(i)).click();
    }
  }

  async virtualKeyboardHandlerAsync(field, password) {
    if (field == "password") {
      await (await this.password).click();
    } else if (field == "confirm password") {
      await (await this.passwordConfirmation).click();
    }

    for (let i = 0; i < password.length; i++) {
      await (await this.virtualKeyboard(await password.charAt(i))).click();
    }
  }

  submit() {
    this.submitButton.waitForExist(timeout);
    return this.submitButton.click();
  }

  async submitAsync() {
    await (await this.submitButton).waitForExist({ timeout });
    await (await this.submitButton).click();
  }

  CreatePasswordSubmit() {
    this.submitCreatePasswordButton.click();
  }

  async confirmNewPassword() {
    await (await this.createPasswordBtn).waitForEnabled({ timeout });
    await (await this.createPasswordBtn).click();
  }

  async buttonConfirmNewPasswordIsDasabled() {
    await (await this.createPasswordBtn).waitForExist({ timeout });
    return (await this.createPasswordBtn).getAttribute("disabled");
  }

  logoutApplication() {
    this.logoutButton.waitForExist(timeout);
    this.logoutButton.click();
    this.confirmLogout.waitForExist(timeout);
    this.confirmLogout.click();
    this.onLoginScreen();
  }

  repeatInvalidCredentials(times) {
    let i;

    for (i = 1; i <= times; i++) {
      this.email.click();
      for (let index = 0; index < 30; index++) {
        browser.keys("End");
        browser.keys("Backspace");
      }
      this.email.setValue("darthvader@bancobbm.com.br");
      this.virtualKeyboardHandler("password", "19023845");
      this.submit();

      browser.pause(500);

      // this.eraseButton.click();
      // this.email.click();
      // for (let index = 0; index < 30; index++) {
      //   browser.keys("End");
      //   browser.keys("Backspace");
      // }
    }
  }

  async openCreatePasswordPage(user) {
    let otp = dataGenerator.generateCreatePasswordOtp(user);
    const newPasswordUrl = `${bbmUrl}/create-password?email=${user}&name=Teste#otp=${otp}`;

    this.openAsync(newPasswordUrl);
  }

  switchFeature(feature) {
    this.buttonHeaderUserMenu();

    switch (feature) {
      // case 'Meus Dados':
      //   this.optionMenu(0).click();
      //   break

      case "Suitability":
        this.optionMenuSuitability.click();
        break;

      case "Termos de Produto":
        this.optionMenuTerms.click();
        break;
    }
  }

  generateTokens() {
    throw new Error("Funcionalidade removida.");
  }

  async fillEmailToRecovery() {
    await (await this.inputEmail).waitForExist({ timeout });
    await (await this.inputEmail).setValue("darthvader@bancobbm.com.br");
  }

  async confirmSendingRecoveryEmail() {
    await (await this.emailSentText).waitForExist({ timeout });
    return (await this.emailSentText).getText();
  }

  async sendRequestRecoveryPassword() {
    await (await this.sendButton).waitForExist({ timeout });
    await (await this.sendButton).click();
  }

  async informWrongDocument() {
    await (await this.document).waitForExist({ timeout });
    await (await this.document).setValue("90275048063");
  }

  async informRightDocument() {
    await (await this.document).waitForExist({ timeout });
    await (await this.document).setValue("05332256558");
  }

  async repeatInvalidDocument(times) {
    let i;

    for (i = 1; i <= times; i++) {
      let status = await (await this.loading).isExisting();

      while (status != false) {
        status = await (await this.loading).isExisting();
      }

      await this.informWrongDocument();
      await this.virtualKeyboardHandlerAsync("password", "19023845");
      await this.virtualKeyboardHandlerAsync("confirm password", "19023845");
      await this.confirmNewPassword();
    }
  }

  async setNewPassword(password) {
    await this.virtualKeyboardHandlerAsync("password", "" + password);
    await this.virtualKeyboardHandlerAsync("confirm password", "" + password);
    await this.confirmNewPassword();
  }

  async doesExistModalTerm() {
    return (await this.modalTerm).isExisting();
  }

  async doesExistCloseButton() {
    return (await this.closeButton).isExisting();
  }

  async doesExistAcceptTermsCheckbox() {
    return (await this.acceptTermsCheckbox).isExisting();
  }
}

export default new LoginPage();
