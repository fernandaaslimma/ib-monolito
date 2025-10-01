import { iconBankName } from "./getIconBankName";

describe("iconBankName", () => {
  it("Should return a icon name bank - Bb", () => {
    expect(iconBankName("1")).toBe("Bb");
  });
  it("Should return a icon name bank - Bbm", () => {
    expect(iconBankName("107")).toBe("Bbm");
  });
  it("Should return a icon name bank - Bradesco", () => {
    expect(iconBankName("237")).toBe("Bradesco");
  });
  it("Should return a icon name bank - C6", () => {
    expect(iconBankName("336")).toBe("C6");
  });
  it("Should return a icon name bank - Caixa", () => {
    expect(iconBankName("104")).toBe("Caixa");
  });
  it("Should return a icon name bank - Citibank", () => {
    expect(iconBankName("745")).toBe("Citibank");
  });
  it("Should return a icon name bank - Coperativo", () => {
    expect(iconBankName("756")).toBe("Coperativo");
  });
  it("Should return a icon name bank - Digio", () => {
    expect(iconBankName("335")).toBe("Digio");
  });
  it("Should return a icon name bank - Hsbc", () => {
    expect(iconBankName("269")).toBe("Hsbc");
  });
  it("Should return a icon name bank - Inter", () => {
    expect(iconBankName("77")).toBe("Inter");
  });
  it("Should return a icon name bank - Itau", () => {
    expect(iconBankName("341")).toBe("Itau");
  });
  it("Should return a icon name bank - Nubank", () => {
    expect(iconBankName("260")).toBe("Nubank");
  });
  it("Should return a icon name bank - Original", () => {
    expect(iconBankName("212")).toBe("Original");
  });
  it("Should return a icon name bank - Itau", () => {
    expect(iconBankName("341")).toBe("Itau");
  });
  it("Should return a icon name bank - Pan", () => {
    expect(iconBankName("623")).toBe("Pan");
  });
  it("Should return a icon name bank - Safra", () => {
    expect(iconBankName("422")).toBe("Safra");
  });
  it("Should return a icon name bank - Santander", () => {
    expect(iconBankName("33")).toBe("Santander");
  });
  it("Should return a icon name bank - Votorantim", () => {
    expect(iconBankName("655")).toBe("Votorantim");
  });
  it("Should return a icon name bank - Xp", () => {
    expect(iconBankName("348")).toBe("Xp");
  });
  it("Should return a icon name bank - BankDefault", () => {
    expect(iconBankName("0")).toBe("BankDefault");
  });
});
