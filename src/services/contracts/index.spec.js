import {
  getContracts,
  getContractSignUrl,
  getContractFile,
  markAsSigned
} from "./index";

jest.mock("../../utils/fetchHandler");

const fetchHandlerMock = require("../../utils/fetchHandler").default;

let fetchHandlerImplementation;

const contractId = 1;
global.__API__ = "http://localhost";

beforeEach(() => {
  fetchHandlerImplementation = jest.fn(URI => Promise.resolve(URI));

  fetchHandlerMock.mockImplementation(fetchHandlerImplementation);
});

describe("contracts", () => {
  describe("getContracts", () => {
    it("Should call fetchHandler with right API url", () => {
      getContracts().then(resp =>
        expect(resp).toBe(`${__API__}/esign/v1/api/Contracts/Fx`)
      );
    });
  });

  describe("getContractSignUrl", () => {
    it("Should call fetchHandler with right API url", () => {
      getContractSignUrl(1).then(resp =>
        expect(resp).toBe(
          `${__API__}/esign/v1/api/Contracts/Fx/${contractId}/Sign_Url`
        )
      );
    });
  });
  describe("getContractFile", () => {
    it("Should call fetchHandler with right API url", () => {
      getContractFile(123).then(resp =>
        expect(resp).toBe(
          `${__API__}/esign/v1/api/Contracts/Fx/123/Document_File`
        )
      );
    });
  });
  describe("markAsSigned", () => {
    it("Should call fetchHandler with right API url", () => {
      markAsSigned(123).then(resp =>
        expect(resp).toBe(`${__API__}/esign/v1/api/Contracts/Fx/123/Signed`)
      );
    });
  });
});
