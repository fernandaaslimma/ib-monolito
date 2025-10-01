import React from "react";
import { mount, shallow } from "enzyme";
import { Tab } from "./styles";

import Subnav from "./Subnav";

const tabs = [
  {
    text: "tab1",
    url: "/tab1"
  },
  {
    text: "tab2",
    url: "/tab2"
  }
];

let historyMock;

beforeEach(() => {
  historyMock = {
    location: {
      pathname: "/tab1"
    },
    listen: jest.fn(),
    push: jest.fn()
  };
});

describe("Subnav component", () => {
  it("should match snapshot with no tabs", () => {
    expect(shallow(<Subnav history={historyMock} />)).toMatchSnapshot();
  });

  it("should match snapshot with context title", () => {
    expect(
      shallow(<Subnav history={historyMock} contextTitle="context title" />)
    ).toMatchSnapshot();
  });

  it("should match snapshot with tabs", () => {
    expect(
      shallow(<Subnav history={historyMock} tabs={tabs} />)
    ).toMatchSnapshot();
  });

  it("should invoke listen", () => {
    shallow(<Subnav history={historyMock} tabs={tabs} />);

    expect(historyMock.listen).toHaveBeenCalledTimes(1);
  });

  it("should have a activeUrl state as same as location.pathname when component mounts", () => {
    const MountedSubnav = mount(<Subnav history={historyMock} tabs={tabs} />);

    expect(MountedSubnav.state("activeUrl")).toMatch(
      historyMock.location.pathname
    );
  });

  it("should call history.push with the same url as clicked tab", () => {
    const MountedSubnav = mount(<Subnav history={historyMock} tabs={tabs} />);

    MountedSubnav.find(Tab)
      .at(1)
      .simulate("click");

    expect(historyMock.push).toHaveBeenCalledWith(tabs[1].url);
  });
});

describe("this.historyListenner and componentWillUnmount", () => {
  it("should invoke history.listen when component mounts", () => {
    shallow(<Subnav history={historyMock} tabs={tabs} />);

    expect(historyMock.listen).toHaveBeenCalledTimes(1);
  });

  it("should update the state when location changes", () => {
    const MountedSubnav = mount(<Subnav history={historyMock} tabs={tabs} />);
    expect(MountedSubnav.state("activeUrl")).toMatch(
      historyMock.location.pathname
    );
    const newLocation = "/tab2";
    historyMock.listen.mock.calls[0][0]({ pathname: newLocation });
    expect(MountedSubnav.state("activeUrl")).toMatch(newLocation);
  });
});
