import documents from "./index";

jest.mock("../../services/documents");
const getDocumentTypesMock = require("../../services/documents")
  .getDocumentTypes;
const getDocumentsMock = require("../../services/documents").getDocuments;
const getShipmentsDocumentsMock = require("../../services/documents")
  .getShipmentsDocuments;
const downloadDocumentsMock = require("../../services/documents")
  .downloadDocument;

const documentsMock = [
  {
    creationTime: "2018-12-17T18:31:05.7039242-02:00",
    id: "Informe de Rendimentos_2015-Banco",
    lastWriteTime: "2018-12-14T18:43:17.0688198-02:00",
    name: "2015-Banco",
    typeId: "Informe de Rendimentos"
  }
];

const shipmentsDocumentsMock = [
  {
    creationTime: "2024-11-05T15:28:08.7039242-02:00",
    id: "Relatório de cobrança-Banco",
    lastWriteTime: "2024-11-05T15:28:33.0688198-02:00",
    name: "Relatório de cobrança",
    typeId: "Cobrança Simples"
  }
];

const documentTypesMock = [
  {
    typeId: "Informe de Rendimentos",
    name: "Earnings Report"
  }
];

let storeMock;
let getStateMock = jest.fn();
let blob;

describe("documents action", () => {
  beforeEach(() => {
    storeMock = { setState: jest.fn(), getState: getStateMock };
    getDocumentTypesMock.mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(documentTypesMock)
      })
    );

    blob = jest.fn(() => "blob");
    getDocumentsMock.mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(documentsMock)
      })
    );

    getShipmentsDocumentsMock.mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(shipmentsDocumentsMock)
      })
    );

    downloadDocumentsMock.mockImplementation(() =>
      Promise.resolve({
        blob
      })
    );
  });

  it("Should return an action object", () => {
    expect(Object.keys(documents(storeMock))).toEqual([
      "getFilesByFolder",
      "getShipmentFiles",
      "downloadDocument"
    ]);
  });

  describe("getFilesByFolder", () => {
    it("Should returns folders", async () => {
      const { getFilesByFolder } = documents(storeMock);

      const folders = await getFilesByFolder();
      expect(getDocumentTypesMock).toHaveBeenCalledWith();
      expect(getDocumentsMock).toHaveBeenCalledWith("Informe de Rendimentos");
      expect(folders).toEqual({
        filesByFolder: [
          {
            typeId: "Informe de Rendimentos",
            name: "Earnings Report",
            files: [
              {
                creationTime: "2018-12-17T18:31:05.7039242-02:00",
                id: "Informe de Rendimentos_2015-Banco",
                lastWriteTime: "2018-12-14T18:43:17.0688198-02:00",
                name: "2015-Banco",
                typeId: "Informe de Rendimentos"
              }
            ]
          }
        ]
      });
    });

    it("Should invoke getAccounts", async () => {
      const { downloadDocument } = documents(storeMock);

      await downloadDocument("mock", 10);
      expect(downloadDocumentsMock).toHaveBeenCalledWith(10);
    });
  });

  describe("getShipmentFiles", () => {
    it("Should return shipmentFile", async () => {
      const { getShipmentFiles } = documents(storeMock);

      const shipmentFiles = await getShipmentFiles("Cobrança Simples");
      expect(getShipmentsDocumentsMock).toHaveBeenCalled();
      expect(shipmentFiles).toEqual({ shipmentFiles: shipmentsDocumentsMock });
    });
  });
});
