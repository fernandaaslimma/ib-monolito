import React from "react";
import { shallow } from "enzyme";

import FixedModal from "./FixedModal";

describe("FixedModal component", () => {
  let useEffect;
  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };

  beforeEach(() => {
    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();
  });
  it("should match snapshot with a closed modal", () => {
    expect(shallow(<FixedModal />)).toMatchSnapshot();
  });

  it("should render modal if there is modalSettings", () => {
    const props = {
      modalSettings: {}
    };

    expect(shallow(<FixedModal {...props} />)).toMatchSnapshot();
  });

  it("should trigger modalSettings.children in order to render its content", () => {
    const props = {
      modalSettings: {
        children: jest.fn(),
        isOpen: true,
        bigModal: true
      }
    };

    shallow(<FixedModal {...props} />);

    expect(props.modalSettings.children).toHaveBeenCalled();
  });

  it("should trigger modalSettings.children in order to render its content", () => {
    const props = {
      modalSettings: {
        children: jest.fn(),
        isOpen: true,
        bigModal: false
      }
    };

    shallow(<FixedModal {...props} />);

    expect(props.modalSettings.children).toHaveBeenCalled();
  });
});
