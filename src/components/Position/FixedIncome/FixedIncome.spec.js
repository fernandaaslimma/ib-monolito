import React from "react";
import { shallow } from "enzyme";

import FixedIncome from "./FixedIncome";
import AnimatedBottonSheet from "../../common/AnimatedBottomSheet";
import Button from "react-bocombbm-components/dist/Button";

jest.mock("../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: jest.fn(),
  isZhCN: () => false
}));

jest.mock("../../../utils/validations/fund", () => ({
  checkDate: () => true
}));

jest.mock("../../../utils/redirect");
const redirectMock = require("../../../utils/redirect").redirect;
const getLanguageMock = require("../../../utils/i18n").getLanguage;

const pendingTransactionsFI = [
  {
    id: 123,
    type: "subscription",
    typeLabel: "subscription",
    idempotencyKey: "0b5ecefd-c892-4fdf-a3ce-c77b9259d309",
    transactionValue: 123456.99,
    transactionDate: "2021-02-22",
    product: {
      id: 456,
      name: "BOCOM BBM CORPORATE CREDIT FIC MULTIMERCADO CRÉDITO PRIVADO",
      riskProfile: "Moderate",
      riskProfileLabel: "Moderado",
      classType: "HedgeFund",
      classTypeLabel: "Multimercado"
    }
  },
  {
    id: 123,
    type: "redemption",
    typeLabel: "subscription",
    idempotencyKey: "0b5ecefd-c892-4fdf-a3ce-c77b9259d309",
    transactionValue: 123456.99,
    transactionDate: "2021-02-17",
    product: {
      id: 456,
      name: "BOCOM BBM CORPORATE CREDIT FIC MULTIMERCADO CRÉDITO PRIVADO",
      riskProfile: "Aggressive",
      riskProfileLabel: "Agressivo",
      classType: "HedgeFund",
      classTypeLabel: "Multimercado"
    }
  }
];

const fixedIncome = [
  {
    name: "name",
    date: "12/12",
    issuer: "issuer",
    maturityDate: "12/12",
    iofBalance: 0,
    netBalance: 123,
    grossResultBalance: 123,
    grossBalance: 123,
    incomeTaxBalance: 1,
    portfolioShare: 123,
    indexer: "di",
    indexerRate: "12"
  }
];

const props = {
  fixedIncome,
  pendingTransactionsFI,
  serverTime: 1613588222000,
  getPendingTransactionsFI: jest.fn(),
  getTotalFixedIncome: jest.fn(),
  getFixedIncome: jest.fn(),
  getTotalLca: jest.fn(),
  getAvailableDateRanges: jest.fn(),
  userInfo: []
};

describe("FixedIncome component", () => {
  let getFixedIncomeMock;
  let getTotalFixedIncomeMock;

  beforeEach(() => {
    getFixedIncomeMock = jest.fn();
    getTotalFixedIncomeMock = jest.fn();
  });

  it("should have an initial state", () => {
    const component = shallow(
      <FixedIncome
        getFixedIncome={getFixedIncomeMock}
        getTotalFixedIncome={getTotalFixedIncomeMock}
        getAvailableDateRanges={jest.fn()}
      />
    );
    expect(component.instance().state).toEqual({
      isEmpty: false,
      onGoingTransactions: []
    });
  });

  it("should match snapshot with loading", () => {
    expect(
      shallow(
        <FixedIncome
          getFixedIncome={getFixedIncomeMock}
          getTotalFixedIncome={getTotalFixedIncomeMock}
          loading={true}
        />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot without accounts", () => {
    expect(
      shallow(
        <FixedIncome
          getFixedIncome={getFixedIncomeMock}
          getTotalFixedIncome={getTotalFixedIncomeMock}
          loading={false}
        />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot with accounts", () => {
    expect(
      shallow(
        <FixedIncome
          getFixedIncome={getFixedIncomeMock}
          getTotalFixedIncome={getTotalFixedIncomeMock}
          loading={false}
          fixedIncome={fixedIncome}
        />
      )
    ).toMatchSnapshot();
  });

  it("should invoke getFixedIncome", () => {
    shallow(
      <FixedIncome
        getFixedIncome={getFixedIncomeMock}
        getTotalFixedIncome={getTotalFixedIncomeMock}
        loading={false}
        fixedIncome={fixedIncome}
      />
    );
    expect(getFixedIncomeMock).toHaveBeenCalledTimes(1);
  });

  it("should invoke getTotalFixedIncome", () => {
    shallow(
      <FixedIncome
        getFixedIncome={getFixedIncomeMock}
        loading={false}
        getTotalFixedIncome={getTotalFixedIncomeMock}
        fixedIncome={fixedIncome}
      />
    );
    expect(getTotalFixedIncomeMock).toHaveBeenCalledTimes(1);
  });

  it("should click outise AnimatedBottonSheet and close it", () => {
    const component = shallow(
      <FixedIncome
        getFixedIncome={getFixedIncomeMock}
        loading={false}
        getTotalFixedIncome={getTotalFixedIncomeMock}
        fixedIncome={fixedIncome}
      />
    );

    component.find(AnimatedBottonSheet).prop("onClickInBack")();
    expect(component.instance().state).toEqual({
      isEmpty: false,
      onGoingTransactions: []
    });
  });

  it("should click in understood button and close AnimatedBottonSheet", () => {
    const component = shallow(
      <FixedIncome
        getFixedIncome={getFixedIncomeMock}
        loading={false}
        getTotalFixedIncome={getTotalFixedIncomeMock}
        fixedIncome={fixedIncome}
      />
    );

    component.find(Button).simulate("click");
    expect(component.instance().state).toEqual({
      isEmpty: false,
      onGoingTransactions: []
    });
  });

  it("should open AnimatedBottonSheet of duplicate redemption", () => {
    getLanguageMock.mockImplementation(jest.fn(() => "pt-BR"));
    const component = shallow(<FixedIncome {...props} />).instance();

    component.verifyOnGoingTransactions();
    expect(component.state).toEqual({
      isEmpty: false,
      loadingButtonWithdrawal: false,
      onGoingTransactionValue: "123.456,99",
      onGoingTransactions: [
        {
          id: 123,
          idempotencyKey: "0b5ecefd-c892-4fdf-a3ce-c77b9259d309",
          product: {
            classType: "HedgeFund",
            classTypeLabel: "Multimercado",
            id: 456,
            name: "BOCOM BBM CORPORATE CREDIT FIC MULTIMERCADO CRÉDITO PRIVADO",
            riskProfile: "Aggressive",
            riskProfileLabel: "Agressivo"
          },
          transactionDate: "2021-02-17",
          transactionValue: 123456.99,
          type: "redemption",
          typeLabel: "subscription"
        }
      ]
    });
  });

  it("should be redirected to withdrawal window", () => {
    const newProps = {
      ...props,
      pendingTransactionsFI: [
        {
          id: 123,
          type: "subscription",
          typeLabel: "subscription",
          idempotencyKey: "0b5ecefd-c892-4fdf-a3ce-c77b9259d309",
          transactionValue: 123456.99,
          transactionDate: "2021-02-22",
          product: {
            id: 456,
            name: "BOCOM BBM CORPORATE CREDIT FIC MULTIMERCADO CRÉDITO PRIVADO",
            riskProfile: "Moderate",
            riskProfileLabel: "Moderado",
            classType: "HedgeFund",
            classTypeLabel: "Multimercado"
          }
        }
      ]
    };
    const component = shallow(<FixedIncome {...newProps} />).instance();

    component.verifyOnGoingTransactions();
    expect(redirectMock).toHaveBeenCalledWith(
      "/investments/positions/fixed-income/withdrawal"
    );
  });
});
