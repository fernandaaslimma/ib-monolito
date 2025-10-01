import React from "react";
import { shallow } from "enzyme";

import FixedIncome from "./FixedIncome";

jest.mock("../../../utils/pagination");

const fetchDataForFilterMock = require("../../../utils/pagination").default;

const fixedIncomeTransactions = [
  {
    assetName: "COMPROMISSADA",
    type: "COMPRA",
    date: "2016-05-02",
    grossValue: 87570.15,
    netValue: 87570.15,
    incomeTax: 0,
    iof: 0
  },
  {
    assetName: "COMPROMISSADA",
    type: "RESGATE ANTECIPADO",
    date: "2016-05-11",
    grossValue: -87876.11,
    netValue: -87807.27,
    incomeTax: 68.84,
    iof: 0
  },
  {
    assetName: "LCA - Pós",
    type: "VENCIMENTO",
    date: "2017-03-02",
    grossValue: -19984.22,
    netValue: -19984.22,
    incomeTax: 0,
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

describe("FixedIncome Transactions component", () => {
  let getFixedIncomeTransactionsMock;

  beforeEach(() => {
    getFixedIncomeTransactionsMock = jest.fn();
  });

  it("should have an initial state", () => {
    const component = shallow(
      <FixedIncome
        getFixedIncomeTransactions={getFixedIncomeTransactionsMock}
        fixedIncomeTransactions={fixedIncomeTransactions}
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
        <FixedIncome
          getFixedIncomeTransactions={getFixedIncomeTransactionsMock}
          fixedIncomeTransactions={fixedIncomeTransactions}
          loading
          filter={filter}
        />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot without fixed Transactions", () => {
    expect(
      shallow(
        <FixedIncome
          getFixedIncomeTransactions={getFixedIncomeTransactionsMock}
          loading={false}
          filter={filter}
        />
      )
    ).toMatchSnapshot();
  });

  it("should match with fixed Transactions", () => {
    expect(
      shallow(
        <FixedIncome
          getFixedIncomeTransactions={getFixedIncomeTransactionsMock}
          fixedIncomeTransactions={fixedIncomeTransactions}
          filter={filter}
        />
      )
    ).toMatchSnapshot();
  });

  it("should invoke getFixedIncomeTransactions", () => {
    shallow(
      <FixedIncome
        getFixedIncomeTransactions={getFixedIncomeTransactionsMock}
        fixedIncomeTransactions={fixedIncomeTransactions}
        filter={filter}
      />
    );
    expect(getFixedIncomeTransactionsMock).toHaveBeenCalledTimes(1);
  });

  describe("onChangePage", () => {
    it("should invoke fetchDataForFilter", () => {
      const filter = {
        from: "2010/01/01"
      };

      const activePage = 3;

      const instance = shallow(
        <FixedIncome
          getFixedIncomeTransactions={getFixedIncomeTransactionsMock}
          fixedIncomeTransactions={fixedIncomeTransactions}
          filter={filter}
        />
      ).instance();

      instance.onChangePage(activePage);

      expect(fetchDataForFilterMock).toHaveBeenCalledWith(
        getFixedIncomeTransactionsMock,
        filter,
        activePage,
        10
      );
    });
  });

  describe("onFilter", () => {
    it("should update the state", () => {
      const instance = shallow(
        <FixedIncome
          getFixedIncomeTransactions={getFixedIncomeTransactionsMock}
          fixedIncomeTransactions={fixedIncomeTransactions}
          filter={filter}
        />
      ).instance();

      instance.setState({ activePage: 5 });

      instance.onFilter(filter.from);

      expect(instance.state.activePage).toBe(1);
    });

    it("should invoke getFixedIncomeTransactions", () => {
      const instance = shallow(
        <FixedIncome
          getFixedIncomeTransactions={getFixedIncomeTransactionsMock}
          fixedIncomeTransactions={fixedIncomeTransactions}
          filter={filter}
        />
      ).instance();

      instance.onFilter(filter.from);

      expect(getFixedIncomeTransactionsMock).toHaveBeenCalledWith();
    });
  });
});
