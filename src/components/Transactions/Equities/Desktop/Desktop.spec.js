import React from "react";
import { shallow } from "enzyme";

import Desktop from "./Desktop";

const equityIncomeTransactions = [
  {
    assetName: "BAHIA AM FI REFERENCIADO DI",
    type: "APLICAÇÃO",
    date: "2016-05-05",
    grossValue: 13526.47,
    netValue: 13526.47
  },
  {
    assetName: "BAHIA AM FI REFERENCIADO DI",
    type: "RESGATE PARA PAG. DE IR",
    date: "2016-05-31",
    grossValue: -15.34,
    netValue: 0
  },
  {
    assetName: "BAHIA AM FI REFERENCIADO DI",
    type: "RESGATE PARA PAG. DE IR",
    date: "2016-05-31",
    grossValue: -286.47,
    netValue: 0
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

let onChangePage;
let onFilter;
const activePage = 1;

describe("Desktop component", () => {
  beforeEach(() => {
    onChangePage = jest.fn();
    onFilter = jest.fn();
  });

  it("should match snapshot with loading", () => {
    expect(
      shallow(
        <Desktop
          fundsIncomeTransactions={equityIncomeTransactions}
          loading
          onChangePage={onChangePage}
          onFilter={onFilter}
          activePage={activePage}
          filter={filter}
        />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot without equity Transactions", () => {
    expect(
      shallow(
        <Desktop
          filter={filter}
          onFilter={onFilter}
          onChangePage={onChangePage}
          activePage={activePage}
        />
      )
    ).toMatchSnapshot();
  });

  it("should call icon component", () => {
    const wrapper = shallow(
      <Desktop
        filter={filter}
        onFilter={onFilter}
        onChangePage={onChangePage}
        activePage={activePage}
        isEmpty={true}
      />
    );
    expect(
      shallow(wrapper.find("DefaultContent").prop("Icon")())
    ).toMatchSnapshot();
  });

  it("should match snapshot with empty page state", () => {
    expect(
      shallow(
        <Desktop
          filter={filter}
          onFilter={onFilter}
          onChangePage={onChangePage}
          activePage={activePage}
          isEmpty={true}
        />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot", () => {
    expect(
      shallow(
        <Desktop
          fundsIncomeTransactions={equityIncomeTransactions}
          filter={filter}
          onFilter={onFilter}
          onChangePage={onChangePage}
          activePage={activePage}
        />
      )
    ).toMatchSnapshot();
  });
});
