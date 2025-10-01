import { configure, render } from "@testing-library/react";
import React from "react";
import MessageBox from "./MessageBox";

configure({ testIdAttribute: "data-test" });

describe("Message Box", () => {
  const props = {
    message: 'Mensagem de teste'
  };

  const emptyProps = {
    message: ''
  };

  it("Should render the message and the icon", () => {
    const { getByTestId } = render(<MessageBox {...props} />);
    expect(getByTestId("messageBox")).toBeTruthy();
    expect(getByTestId("messageIcon")).toBeTruthy();
    expect(getByTestId("message")).toBeTruthy();
  });

  it("Should not render the message", () => {
    const { getByTestId, queryByTestId } = render(<MessageBox {...emptyProps} />);
    expect(getByTestId("messageBox")).toBeTruthy();
    expect(getByTestId("messageIcon")).toBeTruthy();
    expect(queryByTestId("message")).toBeFalsy();
  });

});
