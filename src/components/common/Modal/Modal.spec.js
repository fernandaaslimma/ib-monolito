import React from "react";
import { render, shallow } from "enzyme";
import { Modal, closeModal } from "./Modal";

describe("Modal component", () => {
  let useEffect;
  const mockUseEffect = () => {
    useEffect.mockImplementation(f => f());
  };

  beforeEach(() => {
    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();
  });
  it("should match snapshot with a closed modal", () => {
    expect(render(<Modal />)).toMatchSnapshot();
  });

  it("should match snapshot with an open modal", () => {
    const props = {
      modalSettings: {
        isOpen: true
      }
    };
    expect(render(<Modal {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot with an open modal with title", () => {
    const props = {
      modalSettings: {
        title: "title",
        isOpen: true
      }
    };
    expect(render(<Modal {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot with an open modal with icon", () => {
    const props = {
      modalSettings: {
        icon: "Close",
        isOpen: true
      }
    };
    expect(render(<Modal {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot with an open modal with description string", () => {
    const props = {
      modalSettings: {
        description: "description",
        isOpen: true
      }
    };
    expect(render(<Modal {...props} />)).toMatchSnapshot();
  });

  it("should render with another props", () => {
    const props = {
      modalSettings: {
        description: ["description1", "description2"],
        isOpen: true,
        closeTreatment: false,
        type: "FixedModal"
      }
    };

    const component = shallow(<Modal {...props} />);

    component.setProps({
      modalSettings: {
        description: ["description1", "description2"],
        isOpen: true,
        closeTreatment: true,
        type: "FixedModal"
      }
    });
    expect(component).toMatchSnapshot();
  });

  it("should update DOM elements correctly", () => {
    const scrollToCopy = jest.fn();
    window.scrollToCopy = scrollToCopy;
    const bodyStyle = {
      position: "fixed",
      overflow: "hidden"
    };
    document.getElementsByTagName("body")[0].style = bodyStyle;

    const isScrollModal = { current: "mock-scroll-value" };

    closeModal(isScrollModal);

    expect(window.scrollTo).toBe(isScrollModal.current);
    expect(document.getElementsByTagName("body")[0].style.position).toBe(
      "relative"
    );
    expect(document.getElementsByTagName("body")[0].style.overflow).toBe(
      "visible"
    );

    delete window.scrollToCopy;
    delete document.getElementsByTagName("body")[0].style.position;
    delete document.getElementsByTagName("body")[0].style.overflow;
  });
});
