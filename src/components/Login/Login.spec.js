import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";

jest.mock("../../utils/i18n", () => ({
  translate: id => id,
  withI18n: component => component,
  isZhCN: () => false,
  getLanguage: () => "en-US",
  isPtBR: () => false
}));

jest.mock("../../utils/getNavigator");
jest.mock("../../services/login");

const isInternetExplorerMock = require("../../utils/getNavigator")
  .isInternetExplorer;
const preflightForInternetExplorerMock = require("../../services/login")
  .preflightForInternetExplorer;

jest.mock("../../utils/getQueryParam");
const getQueryParamMock = require("../../utils/getQueryParam").default;

const openToastrMock = jest.fn();
const updateEmailMock = jest.fn();

const defaultProps = {
  login: {
    email: "email@email.com",
    password: "123456"
  },
  loginSuccess: false,
  location: {
    hash: ""
  },
  handleUserSubmit: () => {},
  handleUserInput: () => {},
  setLanguage: jest.fn(),
  setOpenBankingInfo: jest.fn(),
  setJustLoggedIn: jest.fn(),
  handleMobileHash: jest.fn(() => Promise.resolve()),
  handleImpersonateHash: jest.fn(() => Promise.resolve()),
  updateEmail: updateEmailMock,
  openToastr: openToastrMock
};

jest.useFakeTimers();

describe("Login component", () => {
  it("should match snapshot with valid props", () => {
    expect(shallow(<Login {...defaultProps} />)).toMatchSnapshot();
  });

  it("should match snapshot with invalid props", () => {
    const props = Object.assign(defaultProps, {
      login: {
        email: "",
        password: ""
      }
    });
    expect(shallow(<Login {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot when loginSuccess", () => {
    const props = Object.assign(defaultProps, {
      login: {
        email: "",
        password: ""
      },
      loginSuccess: true
    });
    expect(shallow(<Login {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot with error message when login fails", () => {
    const props = Object.assign(defaultProps, {
      login: {
        error: true,
        email: "",
        password: ""
      },
      loginSuccess: false
    });
    expect(shallow(<Login {...props} />)).toMatchSnapshot();
  });

  it("should call openModal if login status is greater than 401", () => {
    const props = Object.assign(defaultProps, {
      login: {
        error: {
          status: 500
        }
      },
      openModal: jest.fn()
    });

    shallow(<Login {...props} />);
    expect(props.openModal).toHaveBeenCalled();
  });

  it("should call clearLoginError when onClose modal function is triggered", () => {
    const props = Object.assign(defaultProps, {
      login: {
        error: {
          status: 500
        }
      },
      clearLoginError: jest.fn(),
      openModal(config) {
        config.onClose();
      }
    });

    shallow(<Login {...props} />);
    expect(props.clearLoginError).toHaveBeenCalled();
  });

  it("should not trigger preflight when browser is not IE", () => {
    isInternetExplorerMock.mockReturnValue(false);
    shallow(<Login {...defaultProps} />);
    expect(preflightForInternetExplorerMock).not.toHaveBeenCalled();
  });

  it("should trigger preflight when browser is IE", () => {
    isInternetExplorerMock.mockReturnValue(true);
    shallow(<Login {...defaultProps} />);
    expect(preflightForInternetExplorerMock).toHaveBeenCalled();
  });

  describe("componentDidMount", () => {
    describe("when email exists", () => {
      it("should invoke updateEmail", () => {
        getQueryParamMock.mockReturnValue("email");
        shallow(<Login {...defaultProps} />);

        jest.advanceTimersByTime(500);

        expect(updateEmailMock).toHaveBeenCalledWith("email");
      });

      it("should invoke openToastr", () => {
        getQueryParamMock.mockReturnValue("email");
        shallow(<Login {...defaultProps} />);

        jest.advanceTimersByTime(500);

        expect(openToastrMock).toHaveBeenCalledWith({
          text: "YOUR_PASSWORD_HAS_BEEN_SUCCESSFULLY_REGISTERED",
          isBelow: false,
          isTop: true
        });
      });
    });

    describe("when email doens't exist", () => {
      it("should invoke updateEmail", () => {
        const updateEmailMock = jest.fn();
        getQueryParamMock.mockReturnValue(null);
        shallow(<Login {...defaultProps} />);

        expect(updateEmailMock).not.toHaveBeenCalled();
      });

      it("should invoke openToastr", () => {
        const openToastrMock = jest.fn();
        getQueryParamMock.mockReturnValue(null);
        shallow(<Login {...defaultProps} />);

        expect(openToastrMock).not.toHaveBeenCalled();
      });
    });
  });

  describe("when login from mobile", () => {
    it("should handle mobile hash", () => {
      shallow(<Login {...defaultProps} location={{ hash: "#mobile_12345" }} />);

      expect(defaultProps.handleMobileHash).toHaveBeenCalledWith("12345");
    });
  });

  describe("when login with impersonate hash", () => {
    it("should handle impersonate hash", () => {
      shallow(
        <Login {...defaultProps} location={{ hash: "#impersonate_12345" }} />
      );

      expect(defaultProps.handleImpersonateHash).toHaveBeenCalledWith("12345");
    });
  });
});
