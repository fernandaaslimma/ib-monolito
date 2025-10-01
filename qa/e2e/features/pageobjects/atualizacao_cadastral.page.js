"use strict";

const { expect } = require("chai");
const page = require("./page");
const moment = require("moment");
const timeout = 500000;
const shorterTimeout = 10000

let registrationData = {
  spouseName: "",
  spouseCpf: "",
  personalAddress: "",
  personalNumber: "",
  personalComplement: "",
  personalCep: "",
  personalCity: "",
  personalState: "",
  personalCountry: "",
  commercialAddress: "",
  commercialNumber: "",
  commercialComplement: "",
  commercialCep: "",
  commercialCity: "",
  commercialState: "",
  commercialCountry: "",
  personalPhone: "",
  personalEmail: "",
  commercialPhone: "",
  commercialEmail: "",
  personalCellPhone: "",
  activity: "",
  occupation: "",
  company: "",
  kindOfActivity: ""
};

class UpdatingRegistationDataPage extends page {
  get closeForm() {
    return $('[data-test="registration-data-close"]');
  }
  get buttonCancelExitForm() {
    return $('[data-test="exit-confirmation-cancel"]');
  }
  get buttonExitForm() {
    return $('[data-test="exit-confirmation-exit"]');
  }
  get formRegistrationData() {
    return $('[data-test="PageAsModal"]');
  }
  get buttonHadNoChange() {
    return $('[data-test="registration-data-form-agree"]');
  }
  get buttonHadChange() {
    return $('[data-test="label-registration-data-form-dont-agree"]');
  }

  get buttonConfirm() {
    return $('[data-test="registration-data-form-read-confirm"]');
  }

  get sectionedPersonalDetails() {
    return $('[data-test="SectionedPersonalDetails"]');
  }
  get buttonDropdownMaritalStatus() {
    return "DropdownMaritalStatus__dropdown-indicator";
  }
  get valueMaritalStatus() {
    return $(".DropdownMaritalStatus__single-value");
  }
  get optionsMaritalStatus() {
    return $$(".DropdownMaritalStatus__option");
  }
  get inputSpouseName() {
    return $('[data-test="SpouseName"]');
  }
  get inputSpouseCpf() {
    return $('[data-test="SpouseCPF"]');
  }

  get sectionedCorrespondenceAndContacts() {
    return $('[data-test="SectionedCorrespondenceAndContacts"]');
  }
  get inputPersonalAddress() {
    return $('[data-test="InputAddress_home"]');
  }
  get inputCommercialAddress() {
    return $('[data-test="InputAddress_commercial"]');
  }
  get inputPersonalNumber() {
    return $('[data-test="InputNumber_home"]');
  }
  get inputCommercialNumber() {
    return $('[data-test="InputNumber_commercial"]');
  }
  get inputPersonalComplement() {
    return $('[data-test="InputComplement_home"]');
  }
  get inputCommercialComplement() {
    return $('[data-test="InputComplement_commercial"]');
  }
  get inputPersonalCep() {
    return $('[data-test="InputCep_home"]');
  }
  get inputCommercialCep() {
    return $('[data-test="InputCep_commercial"]');
  }
  get inputPersonalCity() {
    return $('[data-test="InputCity_home"]');
  }
  get inputCommercialCity() {
    return $('[data-test="InputCity_commercial"]');
  }
  get inputPersonalState() {
    return $('[data-test="InputState_home"]');
  }
  get inputCommercialState() {
    return $('[data-test="InputState_commercial"]');
  }
  get buttonPersonalDropdownCountry() {
    return "DropdownCountry_home__dropdown-indicator";
  }
  get buttonCommercialDropdownCountry() {
    return "DropdownCountry_commercial__dropdown-indicator";
  }
  get optionsPersonalDropdownCountry() {
    return $$(".DropdownCountry_home__option");
  }
  get optionsCommercialDropdownCountry() {
    return $$(".DropdownCountry_commercial__option");
  }
  get valuePersonalCountry() {
    return $(".DropdownCountry_home__single-value");
  }
  get valueCommercialCountry() {
    return $(".DropdownCountry_commercial__value-container");
  }
  get inputPersonalPhone() {
    return $('[data-test="InputPersonalPhone"]');
  }
  get inputCommercialPhone() {
    return $('[data-test="InpuCommercialPhone"]');
  }
  get inputPersonalCellPhone() {
    return $('[data-test="InputCellPhone"]');
  }
  get inputPersonalEmail() {
    return $('[data-test="InputPersonalEmail"]');
  }
  get inputCommercialEmail() {
    return $('[data-test="InputCommercialEmail"]');
  }

  get sectionedProfessionalInfo() {
    return $('[data-test="SectionedProfessionalInfo"]');
  }
  get buttonActivity() {
    return "DropdownActivity__dropdown-indicator";
  }
  get optionsActivity() {
    return $$(".DropdownActivity__option");
  }
  get valueActivity() {
    return $(".DropdownActivity__single-value");
  }
  get inputActivitySpecified() {
    return $('[data-test="InputActivitySpecified"]');
  }
  get inputOccupation() {
    return $('[data-test="InputOccupation"]');
  }
  get inputCompanyName() {
    return $('[data-test="InputCompanyName"]');
  }

  get sectionedFinancialSituation() {
    return $('[data-test="SectionedFinancialInformation"]');
  }

  get selectTotalNetWorth() {
    return $('[data-test="SelectTotalNetWorth"]');
  }

  get currentTotalNetWorth() {
    return $('[data-test="SelectTotalNetWorth"] option:checked');
  }

  get selectFinancialShares() {
    return $('[data-test="SelectShares"]');
  }

  get selectFinancialBonds() {
    return $('[data-test="SelectBonds"]');
  }

  get selectFinancialFounds() {
    return $('[data-test="SelectFunds"]');
  }

  get selectFinancialPassbookSavings() {
    return $('[data-test="SelectPassbookSavings"]');
  }

  get selectFinancialImmovables() {
    return $('[data-test="SelectImmovables"]');
  }

  get selectFinancialMovables() {
    return $('[data-test="SelectMovables"]');
  }

  get selectSalaryOrPartnersFee() {
    return $('[data-test="SelectSalaryOrPartnersFee"]');
  }

  get selectOtherIncome() {
    return $('[data-test="SelectOtherIncome"]');
  }

  get selectBonusesGratificationsAndCommisions() {
    return $('[data-test="SelectBonusesGratificationsAndCommisions"]');
  }

  get buttonUploadDocument() {
    return $('//div[contains(@class,"dropzone")]//input');
  }

  get alertMessageError() {
    return $('[data-test="alertMessage"]');
  }

  get buttonUpdateInformation() {
    return $('[data-test="registration-data-form-confirm"]');
  }

  get ImgDocumentWaiting() {
    return $('[data-test="ImgDocumentWaiting"]');
  }

  get buttonCloseForm() {
    return $('[data-test="registration-data-form-close-modal"]');
  }

  get formAtualizacaoCadastral() {
    return $('[data-test="PageAsModal"]');
  }

  get tokenField() {
    return $('[data-test="TransactionTokenField"]');
  }

  agreeText() {
    let texto = $$("p")[2].getText();
    return texto;
  }

  dontAgreeText() {
    let texto = $('//p[contains(text(),"atualização")]').getText();
    return texto;
  }

  get agree() {
    return $(
      '//p[contains(text(),"confirm")]/parent::div//child::label//child::div'
    );
  }

  get dontAgree() {
    return $(
      '//p[contains(text(),"confirm")]/parent::div//child::label//following-sibling::label'
    );
  }

  get submit() {
    return $('[data-test="Button"]');
  }

  get confirmBtn() {
    return $('[data-test="Confirm"]');
  }

  get feedbackMsg() {
    return $('[data-test="ModalFeedbackMsg"]').getText();
  }

  get tokenInvalid() {
    return $('[data-test="ModalFeedbackMsgtrue"]');
  }

  get stayButton() {
    return $$('[data-test="Button"]')[0];
  }

  get leaveButton() {
    // return $$('[data-test="Button"]')[1];
    return $('[data-test="exit-confirmation-exit"]');
  }

  get sendAgainLink() {
    return $('//span[contains(text(),"Enviar")][contains(text(),"novamente")]');
  }

  closeFormRegistrationData() {
    this.closeForm.waitForExist(timeout);
    this.closeForm.click();
  }
  confirmCloseFormRegistrationData() {
    this.buttonExitForm.waitForExist(timeout);
    this.buttonExitForm.click();
  }
  cancelCloseFormRegistrationData() {
    this.buttonCancelExitForm.waitForExist(timeout);
    this.buttonCancelExitForm.click();
  }
  confirmHadNoChange() {
    this.buttonHadNoChange.waitForExist(timeout);
    if (!this.buttonHadNoChange.isSelected())
      throw new Error("Status of button is false");
  }
  confirmHadChange() {
    this.buttonHadChange.waitForExist(timeout);
    this.buttonHadChange.click();
  }
  confirmData() {
    this.buttonConfirm.waitForExist(timeout);
    this.buttonConfirm.click();
  }
  existFormRegistrationData() {
    return this.formRegistrationData.isExisting();
  }
  isEditable() {
    this.inputPersonalAddress.waitForExist(timeout);
    return this.inputPersonalAddress.getAttribute("disabled");
  }
  existButtonConfirmData() {
    return this.buttonConfirm.isExisting();
  }
  confirmDataUnderAnalysis() {
    this.ImgDocumentWaiting.waitForExist(timeout);
    return this.ImgDocumentWaiting.isExisting();
  }

  // INI Acesso aos menus
  accessMenuPersonalDetails() {
    this.sectionedPersonalDetails.waitForExist(timeout);
    this.sectionedPersonalDetails.click();
  }

  accessMenuCorrespondenceAndContact() {
    this.sectionedCorrespondenceAndContacts.waitForExist(timeout);
    this.sectionedCorrespondenceAndContacts.click();
  }

  accessMenuProfessionalInfo() {
    this.sectionedProfessionalInfo.waitForExist();
    this.sectionedProfessionalInfo.click();
  }

  accessMenuFinacialSituation() {
    this.sectionedFinancialSituation.waitForExist(timeout);
    this.sectionedFinancialSituation.click();
  }

  // FIM Acesso aos menus

  setMaritalStatus(maritalStatus) {
    this.triggerMouseDownToMaritalStatus(
      maritalStatus,
      this.buttonDropdownMaritalStatus
    );
  }

  setPersonalCountryAddress(typeAddress) {
    this.triggerMouseDownToCountry(
      typeAddress,
      this.buttonPersonalDropdownCountry
    );
  }

  setCommercialCountryAddress(typeAddress) {
    this.triggerMouseDownToCountry(
      typeAddress,
      this.buttonCommercialDropdownCountry
    );
  }

  eraseCommercialCountryAddress() {
    this.triggerMouseDown(this.buttonCommercialDropdownCountry);
    this.optionsDropdownCountryList("comercial")[0].click();
  }

  setActivity(typeActivity) {
    this.toChangeActivity(typeActivity, this.buttonActivity);
  }

  getSpouseName() {
    this.inputSpouseName.waitForExist(timeout);
    return this.inputSpouseName.getValue();
  }
  getSpouseCpf() {
    this.inputSpouseCpf.waitForExist(timeout);
    return this.inputSpouseCpf.getValue();
  }

  getCurrentMaritalStatus() {
    this.valueMaritalStatus.waitForExist(timeout);
    return this.valueMaritalStatus.getText();
  }

  getCurrentPersonalAddress() {
    this.inputPersonalAddress.waitForExist(timeout);
    return this.inputPersonalAddress.getValue();
  }

  getCurrentCommercialAddress() {
    this.inputCommercialAddress.waitForExist(timeout);
    return this.inputCommercialAddress.getValue();
  }

  getCurrentPersonalNumber() {
    this.inputPersonalNumber.waitForExist(timeout);
    return this.inputPersonalNumber.getValue();
  }

  getCurrentCommercialNumber() {
    this.inputCommercialNumber.waitForExist(timeout);
    return this.inputCommercialNumber.getValue();
  }

  getCurrentPersonalComplement() {
    this.inputPersonalComplement.waitForExist(timeout);
    return this.inputPersonalComplement.getValue();
  }

  getCurrentCommercialComplement() {
    this.inputCommercialComplement.waitForExist(timeout);
    return this.inputCommercialComplement.getValue();
  }

  getCurrentPersonalCep() {
    this.inputPersonalCep.waitForExist(timeout);
    return this.inputPersonalCep.getValue();
  }

  getCurrentCommercialCep() {
    this.inputCommercialCep.waitForExist(timeout);
    return this.inputCommercialCep.getValue();
  }

  getCurrentPersonalCity() {
    this.inputPersonalCity.waitForExist(timeout);
    return this.inputPersonalCity.getValue();
  }

  getCurrentCommercialCity() {
    this.inputCommercialCity.waitForExist(timeout);
    return this.inputCommercialCity.getValue();
  }

  getCurrentPersonalState() {
    this.inputPersonalState.waitForExist(timeout);
    return this.inputPersonalState.getValue();
  }

  getCurrentCommercialState() {
    this.inputCommercialState.waitForExist(timeout);
    return this.inputCommercialState.getValue();
  }

  getCurrentPersonalCountry() {
    this.valuePersonalCountry.waitForExist(timeout);
    return this.valuePersonalCountry.getText();
  }

  getCurrentCommercialCountry() {
    this.valueCommercialCountry.waitForExist(timeout);
    return this.valueCommercialCountry.getText();
  }

  getCurrentPersonalPhoneNumber() {
    this.inputPersonalPhone.waitForExist(timeout);
    return this.inputPersonalPhone.getValue();
  }

  getCurrentPersonalCellPhone() {
    this.inputPersonalCellPhone.waitForExist(timeout);
    return this.inputPersonalCellPhone.getValue();
  }

  getCurrentCommercialPhoneNumber() {
    this.inputCommercialPhone.waitForExist(timeout);
    return this.inputCommercialPhone.getValue();
  }

  getCurrentPersonalEmail() {
    this.inputPersonalEmail.waitForExist(timeout);
    return this.inputPersonalEmail.getValue();
  }

  getCurrentCommercialEmail() {
    this.inputCommercialEmail.waitForExist(timeout);
    return this.inputCommercialEmail.getValue();
  }

  getCurrentActivity() {
    this.valueActivity.waitForExist(timeout);
    return this.valueActivity.getText();
  }

  getCurrentOccupation() {
    this.inputOccupation.waitForExist(timeout);
    return this.inputOccupation.getValue();
  }

  getCurrentCompany() {
    this.inputCompanyName.waitForExist(timeout);
    return this.inputCompanyName.getValue();
  }

  getCurrentKindActivity() {
    this.inputActivitySpecified.waitForExist(timeout);
    return this.inputActivitySpecified.getValue();
  }

  getCurrentActivityInSectionedProfessionalInfo() {
    this.sectionedProfessionalInfo.waitForExist(timeout);
    return this.sectionedProfessionalInfo.getText();
  }

  triggerMouseDownToMaritalStatus(maritalStatus, className) {
    this.triggerMouseDown(className);

    switch (maritalStatus) {
      case "solteiro":
        this.optionsMaritalStatus[2].click();
        expect(this.getCurrentMaritalStatus()).to.equal("Single");
        break;
      case "casado":
        this.optionsMaritalStatus[0].click();
        expect(this.getCurrentMaritalStatus()).to.equal("Married");
        break;

      default:
        throw new Error("Invalid option");
    }
  }

  currentCountry(typeCountry) {
    return typeCountry === "residencial"
      ? this.getCurrentPersonalCountry()
      : this.getCurrentCommercialCountry();
  }

  optionsDropdownCountryList(typeCountry) {
    return typeCountry === "residencial"
      ? this.optionsPersonalDropdownCountry
      : this.optionsCommercialDropdownCountry;
  }

  triggerMouseDownToCountry(typeCountry, className) {
    this.triggerMouseDown(className);

    const randomContry = Math.floor(Math.random() * 5 + 1);

    switch (randomContry) {
      case 1:
        this.optionsDropdownCountryList(typeCountry)[randomContry].click();
        expect(this.currentCountry(typeCountry)).to.equal("Afghanistan");
        this.toSaveCurrentCountry(typeCountry);
        break;

      case 2:
        this.optionsDropdownCountryList(typeCountry)[randomContry].click();
        expect(this.currentCountry(typeCountry)).to.equal("Åland Islands");
        this.toSaveCurrentCountry(typeCountry);
        break;

      case 3:
        this.optionsDropdownCountryList(typeCountry)[randomContry].click();
        expect(this.currentCountry(typeCountry)).to.equal("Albania");
        this.toSaveCurrentCountry(typeCountry);
        break;

      case 4:
        this.optionsDropdownCountryList(typeCountry)[randomContry].click();
        expect(this.currentCountry(typeCountry)).to.equal("Algeria");
        this.toSaveCurrentCountry(typeCountry);
        break;

      case 5:
        this.optionsDropdownCountryList(typeCountry)[randomContry].click();
        expect(this.currentCountry(typeCountry)).to.equal("American Samoa");
        this.toSaveCurrentCountry(typeCountry);
        break;

      default:
        throw new Error("Invalid option");
    }
  }

  triggerMouseDown(className) {
    browser.execute(`\
      var button = document.getElementsByClassName('${className}')[0];\
      var clickEvent = document.createEvent('MouseEvents');\
      clickEvent.initEvent('mousedown', true, true);\
      button.dispatchEvent(clickEvent);\
    `);
  }

  toChangeActivity(typeActivity, className) {
    this.triggerMouseDown(className);

    this.optionsActivity[0].waitForEnabled(timeout);

    switch (typeActivity) {
      case "Aposentado":
        this.optionsActivity[0].click();
        expect(this.getCurrentActivity()).to.equal("Retired");
        this.toSaveCurrentActivity();
        break;

      case "Privado":
        this.optionsActivity[1].click();
        expect(this.getCurrentActivity()).to.equal("Private sector employee");
        this.toSaveCurrentActivity();
        break;

      case "Público":
        this.optionsActivity[2].click();
        expect(this.getCurrentActivity()).to.equal("Public sector employee");
        this.toSaveCurrentActivity();
        break;

      case "Autônomo":
        this.optionsActivity[3].click();
        expect(this.getCurrentActivity()).to.equal("Self-employed");
        this.toSaveCurrentActivity();
        break;

      case "do Lar":
        this.optionsActivity[4].click();
        expect(this.getCurrentActivity()).to.equal("Housekeeper");
        this.toSaveCurrentActivity();
        break;

      case "Empresário":
        this.optionsActivity[5].click();
        expect(this.getCurrentActivity()).to.equal("Entrepeneur");
        this.toSaveCurrentActivity();
        break;

      case "Outros":
        this.optionsActivity[6].click();
        expect(this.getCurrentActivity()).to.equal("Others");
        this.toSaveCurrentActivity();
        break;

      case "Profissional liberal":
        this.optionsActivity[7].click();
        expect(this.getCurrentActivity()).to.equal("Professional");
        this.toSaveCurrentActivity();
        break;

      case "Sócio Proprietário":
        this.optionsActivity[8].click();
        expect(this.getCurrentActivity()).to.equal("Owner Partner");
        this.toSaveCurrentActivity();
        break;

      default:
        throw new Error("Invalid option");
    }
  }

  toSaveCurrentCountry(typeCountry) {
    typeCountry === "residencial"
      ? (registrationData.personalCountry = this.getCurrentPersonalCountry())
      : (registrationData.commercialCountry = this.getCurrentCommercialCountry());
  }

  toSaveCurrentActivity() {
    registrationData.activity = this.getCurrentActivity();
  }
  changeStreet(typeAddress) {
    this.inputPersonalAddress.waitForExist(timeout);
    this.eraseData(this.inputPersonalAddress);
    this.inputPersonalAddress.setValue(this.generateAddress(typeAddress));
  }

  erasePersonalAddress() {
    this.eraseData(this.inputPersonalAddress);
    this.eraseData(this.inputPersonalNumber);
    this.eraseData(this.inputPersonalCep);
    this.eraseData(this.inputPersonalCity);
  }

  eraseCommercialAddress() {
    this.eraseData(this.inputCommercialAddress);
    this.eraseData(this.inputCommercialNumber);
    this.eraseData(this.inputCommercialCep);
    this.eraseData(this.inputCommercialCity);
    this.eraseData(this.inputCommercialState);

    this.eraseCommercialCountryAddress();
  }

  erasePersonalContact() {
    this.eraseData(this.inputPersonalCellPhone);
    this.eraseData(this.inputPersonalEmail);
  }

  eraseCommercialContact() {
    this.eraseData(this.inputCommercialPhone);
    this.eraseData(this.inputCommercialEmail);
  }

  erasePhoneOnly() {
    this.eraseData(this.inputPersonalPhone);
  }

  fillDataSpouse() {
    this.inputSpouseName.waitForExist(timeout);
    this.inputSpouseName.setValue(this.generateSpouseName());
    this.inputSpouseCpf.waitForExist(timeout);
    this.inputSpouseCpf.setValue(this.generateSpouseCpf());
  }

  existInputSpouseData() {
    return [
      this.inputSpouseName.isExisting(),
      this.inputSpouseCpf.isExisting()
    ];
  }

  fillPersonalAddress(typeAddress) {
    this.inputPersonalAddress.waitForExist(timeout);

    this.eraseData(this.inputPersonalAddress);
    this.inputPersonalAddress.setValue(this.generateAddress(typeAddress));

    this.eraseData(this.inputPersonalNumber);
    this.inputPersonalNumber.setValue(this.generateAddressNumber(typeAddress));

    this.eraseData(this.inputPersonalComplement);
    this.inputPersonalComplement.setValue(this.generateComplement(typeAddress));

    this.eraseData(this.inputPersonalCep);
    this.inputPersonalCep.setValue(this.generateCep(typeAddress));

    this.eraseData(this.inputPersonalCity);
    this.inputPersonalCity.setValue(this.generateCity(typeAddress));

    this.eraseData(this.inputPersonalState);
    this.inputPersonalState.setValue(this.generateState(typeAddress));

    this.setPersonalCountryAddress(typeAddress);
  }

  fillCommercialAddress(typeAddress) {
    this.inputCommercialAddress.waitForExist(timeout);

    this.eraseData(this.inputCommercialAddress);
    this.inputCommercialAddress.setValue(this.generateAddress(typeAddress));

    this.eraseData(this.inputCommercialNumber);
    this.inputCommercialNumber.setValue(
      this.generateAddressNumber(typeAddress)
    );

    this.eraseData(this.inputCommercialComplement);
    this.inputCommercialComplement.setValue(
      this.generateComplement(typeAddress)
    );

    this.eraseData(this.inputCommercialCep);
    this.inputCommercialCep.setValue(this.generateCep(typeAddress));

    this.eraseData(this.inputCommercialCity);
    this.inputCommercialCity.setValue(this.generateCity(typeAddress));

    this.eraseData(this.inputCommercialState);
    this.inputCommercialState.setValue(this.generateState(typeAddress));

    this.setCommercialCountryAddress(typeAddress);
  }

  fillOnlyCommercialAddress(typeAddress = "comercial") {
    this.inputCommercialAddress.waitForExist(timeout);
    this.inputCommercialAddress.setValue(this.generateAddress(typeAddress));
  }

  fillPersonalContact(typeContact) {
    this.inputPersonalPhone.waitForExist(timeout);

    this.eraseData(this.inputPersonalPhone);
    this.inputPersonalPhone.setValue(this.generatePhone(typeContact));
    this.eraseData(this.inputPersonalEmail);
    this.inputPersonalEmail.setValue(this.generateEmail(typeContact));
    this.eraseData(this.inputPersonalCellPhone);
    this.inputPersonalCellPhone.setValue(this.generateCellPhone());
  }

  fillCommercialContact(typeContact) {
    this.inputCommercialPhone.waitForExist(timeout);

    this.eraseData(this.inputCommercialPhone);
    this.inputCommercialPhone.setValue(this.generatePhone(typeContact));
    this.eraseData(this.inputCommercialEmail);
    this.inputCommercialEmail.setValue(this.generateEmail(typeContact));
  }

  setNoEquityValue() {
    this.selectTotalNetWorth.waitForExist(timeout);
    this.selectTotalNetWorth.selectByAttribute("value", "");
    this.selectFinancialShares.selectByAttribute("value", "");
    this.selectFinancialBonds.selectByAttribute("value", "");
    this.selectFinancialFounds.selectByAttribute("value", "");
    this.selectFinancialPassbookSavings.selectByAttribute("value", "");
    this.selectFinancialImmovables.selectByAttribute("value", "");
    this.selectFinancialMovables.selectByAttribute("value", "");
    this.selectSalaryOrPartnersFee.selectByAttribute("value", "");
    this.selectOtherIncome.selectByAttribute("value", "");
    this.selectBonusesGratificationsAndCommisions.selectByAttribute("value", "");
  }

  chooseEquityRange(range) {
    this.selectTotalNetWorth.waitForExist(timeout);
    this.selectTotalNetWorth.selectByVisibleText(range);
  }

  getCurrentEquityRange() {
    this.currentTotalNetWorth.waitForExist(timeout);
    return this.currentTotalNetWorth.getText();
  }

  fillOccupation() {
    this.inputOccupation.waitForExist();
    this.inputOccupation.setValue(this.generateOccupation());
  }

  fillCompany() {
    this.inputCompanyName.waitForExist();
    this.inputCompanyName.setValue(this.generateCompany());
  }

  fillKindActivity() {
    this.inputActivitySpecified.waitForExist(timeout);
    this.inputActivitySpecified.setValue(this.generateKindActivity());
  }

  uploadDocument() {
    this.buttonUploadDocument.waitForExist(timeout);
    this.buttonUploadDocument.chooseFile("./data-test/teste.pdf");
  }

  alertMessage() {
    this.alertMessageError.waitForExist(timeout);
    return this.alertMessageError.getAttribute("textContent");
  }

  confirmUpdate() {
    this.buttonUpdateInformation.waitForExist(timeout);
    this.buttonUpdateInformation.click();
  }

  closeFormAfterUpdate() {
    this.buttonCloseForm.waitForExist(timeout);
    this.buttonCloseForm.click();
  }

  updatedData() {
    return registrationData;
  }

  async eraseData(element) {
    const value = await element.getValue();

    await element.click();

    for (let index = 0; index <= value.length; index++) {
      await browser.keys("End");
      await browser.keys("Backspace");
    }
  }

  generateAddress(typeAddress) {
    const addressStreet = this.addMoment("Rua");
    typeAddress === "residencial"
      ? (registrationData.personalAddress = addressStreet)
      : (registrationData.commercialAddress = addressStreet);
    return addressStreet;
  }

  generateAddressNumber(typeNumber) {
    var min = 1;
    var max = 999;
    const addressNumber = Math.floor(Math.random() * (+max - +min)) + +min;
    typeNumber === "residencial"
      ? (registrationData.personalNumber = addressNumber.toString())
      : (registrationData.commercialNumber = addressNumber.toString());
    return addressNumber;
  }

  generateComplement(typeComplement) {
    const addressComplement = this.addMoment("AP");
    typeComplement === "residencial"
      ? (registrationData.personalComplement = addressComplement)
      : (registrationData.commercialComplement = addressComplement);
    return addressComplement;
  }

  generateCep(typeCep) {
    var min = 11111111;
    var max = 99999999;
    const addressCep = Math.floor(Math.random() * (+max - +min)) + +min;

    typeCep === "residencial"
      ? (registrationData.personalCep = addressCep
          .toString()
          .replace(/(\d{6})(\d{3})/, "$1-$2"))
      : (registrationData.commercialCep = addressCep
          .toString()
          .replace(/(\d{6})(\d{3})/, "$1-$2"));
    return addressCep;
  }

  generateCity(typeCity) {
    const addressCity = this.addMoment("Cidade");
    typeCity === "residencial"
      ? (registrationData.personalCity = addressCity)
      : (registrationData.commercialCity = addressCity);
    return addressCity;
  }

  generateState(typeState) {
    const addressState = this.addMoment("RJ");
    typeState === "residencial"
      ? (registrationData.personalState = addressState)
      : (registrationData.commercialState = addressState);
    return addressState;
  }

  generateSpouseName() {
    const spouseName = Math.random()
      .toString(36)
      .substring(7);
    registrationData.spouseName = spouseName;
    return spouseName;
  }

  generateSpouseCpf() {
    var min = 11111111111;
    var max = 99999999999;
    const spouseCpf = Math.floor(Math.random() * (+max - +min)) + +min;
    registrationData.spouseCpf = spouseCpf
      .toString()
      .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    return spouseCpf;
  }

  generatePhone(typePhone) {
    const phoneNumber = Math.floor(10000000000 + Math.random() * 90000000000);

    typePhone === "pessoal"
      ? (registrationData.personalPhone = phoneNumber
          .toString()
          .replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3"))
      : (registrationData.commercialPhone = phoneNumber
          .toString()
          .replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3"));
    return phoneNumber;
  }

  generateCellPhone() {
    const cellphone = Math.floor(10000000000 + Math.random() * 90000000000);

    registrationData.personalCellPhone = cellphone
      .toString()
      .replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    return cellphone;
  }

  generateEmail(typeEmail) {
    const email =
      Math.random()
        .toString(36)
        .substring(7) + `@${typeEmail}.com`;

    typeEmail === "pessoal"
      ? (registrationData.personalEmail = email)
      : (registrationData.commercialEmail = email);
    return email;
  }

  generateOccupation() {
    const occupation = this.addMoment("Ocupação");
    registrationData.occupation = occupation;
    return occupation;
  }

  generateCompany() {
    const company = this.addMoment("Empresa");
    registrationData.company = company;
    return company;
  }

  generateKindActivity() {
    const kindActivity = this.addMoment("Atividade");
    registrationData.kindOfActivity = kindActivity;
    return kindActivity;
  }

  addMoment(string) {
    return moment().format(`[${string} -] DDMMYYYY, h:mm:ss`);
  }

  confirmTransactionToken(token) {
    if (token) {
      this.tokenField.waitForExist({ timeout });
      this.tokenField.setValue(token);
      this.confirmBtn.waitForEnabled({ timeout });
      this.confirmBtn.click();
    } else {
      throw new Error('ERROR: "confirmTransactionToken" com problema');
    }
  }

  getExitMsg() {
    $('//div[contains(text(),"Você")]').waitForExist(10000);
    return $('//div[contains(text(),"Você")]').getText();
  }

  verifyTokenInvalid() {
    this.tokenInvalid.waitForEnabled();
    return this.tokenInvalid.getText();
  }

  fecharAtualizacaoCadastral() {
    try {
      this.closeForm.waitForClickable({ shorterTimeout });
      this.closeForm.click();
      this.leaveButton.waitForClickable({ shorterTimeout });
      this.leaveButton.click();
      return true;
    } catch (error) {
      return false;
    }
  }

  async closeUpdatingRegistrationData() {
    try {
      await this.waitLoadingAsync();
      await (await this.closeForm).waitForClickable({ shorterTimeout });
      await (await this.closeForm).click();
      await (await this.leaveButton).waitForClickable({ shorterTimeout });
      await (await this.leaveButton).click();
      return;
    } catch (error) {
      return;
    }
  }
}
module.exports = new UpdatingRegistationDataPage();