import React from "react";
import { shallow } from "enzyme";

import Confirmation from "./Confirmation";
import { Button } from "./styles";

describe("Confirmation component", () => {
  it("should match snapshot with a closed modal", () => {
    expect(shallow(<Confirmation />)).toMatchSnapshot();
  });

  it("should render modal if there is modalSettings", () => {
    const props = {
      modalSettings: {}
    };

    expect(shallow(<Confirmation {...props} />)).toMatchSnapshot();
  });

  it("should render modal if there is modalSettings with message", () => {
    const props = {
      modalSettings: {
        message: "message"
      }
    };

    expect(shallow(<Confirmation {...props} />)).toMatchSnapshot();
  });

  it("should trigger modalSettings.onClose prop when click on NO button", () => {
    const props = {
      modalSettings: {
        onClose: jest.fn()
      }
    };

    shallow(<Confirmation {...props} />)
      .find(Button)
      .at(0)
      .simulate("click");

    expect(props.modalSettings.onClose).toHaveBeenCalled();
  });

  it("should trigger modalSettings.onConfirm prop when click on YES button", () => {
    const props = {
      modalSettings: {
        onConfirm: jest.fn()
      }
    };

    shallow(<Confirmation {...props} />)
      .find(Button)
      .at(1)
      .simulate("click");

    expect(props.modalSettings.onConfirm).toHaveBeenCalled();
  });

  it("should closeModal prop when click on YES button if closeModal exists", () => {
    const props = {
      modalSettings: {
        onConfirm: jest.fn()
      },
      closeModal: jest.fn()
    };

    shallow(<Confirmation {...props} />)
      .find(Button)
      .at(1)
      .simulate("click");

    expect(props.closeModal).toHaveBeenCalled();
  });

  it("should closeModal prop when click on YES button if closeModal exists after promise resolves if onConfirm is a promise", () => {
    const then = jest.fn(callback => callback());

    const props = {
      modalSettings: {
        onConfirm: () => ({
          then
        })
      },
      closeModal: jest.fn()
    };

    shallow(<Confirmation {...props} />)
      .find(Button)
      .at(1)
      .simulate("click");

    expect(then).toHaveBeenCalled();
    expect(props.closeModal).toHaveBeenCalled();
  });
});
