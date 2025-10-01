import React from "react";
import { shallow, mount } from "enzyme";
import DayPickerInput from "react-day-picker/DayPickerInput";
import Filters from "./Filters";
import Button from "../../common/AbstractButton";
import Dropdown from "../../common/AbstractDropdown";
import { ViewText } from "./styled";

const props = {
  handleClearPageItems: jest.fn(),
  onClearDateRange: jest.fn(),
  filterOperations: jest.fn(),
  setBasicInfo: jest.fn(),
  dropdowOptions: [
    {
      id: 1,
      name: "name mock"
    }
  ],
  handleChangePageItems: jest.fn(),
  range: {
    to: "",
    from: ""
  },
  pageSize: "",
  onChangeDateRange: jest.fn(),
  disabled: false
};

describe("Filters", () => {
  it.skip("should match snapshot", () => {
    expect(shallow(<Filters {...props} />)).toMatchSnapshot();
  });

  it.skip("should match with button not available", () => {
    const newProps = {
      ...props,
      range: { to: "01/09/2022", from: "" },
      pageSize: ""
    };
    const wrapper = shallow(<Filters {...newProps} />).instance();
    expect(wrapper).toMatchSnapshot();
  });

  it.skip("should match with button available", () => {
    const newProps = {
      ...props,
      range: { to: null, from: null },
      pageSize: ""
    };
    const wrapper = shallow(<Filters {...newProps} />).instance();
    expect(wrapper).toMatchSnapshot();
  });

  it("should click filter button", () => {
    const wrapper = shallow(<Filters {...props} />);
    wrapper
      .find(Button)
      .at(0)
      .simulate("click");

    expect(props.filterOperations).toHaveBeenCalled();
  });

  it("should click clear filter", () => {
    const newProps = {
      ...props,
      range: { to: null, from: null },
      pageSize: ""
    };
    const wrapper = shallow(<Filters {...newProps} />);
    wrapper
      .find(ViewText)
      .at(0)
      .simulate("click");

    expect(props.handleClearPageItems).toHaveBeenCalledWith("");
  });

  it("should change date range", () => {
    const wrapper = mount(<Filters {...props} />);
    const date = new Date();
    const input = wrapper.find(DayPickerInput).at(0);
    input.prop("onDayChange")(date);

    expect(props.onChangeDateRange).toHaveBeenCalled();
  });

  it("should items per page", () => {
    const wrapper = mount(<Filters {...props} />);
    const page = "10";
    const input = wrapper.find(Dropdown).at(0);
    input.prop("onChange")(page);

    expect(props.handleChangePageItems).toHaveBeenCalled();
  });
});
