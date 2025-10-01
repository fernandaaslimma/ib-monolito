import actions from "./index";
import deepClone from "../../utils/deepClone";
jest.mock("../../services/registration");

jest.mock("../../utils/i18n", () => {
  const names = {
    ATUCAD_BIGGER_THAN: "Bigger than ",
    ATUCAD_I_DO_NOT_HAVE: "I do not have"
  };

  return {
    translate: id => names[id],
    getLanguage: () => "en-US",
    getDateFieldPlaceholderByLocale: () => "DD/MM/YYYY",
    isZhCN: () => false,
    isPtBR: () => false
  };
});

const {
  getRegistrationFormData: getRegistrationFormDataAPI,
  postConfirmRegistrationFormData: postConfirmRegistrationFormDataAPI,
  putConfirmRegistrationFormData: putConfirmRegistrationFormDataAPI,
  postUpdateRegistrationFormData: postUpdateRegistrationFormDataAPI,
  putUpdateRegistrationFormData: putUpdateRegistrationFormDataAPI,
  getCountries: getCountriesAPI
} = require("../../services/registration");

const response = {
  content: {
    attorneysInFact: [{ cpf: "11122233344", name: "Procurador 1" }],
    bankReferences: [{ bankCode: "341", bankName: "Itaú" }],
    contacts: {
      addresses: [
        {
          address: "Rua brigadeiro Faria Limas",
          cep: "22631-902",
          city: "São Paulo",
          complement: "casa 2",
          country: "Brazil",
          district: "Bairro",
          number: "124",
          state: "SP",
          type: "home"
        },
        {
          address: "Rua brigadeiro Faria Limas",
          cep: "22631-902",
          city: "São Paulo",
          complement: "12345",
          country: "Brazil",
          district: "Bairro",
          number: "124",
          state: "SP",
          type: "commercial"
        }
      ],
      emails: [{ address: "joao.da.silva@gmail.com", type: "personal" }],
      telephones: [{ ddd: 11, number: "29820911", type: "home" }]
    },
    fatcaInformation: { isUsPerson: false, questionnaire: [{}] },
    id: 123,
    investmentDetails: {
      sourceOfFunds: [
        {
          name: "work",
          text: "Trabalho",
          value: true
        },
        {
          name: "inheritance",
          text: "Herança",
          value: false
        },
        {
          name: "donation",
          text: "Doação",
          value: false
        },
        {
          name: "others",
          text: "Outros, especificar",
          value: true,
          additionalValue: "outra origem"
        }
      ],
      estimatedEquity: {
        rangeId: null,
        exactValue: null,
        rangeOptions: [
          {
            id: 1,
            min: 0,
            max: 0
          },
          {
            id: 2,
            min: 1,
            max: 20000.0
          },
          {
            id: 6,
            min: 50000.01,
            max: 100000.0
          },
          {
            id: 3,
            min: 10000000.01,
            max: 10000000000.0
          },
          {
            id: 4,
            min: 10000.01,
            max: 3000000.01
          },
          {
            id: 5,
            min: 3000.01,
            max: 30000.02
          }
        ]
      },
      liquidAssets: {
        stocks: {
          rangeId: 1,
          rangeOptions: [
            {
              id: 1,
              min: 0,
              max: 0
            },
            {
              id: 2,
              min: 1,
              max: 3455.0
            }
          ]
        },
        funds: {
          rangeId: 2,
          rangeOptions: [
            {
              id: 1,
              min: 0,
              max: 0
            },
            {
              id: 2,
              min: 1,
              max: 3455.0
            },
            {
              id: 3,
              min: 50000.01,
              max: 100000.0
            }
          ]
        },
        bonds: {
          rangeId: 3,
          rangeOptions: [
            {
              id: 1,
              min: 0,
              max: 0
            },
            {
              id: 2,
              min: 1,
              max: 3455.0
            },
            {
              id: 3,
              min: 10000000.01,
              max: 10000000000.0
            },
            {
              id: 4,
              min: 10000.01,
              max: 3000000.01
            },
            {
              id: 5,
              min: 3000.01,
              max: 30000.02
            }
          ]
        },
        savings: {
          rangeId: 4,
          rangeOptions: [
            {
              id: 1,
              min: 0,
              max: 0
            },
            {
              id: 2,
              min: 1,
              max: 3455.0
            },
            {
              id: 3,
              min: 10000000.01,
              max: 10000000000.0
            },
            {
              id: 4,
              min: 10000.01,
              max: 3000000.01
            }
          ]
        }
      },
      fixedAssets: {
        realProperty: {
          rangeId: 5,
          rangeOptions: [
            {
              id: 1,
              min: 0,
              max: 0
            },
            {
              id: 2,
              min: 1,
              max: 3455.0
            },
            {
              id: 6,
              min: 50000.01,
              max: 100000.0
            },
            {
              id: 7,
              min: 100000.01,
              max: null
            },
            {
              id: 3,
              min: 10000000.01,
              max: 10000000000.0
            },
            {
              id: 4,
              min: 10000.01,
              max: 3000000.01
            },
            {
              id: 5,
              min: 3000.01,
              max: 30000.02
            }
          ]
        },
        personalProperty: {
          rangeId: 6,
          rangeOptions: [
            {
              id: 1,
              min: 0,
              max: 0
            },
            {
              id: 2,
              min: 1,
              max: 3455.0
            },
            {
              id: 6,
              min: 50000.01,
              max: 100000.0
            },
            {
              id: 7,
              min: 100000.01,
              max: null
            },
            {
              id: 3,
              min: 10000000.01,
              max: 10000000000.0
            },
            {
              id: 4,
              min: 10000.01,
              max: 3000000.01
            },
            {
              id: 5,
              min: 3000.01,
              max: 30000.02
            }
          ]
        }
      },
      estimatedAnnualIncome: {
        bonusesAndCommissions: {
          rangeId: 1,
          exactValue: null,
          rangeOptions: [
            {
              id: 1,
              min: 0,
              max: 0
            },
            {
              id: 2,
              min: 1,
              max: 3455.0
            },
            {
              id: 6,
              min: 50000.01,
              max: 100000.0
            },
            {
              id: 7,
              min: 100000.01,
              max: null
            },
            {
              id: 3,
              min: 10000000.01,
              max: 10000000000.0
            },
            {
              id: 4,
              min: 10000.01,
              max: 3000000.01
            },
            {
              id: 5,
              min: 3000.01,
              max: 30000.02
            }
          ]
        },
        salary: {
          rangeId: 5,
          exactValue: null,
          rangeOptions: [
            {
              id: 1,
              min: 0,
              max: 0
            },
            {
              id: 2,
              min: 1,
              max: 3455.0
            },
            {
              id: 6,
              min: 50000.01,
              max: 100000.0
            },
            {
              id: 7,
              min: 100000.01,
              max: null
            },
            {
              id: 3,
              min: 10000000.01,
              max: 10000000000.0
            },
            {
              id: 4,
              min: 10000.01,
              max: 3000000.01
            },
            {
              id: 5,
              min: 3000.01,
              max: 30000.02
            }
          ]
        },
        others: {
          rangeId: 3,
          exactValue: null,
          rangeOptions: [
            {
              id: 1,
              min: 0,
              max: 0
            },
            {
              id: 2,
              min: 1,
              max: 2
            },
            {
              id: 3,
              min: 2.01,
              max: 3
            }
          ]
        }
      },
      rangeOptions: [
        {
          id: 1,
          min: 0,
          max: 0
        },
        {
          id: 2,
          min: 1,
          max: 3455.0
        },
        {
          id: 6,
          min: 50000.01,
          max: 100000.0
        },
        {
          id: 7,
          min: 100000.01,
          max: null
        },
        {
          id: 3,
          min: 10000000.01,
          max: 10000000000.0
        },
        {
          id: 4,
          min: 10000.01,
          max: 3000000.01
        },
        {
          id: 5,
          min: 3000.01,
          max: 30000.02
        }
      ]
    },
    nonResidentInvestorInformation: {
      cvmOperationCode: "123456",
      legalRepresentative: {
        cnpj: "22222222222222",
        name: "representante legal"
      },
      rdeNumber: "12345",
      taxRepresentative: "João das Neves"
    },
    personalReferences: [
      {
        kinship: "Cousin",
        name: "Paula Fernandez de Souza",
        telephone: { ddd: 11, number: "29820911" }
      }
    ],
    personalRegistrationDetails: {
      maritalStatus: "married",
      name: "João da Silva",
      parentsNames: {
        fathersName: "José da Silva",
        mothersName: "Maria da Silva"
      },
      spouse: { spouseCpf: "12345678910", spouseName: "Paula dos Santos" }
    },
    politicallyExposedPerson: {
      institution: "",
      isPep: false,
      jobTitle: "",
      name: "",
      reason: "",
      relationship: ""
    },
    professionalInformation: {
      admissionDate: "2015-07-19",
      company: { cnpj: "15114366000169", name: "Banco BOCOM BBM" },
      occupation: "developer"
    },
    purposeWithTheInstitution: "invest",
    relatedPersonInformation: {
      institution: "",
      isRelated: false,
      jobTitle: "",
      name: "",
      relationship: ""
    },
    representationAuthorization: false,
    taxResidences: [
      {
        country: "United States Of America",
        taxIdentificationNumber: "123456"
      },
      { country: "Brazil", taxIdentificationNumber: "654321" }
    ]
  }
};

const registrationFormData = response;
const errorMock = { message: "mock error" };
const expectedErrorResponse = { error: errorMock };

describe("Registration actions", () => {
  it("should return an action object", () => {
    expect(typeof actions() === "object").toBeTruthy();
  });

  describe("getRegistrationFormData", () => {
    it("should correct modeled form data", async () => {
      getRegistrationFormDataAPI.mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(response)
        })
      );

      const { getRegistrationFormData } = actions();
      const getResponse = await getRegistrationFormData(1);

      expect(getResponse.registrationFormData).toEqual(registrationFormData);
    });

    it("should getRegistrationFormData with error", async () => {
      getRegistrationFormDataAPI.mockImplementation(() =>
        Promise.reject(errorMock)
      );

      const { getRegistrationFormData } = actions();
      const response = await getRegistrationFormData();

      expect(response).toEqual(expectedErrorResponse);
    });
  });

  describe("postConfirmRegistrationFormData", () => {
    it("should correct post confirmation", async () => {
      postConfirmRegistrationFormDataAPI.mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve({ content: "mock" })
        })
      );

      const { postConfirmRegistrationFormData } = actions();
      const postResponse = await postConfirmRegistrationFormData();

      expect(postResponse).toEqual({ dataPersonalRegistration: "mock" });
    });

    it("should post confirmation and get error", async () => {
      postConfirmRegistrationFormDataAPI.mockImplementation(() =>
        Promise.reject(errorMock)
      );

      const { postConfirmRegistrationFormData } = actions();

      try {
        await postConfirmRegistrationFormData();
      } catch (error) {
        expect(error).toEqual(expectedErrorResponse);
      }
    });
  });

  describe("putConfirmRegistrationFormData", () => {
    const store = {
      dataPersonalRegistration: {
        confirmationToken: "dfsdgljdhlhdslg"
      },
      mfaTokenParams: {
        payload: "mock",
        key: "mockKey"
      }
    };

    it("should correct put confirmation", async () => {
      putConfirmRegistrationFormDataAPI.mockImplementation();

      const { putConfirmRegistrationFormData } = actions();
      await putConfirmRegistrationFormData(store, true);

      expect(putConfirmRegistrationFormDataAPI).toHaveBeenCalled();
    });

    it("should put confirmation and get error", async () => {
      putConfirmRegistrationFormDataAPI.mockImplementation(() =>
        Promise.reject(errorMock)
      );

      const { putConfirmRegistrationFormData } = actions();

      try {
        await putConfirmRegistrationFormData(store, true);
      } catch (error) {
        expect(error).toEqual(errorMock);
      }
    });
  });

  describe("postUpdateRegistrationFormData", () => {
    it("should correct post update", async () => {
      postUpdateRegistrationFormDataAPI.mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve({ content: "mock" })
        })
      );

      const { postUpdateRegistrationFormData } = actions();
      const postResponse = await postUpdateRegistrationFormData(
        null,
        response.content
      );

      expect(postResponse).toEqual({ dataPersonalRegistration: "mock" });
    });

    it("should correct post update with modeled commercial address", async () => {
      const contentInstance = deepClone(response.content);

      contentInstance.contacts.addresses = [
        {
          type: "commercial",
          address: "Rua brigadeiro Faria Limas",
          number: "",
          complement: "",
          cep: "",
          country: "",
          city: "",
          state: "SP",
          district: "Bairro"
        }
      ];

      postUpdateRegistrationFormDataAPI.mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve({ content: "mock" })
        })
      );

      const { postUpdateRegistrationFormData } = actions();
      const postResponse = await postUpdateRegistrationFormData(
        null,
        contentInstance
      );

      expect(postResponse).toEqual({ dataPersonalRegistration: "mock" });
    });

    it("should post update and get error", async () => {
      postUpdateRegistrationFormDataAPI.mockImplementation(() =>
        Promise.reject(errorMock)
      );

      const { postUpdateRegistrationFormData } = actions();

      try {
        await postUpdateRegistrationFormData(null, response.content);
      } catch (error) {
        expect(error).toEqual(errorMock);
      }
    });
  });

  describe("putUpdateRegistrationFormData", () => {
    const store = {
      dataPersonalRegistration: {
        confirmationToken: "dfsdgljdhlhdslg"
      },
      mfaTokenParams: {
        payload: "mock",
        key: "mockKey"
      }
    };

    it("should correct put update", async () => {
      putUpdateRegistrationFormDataAPI.mockImplementation();

      const { putUpdateRegistrationFormData } = actions();
      await putUpdateRegistrationFormData(store);

      expect(putUpdateRegistrationFormDataAPI).toHaveBeenCalled();
    });

    it("should put update and get error", async () => {
      putUpdateRegistrationFormDataAPI.mockImplementation(() =>
        Promise.reject(errorMock)
      );

      const { putUpdateRegistrationFormData } = actions();

      try {
        await putUpdateRegistrationFormData(store);
      } catch (error) {
        expect(error).toEqual(errorMock);
      }
    });
  });

  describe("getCountries", () => {
    it("should correct modeled form data", async () => {
      const response = [
        {
          name: "Brazil",
          code: "BRA",
          id: 1
        },
        {
          name: "United States of America",
          code: "USA",
          id: 2
        }
      ];
      getCountriesAPI.mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(response)
        })
      );

      const { getCountries } = actions();
      const getResponse = await getCountries();

      expect(getResponse).toEqual({
        countries: [
          {
            code: "USA",
            label: "United States of America",
            value: "united_states_of_america"
          }
        ]
      });
    });

    it("should getRegistrationFormData with error", async () => {
      getCountriesAPI.mockImplementation(() => Promise.reject(errorMock));

      const { getCountries } = actions();
      const response = await getCountries();

      expect(response).toEqual(expectedErrorResponse);
    });
  });
});
