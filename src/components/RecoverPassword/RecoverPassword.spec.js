import React from "react";
import { shallow } from "enzyme";
import { Redirect } from "react-router-dom";
import RecoverPassword from "./RecoverPassword";
const handleUserInputRecoverPasswordMock = jest.fn();

const props = {
  recoverPassword: {
    error: null,
    email: ""
  },
  cleanPasswordSuccess: false,
  recoverPasswordSuccess: false,
  handleUserSubmit: () => {},
  handleUserInputRecoverPassword: () => {}
};

describe("RecoverPassword component", () => {
  it("should match snapshot with default props", () => {
    expect(shallow(<RecoverPassword {...props} />)).toMatchSnapshot();
  });
  it("should match snapshot with handleUserInput props", () => {
    expect(
      shallow(
        <RecoverPassword
          handleUserInputRecoverPassword={handleUserInputRecoverPasswordMock}
        />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot with email props", () => {
    expect(
      shallow(
        <RecoverPassword
          recoverPassword={{ email: "te000steee@asdas.com" }}
          handleUserInputRecoverPassword={handleUserInputRecoverPasswordMock}
        />
      )
    ).toMatchSnapshot();
  });
});

describe("isSubmitDisabled", () => {
  it("should return false when createPassword is empty", () => {
    const email = "";
    const instance = shallow(
      <RecoverPassword
        handleUserInputRecoverPassword={handleUserInputRecoverPasswordMock}
      />
    ).instance();
    expect(instance.isSubmitDisabled(false, email)).toBe(false);
  });
});

describe("isValidEmail", () => {
  it("should return False when email is not valid", () => {
    const instance = shallow(
      <RecoverPassword
        handleUserInputRecoverPassword={handleUserInputRecoverPasswordMock}
      />
    ).instance();
    expect(instance.isValidEmail("te000steee@")).toBe(null);
  });
  it("should return True when email is valid", () => {
    const instance = shallow(
      <RecoverPassword
        handleUserInputRecoverPassword={handleUserInputRecoverPasswordMock}
      />
    ).instance();
    expect(instance.isValidEmail("newBlo@email.com")).toBe(true);
  });
});

describe("recoverPassword is set to true", () => {
  it("should return to the correct pathname", () => {
    const newProps = {
      recoverPassword: {
        error: null,
        email: ""
      },
      cleanPasswordSuccess: false,
      recoverPasswordSuccess: {
        to: {
          pathname: "/email-sent",
          search: "?email="
        }
      },
      handleUserSubmit: () => {},
      handleUserInputRecoverPassword: () => {}
    };
    const wrapped = shallow(
      <RecoverPassword {...newProps} recoverPasswordSuccess={true} />
    );
    expect(wrapped.find(Redirect).props("recoverPasswordSuccess")).toEqual({
      push: false,
      to: {
        pathname: "/email-sent",
        search: "?email="
      }
    });
  });
});

// describe("isInternetExplorer", () => {
//   it("Should return true for msSaveOrOpenBlob when exist", () => {
//     dependency.isInternetExplorer = jest.fn(); //eslint-disable-line
//     // isInternetExplorer();
//     expect(shallow(<RecoverPassword recoverPasswordSuccess={true} />)).toBe(
//       true
//     );
//   });
// });
