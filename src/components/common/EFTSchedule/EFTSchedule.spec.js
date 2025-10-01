import React from "react";
import { shallow, mount } from "enzyme";
import EFTSchedule from "./EFTSchedule";

const props = {
  closeModal: jest.fn(),
  onConfirm: jest.fn()
};

describe("EFTSchedule component", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<EFTSchedule {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an "EFTSchedule" tag', () => {
    const wrapper = mount(<EFTSchedule {...props} />);
    expect(wrapper.find("EFTSchedule").length).toBe(1);
  });

  it("should close modal properly on cancel", () => {
    const wrapper = shallow(<EFTSchedule {...props} />);
    wrapper.find("#Cancel").simulate("click");
    expect(props.closeModal).toHaveBeenCalled();
  });

  it("should invoke confirm callback", () => {
    jest.spyOn(EFTSchedule.prototype, "handleConfirmButton");

    const wrapper = shallow(<EFTSchedule {...props} />);
    wrapper.find("#Confirm").simulate("click");

    expect(wrapper.state()).toEqual({
      isLoading: true
    });

    expect(EFTSchedule.prototype.handleConfirmButton.calledOnce);
    expect(props.onConfirm).toHaveBeenCalled();
  });
});
