import { configure, fireEvent, render } from "@testing-library/react";
import React from "react";
import ShipmentFiles from "./ShipmentFiles";

configure({ testIdAttribute: "data-test" });

describe("Shipment Files", () => {
  const loadingProps = {
    files: [],
    loading: true,
    showMore: false,
    type: "Relatórios de Cobrança Simples",
    download: jest.fn(),
    handleList: jest.fn(),
    verifyFiles: jest.fn(() => true)
  };

  const emptyListprops = {
    files: [],
    loading: false,
    showMore: false,
    type: "Relatórios de Cobrança Simples",
    download: jest.fn(),
    handleList: jest.fn(),
    verifyFiles: jest.fn(() => false)
  };

  const today = new Date();
  today.setDate(20);
  today.setFullYear(2024);
  today.setMonth(9);

  const props = {
    files: [
      {
        name: "Nome do Pdf",
        extension: "pdf",
        lastWriteTime: today,
        id: "file1"
      },
      {
        name: "Nome do Excel",
        extension: "xls",
        lastWriteTime: today,
        id: "file2"
      }
    ],
    loading: false,
    showMore: false,
    type: "Relatórios de Cobrança Simples",
    download: jest.fn(),
    handleList: jest.fn(),
    verifyFiles: jest.fn(() => true)
  };

  const showMoreProps = {
    files: [
      {
        name: "Nome do Pdf",
        extension: "pdf",
        lastWriteTime: today,
        id: "file1"
      },
      {
        name: "Nome do Excel",
        extension: "xls",
        lastWriteTime: today,
        id: "file2"
      }
    ],
    loading: false,
    showMore: true,
    type: "Relatórios de Cobrança Simples",
    download: jest.fn(),
    handleList: jest.fn(),
    verifyFiles: jest.fn(() => true)
  };

  it("Should render default loading", () => {
    const { getByTestId, queryByTestId } = render(
      <ShipmentFiles {...loadingProps} />
    );
    expect(getByTestId("shipmentFiles")).toBeTruthy();
    expect(getByTestId("shimmerLoading")).toBeTruthy();
    expect(queryByTestId("messageBox")).toBeFalsy();
    expect(queryByTestId("title")).toBeFalsy();
    expect(queryByTestId("message")).toBeFalsy();
    expect(queryByTestId("header")).toBeFalsy();
    expect(queryByTestId("fileName")).toBeFalsy();
    expect(queryByTestId("dataField")).toBeFalsy();
    expect(queryByTestId("listContainer")).toBeFalsy();
    expect(queryByTestId("infoContainer")).toBeFalsy();
    expect(queryByTestId("info")).toBeFalsy();
    expect(queryByTestId("link_portal")).toBeFalsy();
    expect(queryByTestId("handleListBtn")).toBeFalsy();
  });

  it("Should render NoContent component when the list is empty", () => {
    const { getByTestId, queryByTestId } = render(
      <ShipmentFiles {...emptyListprops} />
    );
    expect(getByTestId("shipmentFiles")).toBeTruthy();
    expect(queryByTestId("shimmerLoading")).toBeFalsy();
    expect(getByTestId("NoContent")).toBeTruthy();
    expect(queryByTestId("title")).toBeFalsy();
    expect(queryByTestId("message")).toBeFalsy();
    expect(queryByTestId("header")).toBeFalsy();
    expect(queryByTestId("fileName")).toBeFalsy();
    expect(queryByTestId("dataField")).toBeFalsy();
    expect(queryByTestId("listContainer")).toBeFalsy();
    expect(queryByTestId("infoContainer")).toBeFalsy();
    expect(queryByTestId("info")).toBeFalsy();
    expect(queryByTestId("link_portal")).toBeFalsy();
    expect(queryByTestId("handleListBtn")).toBeFalsy();
    expect(props.verifyFiles).not.toHaveBeenCalled()
  });

  it("Should render the file list", () => {
    const { getByTestId, queryByTestId, getByText, getAllByText } = render(
      <ShipmentFiles {...props} />
    );
    expect(getByTestId("shipmentFiles")).toBeTruthy();
    expect(queryByTestId("shimmerLoading")).toBeFalsy();
    expect(queryByTestId("messageBox")).toBeFalsy();
    expect(getByTestId("title")).toBeTruthy();
    expect(getByTestId("message")).toBeTruthy();
    expect(getByTestId("header")).toBeTruthy();
    expect(getByTestId("fileName")).toBeTruthy();
    expect(getByTestId("dataField")).toBeTruthy();
    expect(getByTestId("listContainer")).toBeTruthy();
    expect(queryByTestId("infoContainer")).toBeFalsy();
    expect(queryByTestId("info")).toBeFalsy();
    expect(queryByTestId("link_portal")).toBeFalsy();
    expect(getByTestId("handleListBtn")).toBeTruthy();
    expect(getByText("Nome do Pdf")).toBeTruthy();
    expect(getByText("Nome do Excel")).toBeTruthy();
    expect(getAllByText("10/20/2024")).toBeTruthy();

    expect(props.verifyFiles).toHaveBeenCalledTimes(6)
  });

  it("Should render the information about shown files", () => {
    const { getByTestId, queryByTestId, getByText, getAllByText } = render(
      <ShipmentFiles {...showMoreProps} />
    );
    expect(getByTestId("shipmentFiles")).toBeTruthy();
    expect(queryByTestId("shimmerLoading")).toBeFalsy();
    expect(queryByTestId("messageBox")).toBeFalsy();
    expect(getByTestId("title")).toBeTruthy();
    expect(getByTestId("message")).toBeTruthy();
    expect(getByTestId("header")).toBeTruthy();
    expect(getByTestId("fileName")).toBeTruthy();
    expect(getByTestId("dataField")).toBeTruthy();
    expect(getByTestId("listContainer")).toBeTruthy();
    expect(getByTestId("infoContainer")).toBeTruthy();
    expect(getByTestId("info")).toBeTruthy();
    expect(getByTestId("link_portal")).toBeTruthy();
    expect(getByTestId("handleListBtn")).toBeTruthy();
    expect(getByText("Nome do Pdf")).toBeTruthy();
    expect(getByText("Nome do Excel")).toBeTruthy();
    expect(getAllByText("10/20/2024")).toBeTruthy();
  });

  it("Should call handleList function when handleListBtn got tapped", () => {
    const { getByTestId } = render(<ShipmentFiles {...props} />);

    const handleListBtn = getByTestId("handleListBtn");
    fireEvent.click(handleListBtn);

    expect(props.handleList).toHaveBeenCalled();
  });
});
