import React from "react";
import { shallow } from "enzyme";

import TransactionsTable from "./TransactionsTable";

const transactions = [
  {
    date: "2017-01-01",
    grossValue: 123.123,
    type: "Ativo",
    assetName: "LCI"
  }
];

describe("TransactionsTable component", () => {
  it("should match snapshot", () => {
    expect(
      shallow(<TransactionsTable transactions={transactions} />)
    ).toMatchSnapshot();
  });
});
