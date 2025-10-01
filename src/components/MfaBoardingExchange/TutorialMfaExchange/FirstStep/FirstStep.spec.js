import React from "react";
import FirstStep from "./FirstStep";
import { screen, render, fireEvent, configure } from "@testing-library/react";
import "@testing-library/jest-dom";

const props = { changeCurrentScreen: jest.fn() };

configure({ testIdAttribute: "data-test" });

describe("FirstStep MFA Exchange Component", () => {
  it("Should To Match SnapShot", () => {
    expect(render(<FirstStep {...props} />)).toMatchSnapshot();
  });

  it("Initial Render Component", () => {
    render(<FirstStep {...props} />);

    const title = screen.getByTestId("FirstStepTitleTestId");
    const image = screen.getByTestId("FirstStepImageTestId");
    const text = screen.getByTestId("FirstStepTextTestId");
    const button = screen.getByTestId("FirstStepButtonTestId");

    expect(title).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("Should Click Button Continue and Call the Function changeCurrentScreen", () => {
    render(<FirstStep {...props} />);

    const button = screen.getByTestId("FirstStepButtonTestId");

    fireEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(props.changeCurrentScreen).toHaveBeenCalledWith(4);
  });
});
