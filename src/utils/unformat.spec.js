import { unformatDocuments } from "./unformat";

describe("unformatDocuments", () => {
  it("Should UNformat CPF", () => {
    expect(unformatDocuments("347.278.138-66")).toBe("34727813866");
  });

  it("Should UNformat CNPJ", () => {
    expect(unformatDocuments("66.730.337/0001-62")).toBe("66730337000162");
  });
});
