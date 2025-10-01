import {
  getFavoreds,
  getTransferById,
  getTransfers,
  getTransfersByType,
  getTransfersByPeriod,
  getApprovers,
  approveEFT,
  denyEFT,
  createEFT,
  getAvailableDateRanges,
  getISPBList
} from "./index";

jest.mock("../../utils/fetchHandler");

const fetchHandlerMock = require("../../utils/fetchHandler").default;

let fetchHandlerImplementation;

global.__API__ = "http://localhost";

beforeEach(() => {
  fetchHandlerImplementation = jest.fn(URI => Promise.resolve(URI));

  fetchHandlerMock.mockImplementation(fetchHandlerImplementation);
});

describe("EFT", () => {
  describe("getFavoreds", () => {
    it("Should call fetchHandler with right API url", done => {
      getFavoreds().then(resp => {
        expect(resp).toBe(`${__API__}/favored/v1/list`);
        done();
      });
    });
  });

  describe("getTransferById", () => {
    it("Should call fetchHandler with right API url", done => {
      getTransferById("123").then(resp => {
        expect(resp).toBe(
          `${__API__}/wiretransferrequest/v1/api/wiretransfer/123`
        );
        done();
      });
    });
  });

  describe("getTransfers", () => {
    it("Should call fetchHandler with right API url", done => {
      getTransfers().then(resp => {
        expect(resp).toBe(
          `${__API__}/wiretransferrequest/v1/api/wiretransfer/statement`
        );
        done();
      });
    });
  });

  describe("getTransfersByType", () => {
    it("Should call fetchHandler with right API url", done => {
      getTransfersByType({ type: "mock" }).then(resp => {
        expect(resp).toBe(
          `${__API__}/wiretransferrequest/v1/api/wiretransfer/statement?type=mock`
        );
        done();
      });
    });
  });

  describe("getTransfersByPeriod", () => {
    it("Should call fetchHandler with right API url", done => {
      getTransfersByPeriod({
        type: "mock",
        unixStart: "12345",
        unixEnd: "12345"
      }).then(resp => {
        expect(resp).toBe(
          `${__API__}/wiretransferrequest/v1/api/wiretransfer/statement?type=mock&end=12345&end=12345`
        );
        done();
      });
    });
  });

  describe("getApprovers", () => {
    it("Should call fetchHandler with right API url", done => {
      getApprovers().then(resp => {
        expect(resp).toBe(
          `${__API__}/wiretransferrequest/v1/api/wiretransfer/approvement/flow`
        );
        done();
      });
    });
  });

  describe("approveEFT", () => {
    it("Should call fetchHandler with right API url", done => {
      approveEFT("12345", "mock", false).then(resp => {
        expect(resp).toBe(
          `${__API__}/wiretransferrequest/v1/api/wiretransfer/12345/approvement/true/save/false`
        );
        done();
      });
    });
    it("Should call fetchHandler with right API url saving account", done => {
      approveEFT("12345", "mock", true).then(resp => {
        expect(resp).toBe(
          `${__API__}/wiretransferrequest/v1/api/wiretransfer/12345/approvement/true/save/true`
        );
        done();
      });
    });
  });

  describe("denyEFT", () => {
    it("Should call fetchHandler with right API url", done => {
      denyEFT("12345", "mock").then(resp => {
        expect(resp).toBe(
          `${__API__}/wiretransferrequest/v1/api/wiretransfer/12345/approvement/false/save/false`
        );
        done();
      });
    });
  });

  describe("createEFT", () => {
    it("Should call fetchHandler with right API url", done => {
      createEFT("mock").then(resp => {
        expect(resp).toBe(`${__API__}/wiretransferrequest/v1/api/wiretransfer`);
        done();
      });
    });
  });

  describe("getAvailableDateRanges", () => {
    it("Should call fetchHandler with right API url", done => {
      getAvailableDateRanges("12345", "wireTransfer").then(resp => {
        expect(resp).toBe(
          `${__API__}/calendar/v1/availabilityschedule?date=12345&service=wireTransfer`
        );
        done();
      });
    });
  });

  describe("getISPBList", () => {
    it("Should call fetchHandler with right API url", done => {
      getISPBList().then(resp => {
        expect(resp).toBe(`${__API__}/cashmanagement/v1/banks`);
        done();
      });
    });
  });
});
