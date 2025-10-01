import request from "supertest";
import { expect } from "chai";
import Util  from "./util";
const { bbmUrl } = require("./constants");
const users = require("../data-test/users.json");

const payloadCreateSharePF = require("./payloads/payloadOpenBankingCreateSharePF.json");
const payloadCreateShareInvalidCPF = require("./payloads/payloadOpenBankingCreateShareInvalidCPF.json");
const payloadCreateSharePJ = require("./payloads/payloadOpenBankingCreateSharePJ.json");
const payloadCreateShareProspect = require("./payloads/payloadOpenbankingCreateShareProspect.json");
const payloadDataPermissionAll = require("./payloads/payloadOpenBankingDataPermissionAll.json");
const payloadDataPermissionAccountBalance = require("./payloads/payloadOpenBankingDataPermissionAccountBalance.json");

const API = process.env.API || "";
let tokenAuthenticator;
let shareIdTPP;
let shareIdASPSP;
let resourcesToPatch = [];

async function searchUser(user) {
  const convertedUser = user
    .replace(/ /g, "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f-\u002D]/g, "");

  const usersDictionary = {
    openbankingpf: "tedpf",
    openbankingpj: "pj3",
  };

  const userFound = usersDictionary[convertedUser] || convertedUser;

  const currentUser = users[userFound];
  if (!currentUser) throw new Error("Invalid User!");

  return currentUser;
}

async function createShare(user) {
  let payload;

  user == "Open Banking PF" ?
  payload = payloadCreateSharePF :
  user == "Open Banking PJ" ? 
  payload = payloadCreateSharePJ :
  user == "Prospect" ?
  payload = payloadCreateShareProspect :
  payload = payloadCreateShareInvalidCPF;

  const userToAuthenticator = await searchUser(user);
  tokenAuthenticator = await Util.getToken(userToAuthenticator.email, userToAuthenticator.password);

  const response = await request(API)
    .post("/open-banking/journey-tpp/v1/shares")
    .set("Content-type", "application/json")
    .set("Authorization", "Bearer " + tokenAuthenticator)
    .send(payload);

  expect(response.status).to.equal(201);
  shareIdTPP = await response.body.shareId;
}

async function createLinkToRedirect(user, typeToShare) {
  let payload;

  typeToShare == "saldo" ?
  payload = payloadDataPermissionAccountBalance :
  payload = payloadDataPermissionAll;

  await createShare(user);

  if(process.env.TEST_ENV == "dev" || process.env.TEST_ENV == "hom")
    payload.redirectUri = `${bbmUrl}/home`;

  const response = await request(API)
    .patch(`/open-banking/journey-tpp/v1/shares/${shareIdTPP}`)
    .set("Content-type", "application/json")
    .set("Authorization", "Bearer " + tokenAuthenticator)
    .send(payload);

  expect(response.status).to.equal(302);

  const redirectUri = response.body.redirect_uri;
  const url = `/${redirectUri.slice(redirectUri.indexOf("?"))}`;
  const slicedParameters = url.split("&");
  const intent_id = slicedParameters[1].slice(slicedParameters[1].indexOf("urn:"));
  const redirect_uri = slicedParameters[5];
  const state = slicedParameters[4];

  const finalURI = `/?scope=openid&intent_id=${intent_id}&${redirect_uri}&${state}`

  return [redirectUri, finalURI];
}

async function prepareConsentPending(user) {
  const redirectUri = await createLinkToRedirect(user);
  const slicedParameters = redirectUri[0].split("&");
  const urn = slicedParameters[1].slice(slicedParameters[1].indexOf("urn:"));

  const response = await request(redirectUri[0].toString()).get("");
  expect(response.status).to.equal(302);

  const responseSharesConsents = await request(API)
    .get(`/open-banking/journey-aspsp/v1/shares/consents/${urn}`)
    .set("Content-type", "application/json")
    .set("Authorization", "Bearer " + tokenAuthenticator);

  expect(responseSharesConsents.status).to.equal(200);

  await responseSharesConsents.body.resourceGroups.map((resourceGroup) => {
    resourceGroup.resources &&
      resourceGroup.resources.map((resource) => {
        resourcesToPatch.push({
          resourceId: resource.resourceId,
          type: resourceGroup.type,
        });
      });
  });

  shareIdASPSP = await responseSharesConsents.body.shareId;
}

async function approveConsent(user) {
  await prepareConsentPending(user);

  const responseGetOrganizations = await request(API)
    .get('/open-banking/ob-clients-api/v1/organisations/4a7250ec-eac5-5d8f-b7eb-dc0e8e880203/authorisationservers')
    .set("Content-type", "application/json")
    .set("Authorization", "Bearer " + tokenAuthenticator)

  expect(responseGetOrganizations.status).to.equal(200);


  const responsePatchSharesResources = await request(API)
    .patch(`/open-banking/journey-aspsp/v1/shares/${shareIdASPSP}/resources`)
    .set("Content-type", "application/json")
    .set("Authorization", "Bearer " + tokenAuthenticator)
    .send({ resources: resourcesToPatch});

  expect(responsePatchSharesResources.status).to.equal(200);

  const responsePutSharesConfirmations = await request(API)
    .put(`/open-banking/journey-aspsp/v1/shares/${shareIdASPSP}/confirmations`)
    .set("Content-type", "application/json")
    .set("Authorization", "Bearer " + tokenAuthenticator)

  expect(responsePutSharesConfirmations.status).to.equal(200);
}

export { createLinkToRedirect, prepareConsentPending, approveConsent };
