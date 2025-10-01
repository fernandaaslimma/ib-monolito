import { injectedCountryList, pt_BRList, en_USList } from "./constantLists";
import { isPtBR } from "./i18n";

jest.mock("./i18n", () => ({
  translate: id => id,
  isPtBR: jest.fn()
}));

describe("injectedCountryList", () => {
  it("should return an modeled a en-US list with injected item", () => {
    isPtBR.mockImplementation(() => false);
    expect(injectedCountryList([{ country: "Xpto" }])).toEqual(
      [
        ...en_USList,
        {
          label: "Xpto",
          value: "Xpto",
          altValue: "Xpto",
          code: "",
          id: en_USList.length + 1
        }
      ].sort((a, b) => a.label.localeCompare(b.label))
    );
  });

  it("should return an modeled a pt-BR list with injected item", () => {
    isPtBR.mockImplementation(() => true);
    expect(injectedCountryList([{ country: "Xpto BR" }])).toEqual(
      [
        ...pt_BRList,
        {
          label: "Xpto BR",
          value: "Xpto BR",
          altValue: "Xpto BR",
          code: "",
          id: pt_BRList.length + 1
        }
      ].sort((a, b) => a.label.localeCompare(b.label))
    );
  });
});
