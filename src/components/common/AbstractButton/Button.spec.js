import React from "react";
import { shallow, mount } from "enzyme";

import Button from "./Button";

describe("Button component", () => {
  it("should match snapshot", () => {
    expect(shallow(<Button>Text</Button>)).toMatchSnapshot();
  });

  it('should render an "button" tag', () => {
    expect(shallow(<Button>Text</Button>)).toMatchSnapshot();
    expect(mount(<Button>Text</Button>).find("button").length).toBe(1);
  });

  it("should render highlighted class when isCallToAction is truthy", () => {
    expect(shallow(<Button isCallToAction>Text</Button>)).toMatchSnapshot();
  });

  it("should render disabled class when disabled is truthy", () => {
    expect(shallow(<Button disabled>Text</Button>)).toMatchSnapshot();
  });

  it("should render different types", () => {
    expect(shallow(<Button type="submit">Text</Button>)).toMatchSnapshot();
  });

  it("should render different widths", () => {
    expect(shallow(<Button width="100">Text</Button>)).toMatchSnapshot();
  });
});
