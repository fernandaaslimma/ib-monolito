"use strict";

import request from "supertest";
import btoa from "btoa";
import { expect } from "chai";
import moment from "moment";
import { generateAmountTED, generateAgency, generateAccount } from "./util";
import { dateGenerator } from "./dateGenerator";

const urlTokenGenerator = process.env.API;
const urlWireTransfer = process.env.URL_WIRETRANSFER;
const userToCreateTED = {
  user: process.env.E2E_USER_PJ3,
  password: process.env.E2E_PASSWORD_PJ3,
};

let payloadExistingAccount = {
  recipient: {
    bankId: "231",
    bankISPB: "33485541",
    bankBranch: "1111",
    bankName: "BANCO BOAVISTA INTERATLANTICO S.A.",
    bankAccount: "1111",
    verifyingDigit: "1",
    name: "AIMBYRESIA BASTOS",
    taxId: "09919706002170",
    newRecipient: false,
  },
  amount: 0.01,
  dueDate: "",
  originAccount: "107 2 304641-4",
  originAccountId: 10306,
  awaitBalance: false,
};

let payloadNewAccount = {
  recipient: {
    bankId: "231",
    bankISPB: "33485541",
    bankBranch: "",
    bankName: "BANCO BOAVISTA INTERATLANTICO S.A.",
    bankAccount: "",
    verifyingDigit: "1",
    name: "AIMBYRESIA BASTOS",
    taxId: "09919706002170",
    newRecipient: false,
  },
  amount: "",
  dueDate: "",
  originAccount: "107 2 304641-4",
  originAccountId: 10306,
  awaitBalance: false,
};

async function getToken(user, password) {
  const auth = btoa(`${user}:${password}`);
  const response = await request(`${urlTokenGenerator}/`)
    .post("spa/token")
    .set("Authorization", `Basic ${auth}`)
    .expect(200);

  const access_pt1 = await JSON.parse(response.text).access_token;
  const access_pt2 = await response.header["set-cookie"]
    .find((c) => c.startsWith("access_token"))
    .split(";")[0]
    .split("=")[1];
  return access_pt1 + access_pt2;
}

async function createNewTransactionPJWithExistingAccount() {
  const token = await getToken(userToCreateTED.user, userToCreateTED.password);
  let currentDueDate = moment();

  payloadExistingAccount.dueDate = currentDueDate.format("DD/MM/YYYY");

  let tempPayloadExistingAccount = JSON.parse(
    JSON.stringify(payloadExistingAccount)
  );
  tempPayloadExistingAccount.dueDate = currentDueDate.valueOf();

  const response = await request(urlWireTransfer)
    .post("/api/wiretransfer")
    .set("Content-type", "application/json")
    .set("Authorization", "Bearer " + token)
    .send(tempPayloadExistingAccount);

  expect(response.status).to.equal(201);
}

async function createNewTransactionPJWithNewAccount() {
  const token = await getToken(userToCreateTED.user, userToCreateTED.password);

  let currentDueDate = moment();
  let generateAmount = generateAmountTED();

  payloadNewAccount.recipient.bankBranch = generateAgency().toString();
  payloadNewAccount.recipient.bankAccount = generateAccount().toString();
  payloadNewAccount.recipient.newRecipient = true;
  payloadNewAccount.dueDate = currentDueDate.format("DD/MM/YYYY");
  payloadNewAccount.amount = generateAmount;

  let tempPayloadNewAccount = JSON.parse(JSON.stringify(payloadNewAccount));
  tempPayloadNewAccount.amount = generateAmount.replace(",", ".");
  tempPayloadNewAccount.dueDate = currentDueDate.valueOf();

  const response = await request(urlWireTransfer)
    .post("/api/wiretransfer")
    .set("Content-type", "application/json")
    .set("Authorization", "Bearer " + token)
    .send(tempPayloadNewAccount);

  expect(response.status).to.equal(201);
}

async function createNewTransactionPJWithNewAccountAndFutureDate() {
  const token = await getToken(userToCreateTED.user, userToCreateTED.password);
  let dateSchedule = await dateGenerator(token);
  let generateAmount = generateAmountTED();

  payloadNewAccount.recipient.bankBranch = generateAgency().toString();
  payloadNewAccount.recipient.bankAccount = generateAccount().toString();
  payloadNewAccount.recipient.newRecipient = true;
  payloadNewAccount.dueDate = dateSchedule.format("DD/MM/YYYY");
  payloadNewAccount.amount = generateAmount;

  let tempPayloadNewAccount = JSON.parse(JSON.stringify(payloadNewAccount));
  tempPayloadNewAccount.amount = generateAmount.replace(",", ".");
  tempPayloadNewAccount.dueDate = dateSchedule.valueOf();

  const response = await request(urlWireTransfer)
    .post("/api/wiretransfer")
    .set("Content-type", "application/json")
    .set("Authorization", "Bearer " + token)
    .send(tempPayloadNewAccount);

  expect(response.status).to.equal(201);
}

function getPayloadNewAccount() {
  return payloadNewAccount;
}

function getPayloadExistingAccount() {
  return payloadExistingAccount;
}

function removeDataFromPayloadAPI() {
  payloadNewAccount.amount = "";
  payloadNewAccount.dueDate = "";
  payloadExistingAccount.amount = "";
  payloadExistingAccount.dueDate = "";
}

export {
  createNewTransactionPJWithExistingAccount,
  createNewTransactionPJWithNewAccount,
  createNewTransactionPJWithNewAccountAndFutureDate,
  removeDataFromPayloadAPI,
  getPayloadNewAccount,
  getPayloadExistingAccount
};
