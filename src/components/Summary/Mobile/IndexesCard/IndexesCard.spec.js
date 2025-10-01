import React from "react";
import { shallow } from "enzyme";

import IndexesCard from "./IndexesCard";

const indexes = [
  {
    date: "2010-01-01",
    index: "CDI",
    monthAcrrued: 0.3,
    yearAccrued: 12.7
  },
  {
    date: "2010-01-01",
    index: "Dolar",
    monthAcrrued: 0.7,
    yearAccrued: 10.7
  }
];

describe("IndexesCard component", () => {
  it("should match snapshot", () => {
    expect(shallow(<IndexesCard indexes={indexes} />)).toMatchSnapshot();
  });
});
