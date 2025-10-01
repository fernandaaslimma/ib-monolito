import actions from "./index";

jest.mock("../../services/suitability");

const {
  getSuitabilityFormId: getSuitabilityFormIdAPI,
  getSuitabilityFormData: getSuitabilityFormDataAPI,
  getSuitabilityResult: getSuitabilityResultAPI,
  getSuitabilityInfo: getSuitabilityInfoAPI,
  submitSuitabilityAnswers: submitSuitabilityAnswersAPI
} = require("../../services/suitability");

const getSuitabilityFormDataAPIResponse = [
  {
    step: 1,
    id: "id_a",
    title: "title",
    content: [
      {
        id: "id1",
        step: 1,
        type: "input",
        subtitle: [],
        options: [],
        placeholder: "0,0",
        value_hint: "%",
        label: "label"
      },
      {
        id: "id2",
        step: 2,
        type: "input",
        subtitle: [],
        options: [],
        placeholder: null,
        label: "label"
      }
    ]
  }
];

const getSuitabilityResultAPIResponse = {
  profile: "Balanceado"
};

const getSuitabilityInfoAPIResponse = {
  description: "description"
};

const errorMock = { message: "mock error" };
const expectedErrorResponse = { error: errorMock };

describe("Suitability actions", () => {
  it("should return an action object", () => {
    expect(typeof actions() === "object").toBeTruthy();
    expect(Object.keys(actions())).toEqual([
      "getSuitabilityFormId",
      "getSuitabilityFormData",
      "getSuitabilityResult",
      "getSuitabilityInfo",
      "submitSuitabilityAnswers",
      "approveSuitability",
      "getInvestorProfile",
      "cleanSuitabilityError"
    ]);
  });

  describe("getSuitabilityFormId", () => {
    it("Should getSuitabilityFormId with success", async () => {
      getSuitabilityFormIdAPI.mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve({ formId: 1 })
        })
      );

      const { getSuitabilityFormId } = actions();
      const response = await getSuitabilityFormId();

      expect(response).toEqual({
        suitabilityForm: {
          formId: 1
        }
      });
    });

    it("Should getSuitabilityFormId with error", async () => {
      getSuitabilityFormIdAPI.mockImplementation(() =>
        Promise.reject(errorMock)
      );

      const { getSuitabilityFormId } = actions();
      const response = await getSuitabilityFormId();

      expect(response).toEqual(expectedErrorResponse);
    });
  });

  describe("getSuitabilityFormData", () => {
    it("Should getSuitabilityFormData with success", async () => {
      getSuitabilityFormDataAPI.mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(getSuitabilityFormDataAPIResponse)
        })
      );

      const { getSuitabilityFormData } = actions();
      const response = await getSuitabilityFormData();

      expect(response).toEqual({
        suitabilityFormData: getSuitabilityFormDataAPIResponse
      });
    });

    it("Should getSuitabilityFormData with error", async () => {
      getSuitabilityFormDataAPI.mockImplementation(() =>
        Promise.reject(errorMock)
      );

      const { getSuitabilityFormData } = actions();
      const response = await getSuitabilityFormData();

      expect(response).toEqual(expectedErrorResponse);
    });
  });

  describe("getSuitabilityResult", () => {
    it("Should getSuitabilityResult with success", async () => {
      getSuitabilityResultAPI.mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(getSuitabilityResultAPIResponse)
        })
      );

      const { getSuitabilityResult } = actions();
      const response = await getSuitabilityResult(null, { value: "mock" });

      expect(response).toEqual({
        suitabilityFormParams: { value: "mock" },
        suitabilityResult: { profile: "Balanceado" }
      });
    });

    it("Should getSuitabilityResult with error", async () => {
      getSuitabilityResultAPI.mockImplementation(() =>
        Promise.reject(errorMock)
      );

      const { getSuitabilityResult } = actions();
      const response = await getSuitabilityResult();

      expect(response).toEqual(expectedErrorResponse);
    });
  });

  describe("getSuitabilityInfo", () => {
    it("Should getSuitabilityInfo with success", async () => {
      getSuitabilityInfoAPI.mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(getSuitabilityInfoAPIResponse)
        })
      );

      const { getSuitabilityInfo } = actions();
      const response = await getSuitabilityInfo();

      expect(response).toEqual({
        suitabilityInfo: getSuitabilityInfoAPIResponse
      });
    });

    it("Should getSuitabilityInfo with error", async () => {
      getSuitabilityInfoAPI.mockImplementation(() => Promise.reject(errorMock));

      const { getSuitabilityInfo } = actions();
      const response = await getSuitabilityInfo();

      expect(response).toEqual(expectedErrorResponse);
    });
  });

  describe("submitSuitabilityAnswers", () => {
    it("Should submitSuitabilityAnswers with success", async () => {
      submitSuitabilityAnswersAPI.mockImplementation(() =>
        Promise.resolve(true)
      );

      const { submitSuitabilityAnswers } = actions();
      const response = await submitSuitabilityAnswers();

      expect(response).toEqual(true);
    });

    it("Should submitSuitabilityAnswers with error", async () => {
      submitSuitabilityAnswersAPI.mockImplementation(() =>
        Promise.reject(errorMock)
      );

      const { submitSuitabilityAnswers } = actions();
      const response = await submitSuitabilityAnswers();

      expect(response).toEqual(expectedErrorResponse);
    });
  });

  describe("approveSuitability", () => {
    const stateParams = {
      mfaTokenParams: {
        payload: "mock",
        key: "mockKey"
      }
    };

    it("Should call submitSuitabilityAnswers with correct params when approveSuitability is called", async () => {
      submitSuitabilityAnswersAPI.mockImplementation(() =>
        Promise.resolve(true)
      );

      const { approveSuitability } = actions();
      approveSuitability(stateParams, { formVersionId: 1 });

      expect(submitSuitabilityAnswersAPI).toHaveBeenCalled();
    });

    it("Should get an error when try to approve suitability", async () => {
      submitSuitabilityAnswersAPI.mockImplementation(() =>
        Promise.reject(errorMock)
      );

      const { approveSuitability } = actions();

      try {
        await approveSuitability(stateParams, {
          formVersionId: 1
        });
      } catch (error) {
        expect(error).toEqual(errorMock);
      }
    });
  });
});
