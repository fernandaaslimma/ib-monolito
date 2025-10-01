import { configure, fireEvent, render } from "@testing-library/react";
import React from "react";
import Reports from "./Reports";

configure({ testIdAttribute: "data-test" });

describe("Reports", () => {
  const today = new Date();
  today.setDate(20);
  today.setFullYear(2024);
  today.setMonth(9);

  const props = {
    shipmentFiles: [
      {
        file: {
          name: "Nome do Arquivo",
          extension: "pdf",
          lastWriteTime: today,
          id: "file1"
        }
      }
    ],
    getShipmentFiles: jest.fn(),
    downloadDocument: jest.fn()
  };

  const linkedShipment = "Cobrança Vinculada";
  const simpleShipment = "Cobrança Simples";

  it("Should render the reports content", () => {
    const { getByTestId } = render(<Reports {...props} />);
    expect(getByTestId("reportsContainer")).toBeTruthy();
    expect(getByTestId("reportsAlternativeTabs")).toBeTruthy();
    expect(getByTestId("linkedShipment")).toBeTruthy();
    expect(getByTestId("individualTab0")).toBeTruthy();
    expect(getByTestId("individualTab1")).toBeTruthy();

    expect(props.getShipmentFiles).toHaveBeenCalled();
  });

  it("Should switch between tabs", () => {
    const { getByTestId } = render(<Reports {...props} />);
    const tab0 = getByTestId("individualTab0");
    const tab1 = getByTestId("individualTab1");

    fireEvent.click(tab1);
    expect(props.getShipmentFiles).toHaveBeenCalledWith(simpleShipment);
    expect(getByTestId("simpleShipment")).toBeTruthy();

    fireEvent.click(tab0);
    expect(props.getShipmentFiles).toHaveBeenCalledWith(linkedShipment);
    expect(getByTestId("linkedShipment")).toBeTruthy();
  });

  it("Should call downloadDocument function when downloadbtn got tapped", () => {
    const { getByTestId } = render(<Reports {...props} />);

    setTimeout(() => {
      const downloadBtn = getByTestId("downloadfile1");
      fireEvent.click(downloadBtn);
      expect(props.downloadDocument).toHaveBeenCalled();
    }, 1000);
  });
});
