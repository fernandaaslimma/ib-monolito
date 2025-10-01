import React from "react";
import { screen, render, configure, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SevenStep from "./SevenStep";

configure({ testIdAttribute: "data-test" });

describe("SevenStep MFA Exchange Component", () => {
  const handleCloseMock = jest.fn();
  const props = {
    handleClose: handleCloseMock
  };

  it("Should Match Snapshot", () => {
    expect(render(<SevenStep {...props} />)).toMatchSnapshot();
  });

  it("Initial Render Component", () => {
    render(<SevenStep />);

    const title = screen.getByTestId("SevenStepTitleTestId");
    const image = screen.getByTestId("MfaExchangeSuccessImage");
    const subTitle = screen.getByTestId("SevenStepSubTitleTestId");
    const button = screen.getByTestId("SevenStepButtonTestId");

    expect(title).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("Should Click Button Continue and Call the Function handleClose", () => {
    render(<SevenStep {...props} />);

    const button = screen.getByTestId("SevenStepButtonTestId");

    fireEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(handleCloseMock).toHaveBeenCalled();
  });
});
