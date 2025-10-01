import React from "react";
import { shallow } from "enzyme";

import Avatar from "./Avatar";

describe("Avatar component", () => {
  it("should match snapshot with name", () => {
    expect(shallow(<Avatar name="Jusefina Matilde" />)).toMatchSnapshot();
  });

  it("should match snapshot with name and styles avatar", () => {
    expect(
      shallow(
        <Avatar
          name="Jusefina Matilde"
          fontSize={14}
          color="#000"
          background="#fff"
        />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot with icon", () => {
    expect(shallow(<Avatar iconName="Cash" />)).toMatchSnapshot();
  });

  it("should match snapshot with icon and styles avatar", () => {
    expect(
      shallow(
        <Avatar
          iconName="Cash"
          iconSize={20}
          avatarSize={40}
          color="#000"
          background="#fff"
        />
      )
    ).toMatchSnapshot();
  });
});
