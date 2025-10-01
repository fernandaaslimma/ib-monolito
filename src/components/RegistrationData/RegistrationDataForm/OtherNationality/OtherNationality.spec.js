import React from "react";
import { shallow } from "enzyme";
import OtherNationality from "./OtherNationality";
import deepClone from "../../../../utils/deepClone";
import {
  IncrementalInput,
  DragAndDropFileInput
} from "react-bocombbm-components";
import Radio from "../../../common/Radio";
import SectionedFormContent from "../../../common/SectionedFormContent";
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

window.FileReader = jest.fn(() => ({
  readAsDataURL: jest.fn(),
  result: "BASE64",
  onload: jest.fn(() => Promise.resolve())
}));

const taxResidences = [
  {
    country: "Estados Unidos",
    taxIdentificationNumber: "123456"
  },
  {
    country: "Portugal",
    taxIdentificationNumber: "45678"
  }
];

const taxResidencesSameCountry = [
  {
    country: "Estados Unidos",
    taxIdentificationNumber: "123456"
  },
  {
    country: "Estados Unidos",
    taxIdentificationNumber: "45678"
  }
];

const props = {
  originalData: [deepClone(taxResidences)[1]],
  onChange: jest.fn(),
  validateSection: jest.fn()
};

const state = {
  formModel: {
    content: {
      taxResidences: taxResidences,
      documents: {
        taxResidences: [deepClone(taxResidences)[1]]
      }
    }
  },
  isFilled: {
    taxResidences: true,
    documents: {
      taxResidences: true
    }
  },
  temporaryInvalidFields: {}
};

describe("OtherNationality component", () => {
  it("should match snapshot with props", () => {
    const wrapper = shallow(
      <StateContext.Provider value={state}>
        <OtherNationality {...props} />
      </StateContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot with model equality", () => {
    const newProps = deepClone(props);
    newProps.originalData = taxResidences;
    expect(
      shallow(
        <StateContext.Provider value={state}>
          <OtherNationality {...newProps} />
        </StateContext.Provider>
      )
    ).toMatchSnapshot();
  });

  it("should change by incremental", () => {
    render(
      <StateContext.Provider value={state}>
        <OtherNationality {...props} />
      </StateContext.Provider>
    );

    const components = screen.getAllByText("ATUCAD_ADD_NATIONALITY");
    const component = components[0];
    fireEvent.click(component);

    expect(props.onChange).toHaveBeenCalled();
  });

  it.skip("should change by incremental with same country", () => {
    render(
      <StateContext.Provider value={state}>
        <OtherNationality {...props} />
      </StateContext.Provider>
    );
    const component = screen.getByTestId("incrementalInput");
    fireEvent.change(component, taxResidencesSameCountry);

    expect(props.onChange).toHaveBeenCalledWith(taxResidences, "taxResidences");
  });

  it.skip("should validate an incremental field", () => {
    const wrapper = shallow(
      <StateContext.Provider value={state}>
        <OtherNationality {...props} />
      </StateContext.Provider>
    );
    expect(
      wrapper
        .find(IncrementalInput)
        .prop("inputs")[0]
        .valid("country", 0)
    ).toBeTruthy();
  });

  it.skip("should change to have other Nationality", () => {
    const wrapper = shallow(
      <StateContext.Provider value={state}>
        <OtherNationality {...props} />
      </StateContext.Provider>
    );
    const radio = wrapper.find(Radio).at(0);

    radio.prop("onChange")({ target: { value: "true" } });
    expect(radio.prop("checked")).toBeTruthy();
  });

  it.skip("should change to not have other Nationality", () => {
    const wrapper = shallow(
      <StateContext.Provider value={state}>
        <OtherNationality {...props} />
      </StateContext.Provider>
    );
    const radio = wrapper.find(Radio).at(1);

    radio.prop("onChange")({ target: { value: "false" } });
    expect(radio.prop("checked")).toBeFalsy();
  });

  it.skip("should change to not have other Nationality but have Brazil", () => {
    const newState = deepClone(state);
    newState.formModel.content.taxResidences = [
      {
        country: "Brazil",
        taxIdentificationNumber: "45678"
      }
    ];
    const wrapper = shallow(
      <StateContext.Provider value={newState}>
        <OtherNationality {...props} />
      </StateContext.Provider>
    );
    const radio = wrapper.find(Radio).at(1);

    radio.prop("onChange")({ target: { value: "false" } });
    expect(radio.prop("checked")).toBeTruthy();
  });

  it.skip("should attach files", () => {
    const wrapper = shallow(
      <StateContext.Provider value={state}>
        <OtherNationality {...props} />
      </StateContext.Provider>
    );
    const fileInput = wrapper.find(DragAndDropFileInput);

    fileInput.prop("handleInputFiles")([{ name: "xpto" }]);
  });

  it.skip("should attach files and not have previous attached", () => {
    delete state.formModel.content.documents.taxResidences;
    const wrapper = shallow(
      <StateContext.Provider value={state}>
        <OtherNationality {...props} />
      </StateContext.Provider>
    );
    const fileInput = wrapper.find(DragAndDropFileInput);

    fileInput.prop("handleInputFiles")([{ name: "xpto" }]);
  });

  it.skip("should validate section when toggle section container show/hide", () => {
    const wrapper = shallow(
      <StateContext.Provider value={state}>
        <OtherNationality {...props} />
      </StateContext.Provider>
    );
    const fileInput = wrapper.find(SectionedFormContent);

    fileInput.prop("callback")();
    expect(props.validateSection).toHaveBeenCalled();
  });

  it("should display AlertMessage", () => {
    state.temporaryInvalidFields = {
      documents: { taxResidences: false },
      taxResidences: ["taxIdentificationNumber"]
    };
    const wrapper = shallow(
      <StateContext.Provider value={state}>
        <OtherNationality {...props} />
      </StateContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
