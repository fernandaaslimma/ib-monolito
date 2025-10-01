import React from "react";
import { shallow } from "enzyme";

import { ErrorMessage } from "./styles";
import LoginForm, { isValid, isDisabled } from "./LoginForm";
import Input from "../../common/Input";
import VirtualKeyboard from "../../common/VirtualKeyboard";

jest.mock("../../../utils/i18n", () => ({
  translate: id => id,
  withI18n: component => component,
  isZhCN: () => false,
  isPtBR: () => false
}));

const translate = require("../../../utils/i18n").translate;

const defaultProps = {
  login: {
    email: "email@email.com",
    password: "123456"
  },
  handleUserSubmit: jest.fn(),
  handleUserInput: jest.fn(),
  handleLoginPassword: jest.fn()
};

const propsWithLoginError = {
  ...defaultProps,
  login: {
    error: {
      status: 401
    }
  }
};

describe("LoginForm component", () => {
  it("should match snapshot with valid props", () => {
    expect(shallow(<LoginForm {...defaultProps} />)).toMatchSnapshot();
  });

  it("should match snapshot with error message when login fails", () => {
    const props = {
      ...defaultProps,
      login: {
        error: true,
        email: "",
        password: ""
      }
    };
    expect(shallow(<LoginForm {...props} />)).toMatchSnapshot();
  });

  it("should show an error message if login status error is 401", () => {
    const LoginFormWrapper = shallow(<LoginForm {...propsWithLoginError} />);

    expect(
      LoginFormWrapper.find(ErrorMessage)
        .render()
        .text()
    ).toBe(translate("INCORRECT_EMAIL_OR_PASSWORD"));
  });

  it("should handleLoginPassword with inputed data", () => {
    const LoginFormWrapperInstance = shallow(
      <LoginForm {...defaultProps} />
    ).instance();

    LoginFormWrapperInstance.onVirtualKeyboardKeyDown("456");
    expect(defaultProps.handleLoginPassword).toHaveBeenCalledWith("123456456");
  });

  it("should handleLoginPassword without inputed data", () => {
    const props = {
      ...defaultProps,
      login: {
        password: null
      }
    };

    const LoginFormWrapperInstance = shallow(
      <LoginForm {...props} />
    ).instance();

    LoginFormWrapperInstance.$password = { focus: jest.fn() };

    LoginFormWrapperInstance.onVirtualKeyboardKeyDown("888");
    expect(props.handleLoginPassword).toHaveBeenCalledWith("888");
    expect(LoginFormWrapperInstance.$password.focus).toHaveBeenCalled();
  });

  it("should remove load state if component is updated with input error", () => {
    const LoginFormWrapper = shallow(<LoginForm {...defaultProps} />);

    const LoginFormWrapperInstance = LoginFormWrapper.instance();

    LoginFormWrapper.state().isLoading = true;
    LoginFormWrapperInstance.setState = jest.fn();

    LoginFormWrapper.setProps({ login: { error: true } });

    expect(LoginFormWrapperInstance.setState).toHaveBeenCalledWith({
      isLoading: false
    });
  });

  it("should updated the component without changes", () => {
    const LoginFormWrapper = shallow(<LoginForm {...defaultProps} />);

    const LoginFormWrapperInstance = LoginFormWrapper.instance();
    LoginFormWrapperInstance.setState = jest.fn();

    LoginFormWrapper.setProps({});

    expect(LoginFormWrapper).toMatchSnapshot();
  });

  it("should invoke handleUserSubmit action when submit the form", () => {
    const LoginFormWrapper = shallow(<LoginForm {...defaultProps} />);

    const LoginFormWrapperInstance = LoginFormWrapper.instance();
    LoginFormWrapperInstance.setState = jest.fn();

    LoginFormWrapperInstance.submit({ value: "mock" });

    expect(LoginFormWrapperInstance.setState).toHaveBeenCalledWith({
      isLoading: true
    });

    expect(defaultProps.handleUserSubmit).toHaveBeenCalledWith({
      value: "mock"
    });
  });

  it("should invoke validation from input email and be true", () => {
    const LoginFormWrapper = shallow(<LoginForm {...defaultProps} />);
    //const spy = jest.spyOn(LoginFormWrapper.instance(), "goToStep");

    expect(
      LoginFormWrapper.find(Input)
        .at(0)
        .prop("valid")()
    ).toBe(true);
  });

  it("should stabilish password input element ref", () => {
    const LoginFormWrapper = shallow(<LoginForm {...propsWithLoginError} />);

    LoginFormWrapper.find(Input)
      .at(1)
      .prop("innerRef")("mock");

    expect(LoginFormWrapper.instance().$password).toEqual("mock");
  });

  it("should invoke handleLoginPassword with empty string when erase numbers", () => {
    const LoginFormWrapper = shallow(<LoginForm {...defaultProps} />);

    LoginFormWrapper.find(VirtualKeyboard)
      .at(0)
      .prop("onErase")();

    expect(defaultProps.handleLoginPassword).toHaveBeenCalledWith("");
  });
});

describe("isValid", () => {
  it("should return false when loginError is true", () => {
    const loginError = true;
    const isValidField = false;
    expect(isValid(loginError, isValidField)).toBe(false);
  });

  it("should return whatever isValidField is otherwise", () => {
    const loginError = false;
    expect(isValid(loginError, false)).toBe(false);
    expect(isValid(loginError, true)).toBe(true);
    expect(isValid(undefined, true)).toBe(true);
    expect(isValid(undefined, false)).toBe(false);
    expect(isValid(undefined, null)).toBe(null);
    expect(isValid(null, true)).toBe(true);
    expect(isValid(null, false)).toBe(false);
    expect(isValid(null, null)).toBe(null);
  });
});

describe("isDisabled", () => {
  it("should return false when both are true", () => {
    const isValidEmail = true;
    const isValidPassword = true;
    expect(isDisabled(isValidEmail, isValidPassword)).toBe(false);
  });

  it("should return true when one of them is falsy", () => {
    expect(isDisabled(true, false)).toBe(true);
    expect(isDisabled(false, true)).toBe(true);
    expect(isDisabled(false, false)).toBe(true);
    expect(isDisabled(undefined, true)).toBe(true);
    expect(isDisabled(null, true)).toBe(true);
  });
});
