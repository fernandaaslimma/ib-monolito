import React from "react";
import { render, configure, screen } from "@testing-library/react";

import Maintenance from "./Maintenance";
configure({ testIdAttribute: "data-test" });
jest.mock("../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false
}));

describe("Maintenance component", () => {
  it("should match snapshot", () => {
    expect(render(<Maintenance />)).toMatchSnapshot();
  });
  it("should render attention icon", () => {
    render(<Maintenance />);
    const icon = screen.getByTestId("icon-attention");
    expect(icon.getAttribute("color")).toBe("#374654");
  });
});
