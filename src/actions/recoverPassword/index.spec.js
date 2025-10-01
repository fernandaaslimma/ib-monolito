import actions from "./index";
jest.mock("../../services/password");
const { emailPassword } = require("../../services/password");
const store = {
  setState: jest.fn()
};
it("Should return an action object", () => {
  expect(typeof actions() === "object").toBeTruthy();
  expect(Object.keys(actions())).toEqual([
    "handleUserInputRecoverPassword",
    "handleUserSubmit",
    "cleanPasswordSuccess"
  ]);
});

describe("handleUserInputRecoverPassword", () => {
  it("Should return the updated state for password and clean errors", () => {
    const { handleUserInputRecoverPassword } = actions();

    const inputEvent = {
      target: {
        name: "email",
        value: "email@email.com",
        error: null
      }
    };

    expect(handleUserInputRecoverPassword({}, inputEvent)).toEqual({
      recoverPassword: {
        email: "email@email.com",
        error: null
      }
    });
  });
});

describe("handleUserSubmit", () => {
  it("Should return the updated state for success", async () => {
    emailPassword.mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({ data: { userId: 1 } })
      })
    );

    const { handleUserSubmit } = actions(store);

    const state = {
      recoverPasswordSuccess: true,
      recoverPassword: {
        email: "email@email.com",
        error: null
      }
    };

    const response = await handleUserSubmit(state, {
      preventDefault: () => {}
    });

    expect(response).toEqual({
      recoverPasswordSuccess: true,
      recoverPassword: {
        email: "email@email.com",
        error: null
      }
    });
  });
});

describe("cleanPasswordSuccess", () => {
  it("Should clean errors from global state", async () => {
    const { cleanPasswordSuccess } = actions();

    expect(
      cleanPasswordSuccess({
        recoverPasswordSuccess: false,
        recoverPassword: {}
      })
    ).toEqual({
      recoverPasswordSuccess: false,
      recoverPassword: {}
    });
  });
});
