import React from "react";
import { screen, render, fireEvent, configure } from "@testing-library/react";
import "@testing-library/jest-dom";
import ThirdStep from "./ThirdStep";

configure({ testIdAttribute: "data-test" });

const props = { changeCurrentScreen: jest.fn() };

describe("ThirdStep MFA Exchange Component", () => {
  it("Should To Match SnapShot", () => {
    expect(render(<ThirdStep {...props} />)).toMatchSnapshot();
  });

  it("Initial Render Component", () => {
    render(<ThirdStep {...props} />);

    const title = screen.getByTestId("ThirdStepTitleTestId");
    const image = screen.getByTestId("ThirdStepImageTestId");
    const text = screen.getByTestId("ThirdStepTextTestId");
    const button = screen.getByTestId("ThirdStepButtonTestId");

    expect(title).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("Should Click Button Continue and Call the Function changeCurrentScreen", () => {
    render(<ThirdStep {...props} />);

    const button = screen.getByTestId("ThirdStepButtonTestId");

    fireEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(props.changeCurrentScreen).toHaveBeenCalledWith(6);
  });
});
