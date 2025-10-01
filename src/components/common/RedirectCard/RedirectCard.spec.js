import React from "react";
import { shallow } from "enzyme";

import RedirectCard from "./RedirectCard";

describe("RedirectCard component", () => {
  it("should match snapshot with empty content", () => {
    const wrapper = shallow(<RedirectCard />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot with BBM an ITAU", () => {
    const wrapper = shallow(
      <RedirectCard
        dataTest="redirect"
        origin="Bbm"
        originName="BOCOM BBM"
        destiny="Itau"
        destinyName="Banco Ïtau SA"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
