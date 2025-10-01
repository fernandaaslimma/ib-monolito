import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";

import Dropdown from "./";
import { DropdownWrapper } from "./styles";

describe("dropdown component", () => {
  let element;
  let testClick = "test";

  beforeEach(() => {
    element = (
      <Dropdown
        onChange={() => {
          testClick = "click-test";
        }}
        label="Dropdown"
        isBlock={false}
      >
        <Dropdown.Option value="mercedes">Mercedes</Dropdown.Option>
        <Dropdown.Option value="volvo">Volvo</Dropdown.Option>
        <Dropdown.Option value="saab">Saab</Dropdown.Option>
        <Dropdown.Option value="audi">Audi</Dropdown.Option>
      </Dropdown>
    );
  });

  it("should validate event onFocus", () => {
    const wrapper = shallow(element);
    wrapper.instance().handleOnFocus();
    expect(wrapper.state().focus).toEqual(true);
  });

  it("should validate event onBlur", () => {
    const wrapper = shallow(element);
    wrapper.instance().handleOnBlur();
    expect(wrapper.state().focus).toEqual(false);
  });

  it("should validate componentWillUpdate when value is equal string and value is equal zero", () => {
    const wrapper = mount(element);
    wrapper.setProps({ value: "mercedes3" });
    expect(wrapper.state().selected).toEqual(true);
    wrapper.setProps({ value: 0 });
    expect(wrapper.state().selected).toEqual(true);
  });

  it("should validate event onChange", () => {
    const wrapper = mount(element);
    wrapper.find(DropdownWrapper).simulate("change");
    expect(testClick).toEqual("click-test");
  });

  it("should renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(element, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
