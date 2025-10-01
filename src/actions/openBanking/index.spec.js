import openBanking from "./index";

jest.mock("../../services/openBanking");

const getConsentInfoMock = require("../../services/openBanking").getConsentInfo;
getConsentInfoMock.mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve([])
  })
);

const aproveConsentMock = require("../../services/openBanking").shareConfirm;
aproveConsentMock.mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve([])
  })
);

const createShareMock = require("../../services/openBanking").createShare;
createShareMock.mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve([])
  })
);

const getInstitutionsMock = require("../../services/openBanking")
  .getInstitutions;
getInstitutionsMock.mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve([])
  })
);

const getDataPermissionsMock = require("../../services/openBanking")
  .getDataPermissions;
getDataPermissionsMock.mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve([])
  })
);

const updateShareScopeMock = require("../../services/openBanking")
  .updateShareScope;
updateShareScopeMock.mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve([])
  })
);

const confirmConsentMock = require("../../services/openBanking").consentConfirm;
confirmConsentMock.mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve([])
  })
);

const cancelConsentMock = require("../../services/openBanking").shareDecline;
cancelConsentMock.mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve([])
  })
);

const getSpecificOrganizationMock = require("../../services/openBanking")
  .getSpecificOrganization;
getSpecificOrganizationMock.mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve([])
  })
);

const getTransmittedCurrentSharesMock = require("../../services/openBanking")
  .getTransmittedCurrentShares;
getTransmittedCurrentSharesMock.mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve([])
  })
);

const getReceivedCurrentSharesMock = require("../../services/openBanking")
  .getReceivedCurrentShares;
getReceivedCurrentSharesMock.mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve([])
  })
);

const getReceivedCurrentSharesSpecificMock = require("../../services/openBanking")
  .getReceivedCurrentSharesSpecific;
getReceivedCurrentSharesSpecificMock.mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve([])
  })
);

const errorMock = { message: "mock error" };
const expectedErrorResponse = { error: errorMock };

describe("openBanking", () => {
  it("should return an action object", () => {
    expect(typeof openBanking() === "object").toBeTruthy();
    expect(Object.keys(openBanking())).toEqual([
      "setOpenBankingInfo",
      "setOpenBankingInfoConfirmation",
      "shareResourcesPatch",
      "shareResourcesPatchTpp",
      "rejectConsentTransmitted",
      "rejectConsentReceived",
      "aproveConsent",
      "confirmConsent",
      "cancelConsent",
      "getOpenBankingInfo",
      "setIsApproveConsent",
      "getConsentInfo",
      "getSpecificOrganization",
      "getTransmittedCurrentShares",
      "getReceivedCurrentShares",
      "getReceivedCurrentSharesSpecific",
      "setConsentId",
      "emptyRedirectUri",
      "createShare",
      "getInstitutions",
      "getDataPermissions",
      "updateShareScope"
    ]);
  });

  describe("getConsentInfo", () => {
    it("Should invoke getConsentInfo", async () => {
      const { getConsentInfo } = openBanking();

      const response = await getConsentInfo("12345");
      expect(response).toEqual({ consentInfo: [] });
    });

    it("Should invoke getConsentInfo with error", async () => {
      getConsentInfoMock.mockImplementation(() => Promise.reject(errorMock));

      const { getConsentInfo } = openBanking();
      const response = await getConsentInfo();

      expect(response).toEqual(expectedErrorResponse);
    });
  });

  describe("aproveConsent", () => {
    it("Should invoke aproveConsent", async () => {
      const { aproveConsent } = openBanking();

      const response = await aproveConsent("12345");
      expect(response).toEqual({ approveConsentResponse: [] });
    });

    it("Should invoke aproveConsent with error", async () => {
      aproveConsentMock.mockImplementation(() => Promise.reject(errorMock));

      const { aproveConsent } = openBanking();
      const response = await aproveConsent();

      expect(response).toEqual(expectedErrorResponse);
    });
  });

  describe("confirmConsent", () => {
    it("Should invoke confirmConsent", async () => {
      const { confirmConsent } = openBanking();

      const response = await confirmConsent("12345");
      expect(response).toEqual({ confirmConsentResponse: [] });
    });

    it("Should invoke confirmConsent with error", async () => {
      confirmConsentMock.mockImplementation(() => Promise.reject(errorMock));

      const { confirmConsent } = openBanking();
      const response = await confirmConsent();

      expect(response).toEqual(expectedErrorResponse);
    });
  });

  describe("cancelConsent", () => {
    it("Should invoke cancelConsent", async () => {
      const { cancelConsent } = openBanking();

      const response = await cancelConsent("12345");
      expect(response).toEqual({ cancelConsentResponse: [] });
    });

    it("Should invoke aproveConsent with error", async () => {
      cancelConsentMock.mockImplementation(() => Promise.reject(errorMock));

      const { cancelConsent } = openBanking();
      const response = await cancelConsent();

      expect(response).toEqual(expectedErrorResponse);
    });
  });

  describe("getSpecificOrganization", () => {
    it("Should invoke getSpecificOrganization", async () => {
      const { getSpecificOrganization } = openBanking();

      const response = await getSpecificOrganization("12345");
      expect(response).toEqual({ specificOrganization: [] });
    });

    it("Should invoke aproveConsent with error", async () => {
      getSpecificOrganizationMock.mockImplementation(() =>
        Promise.reject(errorMock)
      );

      const { getSpecificOrganization } = openBanking();
      const response = await getSpecificOrganization();

      expect(response).toEqual(expectedErrorResponse);
    });
  });

  describe("getTransmittedCurrentShares", () => {
    it("Should invoke getTransmittedCurrentShares", async () => {
      const { getTransmittedCurrentShares } = openBanking();

      const response = await getTransmittedCurrentShares();
      expect(response).toEqual({ transmittedCurrentShares: [] });
    });

    it("Should invoke aproveConsent with error", async () => {
      getTransmittedCurrentSharesMock.mockImplementation(() =>
        Promise.reject(errorMock)
      );

      const { getTransmittedCurrentShares } = openBanking();
      const response = await getTransmittedCurrentShares();

      expect(response).toEqual(expectedErrorResponse);
    });
  });

  describe("getReceivedCurrentShares", () => {
    it("Should invoke getReceivedCurrentShares", async () => {
      const { getReceivedCurrentShares } = openBanking();

      const response = await getReceivedCurrentShares();
      expect(response).toEqual({ receivedCurrentShares: [] });
    });

    it("Should invoke getReceivedCurrentShares with error", async () => {
      getReceivedCurrentSharesMock.mockImplementation(() =>
        Promise.reject(errorMock)
      );

      const { getReceivedCurrentShares } = openBanking();
      const response = await getReceivedCurrentShares();

      expect(response).toEqual(expectedErrorResponse);
    });
  });

  describe("getReceivedCurrentSharesSpecific", () => {
    it("Should invoke getReceivedCurrentSharesSpecific", async () => {
      const { getReceivedCurrentSharesSpecific } = openBanking();

      const response = await getReceivedCurrentSharesSpecific();
      expect(response).toEqual({ receivedCurrentSharesSpecific: [] });
    });

    it("Should invoke getReceivedCurrentSharesSpecific with error", async () => {
      getReceivedCurrentSharesSpecificMock.mockImplementation(() =>
        Promise.reject(errorMock)
      );

      const { getReceivedCurrentSharesSpecific } = openBanking();
      const response = await getReceivedCurrentSharesSpecific();

      expect(response).toEqual(expectedErrorResponse);
    });
  });

  describe("createShare", () => {
    it("Should invoke createShare", async () => {
      const { createShare } = openBanking();

      const response = await createShare("12345");
      expect(response).toEqual({ consentCreated: [] });
    });

    it("Should invoke createShare with error", async () => {
      createShareMock.mockImplementation(() => Promise.reject(errorMock));

      const { createShare } = openBanking();
      const response = await createShare();

      expect(response).toEqual(expectedErrorResponse);
    });
  });

  describe("getInstitutions", () => {
    it("Should invoke getInstitutions", async () => {
      const { getInstitutions } = openBanking();

      const response = await getInstitutions("12345");
      expect(response).toEqual({ institutions: [] });
    });

    it("Should invoke getInstitutions with error", async () => {
      getInstitutionsMock.mockImplementation(() => Promise.reject(errorMock));

      const { getInstitutions } = openBanking();
      const response = await getInstitutions();

      expect(response).toEqual(expectedErrorResponse);
    });
  });

  describe("getDataPermissions", () => {
    it("Should invoke getDataPermissions", async () => {
      const { getDataPermissions } = openBanking();

      const response = await getDataPermissions("12345");
      expect(response).toEqual({ dataPermissions: [] });
    });

    it("Should invoke getDataPermissions with error", async () => {
      getDataPermissionsMock.mockImplementation(() =>
        Promise.reject(errorMock)
      );

      const { getDataPermissions } = openBanking();
      const response = await getDataPermissions();

      expect(response).toEqual(expectedErrorResponse);
    });
  });

  describe("updateShareScope", () => {
    it("Should invoke updateShareScope", async () => {
      const { updateShareScope } = openBanking();

      const response = await updateShareScope("12345", "98yui");
      expect(response).toEqual({ shareResponseJson: [] });
    });

    it("Should invoke updateShareScope with error", async () => {
      updateShareScopeMock.mockImplementation(() => Promise.reject(errorMock));

      const { updateShareScope } = openBanking();
      const response = await updateShareScope();

      expect(response).toEqual(expectedErrorResponse);
    });
  });
});
