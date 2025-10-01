import React from "react";
import { shallow } from "enzyme";

import TransactionsCard from "./TransactionsCard";

const formatTitle = jest.fn(() => "TEXTO");

const props = {
  key: 1,
  pickedActive: "Fundos",
  formatTitle,
  item: {
    date: "2020-12-02T12:33:54.271Z",
    assetName: "IBIUNA HEDGE ST FEEDER I FIC MULTIMERCADO",
    grossValue: "R$ 47.072,59",
    type: "APLICAÇÃO"
  }
};

describe("Statements Statements Cards", () => {
  it("should match snapshot today", () => {
    expect(shallow(<TransactionsCard {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot yesterday", () => {
    props.item.date = "2020-12-03T12:33:54.271Z";
    expect(shallow(<TransactionsCard {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot some day", () => {
    props.item.date = "2020-12-04T12:33:54.271Z";
    expect(shallow(<TransactionsCard {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot with last year", () => {
    props.item.date = "2019-12-04T12:33:54.271Z";
    expect(shallow(<TransactionsCard {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot cwith title fixed income", () => {
    props.pickedActive = "Renda Fixa";
    expect(shallow(<TransactionsCard {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot with title equity income", () => {
    props.pickedActive = "Renda Variável";
    expect(shallow(<TransactionsCard {...props} />)).toMatchSnapshot();
  });
});
