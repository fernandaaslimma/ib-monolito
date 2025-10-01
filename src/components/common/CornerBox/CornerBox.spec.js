import React from "react";
import { shallow } from "enzyme";
import CornerBox from "./CornerBox";

const props = {
  current: 6,
  changeCurrentScreen: jest.fn()
};

describe("QrCode component", () => {
  it("should match snapshot with props", () => {
    expect(shallow(<CornerBox {...props} />)).toMatchSnapshot();
  });
});
