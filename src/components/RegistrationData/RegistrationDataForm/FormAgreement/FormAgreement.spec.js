import React from "react";
import { shallow } from "enzyme";
import FormAgreement from "./FormAgreement";
import Radio from "../../../common/Radio";
import { Button } from "react-bocombbm-components";

jest.mock("../../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false,
  isPtBR: () => false
}));

const props = {
  agree: jest.fn(),
  onAgree: jest.fn(),
  onSubmit: jest.fn(),
  loading: false
};

describe("PersonalDetails component", () => {
  it("should match snapshot with props", () => {
    expect(shallow(<FormAgreement {...props} />)).toMatchSnapshot();
  });

  it("should change agreement to true", () => {
    const wrapper = shallow(<FormAgreement {...props} />);
    wrapper
      .find(Radio)
      .at(0)
      .prop("onChange")();

    expect(props.onAgree).toHaveBeenCalledWith(true);
  });

  it("should change agreement to false", () => {
    const wrapper = shallow(<FormAgreement {...props} />);
    wrapper
      .find(Radio)
      .at(1)
      .prop("onChange")();

    expect(props.onAgree).toHaveBeenCalledWith(false);
  });

  it("should submit", () => {
    const wrapper = shallow(<FormAgreement {...props} />);
    wrapper.find(Button).prop("onClick")();

    expect(props.onSubmit).toHaveBeenCalled();
  });
});
