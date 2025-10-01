import React from "react";
import { shallow } from "enzyme";

import PageAsModal from "./PageAsModal";

describe("PageAsModal component", () => {
  it("should match snapshot with a closed modal", () => {
    expect(shallow(<PageAsModal />)).toMatchSnapshot();
  });

  it("should render modal if there is modalSettings", () => {
    const props = {
      modalSettings: {}
    };

    expect(shallow(<PageAsModal {...props} />)).toMatchSnapshot();
  });

  it("should trigger modalSettings.children in order to render its content", () => {
    const props = {
      modalSettings: {
        children: jest.fn()
      }
    };

    shallow(<PageAsModal {...props} />);

    expect(props.modalSettings.children).toHaveBeenCalled();
  });
});
