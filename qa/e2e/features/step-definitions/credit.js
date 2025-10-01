import { Before, When, Then } from "@wdio/cucumber-framework";
import { expect } from "chai";
import CreditPage from "../pageobjects/credit.page";
import Util from "../../utils/util";

Before({ tags: "@MockWihoutNotification" }, async () => {
  await Util.mockWihoutNotificationAPI();
});

When(/^faço o download de um recebível$/, async () => {
  await CreditPage.clickShipmentsMenu();
  await CreditPage.clickReturnsSubMenu();
  await CreditPage.clickDownloadReturnButton();
});

When(/^acesso a opção de retorno para download de recebíveis$/, async () => {
  await CreditPage.clickShipmentsMenu();
  await CreditPage.clickReturnsSubMenu();
});

When(/^faço o upload de uma remessa$/, async () => {
  await CreditPage.clickShipmentsMenu();
  await CreditPage.clickUploadSubMenu();
  await CreditPage.uploadFile("newCNAB");
});

When(
  /^tento realizar o upload de um arquivo enviado anteriormente$/,
  async () => {
    await CreditPage.clickShipmentsMenu();
    await CreditPage.clickUploadSubMenu();
    await CreditPage.uploadFile("sameCNAB");
  }
);

When(
  /^tento realizar o upload de um arquivo que não é permitido$/,
  async () => {
    await CreditPage.clickShipmentsMenu();
    await CreditPage.clickUploadSubMenu();
    await CreditPage.uploadFile("unacceptableFileExtension");
  }
);

When(
  /^tento realizar o upload de um arquivo com o tamanho acima do permitido$/,
  async () => {
    await CreditPage.clickShipmentsMenu();
    await CreditPage.clickUploadSubMenu();
    await CreditPage.uploadFile("largeCNAB");
  }
);

When(/^tento realizar o upload de um arquivo CNAB inválido$/, async () => {
  await CreditPage.clickShipmentsMenu();
  await CreditPage.clickUploadSubMenu();
  await CreditPage.uploadFile();
});

When(/^acesso a opção de upload de remessas em recebíveis$/, async () => {
  await CreditPage.clickShipmentsMenu();
  await CreditPage.clickUploadSubMenu();
});

Then(/^visualizo que o download foi realizado com sucesso$/, async () => {
  await browser.pause(1000);
  expect(await CreditPage.checkDownloadsFolder()).to.contains(".ret");
});

Then(/^visualizo o retorno "([^“]*)"$/, async (message) => {
  expect(await CreditPage.emptyStateShipmentsMessage()).to.contains(
    message
  );
});
