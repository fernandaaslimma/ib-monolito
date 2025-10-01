import { configure, fireEvent, render } from "@testing-library/react";
import React from "react";
import FooterButtons from "./FooterButtons";

configure({ testIdAttribute: "data-test" });

describe("Footer Buttons", () => {
  const props = {
    firstButton: "Voltar",
    onClickFirst: jest.fn(),
    secondButton: "Continuar",
    onClickSecond: jest.fn(),
    showButtons: true
  };

  it("Should render all fields when showButton to be true", () => {
    const { getByTestId, getByText } = render(<FooterButtons {...props} />);
    expect(getByTestId("container")).toBeTruthy();
    expect(getByTestId("firstButton")).toBeTruthy();
    expect(getByTestId("secondButton")).toBeTruthy();

    expect(getByText("Voltar")).toBeTruthy();
    expect(getByText("Continuar")).toBeTruthy();
  });

  it("Should not render any field when showButton to be false", () => {
    const { queryByTestId, queryByText } = render(
      <FooterButtons {...props} showButtons={false} />
    );
    expect(queryByTestId("container")).toBeFalsy();
    expect(queryByTestId("firstButton")).toBeFalsy();
    expect(queryByTestId("secondButton")).toBeFalsy();

    expect(queryByText("Voltar")).toBeFalsy();
    expect(queryByText("Continuar")).toBeFalsy();
  });

  it("should call onClickFirst when the firstButton got tapped", () => {
    const { getByTestId } = render(<FooterButtons {...props} />);

    const firstButton = getByTestId("firstButton");
    fireEvent.click(firstButton);

    expect(props.onClickFirst).toHaveBeenCalled();
  });

  it("should call onClickSecond when the secondButton got tapped", () => {
    const { getByTestId } = render(<FooterButtons {...props} />);

    const secondButton = getByTestId("secondButton");
    fireEvent.click(secondButton);

    expect(props.onClickSecond).toHaveBeenCalled();
  });
});
