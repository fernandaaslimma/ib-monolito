import checkForSectionFillCompletion from "./registrationDataFormValidator";
import {
  INVESTMENT_DETAILS,
  RELATED_PERSON_INFORMATION,
  POLITICALLY_EXPOSED_PERSON,
  FATCA_INFORMATION
} from "../../../utils/constants";

describe("registrationDataFormValidator util", () => {
  it("should make default validation truthy for Array", () => {
    expect(
      checkForSectionFillCompletion(
        [
          {
            country: "Estados Unidos",
            taxIdentificationNumber: "123456",
            other: {
              xpto: "xpto"
            }
          }
        ],
        "taxResidences"
      )
    ).toBeTruthy();
  });

  it("should make default validation falsy for an empty Array", () => {
    expect(checkForSectionFillCompletion([], "default")).toBeFalsy();
  });

  it("should make default validation truthy for Object", () => {
    expect(
      checkForSectionFillCompletion(
        {
          activity: "privateSectorEmployee",
          otherActivitySpecified: "teste",
          occupation: "developer",
          company: { name: "Banco BOCOM BBM", cnpj: "15114366000169" },
          admissionDate: "2015-07-19"
        },
        "professionalInformation"
      )
    ).toBeTruthy();
  });

  // it("should make default validation falsy for Array", () => {
  //   expect(
  //     checkForSectionFillCompletion(
  //       [
  //         {
  //           country: "",
  //           taxIdentificationNumber: "123456"
  //         }
  //       ],
  //       "taxResidences"
  //     )
  //   ).toBeFalsy();
  // });

  it("should make default validation falsy for Object", () => {
    expect(
      checkForSectionFillCompletion(
        {
          country: "",
          taxIdentificationNumber: "123456"
        },
        "default"
      )
    ).toBeFalsy();
  });

  it("should make default validation truthy for a person registration data with marital status married or stableunion", () => {
    expect(
      checkForSectionFillCompletion(
        {
          maritalStatus: "married"
        },
        "personalRegistrationDetails"
      )
    ).toBeTruthy();
  });

  it("should make default validation truthy for a person registration data with marital other than married or stableunion", () => {
    expect(
      checkForSectionFillCompletion(
        {
          maritalStatus: "single"
        },
        "personalRegistrationDetails"
      )
    ).toBeTruthy();
  });

  it("should make check field validation truthy", () => {
    expect(
      checkForSectionFillCompletion(
        [
          {
            value: true,
            additionalValue: "string",
            name: "other"
          },
          {
            value: true
          }
        ],
        "purposeWithTheInstitution"
      )
    ).toBeTruthy();
  });

  // it("should make check field validation with enabled aditional value truthy", () => {
  //   expect(
  //     checkForSectionFillCompletion(
  //       [
  //         {
  //           value: true,
  //           additionalValue: "string",
  //           name: "other"
  //         },
  //         {
  //           value: false
  //         }
  //       ],
  //       "purposeWithTheInstitution"
  //     )
  //   ).toBeTruthy();
  // });

  // it("should make check field validation with enabled aditional value falsy", () => {
  //   expect(
  //     checkForSectionFillCompletion(
  //       [
  //         {
  //           value: true,
  //           additionalValue: "",
  //           name: "other"
  //         },
  //         {
  //           value: false
  //         }
  //       ],
  //       "purposeWithTheInstitution"
  //     )
  //   ).toBeFalsy();
  // });

  it("should make document validation and return a validation object", () => {
    expect(
      checkForSectionFillCompletion(
        {
          taxResidences: [1, 2],
          addresses: []
        },
        "documents"
      )
    ).toEqual({ taxResidences: true, addresses: false });
  });

  it("should check professionalInfo privateSectorEmployee validation", () => {
    expect(
      checkForSectionFillCompletion(
        {
          activity: "privateSectorEmployee",
          otherActivitySpecified: "teste",
          occupation: "developer",
          company: { name: "Banco BOCOM BBM", cnpj: "15114366000169" },
          admissionDate: "2015-07-19"
        },
        "professionalInformation"
      )
    ).toBeTruthy();
  });

  it("should check professionalInfo retired validation", () => {
    expect(
      checkForSectionFillCompletion(
        {
          activity: "retired",
          otherActivitySpecified: "teste",
          occupation: "developer",
          company: { name: "Banco BOCOM BBM", cnpj: "15114366000169" },
          admissionDate: "2015-07-19"
        },
        "professionalInformation"
      )
    ).toBeTruthy();
  });

  it("should check professionalInfo owner validation", () => {
    expect(
      checkForSectionFillCompletion(
        {
          activity: "owner",
          otherActivitySpecified: "teste",
          occupation: "developer",
          company: { name: "Banco BOCOM BBM", cnpj: "15114366000169" },
          admissionDate: "2015-07-19"
        },
        "professionalInformation"
      )
    ).toBeTruthy();
  });

  it("should check professionalInfo selfEmployed validation", () => {
    expect(
      checkForSectionFillCompletion(
        {
          activity: "selfEmployed",
          otherActivitySpecified: "teste",
          occupation: "developer",
          company: { name: "Banco BOCOM BBM", cnpj: "15114366000169" },
          admissionDate: "2015-07-19"
        },
        "professionalInformation"
      )
    ).toBeTruthy();
  });

  it("should check professionalInfo fromHome validation", () => {
    expect(
      checkForSectionFillCompletion(
        {
          activity: "fromHome",
          otherActivitySpecified: "teste",
          occupation: "developer",
          company: { name: "Banco BOCOM BBM", cnpj: "15114366000169" },
          admissionDate: "2015-07-19"
        },
        "professionalInformation"
      )
    ).toBeTruthy();
  });

  it("should check fatca validation as US person", () => {
    expect(
      checkForSectionFillCompletion(
        {
          isUsPerson: true,
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
              value: true,
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
        FATCA_INFORMATION
      )
    ).toBeTruthy();
  });

  // it("should check fatca validation with no checkbox selected", () => {
  //   expect(
  //     checkForSectionFillCompletion(
  //       {
  //         isUsPerson: false,
  //         questionnaire: [
  //           {
  //             optionNumber: 1,
  //             text:
  //               "I am a student, teacher, or trainee at a US educational institution or a participant in a cultural or educational exchange program, and I have a US visa specifically related to these types of stay ('F', 'J', 'M', or 'Q').",
  //             value: false
  //           },
  //           {
  //             optionNumber: 2,
  //             text:
  //               " I work in the US as a foreign diplomat or hold positions at a consulate, embassy or international organization.",
  //             value: false
  //           },
  //           {
  //             optionNumber: 3,
  //             text:
  //               "I am a spouse or single child under 21 (twenty one) years old who meets conditions 1 or 2.",
  //             value: false
  //           },
  //           {
  //             optionNumber: 4,
  //             text:
  //               "I have not had a substantial presence in the United States, i.e., in the last three years (including the present year) I have not been in the US for more than 183 days considering all the days of this year, one third of last year and one sixth of the previous year. I was present in the U.S. for ___ days in the current year, ___ days in the previous year, and ___ days in the year before that",
  //             value: false,
  //             additionalValues: [
  //               { order: 1, value: 10 },
  //               { order: 2, value: 15 },
  //               { order: 3, value: 148 }
  //             ]
  //           },
  //           {
  //             optionNumber: 5,
  //             text:
  //               " I have given up US nationality or citizenship pursuant to the Certificate of Loss of Nationality, issued by the US Bureau of Consular Affairs, attached to this statement.",
  //             value: false
  //           },
  //           {
  //             optionNumber: 6,
  //             text:
  //               "Although I was born in the US, as per attached statement, I have renounced US citizenship (although I do not yet have the corresponding Certificate) or did not acquire such citizenship at birth.",
  //             value: false
  //           },
  //           {
  //             optionNumber: 7,
  //             text:
  //               " I do not have a green card visa and have not applied for a visa to the US.",
  //             value: false
  //           },
  //           {
  //             optionNumber: 8,
  //             text:
  //               "I have given up my green card visa, as per the Green Card Abandonment Certificate issued by a US consular authority in Brazil, attached to this declaration.",
  //             value: false
  //           }
  //         ]
  //       },
  //       FATCA_INFORMATION
  //     )
  //   ).toBeFalsy();
  // });

  it("should check fatca validation with input validation", () => {
    expect(
      checkForSectionFillCompletion(
        {
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
              value: false
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
              value: true,
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
              value: false
            },
            {
              optionNumber: 8,
              text:
                "I have given up my green card visa, as per the Green Card Abandonment Certificate issued by a US consular authority in Brazil, attached to this declaration.",
              value: false
            }
          ]
        },
        FATCA_INFORMATION
      )
    ).toBeTruthy();
  });

  it("should check investmentDetails validation", () => {
    expect(
      checkForSectionFillCompletion(
        {
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
              max: null,
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
        INVESTMENT_DETAILS
      )
    ).toBeTruthy();
  });

  it("should check relatedPersonInformation validation", () => {
    expect(
      checkForSectionFillCompletion(
        {
          isRelated: true,
          relationship: "bla",
          jobTitle: "diretor",
          name: "nome",
          institution: "petrobras"
        },
        RELATED_PERSON_INFORMATION
      )
    ).toBeTruthy();
  });

  it("should check politicallyExposedPerson validation", () => {
    expect(
      checkForSectionFillCompletion(
        {
          isPEP: true,
          relationship: "bla",
          name: "nome",
          jobTitle: "diretor",
          institution: "petrobras",
          reason: "eleição em 2019"
        },
        POLITICALLY_EXPOSED_PERSON
      )
    ).toBeTruthy();
  });
});
