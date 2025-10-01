import actions from "./index";

jest.mock("../../services/credit");
const getContractsMock = require("../../services/credit").getContracts;
const getInstallmentBalancesMock = require("../../services/credit")
  .getInstallmentBalances;

const errorMock = { message: "mock error" };

const contracts = [
  {
    number: "1234567890",
    product: "CCB",
    paymentMethod: "TED",
    rates: {
      annual: 10.5,
      nominal: 20.5,
      effective: 30
    },
    date: "2019-11-16T12:33:54.271Z",
    tenure: {
      total: 200,
      remaining: 10
    }
  }
];

const installments = [
  {
    referenceDate: "2018-11-16T12:33:54.271Z",
    maturityDate: "2018-11-16T12:33:54.271Z",
    principalValue: 50000.0,
    monetaryAdjustmentValue: 150000,
    interestValue: 200000,
    latePaymentCommissionValue: 5000,
    iofValue: 20000,
    defaultInterestValue: 100000,
    fineValue: 150000,
    totalValue: 1000
  },
  {
    referenceDate: "2018-11-16T12:33:54.271Z",
    maturityDate: "2018-11-16T12:33:54.271Z",
    principalValue: 50000.0,
    monetaryAdjustmentValue: 150000,
    interestValue: 200000,
    latePaymentCommissionValue: 5000,
    iofValue: 20000,
    defaultInterestValue: 100000,
    fineValue: 150000,
    totalValue: 1000
  }
];

const total = {
  principalValue: 100000.0,
  monetaryAdjustmentValue: 300000,
  interestValue: 400000,
  latePaymentCommissionValue: 10000,
  iofValue: 40000,
  defaultInterestValue: 200000,
  fineValue: 300000,
  totalValue: 2000
};

describe("getContracts", () => {
  it("should correct get contracts", async () => {
    getContractsMock.mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(contracts)
      })
    );

    const { getContracts } = actions();
    const getResponse = await getContracts();

    expect(getResponse).toEqual({ creditContracts: contracts });
  });

  it("should not get contracts and throw error", async () => {
    getContractsMock.mockImplementation(() => Promise.reject(errorMock));

    const { getContracts } = actions();
    const response = await getContracts();

    expect(response).toEqual({ error: errorMock });
  });
});

describe("getInstallmentBalances", () => {
  it("should correct get contracts", async () => {
    getInstallmentBalancesMock.mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(installments)
      })
    );

    const { getInstallmentBalances } = actions();
    const getResponse = await getInstallmentBalances();

    expect(getResponse).toEqual({
      installmentBalances: installments,
      installmentBalancesTotals: total
    });
  });

  it("should not get contracts and throw error", async () => {
    getInstallmentBalancesMock.mockImplementation(() =>
      Promise.reject(errorMock)
    );

    const { getInstallmentBalances } = actions();
    const response = await getInstallmentBalances();

    expect(response).toEqual({ error: errorMock });
  });
});
