import React from "react";
import { shallow } from "enzyme";
import PersonalDetails from "./PersonalDetails";
import { StateContext } from "../RegistrationDataForm";
import { configure, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

configure({ testIdAttribute: "data-test" });

jest.mock("../../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false,
  isPtBR: () => false
}));

const e = {
  target: {
    name: "mock",
    value: "married"
  }
};

const props = {
  onChange: jest.fn(),
  validateSection: jest.fn()
};

const state = {
  isFilled: {
    personalRegistrationDetails: true
  },
  formModel: {
    content: {
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
        maritalStatus: "married",
        spouse: {
          spouseName: "Paula dos Santos",
          spouseCpf: "12345678910"
        }
      },
      personalReferences: [
        {
          name: "Paula Fernandez de Souza",
          kinship: "Cousin",
          telephone: {
            ddd: 11,
            number: "29820911"
          }
        },
        {
          name: "Paula Fernandez de Souza 2",
          kinship: "Cousin",
          telephone: {
            ddd: 11,
            number: "29825500"
          }
        }
      ]
    }
  },
  temporaryInvalidFields: {}
};

describe("PersonalDetails component", () => {
  it("should match snapshot with props", () => {
    expect(
      shallow(
        <StateContext.Provider value={state}>
          <PersonalDetails {...props} />
        </StateContext.Provider>
      )
    ).toMatchSnapshot();
  });

  it.skip("should trigger model change and edit spouse name", () => {
    render(
      <StateContext.Provider value={state}>
        <PersonalDetails {...props} />
      </StateContext.Provider>
    );

    const component = screen.getByTestId("SpouseName");
    fireEvent.change(component, "Paula dos Santos");

    expect(props.onChange).toHaveBeenCalled();
  });

  it.skip("should validate inputed spouse cpf", () => {
    render(
      <StateContext.Provider value={state}>
        <PersonalDetails {...props} />
      </StateContext.Provider>
    );

    const component = screen.getByTestId("SpouseCPF");
    fireEvent.click(component);

    expect(props.validateSection).toHaveBeenCalled();
  });

  it("should trigger model change and edit spouse cpf", () => {
    render(
      <StateContext.Provider value={state}>
        <PersonalDetails {...props} />
      </StateContext.Provider>
    );

    const inputs = screen.getAllByRole("textbox");
    const input = inputs[1];
    fireEvent.change(input, e);

    expect(props.onChange).toHaveBeenCalled();
  });

  it("should validate section when toggle section container show/hide", () => {
    render(
      <StateContext.Provider value={state}>
        <PersonalDetails {...props} />
      </StateContext.Provider>
    );

    const component = screen.getByTestId("SectionedPersonalDetails");
    fireEvent.click(component);

    expect(props.validateSection).toHaveBeenCalled();
  });

  it("should trigger model change and edit marital status", () => {
    render(
      <StateContext.Provider value={state}>
        <PersonalDetails {...props} />
      </StateContext.Provider>
    );

    const component = screen.getByTestId("DropdownMaritalStatus");
    fireEvent.change(component, { value: "mock" });

    expect(props.onChange).toHaveBeenCalled();
  });

  it("should render AlertMessage", () => {
    state.temporaryInvalidFields = {
      personalRegistrationDetails: {
        spouse: ["spouseName", "spouseCpf"]
      }
    };

    expect(
      render(
        <StateContext.Provider value={state}>
          <PersonalDetails {...props} />
        </StateContext.Provider>
      )
    ).toMatchSnapshot();
  });
});
