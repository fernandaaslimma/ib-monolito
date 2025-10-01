import React from "react";
import { shallow } from "enzyme";

import ResumeCard from "./ResumeCard";

describe("ResumeCard component", () => {
  it("should match snapshot with empty content", () => {
    const wrapper = shallow(<ResumeCard />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot with BBM resume", () => {
    const wrapper = shallow(
      <ResumeCard
        dataTest="resumeCard"
        cardTitle="Titulo"
        cardMessage="Texto explicativo"
        destinyLogoUri="Bank"
        destinyName="BBM"
        name="Fulano"
        document="09987594477"
        destiny="BBM"
        purpose="Motivo do Consentimento"
        expiration="1641820886000"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
