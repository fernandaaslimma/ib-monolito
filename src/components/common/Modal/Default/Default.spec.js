import React from "react";
import { shallow } from "enzyme";
import { CloseBtn } from "../styles";
import Default, { renderDescription } from "./Default";

describe("renderDescription", () => {
  it("should return a single description", () => {
    expect(renderDescription("test")).toMatchSnapshot();
  });

  it("should return multiple descriptions", () => {
    expect(renderDescription(["test1", "test2"])).toMatchSnapshot();
  });

  it("should return no descriptions", () => {
    expect(renderDescription()).toMatchSnapshot();
  });
});

describe("Default component", () => {
  it("should match snapshot with a closed modal", () => {
    expect(shallow(<Default />)).toMatchSnapshot();
  });

  it("should match snapshot with an open modal", () => {
    const props = {
      modalSettings: {
        isOpen: true
      }
    };
    expect(shallow(<Default {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot with an open modal with title", () => {
    const props = {
      modalSettings: {
        title: "title",
        isOpen: true
      }
    };
    expect(shallow(<Default {...props} />)).toMatchSnapshot();
  });

  it("should trigger modalSettings.onClose prop when click on NO button", () => {
    const props = {
      modalSettings: {
        onClose: jest.fn()
      }
    };

    shallow(<Default {...props} />)
      .find(CloseBtn)
      .at(0)
      .simulate("click");

    expect(props.modalSettings.onClose).toHaveBeenCalled();
  });

  it("should match snapshot with an open modal with icon", () => {
    const props = {
      modalSettings: {
        icon: "Close",
        isOpen: true
      }
    };
    expect(shallow(<Default {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot with an open modal with description string", () => {
    const props = {
      modalSettings: {
        description: "description",
        isOpen: true
      }
    };
    expect(shallow(<Default {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot with an open modal with description array", () => {
    const props = {
      modalSettings: {
        description: ["description1", "description2"],
        isOpen: true
      }
    };
    expect(shallow(<Default {...props} />)).toMatchSnapshot();
  });
});
