import React from "react";
import { shallow } from "enzyme";
import Mobile from "./Mobile";

jest.mock("../../../../utils/i18n", () => ({
  translate: id => id,
  getDateFieldPlaceholderByLocale: () => "MM/DD/YYYY",
  getLanguage: () => {},
  isZhCN: () => false
}));

const equityIncomeTransactions = [
  {
    assetType: "Equity",
    assetTypeLabel: "Equity",
    assetName: "BBDC4 PN",
    type: "PURCHASE",
    date: "2018-04-02",
    grossValue: 123,
    netValue: 123
  }
];

const totalFunds = [
  {
    assetType: "Funds",
    assetTypeLabel: "Funds",
    date: "2018-05-04",
    grossBalance: 2135703.08,
    grossResultBalance: 457501.11,
    incomeTaxBalance: 32033.33,
    iofBalance: 0,
    netBalance: 2103669.75,
    portfolioShare: 66.52
  }
];

const activePage = 1;
const onChangePage = jest.fn();
const onFilter = jest.fn();

describe("Mobile component", () => {
  it("should match snapshot", () => {
    expect(
      shallow(
        <Mobile
          equityIncomeTransactions={equityIncomeTransactions}
          totalFunds={totalFunds}
          activePage={activePage}
          onChangePage={onChangePage}
          onFilter={onFilter}
        />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot with loading", () => {
    expect(
      shallow(
        <Mobile
          equityIncomeTransactions={equityIncomeTransactions}
          totalFunds={totalFunds}
          activePage={activePage}
          onChangePage={onChangePage}
          onFilter={onFilter}
          loading
        />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot with isEmpty", () => {
    expect(
      shallow(
        <Mobile
          equityIncomeTransactions={equityIncomeTransactions}
          totalFunds={totalFunds}
          activePage={activePage}
          onChangePage={onChangePage}
          onFilter={onFilter}
          isEmpty
        />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot with loading and isEmpty", () => {
    expect(
      shallow(
        <Mobile
          equityIncomeTransactions={equityIncomeTransactions}
          totalFunds={totalFunds}
          activePage={activePage}
          onChangePage={onChangePage}
          onFilter={onFilter}
          isEmpty
          loading
        />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot with icon component", () => {
    const wrapper = shallow(
      <Mobile
        equityIncomeTransactions={equityIncomeTransactions}
        totalFunds={totalFunds}
        activePage={activePage}
        onChangePage={onChangePage}
        onFilter={onFilter}
        isEmpty
      />
    );
    expect(
      shallow(wrapper.find("DefaultContent").prop("Icon")())
    ).toMatchSnapshot();
  });
});
