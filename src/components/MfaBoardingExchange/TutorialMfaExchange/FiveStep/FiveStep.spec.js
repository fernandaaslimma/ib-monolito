import React from "react";
import { screen, render, fireEvent, configure } from "@testing-library/react";
import "@testing-library/jest-dom";
import FiveStep from "./FiveStep";

configure({ testIdAttribute: "data-test" });

const props = { changeCurrentScreen: jest.fn() };

describe("FiveStep MFA Exchange Component", () => {
  it("Should to Match Snapshot", () => {
    expect(render(<FiveStep {...props} />)).toMatchSnapshot();
  });

  it("Initial Render Component", () => {
    render(<FiveStep />);

    const title = screen.getByTestId("FiveStepTitleTestId");
    const image = screen.getByTestId("FiveStepImageTestId");
    const text = screen.getByTestId("FiveStepTextTestId");
    const button = screen.getByTestId("FiveStepButtonTestId");

    expect(title).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("Should Click Button Continue and Call the Function changeCurrentScreen", () => {
    render(<FiveStep {...props} />);

    const button = screen.getByTestId("FiveStepButtonTestId");

    fireEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(props.changeCurrentScreen).toHaveBeenCalledWith(8);
  });
});
