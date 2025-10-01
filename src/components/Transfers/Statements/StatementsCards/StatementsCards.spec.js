import React from "react";
import { shallow } from "enzyme";

import StatementsCards from "./StatementsCards";

//const onClickInBack = jest.fn(e => e);

const futureEventsHistoryMock = [
  {
    availableAmount: 0,
    blockedAmount: 0,
    totalAmount: -3981.89,
    date: "2021-03-25",
    events: [
      {
        absAmount: 12.42,
        amount: -12.42,
        date: "2021-03-25",
        description: "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
        type: "Débito",
        settled: false,
        id: 12435901
      }
    ]
  },
  {
    availableAmount: 0,
    blockedAmount: 1912.13,
    totalAmount: -3957.05,
    date: "2021-03-24",
    events: [
      {
        absAmount: 1912.13,
        amount: -1912.13,
        date: "2021-03-24",
        description: "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
        type: "Débito",
        settled: false,
        id: 12435889
      },
      {
        absAmount: 12.38,
        amount: -12.38,
        date: "2021-03-24",
        description: "TRANSFERENCIA ENTRE CONTAS DE DIFERENTES TITULARIDADES",
        type: "Débito",
        settled: false,
        id: 12435897
      },
      {
        absAmount: 120.41,
        amount: -120.41,
        date: "2021-03-24",
        description: "TRANSFERENCIA ENTRE CONTAS DE MESMA TITULARIDADE",
        type: "Débito",
        settled: false,
        id: 12435899
      }
    ]
  }
];

describe("Pending transactions ", () => {
  it("should match snapshot mobile", () => {
    const props = {
      list: futureEventsHistoryMock,
      withDayBalance: true
    };
    expect(shallow(<StatementsCards {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot mobile without balance", () => {
    const props = {
      list: futureEventsHistoryMock,
      withDayBalance: false
    };
    expect(shallow(<StatementsCards {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot desktop", () => {
    const props = {
      list: futureEventsHistoryMock,
      mode: "desktop"
    };
    expect(shallow(<StatementsCards {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot desktop without balance", () => {
    const props = {
      list: futureEventsHistoryMock,
      withDayBalance: true,
      mode: "desktop"
    };
    expect(shallow(<StatementsCards {...props} />)).toMatchSnapshot();
  });
});
