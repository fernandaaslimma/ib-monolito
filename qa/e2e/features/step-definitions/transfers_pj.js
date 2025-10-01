import { Before, When, Then } from "@cucumber/cucumber";
import { expect } from "chai";
import TransferPJPage from "../pageobjects/transfers_pj.page";
import LoginPage from "../pageobjects/login.page";
import { bbmUrl } from "../../utils/constants";
import Util from '../../utils/util';

Before({ tags: "@MockWihoutNotification" || "@MockDeleteFavoredAccount" }, async ({ pickle }) => {
  if (pickle.tags.find((tagName) => tagName.name == "@MockDeleteFavoredAccount")) {
    await Util.mockWihoutNotificationAPI();
    await Util.mockDeleteFavoredAccountError();
  } 
  else 
    await Util.mockWihoutNotificationAPI();
});

When("abro a modal para ingressar com os dados da transferência", async () => {
  await TransferPJPage.accessTransfersMenu();
  await TransferPJPage.waitLoadingAsync();
  await TransferPJPage.createNewTransfer();
});

When(
  "entro com as informações válidas para um cadastro de uma nova transferência",
  async () => {
    await TransferPJPage.accessTransfersMenu();
    await TransferPJPage.waitLoadingAsync();
    await TransferPJPage.createTransfer(false, false);
  }
);

When(
  "entro com as informações válidas para um cadastro de uma nova transferência com uma conta existente",
  async () => {
  await TransferPJPage.accessTransfersMenu();
  await TransferPJPage.waitLoadingAsync();
  await TransferPJPage.createNewTransferWithExistingAccount(false, false);
});

When(/o ([^"]*) aprova a TED do dia/, async (user) => {
  await TransferPJPage.accessTransfersMenu();
  await TransferPJPage.filteMenuDependece(1);
  await TransferPJPage.filterApply();
  await TransferPJPage.approveTED();
  await TransferPJPage.textTransactionTokenField();
  const token = await TransferPJPage.getToken(user);
  await TransferPJPage.confirmTransactionToken(token);
});

When(
  "entro com informações necessárias para preenchimento da TED sem saldo",
  async () => {
    await TransferPJPage.accessTransfersMenu();
    await TransferPJPage.waitLoadingAsync();
    await TransferPJPage.createTransfer(false, true);
  }
);

When(
  "entro com informações necessárias para preenchimento da TED sem saldo com PJ9",
  async () => {
    await TransferPJPage.accessTransfersMenu();
    await TransferPJPage.waitLoadingAsync();
    await TransferPJPage.createTransfer(false, true);
  }
);

When(
  "entro com informações necessárias para preenchimento da TED sem saldo com uma conta existente",
  async () => {
    await TransferPJPage.accessTransfersMenu();
    await TransferPJPage.waitLoadingAsync();
    await TransferPJPage.createNewTransferWithExistingAccount(false, true);
  }
);

When(
  "entro com informações para uma transferência com data futura sem saldo",
  async () => {
    await TransferPJPage.accessTransfersMenu();
    await TransferPJPage.waitLoadingAsync();
    await TransferPJPage.createTransfer(true, true);
  }
);

When(
  "entro com informações para uma transferência com data futura sem saldo com PJ9",
  async () => {
    await TransferPJPage.accessTransfersMenu();
    await TransferPJPage.waitLoadingAsync();
    await TransferPJPage.createTransfer(true, true);
  }
);

When(
  "entro com informações para uma transferência com data futura sem saldo com uma conta existente",
  async () => {
    await TransferPJPage.accessTransfersMenu();
    await TransferPJPage.waitLoadingAsync();
    await TransferPJPage.createNewTransferWithExistingAccount(true, true);
  }
);

When(/o ([^"]*) aprova a TED com data futura/, async (user) => {
  await TransferPJPage.accessTransfersMenu();
  await TransferPJPage.filteMenuDependece(1);
  await TransferPJPage.filterApply();
  await TransferPJPage.approveTED();
  await TransferPJPage.textTransactionTokenField();
  const token = await TransferPJPage.getToken(user);
  await TransferPJPage.confirmTransactionToken(token);
});

When("entro com informações para uma data inválida", async () => {
  await TransferPJPage.accessTransfersMenu();
  await TransferPJPage.waitLoadingAsync();
  await TransferPJPage.createdTransferInvalidDate();
});

When("cancelo a operação", async () => {
  await TransferPJPage.cancelTransfer();
});

When("cancelo a transferência", async () => {
  await TransferPJPage.cancelTransferButton();
});

When("confirmo a transferência", async () => {
  await TransferPJPage.confirmTedButton();
});

When("visualizo a mensagem de transferência aprovada com sucesso", async () => {
  expect(await TransferPJPage.getToastrFeedback()).to.equal(
    "Transferência aprovada com sucesso"
  );
});

When(
  "visualizo a mensagem de transferência criada e aprovada com sucesso",
  async () => {
    expect(await TransferPJPage.getToastrFeedback()).to.equal(
      "Transferência criada e aprovada com sucesso"
    );
  }
);

When(
  "visualizo a mensagem de transferência agendada e aprovada com sucesso",
  async () => {
    expect(await TransferPJPage.getToastrFeedback()).to.equal(
      "Transferência agendada e aprovada com sucesso"
    );
  }
);

When("logo com o usuario PJ6", async () => {
  await Util.mockWihoutNotificationAPI();
  await LoginPage.openAsync(bbmUrl);
  await LoginPage.loginAsync("pj6");
  await LoginPage.submitAsync();
});

When("confirmo o agendamento de falta de saldo", async () => {
  await TransferPJPage.confirmTedButton();
  await TransferPJPage.confirmScheduling();
});

When(/aprovo a transferência com o ([^"]*)/, async (user) => {
  await TransferPJPage.textTransactionTokenField();
  const token = await TransferPJPage.getToken(user);
  await TransferPJPage.confirmTransactionToken(token);
});

When("escolho a primeira data válida", async () => {
  await TransferPJPage.waitLoadingAsync();
  await TransferPJPage.reviewDate();
});

When("confirmo a transferência com nova data", async () => {
  await TransferPJPage.submitTransfer();
  await TransferPJPage.submitTransfer();
  await TransferPJPage.confirmTedButton();
});

When(
  "entro com informações para uma transferência com data futura",
  async () => {
    await TransferPJPage.accessTransfersMenu();
    await TransferPJPage.waitLoadingAsync();
    await TransferPJPage.createTransfer(true, false);
  }
);

When(
  "entro com informações para uma transferência com data futura com PJ9",
  async () => {
    await TransferPJPage.accessTransfersMenu();
    await TransferPJPage.waitLoadingAsync();
    await TransferPJPage.createTransfer(true, false);
  }
);

When(
  "entro com informações para uma transferência com data futura com uma conta existente",
  async () => {
    await TransferPJPage.accessTransfersMenu();
    await TransferPJPage.waitLoadingAsync();
    await TransferPJPage.createNewTransferWithExistingAccount(true, false);
  }
);

When("entro com informações para uma data de feriado", () => {
  TransferPJPage.createdTransferInvalidDateHoliday();
});

When("cancelo o agendamento por falta de saldo", async () => {
  await TransferPJPage.cancelScheduling();
});

When("seleciono uma nova data", async () => {
  await TransferPJPage.agendeOtherDate();
});

When(
  "entro com informações necessárias para preenchimento da TED com CNPJ inválido",
  async () => {
    await TransferPJPage.accessTransfersMenu();
    await TransferPJPage.waitLoadingAsync();
    await TransferPJPage.createdTransferInvalidCNPJ();
  }
);

When(
  "entro com as informações válidas para um cadastro de uma nova transferência com PJ9",
  async () => {
    await TransferPJPage.accessTransfersMenu();
    await TransferPJPage.waitLoadingAsync();
    await TransferPJPage.createTransfer(false, false);
  }
);

When(
  "acesso a lista de favorecidos",
  async () => {
    await TransferPJPage.accessTransfersMenu();
    await TransferPJPage.waitLoadingAsync();
    await TransferPJPage.accessFavoredList();
    await TransferPJPage.waitLoadingAsync();
    await TransferPJPage.chooseOriginAccount(true);
  }
);

When(
  "seleciono a opção excluir entre um dos favorecidos",
  async () => {
    await TransferPJPage.waitLoadingAsync();
    await TransferPJPage.clickDeleteButton();
    await TransferPJPage.confirmDelete();
  }
);

When(
  "acesso a lista de favorecidos de uma conta que não possui favorecidos",
  async () => {
    await TransferPJPage.accessTransfersMenu();
    await TransferPJPage.waitLoadingAsync();
    await TransferPJPage.accessFavoredList();
    await TransferPJPage.chooseOriginAccount(false);
  }
);

Then("visualizo que a modal foi fechada", async () => {
  expect(await TransferPJPage.existCancelButton()).to.equal(false);
});

Then("visualizo que a modal de confirmação foi fechada", async () => {
  expect(await TransferPJPage.existModal()).to.equal(false);
});

Then("visualizo a mensagem de transferência agendada com sucesso", async () => {
  expect(await TransferPJPage.getToastrFeedback()).to.equal(
    "Transferência agendada com sucesso"
  );
});

Then(
  "visualizo a mensagem de transferência cadastrada com sucesso",
  async () => {
    expect(await TransferPJPage.getToastrFeedback()).to.equal(
      "Transferência cadastrada com sucesso"
    );
  }
);

Then("visualizo que voltei para o cadastro da TED", async () => {
  expect(await TransferPJPage.confirmInsufficientFunds()).to.equal(false);
  await TransferPJPage.waitLoadingAsync();
  expect(await TransferPJPage.existTransferBox()).to.equal(true);
});

Then(
  "a TED deve ser exibida em Lançamentos Futuros como Aguardando Liquidação",
  async () => {
    await TransferPJPage.filteMenuDependece(2);
    await TransferPJPage.filterApply();
    await TransferPJPage.waitLoadingAsync();
    expect(await TransferPJPage.verifyTransferStatus()).to.equal(
      "Aguardando Liquidação"
    );
  }
);

Then("vejo que não aparece o fluxo de aprovação", async () => {
  expect(await TransferPJPage.thereIsNoMFAProcess()).to.be.false
});

Then(
  "visualizo a mensagem de alerta que o CNPJ não é válido",
  async () => {
    expect(await TransferPJPage.invalidCNPJAlert()).to.equal(
      "CNPJ não é válido."
    );
  }
);

Then(
  "vejo que não é possível cadastrar a TED",
  async () => {
    expect(await TransferPJPage.submitTransferBtnDisabled()).to.equal("true");
  }
);

Then(
  "visualizo que a conta do favorecido foi excluída",
  async () => {
    expect(await LoginPage.getToastrFeedbackAsync(800)).to.equal(
      "Conta excluída"
    );
  }
);

Then(
  "visualizo a mensagem sem favorecidos cadastrados",
  async () => {
    expect(await TransferPJPage.withoutRegisteredFavored()).to.equal(
      "Sem favorecidos cadastrados"
    );
  }
);

Then(
  "visualizo a mensagem Conta não excluída. Tente novamente.",
  async () => {
    expect(await LoginPage.getToastrFeedbackAsync(800)).to.equal(
      "Conta não excluída. Tente novamente."
    );
  }
);
