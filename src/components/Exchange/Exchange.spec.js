import React from "react";
import { shallow } from "enzyme";

import Exchange from "./Exchange";

jest.mock("../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false
}));

describe("Exchange component", () => {
  let getContractsMock;
  let resetSignLoadingMock;

  beforeEach(() => {
    getContractsMock = jest.fn();
    resetSignLoadingMock = jest.fn();
  });

  it("should has initial state", () => {
    const wrapper = shallow(
      <Exchange
        getContracts={getContractsMock}
        resetSignLoading={resetSignLoadingMock}
      />
    );
    expect(wrapper.state()).toEqual({ isEmpty: false, loading: true });
  });

  it("should match snapshot", () => {
    expect(
      shallow(
        <Exchange
          getContracts={getContractsMock}
          resetSignLoading={resetSignLoadingMock}
        />
      )
    ).toMatchSnapshot();
  });

  it("should trigger Contract getContracts once when mounting", () => {
    shallow(
      <Exchange
        getContracts={getContractsMock}
        resetSignLoading={resetSignLoadingMock}
      />
    );
    expect(getContractsMock).toHaveBeenCalledTimes(1);
  });

  it("should trigger resetSignLoading once when mounting", () => {
    shallow(
      <Exchange
        getContracts={getContractsMock}
        resetSignLoading={resetSignLoadingMock}
      />
    );

    expect(resetSignLoadingMock).toHaveBeenCalledTimes(1);
  });

  it("should render contract list if contracts Object is fullfiled", () => {
    const component = shallow(
      <Exchange
        contracts={[{ contractId: "otherthing" }]}
        resetSignLoading={resetSignLoadingMock}
        getContracts={getContractsMock}
      />
    );

    expect(component).toMatchSnapshot();
  });
});
