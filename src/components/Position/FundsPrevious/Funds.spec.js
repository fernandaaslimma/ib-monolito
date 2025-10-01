import React from "react";
import { shallow } from "enzyme";

import Funds from "./Funds";

jest.mock("../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => {},
  isZhCN: () => false
}));

const funds = [
  {
    name: "name",
    date: "12/12",
    investmentDate: "12/12",
    iofBalance: 0,
    grossResultBalance: 123,
    grossBalance: 123,
    incomeTaxBalance: 1,
    portfolioShare: 123
  }
];

describe("Funds component", () => {
  let getFundsMock;
  let getTotalFundsMock;

  beforeEach(() => {
    getFundsMock = jest.fn();
    getTotalFundsMock = jest.fn();
  });

  it("should have an initial state", () => {
    const component = shallow(
      <Funds getFunds={getFundsMock} getTotalFunds={getTotalFundsMock} />
    );
    expect(component.instance().state).toEqual({
      isEmpty: false
    });
  });

  it("should match snapshot with loading", () => {
    expect(
      shallow(
        <Funds
          getFunds={getFundsMock}
          getTotalFunds={getTotalFundsMock}
          loading={true}
        />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot without accounts", () => {
    expect(
      shallow(
        <Funds
          getFunds={getFundsMock}
          getTotalFunds={getTotalFundsMock}
          loading={false}
        />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot with accounts", () => {
    expect(
      shallow(
        <Funds
          getFunds={getFundsMock}
          getTotalFunds={getTotalFundsMock}
          funds={funds}
          loading={false}
        />
      )
    ).toMatchSnapshot();
  });

  it("should invoke getFunds", () => {
    shallow(
      <Funds
        getFunds={getFundsMock}
        getTotalFunds={getTotalFundsMock}
        funds={funds}
        loading={false}
      />
    );
    expect(getFundsMock).toHaveBeenCalledTimes(1);
  });

  it("should invoke getTotalFunds", () => {
    shallow(
      <Funds
        getFunds={getFundsMock}
        getTotalFunds={getTotalFundsMock}
        funds={funds}
        loading={false}
      />
    );
    expect(getTotalFundsMock).toHaveBeenCalledTimes(1);
  });
});
