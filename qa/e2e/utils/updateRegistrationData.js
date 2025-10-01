"use strict";

const request = require("supertest");
const btoa = require("btoa");
const fs = require("fs-extra");
const _ = require("lodash");
const totpGenerator = require("totp-generator");
const { expect } = require("chai");

const urlTokenGenerator = "https://api.dev.bocombbm.com.br/";
const urlPersonRegistration =
  "https://mag.dev.bocombbm.com.br:8443/personregistration/v1";
const urlAuthCodesManager =
  "https://mag.dev.bocombbm.com.br:8443/authcodesmanager/v1";

const payloadWithoutModification = fs.readFileSync(
  "./data-test/payloadRegistationData.json"
);

let usuarioMarretado = {
  email: "",
  secret: "E72Z66J5YPEF7IPYPODKU3BKYI",
  token: ""
};

function sleep(ms = 50000) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const getToken = async (user, password) => {
  const auth = btoa(`${user}:${password}`);
  return request(urlTokenGenerator)
    .post("spa/token")
    .set("Authorization", `Basic ${auth}`)
    .expect(200)
    .then(response => {
      const access_pt1 = JSON.parse(response.text).access_token;
      const access_pt2 = response.header["set-cookie"]
        .find(c => c.startsWith("access_token"))
        .split(";")[0]
        .split("=")[1];
      return access_pt1 + access_pt2;
    });
};

async function prepareDataToUpdate(tokenAuthenticator, payload) {
  const response = await request(urlPersonRegistration)
    .post("/api/person/update/request")
    .set("Content-type", "application/json")
    .set("Authorization", "Bearer " + tokenAuthenticator)
    .send(payload);

  expect(response.status).to.equal(201);

  return response.body.content;
}

async function confirmationUpdate(tokenAuthenticator, payload) {
  const response = await request(urlPersonRegistration)
    .put("/api/person/update/confirmation")
    .set("Content-type", "application/json")
    .set("Authorization", "Bearer " + tokenAuthenticator)
    .send(payload);

  expect(response.status).to.equal(200);

  return response.body;
}

async function flowMFA(user, userSecret, userToken, updateTokenId) {
  await sleep(25000);
  let payloadCreated;
  let messageAuthCodeCreated;
  let authFactorsByApprover;

  // STEP 1 - GET = Must look for authentication factors
  const resAuthGet = await request(urlAuthCodesManager)
    .get(`/users/authfactors/ib/${user}`)
    .set("Content-type", "application/json")
    .set("Authorization", "Bearer " + userToken);

  expect(resAuthGet.status).to.equal(200);

  authFactorsByApprover = resAuthGet.body.find(function(elem) {
    return elem.type === "totp";
  });

  // STEP 2 - POST = Should create auth code
  const resAuthPost = await request(urlAuthCodesManager)
    .post("/authcodes")
    .set("Content-type", "application/json")
    .set("Authorization", "Bearer " + userToken)
    .send({
      authFactorId: authFactorsByApprover.id,
      actionType: "personRegistration.confirmInformation",
      payload: {
        id: updateTokenId
      }
    });

  expect(resAuthPost.status).to.equal(201);
  let authCodeCreated = resAuthPost.body;

  // STEP 3 - PUT = Should approve auth code
  let tokenOtp = totpGenerator(userSecret);

  const resAuthPut = await request(urlAuthCodesManager)
    .put(`/authcodes/${authCodeCreated.id}/approve`)
    .set("Content-type", "application/json")
    .set("Authorization", "Bearer " + userToken)
    .send({
      otp: tokenOtp
    });

  expect(resAuthPut.status).to.equal(200);

  payloadCreated = resAuthPut.body;
  messageAuthCodeCreated = resAuthPut.header["x-message-authentication-code"];

  return {
    message: {
      payload: payloadCreated,
      messageAuthenticationCode: messageAuthCodeCreated
    }
  };
}

async function changeMaritalStatus(maritalStatus, user, password) {
  let updateInformation;

  switch (maritalStatus) {
    case "solteiro":
      updateInformation = {
        personalRegistrationDetails: {
          maritalStatus: "single",
          spouse: {
            spouseName: undefined,
            spouseCpf: undefined
          }
        }
      };
      break;

    case "casado":
      updateInformation = {
        personalRegistrationDetails: {
          maritalStatus: "married",
          spouse: {
            spouseName: "Usuário Teste",
            spouseCpf: "111.222.333-44"
          }
        }
      };
      break;

    default:
      throw new Error("Error in changeMaritalStatus");
  }
  const updatedInformationToSending = _.merge(
    {},
    JSON.parse(payloadWithoutModification),
    updateInformation
  );

  const tokenAuthenticator = await getToken(user, password);
  const { updateToken } = await prepareDataToUpdate(
    tokenAuthenticator,
    updatedInformationToSending
  );
  const authPayloadMac = await flowMFA(
    user,
    usuarioMarretado.secret,
    tokenAuthenticator,
    updateToken
  );
  const payloadToConfirmationUpdate = {
    updateToken: updateToken,
    message: {
      payload: authPayloadMac.message.payload,
      messageAuthenticationCode:
        authPayloadMac.message.messageAuthenticationCode
    }
  };

  const responseConfirmationUpdate = await confirmationUpdate(
    tokenAuthenticator,
    payloadToConfirmationUpdate
  );
  return responseConfirmationUpdate;
}

async function changeCommercialAddress(withCommercialAddress, user, password) {
  let updateInformation;

  if (withCommercialAddress) {
    updateInformation = {
      contacts: {
        addresses: [
          {
            type: "home",
            address: "AAA AAA",
            number: "123",
            complement: "Complement abc123",
            cep: "21211",
            country: "Itália",
            city: "Milão",
            state: "RJ",
            district: "Brera"
          },
          {
            type: "commercial",
            address: "AAA AAA",
            number: "123",
            complement: "Complement abc123",
            cep: "21211",
            country: "Austria",
            city: "Milão",
            state: "RJ",
            district: "Brera"
          }
        ]
      }
    };
  } else {
    updateInformation = {
      contacts: {
        addresses: [
          {
            type: "home",
            address: "AAA AAA",
            number: "123",
            complement: "Complement abc123",
            cep: "21211",
            country: "Itália",
            city: "Milão",
            state: "RJ",
            district: "Brera"
          }
        ]
      }
    };
  }

  const updatedInformationToSending = _.merge(
    {},
    JSON.parse(payloadWithoutModification),
    updateInformation
  );

  const tokenAuthenticator = await getToken(user, password);
  const { updateToken } = await prepareDataToUpdate(
    tokenAuthenticator,
    updatedInformationToSending
  );
  const authPayloadMac = await flowMFA(
    user,
    usuarioMarretado.secret,
    tokenAuthenticator,
    updateToken
  );
  const payloadToConfirmationUpdate = {
    updateToken: updateToken,
    message: {
      payload: authPayloadMac.message.payload,
      messageAuthenticationCode:
        authPayloadMac.message.messageAuthenticationCode
    }
  };

  const responseConfirmationUpdate = await confirmationUpdate(
    tokenAuthenticator,
    payloadToConfirmationUpdate
  );
  return responseConfirmationUpdate;
}

async function changeProfissionalInformation(type, user, password) {
  let updateInformation;

  switch (type) {
    case "do lar":
      updateInformation = {
        professionalInformation: {
          activity: "fromHome",
          otherActivitySpecified: null,
          occupation: null,
          company: {
            name: null,
            cnpj: null
          },
          admissionDate: null
        }
      };
      break;

    case "autônomo":
      updateInformation = {
        professionalInformation: {
          activity: "selfEmployed",
          admissionDate: null,
          company: {
            name: null,
            cnpj: null
          },
          occupation: null,
          otherActivitySpecified: "Teste"
        }
      };
      break;
    default:
      throw new Error("Error in changeProfissionalInformation");
  }

  const updatedInformationToSending = _.merge(
    {},
    JSON.parse(payloadWithoutModification),
    updateInformation
  );

  const tokenAuthenticator = await getToken(user, password);

  const { updateToken } = await prepareDataToUpdate(
    tokenAuthenticator,
    updatedInformationToSending
  );

  const authPayloadMac = await flowMFA(
    user,
    usuarioMarretado.secret,
    tokenAuthenticator,
    updateToken
  );

  const payloadToConfirmationUpdate = {
    updateToken: updateToken,
    message: {
      payload: authPayloadMac.message.payload,
      messageAuthenticationCode:
        authPayloadMac.message.messageAuthenticationCode
    }
  };

  const responseConfirmationUpdate = await confirmationUpdate(
    tokenAuthenticator,
    payloadToConfirmationUpdate
  );

  return responseConfirmationUpdate;
}

module.exports = {
  changeMaritalStatus,
  changeProfissionalInformation,
  changeCommercialAddress
};
