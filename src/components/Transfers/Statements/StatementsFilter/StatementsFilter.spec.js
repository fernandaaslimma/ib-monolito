import React from "react";
import { shallow, mount } from "enzyme";
import StatementsFilter from "./StatementsFilter";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { Filter } from "react-bocombbm-components";

const props = {
  onFilter: jest.fn(),
  filter: { range: { from: new Date(), to: new Date() } }
};

describe("StatementsFilter", () => {
  it("should match snapshot", () => {
    expect(shallow(<StatementsFilter {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot without predefined filter", () => {
    expect(
      shallow(<StatementsFilter {...props} filter={null} />)
    ).toMatchSnapshot();
  });

  it("should change date range", () => {
    const wrapper = mount(<StatementsFilter {...props} />);
    const instance = wrapper.instance();

    const date = new Date();

    instance.setState = jest.fn();

    const input = wrapper.find(DayPickerInput).at(0);
    input.prop("onDayChange")(date);

    expect(instance.setState).toHaveBeenCalled();
  });

  it("should invoke filter function", () => {
    const wrapper = mount(<StatementsFilter {...props} />);
    const filter = wrapper.find(Filter).at(0);
    filter.prop("onFilter")();

    expect(props.onFilter).toHaveBeenCalled();
  });
});
