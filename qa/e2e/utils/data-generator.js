"use strict";

const { assert, expect } = require("chai");
const constants = require("../utils/constants");
const fs = require("fs");
const hierarchyRdyToSign = require("../data-test/contracts/corporate-contract-no-hierarchy");
const individual = require("../data-test/contracts/individual");
const lodash = require("lodash");
const moment = require("moment");
const noHierarchyRdyToSign = require("../data-test/contracts/corporate-contract-no-hierarchy");
const singleTransfer = require("../data-test/transfers/single-transfer");
const syncrequest = require("sync-request");
const util = require("./util");

let _contract;
let _transfer;

class DataGenerator {
  getJWT(
    idp,
    user,
    portfolio = "46634241000000",
    tenant = "6e076a2f-ccf4-45fe-a00d-44d9caa5778e"
  ) {
    return syncrequest(
      "POST",
      constants.internalGateway + "generateTokenTeste",
      {
        json: {
          user: user,
          idp: idp,
          portfolio: portfolio,
          tenant: tenant,
          roles: [
            "GetContract",
            "InsertContract",
            "DeleteContract",
            "SignContract",
            "DocusignConnect"
          ]
        }
      }
    ).getBody("utf8");
  }

  setupContract(type, jwtData) {
    const base64 = fs
      .readFileSync("./data-test/DocumentBase64.txt")
      .toString("utf-8");

    switch (type) {
      case "no hierarchy - ready to sign":
        _contract = lodash.cloneDeep(noHierarchyRdyToSign);
        this.composeCorporateContract(jwtData, base64);
        break;
      case "hierarchy - ready to sign":
        _contract = lodash.cloneDeep(hierarchyRdyToSign);
        this.composeCorporateContract(jwtData, base64);
        break;
      case "individual":
        _contract = lodash.cloneDeep(individual);
        _contract.Attributes.ContractId = "" + util.getRandomInt();
        _contract.DocumentBase64 = base64;
        break;
      default:
        throw ReferenceError;
    }
  }

  composeCorporateContract(jwtData, base64) {
    // Picking portfolio and tenant values from jwt
    jwtData = jwtData.split(".");
    jwtData = jwtData[1];
    jwtData = Buffer.from(jwtData, "base64").toString("ascii");
    jwtData = JSON.parse(jwtData);

    _contract.Attributes.ContractId = "" + util.getRandomInt();
    _contract.DocumentBase64 = base64;
    _contract.portfolio = jwtData.portfolio;
    _contract.tenant = jwtData.tenant;

    //Arrumar ponto de parada .lenght
    for (let i = 0; i <= 1; i++) {
      let groupName = "" + util.generateGroupName();
      _contract.Recipients[i].Name = groupName;
      _contract.Groups[i].Code = groupName;
    }
  }

  // Create a contract in the database and save it's Id
  generateContracts(type) {
    let jwt = this.getJWT("servicemesh", "pj6@bocombbm.com.br");

    this.setupContract(type, jwt);

    const responseGeneratedContract = syncrequest(
      "POST",
      constants.esignUrl + "/api/Contracts/Fx",
      {
        json: _contract,
        headers: {
          Authorization: "Bearer " + jwt
        }
      }
    );

    if (responseGeneratedContract.statusCode == 200)
      return _contract.Attributes.ContractId;
    else
      throw new Error(
        "Error in generateContracts",
        responseGeneratedContract.statusCode
      );

    // ANTES (possivel remoção quando refatorar CAMBIO PJ)
    // util.saveDatatId(_contract.Attributes.ContractId, "ContractId");
  }

  // Update the contract for "signed" status
  signDocusignContract(type) {
    this.generateCorporateContracts(type);

    let jwt = this.getJWT("ib", "kj2@bocombbm.com.br");

    const responseSignUrl = syncrequest(
      "GET",
      `${constants.esignUrl}/api/Contracts/Fx/${
        _contract.Attributes.ContractId
      }/Sign_Url`,
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${jwt}`
        }
      }
    );
    assert.equal(200, responseSignUrl.statusCode);

    const responseSigned = syncrequest(
      "GET",
      `${constants.esignUrl}/api/Contracts/Fx/${
        _contract.Attributes.ContractId
      }/Signed`,
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${jwt}`
        }
      }
    );
    assert.equal(200, responseSigned.statusCode);
  }

  generateTransfer() {
    let token = this.getAccessToken();

    // Serializing and setting dueDate value
    _transfer = lodash.cloneDeep(singleTransfer);
    _transfer.dueDate = +moment().add(7, "days");

    const generatedTransfer = syncrequest(
      "POST",
      constants.urlWireTransfer + "api/wiretransfer",
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-type": "application/json"
        },
        json: _transfer
      }
    );

    assert.equal(201, generatedTransfer.statusCode);

    // Saving generated transfer content
    util.saveDatatId(generatedTransfer.getBody("utf8"), "OrderId");
  }

  generateCreatePasswordOtp(user) {
    return syncrequest("POST", constants.externalGateway + "generatetoken", {
      json: { user: user }
    }).getBody("utf8");
  }

  setNewPassword(password) {
    const otp = this.generateCreatePasswordOtp("darthvader@bancobbm.com.br");

    expect(
      syncrequest(
        "POST",
        constants.bbmBackEnd + "ibusermanagement/v1/users/password",
        {
          json: { otp: otp, password: password, document: "05332256558" }
        }
      ).statusCode
    ).to.equal(201);
  }

  findTransfer() {
    let token = this.getAccessToken();
    const res = syncrequest("POST", urlWireTransfer + "/api/wiretransfer", {
      headers: {
        Authorization: "Bearer " + token.pj3,
        "Content-type": "application/json"
      },
      json: json
    });
    assert.equal(res.statusCode, 201);
    assert.exists(res.getBody("utf8").transferOrderId);
    let generatedTransferOrderId = res.getBody("utf8").transferOrderId;
    return generatedTransferOrderId;
  }
}

module.exports = new DataGenerator();
