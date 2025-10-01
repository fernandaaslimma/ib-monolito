import React from "react";
import { shallow } from "enzyme";

import Funds from "./Funds";

jest.mock("../../../utils/pagination");

const fetchDataForFilterMock = require("../../../utils/pagination").default;

const fundsIncomeTransactions = [
  {
    assetName: "BAHIA AM FI REFERENCIADO DI",
    type: "APLICAÇÃO",
    date: "2016-05-05",
    grossValue: 13526.47,
    netValue: 13526.47,
    incomeTax: 0,
    iof: 0
  },
  {
    assetName: "BAHIA AM FI REFERENCIADO DI",
    type: "RESGATE PARA PAG. DE IR",
    date: "2016-05-31",
    grossValue: -15.34,
    netValue: 0,
    incomeTax: 15.34,
    iof: 0
  },
  {
    assetName: "BAHIA AM FI REFERENCIADO DI",
    type: "RESGATE PARA PAG. DE IR",
    date: "2016-05-31",
    grossValue: -286.47,
    netValue: 0,
    incomeTax: 286.47,
    iof: 0
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

describe("Funds Transactions component", () => {
  let getFundsIncomeTransactionsMock;

  beforeEach(() => {
    getFundsIncomeTransactionsMock = jest.fn();
  });

  it("should have an initial state", () => {
    const component = shallow(
      <Funds
        getFundsIncomeTransactions={getFundsIncomeTransactionsMock}
        fundsIncomeTransactions={fundsIncomeTransactions}
        loading
        filter={filter}
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
        <Funds
          getFundsIncomeTransactions={getFundsIncomeTransactionsMock}
          fundsIncomeTransactions={fundsIncomeTransactions}
          loading
          filter={filter}
        />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot without funds Transactions", () => {
    expect(
      shallow(
        <Funds
          getFundsIncomeTransactions={getFundsIncomeTransactionsMock}
          filter={filter}
        />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot", () => {
    expect(
      shallow(
        <Funds
          getFundsIncomeTransactions={getFundsIncomeTransactionsMock}
          fundsIncomeTransactions={fundsIncomeTransactions}
          filter={filter}
        />
      )
    ).toMatchSnapshot();
  });

  it("should invoke getFundsIncomeTransactions", () => {
    shallow(
      <Funds
        getFundsIncomeTransactions={getFundsIncomeTransactionsMock}
        fundsIncomeTransactions={fundsIncomeTransactions}
        filter={filter}
      />
    );
    expect(getFundsIncomeTransactionsMock).toHaveBeenCalledTimes(1);
  });

  describe("onChangePage", () => {
    it("should invoke fetchDataForFilter", () => {
      const filter = {
        from: "2010/01/01"
      };

      const activePage = 3;

      const instance = shallow(
        <Funds
          getFundsIncomeTransactions={getFundsIncomeTransactionsMock}
          fundsIncomeTransactions={fundsIncomeTransactions}
          filter={filter}
        />
      ).instance();

      instance.onChangePage(activePage);

      expect(fetchDataForFilterMock).toHaveBeenCalledWith(
        getFundsIncomeTransactionsMock,
        filter,
        activePage,
        10
      );
    });
  });

  describe("onFilter", () => {
    it("should update the state", () => {
      const instance = shallow(
        <Funds
          getFundsIncomeTransactions={getFundsIncomeTransactionsMock}
          fundsIncomeTransactions={fundsIncomeTransactions}
          filter={filter}
        />
      ).instance();

      instance.setState({ activePage: 5 });

      instance.onFilter(filter.from);

      expect(instance.state.activePage).toBe(1);
    });

    it("should invoke getFundsTransactions", () => {
      const instance = shallow(
        <Funds
          getFundsIncomeTransactions={getFundsIncomeTransactionsMock}
          fundsIncomeTransactions={fundsIncomeTransactions}
          filter={filter}
        />
      ).instance();

      instance.onFilter(filter.from);

      expect(getFundsIncomeTransactionsMock).toHaveBeenCalledWith();
    });
  });
});
