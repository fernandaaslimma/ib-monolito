import * as React from "react";
import { screen, render, configure, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SixthStep from "./SixthStep";

configure({ testIdAttribute: "data-test" });

describe("SixthStep MFA Exchange Component", () => {
  function returnProps(
    changeCurrentScreen,
    authFactorResponse,
    activatedAuthFactor,
    activateAuthFactor,
    error,
    loading
  ) {
    return {
      changeCurrentScreen: changeCurrentScreen,
      authFactorResponse: authFactorResponse,
      activatedAuthFactor: activatedAuthFactor,
      activateAuthFactor: activateAuthFactor,
      error: error,
      loading: loading
    };
  }

  it("Should Match SnapShot When Error Message Not Visible", () => {
    const props = returnProps(jest.fn(), "", true, jest.fn(), null, false);
    expect(render(<SixthStep {...props} />)).toMatchSnapshot();
  });

  it("Should Match SnapShot When Error Message Visible", () => {
    const props = returnProps(
      jest.fn(),
      "authFactorResponseMock",
      null,
      jest.fn(),
      "UnitTestErrorMock",
      false
    );
    expect(render(<SixthStep {...props} />)).toMatchSnapshot();
  });

  it("Initial Render Component", () => {
    const changeFunc = jest.fn();
    const ActivateFunc = jest.fn();

    const props = returnProps(changeFunc, "", true, ActivateFunc, null, false);

    render(<SixthStep {...props} />);

    const title = screen.getByTestId("SixthStepTitleTestId");
    const image = screen.getByTestId("SixthStepImageTestId");
    const input = screen.getByTestId("InputSixthStepTestId");
    const button = screen.getByTestId("SixthStepButtonTestId");
    const errorMessage = screen.getByTestId("ErrorMessageSixthStep");

    expect(title).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).not.toBeVisible();
  });

  it("The Button Confirm Should Are Disable", () => {
    const changeFunc = jest.fn();
    const ActivateFunc = jest.fn();

    const props = returnProps(changeFunc, "", true, ActivateFunc, null, false);

    render(<SixthStep {...props} />);

    const button = screen.getByTestId("SixthStepButtonTestId");

    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it("The Button Confirm Should Are Enable", () => {
    const changeFunc = jest.fn();
    const ActivateFunc = jest.fn();

    const props = returnProps(changeFunc, "", true, ActivateFunc, null, false);

    render(<SixthStep {...props} />);

    const input = screen.getByTestId("InputSixthStepTestId");
    const button = screen.getByTestId("SixthStepButtonTestId");

    fireEvent.change(input, { target: { value: "InputTest" } });

    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
  });

  it("Should Continue OnClick Button Confirm When Activated is Valid", () => {
    const changeFunc = jest.fn();
    const ActivateFunc = jest.fn();

    const props = returnProps(changeFunc, "", true, ActivateFunc, null, false);

    render(<SixthStep {...props} />);

    const input = screen.getByTestId("InputSixthStepTestId");
    const button = screen.getByTestId("SixthStepButtonTestId");

    fireEvent.change(input, { target: { value: "InputTest" } });
    fireEvent.click(button);

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
    expect(changeFunc).toHaveBeenCalledWith(9);
    expect(props.activatedAuthFactor).toEqual(true);
  });

  it("Should Present Error OnClick Button Confirm When Activated is Invalid", () => {
    const changeFunc = jest.fn();
    const ActivateFunc = jest.fn();

    const props = returnProps(
      changeFunc,
      "authFactorResponseMock",
      null,
      ActivateFunc,
      "UnitTestErrorMock",
      false
    );

    render(<SixthStep {...props} />);

    const input = screen.getByTestId("InputSixthStepTestId");
    const button = screen.getByTestId("SixthStepButtonTestId");
    const errorMessage = screen.getByTestId("ErrorMessageSixthStep");

    fireEvent.change(input, { target: { value: "InputTest" } });
    fireEvent.click(button);

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();

    expect(changeFunc).not.toHaveBeenCalled();

    expect(ActivateFunc).toHaveBeenCalled();
    expect(props.activatedAuthFactor).toEqual(null);
    expect(props.error).toEqual("UnitTestErrorMock");
    expect(errorMessage).toBeVisible();
  });
});
