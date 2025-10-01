import { Before, When, Then } from '@wdio/cucumber-framework'
import PowerOfAttorneyPage from '../pageobjects/power_of_attorney.page';
import TransferPJPage from '../pageobjects/transfers_pj.page';
import Util from '../../utils/util';
import { expect } from "chai";

Before({ tags: "@MockWihoutNotificationAPI" }, async () => {
	await Util.mockWihoutNotificationAPI();
});

When(/^seleciono uma outra conta para realizar uma nova transferência$/, async () => {
	await TransferPJPage.accessTransfersMenu();
	await TransferPJPage.waitLoadingAsync();
	await TransferPJPage.createNewTransfer();

	await PowerOfAttorneyPage.setTransferAmount();
	await PowerOfAttorneyPage.selectAnAccount();
});

When(/^informo um valor para realizar o cadastro de uma nova transferência$/, async () => {
	await TransferPJPage.accessTransfersMenu();
	await TransferPJPage.waitLoadingAsync();
	await TransferPJPage.createNewTransfer();

	await PowerOfAttorneyPage.selectAnAccount();
	await PowerOfAttorneyPage.setTransferAmount();
});

Then(/^visualizo que minha procuração está vencida$/, async () => {
	expect(await PowerOfAttorneyPage.getMessageErrorDefault()).to.contain('Sua procuração está vencida');
	expect(await PowerOfAttorneyPage.getMessageErrorDefault()).to.contain('Não será possível realizar esta operação');
	expect(await PowerOfAttorneyPage.getMessageErrorDefault()).to.contain('Por favor, procure seu Banker para renovar sua procuração.');
});