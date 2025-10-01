import { configure, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Summary from "./Summary";
import { InstanceContext } from "../sendMoneyContext";
import "@testing-library/jest-dom";

jest.mock("../../../../utils/i18n", () => ({
  translate: id => id,
  getDateFieldPlaceholderByLocale: () => "MM/DD/YYYY",
  getLanguage: () => "en-US",
  isZhCN: () => false
}));

configure({ testIdAttribute: "data-test" });

const props = {
  stepBack: jest.fn(),
  stepForward: jest.fn()
};

const registerExchangeOperationFun = jest.fn();

const context = {
  exchangeData: {
    selectedOperationNature: "Disponibilidade para o exterior",
    favored: {
      name: "Maria Lima",
      account: {
        number: "303030",
        bank: {
          name: "Bocom BBM",
          swift: "BBINBRRJXXX",
          intermediary: {
            number: "4555",
            bank: {
              name: "Banco Intermediario",
              swift: "BINTBRRJXXX"
            }
          }
        }
      }
    },
    selectedAccount: {
      bankCode: "107",
      branch: 2,
      holderId: 20155,
      number: 6455
    },
    transactionValues: {
      origin: {
        amount: 243.5,
        currency: "BRL",
        total: 40251.10207,
        settleDate: "d+0"
      },
      target: {
        amount: 50000,
        currency: "USD",
        total: 50000,
        settleDate: "d+2"
      },
      type: "sell",
      totalEffectiveRate: 5.0220414,
      currencyRate: {
        currencyRateId: 2,
        currencyRateValue: 4.96
      },
      fees: [
        {
          type: "IOF",
          rate: 1.1,
          amount: 2.6785
        },
        {
          type: "spread",
          rate: 2,
          amount: 4.92357
        }
      ]
    }
  },
  registerExchangeOperation: registerExchangeOperationFun,
  transactionId: "db024e03-bbf2-4127-8a72-d18ce387e8cd",
  availableDateRanges: {
    endTime: "1704394800000"
  },
  serverTime: "1704294000000"
};

describe("Summary", () => {
  it("Should Initial Load All Itens", () => {
    expect(
      render(
        <InstanceContext.Provider value={context}>
          <Summary {...props} />
        </InstanceContext.Provider>
      )
    ).toMatchSnapshot();
  });

  it("Should Initial Load When selectedOperationNature Not Exist", () => {
    const contextTestTwo = {
      exchangeData: {
        favored: {
          name: "MockNameTest",
          account: {
            number: "",
            bank: {
              name: "",
              swift: ""
            }
          }
        },
        selectedAccount: {
          bankCode: "",
          branch: "",
          holderId: "",
          number: ""
        }
      }
    };

    expect(
      render(
        <InstanceContext.Provider value={contextTestTwo}>
          <Summary {...props} />
        </InstanceContext.Provider>
      )
    ).toMatchSnapshot();

    expect(
      screen.queryByTestId("ExchangeTypeOperation")
    ).not.toBeInTheDocument();
    expect(screen.queryByTestId("ExchangeNature")).not.toBeInTheDocument();
  });

  it("Should Initial Load When favored Not Exist", () => {
    const contextTestThree = {
      exchangeData: {
        selectedOperationNature: "Disponibilidade para o exterior",
        selectedAccount: {
          bankCode: "",
          branch: "",
          holderId: "",
          number: ""
        }
      }
    };

    expect(
      render(
        <InstanceContext.Provider value={contextTestThree}>
          <Summary {...props} />
        </InstanceContext.Provider>
      )
    ).toMatchSnapshot();
  });

  it("Should Initial Load When selectedAccount Not Exist", () => {
    const contextFour = {
      exchangeData: {
        selectedOperationNature: "Disponibilidade para o exterior",
        favored: {
          name: "MockNameTest",
          account: {
            number: "",
            bank: {
              name: "",
              swift: ""
            }
          }
        }
      }
    };

    expect(
      render(
        <InstanceContext.Provider value={contextFour}>
          <Summary {...props} />
        </InstanceContext.Provider>
      )
    ).toMatchSnapshot();
  });

  it("Should Initial Load All Itens", () => {
    render(
      <InstanceContext.Provider value={context}>
        <Summary {...props} />
      </InstanceContext.Provider>
    );

    expect(screen.getByTestId("TitleSummary")).toBeInTheDocument();
    expect(screen.getByTestId("ExchangeValueTitle")).toBeInTheDocument();
    expect(screen.getByTestId("ExchangeCurrency")).toBeInTheDocument();
    expect(screen.getByTestId("ExchangeValue")).toBeInTheDocument();
    expect(screen.getByTestId("ExchangeBeneficiary")).toBeInTheDocument();
    expect(screen.getByTestId("ExchangeFavoredName")).toBeInTheDocument();
    expect(
      screen.getByTestId("ExchangeFavoredAccountNumber")
    ).toBeInTheDocument();
    expect(screen.getByTestId("ExchangeBankName")).toBeInTheDocument();
    expect(screen.getByTestId("ExchangeSwiftCode")).toBeInTheDocument();
    expect(screen.getByTestId("ExchangeAccountDebit")).toBeInTheDocument();
    expect(screen.getByTestId("ExchangeTotalAmount")).toBeInTheDocument();
    expect(screen.getByTestId("ExchangeValueCoin")).toBeInTheDocument();
    expect(screen.getByTestId("ExchangeTypeOperation")).toBeInTheDocument();
    expect(screen.getByTestId("ExchangeNature")).toBeInTheDocument();
    expect(screen.getByTestId("AccountNumber")).toBeInTheDocument();
    expect(screen.getByTestId("ExchangePrice")).toBeInTheDocument();
    expect(screen.getByTestId("ExchangeValuePrice")).toBeInTheDocument();
    expect(screen.getByTestId("ExchangeFEES")).toBeInTheDocument();
    expect(screen.getByTestId("ExchangeValueFEES")).toBeInTheDocument();
    expect(screen.getByTestId("ExchangeIOF")).toBeInTheDocument();
    expect(screen.getByTestId("ExchangeValueIOF")).toBeInTheDocument();
    expect(screen.getByTestId("ExchangeVET")).toBeInTheDocument();
    expect(screen.getByTestId("ExchangeValueVET")).toBeInTheDocument();
    expect(screen.getByTestId("ExchangeDateDebit")).toBeInTheDocument();
    expect(screen.getByTestId("ExchangeDateCredit")).toBeInTheDocument();
    expect(screen.getByTestId("ExchangeDateDebitValue")).toBeInTheDocument();
    expect(screen.getByTestId("ExchangeDateCreditValue")).toBeInTheDocument();
    expect(screen.getByTestId("BackButtonSummary")).toBeInTheDocument();
    expect(screen.getByTestId("ContinueButtonSummary")).toBeInTheDocument();
  });

  it("Should Initial Load When selectedOperationNature Not Exist", () => {
    const contextTestTwo = {
      exchangeData: {
        favored: {
          name: "MockNameTest",
          account: {
            number: "",
            bank: {
              name: "",
              swift: ""
            }
          }
        },
        selectedAccount: {
          bankCode: "",
          branch: "",
          holderId: "",
          number: ""
        }
      }
    };

    render(
      <InstanceContext.Provider value={contextTestTwo}>
        <Summary {...props} />
      </InstanceContext.Provider>
    );

    expect(
      screen.queryByTestId("ExchangeTypeOperation")
    ).not.toBeInTheDocument();
    expect(screen.queryByTestId("ExchangeNature")).not.toBeInTheDocument();
  });

  it("Should Initial Load When favored Not Exist", () => {
    const contextTestThree = {
      exchangeData: {
        selectedOperationNature: "Disponibilidade para o exterior",
        selectedAccount: {
          bankCode: "",
          branch: "",
          holderId: "",
          number: ""
        }
      }
    };

    render(
      <InstanceContext.Provider value={contextTestThree}>
        <Summary {...props} />
      </InstanceContext.Provider>
    );

    expect(screen.queryByTestId("ExchangeFavoredName")).not.toBeInTheDocument();
    expect(
      screen.queryByTestId("ExchangeFavoredAccountNumber")
    ).not.toBeInTheDocument();
    expect(screen.queryByTestId("ExchangeBankName")).not.toBeInTheDocument();
    expect(screen.queryByTestId("ExchangeSwiftCode")).not.toBeInTheDocument();
  });

  it("Should Initial Load When selectedAccount Not Exist", () => {
    const contextFour = {
      exchangeData: {
        selectedOperationNature: "Disponibilidade para o exterior",
        favored: {
          name: "MockNameTest",
          account: {
            number: "",
            bank: {
              name: "",
              swift: ""
            }
          }
        }
      }
    };

    render(
      <InstanceContext.Provider value={contextFour}>
        <Summary {...props} />
      </InstanceContext.Provider>
    );

    expect(screen.queryByTestId("AccountNumber")).not.toBeInTheDocument();
  });

  it("Should Back To Click Button Back", () => {
    render(
      <InstanceContext.Provider value={context}>
        <Summary {...props} />
      </InstanceContext.Provider>
    );

    const buttonBack = screen.getByTestId("BackButtonSummary");

    fireEvent.click(buttonBack);

    expect(buttonBack).toBeInTheDocument();
    expect(buttonBack).toBeEnabled();
    expect(props.stepBack).toHaveBeenCalled();
  });

  it("Should Click Button Continue", () => {
    render(
      <InstanceContext.Provider value={context}>
        <Summary {...props} />
      </InstanceContext.Provider>
    );

    const buttonContinue = screen.getByTestId("ContinueButtonSummary");

    expect(buttonContinue).toBeInTheDocument();
    expect(buttonContinue).toBeEnabled();

    fireEvent.click(buttonContinue);

    expect(context.registerExchangeOperation).toHaveBeenCalled();
  });
});
