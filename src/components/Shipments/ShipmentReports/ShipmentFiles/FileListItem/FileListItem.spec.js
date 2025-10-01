import { configure, fireEvent, render } from "@testing-library/react";
import React from "react";
import FileListItem from "./FileListItem";

configure({ testIdAttribute: "data-test" });

describe("List Item", () => {
  const today = new Date();
  today.setDate(20);
  today.setFullYear(2024);
  today.setMonth(9);

  const props = {
    file: {
      name: "Nome do Arquivo",
      extension: "pdf",
      lastWriteTime: today,
      id: "file1"
    },
    download: jest.fn()
  };

  const noProps = {
    file: {
      name: "",
      extension: "",
      lastWriteTime: "",
      id: ""
    },
    download: ""
  };

  it("Should render all fields", () => {
    const { getByTestId, getByText } = render(<FileListItem {...props} />);
    expect(getByTestId("fileListItem")).toBeTruthy();
    expect(getByTestId("icon")).toBeTruthy();
    expect(getByTestId("name")).toBeTruthy();
    expect(getByTestId("date")).toBeTruthy();
    expect(getByTestId("downloadfile1")).toBeTruthy();
    expect(getByTestId("downloadIcon")).toBeTruthy();
    expect(getByText("Nome do Arquivo")).toBeTruthy();
    expect(getByText("10/20/2024")).toBeTruthy();
  });

  it("Should not render missing fields", () => {
    const { queryByTestId, getByTestId } = render(
      <FileListItem {...noProps} />
    );
    expect(getByTestId("fileListItem")).toBeTruthy();
    expect(queryByTestId("icon")).toBeFalsy();
    expect(queryByTestId("name")).toBeFalsy();
    expect(queryByTestId("date")).toBeFalsy();
    expect(queryByTestId("downloadfile1")).toBeFalsy();
    expect(queryByTestId("downloadIcon")).toBeFalsy();
  });

  it("should call download function when download button got tapped", () => {
    const { getByTestId } = render(<FileListItem {...props} />);

    const btn = getByTestId("downloadfile1");
    fireEvent.click(btn);

    expect(props.download).toHaveBeenCalledWith(
      "file1",
      "application/pdf",
      "pdf"
    );
  });
});
