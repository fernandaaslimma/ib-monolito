import React from "react";
import { render, screen, configure, fireEvent } from "@testing-library/react";
import CardWithDetails from "./index";
configure({ testIdAttribute: "data-test" });
let props = {
  children: "mock",
  title: "mock-title",
  icon: {
    type: "type-mock"
  },
  dataTest: "data-test-mock"
};
describe("CardWithDetails", () => {
  it("should match snapshot", () => {
    expect(render(<CardWithDetails {...props} />));
  });
  it("should show title", () => {
    render(<CardWithDetails {...props} />);
    expect(screen.getByTestId("productName").firstChild.textContent).toBe(
      "mock-title"
    );
  });
  it("should click on card", () => {
    render(<CardWithDetails {...props} />);
    const card = screen.getByTestId(props.dataTest);
    expect(fireEvent.click(card)).toBeTruthy();
  });
  it("should click on wrapperCard", () => {
    render(<CardWithDetails {...props} />);
    const card = screen.getByTestId("wrapperCard");
    expect(fireEvent.click(card)).toBeTruthy();
  });
  it("should click on card and expand", async () => {
    render(<CardWithDetails {...props} />);
    const card = screen.getByTestId("wrapperCard");
    await fireEvent.click(card);
    const expandedCard = screen.getByTestId("wrapperSubCard");
    expect(expandedCard).toBeTruthy();
  });
});
