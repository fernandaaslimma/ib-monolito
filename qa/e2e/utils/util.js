import request from "supertest";
const fs = require("fs");
const btoa = require("btoa");
import {
  expect
} from "chai";
const svg2img = require('svg2img');
const Jimp = require("jimp");
const jsQR = require("jsqr");
require('dotenv').config();

let rawContractId = fs.readFileSync("./data-test/contracts/contractId.json");
let contractData = JSON.parse(rawContractId);
let rawOrderId = fs.readFileSync(
  "./data-test/transfers/generated-transfer.json"
);
let transferData = JSON.parse(rawOrderId);

const configSQL = {
  user: process.env.E2E_USER_SQL,
  password: process.env.E2E_USER_PASSWORD_SQL,
  server: process.env.E2E_SERVER_SQL,
  database: process.env.E2E_DATABASE_SQL,
};

const API = process.env.API || "";

class Util {
  getRandomInt() {
    return Math.round(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
  }

  generateGroupName() {
    let randomNumber = this.getRandomInt();

    return "Grp_" + randomNumber.toString() + "_testeQa";
  }

  saveDatatId(dataId, type) {
    if (type == "ContractId") {
      contractData.contractId = dataId;

      let data = JSON.stringify(contractData);

      fs.writeFileSync("./data-test/contracts/contractId.json", data);
    } else if (type == "OrderId") {
      let data = JSON.stringify(dataId);

      fs.writeFileSync("./data-test/transfers/generated-transfer.json", data);
    }
  }

  get ContractId() {
    return contractData.contractId;
  }

  get transferOrderId() {
    return transferData.transferOrderId;
  }

  async decodeSvgQRCode(svgElem) {
    let result;

    // eslint-disable-next-line no-useless-catch
    try {
      const svg2imgResult = await new Promise((resolve, reject) => {
        svg2img(svgElem, (err, value) =>
          err != null ? reject(err) : resolve(value)
        );
      });

      const jimpResult = await new Promise((resolve, reject) => {
        Jimp.read(svg2imgResult, (err, value) =>
          err != null ? reject(err) : resolve(value.bitmap)
        );
      });

      result = await jsQR(jimpResult.data, jimpResult.width, jimpResult.height);

      if (result.data) {
        return result.data;
      }
    } catch (error) {
      throw error;
    }
  }

  async getSecretDatabase(email) {
    const sql = require("mssql");
    // eslint-disable-next-line no-useless-catch
    try {
      let pool = await sql.connect(configSQL);
      let result = await pool
        .request()
        .query(
          `SELECT AuthFactorSecret from SecretMfaBoarding where Email='${email}'`
        );
      await pool.close();
      return result.recordset[0].AuthFactorSecret;
    } catch (err) {
      throw err;
    }
  }

  async updateSecretDatabase(secret, email) {
    const sql = require("mssql");
    // eslint-disable-next-line no-useless-catch
    try {
      let pool = await sql.connect(configSQL);
      let result = await pool
        .request()
        .query(
          `UPDATE SecretMfaBoarding set AuthFactorSecret='${secret}', DateUpdated=getdate() where Email='${email}'`
        );
      await pool.close();
      return result.rowsAffected.length === 1 ? true : false;
    } catch (err) {
      throw err;
    }
  }

  async getToken(user, password) {
    const auth = btoa(`${user}:${password}`);

    const response = await request(API)
      .post("/spa/token")
      .set("Authorization", `Basic ${auth}`)

    expect(response.status).to.equal(200);

    const access_pt1 = JSON.parse(response.text).access_token;
    const access_pt2 = response.header["set-cookie"]
      .find(c => c.startsWith("access_token"))
      .split(";")[0]
      .split("=")[1];

    return access_pt1 + access_pt2;
  }

  async mockWihoutNotificationAPI() {
    const mock = await browser.mock("https://api.dev.bocombbm.com.br/ibnotifications/v1/notifications?*", {
      method: "get",
    });

    await mock.respond([]);
  }

  async mockNotificationWithPopUpBlockingAPI() {
    const mock = await browser.mock("https://api.dev.bocombbm.com.br/ibnotifications/v1/notifications?*", {
      method: "get",
    });

    mock.respond([{
      "description": "We made some changes to the terms and conditions of use.",
      "title": "Changing the terms and conditions of use",
      "type": "ApproveTerms",
      "displayMethod": "PopUpBlocking",
      "parameters": [{
          "type": "url",
          "url": "https://api.bocombbm.com.br/productterms/Termo%20de%20Ades%C3%A3o%20-%20Internet%20Banking.pdf",
          "id": null,
        },
        {
          "type": "termId",
          "url": null,
          "id": 1,
        }
      ]
    }]);
  }

  async teste() {

    const mock = await browser.mock("https://api.dev.bocombbm.com.br/wiretransferrequest/v1/api/wiretransfer/basicinfo?*", {
      method: "get",
    });

    await mock.respond(
      {
        tedLimitPf: 300000.00
      },
      {
        statusCode: () => 200
      });
  }

  async mockDeleteFavoredAccountError() {

    const mock = await browser.mock("https://api.dev.bocombbm.com.br/recipientaccountmanager/v1/recipientaccounts/cashaccounts/**", {
      method: "delete",
    });

    await mock.respond(() => {
      },
      {
        statusCode: () => 403,
        fetchResponse: true
      });
  }
}

export default new Util();
