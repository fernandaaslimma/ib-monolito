import React from "react";
import { shallow } from "enzyme";

import Equities from "./Equities";

jest.mock("../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => {},
  isZhCN: () => false
}));

const equities = [
  {
    name: "name",
    date: "12/12",
    grossBalance: 123,
    portfolioShare: 123
  }
];

describe("Equities component", () => {
  let getEquitiesMock;
  let getTotalEquitiesMock;

  beforeEach(() => {
    getEquitiesMock = jest.fn();
    getTotalEquitiesMock = jest.fn();
  });

  it("should have an initial state", () => {
    const component = shallow(
      <Equities
        getEquities={getEquitiesMock}
        getTotalEquities={getTotalEquitiesMock}
      />
    );
    expect(component.instance().state).toEqual({
      isEmpty: false
    });
  });

  it("should match snapshot with loading", () => {
    expect(
      shallow(
        <Equities
          getEquities={getEquitiesMock}
          getTotalEquities={getTotalEquitiesMock}
          loading={true}
        />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot without accounts", () => {
    expect(
      shallow(
        <Equities
          getEquities={getEquitiesMock}
          loading={false}
          getTotalEquities={getTotalEquitiesMock}
        />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot with accounts", () => {
    expect(
      shallow(
        <Equities
          getEquities={getEquitiesMock}
          getTotalEquities={getTotalEquitiesMock}
          loading={false}
          equities={equities}
        />
      )
    ).toMatchSnapshot();
  });

  it("should invoke getEquities", () => {
    shallow(
      <Equities
        getEquities={getEquitiesMock}
        getTotalEquities={getTotalEquitiesMock}
        loading={false}
        equities={equities}
      />
    );
    expect(getEquitiesMock).toHaveBeenCalledTimes(1);
  });

  it("should invoke getTotalEquities", () => {
    shallow(
      <Equities
        getEquities={getEquitiesMock}
        loading={false}
        getTotalEquities={getTotalEquitiesMock}
        equities={equities}
      />
    );
    expect(getTotalEquitiesMock).toHaveBeenCalledTimes(1);
  });
});
