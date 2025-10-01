import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";
import { Text, ToggleButton } from "./styles";

jest.mock("../../../utils/openFile");
jest.mock("../../../utils/i18n");
jest.mock("../../../utils/openExternalLink");
jest.useFakeTimers();

const isPt = require("../../../utils/i18n").isPtBR;
isPt.mockImplementation(() => false);
const externalLinkMock = require("../../../utils/openExternalLink").default;
externalLinkMock.mockImplementation(jest.fn());

const props = {
  openModal(config) {
    config.children();
  },
  history: {
    push: jest.fn()
  },
  closeModal: jest.fn(),
  resetErrors: jest.fn()
};

describe("Header component", () => {
  it("should match snapshot with props", () => {
    expect(shallow(<Footer {...props} />)).toMatchSnapshot();
  });

  describe("toggleButton", () => {
    it("should update the state", () => {
      const instance = shallow(<Footer {...props} />).instance();

      instance.toggleButton({ expanded: true });
      expect(instance.state.expanded).toBe(true);
    });
  });

  it("should update the state by click the footer toggle button", () => {
    const shallowComponent = shallow(<Footer {...props} />);
    const spy = jest.spyOn(shallowComponent.instance(), "toggleButton");

    shallowComponent
      .find(ToggleButton)
      .at(0)
      .simulate("click");

    expect(spy).toHaveBeenCalled();
  });

  it("should click footer link and invoke history url redirection", () => {
    const shallowComponent = shallow(<Footer {...props} />);

    shallowComponent
      .find(Text)
      .at(0)
      .simulate("click");

    expect(props.history.push).toHaveBeenCalledWith("/registrato");
  });

  it("should click footer link and invoke history url redirection", () => {
    const shallowComponent = shallow(<Footer {...props} />);

    shallowComponent
      .find(Text)
      .at(1)
      .simulate("click");
  });

  it("should click footer link and open external link in english", () => {
    const shallowComponent = shallow(<Footer {...props} />);

    shallowComponent
      .find(Text)
      .at(2)
      .simulate("click");

    expect(externalLinkMock).toHaveBeenCalledWith(
      "https://www.bocombbm.com.br/en/governance/compliance/"
    );
  });

  it("should click footer link and open external link in portuguese", () => {
    isPt.mockImplementation(() => true);
    const shallowComponent = shallow(<Footer {...props} />);

    shallowComponent
      .find(Text)
      .at(2)
      .simulate("click");

    expect(externalLinkMock).toHaveBeenCalledWith(
      "https://www.bocombbm.com.br/governanca-corporativa/compliance/"
    );
  });

  it("should click footer link and open credit context", () => {
    const shallowComponent = shallow(<Footer {...props} />);

    shallowComponent
      .find(Text)
      .at(3)
      .simulate("click");

    expect(props.history.push).toHaveBeenCalledWith("/credit");
  });

  it("should call function scrollToTop", () => {
    const setTimeoutMock = jest.fn();
    global.setTimeout = setTimeoutMock;

    const shallowComponent = shallow(<Footer {...props} />).instance();

    shallowComponent.openContactModal();
    expect(setTimeoutMock).toHaveBeenCalledTimes(1);
    expect(setTimeoutMock).toHaveBeenLastCalledWith(expect.any(Function), 100);
  });

  it("should call function openContactModal", () => {
    const shallowComponent = shallow(<Footer {...props} />).instance();
    shallowComponent.openContactModal();
  });

  it("should click footer link and open credit context", () => {
    const shallowComponent = shallow(<Footer {...props} />);
    const instance = shallowComponent.instance();

    shallowComponent
      .find(Text)
      .at(4)
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
});
