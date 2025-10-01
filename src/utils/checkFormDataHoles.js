import { translate } from "./i18n";

import {
  CONTACTS,
  //TAX_RESIDENCES,
  //FATCA_INFORMATION,
  INVESTMENT_DETAILS,
  //POLITICALLY_EXPOSED_PERSON,
  //ATTORNEYS_IN_FACT,
  //RELATED_PERSON_INFORMATION,
  PERSONAL_REGISTRATION_DETAILS
  //PURPOSE_WITH_THE_INSTITUTION,
  //PROFESSIONAL_INFORMATION,
  //REPRESENTATION_AUTHORIZATION
} from "./constants";

const sections = [
  CONTACTS,
  //TAX_RESIDENCES,
  //FATCA_INFORMATION,
  INVESTMENT_DETAILS,
  //POLITICALLY_EXPOSED_PERSON,
  //ATTORNEYS_IN_FACT,
  //RELATED_PERSON_INFORMATION,
  PERSONAL_REGISTRATION_DETAILS
  //PURPOSE_WITH_THE_INSTITUTION,
  //PROFESSIONAL_INFORMATION,
  //REPRESENTATION_AUTHORIZATION
];

export const minimumAcceptableForm = {
  professionalInformation: {
    activity: "",
    otherActivitySpecified: "",
    occupation: "",
    company: {
      name: "",
      cnpj: ""
    },
    admissionDate: ""
  },
  attorneysInFact: [],
  personalRegistrationDetails: {
    name: "",
    cpf: "",
    documentType: "",
    documentNumber: "",
    documentIssuingBody: "",
    documentDateOfIssue: "",
    gender: "",
    birthCountry: "",
    birthState: "",
    birthCity: "",
    dateOfBirth: "",
    maritalStatus: "",
    parentsNames: {
      fathersName: "",
      mothersName: ""
    },
    spouse: {
      spouseName: "",
      spouseCpf: ""
    }
  },
  politicallyExposedPerson: {
    isPep: false,
    relationship: "",
    name: "",
    jobTitle: "",
    institution: "",
    reason: ""
  },
  purposeWithTheInstitution: [
    {
      name: "invest",
      text: translate("INVEST"),
      value: false
    },
    {
      name: "acquire_finance",
      text: translate("ACQUIRE_FINANCE"),
      value: false
    },
    {
      text: translate("OTHER"),
      name: "other",
      value: false,
      aditionalValue: "",
      additionalValue: ""
    }
  ],
  contacts: {
    addresses: [
      {
        type: "home",
        address: "",
        number: "",
        complement: "",
        cep: "",
        country: "",
        city: "",
        state: "",
        district: ""
      },
      {
        type: "commercial",
        address: "",
        number: "",
        complement: "",
        cep: "",
        country: "",
        city: "",
        state: "",
        district: ""
      }
    ],
    telephones: [
      {
        type: "home",
        ddd: "",
        number: ""
      },
      {
        type: "commercial",
        ddd: "",
        number: ""
      },
      {
        type: "cellphone",
        ddd: "",
        number: ""
      }
    ],
    emails: [
      {
        type: "personal",
        address: ""
      },
      {
        type: "commercial",
        address: ""
      }
    ]
  },
  taxResidences: [],
  fatcaInformation: {
    isUsPerson: false,
    questionnaire: [
      {
        optionNumber: 1,
        text:
          "I am a student, teacher, or trainee at a US educational institution or a participant in a cultural or educational exchange program, and I have a US visa specifically related to these types of stay ('F', 'J', 'M', or 'Q').",
        value: null,
        additionalValues: []
      },
      {
        optionNumber: 2,
        text:
          "I work in the US as a foreign diplomat or hold positions at a consulate, embassy or international organization.",
        value: null,
        additionalValues: []
      },
      {
        optionNumber: 3,
        text:
          "I am a spouse or single child under 21 (twenty one) years old who meets conditions 1 or 2.",
        value: null,
        additionalValues: []
      },
      {
        optionNumber: 4,
        text:
          "I have not had a substantial presence in the United States, i.e., in the last three years (including the present year) I have not been in the US for more than 183 days considering all the days of this year, one third of last year and one sixth of the previous year. I was present in the U.S. for ___ days in the current year, ___ days in the previous year, and ___ days in the year before that",
        value: null,
        additionalValues: [
          {
            order: 1,
            value: 10
          },
          {
            order: 2,
            value: 15
          },
          {
            order: 3,
            value: 148
          }
        ]
      },
      {
        optionNumber: 5,
        text:
          "I have given up US nationality or citizenship pursuant to the Certificate of Loss of Nationality, issued by the US Bureau of Consular Affairs, attached to this statement.",
        value: null,
        additionalValues: []
      },
      {
        optionNumber: 6,
        text:
          "Although I was born in the US, as per attached statement, I have renounced US citizenship (although I do not yet have the corresponding Certificate) or did not acquire such citizenship at birth.",
        value: null,
        additionalValues: []
      },
      {
        optionNumber: 7,
        text:
          "I do not have a green card visa and have not applied for a visa to the US.",
        value: null,
        additionalValues: []
      },
      {
        optionNumber: 8,
        text:
          "I have given up my green card visa, as per the Green Card Abandonment Certificate issued by a US consular authority in Brazil, attached to this declaration.",
        value: null,
        additionalValues: []
      }
    ]
  },
  investmentDetails: {
    estimatedEquity: {
      rangeId: "",
      exactValue: ""
    },
    liquidAssets: {
      stocks: {
        rangeId: ""
      },
      funds: {
        rangeId: ""
      },
      bonds: {
        rangeId: ""
      },
      savings: {
        rangeId: ""
      }
    },
    fixedAssets: {
      realProperty: {
        rangeId: ""
      },
      personalProperty: {
        rangeId: ""
      }
    },
    estimatedAnnualIncome: {
      bonusesAndCommissions: {
        rangeId: 1,
        exactValue: ""
      },
      salary: {
        rangeId: 5,
        exactValue: ""
      },
      others: {
        rangeId: 3,
        exactValue: ""
      }
    }
  },
  relatedPersonInformation: {
    isRelated: false,
    relationship: "",
    jobTitle: "",
    name: "",
    institution: ""
  },
  representationAuthorization: false
};

export default function checkFormDataHoles(propsForm) {
  sections.forEach(section => {
    return (
      (!propsForm[section] ||
        (Array.isArray(propsForm[section])
          ? propsForm[section].length === 0
          : Object.keys(propsForm[section]).length === 0)) &&
      (propsForm[section] = minimumAcceptableForm[section])
    );
  });

  return propsForm;
}
