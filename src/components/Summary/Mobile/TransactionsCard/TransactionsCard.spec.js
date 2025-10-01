import React from "react";
import { shallow } from "enzyme";

import TransactionsCard from "./TransactionsCard";

const transactions = [
  {
    date: "2017-01-01",
    grossValue: 123.123,
    type: "Ativo",
    assetName: "LCI"
  }
];

describe("TransactionsCard component", () => {
  it("should match snapshot", () => {
    expect(
      shallow(<TransactionsCard transactions={transactions} />)
    ).toMatchSnapshot();
  });
});
