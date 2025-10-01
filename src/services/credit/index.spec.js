import { getContracts, getInstallmentBalances } from "./index";

jest.mock("../../utils/fetchHandler");

const fetchHandlerMock = require("../../utils/fetchHandler").default;

let fetchHandlerImplementation;

global.__API__ = "http://localhost";

beforeEach(() => {
  fetchHandlerImplementation = jest.fn(URI => Promise.resolve(URI));

  fetchHandlerMock.mockImplementation(fetchHandlerImplementation);
});

describe("credit", () => {
  it("Should call getContracts with right API url", done => {
    getContracts().then(resp => {
      expect(resp).toBe(
        `${__API__}/creditportfolio/v1/contracts?vision=Portability`
      );
      done();
    });
  });

  it("Should call getInstallmentBalances with right API url", done => {
    getInstallmentBalances(1).then(resp => {
      expect(resp).toBe(
        `${__API__}/creditportfolio/v1/contracts/1/installment-balances?balanceType=PrePayment`
      );
      done();
    });
  });
});
