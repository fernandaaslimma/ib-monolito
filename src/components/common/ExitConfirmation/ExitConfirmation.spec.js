import React from "react";
import { shallow, mount } from "enzyme";
import ExitConfirmation from "./ExitConfirmation";
import { Button } from "react-bocombbm-components";

let props;

beforeEach(() => {
  props = {
    title: "titulo teste",
    message: "mensagem de exemplo",
    onClickExit: jest.fn(),
    onClickCancel: jest.fn()
  };
});

describe("ExitConfirmation component test ", () => {
  it("component should render correctly with props", () => {
    expect(mount(<ExitConfirmation {...props} />)).toMatchSnapshot();
  });

  it("should update the state by click the footer toggle button", () => {
    const wrapper = shallow(<ExitConfirmation {...props} />);
    wrapper
      .find(Button)
      .at(0)
      .simulate("click");

    expect(props.onClickCancel).toHaveBeenCalled();
  });

  it("should update the state by click the footer toggle button", () => {
    const wrapper = shallow(<ExitConfirmation {...props} />);
    wrapper
      .find(Button)
      .at(1)
      .simulate("click");

    expect(props.onClickExit).toHaveBeenCalled();
  });
});
