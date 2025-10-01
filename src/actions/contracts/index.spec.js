import contracts from "./index";

jest.mock("../../utils/redirect");
jest.mock("../../services/contracts");
jest.mock("../../utils/redirect");
jest.mock("../../utils/downloadFile");

const getContractsMock = require("../../services/contracts").getContracts;
const getSignedContractsMock = require("../../services/contracts")
  .getSignedContracts;
const getContractSignUrlMock = require("../../services/contracts")
  .getContractSignUrl;
const getContractFileMock = require("../../services/contracts").getContractFile;
const downloadFileMock = require("../../utils/downloadFile").default;
const hardRedirectMock = require("../../utils/redirect").hardRedirect;

const contractSignUrlMock = {
  url: "contractsUrl"
};

const contractsMock = [
  {
    contractId: 1
  },
  {
    contractId: 2
  }
];

const signedContractsMock = [
  {
    contractId: 3
  },
  {
    contractId: 4
  }
];

let storeMock;
let getStateMock = jest.fn();
let blob;

beforeEach(() => {
  storeMock = { setState: jest.fn(), getState: getStateMock };
});

describe("contracts action", () => {
  beforeEach(() => {
    getContractsMock.mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(contractsMock)
      })
    );

    getSignedContractsMock.mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(signedContractsMock)
      })
    );

    getContractSignUrlMock.mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(contractSignUrlMock)
      })
    );

    blob = jest.fn(() => "blob");

    getContractFileMock.mockImplementation(() =>
      Promise.resolve({
        blob
      })
    );
  });

  it("Should return an action object", () => {
    expect(typeof contracts(storeMock) === "object").toBeTruthy();
    expect(Object.keys(contracts(storeMock))).toEqual([
      "resetContracts",
      "getUserInfo",
      "getContracts",
      "getSignedContracts",
      "getContractFile",
      "sign",
      "resetSignLoading"
    ]);
  });

  describe("getUserInfo", () => {
    it("Should getUserInfo with success", () => {
      const { getUserInfo } = contracts(storeMock);

      const state = {
        userInfo: {
          email: "pj_teste@bocombbm.com.br"
        }
      };

      const response = getUserInfo(state);

      expect(response).toEqual({ userInfoMail: "pj_teste@bocombbm.com.br" });
    });

    it("Should not add signURL if it can't find contract url with getContractSignUrl, but returns contracts", done => {
      const { getContracts } = contracts(storeMock);

      getContractSignUrlMock.mockImplementation(() => Promise.reject());

      getContracts().then(resp => {
        expect(resp).toEqual({ contracts: contractsMock });

        done();
      });
    });
  });

  describe("resetContracts", () => {
    it("should reset the state of contracts and signedContracts", () => {
      const { resetContracts } = contracts();

      expect(resetContracts()).toEqual({
        contracts: [],
        signedContracts: [],
        groupsInProgress: [],
        signLoadingId: null
      });
    });
  });

  describe("getContractFile", () => {
    it("Should call getContractFile then blob function", async () => {
      const { getContractFile } = contracts(storeMock);

      await getContractFile();

      expect(blob).toHaveBeenCalled();
    });

    it("Should call download function with contract name and blob response", async () => {
      const { getContractFile } = contracts(storeMock);

      await getContractFile("blob", "123");

      expect(downloadFileMock).toHaveBeenCalledWith("blob", "contract-123");
    });
  });

  describe("getSignedContracts", () => {
    it("Should return a promise that resolves into an contract object", done => {
      const { getSignedContracts } = contracts(storeMock);

      getSignedContracts().then(resp => {
        expect(resp).toEqual({
          signedContracts: signedContractsMock
        });

        done();
      });
    });
  });

  describe("sign", () => {
    it("Should get sign url", done => {
      const { sign } = contracts(storeMock);

      const state = {
        userInfo: {
          preferredLanguage: "pt-BR"
        }
      };

      sign(state).then(resp => {
        expect(resp).toEqual({
          url: "contractsUrl"
        });

        done();
      });
    });

    it("Should invoke hardRedirect", done => {
      const { sign } = contracts(storeMock);

      sign().then(() => {
        expect(hardRedirectMock).toHaveBeenCalledWith(
          "contractsUrl&locale=en-US"
        );

        done();
      });
    });

    describe("when error status is 409", () => {
      beforeEach(() => {
        getContractSignUrlMock.mockImplementationOnce(() =>
          Promise.reject({ status: 409 })
        );
        getStateMock.mockImplementationOnce(() => ({}));
        getContractsMock.mockImplementationOnce(() =>
          Promise.resolve({
            json: () => [{ id: 1 }, { id: 2 }]
          })
        );
      });

      it("status 409", done => {
        const { sign } = contracts(storeMock);

        sign().then(resp => {
          expect(resp).toEqual(undefined);
          done();
        });
      });

      it("status 409 - groupsInProgress", done => {
        getStateMock.mockImplementationOnce(() => ({ groupsInProgress: [] }));

        const { sign } = contracts(storeMock);

        sign().then(resp => {
          expect(resp).toEqual(undefined);
          done();
        });
      });

      it("generic error", done => {
        getContractSignUrlMock.mockImplementationOnce(() =>
          Promise.reject({ status: 9999 })
        );

        const { sign } = contracts(storeMock);

        sign().then(resp => {
          expect(resp).toEqual(undefined);
          done();
        });
      });
    });
  });

  describe("resetSignLoading", () => {
    it("Should get sign url", () => {
      const { resetSignLoading } = contracts();

      expect(resetSignLoading()).toEqual({ signLoadingId: null });
    });
  });

  describe("getContracts", () => {
    it("Should return a promise that resolves into an contract object with a sign url for each contract", done => {
      const { getContracts } = contracts(storeMock);

      getContracts().then(resp => {
        expect(resp).toEqual({
          contracts: contractsMock
        });

        done();
      });
    });

    it("should return true for error 409", done => {
      const { getContracts } = contracts(storeMock);
      getContractSignUrlMock.mockImplementationOnce(() =>
        Promise.reject({ status: 409 })
      );
      getStateMock.mockImplementationOnce(() => ({}));
      getContractsMock.mockImplementationOnce(() =>
        Promise.resolve({
          json: () => [
            {
              contractId: 1
            },
            {
              contractId: 2
            }
          ]
        })
      );

      getContracts().then(resp => {
        expect(resp).toEqual({
          contracts: contractsMock
        });

        done();
      });
    });

    it("Should not add signURL if it can't find contract url with getContractSignUrl, but returns contracts", done => {
      const { getContracts } = contracts(storeMock);

      getContractSignUrlMock.mockImplementation(() => Promise.reject());

      getContracts().then(resp => {
        expect(resp).toEqual({ contracts: contractsMock });

        done();
      });
    });
  });
});
