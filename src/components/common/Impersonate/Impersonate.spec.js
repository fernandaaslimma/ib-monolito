import React from "react";
import { shallow } from "enzyme";

import Impersonate from "./Impersonate";
import { Return } from "./styles";

jest.mock("../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false
}));

let impersonateProps = {
  userInfo: {
    impersonate: {
      user: "testenome@mail.com",
      idp: "microsoft",
      name: "Teste Nome"
    }
  }
};

global.__IMPERSONATE_REDIRECT_URL__ = "";

describe("Impersonate component", () => {
  it("should match snapshot for impersonate case", () => {
    expect(shallow(<Impersonate {...impersonateProps} />)).toMatchSnapshot();
  });

  it("should match snapshot for no impersonate case", () => {
    expect(shallow(<Impersonate />)).toMatchSnapshot();
  });
});

describe("Click button to be redirected", () => {
  const shallowComponent = shallow(<Impersonate {...impersonateProps} />);

  it("should call function to be downloaded", () => {
    shallowComponent
      .find(Return)
      .at(0)
      .simulate("click");

    expect(shallowComponent).toMatchSnapshot();
  });
});
