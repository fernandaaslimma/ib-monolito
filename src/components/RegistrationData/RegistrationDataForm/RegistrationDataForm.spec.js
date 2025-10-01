import { shallow } from "enzyme";
import React from "react";
import { REGISTRATION_DATA_NOTIFICATION_TYPE } from "../../../utils/constants";

import RegistrationDataForm from "./RegistrationDataForm";
import { Button } from "react-bocombbm-components";
import deepClone from "../../../utils/deepClone";
import EFTToken from "../../common/EFTToken";
import ExitConfirmation from "../../common/ExitConfirmation";
import Header from "../../common/Modal/Header";

jest.mock("../../../utils/fetchHandler");
jest.mock("../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false,
  isPtBR: () => false
}));
// jest.mock("../../common/EFTToken");

const props = {
  notification: [
    {
      type: REGISTRATION_DATA_NOTIFICATION_TYPE,
      parameters: {
        formId: 1
      }
    }
  ],
  registrationFormData: {
    content: {
      id: 123,
      personalRegistrationDetails: {
        name: "João da Silva",
        cpf: "12114474135",
        documentType: "RG",
        documentNumber: "111111111",
        documentIssuingBody: "DETRAN RJ",
        documentDateOfIssue: "2010-05-20",
        gender: "M",
        birthCountry: "Brasil",
        birthState: "RJ",
        birthCity: "Rio de Janeiro",
        dateOfBirth: "1990-05-20",
        parentsNames: {
          fathersName: "José da Silva",
          mothersName: "Maria da Silva"
        },
        maritalStatus: "single",
        spouse: { spouseName: "Paula dos Santos", spouseCpf: "12345678910" }
      },
      professionalInformation: {
        activity: "privateSectorEmployee",
        otherActivitySpecified: "",
        occupation: "developer",
        company: { name: "Banco BOCOM BBM", cnpj: "15114366000169" },
        admissionDate: "2015-07-19"
      },
      personalReferences: [
        {
          name: "Paula Fernandez de Souza",
          kinship: "Cousin",
          telephone: { ddd: 11, number: "29820911" }
        },
        {
          name: "Paula Fernandez de Souza 2",
          kinship: "Cousin",
          telephone: { ddd: 11, number: "29825500" }
        }
      ],
      bankReferences: [
        { bankName: "Itaú", bankCode: "341" },
        { bankName: "Bradesco", bankCode: "237" }
      ],
      nonResidentInvestorInformation: {
        rdeNumber: "12345",
        cvmOperationCode: "123456",
        taxRepresentative: "João das Neves",
        legalRepresentative: {
          name: "representante legal",
          cnpj: "22222222222222"
        }
      },
      politicallyExposedPerson: {
        isPEP: false,
        relationship: "bla",
        name: "nome",
        jobTitle: "diretor",
        institution: "petrobras",
        reason: "eleição em 2019"
      },
      relatedPerson: true,
      relatedPersonInformation: {
        isRelated: true,
        relationship: "bla",
        jobTitle: "diretor",
        name: "nome",
        institution: "petrobras"
      },
      purposeWithTheInstitution: [
        { name: "invest", text: "Invest", value: true },
        { name: "acquire_finance", text: "Acquire Finance", value: true },
        {
          text: "Other",
          name: "other",
          value: false,
          aditionalValue: "string",
          additionalValue: null
        }
      ],
      contacts: {
        addresses: [
          {
            type: "home",
            address: "Rua brigadeiro Faria Limas",
            number: "124",
            complement: "casa 2",
            cep: "22631-902",
            country: "Brazil",
            city: "São Paulo",
            state: "SP",
            district: "Bairro"
          },
          {
            type: "commercial",
            address: "Rua brigadeiro Faria Limas",
            number: "124",
            complement: "casa 2",
            cep: "22631-902",
            country: "Brazil",
            city: "São Paulo",
            state: "SP",
            district: "Bairro"
          },
          {
            type: "correspondence",
            address: "Rua brigadeiro Faria Limas",
            number: "124",
            complement: "casa 2",
            cep: "22631-902",
            country: "Brazil",
            city: "São Paulo",
            state: "SP",
            district: "Bairro"
          }
        ],
        telephones: [
          { type: "home", ddd: 11, number: "33330911" },
          { type: "commercial", ddd: 11, number: "29820911" },
          { type: "cellphone", ddd: 11, number: "999820911" }
        ],
        emails: [
          { type: "personal", address: "joaosilva@gmail.com" },
          { type: "commercial", address: "joao.da.silva@bancombbm.com.br" }
        ]
      },
      taxResidences: [{ country: "brazil", taxIdentificationNumber: "654321" }],
      personInCharge: {
        name: "Nome do responsável",
        cpf: "12345678910",
        contacts: {
          addresses: [
            {
              type: "home",
              address: "Rua brigadeiro Faria Limas",
              number: "124",
              complement: "casa 2",
              cep: "22631-902",
              country: "Brazil",
              city: "São Paulo",
              state: "SP",
              district: "Bairro"
            },
            {
              type: "commercial",
              address: "Rua brigadeiro Faria Limas",
              number: "124",
              complement: "casa 2",
              cep: "22631-902",
              country: "Brazil",
              city: "São Paulo",
              state: "SP",
              district: "Bairro"
            },
            {
              type: "correspondence",
              address: "Rua brigadeiro Faria Limas",
              number: "124",
              complement: "casa 2",
              cep: "22631-902",
              country: "Brazil",
              city: "São Paulo",
              state: "SP",
              district: "Bairro"
            }
          ],
          telephones: [
            { type: "home", number: "11-2982-0911" },
            { type: "commercial", number: "11-2982-0911" },
            { type: "cellphone", number: "11-99982-0911" }
          ],
          emails: [
            { type: "personal", address: "joao.da.silva@gmail.com" },
            { type: "commercial", address: "joaosilva@bocombbm.com.br" }
          ]
        }
      },
      fatcaInformation: {
        isUsPerson: false,
        questionnaire: [
          {
            optionNumber: 1,
            text:
              "I am a student, teacher, or trainee at a US educational institution or a participant in a cultural or educational exchange program, and I have a US visa specifically related to these types of stay ('F', 'J', 'M', or 'Q').",
            value: false
          },
          {
            optionNumber: 2,
            text:
              " I work in the US as a foreign diplomat or hold positions at a consulate, embassy or international organization.",
            value: true
          },
          {
            optionNumber: 3,
            text:
              "I am a spouse or single child under 21 (twenty one) years old who meets conditions 1 or 2.",
            value: false
          },
          {
            optionNumber: 4,
            text:
              "I have not had a substantial presence in the United States, i.e., in the last three years (including the present year) I have not been in the US for more than 183 days considering all the days of this year, one third of last year and one sixth of the previous year. I was present in the U.S. for ___ days in the current year, ___ days in the previous year, and ___ days in the year before that",
            value: false,
            additionalValues: [
              { order: 1, value: 10 },
              { order: 2, value: 15 },
              { order: 3, value: 148 }
            ]
          },
          {
            optionNumber: 5,
            text:
              " I have given up US nationality or citizenship pursuant to the Certificate of Loss of Nationality, issued by the US Bureau of Consular Affairs, attached to this statement.",
            value: false
          },
          {
            optionNumber: 6,
            text:
              "Although I was born in the US, as per attached statement, I have renounced US citizenship (although I do not yet have the corresponding Certificate) or did not acquire such citizenship at birth.",
            value: false
          },
          {
            optionNumber: 7,
            text:
              " I do not have a green card visa and have not applied for a visa to the US.",
            value: true
          },
          {
            optionNumber: 8,
            text:
              "I have given up my green card visa, as per the Green Card Abandonment Certificate issued by a US consular authority in Brazil, attached to this declaration.",
            value: false
          }
        ]
      },
      investmentDetails: {
        sourceOfFunds: [
          { name: "work", text: "Trabalho", value: true },
          { name: "inheritance", text: "Herança", value: false },
          { name: "donation", text: "Doação", value: false },
          {
            name: "others",
            text: "Outros, especificar",
            value: true,
            additionalValue: "outra origem"
          }
        ],
        estimatedEquity: { rangeId: 3, exactValue: null },
        liquidAssets: {
          stocks: { rangeId: 1 },
          funds: { rangeId: 2 },
          bonds: { rangeId: 3 },
          savings: { rangeId: 4 }
        },
        fixedAssets: {
          realProperty: { rangeId: 5 },
          personalProperty: { rangeId: 6 }
        },
        estimatedAnnualIncome: {
          bonusesAndCommissions: { rangeId: 1, exactValue: null },
          salary: { rangeId: 5, exactValue: null },
          others: { rangeId: 3, exactValue: null }
        },
        rangeOptions: [
          { id: 1, min: 0, max: 0, name: "I do not have", value: 1 },
          { id: 2, min: 1, max: 3455, name: "1.00 - 3,455.00", value: 2 },
          {
            id: 5,
            min: 3000.01,
            max: 30000.02,
            name: "3,000.01 - 30,000.02",
            value: 5
          },
          {
            id: 4,
            min: 10000.01,
            max: 3000000.01,
            name: "10,000.01 - 3,000,000.01",
            value: 4
          },
          {
            id: 6,
            min: 50000.01,
            max: 100000,
            name: "50,000.01 - 100,000.00",
            value: 6
          },
          {
            id: 7,
            min: 100000.01,
            max: 100000,
            name: "Bigger than 100,000.01",
            value: 7
          },
          {
            id: 3,
            min: 10000000.01,
            max: 10000000000,
            name: "10,000,000.01 - 10,000,000,000.00",
            value: 3
          }
        ]
      },
      representationAuthorization: true,
      attorneysInFact: [
        {
          name: "Procurador 1",
          cpf: "11122233344",
          startDate: "06/25/2020",
          endDate: "06/25/2020"
        },
        {
          name: "Procurador 2",
          cpf: "55566677788",
          startDate: "06/25/2020",
          endDate: "06/25/2020"
        }
      ],
      documents: {}
    }
  },
  getRegistrationFormData: jest.fn(),
  getNotification: jest.fn(() => Promise.resolve()),
  setNotificationStatus: jest.fn(),
  closeModal: jest.fn(),
  getCountries: jest.fn(),
  openToastr: jest.fn(),
  openModal: jest.fn(),
  contacts: {},
  purposeWithTheInstitution: {}
};

describe("RegistrationDataForm", () => {
  it("Component with no props", () => {
    const getRegistrationFormDataMock = jest.fn();
    const RegistrationWrapper = shallow(
      <RegistrationDataForm
        getRegistrationFormData={getRegistrationFormDataMock}
      />
    );

    expect(RegistrationWrapper).toMatchSnapshot();
  });

  it("Component render exit screen", () => {
    const registrationWrapper = shallow(<RegistrationDataForm {...props} />);

    registrationWrapper.setState({ isExiting: true });
    expect(registrationWrapper).toMatchSnapshot();
  });

  it("Component render MFA screen", () => {
    const registrationWrapper = shallow(<RegistrationDataForm {...props} />);

    registrationWrapper.setState({ isExiting: false });
    registrationWrapper.setState({ isAuthenticating: true });

    expect(registrationWrapper).toMatchSnapshot();
  });

  it("Component render registration DataForm", () => {
    const registrationWrapper = shallow(<RegistrationDataForm {...props} />);

    registrationWrapper.setState({ isExiting: false });
    registrationWrapper.setState({ isAuthenticating: false });
    registrationWrapper.setState({ formModel: { content: { contacts: "" } } });

    expect(registrationWrapper).toMatchSnapshot();
  });

  it("Should call getNotification", () => {
    shallow(<RegistrationDataForm {...props} />);
    expect(props.getNotification).toHaveBeenCalled();
  });

  it("Should call getRegistrationFormData", () => {
    shallow(<RegistrationDataForm {...props} />);
    expect(props.getRegistrationFormData).toHaveBeenCalled();
  });

  it("Should changeFormModel with new state", () => {
    const model = {
      taxResidences: [
        {
          country: "XPTO",
          taxIdentificationNumber: "123456"
        },
        {
          country: "XPTO",
          taxIdentificationNumber: "654321"
        }
      ]
    };

    const preState = {
      formModel: {
        content: {
          value: "mock"
        }
      }
    };
    const wrapper = shallow(<RegistrationDataForm {...props} />);
    const wrapperInstance = wrapper.instance();

    wrapperInstance.setState = jest.fn(callback => callback(preState));
    wrapperInstance.changeFormModel(model, "taxResidences");

    expect(wrapperInstance.setState).toHaveBeenCalled();
  });

  it("Should call openAuth", () => {
    const shallowComponent = shallow(<RegistrationDataForm {...props} />);
    shallowComponent.setState({
      formModel: props.registrationFormData,
      isExiting: false,
      isAuthenticating: false,
      canUpdate: true
    });

    shallowComponent
      .find(Button)
      .at(0)
      .simulate("click");

    shallowComponent.setState({
      isAuthenticating: true
    });
    expect(shallowComponent).toMatchSnapshot();
  });

  it("Should call openAuth with updated form", () => {
    const newProps = deepClone(props);
    newProps.registrationFormData.content.attorneysInFact.name = "mock";
    const shallowComponent = shallow(<RegistrationDataForm {...newProps} />);
    shallowComponent.setState({
      formModel: newProps.registrationFormData,
      isAuthenticating: false,
      isExiting: false,
      canUpdate: true
    });

    shallowComponent.setState({ loading: true });

    shallowComponent
      .find(Button)
      .at(0)
      .simulate("click");

    expect(shallowComponent).toMatchSnapshot();
  });

  it("Should call openToastr", () => {
    const newProps = deepClone(props);
    newProps.registrationFormData.content.contacts.emails[0].address = undefined;
    const shallowComponent = shallow(<RegistrationDataForm {...newProps} />);
    shallowComponent.setState({
      formModel: newProps.registrationFormData,
      isAuthenticating: false,
      isExiting: false,
      canUpdate: true
    });

    shallowComponent.setState({ loading: true });

    shallowComponent
      .find(Button)
      .at(0)
      .simulate("click");

    expect(shallowComponent).toMatchSnapshot();
  });

  it("should call submitRegistration onMFAConfirmation", () => {
    const newProps = {
      ...props,
      openModal(config) {
        config.children();
      }
    };
    const shallowComponent = shallow(<RegistrationDataForm {...newProps} />);
    shallowComponent.setState({
      isAuthenticating: true,
      isExiting: false
    });
    const spy = jest.spyOn(shallowComponent.instance(), "submitRegistration");
    shallowComponent.find(EFTToken).prop("onMFAConfirmation")();
    expect(spy).toHaveBeenCalled();
  });

  it("should call validateSection with canUpdate as false", () => {
    const shallowComponent = shallow(<RegistrationDataForm {...props} />);
    shallowComponent.setState({
      formModel: props.registrationFormData,
      isAuthenticating: true,
      canUpdate: false
    });
    shallowComponent.instance().validateSection({}, "documents");
    // const spy = jest.spyOn(shallowComponent.instance(), "validateSection");
    expect(shallowComponent).toMatchSnapshot();
  });

  it("should call validateSection with canUpdate as true", () => {
    const shallowComponent = shallow(<RegistrationDataForm {...props} />);
    shallowComponent.setState({
      formModel: props.registrationFormData,
      isAuthenticating: true,
      canUpdate: true
    });
    shallowComponent.instance().validateSection({}, "documents");
    expect(shallowComponent).toMatchSnapshot();
  });

  it("should exit Person Registration", () => {
    const shallowComponent = shallow(<RegistrationDataForm {...props} />);
    const spy = jest.spyOn(shallowComponent.instance(), "setState");

    shallowComponent.find(Header).prop("onClickClose")();

    expect(spy).toHaveBeenCalledWith({ isExiting: true });
  });

  it("should confirm exiting Person Registration", () => {
    const shallowComponent = shallow(<RegistrationDataForm {...props} />);
    shallowComponent.setState({
      isExiting: true
    });
    shallowComponent.find(ExitConfirmation).prop("onClickExit")();
    expect(props.setNotificationStatus).toHaveBeenCalledWith(
      "PersonRegistrationForms"
    );
  });
  it("should cancel exiting Person Registration", () => {
    const shallowComponent = shallow(<RegistrationDataForm {...props} />);
    shallowComponent.setState({
      isExiting: true
    });
    const spy = jest.spyOn(shallowComponent.instance(), "setState");
    shallowComponent.find(ExitConfirmation).prop("onClickCancel")();
    expect(spy).toHaveBeenCalledWith({ isExiting: false });
  });

  it("should call setRegistrationAgreement as true", () => {
    const shallowComponent = shallow(<RegistrationDataForm {...props} />);
    shallowComponent.setState({
      formModel: props.registrationFormData,
      isAuthenticating: false,
      canUpdate: false
    });
    const spy = jest.spyOn(shallowComponent.instance(), "setState");

    shallowComponent.instance().setRegistrationAgreement(true);
    expect(spy).toHaveBeenCalledWith({ agree: true });
  });
});
