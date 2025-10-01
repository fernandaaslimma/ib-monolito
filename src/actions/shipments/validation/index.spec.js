import actionsValidations from "./index";

jest.mock("../../../services/shipments/validation");

const mockReturn = [
  {
    layoutType: "BOCOMBBMCnab400",
    name: "Bocom BBM CNAB 400 - Santander",
    layoutManualUrl:
      "https://api.dev.bocombbm.com.br/productterms/cobranca/Manual%20Layout%20BOCOM%20BBM%20CNAB400%20Santander.pdf"
  },
  {
    layoutType: "BOCOMBBMCnab444",
    name: "Bocom BBM CNAB 444 - Santander",
    layoutManualUrl:
      "https://api.dev.bocombbm.com.br/productterms/cobranca/Manual%20Layout%20BOCOM%20BBM%20CNAB400%20Santander.pdf"
  }
];

const actionResult = [
  {
    value: "BOCOMBBMCnab400",
    label: "Bocom BBM CNAB 400 - Santander",
    layoutManualUrl:
      "https://api.dev.bocombbm.com.br/productterms/cobranca/Manual%20Layout%20BOCOM%20BBM%20CNAB400%20Santander.pdf"
  },
  {
    value: "BOCOMBBMCnab444",
    label: "Bocom BBM CNAB 444 - Santander",
    layoutManualUrl:
      "https://api.dev.bocombbm.com.br/productterms/cobranca/Manual%20Layout%20BOCOM%20BBM%20CNAB400%20Santander.pdf"
  }
];

const serviceRemmitanceValidationLayouts = require("../../../services/shipments/validation/index")
  .getRemmitanceValidationLayouts;
serviceRemmitanceValidationLayouts.mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockReturn)
  })
);

describe("Get CNAB validation layouts list", () => {
  it("Should getRemmitanceValidationLayouts", async () => {
    const { getRemmitanceValidationLayouts } = actionsValidations();
    const validationLayouts = await getRemmitanceValidationLayouts();

    expect(validationLayouts).toEqual({ cnabLayouts: actionResult });
    expect(serviceRemmitanceValidationLayouts).toHaveBeenCalledTimes(1);
  });
});
