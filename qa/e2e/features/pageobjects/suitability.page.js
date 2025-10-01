"use strict";

const { expect } = require("chai");
const page = require("./page");
const mfaBoardingPage = require("./mfa_boarding.page");
const shorterTimeout = 3000;

class SuitabilityPage extends page {
  get paginaSuitability() {
    return $('[data-test="PageAsModal"]');
  }
  get responderDepois() {
    return '[data-test="Button"]';
  }
  get responderAgora() {
    return '[data-test="Link"]';
  }
  get pergunta1() {
    return '[data-test="suitability_step_1"]';
  }
  get pergunta2() {
    return '[data-test="suitability_step_2"]';
  }
  get pergunta3() {
    return '[data-test="suitability_step_3"]';
  }
  get pergunta4() {
    return '[data-test="suitability_step_4"]';
  }
  get pergunta5() {
    return '[data-test="suitability_step_5"]';
  }
  get pergunta6() {
    return '[data-test="suitability_step_6"]';
  }
  get pergunta7() {
    return '[data-test="suitability_step_7"]';
  }
  get pergunta8() {
    return '[data-test="suitability_step_8"]';
  }
  get pergunta9() {
    return '[data-test="suitability_step_9"]';
  }
  get pergunta10() {
    return '[data-test="suitability_step_10"]';
  }
  get pergunta11() {
    return '[data-test="suitability_step_11"]';
  }
  get pergunta12() {
    return '[data-test="suitability_step_12"]';
  }
  get pergunta13() {
    return '[data-test="suitability_step_13"]';
  }
  get pergunta14() {
    return '[data-test="suitability_step_14"]';
  }
  get pergunta15() {
    return '[data-test="suitability_step_15"]';
  }
  get pergunta16() {
    return '[data-test="suitability_step_16"]';
  }
  get pergunta17() {
    return '[data-test="suitability_step_17"]';
  }
  get pergunta18() {
    return '[data-test="suitability_step_18"]';
  }
  get pergunta19() {
    return '[data-test="suitability_step_19"]';
  }
  get composicaoPatrimonio() {
    return $('[id="9"]');
  }
  get composicaoPatrimonioFI() {
    return $('[id="1"]');
  }
  get perfil() {
    return $('[data-test="suitabilityProfile"]');
  }
  get tokenField() {
    return $('[data-test="TransactionTokenField"]');
  }
  get confirmTokenButton() {
    return $('[data-test="Confirm"]');
  }

  get answerLaterSuitability() {
    return $('[data-test="answerLater"]');
  }

  getErrorMsg() {
    return $('[data-test="ModalFeedbackMsg"]').getText();
  }

  getPerfil() {
    return $('[data-test="suitabilityProfile"]').getText();
  }

  async fecharSuitability() {
    try {
      await this.waitLoadingAsync();
      await this.paginaSuitability.waitForExist({ shorterTimeout });
      await this.answerLaterSuitability.waitForClickable();
      await this.answerLaterSuitability.click();
      return true
    } catch (error) {
      return false
    }
  }

  async closeSuitabilityAsync() {
    try {
      await this.waitLoadingAsync();
      await (await this.paginaSuitability).waitForExist({ shorterTimeout });
      await (await this.answerLaterSuitability).waitForClickable();
      await (await this.answerLaterSuitability).click();
      return;
    } catch (error) {
      return;
    }
  }

  closeSuitabilityWithoutMfa() {
    try {
      mfaBoardingPage.registerLater();
      mfaBoardingPage.registerLater();
      mfaBoardingPage.exitConfirmation();
      return true
    }
    catch (error) {
      return false
    }
  }

  responder() {
    browser.click(this.responderAgora);
  }

  naoResponder() {
    browser.click(this.responderDepois);
  }

  respondePergunta1() {
    browser.waitForExist(this.pergunta1, 2000);
    this.composicaoPatrimonio.setValue("100");
    browser.pause(1000);
    $$('[data-test="Button"]')[0].click();
  }

  respondePergunta2() {
    browser.waitForExist(this.pergunta2, 2000);
    browser.pause(1000);
    $('[data-test="suitability_step_2"] :nth-child(4)').click();
    $$('[data-test="Button"]')[3].click();
  }

  respondePergunta3() {
    browser.waitForExist(this.pergunta3, 2000);
    browser.pause(1000);
    $('[data-test="suitability_step_3"] :nth-child(2)').click();
    $$('[data-test="Button"]')[5].click();
  }

  respondePergunta4() {
    browser.waitForExist(this.pergunta4, 2000);
    browser.pause(1000);
    $('[data-test="suitability_step_4"] :nth-child(2)').click();
    $$('[data-test="Button"]')[7].click();
  }

  respondePergunta5() {
    browser.waitForExist(this.pergunta5, 2000);
    browser.pause(2000);
    $('[data-test="suitability_step_5"] :nth-child(2)').click();
    $$('[data-test="Button"]')[9].click();
  }

  respondePergunta6() {
    browser.waitForExist(this.pergunta6, 2000);
    browser.pause(1000);
    $('[data-test="suitability_step_6"] :nth-child(2)').click();
    $$('[data-test="Button"]')[11].click();
  }

  respondePergunta7() {
    browser.waitForExist(this.pergunta7, 2000);
    browser.pause(1000);
    $('[data-test="suitability_step_7"] :nth-child(4)').click();
    $$('[data-test="Button"]')[13].click();
  }

  respondePergunta8() {
    browser.waitForExist(this.pergunta8, 2000);
    browser.pause(1000);
    $('[data-test="suitability_step_8"] :nth-child(2)').click();
    $$('[data-test="Button"]')[15].click();
  }

  respondePergunta9() {
    browser.waitForExist(this.pergunta9, 2000);
    browser.pause(1000);
    $('[data-test="suitability_step_9"] :nth-child(2)').click();
    $$('[data-test="Button"]')[17].click();
  }

  respondePergunta10() {
    browser.waitForExist(this.pergunta10, 2000);
    browser.pause(1000);
    $('[data-test="suitability_step_10"] :nth-child(2)').click();
    $$('[data-test="Button"]')[19].click();
  }

  respondePergunta11() {
    browser.waitForExist(this.pergunta11, 2000);
    browser.pause(1000);
    $('[data-test="suitability_step_11"] :nth-child(2)').click();
    $$('[data-test="Button"]')[21].click();
  }

  respondePergunta12() {
    browser.waitForExist(this.pergunta12, 2000);
    browser.pause(1000);
    $('[data-test="suitability_step_12"] :nth-child(2)').click();
    $$('[data-test="Button"]')[23].click();
  }

  respondePergunta13() {
    browser.waitForExist(this.pergunta13, 2000);
    browser.pause(1000);
    $('[data-test="suitability_step_13"] :nth-child(2)').click();
    $$('[data-test="Button"]')[25].click();
  }

  respondePergunta14() {
    browser.waitForExist(this.pergunta14, 2000);
    browser.pause(1000);
    $('[data-test="suitability_step_14"] :nth-child(2)').click();
    $$('[data-test="Button"]')[27].click();
  }

  respondePergunta15() {
    browser.waitForExist(this.pergunta15, 2000);
    browser.pause(1000);
    $('[data-test="suitability_step_15"] :nth-child(2)').click();
    $$('[data-test="Button"]')[29].click();
  }

  respondePergunta16() {
    browser.waitForExist(this.pergunta16, 2000);
    browser.pause(1000);
    browser
      .$('[data-test="suitability_step_16"] :nth-child(2) :nth-child(1)')
      .click();
    browser.pause(1000);
    browser
      .$('[data-test="suitability_step_16"] :nth-child(4) :nth-child(1)')
      .click();
    browser.pause(1000);
    browser
      .$('[data-test="suitability_step_16"] :nth-child(6) :nth-child(1)')
      .click();
    browser.pause(1000);
    browser
      .$('[data-test="suitability_step_16"] :nth-child(8) :nth-child(1)')
      .click();
    browser.pause(1000);
    browser
      .$('[data-test="suitability_step_16"] :nth-child(10) :nth-child(1)')
      .click();
    browser.pause(1000);
    browser
      .$('[data-test="suitability_step_16"] :nth-child(12) :nth-child(1)')
      .click();
    browser.pause(1000);
    browser
      .$('[data-test="suitability_step_16"] :nth-child(14) :nth-child(1)')
      .click();
    browser.pause(1000);
    $$('[data-test="Button"]')[31].click();
  }

  respondePergunta17() {
    browser.waitForExist(this.pergunta17, 2000);
    browser.pause(1000);
    $('[data-test="suitability_step_17"] :nth-child(2)').click();
    $$('[data-test="Button"]')[33].click();
  }

  respondePergunta18() {
    browser.waitForExist(this.pergunta18, 2000);
    browser.pause(1000);
    $('[data-test="suitability_step_18"] :nth-child(2)').click();
    $$('[data-test="Button"]')[35].click();
  }

  respondePergunta19() {
    browser.waitForExist(this.pergunta19, 2000);
    browser.pause(1000);
    $('[data-test="suitability_step_19"] :nth-child(2)').click();
  }

  concluir() {
    browser.pause(2000);
    $$('[data-test="Button"]')[37].click();
    browser.pause(1000);
  }

  concordarComPerfil() {
    browser.pause(2000);
    $('[data-test="ConfirmSuitability"]').click();
  }

  refazer() {
    browser.pause(2000);
    $$('[data-test="Button"]')[0].click();
  }

  retornarParaPergunta1() {
    browser.pause(2000);
    browser.waitForExist(this.pergunta19);
    $$('[data-test="Button"]')[36].click();
    browser.pause(2000);
    browser.waitForExist(this.pergunta18);
    $$('[data-test="Button"]')[34].click();
    browser.pause(2000);
    browser.waitForExist(this.pergunta17);
    $$('[data-test="Button"]')[32].click();
    browser.pause(2000);
    browser.waitForExist(this.pergunta16);
    $$('[data-test="Button"]')[30].click();
    browser.pause(2000);
    browser.waitForExist(this.pergunta15);
    $$('[data-test="Button"]')[28].click();
    browser.pause(2000);
    browser.waitForExist(this.pergunta14);
    $$('[data-test="Button"]')[26].click();
    browser.pause(2000);
    browser.waitForExist(this.pergunta13);
    $$('[data-test="Button"]')[24].click();
    browser.pause(2000);
    browser.waitForExist(this.pergunta12);
    $$('[data-test="Button"]')[22].click();
    browser.pause(2000);
    browser.waitForExist(this.pergunta11);
    $$('[data-test="Button"]')[20].click();
    browser.pause(2000);
    browser.waitForExist(this.pergunta10);
    $$('[data-test="Button"]')[18].click();
    browser.pause(2000);
    browser.waitForExist(this.pergunta9);
    $$('[data-test="Button"]')[16].click();
    browser.pause(2000);
    browser.waitForExist(this.pergunta8);
    $$('[data-test="Button"]')[14].click();
    browser.pause(2000);
    browser.waitForExist(this.pergunta7);
    $$('[data-test="Button"]')[12].click();
    browser.pause(2000);
    browser.waitForExist(this.pergunta6);
    $$('[data-test="Button"]')[10].click();
    browser.pause(2000);
    browser.waitForExist(this.pergunta5);
    $$('[data-test="Button"]')[8].click();
    browser.pause(2000);
    browser.waitForExist(this.pergunta4);
    $$('[data-test="Button"]')[6].click();
    browser.pause(2000);
    browser.waitForExist(this.pergunta3);
    $$('[data-test="Button"]')[4].click();
    browser.pause(2000);
    browser.waitForExist(this.pergunta2);
    $$('[data-test="Button"]')[2].click();
    browser.pause(2000);
  }

  responderQuestionarioValidarBotao() {
    browser.waitForExist(this.responderAgora);
    this.responder();
    browser.waitForExist(this.pergunta1, 2000);
    let atributo = $('[data-test="Button"]').getAttribute("disabled");
    expect(atributo).to.equal("true");
    this.composicaoPatrimonio.setValue("80");
    this.composicaoPatrimonioFI.setValue("20");
    atributo = $('[data-test="Button"]').getAttribute("disabled");
    expect(atributo).to.not.equal("true");
    browser.pause(1000);
    $$('[data-test="Button"]')[0].click();
    browser.pause(1000);

    atributo = $$('[data-test="Button"]')[3].getAttribute("disabled");
    expect(atributo).to.equal("true");
    $('[data-test="suitability_step_2"] :nth-child(4)').click();
    let botaoMarcado = browser
      .$('[data-test="suitability_step_2"] :nth-child(4) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(true);
    $$('[data-test="Button"]')[3].click();
    browser.pause(1000);

    atributo = $$('[data-test="Button"]')[5].getAttribute("disabled");
    expect(atributo).to.equal("true");
    $('[data-test="suitability_step_3"] :nth-child(2)').click();
    botaoMarcado = browser
      .$('[data-test="suitability_step_3"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(true);
    $$('[data-test="Button"]')[5].click();
    browser.pause(1000);

    atributo = $$('[data-test="Button"]')[7].getAttribute("disabled");
    expect(atributo).to.equal("true");
    $('[data-test="suitability_step_4"] :nth-child(2)').click();
    botaoMarcado = browser
      .$('[data-test="suitability_step_4"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(true);
    $$('[data-test="Button"]')[7].click();
    browser.pause(1000);

    atributo = $$('[data-test="Button"]')[9].getAttribute("disabled");
    expect(atributo).to.equal("true");
    $('[data-test="suitability_step_5"] :nth-child(2)').click();
    botaoMarcado = browser
      .$('[data-test="suitability_step_5"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(true);
    $$('[data-test="Button"]')[9].click();
    browser.pause(1000);

    atributo = $$('[data-test="Button"]')[11].getAttribute("disabled");
    expect(atributo).to.equal("true");
    $('[data-test="suitability_step_6"] :nth-child(2)').click();
    botaoMarcado = browser
      .$('[data-test="suitability_step_6"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(true);
    $$('[data-test="Button"]')[11].click();
    browser.pause(1000);

    atributo = $$('[data-test="Button"]')[13].getAttribute("disabled");
    expect(atributo).to.equal("true");
    $('[data-test="suitability_step_7"] :nth-child(4)').click();
    botaoMarcado = browser
      .$('[data-test="suitability_step_7"] :nth-child(4) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(true);
    $$('[data-test="Button"]')[13].click();
    browser.pause(1000);

    atributo = $$('[data-test="Button"]')[15].getAttribute("disabled");
    expect(atributo).to.equal("true");
    $('[data-test="suitability_step_8"] :nth-child(2)').click();
    botaoMarcado = browser
      .$('[data-test="suitability_step_8"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(true);
    $$('[data-test="Button"]')[15].click();
    browser.pause(1000);

    atributo = $$('[data-test="Button"]')[17].getAttribute("disabled");
    expect(atributo).to.equal("true");
    $('[data-test="suitability_step_9"] :nth-child(2)').click();
    botaoMarcado = browser
      .$('[data-test="suitability_step_9"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(true);
    $$('[data-test="Button"]')[17].click();
    browser.pause(1000);

    atributo = $$('[data-test="Button"]')[19].getAttribute("disabled");
    expect(atributo).to.equal("true");
    $('[data-test="suitability_step_10"] :nth-child(2)').click();
    botaoMarcado = browser
      .$('[data-test="suitability_step_10"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(true);
    $$('[data-test="Button"]')[19].click();
    browser.pause(1000);

    atributo = $$('[data-test="Button"]')[21].getAttribute("disabled");
    expect(atributo).to.equal("true");
    $('[data-test="suitability_step_11"] :nth-child(2)').click();
    botaoMarcado = browser
      .$('[data-test="suitability_step_11"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(true);
    $$('[data-test="Button"]')[21].click();
    browser.pause(1000);

    atributo = $$('[data-test="Button"]')[23].getAttribute("disabled");
    expect(atributo).to.equal("true");
    $('[data-test="suitability_step_12"] :nth-child(2)').click();
    botaoMarcado = browser
      .$('[data-test="suitability_step_12"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(true);
    $$('[data-test="Button"]')[23].click();
    browser.pause(1000);

    atributo = $$('[data-test="Button"]')[25].getAttribute("disabled");
    expect(atributo).to.equal("true");
    $('[data-test="suitability_step_13"] :nth-child(2)').click();
    botaoMarcado = browser
      .$('[data-test="suitability_step_13"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(true);
    $$('[data-test="Button"]')[25].click();
    browser.pause(1000);

    atributo = $$('[data-test="Button"]')[27].getAttribute("disabled");
    expect(atributo).to.equal("true");
    $('[data-test="suitability_step_14"] :nth-child(2)').click();
    botaoMarcado = browser
      .$('[data-test="suitability_step_14"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(true);
    $$('[data-test="Button"]')[27].click();
    browser.pause(1000);

    atributo = $$('[data-test="Button"]')[29].getAttribute("disabled");
    expect(atributo).to.equal("true");
    $('[data-test="suitability_step_15"] :nth-child(2)').click();
    botaoMarcado = browser
      .$('[data-test="suitability_step_15"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(true);
    $$('[data-test="Button"]')[29].click();
    browser.pause(1000);

    atributo = $$('[data-test="Button"]')[31].getAttribute("disabled");
    expect(atributo).to.equal("true");
    browser.pause(1000);
    browser
      .$('[data-test="suitability_step_16"] :nth-child(2) :nth-child(2)')
      .click();
    botaoMarcado = browser
      .$(
        '[data-test="suitability_step_16"] :nth-child(2) :nth-child(1) :nth-child(1)'
      )
      .isSelected();
    expect(botaoMarcado).to.equal(true);
    atributo = $$('[data-test="Button"]')[31].getAttribute("disabled");
    expect(atributo).to.equal("true");
    browser.pause(1000);
    browser
      .$('[data-test="suitability_step_16"] :nth-child(4) :nth-child(1)')
      .click();
    botaoMarcado = browser
      .$(
        '[data-test="suitability_step_16"] :nth-child(4) :nth-child(1) :nth-child(1)'
      )
      .isSelected();
    expect(botaoMarcado).to.equal(true);
    atributo = $$('[data-test="Button"]')[31].getAttribute("disabled");
    expect(atributo).to.equal("true");
    browser.pause(1000);
    browser
      .$('[data-test="suitability_step_16"] :nth-child(6) :nth-child(1)')
      .click();
    botaoMarcado = browser
      .$(
        '[data-test="suitability_step_16"] :nth-child(6) :nth-child(1) :nth-child(1)'
      )
      .isSelected();
    expect(botaoMarcado).to.equal(true);
    atributo = $$('[data-test="Button"]')[31].getAttribute("disabled");
    expect(atributo).to.equal("true");
    browser.pause(1000);
    browser
      .$('[data-test="suitability_step_16"] :nth-child(8) :nth-child(1)')
      .click();
    botaoMarcado = browser
      .$(
        '[data-test="suitability_step_16"] :nth-child(8) :nth-child(1) :nth-child(1)'
      )
      .isSelected();
    expect(botaoMarcado).to.equal(true);
    atributo = $$('[data-test="Button"]')[31].getAttribute("disabled");
    expect(atributo).to.equal("true");
    browser.pause(1000);
    browser
      .$('[data-test="suitability_step_16"] :nth-child(10) :nth-child(1)')
      .click();
    botaoMarcado = browser
      .$(
        '[data-test="suitability_step_16"] :nth-child(10) :nth-child(1) :nth-child(1)'
      )
      .isSelected();
    expect(botaoMarcado).to.equal(true);
    atributo = $$('[data-test="Button"]')[31].getAttribute("disabled");
    expect(atributo).to.equal("true");
    browser.pause(1000);
    browser
      .$('[data-test="suitability_step_16"] :nth-child(12) :nth-child(1)')
      .click();
    botaoMarcado = browser
      .$(
        '[data-test="suitability_step_16"] :nth-child(12) :nth-child(1) :nth-child(1)'
      )
      .isSelected();
    expect(botaoMarcado).to.equal(true);
    atributo = $$('[data-test="Button"]')[31].getAttribute("disabled");
    expect(atributo).to.equal("true");
    browser.pause(1000);
    browser
      .$('[data-test="suitability_step_16"] :nth-child(14) :nth-child(1)')
      .click();
    botaoMarcado = browser
      .$(
        '[data-test="suitability_step_16"] :nth-child(14) :nth-child(1) :nth-child(1)'
      )
      .isSelected();
    expect(botaoMarcado).to.equal(true);
    browser.pause(1000);
    $$('[data-test="Button"]')[31].click();
    browser.pause(1000);

    atributo = $$('[data-test="Button"]')[33].getAttribute("disabled");
    expect(atributo).to.equal("true");
    $('[data-test="suitability_step_17"] :nth-child(2)').click();
    botaoMarcado = browser
      .$('[data-test="suitability_step_17"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(true);
    $$('[data-test="Button"]')[33].click();
    browser.pause(1000);

    atributo = $$('[data-test="Button"]')[35].getAttribute("disabled");
    expect(atributo).to.equal("true");
    $('[data-test="suitability_step_18"] :nth-child(2)').click();
    botaoMarcado = browser
      .$('[data-test="suitability_step_18"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(true);
    $$('[data-test="Button"]')[35].click();
    browser.pause(1000);

    atributo = $$('[data-test="Button"]')[37].getAttribute("disabled");
    expect(atributo).to.equal("true");
    $('[data-test="suitability_step_19"] :nth-child(2)').click();
    botaoMarcado = browser
      .$('[data-test="suitability_step_19"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(true);
    $$('[data-test="Button"]')[37].click();
    browser.pause(1000);
  }

  verificarRespostas() {
    browser.pause(2000);
    browser.waitForExist(this.pergunta1);
    let valor = $('[id="9"]').getValue();
    expect(valor).to.be.equal("100");
    $$('[data-test="Button"]')[0].click();
    browser.pause(1000);

    browser.waitForExist(this.pergunta2);
    let botaoMarcado = browser
      .$('[data-test="suitability_step_2"] :nth-child(4) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(true);
    $$('[data-test="Button"]')[3].click();
    browser.pause(1000);

    browser.waitForExist(this.pergunta3);
    botaoMarcado = browser
      .$('[data-test="suitability_step_3"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(true);
    $$('[data-test="Button"]')[5].click();
    browser.pause(1000);

    browser.waitForExist(this.pergunta4);
    botaoMarcado = browser
      .$('[data-test="suitability_step_4"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(true);
    $$('[data-test="Button"]')[7].click();
    browser.pause(1000);

    browser.waitForExist(this.pergunta5);
    botaoMarcado = browser
      .$('[data-test="suitability_step_5"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(true);
    $$('[data-test="Button"]')[9].click();
    browser.pause(1000);

    browser.waitForExist(this.pergunta6);
    botaoMarcado = browser
      .$('[data-test="suitability_step_6"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(true);
    $$('[data-test="Button"]')[11].click();
    browser.pause(1000);

    browser.waitForExist(this.pergunta7);
    botaoMarcado = browser
      .$('[data-test="suitability_step_7"] :nth-child(4) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(true);
    $$('[data-test="Button"]')[13].click();
    browser.pause(1000);

    browser.waitForExist(this.pergunta8);
    botaoMarcado = browser
      .$('[data-test="suitability_step_8"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(true);
    $$('[data-test="Button"]')[15].click();
    browser.pause(1000);

    browser.waitForExist(this.pergunta9);
    botaoMarcado = browser
      .$('[data-test="suitability_step_9"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(true);
    $$('[data-test="Button"]')[17].click();
    browser.pause(1000);

    browser.waitForExist(this.pergunta10);
    botaoMarcado = browser
      .$('[data-test="suitability_step_10"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(true);
    $$('[data-test="Button"]')[19].click();
    browser.pause(1000);

    browser.waitForExist(this.pergunta11);
    botaoMarcado = browser
      .$('[data-test="suitability_step_11"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(true);
    $$('[data-test="Button"]')[21].click();
    browser.pause(1000);

    browser.waitForExist(this.pergunta12);
    botaoMarcado = browser
      .$('[data-test="suitability_step_12"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(true);
    $$('[data-test="Button"]')[23].click();
    browser.pause(1000);

    browser.waitForExist(this.pergunta13);
    botaoMarcado = browser
      .$('[data-test="suitability_step_13"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(true);
    $$('[data-test="Button"]')[25].click();
    browser.pause(1000);

    browser.waitForExist(this.pergunta14);
    botaoMarcado = browser
      .$('[data-test="suitability_step_14"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(true);
    $$('[data-test="Button"]')[27].click();
    browser.pause(1000);

    browser.waitForExist(this.pergunta15);
    botaoMarcado = browser
      .$('[data-test="suitability_step_15"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(true);
    $$('[data-test="Button"]')[29].click();
    browser.pause(1000);

    browser.waitForExist(this.pergunta16);
    botaoMarcado = browser
      .$(
        '[data-test="suitability_step_16"] :nth-child(2) :nth-child(1) :nth-child(1)'
      )
      .isSelected();
    expect(botaoMarcado).to.equal(true);

    botaoMarcado = browser
      .$(
        '[data-test="suitability_step_16"] :nth-child(4) :nth-child(1) :nth-child(1)'
      )
      .isSelected();
    expect(botaoMarcado).to.equal(true);

    botaoMarcado = browser
      .$(
        '[data-test="suitability_step_16"] :nth-child(6) :nth-child(1) :nth-child(1)'
      )
      .isSelected();
    expect(botaoMarcado).to.equal(true);

    botaoMarcado = browser
      .$(
        '[data-test="suitability_step_16"] :nth-child(8) :nth-child(1) :nth-child(1)'
      )
      .isSelected();
    expect(botaoMarcado).to.equal(true);

    botaoMarcado = browser
      .$(
        '[data-test="suitability_step_16"] :nth-child(10) :nth-child(1) :nth-child(1)'
      )
      .isSelected();
    expect(botaoMarcado).to.equal(true);

    botaoMarcado = browser
      .$(
        '[data-test="suitability_step_16"] :nth-child(12) :nth-child(1) :nth-child(1)'
      )
      .isSelected();
    expect(botaoMarcado).to.equal(true);

    botaoMarcado = browser
      .$(
        '[data-test="suitability_step_16"] :nth-child(14) :nth-child(1) :nth-child(1)'
      )
      .isSelected();
    expect(botaoMarcado).to.equal(true);
    $$('[data-test="Button"]')[31].click();
    browser.pause(1000);

    browser.waitForExist(this.pergunta17);
    botaoMarcado = browser
      .$('[data-test="suitability_step_17"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(true);
    $$('[data-test="Button"]')[33].click();
    browser.pause(1000);

    browser.waitForExist(this.pergunta18);
    botaoMarcado = browser
      .$('[data-test="suitability_step_18"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(true);
    $$('[data-test="Button"]')[35].click();
    browser.pause(1000);

    browser.waitForExist(this.pergunta19);
    botaoMarcado = browser
      .$('[data-test="suitability_step_19"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(true);
    $$('[data-test="Button"]')[37].click();
    browser.pause(1000);
  }

  verificarRespostasRefazer() {
    browser.pause(2000);
    browser.waitForExist(this.pergunta1);
    let valor = $('[id="9"]').getValue();
    expect(valor).to.be.equal("");
    this.respondePergunta1();

    browser.waitForExist(this.pergunta2);
    let botaoMarcado = browser
      .$('[data-test="suitability_step_2"] :nth-child(4) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(false);
    this.respondePergunta2();

    browser.waitForExist(this.pergunta3);
    botaoMarcado = browser
      .$('[data-test="suitability_step_3"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(false);
    this.respondePergunta3();

    browser.waitForExist(this.pergunta4);
    botaoMarcado = browser
      .$('[data-test="suitability_step_4"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(false);
    this.respondePergunta4();

    browser.waitForExist(this.pergunta5);
    botaoMarcado = browser
      .$('[data-test="suitability_step_5"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(false);
    this.respondePergunta5();

    browser.waitForExist(this.pergunta6);
    botaoMarcado = browser
      .$('[data-test="suitability_step_6"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(false);
    this.respondePergunta6();

    browser.waitForExist(this.pergunta7);
    botaoMarcado = browser
      .$('[data-test="suitability_step_7"] :nth-child(4) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(false);
    this.respondePergunta7();

    browser.waitForExist(this.pergunta8);
    botaoMarcado = browser
      .$('[data-test="suitability_step_8"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(false);
    this.respondePergunta8();

    browser.waitForExist(this.pergunta9);
    botaoMarcado = browser
      .$('[data-test="suitability_step_9"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(false);
    this.respondePergunta9();

    browser.waitForExist(this.pergunta10);
    botaoMarcado = browser
      .$('[data-test="suitability_step_10"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(false);
    this.respondePergunta10();

    browser.waitForExist(this.pergunta11);
    botaoMarcado = browser
      .$('[data-test="suitability_step_11"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(false);
    this.respondePergunta11();

    browser.waitForExist(this.pergunta12);
    botaoMarcado = browser
      .$('[data-test="suitability_step_12"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(false);
    this.respondePergunta12();

    browser.waitForExist(this.pergunta13);
    botaoMarcado = browser
      .$('[data-test="suitability_step_13"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(false);
    this.respondePergunta13();

    browser.waitForExist(this.pergunta14);
    botaoMarcado = browser
      .$('[data-test="suitability_step_14"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(false);
    this.respondePergunta14();

    browser.waitForExist(this.pergunta15);
    botaoMarcado = browser
      .$('[data-test="suitability_step_15"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(false);
    this.respondePergunta15();

    browser.waitForExist(this.pergunta16);
    botaoMarcado = browser
      .$(
        '[data-test="suitability_step_16"] :nth-child(2) :nth-child(1) :nth-child(1)'
      )
      .isSelected();
    expect(botaoMarcado).to.equal(false);

    botaoMarcado = browser
      .$(
        '[data-test="suitability_step_16"] :nth-child(4) :nth-child(1) :nth-child(1)'
      )
      .isSelected();
    expect(botaoMarcado).to.equal(false);

    botaoMarcado = browser
      .$(
        '[data-test="suitability_step_16"] :nth-child(6) :nth-child(1) :nth-child(1)'
      )
      .isSelected();
    expect(botaoMarcado).to.equal(false);

    botaoMarcado = browser
      .$(
        '[data-test="suitability_step_16"] :nth-child(8) :nth-child(1) :nth-child(1)'
      )
      .isSelected();
    expect(botaoMarcado).to.equal(false);

    botaoMarcado = browser
      .$(
        '[data-test="suitability_step_16"] :nth-child(10) :nth-child(1) :nth-child(1)'
      )
      .isSelected();
    expect(botaoMarcado).to.equal(false);

    botaoMarcado = browser
      .$(
        '[data-test="suitability_step_16"] :nth-child(12) :nth-child(1) :nth-child(1)'
      )
      .isSelected();
    expect(botaoMarcado).to.equal(false);

    botaoMarcado = browser
      .$(
        '[data-test="suitability_step_16"] :nth-child(14) :nth-child(1) :nth-child(1)'
      )
      .isSelected();
    expect(botaoMarcado).to.equal(false);
    this.respondePergunta16();

    browser.waitForExist(this.pergunta17);
    botaoMarcado = browser
      .$('[data-test="suitability_step_17"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(false);
    this.respondePergunta17();

    browser.waitForExist(this.pergunta18);
    botaoMarcado = browser
      .$('[data-test="suitability_step_18"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(false);
    this.respondePergunta18();

    browser.waitForExist(this.pergunta19);
    botaoMarcado = browser
      .$('[data-test="suitability_step_19"] :nth-child(1) :nth-child(1)')
      .isSelected();
    expect(botaoMarcado).to.equal(false);
    this.respondePergunta19();
  }

  validToken(token) {
    this.tokenField.waitForExist(3000);
    this.tokenField.setValue(token);
  }

  invalidToken() {
    this.tokenField.waitForExist(3000);
    this.tokenField.setValue("123456");
  }

  confirmToken() {
    this.confirmTokenButton.click();
  }
}
export default new SuitabilityPage();
