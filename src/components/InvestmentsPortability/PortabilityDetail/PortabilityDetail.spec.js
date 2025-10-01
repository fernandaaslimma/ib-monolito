import React from "react";
import { configure, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import PortabilityDetail from "./PortabilityDetail";
import { investmentsPortabilityDetailsTableColumns } from "../components/investmentsPortabilityTableColumns/investmentsPortabilityTableColumns";

configure({ testIdAttribute: "data-test" });

jest.mock("../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false
}));

jest.mock("react-bocombbm-components", () => ({
  DataTable: ({ data, columns, config, dataTest }) =>
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
  ,
  Icon: ({ type }) => <div>{type}</div>,
  AlertMessage: ({ children }) => <div>{children}</div>,
  Hide: ({ children }) => <div>{children}</div>
}));

const mockBackToMainTable = jest.fn();
const stepBackMock = jest.fn();

const mockSelectedItem = {
  date: "2025-05-08T12:00:00Z",
  originInstitution: "Banco A",
  destinationInstitution: "Banco B",
  status: JSON.stringify({ name: "Em processamento", code: "Processing" })
};

const mockSelectedDetails = [
  {
    accountType: "accountType",
    sourceCustodianAccount: "sourceCustodianAccount",
    destinationCustodianAccount: "destinationCustodianAccount",
    status: "Finalizada",
    allAssets: "Sim",
    quantityTransfer: 50,
    estimate: "2025-05-08T13:00:00Z",
    lastUpdate: "2025-05-08T14:00:00Z",
    notes: "notes"
  }
];

describe("Portability Detail", () => {
  it("Should render the table columns correctly", () => {
    const { getByTestId, getByText } = render(
      <PortabilityDetail
        selectedItem={mockSelectedItem}
        selectedDetails={mockSelectedDetails}
        backToMainTable={mockBackToMainTable}
      />
    );

    expect(getByTestId("portabilitiesDetail")).toBeTruthy();

    investmentsPortabilityDetailsTableColumns.forEach(column => {
      expect(getByText(column.title)).toBeTruthy();
    });
  });

  it("Should render the table body correctly", () => {
    const { getByText } = render(
      <PortabilityDetail
        selectedItem={mockSelectedItem}
        selectedDetails={mockSelectedDetails}
        backToMainTable={mockBackToMainTable}
      />
    );

    expect(getByText("accountType")).toBeTruthy();
    expect(getByText("sourceCustodianAccount")).toBeTruthy();
    expect(getByText("destinationCustodianAccount")).toBeTruthy();
    expect(getByText("Finalizada")).toBeTruthy();
    expect(getByText("50")).toBeTruthy();
    expect(getByText("2025-05-08T13:00:00Z")).toBeTruthy();
    expect(getByText("2025-05-08T14:00:00Z")).toBeTruthy();
    expect(getByText("notes")).toBeTruthy();
  });

  it("Should call mockBackToMainTable when back button got tapped", () => {
    const { getByTestId } = render(
      <PortabilityDetail
        selectedItem={mockSelectedItem}
        selectedDetails={mockSelectedDetails}
        backToMainTable={mockBackToMainTable}
        stepBack={stepBackMock}
      />
    );

    const button = getByTestId("backButton");

    expect(button).toBeTruthy();
    userEvent.click(button);

    expect(mockBackToMainTable).toHaveBeenCalled();
    expect(stepBackMock).toHaveBeenCalled();
  });
});
