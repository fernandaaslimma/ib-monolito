import React from "react";
import { shallow } from "enzyme";
import RepresentationAuthorization from "./RepresentationAuthorization";
import Radio from "../../../common/Radio";
import { IncrementalInput } from "react-bocombbm-components";
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
      representationAuthorization: true,
      attorneysInFact: [
        {
          name: "Procurador 1",
          cpf: "11122233344",
          startDate: 1593117908000,
          endDate: 1593117908000
        },
        {
          name: "Procurador 2",
          cpf: "55566677788",
          startDate: 1593117908000,
          endDate: null
        }
      ]
    }
  },
  isFilled: {
    attorneysInFact: false
  },
  temporaryInvalidFields: {}
};

const falseState = {
  formModel: {
    content: {
      representationAuthorization: false,
      attorneysInFact: []
    }
  }
};

describe("RepresentationAuthorization component", () => {
  it("should match snapshot with props", () => {
    expect(
      shallow(
        <StateContext.Provider value={state}>
          <RepresentationAuthorization {...props} />
        </StateContext.Provider>
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot with false representation", () => {
    React.useContext = jest.fn(() => falseState);
    expect(
      shallow(
        <StateContext.Provider value={state}>
          <RepresentationAuthorization {...props} />
        </StateContext.Provider>
      )
    ).toMatchSnapshot();
  });

  it.skip("should call onChange when change radio value", () => {
    const wrapper = shallow(
      <StateContext.Provider value={state}>
        <RepresentationAuthorization {...props} />
      </StateContext.Provider>
    );
    wrapper
      .find(Radio)
      .at(1)
      .prop("onChange")({ target: { value: "false" } });
    expect(props.onChange).toHaveBeenCalledTimes(2);
  });

  it.skip("should call onChange when change radio value to true", () => {
    const wrapper = shallow(
      <StateContext.Provider value={state}>
        <RepresentationAuthorization {...props} />
      </StateContext.Provider>
    );
    wrapper
      .find(Radio)
      .at(0)
      .prop("onChange")({ target: { value: "true" } });
    expect(props.onChange).toHaveBeenCalled();
  });

  it.skip("should validate an incremental field", () => {
    const wrapper = shallow(
      <StateContext.Provider value={state}>
        <RepresentationAuthorization {...props} />
      </StateContext.Provider>
    );
    expect(
      wrapper
        .find(IncrementalInput)
        .prop("inputs")[0]
        .valid("name", 0)
    ).toBeTruthy();
  });

  it.skip("should change an incremental field", () => {
    const wrapper = shallow(
      <StateContext.Provider value={state}>
        <RepresentationAuthorization {...props} />
      </StateContext.Provider>
    );
    wrapper.find(IncrementalInput).prop("onChange")([]);
    expect(props.onChange).toHaveBeenCalledWith([], "attorneysInFact");
  });

  it.skip("should validate section when toggle section container show/hide", () => {
    const wrapper = shallow(
      <StateContext.Provider value={state}>
        <RepresentationAuthorization {...props} />
      </StateContext.Provider>
    );
    const fileInput = wrapper.find(SectionedFormContent);

    fileInput.prop("callback")();
    expect(props.validateSection).toHaveBeenCalled();
  });

  it("should display AlertMessage", () => {
    state.temporaryInvalidFields = {
      attorneysInFact: ["name", "cpf", "startDate", "endDate"]
    };
    const wrapper = shallow(
      <StateContext.Provider value={state}>
        <RepresentationAuthorization {...props} />
      </StateContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
