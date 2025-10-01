import React from "react";
import { shallow } from "enzyme";
import Routes from "./Routes";
import "@testing-library/jest-dom";

const initStateIfEmptyMock = jest.fn();

jest.mock("../../utils/i18n", () => ({
  translate: id => id,
  withI18n: component => component,
  isZhCN: () => false,
  isPtBR: () => false
}));

describe("Routes component", () => {
  it("should match snapshot", () => {
    expect(
      shallow(<Routes initStateIfEmpty={initStateIfEmptyMock} />)
    ).toMatchSnapshot();
  });

  it("should invoke initStateIfEmpty", async () => {
    shallow(<Routes initStateIfEmpty={initStateIfEmptyMock} />);

    setTimeout(() => {
      expect(initStateIfEmptyMock).toHaveBeenCalled();
    }, 1000);
  });
});
