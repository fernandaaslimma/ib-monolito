import React from "react";
import { shallow } from "enzyme";

import Buttons from "./Buttons";

const props = {
  buttons: [
    {
      dataTest: "ButtonNewAccountAm",
      children: "Sou eu",
      onClick: jest.fn(),
      background: "blue",
      color: "white",
      border: "solid 1px blue",
      noHoverBackground: true,
      fontSize: "14",
      borderRadius: { rightTop: "0", rightBottom: "0" },
      padding: { r: "20", l: "20" }
    },
    {
      dataTest: "ButtonNewAccountOtherRecipient",
      children: "Outros",
      onClick: jest.fn(),
      background: "none",
      color: "blue",
      border: "olid 1px blue",
      noHoverBackground: true,
      fontSize: "14",
      borderRadius: { leftTop: "0", leftBottom: "0" },
      padding: { r: "20", l: "20" }
    }
  ]
};

describe("Buttons component", () => {
  it("should match snapshot with one or more buttons", () => {
    expect(shallow(<Buttons {...props}>Text</Buttons>)).toMatchSnapshot();
  });
});
