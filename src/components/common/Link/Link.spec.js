import React from "react";
import { shallow } from "enzyme";

import Link from "./Link";

describe("Link component", () => {
  it("should render highlighted class when isCallToAction is truthy", () => {
    expect(shallow(<Link isCallToAction>Text</Link>)).toMatchSnapshot();
  });

  it("should match snapshot with disabled", () => {
    expect(shallow(<Link disabled>Text</Link>)).toMatchSnapshot();
  });

  it("should match snapshot with loading", () => {
    expect(shallow(<Link loading>Text</Link>)).toMatchSnapshot();
  });

  it("should match snapshot with disabled and loading", () => {
    expect(
      shallow(
        <Link disabled loading>
          Text
        </Link>
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot with small flag", () => {
    expect(shallow(<Link small>Text</Link>)).toMatchSnapshot();
  });

  it('should render an "a" tag', () => {
    expect(shallow(<Link href="/">Text</Link>)).toMatchSnapshot();
  });

  it('should render an "a" tag with a to prop', () => {
    expect(shallow(<Link to="/">Text</Link>)).toMatchSnapshot();
  });
});
