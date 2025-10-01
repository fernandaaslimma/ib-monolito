import React from "react";
import { shallow } from "enzyme";

import Dropdown from "./Dropdown";

import { spy } from "sinon";

const props = {
  onChange: () => {},
  name: "dropdown",
  placeholder: "Dropdown",
  valid: () => true,
  list: [{ name: "one" }, { name: "two" }],
  value: "",
  label: "label"
};

describe("Dropdown component", () => {
  it("should match snapshot with no validation and without accountNumber", () => {
    const wrapper = shallow(<Dropdown accountNumber={false} {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot with no validation and with accountNumber", () => {
    const wrapper = shallow(<Dropdown accountNumber={true} {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot with prop valid as boolean", () => {
    const props = {
      onChange: () => {},
      name: "dropdown",
      placeholder: "Dropdown",
      valid: false,
      list: [{ name: "one" }, { name: "two" }],
      value: ""
    };

    const wrapper = shallow(<Dropdown accountNumber={true} {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot with prop valid as func", () => {
    const wrapper = shallow(<Dropdown accountNumber={true} {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot with emptyState", () => {
    const wrapper = shallow(<Dropdown accountNumber={true} {...props} />);
    wrapper.setState({ emptyState: true });
    wrapper.update();

    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot with data-test attribute", () => {
    const props = {
      onChange: () => {},
      name: "dropdown",
      placeholder: "Dropdown",
      valid: false,
      list: [{ name: "one" }, { name: "two" }],
      value: "",
      dataTest: "dropdown"
    };

    const wrapper = shallow(<Dropdown accountNumber={true} {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot with no prop valid", () => {
    const props = {
      onChange: () => {},
      name: "dropdown",
      placeholder: "Dropdown",
      list: [{ name: "one" }, { name: "two" }],
      value: ""
    };

    const wrapper = shallow(<Dropdown accountNumber={true} {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should properly call componentDidUpdate", () => {
    spy(Dropdown.prototype, "componentDidUpdate");

    const wrapper = shallow(<Dropdown accountNumber={true} {...props} />);
    wrapper.setProps({ value: "two" });

    expect(Dropdown.prototype.componentDidUpdate.calledOnce);
    expect(wrapper.state()).toEqual({
      emptyState: false,
      isValid: true
    });

    Dropdown.prototype.componentDidUpdate.restore();
  });

  it("should properly call componentDidUpdate with no valid prop", () => {
    const props = {
      onChange: () => {},
      name: "dropdown",
      placeholder: "Dropdown",
      list: [{ name: "one" }, { name: "two" }],
      value: "",
      label: "label"
    };

    spy(Dropdown.prototype, "componentDidUpdate");

    const wrapper = shallow(<Dropdown accountNumber={true} {...props} />);
    wrapper.setProps({ value: "two" });

    expect(Dropdown.prototype.componentDidUpdate.calledOnce);
    expect(wrapper.state()).toEqual({
      emptyState: false,
      isValid: null
    });

    Dropdown.prototype.componentDidUpdate.restore();
  });
});
