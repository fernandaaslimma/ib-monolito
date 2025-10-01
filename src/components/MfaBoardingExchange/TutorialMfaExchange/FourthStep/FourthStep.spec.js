import React from "react";
import { screen, render, fireEvent, configure } from "@testing-library/react";
import "@testing-library/jest-dom";
import FourthStep from "./FourthStep";

configure({ testIdAttribute: "data-test" });

const secret = "DHWVYRFCT3ABDXB5HGTHQJXZ6Q======";
const props = { changeCurrentScreen: jest.fn(), secretKey: secret };

describe("FourthStep MFA Exchange Component", () => {
  it("Should To Match SnapShot", () => {
    expect(render(<FourthStep {...props} />)).toMatchSnapshot();
  });

  it("Initial Render Component", () => {
    render(<FourthStep {...props} />);

    const title = screen.getByTestId("FourthStepTitleTestId");
    const spanToken = screen.getByTestId("FourthStepSpanTokenTestId");
    const text = screen.getByTestId("FourthStepTextTestId");
    const buttonChangeScrren = screen.getByTestId(
      "FourthStepButtonChangeTestId"
    );
    const buttonCopy = screen.getByTestId("FourthStepButtonCopyTestId");

    expect(title).toBeInTheDocument();
    expect(spanToken).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(buttonChangeScrren).toBeInTheDocument();
    expect(buttonCopy).toBeInTheDocument();
  });

  it("Should Click Button Continue and Call the Function changeCurrentScreen", () => {
    render(<FourthStep {...props} />);

    const buttonContinue = screen.getByTestId("FourthStepButtonChangeTestId");
    fireEvent.click(buttonContinue);

    expect(buttonContinue).toBeInTheDocument();
    expect(props.changeCurrentScreen).toHaveBeenCalledWith(7);
  });
});
