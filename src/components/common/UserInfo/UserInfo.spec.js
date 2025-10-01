import React from "react";
import { shallow } from "enzyme";
import { Context } from "../OffshoreSelect/offshoreContext";

import UserInfo from "./UserInfo";

jest.mock("../../../utils/redirect");

const userIsLoadedMock = require("../../../utils/user").userIsLoaded;
jest.mock("../../../utils/user");

let getUserInfoMock;

const context = {
  setOffshoreAccount: jest.fn()
};

beforeEach(() => {
  React.useContext = jest.fn(() => context);
  getUserInfoMock = jest.fn(() => Promise.resolve({ ok: true }));
});

describe("UserInfo component", () => {
  it("should match snapshot", () => {
    expect(
      shallow(
        <Context.Provider value={context}>
          <UserInfo getUserInfo={getUserInfoMock}>
            <div>content</div>
          </UserInfo>
        </Context.Provider>
      )
    ).toMatchSnapshot();
  });

  it("should invoke getUserInfo once if userIsLoaded is false", () => {
    userIsLoadedMock.mockImplementation(() => false);
    shallow(
      <Context.Provider value={context}>
        <UserInfo getUserInfo={getUserInfoMock}>
          <div>content</div>
        </UserInfo>
      </Context.Provider>
    );
    setTimeout(() => {
      expect(getUserInfoMock).toHaveBeenCalledTimes(1);
    }, 1000);
  });

  it("should not invoke getUserInfo if userIsLoaded is true", () => {
    userIsLoadedMock.mockImplementation(() => true);
    shallow(
      <Context.Provider value={context}>
        <UserInfo getUserInfo={getUserInfoMock}>
          <div>content</div>
        </UserInfo>
      </Context.Provider>
    );
    expect(getUserInfoMock).not.toHaveBeenCalled();
  });
});
