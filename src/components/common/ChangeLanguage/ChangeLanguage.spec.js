import React from "react";
import { shallow, mount } from "enzyme";

import ChangeLanguage from "./ChangeLanguage";
import { LanguageContainer } from "./styles";

let setLanguage;

beforeEach(() => {
  setLanguage = jest.fn();
});

describe("ChangeLanguage component", () => {
  it("should match snapshot", () => {
    expect(
      shallow(<ChangeLanguage setLanguage={setLanguage} />)
    ).toMatchSnapshot();
  });

  it("should match snapshot showing current language", () => {
    const props = {
      userInfo: {
        preferredLanguage: "pt-BR"
      }
    };
    expect(
      shallow(<ChangeLanguage setLanguage={setLanguage} {...props} />)
    ).toMatchSnapshot();
  });

  it("should display LanguagePopup when click on LanguageContainer", () => {
    const props = {
      setLanguage,
      userInfo: {
        preferredLanguage: "pt-BR"
      }
    };
    const WrappedComponent = mount(
      <ChangeLanguage setLanguage={setLanguage} {...props} />
    );

    WrappedComponent.find(LanguageContainer).simulate("click");

    expect(WrappedComponent.state("showChooseLanguage")).toBe(true);
  });
});
