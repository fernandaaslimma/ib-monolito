import React from "react";
import { render, shallow } from "enzyme";
import TimeExpirationAlert from "./TimeExpirationAlert";
import Button from "../../common/Button";

jest.useFakeTimers();

const props = {
  alignment: ["bottom", "left"],
  clickAction: jest.fn(),
  expirationAction: jest.fn(),
  threshold: 60,
  timeLeft: 60,
  contantLabels: {
    message: "mock",
    keepConnected: "mock"
  }
};

describe("TimeExpirationAlert component", () => {
  it("should match snapshot", () => {
    expect(render(<TimeExpirationAlert {...props} />)).toMatchSnapshot();
  });

  it.skip("should count and set new remaining time", () => {
    const setStateSpy = jest.spyOn(TimeExpirationAlert.prototype, "setState");

    const shallowComponent = shallow(<TimeExpirationAlert {...props} />);
    shallowComponent.instance().count();

    expect(setInterval).toHaveBeenCalledTimes(1);

    jest.runOnlyPendingTimers();
    expect(setStateSpy).toHaveBeenCalledWith({ remaining: 59 });
  });

  it("should invoke click action after click button snapshot", () => {
    const shallowComponent = shallow(<TimeExpirationAlert {...props} />);

    shallowComponent
      .find(Button)
      .at(0)
      .simulate("click");

    expect(props.clickAction).toHaveBeenCalled();
  });

  it("should call component update and set new state", () => {
    const shallowComponent = shallow(<TimeExpirationAlert {...props} />);

    const updateSpy = jest.spyOn(
      TimeExpirationAlert.prototype,
      "componentDidUpdate"
    );
    shallowComponent.setState({ remaining: 59 });

    expect(updateSpy).toHaveBeenCalled();
    expect(shallowComponent.state()).toEqual({
      remaining: 59
    });
  });

  it.skip("should set new component state when rsetTimer is invoked", () => {
    const shallowComponent = shallow(<TimeExpirationAlert {...props} />);
    const updateSpy = jest.spyOn(TimeExpirationAlert.prototype, "setState");

    shallowComponent.instance().resetTimer(20);
    expect(updateSpy).toHaveBeenCalledWith({ remaining: 20 });
  });

  it("should invoke expiration action when counter reaches 0", () => {
    const shallowComponent = shallow(<TimeExpirationAlert {...props} />);
    shallowComponent.setState({ remaining: 0 });
    shallowComponent.update();

    expect(props.expirationAction).toHaveBeenCalled();
  });
});
