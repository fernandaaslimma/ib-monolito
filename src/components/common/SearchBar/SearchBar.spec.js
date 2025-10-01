import React from "react";
import {
  render,
  configure,
  screen,
  fireEvent,
  act
} from "@testing-library/react";
import SearchBar from "./SearchBar";

configure({ testIdAttribute: "data-test" });

const thisProps = {
  list: [
    {
      title: "Ana",
      subtitle: "Maria",
      description: "joao"
    },
    {
      title: "júnior",
      subtitle: "vitor",
      description: "heCtor"
    }
  ],
  dataTest: "-dataTest",
  typeInput: "text",
  maxLength: 40,
  placeholder: ""
};
const listOneParameter = {
  keysNameToMach: ["title"],
  ...thisProps
};
const listMultiplesParameters = {
  keysNameToMach: ["title", "subtitle", "description"],
  ...thisProps
};

describe("SearchBar component", () => {
  it("should match one parameter to search", () => {
    expect(render(<SearchBar {...listOneParameter} />)).toMatchSnapshot();
  });

  it("should match multiples parameters to search", () => {
    expect(
      render(<SearchBar {...listMultiplesParameters} />)
    ).toMatchSnapshot();
  });
  it("should change searchBar input", async () => {
    render(<SearchBar {...listMultiplesParameters} />);
    const input = screen.getByTestId("searchBar-dataTest");
    act(() => {
      const hasChanged = fireEvent.change(input, {
        target: { value: "testing" }
      });
      expect(hasChanged).toBeTruthy();
    });
  });
  it("should change searchBar input with blank", () => {
    render(<SearchBar {...listMultiplesParameters} />);
    const input = screen.getByTestId("searchBar-dataTest");
    expect(fireEvent.change(input, { target: { value: "" } })).toBeTruthy();
  });
  it("should click on iconClose", () => {
    render(<SearchBar {...listMultiplesParameters} />);
    const icon = screen.getByTestId("searchBarCleaner");
    expect(fireEvent.click(icon)).toBeTruthy();
  });
});
