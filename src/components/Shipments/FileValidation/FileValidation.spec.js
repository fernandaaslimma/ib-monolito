import React from "react";
import { shallow } from "enzyme";
import FileValidation from "./FileValidation";

const props = {
  RemmitanceValidationResponse: {
    validFile: false,
    cnabInfo: {
      companyName: "company test",
      companyCode: "code test",
      cnpj: "cnpj test",
      sequentialRemittanceNumber: "sequential number test",
      generatedAt: "25072021",
      issueTicket: true
    }
  }
};

describe("FileValidation", () => {
  it("should match snapshot", () => {
    expect(shallow(<FileValidation />)).toMatchSnapshot();
  });

  it("should match snapshot with validation", () => {
    const instance = shallow(<FileValidation {...props} />).instance();
    instance.setState({ statusMessageReturn: true });
    expect(instance).toMatchSnapshot();
  });
});
