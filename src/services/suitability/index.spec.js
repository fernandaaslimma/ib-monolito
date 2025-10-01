import {
  getSuitabilityFormData,
  getSuitabilityResult,
  getSuitabilityInfo,
  submitSuitabilityAnswers
} from "./index";

jest.mock("../../utils/fetchHandler", () => URI => Promise.resolve(URI));

describe("suitability", () => {
  describe("getSuitabilityFormData", () => {
    it("Should call fetchHandler with right API url", done => {
      getSuitabilityFormData(1).then(resp => {
        expect(resp).toBe(
          `${__API__}/suitabilityforms/v1/api/Form/1/lastVersion/questions`
        );
        done();
      });
    });
  });

  describe("getSuitabilityResult", () => {
    it("Should call fetchHandler with right API url", done => {
      getSuitabilityResult({ formVersionId: 1, answers: ["mock"] }).then(
        resp => {
          expect(resp).toBe(
            `${__API__}/suitabilityforms/v1/api/Form/formVersion/1/answers`
          );
          done();
        }
      );
    });
  });

  describe("submitSuitabilityAnswers", () => {
    it("Should call fetchHandler with right API url", done => {
      submitSuitabilityAnswers({ answers: ["mock"] }, 1).then(resp => {
        expect(resp).toBe(
          `${__API__}/suitabilityforms/v1/api/Form/FormVersion/1/answers/confirm`
        );
        done();
      });
    });
  });

  describe("getSuitabilityInfo", () => {
    it("Should call fetchHandler with right API url", done => {
      getSuitabilityInfo().then(resp => {
        expect(resp).toBe(`${__API__}/suitabilityforms/v1/api/Form/info`);
        done();
      });
    });
  });
});
