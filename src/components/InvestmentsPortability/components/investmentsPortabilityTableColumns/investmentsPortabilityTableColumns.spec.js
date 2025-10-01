jest.mock("moment", () => {
  return jest.fn(() => ({
    format: id => id
  }));
});

import React from "react";
import { configure, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  getStatusCells,
  investmentsPortabilityTableColumns
} from "./investmentsPortabilityTableColumns";

jest.mock("../../../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false,
  getDateFieldPlaceholderByLocale: () => "DD/MM/YYYY",
  getSufixFormatHourByLocate: () => "HH:mm"
}));

configure({ testIdAttribute: "data-test" });

const mockData = [
  {
    status: JSON.stringify({ name: "Finalizada", code: "Conclued" }),
    date: "2025-05-08T12:00:00Z"
  }
];

const MockTable = ({ returnedColumns, data }) => (
  <table>
    <tbody>
      {data.map((row, rIndex) => (
        <tr key={rIndex}>
          {returnedColumns.map(column => (
            <td key={column.field}>
              {column.cellRender
                ? column.cellRender(data[rIndex][column.field])
                : row[column.field]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

describe("Portability Columns", () => {
  it("Should render date column correctly", () => {
    const returnedColumns = getStatusCells(investmentsPortabilityTableColumns);

    const { getByText } = render(
      <MockTable returnedColumns={returnedColumns} data={mockData} />
    );

    expect(getByText("Finalizada")).toBeTruthy();
    expect(getByText("DD/MM/YYYY")).toBeTruthy();
    expect(getByText("HH:mm")).toBeTruthy();
  });
});
