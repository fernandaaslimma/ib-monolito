import React from "react";
import { render, screen, configure, fireEvent } from "@testing-library/react";
import RadioButtonRounded from "./index";
configure({ testIdAttribute: "data-test" });
let props = {
  inputName: "inputName",
  itemKey: "itemKey",
  setValue: jest.fn(),
  buttonValue: "buttonValue",
  isChecked: jest.fn(),
  storedValue: "mock"
};
describe("MultipleRadioButtonRounded", () => {
  it("should match snapshot", () => {
    expect(render(<RadioButtonRounded {...props} />)).toMatchSnapshot();
  });
  it("should trigger setValue on click", () => {
    render(<RadioButtonRounded {...props} />);
    fireEvent.click(screen.getByTestId("inputName_itemKey"));
    expect(props.setValue).toBeCalled();
  });
  it("should trigger isChecked on click", () => {
    render(<RadioButtonRounded {...props} />);
    fireEvent.click(screen.getByTestId("inputName_itemKey"));
    expect(props.isChecked).toBeCalled();
  });
  it("should have buttonValue written on screen", () => {
    render(<RadioButtonRounded {...props} />);
    expect(screen.queryAllByText(/buttonValue/i)).toBeTruthy();
  });
});
