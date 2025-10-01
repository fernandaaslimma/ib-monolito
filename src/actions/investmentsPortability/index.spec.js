import "@testing-library/jest-dom";
import investmentsActions from "./index";
import * as investmentsAPI from "../../services/investmentsPortability";

jest.mock("../../services/investmentsPortability");

describe("investmentsActions", () => {
  describe("getPortabilities", () => {
    it("should return portabilities response when API call is successful", async () => {
      const mockResponse = {
        json: jest.fn().mockResolvedValue([{ id: 1, name: "Portability 1" }])
      };
      investmentsAPI.getPortabilities.mockResolvedValue(mockResponse);

      const actions = investmentsActions();
      const result = await actions.getPortabilities();

      expect(investmentsAPI.getPortabilities).toHaveBeenCalled();
      expect(mockResponse.json).toHaveBeenCalled();
      expect(result).toEqual({ portabilitiesResponse: [{ id: 1, name: "Portability 1" }] });
    });

    it("should return an error object when API call fails", async () => {
      const error = new Error("API call failed");
      investmentsAPI.getPortabilities.mockRejectedValue(error);

      const actions = investmentsActions();
      const result = await actions.getPortabilities();

      expect(investmentsAPI.getPortabilities).toHaveBeenCalled();
      expect(result).toEqual({ error });
    });
  });

  describe("getInstitutions", () => {
    it("should return institutions response when API call is successful", async () => {
      const mockResponse = {
        json: jest.fn().mockResolvedValue([{ id: 1, name: "Institution 1" }])
      };
      investmentsAPI.getInstitutions.mockResolvedValue(mockResponse);

      const actions = investmentsActions();
      const result = await actions.getInstitutions();

      expect(investmentsAPI.getInstitutions).toHaveBeenCalled();
      expect(mockResponse.json).toHaveBeenCalled();
      expect(result).toEqual({ institutions: [{ id: 1, name: "Institution 1" }] });
    });

    it("should return an error object when API call fails", async () => {
      const error = new Error("API call failed");
      investmentsAPI.getInstitutions.mockRejectedValue(error);

      const actions = investmentsActions();
      const result = await actions.getInstitutions();

      expect(investmentsAPI.getInstitutions).toHaveBeenCalled();
      expect(result).toEqual({ error });
    });
  });

  describe("getPositions", () => {
    it("should return positions response when API call is successful", async () => {
      const investorId = "12345";
      const mockResponse = {
        json: jest.fn().mockResolvedValue([{ id: 1, name: "Position 1" }])
      };
      investmentsAPI.getPositions.mockResolvedValue(mockResponse);

      const actions = investmentsActions();
      const result = await actions.getPositions(null, investorId);

      expect(investmentsAPI.getPositions).toHaveBeenCalledWith(investorId);
      expect(mockResponse.json).toHaveBeenCalled();
      expect(result).toEqual({ positions: [{ id: 1, name: "Position 1" }] });
    });

    it("should return an error object when API call fails", async () => {
      const investorId = "12345";
      const error = new Error("API call failed");
      investmentsAPI.getPositions.mockRejectedValue(error);

      const actions = investmentsActions();
      const result = await actions.getPositions(null, investorId);

      expect(investmentsAPI.getPositions).toHaveBeenCalledWith(investorId);
      expect(result).toEqual({ error });
    });
  });

  describe("setAssetCategory", () => {
    it("should return the correct asset category", () => {
      const value = "Equity";
      const actions = investmentsActions();
      const result = actions.setAssetCategory(null, value);

      expect(result).toEqual({ assetCategory: value });
    });
  });

  describe("setIsOriginBocom", () => {
    it("should return the correct isOriginBocom value", () => {
      const value = true;
      const actions = investmentsActions();
      const result = actions.setIsOriginBocom(null, value);

      expect(result).toEqual({ isOriginBocom: value });
    });
  });

  describe("setSelectedInstitutions", () => {
    it("should return the correct selected institutions", () => {
      const value = ["Institution 1", "Institution 2"];
      const actions = investmentsActions();
      const result = actions.setSelectedInstitutions(null, value);

      expect(result).toEqual({ selectedInstitutions: value });
    });
  });

  describe("setCustodianAccounts", () => {
    it("should return the correct custodian accounts", () => {
      const value = ["Account 1", "Account 2"];
      const actions = investmentsActions();
      const result = actions.setCustodianAccounts(null, value);

      expect(result).toEqual({ custodianAccounts: value });
    });
  });

  describe("requestPortability", () => {
    it("should return portability response when API call is successful", async () => {
      const body = { key: "value" };
      const mockResponse = {
        json: jest.fn().mockResolvedValue({ success: true })
      };
      investmentsAPI.requestPortability.mockResolvedValue(mockResponse);

      const actions = investmentsActions();
      const result = await actions.requestPortability(null, body);

      expect(investmentsAPI.requestPortability).toHaveBeenCalledWith(body);
      expect(mockResponse.json).toHaveBeenCalled();
      expect(result).toEqual({ requestPortabilityResponse: { success: true } });
    });

    it("should return an error object when API call fails", async () => {
      const body = { key: "value" };
      const error = new Error("API call failed");
      investmentsAPI.requestPortability.mockRejectedValue(error);

      const actions = investmentsActions();
      const result = await actions.requestPortability(null, body);

      expect(investmentsAPI.requestPortability).toHaveBeenCalledWith(body);
      expect(result).toEqual({ error });
    });
  });
});