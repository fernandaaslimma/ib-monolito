import React from "react";
import { shallow } from "enzyme";
import { translate } from "../../../utils/i18n";

import AssetTable from "./AssetTable";

jest.mock("../../../utils/i18n", () => ({
  translate: id => id,
  getDateFieldPlaceholderByLocale: () => "MM/DD/YYYY",
  getLanguage: () => {},
  isZhCN: () => false
}));

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

const equityIncomeTransactions = [
  {
    assetName: "PORD11 CI",
    type: "COMPRA",
    date: "2016-03-29",
    grossValue: 141504,
    netValue: 141504
  }
];

describe("AssetTable component", () => {
  it("should match snapshot with fixed income", () => {
    expect(
      shallow(
        <AssetTable
          title={translate("FIXED_INCOME")}
          transactions={fixedIncomeTransactions}
          styleName
        />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot with funds", () => {
    expect(
      shallow(
        <AssetTable
          title={translate("FUNDS")}
          transactions={fundsIncomeTransactions}
        />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot with equities", () => {
    expect(
      shallow(
        <AssetTable
          title={translate("EQUITY")}
          transactions={equityIncomeTransactions}
          isEquity
        />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot with shimmerLoading", () => {
    expect(
      shallow(
        <AssetTable
          title={translate("EQUITY")}
          transactions={equityIncomeTransactions}
          shimmerLoading={{ rows: 10, loading: true }}
        />
      )
    ).toMatchSnapshot();
  });
});
