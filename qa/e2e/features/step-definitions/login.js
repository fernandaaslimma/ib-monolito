import {
  Given,
  When,
  Then,
  Before
} from "@cucumber/cucumber";
import {
  assert,
  expect
} from "chai";
import LoginPage from "../pageobjects/login.page";
import SuitabilityPage from "../pageobjects/suitability.page";
import AtualizacaoCadastralPage from "../pageobjects/atualizacao_cadastral.page";
import MfaBoardingPage from "../pageobjects/mfa_boarding.page";
import { bbmUrl } from "../../utils/constants";
const dataGenerator = require("../../utils/data-generator");
import Util from '../../utils/util';

Before({ tags: "@MockNotification" }, async () => {
  await Util.mockNotificationWithPopUpBlockingAPI();
});

Given("que a tela de login esta sendo exibida", async () => {
  await LoginPage.openAsync(bbmUrl);
});

Given(
  /que estou logado na home do Internet Banking com o usuário ([^"]*)/,
  async (user) => {
    await LoginPage.openAsync(bbmUrl);
    const userFound = await LoginPage.searchUser(user);
    await LoginPage.loginAsync(userFound);

    await LoginPage.submitAsync();
  }
);

When(/seleciono a opção de ([^"]*)/, async (option) => {
  await LoginPage.selectOption(option);
});

When("o usuário ingressar com credenciais válidas", () => {
  LoginPage.login("sotransactions");
  LoginPage.submit();
});

When("o usuário reingressar com credenciais válidas", () => {
  LoginPage.login("darthvader");
  LoginPage.submit();
});

When(
  "o usuário ingressar com credenciais válidas que contenham documentos",
  () => {
    LoginPage.login("lucas");
    LoginPage.submit();
  }
);

When(
  "o usuário ingressar com credenciais válidas que não contenham documentos",
  () => {
    LoginPage.login("andremendes");
    LoginPage.submit();
  }
);

When("o usuário ingressar com credenciais inválidas", () => {
  LoginPage.repeatInvalidCredentials(1);
});

When("realizar uma tentativa de cross site request forgery", () => {
  LoginPage.generateTokens();
});

When(
  /um usuario sem permissao de uso da funcionalidade ([^"]*) ingressar/,
  (feature) => {
    LoginPage.login(feature, true);
    LoginPage.submit();
  }
);

When(
  "o usuario assinante do primeiro grupo ingressar com credenciais válidas",
  () => {
    LoginPage.login("pj6");
    LoginPage.submit();
  }
);

When("o usuário ingressar com a senha inválidas 3 vezes", () => {
  dataGenerator.setNewPassword("88776655");

  LoginPage.repeatInvalidCredentials(3);
});

When(
  "o usuario assinante do segundo grupo ingressar com credenciais válidas",
  () => {
    LoginPage.logoutApplication();
    LoginPage.login("pj4");
    LoginPage.submit();
  }
);

When(
  "um usuario assinante de mesmo grupo ingressar com credenciais válidas",
  () => {
    LoginPage.logoutApplication();
    LoginPage.login("pj5");
    LoginPage.submit();
  }
);

When(
  "o usuário cadastrador-aprovador de uníca alçada ingressar com credenciais válidas",
  () => {
    LoginPage.login("pj9");
    LoginPage.submit();
  }
);

When(
  "o usuário cadastrador-aprovador ingressar com credenciais válidas",
  () => {
    LoginPage.login("pj8");
    LoginPage.submit();
  }
);

When("o usuário cadastrador ingressar com credenciais válidas", () => {
  LoginPage.login("pj3");
  LoginPage.submit();
});

When("o primeiro aprovador ingressar com credenciais válidas", () => {
  LoginPage.logoutApplication();
  LoginPage.login("pj5");
  LoginPage.submit();
});

When("o segundo aprovador ingressar com credenciais válidas", () => {
  LoginPage.logoutApplication();
  LoginPage.login("pj6");
  LoginPage.submit();
});

When("o usuário com Role Registrato", () => {
  LoginPage.login("com registrato");
  LoginPage.submit();
});

When("o usuário sem Role Registrato", () => {
  LoginPage.login("sem registrato");
  LoginPage.submit();
});

When("o usuário com Atualização Cadastral realizar o login", () => {
  LoginPage.login("atualizacaocadastral");
  LoginPage.submit();
});

When(/acesso a funcionalidade ([^"]*) no menu de usuário/, (feature) => {
  MfaBoardingPage.closeMfaBoarding();
  SuitabilityPage.closeSuitabilityWithoutMfa();
  SuitabilityPage.fecharSuitability();
  AtualizacaoCadastralPage.fecharAtualizacaoCadastral();
  LoginPage.switchFeature(feature);
});

When("acesso ao menu de usuário", () => {
  SuitabilityPage.fecharSuitability();
  AtualizacaoCadastralPage.fecharAtualizacaoCadastral();
  MfaBoardingPage.closeMfaBoarding();
  LoginPage.buttonHeaderUserMenu();
});

Then(
  /a funcionalidade ([^"]*) não deve estar disponível para o usuário/,
  (feature) => {
    LoginPage.checkUnavailableFeature(feature);
  }
);

Then("o login deve ser realizado", () => {
  expect(LoginPage.verifyHeaderSucess()).to.be.true;
});

Then("o login não deve ser realizado", () => {
  expect(LoginPage.verifyHeaderFalied()).to.equal(false);
});

Then("o login deve ser expirado", () => {
  LoginPage.selectOption("equities");

  assert.isTrue(LoginPage.onLoginScreen());
});

Then("visualizo a confirmação do envio de email", async () => {
  expect(await LoginPage.confirmSendingRecoveryEmail()).to.equal(
    "If the darthvader@bancobbm.com.br address is a valid email, you'll receive a link to recover your password"
  );
});

Then(/vejo que consigo visualizar a funcionalidade ([^"]*)/, (feature) => {
  const valueUrl = LoginPage.valueUrl();

  switch (feature) {
    // case "Meus Dados":
    //   expect(valueUrl).to.have.string('/registrationData')
    //   break;
    case "Suitability":
      expect(valueUrl).to.have.string("/suitability");
      break;
    case "Termos de Produto":
      expect(valueUrl).to.have.string("/terms");
      break;
  }
});

Then("vejo que não é possível visualizar a opção de Suitability", () => {
  expect(LoginPage.optionMenuSuitability.isExisting()).to.equal(false);
});

Then("verifico que não é possível fechar a notificação sem concordar com a mesma", async () => {
  await browser.pause(5000);
  expect(await loginPage.doesExistModalTerm()).to.be.true;
  expect(await loginPage.doesExistCloseButton()).to.be.false;
  expect(await loginPage.doesExistAcceptTermsCheckbox()).to.be.false;
});
