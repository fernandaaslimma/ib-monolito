const path = require("path");

const Data = require("../environments_parameters.json");
const TEST_ENV = process.env.TEST_ENV || "local";
let environmentParameters;

switch (TEST_ENV) {
  case "dev":
    environmentParameters = Data[0].dev;
    break;
  case "local":
    environmentParameters = Data[0].localhost;
    break;
  case "hom":
    environmentParameters = Data[0].homol;
    break;
}

// const bbmBackEnd = "https://api.dev.bocombbm.com.br/";
const bbmBackEnd = environmentParameters.bbmBackEnd;
// const bbmUrl = "https://ib.dev.bocombbm.com.br";
const bbmUrl = environmentParameters.bbmUrl;
// const externalGateway = "https://mag.dev.bocombbm.com.br:8443/";
const externalGateway = environmentParameters.externalGateway;
// const internalGateway = "https://apigw.dev.bocombbm.com.br:8443/";
const internalGateway = environmentParameters.internalGateway;
const localUrl = "http://localhost:8080";
const mock = "http://40.121.58.75";

module.exports = {
  downloadsFolder: path.join(__dirname, "/../../downloads/"),

  bbmBackEnd,

  bbmUrl,

  externalGateway,

  internalGateway,

  localUrl,

  mock,

  documents: `${bbmUrl}/reports`,

  esignUrl: `${internalGateway}esign/dev`,

  pendingContracts: `${bbmUrl}/exchanges/unsigned`,

  pj4Secret: "B2HT6DHIRY6AEG7MF46H76X45U",

  pj5Secret: "E72Z66J5YPEF7IPYPODKU3BKYI",

  pj6Secret: "LBZXGHRJGI6IWEDM4PWFZITPBM",

  pj8Secret: "SWFB3BYKZDHCG2MH4OGH6JB2NE",

  pj9Secret: "E72Z66J5YPEF7IPYPODKU3BKYI",

  position: `${bbmUrl}/investments/positions/fixed-income`,

  summary: `${bbmUrl}/investments/overview`,

  transactions: `${bbmUrl}/investments/transactions/fixed-income`,

  urlWireTransfer: `${externalGateway}wiretransferrequest/v1/`,

  usedCreatedPasswordUrl: `${bbmUrl}/create-password?email=teste@bocombbm.com&name=Teste#otp=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.ew0KICAic3ViIjogInBqX2FuZHJlbWVuZGVzQGJhbmNvYmJtLmNvbS5iciIsDQogICJpc3MiOiAiYWNjb3VudCIsDQogICJleHAiOiAxNTM2MTYyNzQ0LA0KICAiaWF0IjogMTUzNjA3NjM0NCwNCiAgIm90cCI6IDgxMTk5MDM3DQp9.dVTPkHrWqcqxJfhs6jAtfEzTZKvLZ8d78k9K1e4qTLcN9jfibfQWbBsZI5Q7ZfsqkJA2qTTqmuys9UYw8LjGX-mWflfw8oKfhXMctrPmUcjuuSo4Wmtj_cdIou-d9rM7oeZ4xVO_ji_NNkvSHIrLZiPk57zg2Wmch0IO-56nU6NHfR8qpSrOulsatmTPXQp8xELzzWB9T2c_-EedH23dyKz4KlJSQLwZ8-uy4SE4DRLsNnzcb-uR48ciZYECSGG-jox1BCgbEm2m1jAez6NUlNu_duIU92d07JuBsfCEXIECcYTEGtreI8ymkTIzDZ_v16TXcKvCzEmMeaHKQEiJ0w`,
};
