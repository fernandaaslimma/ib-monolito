import React from "react";
import { mount } from "enzyme";

import {
  translate,
  bootstrap,
  withI18n,
  setTranslations,
  getLanguage,
  setLanguage,
  isPtBR,
  isEnUS,
  isZhCN
} from "./index";

jest.mock("../constants", () => ({
  IS_CLIENT: true,
  EN_US: "en-US"
}));

jest.mock("../../../i18n/en-US.json", () => ({
  SOMETHING: "alguma coisa",
  ADDITIONAL: "xpto"
}));

describe("i18n", () => {
  beforeEach(async () => {
    setLanguage("en-US");
    await bootstrap();
  });

  describe("bootstrap", () => {
    it.skip("Should get i18n object from server", async () => {
      const response = await bootstrap();

      expect(response).toEqual({
        SOMETHING: "alguma coisa",
        ADDITIONAL: "xpto"
      });
    });
  });

  describe("setTranslations", () => {
    it("Should set the translations data", () => {
      const translations = { INTERNET_BANKING: "Internet Banking" };

      expect(setTranslations(translations)).toEqual(translations);
    });
  });

  describe("getLanguage", () => {
    it("Should return the current language", () => {
      setLanguage("pt-BR");
      const currentLanguage = getLanguage();

      expect(currentLanguage).toEqual("pt-BR");
    });
  });

  describe("isPtBR", () => {
    it("Should return true if language is pt-BR", () => {
      setLanguage("pt-BR");
      expect(isPtBR()).toEqual(true);
    });

    it("Should return false if language is not pt-BR", () => {
      setLanguage("en-US");
      expect(isPtBR()).toEqual(false);
    });
  });

  describe("isEnUS", () => {
    it("Should return true if language is en-US", () => {
      setLanguage("en-US");
      expect(isEnUS()).toEqual(true);
    });

    it("Should return false if language is not en-US", () => {
      setLanguage("pt-BR");
      expect(isEnUS()).toEqual(false);
    });
  });

  describe("isZhCN", () => {
    it("Should return true if language is zh-CN", () => {
      setLanguage("zh-CN");
      expect(isZhCN()).toEqual(true);
    });

    it("Should return false if language is not zh-CN", () => {
      setLanguage("pt-BR");
      expect(isZhCN()).toEqual(false);
    });
  });

  describe("translate", () => {
    it("Should translate based on a i18n data object if key exists", () => {
      expect(translate("SOMETHING")).toEqual("alguma coisa");
    });

    it("Shouldn't translate if key not exist", () => {
      expect(translate("SOMETHINGs")).toBeUndefined();
    });

    it("Should translate with additional value", () => {
      expect(translate("SOMETHING", "ADDITIONAL")).toBe("alguma coisa xpto");
    });
  });

  describe("withI18n", () => {
    let subscribe;

    beforeEach(() => {
      subscribe = jest.fn();
      sessionStorage.clear();
    });

    it("Shouldn't render component if fetch isn't done", () => {
      const TestingComponent = () => <div>done</div>;

      const WithI18n = withI18n(TestingComponent);
      const Wrapped = mount(<WithI18n subscribe={subscribe} />);

      expect(Wrapped.state()).toEqual({ done: false });
      expect(Wrapped.html()).toEqual(null);
    });

    it("Should render component only if fetch is done", done => {
      const TestingComponent = () => <div>done</div>;

      const WithI18n = withI18n(TestingComponent);
      const Wrapped = mount(<WithI18n subscribe={subscribe} />);

      setImmediate(() => {
        try {
          expect(Wrapped.state()).toEqual({ done: true });
          Wrapped.setState({ done: true });
          expect(Wrapped.html()).toEqual("<div>done</div>");
        } catch (error) {
          done.fail(error);
        }
        done();
      });
    });

    it("Should set language when subscribe is triggered", done => {
      subscribe = jest.fn(callback =>
        callback({
          userInfo: {
            preferredLanguage: "pt-BR"
          }
        }).then(returnedLanguage => {
          expect(returnedLanguage).toBe("pt-BR");
          done();
        })
      );

      const TestingComponent = () => <div>done</div>;

      const WithI18n = withI18n(TestingComponent);
      mount(<WithI18n subscribe={subscribe} />);
    });

    it("Should not set language when subscribe is triggered and unserInfo language is default", done => {
      subscribe = jest.fn(callback =>
        callback({
          unserInfo: {}
        }).then(returnedLanguage => {
          expect(returnedLanguage).toBe("en-US");
          done();
        })
      );

      const TestingComponent = () => <div>done</div>;

      const WithI18n = withI18n(TestingComponent);
      mount(<WithI18n subscribe={subscribe} />);
    });

    it("Should unlisten state when unmounted", done => {
      const unmountMock = jest.fn();
      subscribe = jest.fn(() => unmountMock);

      const TestingComponent = () => <div>done</div>;

      const WithI18n = withI18n(TestingComponent);
      const Wrapped = mount(<WithI18n subscribe={subscribe} />);

      Wrapped.unmount();

      expect(unmountMock).toHaveBeenCalled();
      done();
    });
  });
});
