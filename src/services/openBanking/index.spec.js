import {
  getConsentInfo,
  getSpecificOrganization,
  shareResourcesPatch,
  rejectConsentTransmitted,
  rejectConsentReceived,
  getTransmittedCurrentShares,
  getReceivedCurrentShares,
  getReceivedCurrentSharesSpecific,
  shareApprove,
  shareDecline,
  shareConfirm,
  createShare,
  getInstitutions,
  updateShareScope,
  consentConfirm,
  getDataPermissions
} from "./index";

jest.mock("../../utils/fetchHandler");

const fetchHandlerMock = require("../../utils/fetchHandler").default;

let fetchHandlerImplementation;

global.__API__ = "http://localhost";

beforeEach(() => {
  fetchHandlerImplementation = jest.fn(URI => Promise.resolve(URI));

  fetchHandlerMock.mockImplementation(fetchHandlerImplementation);
});

describe("oepnBanking", () => {
  describe("getConsentInfo", () => {
    it("Should call fetchHandler with new API url", done => {
      getConsentInfo("1234").then(resp => {
        expect(resp).toBe(
          `${__API__}/open-banking/journey-aspsp/v1/shares/consents/1234`
        );
        done();
      });
    });
  });
  describe("getSpecificOrganization", () => {
    it("Should call fetchHandler with new API url", done => {
      getSpecificOrganization("1234").then(resp => {
        expect(resp).toBe(
          `${__API__}/open-banking/ob-clients-api/v1/organisations/1234/authorisationservers`
        );
        done();
      });
    });
  });
  describe("shareResourcesPatch", () => {
    it("Should call fetchHandler with new API url", done => {
      shareResourcesPatch("1234", "mock body").then(resp => {
        expect(resp).toBe(
          `${__API__}/open-banking/journey-aspsp/v1/shares/1234/resources`
        );
        done();
      });
    });
  });
  describe("rejectConsentTransmitted", () => {
    it("Should call fetchHandler with new API url", done => {
      rejectConsentTransmitted("1234").then(resp => {
        expect(resp).toBe(
          `${__API__}/open-banking/journey-aspsp/v1/shares/1234`
        );
        done();
      });
    });
  });
  describe("rejectConsentReceived", () => {
    it("Should call fetchHandler with new API url", done => {
      rejectConsentReceived("1234").then(resp => {
        expect(resp).toBe(`${__API__}/open-banking/journey-tpp/v1/shares/1234`);
        done();
      });
    });
  });
  describe("getTransmittedCurrentShares", () => {
    it("Should call fetchHandler with new API url", done => {
      getTransmittedCurrentShares().then(resp => {
        expect(resp).toBe(`${__API__}/open-banking/journey-aspsp/v1/shares`);
        done();
      });
    });
  });
  describe("getReceivedCurrentShares", () => {
    it("Should call fetchHandler with new API url", done => {
      getReceivedCurrentShares().then(resp => {
        expect(resp).toBe(`${__API__}/open-banking/journey-tpp/v1/shares`);
        done();
      });
    });
  });
  describe("getReceivedCurrentSharesSpecific", () => {
    it("Should call fetchHandler with new API url", done => {
      getReceivedCurrentSharesSpecific("123").then(resp => {
        expect(resp).toBe(
          `${__API__}/open-banking/journey-tpp/v1/shares/consents/123`
        );
        done();
      });
    });
  });
  describe("shareApprove", () => {
    it("Should call fetchHandler with new API url", done => {
      shareApprove("1234", "mock body").then(resp => {
        expect(resp).toBe(
          `${__API__}/open-banking/journey-aspsp/v1/shares/1234/approve`
        );
        done();
      });
    });
  });
  describe("shareDecline", () => {
    it("Should call fetchHandler with new API url", done => {
      shareDecline("1234").then(resp => {
        expect(resp).toBe(
          `${__API__}/open-banking/journey-aspsp/v1/shares/1234/declines`
        );
        done();
      });
    });
  });
  describe("shareConfirm", () => {
    it("Should call fetchHandler with new API url", done => {
      shareConfirm("1234").then(resp => {
        expect(resp).toBe(
          `${__API__}/open-banking/journey-aspsp/v1/shares/1234/confirmations`
        );
        done();
      });
    });
  });
  describe("createShare", () => {
    it("Should call fetchHandler with new API url", done => {
      createShare("1234", "body").then(resp => {
        expect(resp).toBe(`${__API__}/open-banking/journey-tpp/v1/shares`);
        done();
      });
    });
  });
  describe("getInstitutions", () => {
    it("Should call fetchHandler with new API url", done => {
      getInstitutions().then(resp => {
        expect(resp).toBe(
          `${__API__}/open-banking/ob-clients-api/v1/authorisationservers`
        );
        done();
      });
    });
  });
  describe("updateShareScope", () => {
    it("Should call fetchHandler with new API url", done => {
      updateShareScope("123", "body mock").then(resp => {
        expect(resp).toBe(`${__API__}/open-banking/journey-tpp/v1/shares/123`);
        done();
      });
    });
  });
  describe("consentConfirm", () => {
    it("Should call fetchHandler with new API url", done => {
      consentConfirm("body mock").then(resp => {
        expect(resp).toBe(
          `${__API__}/open-banking/journey-tpp/v1/shares/consents/confirmations`
        );
        done();
      });
    });
  });
  describe("getDataPermissions", () => {
    it("Should call fetchHandler with new API url", done => {
      getDataPermissions().then(resp => {
        expect(resp).toBe(
          `${__API__}/open-banking/journey-config/v1/data-permissions`
        );
        done();
      });
    });
  });
});
