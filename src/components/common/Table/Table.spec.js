import React from "react";
import { shallow } from "enzyme";

import Table, {
  renderInfo,
  renderIcon,
  generateCollapseTable,
  generateTotalTable,
  getRows,
  buildShimmerRows,
  buildShimmerTotalRow
} from "./Table";
import ShimmerLoading from "../ShimmerLoading/ShimmerLoading";
const pendingTransactions = [
  {
    id: 123,
    type: "subscription",
    typeLabel: "subscription",
    idempotencyKey: "0b5ecefd-c892-4fdf-a3ce-c77b9259d309",
    transactionValue: 123456.99,
    transactionDate: "2021-02-22",
    product: {
      id: 456,
      name: "BOCOM BBM CORPORATE CREDIT FIC MULTIMERCADO CRÉDITO PRIVADO",
      riskProfile: "Moderate",
      riskProfileLabel: "Moderado",
      classType: "HedgeFund",
      classTypeLabel: "Multimercado"
    }
  },
  {
    id: 123,
    type: "subscription",
    typeLabel: "subscription",
    idempotencyKey: "0b5ecefd-c892-4fdf-a3ce-c77b9259d309",
    transactionValue: 123456.99,
    transactionDate: "2021-02-17",
    product: {
      id: 456,
      name: "BOCOM BBM CORPORATE CREDIT FIC MULTIMERCADO CRÉDITO PRIVADO",
      riskProfile: "Aggressive",
      riskProfileLabel: "Agressivo",
      classType: "HedgeFund",
      classTypeLabel: "Multimercado"
    }
  }
];
describe("Table component", () => {
  it("should match snapshot with blank data", () => {
    expect(shallow(<Table userInfo={[]} data={[]} />)).toMatchSnapshot();
  });

  it("should match snapshot with blank data and total", () => {
    expect(shallow(<Table userInfo={[]} data={[]} total />)).toMatchSnapshot();
  });

  it("should match snapshot with blank data and title", () => {
    expect(
      shallow(<Table userInfo={[]} data={[]} title="Main title" />)
    ).toMatchSnapshot();
  });

  it("should match snapshot with headers empty", () => {
    expect(
      shallow(<Table userInfo={[]} data={[]} headers={[]} />)
    ).toMatchSnapshot();
  });

  it("should match snapshot with pendingtransaction", () => {
    expect(
      shallow(
        <Table
          userInfo={[]}
          data={[]}
          headers={[]}
          pendingTransactions={pendingTransactions}
        />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot without pendindtransactions", () => {
    expect(
      shallow(
        <Table userInfo={[]} data={[]} headers={[]} pendingTransactions={[]} />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot with headers with values", () => {
    expect(
      shallow(
        <Table
          userInfo={[]}
          data={[]}
          headers={[
            { title: "title", name: "name" },
            { title: "title2", name: "name2" }
          ]}
        />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot with zebra", () => {
    expect(
      shallow(<Table userInfo={[]} data={[]} zebra={true} />)
    ).toMatchSnapshot();
  });

  it("should match snapshot with background", () => {
    expect(
      shallow(<Table userInfo={[]} data={[]} withBackground={true} />)
    ).toMatchSnapshot();
  });

  it("should match snapshot with collapse", () => {
    expect(
      shallow(
        <Table
          userInfo={[]}
          data={[]}
          collapse={{
            onCollapse: () => {},
            data: [1, 2, 3],
            index: 1
          }}
        />
      )
    ).toMatchSnapshot();
  });

  describe("renderInfo", () => {
    it("should return null when isFirstItem is false and collapse.index is equal the index", () => {
      const data = {};
      const header = { field: "field" };
      const collapse = { index: 1 };
      const index = 1;
      const isFirstItem = false;
      expect(renderInfo(data, header, collapse, index, isFirstItem)).toBe(null);
    });

    it("should not return null when collapse.index is different then the index", () => {
      const data = {};
      const header = { field: "field" };
      const collapse = { index: 2 };
      const index = 1;
      const isFirstItem = false;
      expect(renderInfo(data, header, collapse, index, isFirstItem)).not.toBe(
        null
      );
    });

    it("should not return null when isFirstItem is true", () => {
      const data = {};
      const header = { field: "field" };
      const collapse = { index: 1 };
      const index = 1;
      const isFirstItem = true;
      expect(renderInfo(data, header, collapse, index, isFirstItem)).not.toBe(
        null
      );
    });
    it("should not return null when isFirstItem is false", () => {
      const data = {};
      const header = { field: "field" };
      const collapse = { index: 1 };
      const index = 1;
      const isFirstItem = false;
      expect(renderInfo(data, header, collapse, index, isFirstItem)).toBe(null);
    });
  });

  describe("renderIcon", () => {
    it("should return the icon when collapse and isFirstItem is truthy", () => {
      const collapse = true;
      const i = 1;
      const isFirstItem = true;

      expect(renderIcon(collapse, i, isFirstItem)).not.toBe(null);
    });

    it("should not return the icon when collapse is falsy", () => {
      const collapse = false;
      const i = 1;
      const isFirstItem = true;

      expect(renderIcon(collapse, i, isFirstItem)).toBe(null);
    });

    it("should not return the icon when isFirstItem is falsy", () => {
      const collapse = true;
      const i = 1;
      const isFirstItem = false;

      expect(renderIcon(collapse, i, isFirstItem)).toBe(null);
    });
  });

  describe("generateCollapseTable", () => {
    it("return the collapse table ", () => {
      const collapse = {
        shimmerLoading: {
          loading: true,
          rows: 3
        },
        data: [
          {
            field: "field"
          }
        ],
        render: () => null
      };
      const headers = [
        {
          align: true,
          width: true,
          field: "field"
        }
      ];
      const totalData = [];
      expect(generateCollapseTable(collapse, headers, totalData)).not.toBe(
        null
      );
    });
  });

  describe("generateTotalTable", () => {
    it("should return the total table", () => {
      const headers = [];
      const total = true;
      expect(generateTotalTable(headers, total)).not.toBe(null);
    });
  });

  describe("getRows", () => {
    it("should return the data if shimmerLoading is null", () => {
      const data = [{ field: "field" }];
      const headers = [];
      expect(getRows(null, data, headers)).toEqual(data);
    });

    it("should return the data if shimmerLoading.loading is false", () => {
      const shimmerLoading = {
        loading: false
      };
      const data = [{ field: "field" }];
      const headers = [];
      expect(getRows(shimmerLoading, data, headers)).toEqual(data);
    });

    it("should return the shimmer rows otherwise", () => {
      const shimmerLoading = {
        loading: true
      };
      const data = [{ field: "field" }];
      const headers = [];
      expect(getRows(shimmerLoading, data, headers)).toEqual([]);
    });
  });

  describe("buildShimmerRows", () => {
    it("should return the shimmer rows", () => {
      const headers = [{ field: "first" }, { field: "second" }];
      const shimmerLoading = {
        rows: 3
      };
      const rows = buildShimmerRows(headers, shimmerLoading);
      expect(rows.length).toEqual(3);
    });
  });

  describe("buildShimmerTotalRow", () => {
    it("should return the shimmer rows", () => {
      const headers = [{ field: "first" }, { field: "second" }];
      const rows = buildShimmerTotalRow(headers);
      expect(rows).toEqual({
        first: <ShimmerLoading darker={true} index={0} inverse={false} />,
        second: <ShimmerLoading darker={true} index={0} inverse={false} />
      });
    });
  });
});
