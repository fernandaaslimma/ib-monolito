import React from "react";
import { shallow } from "enzyme";

import AnimatedBottonSheet from "./AnimatedBottonSheet";
import { BottomSheetBack } from "./styles";

const onClickInBack = jest.fn(e => e);

const props = {
  children: <div></div>,
  isOpen: false,
  velocity: 1,
  onClickInBack
};

describe("Animated Botton Sheet", () => {
  it("should match snapshot closed", () => {
    expect(shallow(<AnimatedBottonSheet {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot with head", () => {
    expect(
      shallow(
        <AnimatedBottonSheet {...props} head={{ title: "mock", close: true }} />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot with full height", () => {
    expect(
      shallow(<AnimatedBottonSheet {...props} fullHeight />)
    ).toMatchSnapshot();
  });

  it("should match snapshot opened", () => {
    props.isOpen = true;
    expect(shallow(<AnimatedBottonSheet {...props} />)).toMatchSnapshot();
  });

  it("should click on back to close bottonSheet", () => {
    props.isOpen = true;
    const shallowComponent = shallow(<AnimatedBottonSheet {...props} />);

    shallowComponent
      .find(BottomSheetBack)
      .at(0)
      .simulate("click");

    expect(props.onClickInBack).toHaveBeenCalled();
  });
});
