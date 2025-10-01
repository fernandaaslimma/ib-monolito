import React from "react";
import { shallow } from "enzyme";
import TransferDetails from "./TransferDetails";

const props = {
  title: "XPTO",
  list: ["info1", "info2"],
  stepBack: jest.fn()
};

describe("ResumeStep component", () => {
  it("Should match snapshpt", () => {
    const component = shallow(<TransferDetails {...props} />);
    expect(component).toMatchSnapshot();
  });
});
