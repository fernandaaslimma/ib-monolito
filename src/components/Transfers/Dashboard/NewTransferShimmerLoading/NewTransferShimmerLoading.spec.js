import React from "react";
import { shallow } from "enzyme";
import NewTransferShimmerLoading from "./NewTransferShimmerLoading";

jest.mock("../../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false,
  isPtBR: () => true
}));

describe("NewTransferShimmerLoading", () => {
  it("should match snapshot", () => {
    expect(shallow(<NewTransferShimmerLoading />)).toMatchSnapshot();
  });
});
