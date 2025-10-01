import { configure, fireEvent, render } from "@testing-library/react";
import React from "react";
import ListItem from "./ListItem";

configure({ testIdAttribute: "data-test" });

describe("List Item", () => {
  const props = {
    date: "Seg, 13 de Nov",
    title: "Beneficiário do câmbio",
    subTitle: "Breno Pacheco",
    label: "Valor pago",
    info: "R$ 59.628,02",
    secondLabel: "Valor convertido",
    secondInfo: "USD 13.250,67",
    stepForward: jest.fn()
  };

  it("Should render all fields", () => {
    const { getByTestId, getByText } = render(<ListItem {...props} />);
    expect(getByTestId("container")).toBeTruthy();
    expect(getByTestId("date")).toBeTruthy();
    expect(getByTestId("card")).toBeTruthy();
    expect(getByTestId("title")).toBeTruthy();
    expect(getByTestId("subtitle")).toBeTruthy();
    expect(getByTestId("icon")).toBeTruthy();
    expect(getByTestId("label")).toBeTruthy();
    expect(getByTestId("info")).toBeTruthy();
    expect(getByTestId("secondLabel")).toBeTruthy();
    expect(getByTestId("secondInfo")).toBeTruthy();

    expect(getByText("Seg, 13 de Nov")).toBeTruthy();
    expect(getByText("Beneficiário do câmbio")).toBeTruthy();
    expect(getByText("Breno Pacheco")).toBeTruthy();
    expect(getByText("Valor pago")).toBeTruthy();
    expect(getByText("R$ 59.628,02")).toBeTruthy();
    expect(getByText("Valor convertido")).toBeTruthy();
    expect(getByText("USD 13.250,67")).toBeTruthy();
  });

  it("should call stepForward when the card got tapped", () => {
    const { getByTestId } = render(<ListItem {...props} />);

    const card = getByTestId("card");
    fireEvent.click(card);

    expect(props.stepForward).toHaveBeenCalled();
  });
});
