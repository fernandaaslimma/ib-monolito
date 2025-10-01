import { getDocuments, getDocumentTypes, getShipmentsDocuments } from "./index";

jest.mock("../../utils/fetchHandler");

const fetchHandlerMock = require("../../utils/fetchHandler").default;

let fetchHandlerImplementation;

global.__API__ = "http://localhost";

beforeEach(() => {
  fetchHandlerImplementation = jest.fn(URI => Promise.resolve(URI));

  fetchHandlerMock.mockImplementation(fetchHandlerImplementation);
});

describe("clientdocuments", () => {
  describe("getDocuments", () => {
    it("Should call fetchHandler with right API url", done => {
      getDocuments("mock").then(resp => {
        expect(resp).toBe(`${__API__}/clientdocuments/v1/files?typeId=mock`);
        done();
      });
    });
  });

  describe("getShipmentsDocuments", () => {
    it("Should call fetchHandler with right API url", done => {
      getShipmentsDocuments("mock").then(resp => {
        expect(resp).toBe(
          `${__API__}/clientdocuments/v1/files?typeId=mock&startDate=2024/10/30&endDate=2024/11/05`
        );
        done();
      });
    });
  });

  describe("getDocumentTypes", () => {
    it("Should call fetchHandler with right API url", done => {
      getDocumentTypes("mock").then(resp => {
        expect(resp).toBe(`${__API__}/clientdocuments/v1/documenttypes`);
        done();
      });
    });
  });
});
