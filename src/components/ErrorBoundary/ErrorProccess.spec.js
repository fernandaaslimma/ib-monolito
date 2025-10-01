import React from "react";
import { mount } from "enzyme";

import ErrorProccess from "./ErrorProccess";
import Button from "../../components/common/Button";

jest.mock("../../utils/createLogError");
jest.mock("../../utils/redirect");
jest.mock("../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => true
}));

const redirectMock = require("../../utils/redirect").redirect;

const props = {
  errorStatus: { showErrorToUser: false },
  closeModal: jest.fn(),
  goHome: redirectMock
};

describe("ErrorProccess component", () => {
  const runAllPromises = () => new Promise(setImmediate);
  it("ErrorProccess default error", () => {
    const wrapper = mount(<ErrorProccess {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("Should invoke redirect when click redirect button", () => {
    const wrapper = mount(<ErrorProccess {...props} />);

    wrapper
      .find(Button)
      .at(0)
      .simulate("click");

    expect(redirectMock).toHaveBeenCalled();
  });

  it("ErrorProccess when has children with Offline error", async () => {
    const newProps = {
      error: "Fake error",
      ...props
    };

    newProps.errorStatus = { typeError: "Offline" };
    const wrapper = mount(<ErrorProccess {...newProps} />);

    await runAllPromises();
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  it("Qualified error when API returns Approvement Flow Not Found error", async () => {
    const apiResponse = {
      json: () =>
        Promise.resolve({
          statusCode: 404,
          messages: ["Approvement Flow Not Found."]
        })
    };
    const newProps = {
      ...props,
      errorStatus: apiResponse
    };

    const wrapper = mount(<ErrorProccess {...newProps} />);

    await runAllPromises();
    wrapper.update();

    expect(wrapper).toMatchSnapshot();
    wrapper
      .find(Button)
      .at(0)
      .simulate("click");
    expect(redirectMock).toHaveBeenCalled();
  });
});
