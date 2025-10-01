import React from "react";
import { shallow } from "enzyme";
import UploadFile from "./UploadFile";

const props = {
  onChange: jest.fn(),
  fileSize: {
    uploadFileLimitSize: 5
  }
};

describe("Account Selector", () => {
  it("should match snapshot closed", () => {
    expect(shallow(<UploadFile {...props} />)).toMatchSnapshot();
  });
});
