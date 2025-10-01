import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import DefaultContent from "./DefaultContent";
import { black30 } from "../../../styles/settings";
import Icon from "../Icon";

const props = {
  Icon: () => <Icon type="Attention" color={black30} />, // eslint-disable-line
  primaryText: "primary text",
  secondaryTexts: ["text", "more text"],
  customizedMessage: "customized text"
};

describe("DefaultContent component", () => {
  it("Renders with the primary text", () => {
    const text = "primary text";
    const { getByText } = render(<DefaultContent {...props} />);

    expect(getByText(text)).toBeInTheDocument();
  });

  it("Renders with the secondary texts", () => {
    const text_1 = "text";
    const text_2 = "more text";

    const { getByText } = render(<DefaultContent {...props} />);

    expect(getByText(text_1)).toBeInTheDocument();
    expect(getByText(text_2)).toBeInTheDocument();
  });

  it("Renders with the customized text", () => {
    const text = "customized text";
    const { getByText } = render(<DefaultContent {...props} />);

    expect(getByText(text)).toBeInTheDocument();
  });
});
