import {
  Given,
  When,
  Then
} from "@cucumber/cucumber";
import {
  expect
} from "chai";
import LoginPage from "../pageobjects/login.page";
import { usedCreatedPasswordUrl } from "../../utils/constants"

// This will carry the users credentials object through test runs
let usersObj;

Given("que a tela de cadastro de senha é exibida com um link válido", async () => {
  await LoginPage.openCreatePasswordPage("darthvader@bancobbm.com.br");
});

Given("que a tela de cadastro de senha é exibida com um link expirado", async () => {
  await LoginPage.openAsync(usedCreatedPasswordUrl);
});

When("informo meus dados válidos para o cadastro de senha", async () => {
  usersObj = LoginPage.generatePassword("darthvader");
  await LoginPage.informRightDocument();
  await LoginPage.setNewPassword(usersObj["darthvader"].password);
});

When("informo um documento válido e a senha {word}", async (password) => {
  await LoginPage.informRightDocument();
  await LoginPage.setNewPassword(password);
});

When(
  "informo um documento inválido e uma senha válida por seis vezes consecutivas",
  async () => {
    await LoginPage.repeatInvalidDocument(6);
  }
);

When("informo uma senha válida sem informar o documento necessário", async () => {
  usersObj = LoginPage.generatePassword("darthvader");
  await LoginPage.setPassword(usersObj["darthvader"].password);
});

When(
  "informo um email para envio das instruções de redefinição de senha",
  async () => {
    await LoginPage.fillEmailToRecovery();
    await LoginPage.sendRequestRecoveryPassword();
  }
);

Then("visualizo o toastr de senha cadastrada com sucesso", async () => {
  expect(await LoginPage.getToastrFeedbackAsync()).to.equal(
    "Your password has been successfully registered!"
  );
  LoginPage.saveGeneratedPassword(usersObj);
});

Then(/visualizo a mensagem de erro ([^"]*)/, async (messageErro) => {
  expect(await LoginPage.getCreatePasswordFeedbackerror()).to.equal(messageErro);
});

Then("visualizo a mensagem que o link foi expirado", async () => {
  expect(await LoginPage.getCreatePasswordFeedbackerror()).to.equal(
    "The link you received has expired or you may have already used it."
  );
});

Then(
  "visualizo a mensagem que excedi o limite de tentantivas de recuperação de senha",
  async () => {
    expect(await LoginPage.getCreatePasswordFeedbackerror()).to.equal(
      "You have exceeded the limit for password recovery attempts. Please restart the process on the login page."
    );
  }
);

Then("o botão para confirmação da senha não deverá estar habilitado", async () => {
  expect(await LoginPage.buttonConfirmNewPasswordIsDasabled()).to.equal("true");
});

Then("vejo que retornei para a tela de login", async () => {
  expect(await LoginPage.onLoginScreen()).to.be.true;
});
