import React from "react";
import { shallow } from "enzyme";
import { Image } from "./Image";
import { WapperImg } from "./styles";

describe("Image component", () => {
  it("should render the image with src when srcOnError is not provided", () => {
    const src = "image.jpg";
    const wrapper = shallow(<Image src={src} />);
    expect(wrapper.find(WapperImg).prop("src")).toEqual(src);
  });

  it.skip("should render the image with srcOnError when srcImg is set", () => {
    const src = "image.jpg";
    const srcOnError = "error.jpg";
    const useStateMock = jest.spyOn(React, "useState");
    useStateMock.mockImplementation(() => [srcOnError, jest.fn()]);

    const wrapper = shallow(<Image src={src} srcOnError={srcOnError} />);

    expect(wrapper.find(WapperImg).prop("srcOnError")).toEqual(srcOnError);

    useStateMock.mockRestore();
  });
});
