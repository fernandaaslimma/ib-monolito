import React from "react";
import { configure, fireEvent, render, screen } from "@testing-library/react";
import Dropdown from "./Dropdown2";
configure({ testIdAttribute: "data-test" });
const props = {
  list: [
    {
      name: "teste 01"
    },
    {
      name: "teste 02"
    }
  ],
  label: "label",
  placeholder: "Dropdown",
  tinyLabels: true,
  keyName: "name",
  hasEmptySelection: true,
  onChange: () => {},
  valid: () => true
};

describe("Dropdown component", () => {
  it("should match snapshot with name", () => {
    expect(render(<Dropdown {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot with data-test attribute", () => {
    const wrapper = render(<Dropdown dataTest="Dropdown" {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should trigger change on dropDown field", () => {
    render(<Dropdown dataTest="Dropdown" {...props} />);
    const dropDownField = screen.getByTestId("Dropdown");
    expect(fireEvent.change(dropDownField)).toBeTruthy();
  });
  it("should trigger blur on dropDown field", () => {
    render(<Dropdown dataTest="Dropdown" {...props} />);
    const dropDownField = screen.getByTestId("Dropdown");
    expect(fireEvent.blur(dropDownField)).toBeTruthy();
  });
  it("should trigger focus on dropDown field", () => {
    render(<Dropdown dataTest="Dropdown" {...props} />);
    const dropDownField = screen.getByTestId("Dropdown");
    expect(fireEvent.focus(dropDownField)).toBeTruthy();
  });
});
