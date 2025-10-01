import React from "react";
import { screen, render, fireEvent, configure } from "@testing-library/react";
import "@testing-library/jest-dom";
import SecondStep from "./SecondStep";

configure({ testIdAttribute: "data-test" });

const props = { changeCurrentScreen: jest.fn() };

describe("SecondStep MFA Exchange Component", () => {
  it("Should To Match SnapShot", () => {
    expect(render(<SecondStep {...props} />)).toMatchSnapshot();
  });

  it("Render Component", () => {
    render(<SecondStep />);

    const title = screen.getByTestId("SecondStepTitleTestId");
    const image = screen.getByTestId("SecondStepImageTestId");
    const text = screen.getByTestId("SecondStepTextTestId");
    const button = screen.getByTestId("SecondStepButtonTestId");

    expect(title).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("Should Click Button Continue and Call the Function changeCurrentScreen", () => {
    render(<SecondStep {...props} />);

    const button = screen.getByTestId("SecondStepButtonTestId");

    fireEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(props.changeCurrentScreen).toHaveBeenCalledWith(5);
  });
});
