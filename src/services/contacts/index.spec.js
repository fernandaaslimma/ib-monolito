import {
  getAccountManagersAPI,
  getAccountManagersPhotosAPI,
  getButtonsMessagesAPI,
  postEmailAPI
} from "./index";

jest.mock("../../utils/fetchHandler");

const fetchHandlerMock = require("../../utils/fetchHandler").default;

let fetchHandlerImplementation;
global.__API__ = "http://localhost";
global.__SERVER__ = "";

describe("position", () => {
  beforeEach(() => {
    fetchHandlerImplementation = jest.fn(URI => Promise.resolve(URI));

    fetchHandlerMock.mockImplementation(fetchHandlerImplementation);
  });
  describe("getAccountManagersAPI", () => {
    it("Should call fetchHandler with new API url", done => {
      getAccountManagersAPI().then(resp => {
        expect(resp).toBe(`${__API__}/personmanagement/v1/accountmanager`);
        done();
      });
    });
  });
  describe("getAccountManagersPhotosAPI", () => {
    it("Should call fetchHandler with new API url", done => {
      getAccountManagersPhotosAPI().then(resp => {
        expect(resp).toBe(
          `${__API__}/personmanagement/v1/accountmanager/undefined/photo/64x64`
        );
        done();
      });
    });
  });
  describe("getButtonsMessagesAPI", () => {
    it("Should call fetchHandler with new API url", done => {
      getButtonsMessagesAPI().then(resp => {
        expect(resp).toBe(`${__API__}/clientcontacts/v1/messages`);
        done();
      });
    });
  });
  describe("postEmailAPI ", () => {
    it("Should call fetchHandler with new API url", done => {
      postEmailAPI().then(resp => {
        expect(resp).toBe(`${__API__}/clientcontacts/v1/mail/send`);
        done();
      });
    });
  });
});
