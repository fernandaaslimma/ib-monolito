import React from "react";
import { shallow } from "enzyme";
import ContentBySteps from "./ContentBySteps";
import Button from "../Button";

jest.mock("../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false
}));

const props = {
  data: [
    {
      step: 1,
      data: {
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    },
    {
      step: 2,
      data: {
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    }
  ],
  stepBy: "step",
  stepTitle: "title",
  renderStepData: jest.fn(),
  stepJumpSupportFunc: jest.fn(),
  finishForm: jest.fn(),
  disabledNextButtons: [
    {
      step_1: false
    }
  ]
};

describe("ContentBySteps component", () => {
  it("should match snapshot with props", () => {
    expect(shallow(<ContentBySteps {...props} />)).toMatchSnapshot();
  });

  it("should go to next step", () => {
    const shallowComponent = shallow(<ContentBySteps {...props} />);
    const spy = jest.spyOn(shallowComponent.instance(), "goToStep");

    shallowComponent
      .find(Button)
      .at(0)
      .simulate("click");

    expect(spy).toHaveBeenCalledWith(2);
    expect(props.stepJumpSupportFunc).toHaveBeenCalled();
  });

  it("should call finish step func", () => {
    const shallowComponent = shallow(<ContentBySteps {...props} />);

    shallowComponent.setState({ activeStep: 2 });
    shallowComponent.update();

    shallowComponent
      .find(Button)
      .at(1)
      .simulate("click");

    expect(props.finishForm).toHaveBeenCalled();
  });

  it("should go to previous step", () => {
    const shallowComponent = shallow(<ContentBySteps {...props} />);
    const spy = jest.spyOn(shallowComponent.instance(), "goToStep");

    shallowComponent.setState({ activeStep: 2 });
    shallowComponent.update();

    shallowComponent
      .find(Button)
      .at(0)
      .simulate("click");

    expect(spy).toHaveBeenCalledWith(1);
  });
});
