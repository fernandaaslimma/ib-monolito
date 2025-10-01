import React from "react";
import { configure, fireEvent, render, screen } from "@testing-library/react";
import Tabs from "./Tabs";
configure({ testIdAttribute: "data-test" });
const props = {
  selectedTab: 1,
  setSelectedTab: jest.fn(),
  backgroundColor: "#f7f8f9",
  widthTabs: 360
};

jest.mock("../../../utils/dom", () => ({ scrollToTop: jest.fn() }));
describe("Tabs component", () => {
  it("should match snapshot", () => {
    expect(
      render(
        <Tabs>
          <section title="title card 1">children 1</section>
          <section title="title card 2">children 2</section>
        </Tabs>
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot with props", () => {
    expect(
      render(
        <Tabs {...props}>
          <section title="title card 1">children 1</section>
          <section title="title card 2">children 2</section>
        </Tabs>
      )
    ).toMatchSnapshot();
  });
  it("should match snapshot with one child", () => {
    expect(
      render(
        <Tabs {...props}>
          <section title="title card 1">children 1</section>
        </Tabs>
      )
    ).toMatchSnapshot();
  });
  it("should click on title", () => {
    render(
      <Tabs {...props}>
        <section title="title card 1">children 1</section>
        <section title="title card 2">children 2</section>
      </Tabs>
    );
    const title1 = screen.getByTestId("title-1");
    fireEvent.click(title1);
    expect(props.setSelectedTab).toBeCalledWith(1);
  });
});
