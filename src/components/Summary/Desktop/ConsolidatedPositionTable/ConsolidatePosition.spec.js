import React from "react";
import { shallow } from "enzyme";

import ConsolidatedPositionTable, {
  generateSum
} from "./ConsolidatedPositionTable";
import { ONE_HUNDRED } from "../../../../utils/constants";

const consolidatedPosition = [
  {
    name: "Fixed Income",
    netBalance: 123213.2,
    grossBalance: 12.3,
    portfolioShare: 23
  }
];

const assets = [
  {
    name: "Fixed Income",
    netBalance: 123213.2,
    grossBalance: 12.3,
    portfolioShare: 23
  }
];

describe("ConsolidatedPositionTable component", () => {
  let getAssetsByTypeMock;

  beforeEach(() => {
    getAssetsByTypeMock = jest.fn();
  });

  it("should match snapshot", () => {
    expect(
      shallow(
        <ConsolidatedPositionTable
          consolidatedPosition={consolidatedPosition}
          getAssetsByType={getAssetsByTypeMock}
        />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot with assets", () => {
    expect(
      shallow(
        <ConsolidatedPositionTable
          consolidatedPosition={consolidatedPosition}
          getAssetsByType={getAssetsByTypeMock}
          assets={assets}
        />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot with currentIndex", () => {
    expect(
      shallow(
        <ConsolidatedPositionTable
          consolidatedPosition={consolidatedPosition}
          getAssetsByType={getAssetsByTypeMock}
          currentIndex={1}
        />
      )
    ).toMatchSnapshot();
  });

  it("should generate the sum column", () => {
    const consolidated = [
      {
        name: "LCA",
        netBalance: 15.3,
        grossBalance: 20,
        portfolioShare: 50
      },
      {
        name: "LCI",
        netBalance: 29.0,
        grossBalance: 45.4,
        portfolioShare: 50
      }
    ];

    expect(generateSum(consolidated)).toEqual({
      grossBalance: 65.4,
      netBalance: 44.3,
      portfolioShare: ONE_HUNDRED
    });
  });
});
