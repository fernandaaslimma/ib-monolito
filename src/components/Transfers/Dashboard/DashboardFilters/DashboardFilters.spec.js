import React from "react";
import { render, configure } from "@testing-library/react";
import DashboardFilters from "./DashboardFilters";
configure({ testIdAttribute: "data-test" });

let props = {
  onFilter: jest.fn(),
  defaultFilter: {}
};
describe("DashboardFilters", () => {
  it("should match snapshot", () => {
    const component = render(<DashboardFilters {...props} />);
    expect(component).toMatchSnapshot();
  });
  it("should match snapshot with filter type = history", () => {
    props.defaultFilter = {
      type: "history",
      range: 20
    };
    const component = render(<DashboardFilters {...props} />);
    expect(component).toMatchSnapshot();
  });
});
