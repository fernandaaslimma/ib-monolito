import React from "react";
import { shallow } from "enzyme";
import RelatedPerson from "./RelatedPerson";
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

const props = {
  onChange: jest.fn(),
  validateSection: jest.fn()
};

const e = {
  target: {
    name: "mock",
    value: "mock"
  }
};

const state = {
  formModel: {
    content: {
      relatedPersonInformation: {
        isRelated: true,
        relationship: "bla",
        jobTitle: "diretor",
        name: "nome",
        institution: "petrobras"
      }
    }
  },
  isFilled: { relatedPersonInformation: false },
  temporaryInvalidFields: {
    relatedPersonInformation: [
      "relationship",
      "jobTitle",
      "name",
      "institution"
    ]
  }
};

const falseState = {
  formModel: {
    content: {
      relatedPersonInformation: {
        isRelated: false
      }
    }
  },
  isFilled: {},
  temporaryInvalidFields: {
    relatedPersonInformation: [
      "relationship",
      "jobTitle",
      "name",
      "institution"
    ]
  }
};

describe("RelatedPerson component", () => {
  it("should match snapshot with props", () => {
    expect(
      shallow(
        <StateContext.Provider value={state}>
          <RelatedPerson {...props} />
        </StateContext.Provider>
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot without related person text", () => {
    expect(
      shallow(
        <StateContext.Provider value={falseState}>
          <RelatedPerson {...props} />
        </StateContext.Provider>
      )
    ).toMatchSnapshot();
  });

  it("should trigger change when edit a value", () => {
    render(
      <StateContext.Provider value={state}>
        <RelatedPerson {...props} />
      </StateContext.Provider>
    );

    const component = screen.getByTestId("InputNameRelatedPerson");
    fireEvent.change(component, e);

    const component2 = screen.getByTestId("InputJobTitleRelatedPerson");
    fireEvent.change(component2, e);

    const component3 = screen.getByTestId("InputInstitutionRelatedPerson");
    fireEvent.change(component3, e);

    const component4 = screen.getByTestId("InputRelationshipRelatedPerson");
    fireEvent.change(component4, e);

    expect(props.onChange).toHaveBeenCalledTimes(4);
  });

  it("should call onChange when change radio value", () => {
    render(
      <StateContext.Provider value={state}>
        <RelatedPerson {...props} />
      </StateContext.Provider>
    );

    const component = screen.getByTestId("RadioIAmNotARelatedPerson");
    fireEvent.click(component);

    expect(props.onChange).toHaveBeenCalled();
  });

  it("should validate section when toggle section container show/hide", () => {
    render(
      <StateContext.Provider value={state}>
        <RelatedPerson {...props} />
      </StateContext.Provider>
    );

    const component = screen.getByTestId("SectionedRelatedPersonInformation");
    fireEvent.click(component);

    expect(props.validateSection).toHaveBeenCalled();
  });

  it("should display AlertMessage", () => {
    state.temporaryInvalidFields = {
      relatedPersonInformation: [
        "relationship",
        "jobTitle",
        "name",
        "institution"
      ]
    };
    expect(
      shallow(
        <StateContext.Provider value={state}>
          <RelatedPerson {...props} />
        </StateContext.Provider>
      )
    ).toMatchSnapshot();
  });
});
