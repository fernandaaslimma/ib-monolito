import {
  getAuthFactors,
  createAuthCode,
  checkMFA,
  createAuthFactor,
  aproveAuthFactor,
  activateAuthFactor
} from "./index";

jest.mock("../../utils/fetchHandler");

const fetchHandlerMock = require("../../utils/fetchHandler").default;

let fetchHandlerImplementation;

global.__API__ = "";

beforeEach(() => {
  fetchHandlerImplementation = jest.fn(URI => Promise.resolve(URI));

  fetchHandlerMock.mockImplementation(fetchHandlerImplementation);
});

describe("getAuthFactors", () => {
  it("Should call getAuthFactors with right API url", done => {
    getAuthFactors("mail").then(resp => {
      expect(resp).toBe(
        `${__API__}/authcodesmanager/v1/users/authfactors/ib/mail?activated=true&approved=true`
      );
      done();
    });
  });
});

describe("createAuthCode", () => {
  it("Should call createAuthCode with right API url", done => {
    createAuthCode().then(resp => {
      expect(resp).toBe(`${__API__}/authcodesmanager/v1/authcodes`);
      done();
    });
  });
});

describe("checkMFA", () => {
  it("Should call checkMFA with right API url", done => {
    checkMFA(1).then(resp => {
      expect(resp).toBe("/authcodesmanager/v1/authcodes/1/approve");
      done();
    });
  });
});

describe("createAuthFactor", () => {
  const body = {
    authFactorType: "totp",
    default: false,
    identityProvider: "ib",
    uri: "totp",
    user: "pj_yuriramos@bancobbm.com.br"
  };
  it("Should call checkMFA with right API url", done => {
    createAuthFactor(body).then(resp => {
      expect(resp).toBe("/authcodesmanager/v1/AuthFactors");
      done();
    });
  });
});

describe("aproveAuthFactor", () => {
  const body = { authCodeId: "6815d193-a55b-42c2-a0ef-9f24732ed584" };
  it("Should call checkMFA with right API url", done => {
    aproveAuthFactor("29c6368f-cc9b-4458-8db9-b56e62b2f4d4", body).then(
      resp => {
        expect(resp).toBe(
          "/authcodesmanager/v1/authfactors/29c6368f-cc9b-4458-8db9-b56e62b2f4d4/approve"
        );
        done();
      }
    );
  });
});

describe("activateAuthFactor", () => {
  const body = { otp: "mock" };
  it("Should call checkMFA with right API url", done => {
    activateAuthFactor("29c6368f-cc9b-4458-8db9-b56e62b2f4d4", body).then(
      resp => {
        expect(resp).toBe(
          "/authcodesmanager/v1/authfactors/29c6368f-cc9b-4458-8db9-b56e62b2f4d4/activate"
        );
        done();
      }
    );
  });
});
