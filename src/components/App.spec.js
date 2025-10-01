import React from "react";
import { shallow } from "enzyme";
import createStore from "redux-zero";

import App from "./App";

const store = createStore();

jest.mock("../utils/i18n", () => ({
  translate: id => id,
  withI18n: component => component,
  isZhCN: () => false,
  isPtBR: () => false
}));

describe("App component", () => {
  it("should match snapshot", () => {
    expect(shallow(<App {...store} />)).toMatchSnapshot();
  });
});
