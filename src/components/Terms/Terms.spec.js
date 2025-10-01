import React from "react";
import { mount, shallow } from "enzyme";

import Terms from "./Terms";

import { IconButton } from "./styles";

jest.mock();

describe("Terms component", () => {
  it("should call DefaultContent", () => {
    expect(mount(<Terms />)).toMatchSnapshot();
  });

  it("should match snapshot with loading", () => {
    expect(mount(<Terms />)).toMatchSnapshot();
  });

  it("should trigger click action", () => {
    const wrapper = shallow(<Terms />);
    const instance = wrapper.instance();

    const spy = (instance.clickedToDownload = jest.fn());

    for (let index = 0; index < 8; index++) {
      wrapper
        .find(IconButton)
        .at(index)
        .simulate("click");
    }
    expect(spy).toHaveBeenCalledTimes(8);
  });

  it("should download file", () => {
    const wrapper = shallow(<Terms />);
    const instance = wrapper.instance();

    wrapper
      .find(IconButton)
      .at(0)
      .simulate("click");

    const link = {
      click: jest.fn(),
      download: "test-file.pdf",
      href: "test-file"
    };

    jest.spyOn(document, "appendChild").mockImplementation(() => link);

    instance.clickedToDownload("test-file", "test-file.pdf");

    expect(link.download).toEqual("test-file.pdf");
    expect(link.href).toEqual("test-file");
  });

  it("should return null when loading is true", () => {
    const wrapper = shallow(<Terms loading={true} />);

    expect(wrapper).toMatchSnapshot();
  });
});
