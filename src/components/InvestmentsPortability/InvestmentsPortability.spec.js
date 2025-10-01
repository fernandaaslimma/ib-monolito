import React from "react";
import { configure, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import InvestmentsPortability from "./InvestmentsPortability";
import userEvent from "@testing-library/user-event";
import { investmentsPortabilityTableColumns } from "./components/investmentsPortabilityTableColumns/investmentsPortabilityTableColumns";

configure({ testIdAttribute: "data-test" });

jest.mock("../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false
}));

jest.mock("react-bocombbm-components", () => {
  const React = require("react");
  return {
    Hide: ({ children }) => <div>{children}</div>,
    DataTable: ({ data, columns, config, dataTest }) => (
      <table data-test={dataTest}>
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column.field}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              onClick={() => {
                config.rowClick(row);
              }}
              data-test={`${dataTest}_${index}`}
            >
              {columns.map(column => (
                <td key={column.field}>{row[column.field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    ),
    Icon: ({ type }) => <div>{type}</div>,
    AlertMessage: ({ children }) => <div>{children}</div>,
    StepSlider: ({ steps, dataTest }) => {
      const [current, setCurrent] = React.useState(0);
      const stepForward = () => {
        setCurrent(value => value + 1);
      };
      const stepBack = () => {
        setCurrent(value => value - 1);
      };
      return (
        <div data-test={dataTest}>
          {steps?.map(
            (Item, index) =>
              current === index && (
                <Item
                  key={`key${index}`}
                  stepForward={stepForward}
                  stepBack={stepBack}
                />
              )
          )}
        </div>
      );
    }
  };
});

const mockGetPortabilities = jest.fn();

const mockPortabilitiesResponse = [
  {
    date: "2025-05-08T12:00:00Z",
    originInstitution: { name: "Banco A" },
    destinationInstitution: { name: "Banco B" },
    channel: { name: "Online" },
    totalPortabilityIndicator: true,
    portabilityItems: [
      {
        assetType: "assetType",
        originAccount: "originAccount",
        destinationAccount: "destinationAccount",
        totalTransferAssetIndicator: true,
        transferQuantity: 50,
        estimatedDate: "2025-05-08T13:00:00Z",
        modificationDate: "2025-05-08T14:00:00Z",
        remarks: "remarks"
      }
    ]
  },
  {
    date: "2025-05-08T15:00:00Z",
    originInstitution: { documentNumber: 11111111000111 },
    destinationInstitution: { documentNumber: 11111111000111 },
    channel: { name: "Channel 2" },
    totalPortabilityIndicator: false,
    portabilityItems: [
      {
        assetType: "assetType",
        originAccount: "originAccount",
        destinationAccount: "destinationAccount",
        totalTransferAssetIndicator: false,
        transferQuantity: 25,
        estimatedDate: "2025-05-08T16:00:00Z",
        modificationDate: "2025-05-08T17:00:00Z",
        remarks: "remarks"
      }
    ]
  }
];

describe("InvestmentsPortability", () => {
  it("Should call getPortabilities on mount", () => {
    render(
      <InvestmentsPortability
        error={false}
        getPortabilities={mockGetPortabilities}
        portabilitiesResponse={mockPortabilitiesResponse}
        loading={false}
      />
    );

    expect(mockGetPortabilities).toHaveBeenCalled();
  });

  it("Should render StepSlider component", () => {
    const { getByTestId } = render(
      <InvestmentsPortability
        getPortabilities={mockGetPortabilities}
        portabilitiesResponse={mockPortabilitiesResponse}
        loading={false}
      />
    );

    expect(getByTestId("investmentsPortability")).toBeTruthy();
  });

  it("Should render table columns correctly", () => {
    const { getByText } = render(
      <InvestmentsPortability
        error={false}
        getPortabilities={mockGetPortabilities}
        portabilitiesResponse={mockPortabilitiesResponse}
        loading={false}
      />
    );

    investmentsPortabilityTableColumns.forEach(column => {
      expect(getByText(column.title)).toBeTruthy();
    });
  });

  it("Should render table data correctly", () => {
    const teste = jest.fn();
    const { getByText, queryByTestId, getByTestId } = render(
      <InvestmentsPortability
        error={false}
        getPortabilities={mockGetPortabilities}
        portabilitiesResponse={mockPortabilitiesResponse}
        loading={false}
        teste={teste}
      />
    );

    expect(getByTestId("portabilities")).toBeTruthy();

    expect(getByText("2025-05-08T12:00:00Z")).toBeTruthy();
    expect(getByText("Banco A")).toBeTruthy();
    expect(getByText("Banco B")).toBeTruthy();
    expect(getByText("Online")).toBeTruthy();
    expect(getByText("NÃO")).toBeTruthy();

    expect(queryByTestId("portabilitiesDetail")).toBeFalsy();
  });

  it("Should render detail after the row got tapped", () => {
    const teste = jest.fn();
    const { queryByTestId, getByTestId } = render(
      <InvestmentsPortability
        error={false}
        getPortabilities={mockGetPortabilities}
        portabilitiesResponse={mockPortabilitiesResponse}
        loading={false}
        teste={teste}
      />
    );

    const item = getByTestId("portabilities_0");

    expect(item).toBeTruthy();
    expect(queryByTestId("portabilitiesDetail")).toBeFalsy();

    userEvent.click(item);

    expect(getByTestId("portabilitiesDetail")).toBeTruthy();
    expect(getByTestId("portabilitiesDetail_0")).toBeTruthy();
    const btn = getByTestId("backButton");

    userEvent.click(btn);
    expect(queryByTestId("portabilitiesDetail")).toBeFalsy();
  });

  it("Should display default content when no records are found", () => {
    const { getByText } = render(
      <InvestmentsPortability
        error={false}
        getPortabilities={mockGetPortabilities}
        portabilitiesResponse={[]}
        loading={false}
      />
    );

    expect(getByText("NO_PORTABILITY")).toBeTruthy();
    expect(getByText("NO RECORD WAS FOUND")).toBeTruthy();
  });

  it("Should display default content when no records are found without portability param", () => {
    const { getByText } = render(
      <InvestmentsPortability
        error={false}
        getPortabilities={mockGetPortabilities}
        loading={false}
      />
    );

    expect(getByText("NO_PORTABILITY")).toBeTruthy();
    expect(getByText("NO RECORD WAS FOUND")).toBeTruthy();
  });
});
