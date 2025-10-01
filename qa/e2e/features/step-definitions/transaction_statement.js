import { Given, When, Then, Before } from "@cucumber/cucumber";
import { expect } from "chai";
import TransferPagePJ from "../pageobjects/transfers_pj.page";
import TransferPagePF from "../pageobjects/transfers_pf.page";
import TransactionStatementPage from "../pageobjects/transaction_statement.page";
import TransactionVoucherPage from "../pageobjects/transaction_voucher.page";
import Util from '../../utils/util';

Before({ tags: "@MockWithoutNotification" }, async () => {
  await Util.mockWihoutNotificationAPI();
});

Given(/efetuo um agendamento de TED PJ para a próxima ([^"]*)/, (weekday) => {
  TransferPagePJ.accessTransfersMenu();
  TransactionStatementPage.scheduleNewTransferPJ(weekday);
});

Given(/efetuo um agendamento de TED PF para a próxima ([^"]*)/, (weekday) => {
  TransferPagePF.accessTransferMenu();
  TransactionStatementPage.scheduleNewTransferPF(weekday);
});

Given("efetuo uma TED do tipo PF", () => {
  TransferPagePF.accessTransferMenu();
  TransactionStatementPage.newTransferPF();
});

When("acesso minhas transações futuras", () => {
  TransactionStatementPage.accessFutureTransactions();
});

When("acesso a transação que acabei de realizar", () => {
  TransactionStatementPage.accessStatementMenu();
  TransactionStatementPage.searchStatementByValue();
  TransactionVoucherPage.openVoucher();
});

When("desejo visualizar mais detalhes de uma transferência efetuada", () => {
  TransactionStatementPage.accessFirstVoucher();
  TransactionVoucherPage.openVoucher();
});

When("compartilho o comprovante", () => {
  TransactionVoucherPage.shareVoucher();
});

When("alterno entre minhas contas no extrato", () => {
  TransactionStatementPage.accessStatementMenu();
  TransactionStatementPage.changeAccountPJ();
  TransactionStatementPage.selectSecondAccountPJ();
  TransactionStatementPage.confirmChangedAccount();
});

When("filtro por um período futuro", () => {
  TransactionStatementPage.transfersMenuOptionButton();
	TransactionStatementPage.accessStatementMenu();
  TransactionStatementPage.filterBySpecificPeriod();
});

Then(/visualizo que efetuei uma transação do tipo ([^"]*) para ser liquidada no dia ([^"]*)/,
  // eslint-disable-next-line no-unused-vars
  (typeTransaction, weekday) => {
    typeTransaction == "PJ" ? expect(TransactionStatementPage.verifiedValuePJ()).to.equal(true) : expect(TransactionStatementPage.verifiedValuePF()).to.equal(true);
  }
);


Then("visualizo todos os detalhes da minha transação", () => {
  expect(TransactionVoucherPage.voucherAmount()).to.equal(`R$ ${TransactionStatementPage.getDataTransaction().amount}`);
  expect(TransactionVoucherPage.agencyDestination()).to.equal(`${TransactionStatementPage.getDataTransaction().agency}`);
  expect(TransactionVoucherPage.accountDestination()).to.contains(`${TransactionStatementPage.getDataTransaction().account}`);
  expect(TransactionVoucherPage.existAuthCode()).to.be.true;
});

Then("visualizo que o download do comprovante foi realizado", () => {
  expect(TransactionVoucherPage.checkDownloadsFolder()).to.contains("Voucher");
});

Then("visualizo que os meus dados foram alterados no extrato", () => {
  expect(TransactionStatementPage.numberAgencyPJ()).to.contains("107 2 601583-8");
}
);

Then(/^visualizo a mensagem que "([^"]*)"$/, (message) => {
  expect(TransactionStatementPage.existMesageInvalidFutureDate()).to.equal(message);
});
