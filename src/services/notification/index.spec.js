import { getIbNotificationAPI } from "./index";

jest.mock("../../utils/fetchHandler");

const fetchHandlerMock = require("../../utils/fetchHandler").default;

let fetchHandlerImplementation;

global.__API__ = "http://localhost";

beforeEach(() => {
  fetchHandlerImplementation = jest.fn(URI => Promise.resolve(URI));

  fetchHandlerMock.mockImplementation(fetchHandlerImplementation);
});

describe("getNotification", () => {
  it("Should call fetchHandler with right API url", done => {
    getIbNotificationAPI().then(resp => {
      expect(resp).toBe(`${__API__}/ibnotifications/v1/notifications`);
      done();
    });
  });
});
