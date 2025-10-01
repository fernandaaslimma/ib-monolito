import openExternalLink from "./openExternalLink";
import { BOCOM_BBM_FOOTER_COMPLIANCE_US } from "./constants";

describe("openExternalLink", () => {
  it("should create link", () => {
    const response = openExternalLink(BOCOM_BBM_FOOTER_COMPLIANCE_US);

    expect(response.outerHTML).toEqual(
      '<a href="https://www.bocombbm.com.br/en/governance/compliance/" target="_blank" rel="noopener noreferrer"></a>'
    );
  });
});
