import offshore from "./index";

jest.mock("../../services/offshore");

const totalCount = 20;

const getTransactionsOffShoreMock = require("../../services/offshore").getTransactionsOffShore;
getTransactionsOffShoreMock.mockImplementation(() =>
  Promise.resolve({
    headers: {
      get: () => totalCount
    },
    json: () => Promise.resolve([])
  })
);

const errorMock = { message: "mock error" };
const expectedErrorResponse = { error: errorMock };

describe("getTransactionsOffShore", () => {
  it("Should invoke getTransactionsOffShore", async () => {
    const { getTransactionsOffShore } = offshore();

    const response = await getTransactionsOffShore({
      dateFrom: "",
      dateTo: "",
      limit: 10,
      offset: 0,
      currency: 'CNY'
    });

    expect(response).toEqual({
      totalCount: 20,
      transactionsOffShore: [],
    });
  });

  it("Should invoke getTransactionsOffShore with error", async () => {
    getTransactionsOffShoreMock.mockImplementation(() => Promise.reject(errorMock));

    const { getTransactionsOffShore } = offshore();
    const response = await getTransactionsOffShore();

    expect(response).toEqual(expectedErrorResponse);
  });
});
