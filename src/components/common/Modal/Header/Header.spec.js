import React from "react";
import { shallow } from "enzyme";

import Header from "./Header";
import { CloseIcon } from "./styles";

jest.mock("../../../../utils/redirect");

const props = {
  onClickClose: jest.fn()
};

describe("Header component", () => {
  it("should match snapshot", () => {
    expect(shallow(<Header />)).toMatchSnapshot();
  });

  it("should close modal, set notification status and redirect", () => {
    const shallowComponent = shallow(<Header {...props} />);

    shallowComponent.find(CloseIcon).simulate("click");

    expect(props.onClickClose).toHaveBeenCalled();
  });
});
