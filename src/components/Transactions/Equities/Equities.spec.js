import React from "react";
import { shallow } from "enzyme";

import Equities from "./Equities";

jest.mock("../../../utils/pagination");

const fetchDataForFilterMock = require("../../../utils/pagination").default;

const equityIncomeTransactions = [
  {
    assetName: "PORD11 CI",
    type: "COMPRA",
    date: "2016-03-29",
    grossValue: 141504,
    netValue: 141504
  }
];

const filter = {
  from: "2010/01/01",
  range: {
    from: "",
    to: ""
  },
  selectedOption: "",
  currentRoute: ""
};

describe("Equities Transactions component", () => {
  let getEquityIncomeTransactionsMock;

  beforeEach(() => {
    getEquityIncomeTransactionsMock = jest.fn();
  });

  it("should have an initial state", () => {
    const component = shallow(
      <Equities
        getEquityIncomeTransactions={getEquityIncomeTransactionsMock}
        filter={filter}
        equityIncomeTransactions={equityIncomeTransactions}
        loading
      />
    );
    expect(component.instance().state).toEqual({
      isEmpty: false,
      activePage: 1
    });
  });

  it("should match snapshot with loading", () => {
    expect(
      shallow(
        <Equities
          getEquityIncomeTransactions={getEquityIncomeTransactionsMock}
          equityIncomeTransactions={equityIncomeTransactions}
          filter={filter}
          loading
        />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot without equities Transactions", () => {
    expect(
      shallow(
        <Equities
          filter={filter}
          getEquityIncomeTransactions={getEquityIncomeTransactionsMock}
        />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot with equities Transactions", () => {
    expect(
      shallow(
        <Equities
          getEquityIncomeTransactions={getEquityIncomeTransactionsMock}
          filter={filter}
          equityIncomeTransactions={equityIncomeTransactions}
        />
      )
    ).toMatchSnapshot();
  });

  it("should invoke getEquityIncomeTransactions", () => {
    shallow(
      <Equities
        getEquityIncomeTransactions={getEquityIncomeTransactionsMock}
        equityIncomeTransactions={equityIncomeTransactions}
        filter={filter}
      />
    );
    expect(getEquityIncomeTransactionsMock).toHaveBeenCalledTimes(1);
  });

  describe("onChangePage", () => {
    it("should invoke fetchDataForFilter", () => {
      const filter = {
        from: "2010/01/01"
      };

      const activePage = 3;

      const instance = shallow(
        <Equities
          getEquityIncomeTransactions={getEquityIncomeTransactionsMock}
          equityIncomeTransactions={equityIncomeTransactions}
          filter={filter}
        />
      ).instance();

      instance.onChangePage(activePage);

      expect(fetchDataForFilterMock).toHaveBeenCalledWith(
        getEquityIncomeTransactionsMock,
        filter,
        activePage,
        10
      );
    });
  });

  describe("onFilter", () => {
    it("should update the state", () => {
      const instance = shallow(
        <Equities
          getEquityIncomeTransactions={getEquityIncomeTransactionsMock}
          equityIncomeTransactions={equityIncomeTransactions}
          filter={filter}
        />
      ).instance();

      instance.setState({ activePage: 5 });

      instance.onFilter(filter.from);

      expect(instance.state.activePage).toBe(1);
    });

    it("should invoke getEquitiesTransactions", () => {
      const instance = shallow(
        <Equities
          getEquityIncomeTransactions={getEquityIncomeTransactionsMock}
          equityIncomeTransactions={equityIncomeTransactions}
          filter={filter}
        />
      ).instance();

      instance.onFilter(filter.from);

      expect(getEquityIncomeTransactionsMock).toHaveBeenCalledWith();
    });
  });
});
