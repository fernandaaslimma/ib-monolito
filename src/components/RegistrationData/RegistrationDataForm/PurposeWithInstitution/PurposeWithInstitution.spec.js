import React from "react";
import { shallow } from "enzyme";
import PurposeWithInstitution from "./PurposeWithInstitution";
import Checkbox from "../../../common/Checkbox";
import SectionedFormContent from "../../../common/SectionedFormContent";
import { Input } from "react-bocombbm-components";
import { StateContext } from "../RegistrationDataForm";

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

const state = {
  formModel: {
    content: {
      purposeWithTheInstitution: [
        {
          name: "xpto",
          text: "xpto",
          value: null
        },
        {
          name: "invest",
          text: "Invest",
          value: true
        },
        {
          name: "acquire_finance",
          text: "Acquire Finance",
          value: true
        },
        {
          text: "Other",
          name: "other",
          value: true,
          additionalValue: "string"
        }
      ]
    }
  },
  isFilled: {
    purposeWithTheInstitution: true
  },
  temporaryInvalidFields: {
    purposeWithTheInstitution: { name: ["name"], other: ["other"] }
  }
};

const aditionalState = {
  ...state,
  formModel: {
    ...state.formModel,
    content: {
      ...state.formModel.content,
      purposeWithTheInstitution: [
        {
          name: "acquire_finance",
          text: "Acquire Finance",
          value: true
        },
        {
          text: "Other",
          name: "other",
          value: true,
          aditionalValue: "string"
        }
      ]
    }
  }
};

describe("PurposeWithInstitution component", () => {
  it("should match snapshot with props", () => {
    expect(
      shallow(
        <StateContext.Provider value={state}>
          <PurposeWithInstitution {...props} />
        </StateContext.Provider>
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot with legacy aditional field props", () => {
    expect(
      shallow(
        <StateContext.Provider value={aditionalState}>
          <PurposeWithInstitution {...props} />
        </StateContext.Provider>
      )
    ).toMatchSnapshot();
  });

  it.skip("should change the current purposes", () => {
    const shallowWrapper = shallow(
      <StateContext.Provider value={state}>
        <PurposeWithInstitution {...props} />
      </StateContext.Provider>
    );

    shallowWrapper
      .find(Checkbox)
      .at(1)
      .prop("onChange")({ target: { name: "xpto", checked: true } });
    expect(props.onChange).toHaveBeenCalled();
  });

  it.skip("should input other purpose", () => {
    const shallowWrapper = shallow(
      <StateContext.Provider value={state}>
        <PurposeWithInstitution {...props} />
      </StateContext.Provider>
    );

    shallowWrapper.find(Input).prop("onChange")({ target: { value: "xpto" } });
    expect(props.onChange).toHaveBeenCalled();
  });

  it.skip("should validate section when toggle section container show/hide", () => {
    const wrapper = shallow(
      <StateContext.Provider value={state}>
        <PurposeWithInstitution {...props} />
      </StateContext.Provider>
    );
    const fileInput = wrapper.find(SectionedFormContent);

    fileInput.prop("callback")();
    expect(props.validateSection).toHaveBeenCalled();
  });

  it("should render AlertMessage", () => {
    state.temporaryInvalidFields = {
      purposeWithTheInstitution: {
        purpose: ["MUST_FILL_ONE_VALUE"]
      }
    };
    const shallowWrapper = shallow(
      <StateContext.Provider value={state}>
        <PurposeWithInstitution {...props} />
      </StateContext.Provider>
    );
    expect(shallowWrapper).toMatchSnapshot();
  });
});
