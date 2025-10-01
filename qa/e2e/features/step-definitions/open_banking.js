import {
  Given,
  When,
  Then,
  Before
} from '@cucumber/cucumber';
import {
  expect
} from "chai";
import LoginPage from '../pageobjects/login.page';
import OpenBankingPage from '../pageobjects/open_banking.page';
import Util from '../../utils/util';

Before({ tags: "@MockWihoutNotification" }, async () => {
  await Util.mockWihoutNotificationAPI();
});

Given(/que estou logado com o usuário ([^"]*) para consentir os dados solicitado/, async (user) => {
  let urlPrepared;

  const url = await OpenBankingPage.openBankingUrl(user);
  await LoginPage.openAsync(url[0].toString());

  await browser.waitUntil(async () => {
    const state = await browser.execute(function () {
      return document.readyState;
    });

    return state === 'complete';
  }, {
    timeout: 60000,
    timeoutMsg: 'Problema com o carregamento da página'
  });

  urlPrepared = url[1];
  await browser.pause(4000);
  await LoginPage.openAsync(urlPrepared);

  const userFound = await LoginPage.searchUser(user);
  await LoginPage.loginAsync(userFound);
  await LoginPage.submitAsync();
});

Given(/que estou logado com o usuário ([^"]*) para consentir o compartilhamento do meu ([^"]*)/, async (user, typeToShare) => {
  await OpenBankingPage.openBankingUrl(user, typeToShare).then(async (url) => {
    await LoginPage.openAsync(url.toString());
  });

  const userFound = await LoginPage.searchUser(user);
  await LoginPage.loginAsync(userFound);
  await LoginPage.submitAsync();
});

Given("possuo um compartilhamento transmitido ativo", async () => {
  await OpenBankingPage.createConsentActive("Open Banking PF");
  await OpenBankingPage.waitLoadingAsync();
  await OpenBankingPage.clickOpenBankingMenu();
  await OpenBankingPage.clickOpenTabTransmitted();
  await OpenBankingPage.clickFirstCard();
});

When("confirmo os dados que vou consentir", async () => {
  await browser.pause(5000);
  await OpenBankingPage.clickContinueButton();

  expect(await OpenBankingPage.getValueCpfOrCnpjLabel()).to.equal("338.032.330-62");
  expect(await OpenBankingPage.getValueOrganizationNameLabel()).to.equal("BCO BOCOM BBM S.A.");
  expect(await OpenBankingPage.getValueExpirationDateTime()).to.equal(`12 meses | ${OpenBankingPage.calculateTime()}`);
  expect(await OpenBankingPage.existApprovers()).to.be.false;

  await OpenBankingPage.clickConsentConfirmButton();
  await OpenBankingPage.waitLoadingAsync();
});

When("durante o fluxo de aprovação realizo o cancelamento", async () => {
  await browser.pause(3000);
  await OpenBankingPage.clickCancelButton();
  await browser.pause(3000);
  await OpenBankingPage.clickCancelSharingButton();
  await OpenBankingPage.waitLoadingAsync();
});

When("acesso a minha lista de transmitidos do Open Banking", async () => {
  await OpenBankingPage.clickOpenBankingMenu();
  await OpenBankingPage.clickOpenTabTransmitted();
});

When("solicito um novo consentimento para uma determinada instituição", async () => {
  await OpenBankingPage.waitLoadingAsync();
  await OpenBankingPage.clickOpenBankingMenu();
  await OpenBankingPage.waitLoadingAsync();
  await OpenBankingPage.clickNewConsentSubMenu();
  await OpenBankingPage.waitLoadingAsync();
  await OpenBankingPage.clickSelectBank();
  await OpenBankingPage.clickCardBank();
  await OpenBankingPage.waitLoadingAsync();
  await OpenBankingPage.clickContinueNewConsentButton();
  await OpenBankingPage.waitLoadingAsync();
  await OpenBankingPage.clickContinueNewConsentButton();
  await OpenBankingPage.waitLoadingAsync();
  await OpenBankingPage.clickConsentConfirmButton();
  await OpenBankingPage.waitLoadingAsync();
});

When("encerro um compartilhamento", async () => {
  await OpenBankingPage.clickCardEndSharing();
  await OpenBankingPage.clickConfirmEndSharing();
});

When("escolho um compartilhamento transmitido pendente", async () => {
  await OpenBankingPage.prepareConsentToTransmission("Open Banking PF");
  await OpenBankingPage.waitLoadingAsync();
  await OpenBankingPage.clickOpenBankingMenu();
  await OpenBankingPage.clickOpenTabTransmitted();
  await OpenBankingPage.clickFirstCard();
});

When("escolho um compartilhamento recebido pendente", async () => {
  await OpenBankingPage.openBankingUrl("Open Banking PF");
  await OpenBankingPage.waitLoadingAsync();
  await OpenBankingPage.clickOpenBankingMenu();
  await OpenBankingPage.clickReceived();
  await OpenBankingPage.clickFirstCard();
});

When(/realizo o login com o usuário ([^"]*)/, async (user) => {
  const userFound = await LoginPage.searchUser(user);
  await LoginPage.loginAsync(userFound);
  await LoginPage.submitAsync();

  expect(await LoginPage.verifyHeaderSucess()).to.be.true;
});

When("acesso os meus compartilhamentos", async () => {
  await OpenBankingPage.clickMyShares();
});

When("seleciono a instituição financeira bbm", async () => {
  await OpenBankingPage.clickSelectBank();
  await OpenBankingPage.clickCardBank();
});

When("tento concluir o compartilhamento", async () => {
  await OpenBankingPage.waitLoadingAsync();
  await OpenBankingPage.clickContinueNewConsentButton();
  await OpenBankingPage.waitLoadingAsync();
});

Then("visualizo que os dados foram consentidos", async () => {
  expect(await OpenBankingPage.isExistScreenRedirect()).to.be.true;
});

Then("visualizo que fui redirecionado para a instituição para aprovar a solicitação", async () => {
  expect(await OpenBankingPage.confirmRedirect()).to.be.true;
});

Then("visualizo que os dados foram consentidos no retorno para o Internet Banking", async () => {
  const status = await OpenBankingPage.checkRedirectSuccessful();
  expect(status).to.equal("Solicitação de compartilhamento de dados efetivada com sucesso.");
});

Then("visualizo que os dados não foram consentidos no retorno para o Internet Banking", async () => {
  const status = await OpenBankingPage.checkRedirectSuccessful();
  expect(status).to.equal("Solicitação de compartilhamento de dados efetivada com sucesso.");
});

Then("visualizo que existe uma lista com um ou mais aprovadores", async () => {
  await OpenBankingPage.clickContinueButton();
  expect(await OpenBankingPage.existApprovers()).to.be.true;
});

Then("visualizo que é possível cancelar o compartilhamento", async () => {
  expect(await OpenBankingPage.existCardEndSharing()).to.be.true;
});

Then("visualizo a mensagem de compartilhamento encerrado", async () => {
  expect(await OpenBankingPage.getMessageAccount()).to.equal("Compartilhamento encerrado");
});

Then("visualizo que não é possível encerrar o compartilhamento", async () => {
  expect(await OpenBankingPage.doesNotExistEndSharing()).to.be.false;
});

Then("visualizo que fui redirecionada para a página de criar novo consentimento", async () => {
  await OpenBankingPage.waitLoadingAsync();
  expect(await OpenBankingPage.valueUrl()).to.contains('/new-consent');
});

Then("visualizo que estou nos meus compartilhamentos recebidos", async () => {
  expect(await OpenBankingPage.doesExistReceived()).to.be.true;
});

Then("vejo que não existe opção de compartilhamentos transmitidos", async () => {
  expect(await OpenBankingPage.doesExistTransmitted()).to.be.false;
});

Then("visualizo uma mensagem de que não possuo autorização para compartilhar dados da BBM", async () => {
  expect(await OpenBankingPage.messageStatus()).to.equal('Para compartilhar dados com outras instituições é necessário ser cliente do Banco BOCOM BBM.');
});
