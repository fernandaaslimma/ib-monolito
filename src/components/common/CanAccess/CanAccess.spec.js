import React from "react";
import { shallow } from "enzyme";

import CanAccess, { checkIfHasAccess } from "./CanAccess";
import { GET_POSITION, GET_TRANSACTIONS } from "../../../utils/constants";

const roles = [GET_POSITION];

const userInfo = {
  roles
};

const Child = <h1>child</h1>;

describe("CanAccess component", () => {
  it("should match snapshot", () => {
    expect(
      shallow(
        <CanAccess>
          <Child />
        </CanAccess>
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot with userInfo", () => {
    expect(
      shallow(
        <CanAccess userInfo={userInfo}>
          <Child />
        </CanAccess>
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot with roles", () => {
    expect(
      shallow(
        <CanAccess roles={roles}>
          <Child />
        </CanAccess>
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot with roles and userInfo", () => {
    expect(
      shallow(
        <CanAccess roles={roles} userInfo={userInfo}>
          <Child />
        </CanAccess>
      )
    ).toMatchSnapshot();
  });
});

describe("checkIfHasAccess", () => {
  it("should return false when roles is not present in userInfo", () => {
    const userInfo = {
      roles: [GET_TRANSACTIONS]
    };
    const roles = [GET_POSITION];
    expect(checkIfHasAccess(userInfo, roles)).toBe(false);
  });

  it("should return false when one of the roles is not present in userInfo", () => {
    const userInfo = {
      roles: [GET_TRANSACTIONS]
    };
    const roles = [GET_TRANSACTIONS, GET_POSITION];
    expect(checkIfHasAccess(userInfo, roles)).toBe(false);
  });

  it("should return true when one of the roles is not present in userInfo but anyRole is passed as a prop", () => {
    const userInfo = {
      roles: [GET_TRANSACTIONS]
    };
    const roles = [GET_TRANSACTIONS, GET_POSITION];
    const anyRole = true;
    expect(checkIfHasAccess(userInfo, roles, anyRole)).toBe(true);
  });

  it("should return true when roles is empty", () => {
    const roles = [];
    expect(checkIfHasAccess(null, roles)).toBe(true);
  });

  it("should return true otherwise", () => {
    const userInfo = {
      roles: [GET_TRANSACTIONS]
    };
    const roles = [GET_TRANSACTIONS];
    expect(checkIfHasAccess(userInfo, roles)).toBe(true);
  });
});
