import React from "react";
import { shallow } from "enzyme";
import Header, { userName } from "./Header";
import { Context } from "../OffshoreSelect/offshoreContext";

jest.mock("../../../utils/fetchHandler");
jest.mock("../../../utils/redirect");
jest.mock("../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false
}));

const checkViewContextAndRedirectMock = require("../../../utils/fetchHandler")
  .checkViewContextAndRedirect;
const redirectMock = require("../../../utils/redirect").redirect;

let props;

const context = {
  isGlobalMode: false
};

beforeEach(() => {
  React.useContext = jest.fn(() => context);

  props = {
    openModal: jest.fn(),
    closeModal: jest.fn(),
    isNavigationMenuShown: jest.fn(),
    userInfo: { givenName: "Name", roles: ["GET_DOCUMENTS"] },
    doLogout: jest.fn(() => Promise.resolve()),
    history: {
      push: jest.fn(),
      location: {
        pathname: ""
      }
    }
  };
  checkViewContextAndRedirectMock.mockImplementation(jest.fn());
  redirectMock.mockImplementation(jest.fn());
});

describe("Header component", () => {
  it("should match snapshot with props", () => {
    expect(
      shallow(
        <Context.Provider value={context}>
          <Header {...props} />
        </Context.Provider>
      )
    ).toMatchSnapshot();
  });

  describe("userName", () => {
    it("should return the givenName when passed", () => {
      expect(userName({ givenName: "givenName" })).toBe("givenName");
    });

    it("should return a default value otherwise", () => {
      expect(userName()).toBe("USER");
    });
  });
});
