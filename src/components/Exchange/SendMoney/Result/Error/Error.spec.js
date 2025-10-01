import { configure, render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import Error from "./Error";

configure({ testIdAttribute: "data-test" });

describe("Result Error", () => {
  it("Should match snapshot", () => {
    expect(render(<Error />)).toMatchSnapshot();
  });

  it("Should render all fields", () => {
    render(<Error />);

    expect(screen.getByTestId("ErrorImage")).toBeInTheDocument();
    expect(screen.getByTestId("ErrorTitle")).toBeInTheDocument();
    expect(screen.getByTestId("ErrorMsg")).toBeInTheDocument();
  });
});
