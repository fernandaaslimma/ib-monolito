import React from "react";
import { shallow } from "enzyme";
import PoliticallyExposedPerson from "./PoliticallyExposedPerson";
import Radio from "../../../common/Radio";
import { Input } from "react-bocombbm-components";
import SectionedFormContent from "../../../common/SectionedFormContent";
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
      politicallyExposedPerson: {
        isPep: true,
        relationship: "bla",
        name: "nome",
        jobTitle: "diretor",
        institution: "petrobras",
        reason: "xpto xpto"
      }
    }
  },
  isFilled: {
    politicallyExposedPerson: true
  },
  temporaryInvalidFields: {}
};

const falseState = {
  formModel: {
    content: {
      politicallyExposedPerson: {
        isPep: false
      }
    }
  },
  isFilled: {},
  temporaryInvalidFields: {}
};

const e = {
  target: {
    name: "mock",
    value: "mock"
  }
};

describe("PoliticallyExposedPerson component", () => {
  it("should match snapshot with props", () => {
    expect(
      shallow(
        <StateContext.Provider value={state}>
          <PoliticallyExposedPerson {...props} />
        </StateContext.Provider>
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot when not PEP", () => {
    React.useContext = jest.fn(() => falseState);
    expect(
      shallow(
        <StateContext.Provider value={state}>
          <PoliticallyExposedPerson {...props} />
        </StateContext.Provider>
      )
    ).toMatchSnapshot();
  });

  it.skip("should trigger change when edit a value", () => {
    const shallowWrapper = shallow(
      <StateContext.Provider value={state}>
        <PoliticallyExposedPerson {...props} />
      </StateContext.Provider>
    );

    shallowWrapper.find(Input).forEach(item => {
      item.prop("onChange")(e);
    });

    expect(props.onChange).toHaveBeenCalledTimes(5);
  });

  it.skip("should call onChange when change radio value", () => {
    const wrapper = shallow(
      <StateContext.Provider value={state}>
        <PoliticallyExposedPerson {...props} />
      </StateContext.Provider>
    );
    wrapper
      .find(Radio)
      .at(1)
      .prop("onChange")({ target: { value: "false" } });
    expect(props.onChange).toHaveBeenCalled();
  });

  it.skip("should validate section when toggle section container show/hide", () => {
    const wrapper = shallow(
      <StateContext.Provider value={state}>
        <PoliticallyExposedPerson {...props} />
      </StateContext.Provider>
    );
    const fileInput = wrapper.find(SectionedFormContent);

    fileInput.prop("callback")();
    expect(props.validateSection).toHaveBeenCalled();
  });

  it("should validate section when toggle section container show/hide", () => {
    state.temporaryInvalidFields = {
      politicallyExposedPerson: [
        "relationship",
        "name",
        "jobTitle",
        "institution",
        "reason"
      ]
    };
    const wrapper = shallow(
      <StateContext.Provider value={state}>
        <PoliticallyExposedPerson {...props} />
      </StateContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
