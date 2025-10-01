import React from "react";
import { shallow, mount } from "enzyme";
import withMaintenanceMode from "./withMaintenanceMode";

const props = {
  isMaintenance: false,
  resetMaintenance: jest.fn()
};

describe("withMaintenanceMode component", () => {
  it("should match snapshot with default props", () => {
    expect(shallow(<withMaintenanceMode />)).toMatchSnapshot();
  });

  it("should match snapshot with maintenance Mode", () => {
    expect(shallow(<withMaintenanceMode {...props} />)).toMatchSnapshot();
  });

  it("should Render passed Component", () => {
    const PassedComponent = () => <div>done</div>;
    const Wrapped = mount(
      <PassedComponent isMaintenance={!props.isMaintenance} />
    );
    expect(Wrapped.find({ prop: "isMaintenance" })).toHaveLength(0);
  });
  it("should call unmount without errors", done => {
    const wrapper = shallow(<withMaintenanceMode {...props} />);
    wrapper.unmount();

    done();
  });
});
