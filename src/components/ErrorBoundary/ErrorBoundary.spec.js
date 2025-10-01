import React from "react";
import { mount } from "enzyme";

import ErrorBoundary from "./ErrorBoundary";
import Button from "../../components/common/Button";

jest.mock("../../utils/createLogError");

jest.mock("../../utils/redirect");
jest.mock("../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => true
}));

const props = {
  errorStatus: { showErrorToUser: false },
  closeModal: jest.fn()
};

const NormalComponent = () => {
  return (
    <div>
      <p> NormalComponent </p>
    </div>
  );
};

const redirectMock = require("../../utils/redirect").redirect;

const createLogErrorMock = require("../../utils/createLogError").default;

describe("ErrorBoundary component", () => {
  const runAllPromises = () => new Promise(setImmediate);
  it("ErrorBoundary child component without error", () => {
    const wrapper = mount(
      <ErrorBoundary {...props}>
        <NormalComponent />
      </ErrorBoundary>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("ErrorBoundary when has children component error", () => {
    const wrapper = mount(
      <ErrorBoundary {...props}>
        <NormalComponent />
      </ErrorBoundary>
    );

    const error = new Error("Error de teste de unidade");
    wrapper.find(ErrorBoundary).simulateError(error);
    expect(wrapper).toMatchSnapshot();
  });

  it("Should invoke redirect when click redirect button", () => {
    const wrapper = mount(
      <ErrorBoundary {...props}>
        <NormalComponent />
      </ErrorBoundary>
    );

    const error = new Error("error");
    wrapper.find(ErrorBoundary).simulateError(error);
    wrapper
      .find(Button)
      .at(0)
      .simulate("click");

    expect(redirectMock).toHaveBeenCalled();
  });

  it("Should fire createLog", () => {
    const wrapper = mount(
      <ErrorBoundary {...props}>
        <NormalComponent />
      </ErrorBoundary>
    );

    wrapper.setProps({
      errorStatus: "error"
    });
    wrapper.update();

    expect(createLogErrorMock).toHaveBeenCalledWith("error");
  });

  it("ErrorBoundary when should show error to user from backend", () => {
    const newProps = {
      ...props,
      errorStatus: {
        typeError: "Offline",
        showErrorToUser: true,
        errors: [
          {
            code: "12",
            title: "Daily limit",
            message:
              "It was not possible to carry out the redemption.\n\n For your safety, contact your banker to carry out the transaction."
          }
        ]
      },
      error: "mock"
    };

    const wrapper = mount(
      <ErrorBoundary {...newProps}>
        <NormalComponent />
      </ErrorBoundary>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("ErrorBoundary when has children with Offline error", () => {
    const newProps = {
      ...props,
      errorStatus: { typeError: "Offline" }
    };

    const wrapper = mount(
      <ErrorBoundary {...newProps}>
        <NormalComponent />
      </ErrorBoundary>
    );

    const error = { errorStatus: { typeError: "Offline" } };
    wrapper.find(ErrorBoundary).simulateError(error);
    expect(wrapper).toMatchSnapshot();
    props.errorStatus = null;
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
      ...props
    };

    const wrapper = mount(
      <ErrorBoundary {...newProps}>
        <NormalComponent />
      </ErrorBoundary>
    );

    const error = { errorStatus: apiResponse };
    wrapper.find(ErrorBoundary).simulateError(error);

    await runAllPromises();
    wrapper.update();

    expect(wrapper).toMatchSnapshot();
    props.errorStatus = null;
  });
});
