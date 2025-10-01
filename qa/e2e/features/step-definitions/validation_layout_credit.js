import { Given,When, Then } from "@wdio/cucumber-framework";
import { expect } from "chai";
import CreditPage from "../pageobjects/credit.page";

Given(/^acesso a funcionalidade de validação de layout$/, async () => {
    await CreditPage.clickShipmentsMenu();
    await CreditPage.clickFileValidationSubMenu();
});

When(/^seleciono um arquivo CNAB no formato inválido$/, async () => {
    await CreditPage.uploadFileToValidate();
});

When(/^seleciono um arquivo com extensão diferente de rem$/, async () => {
    await CreditPage.uploadFileToValidate("unacceptableFileExtensionToValidate");
});

When(/^seleciono um arquivo CNAB com tamanho maior do que o permitido$/, async () => {
    await CreditPage.uploadFileToValidate("largeCNABToValidate");
});

When(/^seleciono um arquivo CNAB válido$/, async () => {
    await CreditPage.uploadFileToValidate("validateCNAB");
});

When(/^seleciono um arquivo CNAB a ser validado$/, async () => {
    await CreditPage.uploadFileToValidate();
    await CreditPage.waitLoadingAsync();
});

When(/^escolho a opção de baixar arquivo CNAB$/, async () => {
    await CreditPage.clickDownloadOption();
});

Then(/^visualizo a mensagem "([^“]*)"$/, async (message) => {
    expect(await CreditPage.getToastrFeedbackAsync(800)).to.equal(
        message
    );
});

Then(/^visualizo uma modal com a mensagem arquivo válido$/, async () => {
    expect(await CreditPage.getValidFileMessage()).to.equal(
        "Arquivo válido"
    );
});

Then(/^visualizo que um arquivo tipo txt é baixado$/, async () => {
    expect(await CreditPage.checkDownloadsFolder()).to.equal("Validacao.txt");
});
