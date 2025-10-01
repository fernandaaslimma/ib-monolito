import actions from "./index";

jest.mock("../../services/terms");

const { downloadTerm: downloadTermAPI } = require("../../services/terms");

const storeMock = { setState: jest.fn(), getState: jest.fn() };
describe("terms action", () => {
  it("Should return an action object", () => {
    expect(Object.keys(actions(storeMock))).toEqual([
      "downloadTerms",
      "approveNewTerms"
    ]);
  });

  it("Should getFavored with success", async () => {
    global.URL.createObjectURL = jest.fn();

    const blob = jest.fn(
      () =>
        new Blob(["pdf/document,QkFTRTY0ZW11bGF0aW9u"], {
          type: "application/pdf"
        })
    );
    downloadTermAPI.mockImplementation(() =>
      Promise.resolve({
        blob
      })
    );
    const { downloadTerms } = actions();

    await downloadTerms();
    setTimeout(() => expect(blob).toHaveBeenCalled(), 3000);
  });
});
