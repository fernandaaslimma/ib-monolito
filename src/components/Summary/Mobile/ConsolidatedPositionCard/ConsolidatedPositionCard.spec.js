import React from "react";
import { shallow } from "enzyme";

import ConsolidatedPositionCard, {
  generateSum
} from "./ConsolidatedPositionCard";

const consolidatedPosition = [
  {
    name: "Fixed Income",
    netBalance: 123213.2,
    grossBalance: 12.3,
    portfolioShare: 50
  }
];

const assets = [
  {
    name: "Fixed Income",
    netBalance: 123213.2,
    grossBalance: 12.3,
    portfolioShare: 50
  }
];

describe("ConsolidatedPositionCard component", () => {
  let getAssetsByTypeMock;

  beforeEach(() => {
    getAssetsByTypeMock = jest.fn();
  });

  it("should match snapshot", () => {
    expect(
      shallow(
        <ConsolidatedPositionCard
          consolidatedPosition={consolidatedPosition}
          getAssetsByType={getAssetsByTypeMock}
        />
      )
    ).toHaveLength(1);
  });

  it("should match snapshot with assets", () => {
    expect(
      shallow(
        <ConsolidatedPositionCard
          consolidatedPosition={consolidatedPosition}
          getAssetsByType={getAssetsByTypeMock}
          assets={assets}
        />
      )
    ).toHaveLength(1);
  });

  it("should match snapshot with currentIndex", () => {
    expect(
      shallow(
        <ConsolidatedPositionCard
          consolidatedPosition={consolidatedPosition}
          getAssetsByType={getAssetsByTypeMock}
          currentIndex={1}
        />
      )
    ).toHaveLength(1);
  });

  it("should generate the sum column", () => {
    const consolidated = [
      {
        name: "LCA",
        netBalance: 15.3,
        grossBalance: 20,
        portfolioShare: 0.4
      },
      {
        name: "LCI",
        netBalance: 29.0,
        grossBalance: 45.4,
        portfolioShare: 13
      }
    ];

    expect(generateSum(consolidated)).toEqual({
      grossBalance: 65.4,
      netBalance: 44.3,
      portfolioShare: 13.4
    });
  });
});
