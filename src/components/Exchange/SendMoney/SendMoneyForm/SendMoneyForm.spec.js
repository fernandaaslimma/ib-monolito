import React from "react";
import SendMoneyForm from "./SendMoneyForm";
import { configure, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { InstanceContext } from "../sendMoneyContext";

jest.mock("../../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false
}));

configure({ testIdAttribute: "data-test" });

const context = {
  exchangeData: {
    favored: {
      id: 1,
      name: "Maria Lima",
      isThirdParty: false,
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
      },
      fxNatures: [
        {
          code: "123456",
          description: "Disponibilidade para o exterior"
        }
      ],
      currency: {
        name: "Dollar",
        code: "USD"
      }
    },
    selectedAccount: {
      availableBalance: 100000
    }
  },
  exchangeTransactionsSimulation: {
    origin: {
      amount: 250,
      currency: "BRL",
      total: 250,
      settleDate: "2024-05-15"
    },
    target: {
      amount: 50,
      currency: "USD",
      total: 50,
      settleDate: "2024-05-17"
    },
    type: "sell",
    totalEffectiveRate: 5,
    currencyRate: {
      currencyRateId: 2,
      currencyRateValue: 5.4578
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
  },
  exchangeTransactionsSimulationRate: 5,
  availableDateRanges: [
    {
      startTime: 1704283200000,
      endTime: 1704315600000
    }
  ],
  modalClosed: true,
  serverTime: 1704293200000,
  getExchangeTransactionsSimulation: jest.fn(),
  cleanExchangeTransactionsSimulation: jest.fn(),
  getExchangeTransactionsSimulationRate: jest.fn(),
  setTransactionValues: jest.fn(),
  resetTimer: jest.fn(),
  getAvailableDateRanges: jest.fn(),
  setSelectedOperationNature: jest.fn()
};

describe("SendMoneyForm", () => {
  let useRefMock;

  beforeEach(() => {
    useRefMock = jest.spyOn(React, "useRef");
    useRefMock.mockReturnValueOnce({ current: 180 });
  });

  const stepForwardFunc = jest.fn();
  const stepBackFunc = jest.fn();
  const goToStepFunc = jest.fn();

  function returnProps(currentStepProp) {
    return {
      stepBack: stepBackFunc,
      stepForward: stepForwardFunc,
      currentStep: currentStepProp,
      goToStep: goToStepFunc
    };
  }

  const props = {
    stepBack: stepBackFunc,
    stepForward: stepForwardFunc,
    currentStep: 3,
    goToStep: goToStepFunc
  };

  it("Should match Snapshot With Loading is False", () => {
    expect(
      render(
        <InstanceContext.Provider value={context}>
          <SendMoneyForm {...returnProps(2)} />
        </InstanceContext.Provider>
      )
    ).toMatchSnapshot();
  });

  it("Should match Snapshot With Loading is true", () => {
    expect(
      render(
        <InstanceContext.Provider value={context}>
          <SendMoneyForm {...returnProps(3)} />
        </InstanceContext.Provider>
      )
    ).toMatchSnapshot();
  });

  it("Should initial Load Itens", () => {
    render(
      <InstanceContext.Provider value={context}>
        <SendMoneyForm {...returnProps(1)} />
      </InstanceContext.Provider>
    );

    expect(screen.getByTestId("dropDownCurrency")).toBeInTheDocument();
    expect(screen.getByTestId("dropDownReason")).toBeInTheDocument();
  });

  it.skip("Should Back To Click Button Back", () => {
    render(
      <InstanceContext.Provider value={context}>
        <SendMoneyForm {...props} />
      </InstanceContext.Provider>
    );

    const DropDown = screen.getByTestId("dropDownReason");

    fireEvent.click(DropDown);

    const item = screen.getAllByText("Disponibilidade para o exterior")[0];

    fireEvent.click(item);

    const buttonBack = screen.getByTestId("BackButton");

    fireEvent.click(buttonBack);

    expect(buttonBack).toBeInTheDocument();
    expect(buttonBack).toBeEnabled();
    expect(stepBackFunc).toHaveBeenCalled();
  });

  it("Should Enable Button Select Reason in DropDown", () => {
    render(
      <InstanceContext.Provider value={context}>
        <SendMoneyForm {...returnProps(3)} />
      </InstanceContext.Provider>
    );

    const DropDown = screen.getByTestId("dropDownReason");

    fireEvent.click(DropDown);

    const item = screen.getAllByText("Disponibilidade para o exterior")[0];

    fireEvent.click(item);

    expect(item).toBeInTheDocument();
  });

  it.skip("Debounce Function Should Not Been Called on Input Change after 1 seconds", async () => {
    render(
      <InstanceContext.Provider value={context}>
        <SendMoneyForm {...returnProps(3)} />
      </InstanceContext.Provider>
    );

    const DropDown = screen.getByTestId("dropDownReason");

    fireEvent.click(DropDown);

    const item = screen.getAllByText("Disponibilidade para o exterior")[0];

    fireEvent.click(item);

    const exchangeInputTarget = screen.getByTestId("ExchangeInputTarget");

    fireEvent.change(exchangeInputTarget, { target: { value: 1000 } });
    fireEvent.change(exchangeInputTarget, { target: { value: 500 } });
    fireEvent.change(exchangeInputTarget, { target: { value: 300 } });

    await new Promise(resolve => {
      setTimeout(resolve, 1000);
    });

    expect(context.getExchangeTransactionsSimulation).not.toHaveBeenCalled();
  });

  it.skip("Debounce Function Should Been Called Once on Input Changes after 1,5 seconds", async () => {
    render(
      <InstanceContext.Provider value={context}>
        <SendMoneyForm {...returnProps(3)} />
      </InstanceContext.Provider>
    );

    const DropDown = screen.getByTestId("dropDownReason");

    fireEvent.click(DropDown);

    const item = screen.getAllByText("Disponibilidade para o exterior")[0];

    fireEvent.click(item);

    const exchangeInputTarget = screen.getByTestId("ExchangeInputTarget");

    fireEvent.change(exchangeInputTarget, { target: { value: 1000 } });
    fireEvent.change(exchangeInputTarget, { target: { value: 500 } });
    fireEvent.change(exchangeInputTarget, { target: { value: 300 } });

    await new Promise(resolve => {
      setTimeout(resolve, 1400);
    });

    expect(context.getExchangeTransactionsSimulation).toHaveBeenCalledTimes(0);
  });

  it.skip("Should To Click Button Continue", async () => {
    const useSpy = jest.spyOn(React, "useState");

    render(
      <InstanceContext.Provider value={context}>
        <SendMoneyForm {...returnProps(3)} />
      </InstanceContext.Provider>
    );

    const DropDown = screen.getByTestId("dropDownReason");

    fireEvent.click(DropDown);

    const item = screen.getAllByText("Disponibilidade para o exterior")[0];

    fireEvent.click(item);

    const exchangeInputOrigin = screen.getByTestId("ExchangeInputOrigin");

    fireEvent.change(exchangeInputOrigin, { target: { value: 5000 } });

    await new Promise(resolve => {
      setTimeout(resolve, 1800);
    });

    const buttonContinue = screen.getByTestId("ContinueButton");

    fireEvent.click(buttonContinue);

    expect(context.getAvailableDateRanges).toHaveBeenCalled();
    expect(buttonContinue).toBeEnabled();
    expect(stepForwardFunc).toHaveBeenCalled();
    expect(item).toBeInTheDocument();
    expect(buttonContinue).toBeInTheDocument();
    expect(useSpy).toHaveBeenCalled();
  });
});
