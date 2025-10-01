import React from "react";
import { shallow } from "enzyme";
import deepClone from "../../../../utils/deepClone";
import ForeignAccountTaxCA from "./ForeignAccountTaxCA";
import { StateContext } from "../RegistrationDataForm";
import { configure, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

configure({ testIdAttribute: "data-test" });

jest.mock("../../../../utils/fetchHandler");
jest.mock("../../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false,
  isPtBR: () => false
}));
jest.mock("../../../../utils/attachMultipleDocuments", () =>
  jest.fn(() => Promise.resolve(["mock"]))
);

const fatcaInformation = {
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
        {
          order: 1,
          value: 10
        },
        {
          order: 2,
          value: 0
        },
        {
          order: 3,
          value: 20
        }
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
        "I have given up my green card visa, as per the Green Card Abandonment Certificate issued by a US consular authority inBrazil, attached to this declaration.",
      value: true
    }
  ]
};

const props = {
  originalData: deepClone(fatcaInformation),
  onChange: jest.fn(),
  validateSection: jest.fn()
};

const state = {
  formModel: {
    content: {
      documents: {
        fatcaInformation: ["mock.pdf", "anotherPDF.pdf"]
      },
      fatcaInformation: fatcaInformation
    }
  },
  isFilled: {
    fatcaInformation: true,
    documents: {
      fatcaInformation: true
    }
  },
  temporaryInvalidFields: {}
};

const newState = deepClone(state);
const otherProps = deepClone(props);

describe("Foreign Account Tax CA component", () => {
  it("should match snapshot with props", () => {
    expect(
      shallow(
        <StateContext.Provider value={state}>
          <ForeignAccountTaxCA {...props} />
        </StateContext.Provider>
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot with model equality", () => {
    otherProps.originalData = fatcaInformation;
    expect(
      shallow(
        <StateContext.Provider value={state}>
          <ForeignAccountTaxCA {...props} />
        </StateContext.Provider>
      )
    ).toMatchSnapshot();
  });

  it("Should not render questionnaire", () => {
    newState.formModel.content.fatcaInformation = {
      isUsPerson: true,
      questionnaire: []
    };
    React.useContext = jest.fn(() => newState);
    expect(
      shallow(
        <StateContext.Provider value={state}>
          <ForeignAccountTaxCA {...props} />
        </StateContext.Provider>
      )
    ).toMatchSnapshot();
  });

  // teste temporário, deve ser alterado quando o validador for finalizado
  it("Should render AlertMessage component", () => {
    props.invalidFields = {
      documents: { fatcaInformation: false },
      fatcaInformation: ["ALL_CANT_BE_ZERO"]
    };

    const wrapper = shallow(
      <StateContext.Provider value={state}>
        <ForeignAccountTaxCA {...props} />
      </StateContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("Should change radio input", () => {
    render(
      <StateContext.Provider value={state}>
        <ForeignAccountTaxCA {...props} />
      </StateContext.Provider>
    );

    const component = screen.getByTestId("RadioIAmUSAResident");
    fireEvent.click(component);

    expect(props.onChange).toHaveBeenCalled();
  });

  it("Should render inputs and message of error", () => {
    newState.formModel.fatcaInformation = {
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
          value: true,
          additionalValues: [
            {
              order: 1,
              value: 0
            },
            {
              order: 2,
              value: 0
            },
            {
              order: 3,
              value: 0
            }
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
            "I have given up my green card visa, as per the Green Card Abandonment Certificate issued by a US consular authority inBrazil, attached to this declaration.",
          value: true
        }
      ]
    };
    React.useContext = jest.fn(() => newState);
    expect(
      shallow(
        <StateContext.Provider value={state}>
          <ForeignAccountTaxCA {...props} />
        </StateContext.Provider>
      )
    ).toMatchSnapshot();
  });

  it("Should change radio input", () => {
    render(
      <StateContext.Provider value={state}>
        <ForeignAccountTaxCA {...props} />
      </StateContext.Provider>
    );

    const component = screen.getByTestId("RadioIAmUSAResident");
    fireEvent.click(component);

    expect(props.onChange).toHaveBeenCalled();
  });

  it("Should render inputs and message of error", () => {
    newState.formModel.content.fatcaInformation = {
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
          value: true,
          additionalValues: []
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
            "I have given up my green card visa, as per the Green Card Abandonment Certificate issued by a US consular authority inBrazil, attached to this declaration.",
          value: true
        }
      ]
    };
    expect(
      shallow(
        <StateContext.Provider value={newState}>
          <ForeignAccountTaxCA {...props} />
        </StateContext.Provider>
      )
    ).toMatchSnapshot();
  });

  it("Should change input data", () => {
    newState.formModel.content.fatcaInformation = {
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
          value: true,
          additionalValues: [
            {
              order: 1,
              value: 10
            },
            {
              order: 2,
              value: 0
            },
            {
              order: 3,
              value: 20
            }
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
            "I have given up my green card visa, as per the Green Card Abandonment Certificate issued by a US consular authority inBrazil, attached to this declaration.",
          value: true
        }
      ]
    };
    render(
      <StateContext.Provider value={newState}>
        <ForeignAccountTaxCA {...props} />
      </StateContext.Provider>
    );

    const component = screen.getByTestId("InputDaysLastYear");
    fireEvent.click(component);

    expect(props.onChange).toHaveBeenCalled();
  });

  it("Should call checkbox change function", () => {
    delete state.formModel.content.documents;
    const sectionState = {
      ...state,
      formModel: {
        content: {
          documents: {
            fatcaInformation: ["mock.pdf"]
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
                value: true,
                additionalValues: [
                  {
                    order: 1,
                    value: 10
                  },
                  {
                    order: 2,
                    value: 0
                  },
                  {
                    order: 3,
                    value: 20
                  }
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
                  "I have given up my green card visa, as per the Green Card Abandonment Certificate issued by a US consular authority inBrazil, attached to this declaration.",
                value: false
              }
            ]
          }
        }
      }
    };
    render(
      <StateContext.Provider value={sectionState}>
        <ForeignAccountTaxCA {...props} />
      </StateContext.Provider>
    );

    const component = screen.getByTestId("CheckboxForeignAccountTaxCA_0");
    fireEvent.click(component);

    expect(props.onChange).toHaveBeenCalled();
  });

  it("Should call changeFileAttachments function with documents", () => {
    newState.formModel.content.fatcaInformation = {
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
          value: true,
          additionalValues: [
            {
              order: 1,
              value: 10
            },
            {
              order: 2,
              value: 0
            },
            {
              order: 3,
              value: 20
            }
          ]
        },
        {
          optionNumber: 5,
          text:
            " I have given up US nationality or citizenship pursuant to the Certificate of Loss of Nationality, issued by the US Bureau of Consular Affairs, attached to this statement.",
          value: true
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
            "I have given up my green card visa, as per the Green Card Abandonment Certificate issued by a US consular authority inBrazil, attached to this declaration.",
          value: true
        }
      ]
    };

    render(
      <StateContext.Provider value={newState}>
        <ForeignAccountTaxCA {...props} />
      </StateContext.Provider>
    );

    const component = screen.getByTestId("DragAndDropFileInput");
    fireEvent.click(component);

    expect(props.onChange).toHaveBeenCalled();
  });

  it("Should call changeFileAttachments function without documents", () => {
    newState.formModel.content.fatcaInformation = {
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
          value: true,
          additionalValues: [
            {
              order: 1,
              value: 10
            },
            {
              order: 2,
              value: 0
            },
            {
              order: 3,
              value: 20
            }
          ]
        },
        {
          optionNumber: 5,
          text:
            " I have given up US nationality or citizenship pursuant to the Certificate of Loss of Nationality, issued by the US Bureau of Consular Affairs, attached to this statement.",
          value: true
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
            "I have given up my green card visa, as per the Green Card Abandonment Certificate issued by a US consular authority inBrazil, attached to this declaration.",
          value: true
        }
      ]
    };
    newState.formModel.content.documents.fatcaInformation = [];
    render(
      <StateContext.Provider value={newState}>
        <ForeignAccountTaxCA {...props} />
      </StateContext.Provider>
    );

    const component = screen.getByTestId("DragAndDropFileInput");
    fireEvent.click(component);

    expect(props.onChange).toHaveBeenCalled();
  });

  it("should validate section when toggle section container show/hide", () => {
    const sectionState = {
      ...state,
      formModel: {
        ...state.formModel,
        content: {
          ...state.formModel.content,
          documents: {
            fatcaInformation: ["mock.pdf", "anotherPDF.pdf"]
          }
        }
      }
    };

    render(
      <StateContext.Provider value={sectionState}>
        <ForeignAccountTaxCA {...props} />
      </StateContext.Provider>
    );

    const component = screen.getByTestId("SectionedForeignAccountTaxCA");
    fireEvent.click(component);

    expect(props.validateSection).toHaveBeenCalled();
  });

  it("should display AlertMessage", () => {
    state.temporaryInvalidFields = {
      documents: { fatcaInformation: false },
      fatcaInformation: ["ALL_CANT_BE_ZERO"]
    };
    state.formModel.content.fatcaInformation.questionnaire = [
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
          {
            order: 1,
            value: 10
          },
          {
            order: 2,
            value: 0
          },
          {
            order: 3,
            value: 20
          }
        ]
      },
      {
        optionNumber: 5,
        text:
          " I have given up US nationality or citizenship pursuant to the Certificate of Loss of Nationality, issued by the US Bureau of Consular Affairs, attached to this statement.",
        value: true
      },
      {
        optionNumber: 6,
        text:
          "Although I was born in the US, as per attached statement, I have renounced US citizenship (although I do not yet have the corresponding Certificate) or did not acquire such citizenship at birth.",
        value: true
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
          "I have given up my green card visa, as per the Green Card Abandonment Certificate issued by a US consular authority inBrazil, attached to this declaration.",
        value: true
      }
    ];
    state.formModel.content.documents = {
      fatcaInformation: ["mock.pdf", "anotherPDF.pdf"]
    };
    const wrapper = shallow(
      <StateContext.Provider value={state}>
        <ForeignAccountTaxCA {...props} />
      </StateContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
