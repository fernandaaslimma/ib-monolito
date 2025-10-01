import React from "react";
import { shallow } from "enzyme";

import Desktop from "./Desktop";

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

let onChangePage;
let onFilter;
const activePage = 1;

describe("Fixed Income Transactions component", () => {
  beforeEach(() => {
    onChangePage = jest.fn();
    onFilter = jest.fn();
  });

  it("should match snapshot with loading", () => {
    expect(
      shallow(
        <Desktop
          fixedIncomeTransactions={fixedIncomeTransactions}
          loading
          onChangePage={onChangePage}
          onFilter={onFilter}
          activePage={activePage}
          filter={filter}
        />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot without Fixed Income Transactions", () => {
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
          fixedIncomeTransactions={fixedIncomeTransactions}
          filter={filter}
          onFilter={onFilter}
          onChangePage={onChangePage}
          activePage={activePage}
        />
      )
    ).toMatchSnapshot();
  });
});
