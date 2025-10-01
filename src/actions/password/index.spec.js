import actions from "./index";

jest.mock("../../utils/validations/password");
jest.mock("../../services/password");

const generateErrorsMock = require("../../utils/validations/password")
  .generateErrors;
const checkIfErrorsExistMock = require("../../utils/validations/password")
  .checkIfErrorsExist;
const generateBackendErrorsMock = require("../../utils/validations/password")
  .generateBackendErrors;
const createPasswordMock = require("../../services/password").createPassword;

const storeMock = {
  setState: jest.fn()
};

describe("Password actions", () => {
  beforeEach(() => {
    generateErrorsMock.mockImplementation(() => {
      return {
        password: true
      };
    });
    checkIfErrorsExistMock.mockImplementation(() => true);
    generateBackendErrorsMock.mockImplementation(() => ({ default: true }));
  });

  it("Should return an action object", () => {
    expect(typeof actions() === "object").toBeTruthy();
    expect(Object.keys(actions())).toEqual([
      "handleUserInput",
      "handleUserSubmit"
    ]);
  });

  describe("handleUserInput", () => {
    it("Should return the updated state for password and clean errors", () => {
      const { handleUserInput } = actions();

      const inputEvent = {
        target: {
          name: "password",
          value: "123456",
          error: {}
        }
      };

      expect(handleUserInput({}, inputEvent)).toEqual({
        createPassword: {
          password: "123456",
          error: {}
        }
      });
    });

    it("Should return the updated state for passwordConfirmation and clean errors", () => {
      const { handleUserInput } = actions();

      const inputEvent = {
        target: {
          name: "passwordConfirmation",
          value: "123456",
          error: {}
        }
      };

      expect(handleUserInput({}, inputEvent)).toEqual({
        createPassword: {
          passwordConfirmation: "123456",
          error: {}
        }
      });
    });
  });

  describe("handleUserSubmit", () => {
    it("Should call prevent default", () => {
      const { handleUserSubmit } = actions();

      const inputEvent = {
        preventDefault: jest.fn()
      };

      handleUserSubmit({}, inputEvent);

      expect(inputEvent.preventDefault).toHaveBeenCalled();
    });

    it("Should return errors when has no createPassword data", () => {
      const { handleUserSubmit } = actions();

      const inputEvent = {
        preventDefault: jest.fn()
      };

      const resp = handleUserSubmit({}, inputEvent);

      expect(resp).toEqual({
        createPassword: {
          error: {
            password: true
          }
        }
      });
    });

    it("Should return otp as true when status error is 401", async () => {
      checkIfErrorsExistMock.mockImplementation(() => false);
      createPasswordMock.mockImplementation(() =>
        Promise.reject({ status: 401 })
      );

      const { handleUserSubmit } = actions();

      const inputEvent = {
        preventDefault: jest.fn()
      };

      const otp = "otp";
      const createPassword = {
        password: "123456",
        document: "123456"
      };

      const resp = await handleUserSubmit(
        null,
        inputEvent,
        otp,
        createPassword
      );
      expect(resp).toEqual({
        createPasswordSuccess: false,
        createPassword: {
          error: {
            otp: true
          }
        }
      });
    });

    it("Should not return otp as true when status error is different then 401", async () => {
      checkIfErrorsExistMock.mockImplementation(() => false);
      createPasswordMock.mockImplementation(() =>
        Promise.reject({ status: 400, json: () => Promise.resolve({}) })
      );

      const { handleUserSubmit } = actions(storeMock);

      const inputEvent = {
        preventDefault: jest.fn()
      };

      const otp = "otp";
      const createPassword = {
        password: "123456",
        document: "123456"
      };

      await handleUserSubmit(null, inputEvent, otp, createPassword);
      expect(storeMock.setState).toHaveBeenCalledWith({
        createPassword: { error: { default: true } },
        createPasswordSuccess: false
      });
    });

    it("Should return createPasswordSuccess as true when createPassword is sucessful", async () => {
      checkIfErrorsExistMock.mockImplementation(() => false);
      createPasswordMock.mockImplementation(() => Promise.resolve({}));

      const { handleUserSubmit } = actions();

      const inputEvent = {
        preventDefault: jest.fn()
      };

      const otp = "otp";
      const createPassword = {
        document: "123456",
        password: "123456"
      };

      const resp = await handleUserSubmit(
        null,
        inputEvent,
        otp,
        createPassword
      );
      expect(resp).toEqual({
        createPasswordSuccess: true,
        createPassword: {}
      });
    });
  });
});
