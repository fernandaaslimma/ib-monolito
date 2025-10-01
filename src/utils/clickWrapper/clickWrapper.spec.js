import React from "react";
import { fireEvent, render, screen, configure } from "@testing-library/react";
import ClickWrapper from "./clickWrapper";
configure({ testIdAttribute: "data-test" });

describe("clickWrapper", () => {
  it("should match component", () => {
    const component = render(
      <ClickWrapper>
        <button data-test="button1" />
      </ClickWrapper>
    );
    expect(component).toMatchSnapshot();
  });
  it("should click on children", () => {
    const component = render(
      <ClickWrapper>
        <button
          data-test="button1"
          onClick={() => {
            // console.log("clicou");
          }}
        />
      </ClickWrapper>
    );
    const button = screen.getByTestId("button1");
    fireEvent.click(button);
    expect(component).toMatchSnapshot();
  });
  it("should render without errors", () => {
    render(<ClickWrapper />);
  });
});
