import React from "react";
import { shallow } from "enzyme";

import LanguagePopup from "./LanguagePopup";

describe("LanguagePopup component", () => {
  it("should match snapshot", () => {
    expect(shallow(<LanguagePopup />)).toMatchSnapshot();
  });

  it("should match snapshot with a list of languages based on languages array", () => {
    const props = {
      languages: [
        {
          icon: "aaa",
          name: "bbb",
          code: "ccc"
        },
        {
          icon: "xxx",
          name: "yyy",
          code: "zzz"
        }
      ]
    };

    expect(shallow(<LanguagePopup {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot with an active item that has the same code of currentLanguage", () => {
    const props = {
      currentLanguage: "zzz",
      languages: [
        {
          icon: "aaa",
          name: "bbb",
          code: "ccc"
        },
        {
          icon: "xxx",
          name: "yyy",
          code: "zzz"
        }
      ]
    };

    expect(shallow(<LanguagePopup {...props} />)).toMatchSnapshot();
  });
});
