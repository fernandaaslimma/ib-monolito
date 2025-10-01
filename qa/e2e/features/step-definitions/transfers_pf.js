import { Given, When, Then, Before } from "@cucumber/cucumber";
import { expect } from "chai";
import TransfersPFPage from "../pageobjects/transfers_pf.page";
import Util from '../../utils/util';

Before({ tags: "@MockWihoutNotification" }, async () => {
  await Util.mockWihoutNotificationAPI();
  await Util.teste();
});

Given("acesso a funcionalidade de cadastro de TED para pessoa física", async () => {
  await TransfersPFPage.clickAccessCashAccount();
  await TransfersPFPage.clickAccessTransferMenu();
});

When(/efetuo uma TED PF ([^"]*)/, async (typeTransaction) => {
  await TransfersPFPage.createTransferSuccessful(typeTransaction);
  await TransfersPFPage.confirmTransaction();

  await TransfersPFPage.mfaProcess();
});

When(
  "informo os dados necessários de agendamento para efetuar a minha TED",
  async () => {
    await TransfersPFPage.createTransferSuccessful(true, false);
    await TransfersPFPage.confirmTransaction();

    await TransfersPFPage.mfaProcess();
  }
);

When("seleciono o incrementador de valor sugerido", async () => {
  await TransfersPFPage.chooseAccount();
  await TransfersPFPage.waitLoadingAsync();
  await TransfersPFPage.chooseFiveThousandsIncrement();
});

When("informo os meus dados bancários", async () => {
  await TransfersPFPage.chooseNewAccountButton();
  await TransfersPFPage.fillBankData();
  await TransfersPFPage.reviewData();
  await TransfersPFPage.confirmTransaction();

  await TransfersPFPage.mfaProcess();
});

When(/informo um valor para transferência de R\$ ([^"]*)/, async (value) => {
  await TransfersPFPage.chooseAccount();
  await TransfersPFPage.waitLoadingAsync();
  await TransfersPFPage.setTransferAmount(value);
});

When("decido selecionar o valor total sugerido", async () => {
  await TransfersPFPage.chooseAmountTotalButton();
});

When("seleciono o valor incrementador de R$ 5 mil duas vezes", async () => {
  await TransfersPFPage.chooseFiveThousandsIncrement(2);
  await browser.pause(1000);
});

When("preencho um valor acima do disponível na minha conta", async () => {
  await TransfersPFPage.addingBalanceInsufficient();
});

When("seleciono um dia não útil para realizar TED", async () => {
  await TransfersPFPage.notcreateTransferInvalidDate();
});

When("não informo uma data para realizar uma TED", async () => {
  await TransfersPFPage.notcreateTransferWithoutDate();
});

When("informo os dados para realizar uma TED", async () => {
  await TransfersPFPage.chooseAccount();
  await TransfersPFPage.createTransferSuccessful();
});

When("decido alterar minha conta que será beneficada", async () => {
  await TransfersPFPage.alterRecipientBankAccount();

  await TransfersPFPage.mfaProcess();
});

When("decido alterar para uma data futura", async () => {
  await TransfersPFPage.alterTransferToScheduling();

  await TransfersPFPage.mfaProcess();
});

When(
  "não preencho todos os dados necessários para efetuar o cadastro da TED",
  async () => {
    await TransfersPFPage.chooseNewAccountButton();
  }
);

When("acesso as minhas contas cadastradas", async () => {
  await TransfersPFPage.newTransfer();
  await TransfersPFPage.forceWait();
  await TransfersPFPage.chooseAccount();
  await TransfersPFPage.accessFavoredAccountList();
});

When("seleciono uma conta previamente cadastrada", async () => {
  await TransfersPFPage.chooseAccount();
  await TransfersPFPage.accessFavoredAccountList();
  await TransfersPFPage.selectARegisteredAccount();
});

When("seleciono outra conta diferente", async () => {
  await TransfersPFPage.changeFavoreAccount();
  await TransfersPFPage.accessFavoredAccountList();
  await TransfersPFPage.selectAnotherRegisteredAccount();
});

When("busco por um contato préviamente cadastro", async () => {
  await TransfersPFPage.searchByAccountRegistered("Jane Lucia");
});

When("busco por um contato que não está previamente cadastrado", async () => {
  await TransfersPFPage.searchByAccountRegistered("Não existe");
})

When("tento cadastrar uma TED PF acima do valor permitido de 300 mil", async () => {
  await TransfersPFPage.setTransferAmount(30000001);
  await TransfersPFPage.accessFavoredAccountList();
  await TransfersPFPage.selectARegisteredAccount();
  await TransfersPFPage.reviewData();
})

Then("visualizo a mensagem de transferência realizada com sucesso", async () => {
  expect(await TransfersPFPage.getToastrFeedback()).to.equal(
    "Transferência realizada com sucesso"
  );
});

Then("visualizo que a TED foi realizada com sucesso", async () => {
  expect(await TransfersPFPage.operationSuccessful()).to.be.true;
  expect(await TransfersPFPage.hasScheduled()).to.equal(false);
  expect(await TransfersPFPage.resumeOperationValueTed()).to.equal(
    "R$ " + (await TransfersPFPage.resultTransfer()).amount
  );
  expect(await TransfersPFPage.resumeOperationAgency()).to.equal((await
    TransfersPFPage.resultTransfer()).bankBranch
  );
  expect(await TransfersPFPage.resumeOperationAccount()).to.contains((await
    TransfersPFPage.resultTransfer()).bankAccount
  );
});

Then("visualizo que a TED foi agendada com sucesso", async () => {
  expect(await TransfersPFPage.operationSuccessful()).to.be.true;
  expect(await TransfersPFPage.hasScheduled()).to.be.true;
});

Then("visualizo que consta somente o valor total da minha conta", async () => {
  await browser.pause(1000);
  expect(await TransfersPFPage.getOnlyAmount()).to.equal(
    await TransfersPFPage.getAmountInput()
  );
});

Then("visualizo que o valor informado é de R$ 10.500,00 mil", async () => {
  expect(await TransfersPFPage.getAmountInput()).to.equal("1050000");
});

Then("visualizo uma crítica de que meu saldo é insuficiente", async () => {
  expect(await TransfersPFPage.balanceInsufficient()).to.equal(
    "O saldo da conta é insuficiente, caso deseje continuar, sua TED será efetivada dentro do horário permitido da data selecionada."
  );
});

Then("visualizo a crítica para selecionar uma data útil", async () => {
  expect(await TransfersPFPage.alertMessageInvalidDay()).to.equal(
    "Essa data não é um dia útil. Selecione uma data disponível."
  );
});

Then("visualizo a crítica que é necessário informar uma data", async () => {
  expect(await TransfersPFPage.alertMessageInvalidDate()).to.equal(
    "Informe uma data válida"
  );
});

Then("visualizo que não é possivel prosseguir com a criação da TED", async () => {
  expect(await TransfersPFPage.reviewDataButtonIsDisabled()).to.equal("true");
});

Then("visualizo a minha nova conta bancária cadastrada", async () => {
  expect(await TransfersPFPage.existRegisteredAccount()).to.be.true;
});

Then("visualizo que a transação foi realizada com a conta selecionada", async () => {
  expect(await TransfersPFPage.operationSuccessful()).to.be.true;
  expect(await TransfersPFPage.resumeOperationAgency()).to.equal(3001);
  expect(await TransfersPFPage.resumeOperationAccount()).to.contains("35580-1");
});

Then("visualizo que a conta que está sendo exibida foi da minha última mudança", async () => {
  expect(await TransfersPFPage.agencyFavored()).to.contains("0012");
  expect(await TransfersPFPage.accountFavored()).to.contains("04337-7");
});

Then("visualizo o contato pesquisado", async () => {
  expect(await TransfersPFPage.existsRegisteredAccount()).to.be.false;
});

Then("visualizo que o contato não está cadastrado", async () => {
  expect(await TransfersPFPage.existsRegisteredAccount()).to.be.true;
});

Then("visualizo mensagem de limite atingido", async () => {
  expect(await TransfersPFPage.existTedLimitReached()).to.be.true;
});
