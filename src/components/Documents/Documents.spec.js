import React from "react";
import { shallow } from "enzyme";

import Documents from "./Documents";

jest.mock("../../utils/i18n", () => ({
  translate: id => id,
  getLanguage: () => "en-US",
  isZhCN: () => false
}));

const foldersMock = [
  {
    name: "mock",
    typeId: "1",
    files: [1, 2]
  }
];

const foldersWithEmptyFilesMock = [
  {
    name: "mock",
    typeId: "1",
    files: []
  }
];

describe("Documents component", () => {
  let downloadDocument;
  let getFilesByFolder;

  beforeEach(() => {
    downloadDocument = jest.fn();
    getFilesByFolder = jest.fn();
  });

  it("should have an initial state", () => {
    const component = shallow(
      <Documents
        loading={false}
        getFilesByFolder={getFilesByFolder}
        downloadDocument={downloadDocument}
        filesByFolder={foldersMock}
      />
    );
    expect(component.instance().state).toEqual({
      isEmpty: false
    });
  });

  it("should match snapshot with loading", () => {
    expect(
      shallow(
        <Documents
          getFilesByFolder={getFilesByFolder}
          filesByFolder={foldersMock}
          loading
        />
      )
    ).toMatchSnapshot();
  });

  it("should call DefaultContent", () => {
    expect(
      shallow(<Documents getFilesByFolder={getFilesByFolder} loading={false} />)
    ).toMatchSnapshot();
  });

  it("should call not populate folder because of empty folder files", () => {
    expect(
      shallow(
        <Documents
          getFilesByFolder={getFilesByFolder}
          loading={false}
          filesByFolder={foldersWithEmptyFilesMock}
        />
      )
    ).toMatchSnapshot();
  });

  it("should invoke getFilesByFolder", () => {
    shallow(
      <Documents
        getFilesByFolder={getFilesByFolder}
        loading={false}
        filesByFolder={foldersMock}
      />
    );
    expect(getFilesByFolder).toHaveBeenCalledTimes(1);
  });

  it("should invoke downloadDocument", () => {
    const instance = shallow(
      <Documents
        downloadDocument={downloadDocument}
        getFilesByFolder={getFilesByFolder}
        filesByFolder={foldersMock}
        loading={false}
      />
    ).instance();

    instance.download("mock");
    expect(downloadDocument).toHaveBeenCalledWith("mock");
  });
});
