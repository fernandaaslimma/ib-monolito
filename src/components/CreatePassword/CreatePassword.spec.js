import React from "react";
import { shallow } from "enzyme";

import CreatePassword, {
  isSubmitDisabled,
  checkPasswordErrors
} from "./CreatePassword";

jest.mock("../../utils/getQueryParam");
const getQueryParamMock = require("../../utils/getQueryParam").default;
getQueryParamMock.mockReturnValue("param");

const props = {
  match: {
    params: {
      token: null
    }
  },
  createPassword: {
    error: {}
  },
  setLanguage: jest.fn(),
  handleUserSubmit: jest.fn(),
  handleUserInput: () => {}
};

describe("CreatePassword component", () => {
  it("should match snapshot with default props", () => {
    expect(shallow(<CreatePassword {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot with invalid password", () => {
    const customProps = {
      ...props,
      createPassword: {
        ...props.createPassword,
        password: "",
        passwordConfirmation: "12345678"
      }
    };
    expect(shallow(<CreatePassword {...customProps} />)).toMatchSnapshot();
  });

  it("should match snapshot with invalid passwordConfirmation", () => {
    const customProps = {
      ...props,
      createPassword: {
        ...props.createPassword,
        password: "12345678",
        passwordConfirmation: ""
      }
    };
    expect(shallow(<CreatePassword {...customProps} />)).toMatchSnapshot();
  });

  it("should match snapshot with passwords that don't match", () => {
    const customProps = {
      ...props,
      createPassword: {
        ...props.createPassword,
        password: "12345678",
        passwordConfirmation: "01234567"
      }
    };
    expect(shallow(<CreatePassword {...customProps} />)).toMatchSnapshot();
  });

  it("should match snapshot with redirect to login", () => {
    const customProps = {
      ...props,
      createPasswordSuccess: true,
      createPassword: {
        ...props.createPassword
      }
    };
    expect(shallow(<CreatePassword {...customProps} />)).toMatchSnapshot();
  });

  it("should match snapshot with valid props", () => {
    const customProps = {
      ...props,
      createPassword: {
        ...props.createPassword,
        password: "12345678",
        passwordConfirmation: "12345678"
      }
    };
    expect(shallow(<CreatePassword {...customProps} />)).toMatchSnapshot();
  });

  it("should call setState with isLoading: false", () => {
    const mockCreatePasswordSuccess = false;
    const mockCreatePasswordError = {};

    const wrapper = shallow(
      <CreatePassword
        createPasswordSuccess={mockCreatePasswordSuccess}
        createPassword={{ error: mockCreatePasswordError }}
      />
    );

    wrapper.instance().componentDidUpdate();

    expect(wrapper.state("isLoading")).toBe(false);
  });
});

describe("isSubmitDisabled", () => {
  it("should return true when createPassword is empty", () => {
    expect(isSubmitDisabled()).toBe(true);
  });

  it("should return true when createPassword.password is empty", () => {
    const createPassword = {
      passwordConfirmation: "12345678"
    };
    expect(isSubmitDisabled(createPassword)).toBe(true);
  });

  it("should return true when createPassword.password is smaller than 8 chars", () => {
    const createPassword = {
      passwordConfirmation: "12345678",
      password: "1234567"
    };
    expect(isSubmitDisabled(createPassword)).toBe(true);
  });

  it("should return true when createPassword.passwordConfirmation is empty", () => {
    const createPassword = {
      password: "12345678"
    };
    expect(isSubmitDisabled(createPassword)).toBe(true);
  });

  it("should return true when createPassword.passwordConfirmation is smaller than 8 chars", () => {
    const createPassword = {
      passwordConfirmation: "1234567",
      password: "12345678"
    };
    expect(isSubmitDisabled(createPassword)).toBe(true);
  });

  it("should return false otherwise", () => {
    const createPassword = {
      document: "123.456.789.10",
      passwordConfirmation: "12345678",
      password: "12345678"
    };
    expect(isSubmitDisabled(createPassword)).toBe(false);
  });

  it("should call handleUserSubmit on form submit", () => {
    const customProps = {
      ...props,
      createPassword: {
        ...props.createPassword,
        password: "123456",
        passwordConfirmation: "123456"
      }
    };

    const wrapper = shallow(<CreatePassword {...customProps} />).find("form");
    expect(wrapper.length).toBe(1);

    wrapper.simulate("submit");

    expect(props.handleUserSubmit).toBeDefined();
  });

  it("should display ErrorMessage on form submit", () => {
    const customProps = {
      ...props,
      createPassword: {
        ...props.createPassword,
        password: "1234568",
        passwordConfirmation: "1234578"
      }
    };

    const wrapper = shallow(<CreatePassword {...customProps} />);
    const form = wrapper.find("form");
    expect(form).toBeDefined();

    form.simulate("submit");
    const errorMessage = wrapper.find("ErrorMessage");
    expect(errorMessage).toBeDefined();
  });

  it("should display password incomplete warning on ErrorMessage", () => {
    const customProps = {
      handleUserSubmit: jest.fn(),
      setLanguage: jest.fn(),
      createPassword: {
        password: "1234568",
        passwordConfirmation: "1234578",
        error: {
          password: true,
          passwordConfirmation: true,
          passwordMatch: true,
          otp: true,
          default: true,
          sequentialPasswords: true,
          birthdayOrSSN: true,
          fourAlgarisms: true
        }
      }
    };

    const wrapper = shallow(<CreatePassword {...customProps} />);
    wrapper.find("form").simulate("submit");

    expect(wrapper.find("ErrorMessage")).toBeDefined();
  });

  it("should set isLoading state to true and call handleUserSubmit", () => {
    const mockHandleUserSubmit = jest.fn();
    const wrapper = shallow(
      <CreatePassword handleUserSubmit={mockHandleUserSubmit} />
    );

    wrapper
      .instance()
      .submit("event", "otpValue", { document: "12345678901234" });

    expect(wrapper.state("isLoading")).toBe(true);

    expect(mockHandleUserSubmit).toHaveBeenCalledWith("event", "otpValue", {
      document: "12345678901234"
    });
  });
});

describe("checkPasswordErrors", () => {
  it("should return null when password is undefined", () => {
    const password = undefined;
    const passwordMatch = "12345";
    expect(checkPasswordErrors(password, passwordMatch)).toBe(null);
  });

  it("should not return null when password is different than undefined", () => {
    const password = null;
    const passwordMatch = "12345";
    expect(checkPasswordErrors(password, passwordMatch)).not.toBe(null);
  });

  it("should return true when both password and passwordMatch are null", () => {
    const password = null;
    const passwordMatch = null;
    expect(checkPasswordErrors(password, passwordMatch)).toBe(true);
  });

  it("should return false when both password and passwordMatch exists", () => {
    const password = "12345678";
    const passwordMatch = "12345678";
    expect(checkPasswordErrors(password, passwordMatch)).toBe(false);
  });

  it("should return false when password exists but passwordMatch doens't", () => {
    const password = "12345678";
    const passwordMatch = undefined;
    expect(checkPasswordErrors(password, passwordMatch)).toBe(false);
  });
});
