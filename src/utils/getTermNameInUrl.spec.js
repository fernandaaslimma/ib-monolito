import { getTermName } from "./getTermNameInUrl";

global.__API__ = "";

describe("Term", () => {
  describe("getTermName", () => {
    it("Should return the name of the term and parameter of the filtered term of the url", done => {
      const resp = getTermName(
        `${__API__}/productterms/Termo%20de%20Ades%C3%A3o%20-%20Internet%20Banking.pdf`
      );

      expect(resp).toEqual({
        termName: "Termo de Adesão - Internet Banking",
        urlTermName: "Termo%20de%20Ades%C3%A3o%20-%20Internet%20Banking.pdf"
      });
      done();
    });
  });
});
