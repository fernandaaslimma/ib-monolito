import Page from "./page";
const timeout = 30000;
import moment from "moment";
let fs = require("fs-extra");
let dynamicNameFile;

class CreditPage extends Page {
  get shipmentsMenu() { return $('[data-test="Navbar_shipments"]') }
  get returnsSubMenu() { return $('[data-test="Sub_Navbar_Remittances_Returns"]') }
  get searchButton() { return $('[data-test="btn-filter-operation-list"]') }
  get downloadReturnButton() { return $('[data-test="btn-download-return"]') }
  get emptyStateShipments() { return $('[data-test="emptyShipments"]') }
  get uploadSubMenu() { return $('[data-test="Sub_Navbar_Remittances_Upload"]') }
  get uploadArea() { return $('//*/div[contains(@data-test, "DragAndDropFileInput")]/div/input') }
  get fileValidationSubMenu() { return $('[data-test="Sub_Navbar_File_Validation"]') }
  get downloadOption() { return $('[data-test="downloadButton"]') }
  get validFileMessage() { return $('[data-test="title"]') }

  async clickShipmentsMenu() {
    await (await this.shipmentsMenu).waitForExist({ timeout });
    await (await this.shipmentsMenu).click();
  }

  async clickReturnsSubMenu() {
    await (await this.returnsSubMenu).waitForExist({ timeout });
    await (await this.returnsSubMenu).click();
  }

  async clickUploadSubMenu() {
    await (await this.uploadSubMenu).waitForExist({ timeout });
    await (await this.uploadSubMenu).click();
  }

  async clickSearchButton() {
    await (await this.searchButton).waitForClickable({ timeout });
    await (await this.searchButton).click();
  }

  async clickDownloadReturnButton() {
    await (await this.downloadReturnButton).waitForExist({ timeout });
    await (await this.downloadReturnButton).click();
  }

  async emptyStateShipmentsMessage() {
    await (await this.emptyStateShipments).waitForExist({ timeout });
    return await (await this.emptyStateShipments).getText();
  }

  async uploadFile(type) {
    await browser.pause(1000);
    await (await this.uploadArea).waitForExist({ timeout });

    if (type === "newCNAB") await this.createNewCNAB();
    else if (type === "sameCNAB") await this.createSameCNAB();
    else if (type === "unacceptableFileExtension") await this.createUnacceptableFileExtension();
    else if (type === "largeCNAB") await this.createLargeCNAB();
    else await this.createInvalidCNAB();

    const filePath = `./data-test/${dynamicNameFile}`;
    await browser.pause(1500);
    const remoteFilePath = await browser.uploadFile(filePath);

    await (await this.uploadArea).addValue(remoteFilePath);
  }

  async uploadFileToValidate(type) {
    await browser.pause(1000);
    await (await this.uploadArea).waitForExist({ timeout });

    if (type === "validateCNAB") await this.createNewCNABToValidate();
    else if (type === "largeCNABToValidate") await this.createLargeCNABToValidate();
    else if (type === "unacceptableFileExtensionToValidate") await this.createUnacceptableFileExtensionToValidate();
    else await this.createInvalidCNABSantander444ToValidate();

    const filePathToValidate = `./data-test/${dynamicNameFile}`;
    await browser.pause(1500);
    const remoteFilePathToValidate = await browser.uploadFile(filePathToValidate);

    await (await this.uploadArea).addValue(remoteFilePathToValidate);
  }

  async cnab() {
    let cnpj = "07066237003300"; //must have 14chars
    let generationDate = moment().format("DDMMYY"); //must have 8chars
    const companyName = "TEST QA LTDA                  "; //must have 30chars

    let layoutCNAB = [
      `01REMESSA01COBRANCA       00000012562475000132${companyName}237Bradesco       ${generationDate}        MX0000001                                                                                                                                                                                                                                                                                     000001`,
      `1PJ${cnpj}000000005633458897850EMPRESA LTDA             0000000000000000000000000000002N           0  01          00000000000000000002370000001N000000    00000000000000000000000000000000000000000000000000000000000000000000000000                                                                                            00000000                                                            000001`,
      "9                                                                                                                                                                      1",
    ];

    return layoutCNAB;
  }

  async createSameCNAB(anotherCNPJ, sameDate) {
    dynamicNameFile = `cnab_endtoend_${moment().format("DDMMYYhmmss")}.rem`;
    // console.log("Meu CNAB: ", dynamicNameFile);

    if (anotherCNPJ) cnpj = anotherCNPJ;
    else if (sameDate) generationDate = sameDate;

    let layoutCNAB = await this.cnab();
    layoutCNAB = layoutCNAB.join("\n");

    fs.writeFile(
      `./data-test/${dynamicNameFile}`,
      layoutCNAB.toString(),
      function (err) {
        if (err) {
          // return console.log("There is an error when creating the file", err);
        }
      }
    );
  }

  async createNewCNAB() {
    dynamicNameFile = `cnab_endtoend_${moment().format("DDMMYYhmmss")}.rem`;

    let layoutCNAB = await this.cnab();
    layoutCNAB = layoutCNAB.join("\n");
    layoutCNAB = Buffer.from(layoutCNAB);

    layoutCNAB.write(moment().format("DDMMYYhmmss"), 951);

    fs.writeFile(
      `./data-test/${dynamicNameFile}`,
      layoutCNAB.toString(),
      function (err) {
        if (err) {
          // console.log("There is an error when creating the file", err);
        }
      }
    );
  }

  async createUnacceptableFileExtension() {
    dynamicNameFile = `cnab_endtoend_${moment().format("DDMMYYhmmss")}.pdf`;

    let layoutCNAB = await this.cnab();
    layoutCNAB = layoutCNAB.join("\n");
    layoutCNAB = Buffer.from(layoutCNAB);

    layoutCNAB.write(moment().format("DDMMYYhmmss"), 951);

    fs.writeFile(
      `./data-test/${dynamicNameFile}`,
      layoutCNAB.toString(),
      function (err) {
        if (err) {
          // console.log("There is an error when creating the file", err);
        }
      }
    );
  }

  async createLargeCNAB() {
    dynamicNameFile = `cnab_endtoend_${moment().format("DDMMYYhmmss")}.rem`;

    let sizeFile = Buffer.allocUnsafe(
      process.env.UPLOAD_FILE_SIZE_LIMIT_IN_KB * 1025
    ).fill("h");

    let layoutCNAB = await this.cnab();
    layoutCNAB.push(sizeFile);
    layoutCNAB = layoutCNAB.join("\n");
    layoutCNAB = Buffer.from(layoutCNAB);

    fs.writeFile(
      `./data-test/${dynamicNameFile}`,
      layoutCNAB.toString(),
      function (err) {
        if (err) {
          // console.log("There is an error when creating the file", err);
        }
      }
    );
  }

  async createLargeCNABToValidate() {
    dynamicNameFile = `cnab_endtoend_${moment().format("DDMMYYhmmss")}.rem`;

    let sizeFile = Buffer.allocUnsafe(
      process.env.UPLOAD_FILE_SIZE_LIMIT_IN_KB * 1025
    ).fill("h");

    let layoutCNAB = await this.cnabSantander444ToValidate();
    layoutCNAB.push(sizeFile);
    layoutCNAB = layoutCNAB.join("\n");
    layoutCNAB = Buffer.from(layoutCNAB);

    fs.writeFile(
      `./data-test/${dynamicNameFile}`,
      layoutCNAB.toString(),
      function (err) {
        if (err) {
          // console.log("There is an error when creating the file", err);
        }
      }
    );
  }

  async createInvalidCNAB() {
    dynamicNameFile = `cnab_endtoend_${moment().format("DDMMYYhmmss")}.rem`;

    let layoutCNAB = [
      `
    
    
    `,
    ];
    layoutCNAB = layoutCNAB.join("\n");
    layoutCNAB = Buffer.from(layoutCNAB);

    fs.writeFile(
      `./data-test/${dynamicNameFile}`,
      layoutCNAB.toString(),
      function (err) {
        if (err) {
          // console.log("There is an error when creating the file", err);
        }
      }
    );
  }

  async cnabSantander444ToValidate() {
    let layoutCNAB = [
      '01REMESSA01COBRANCA       00000000000005336391EMPRESA CEDENTE TESTE         033SANTANDER      200622        MX0000008                                                                                                                                                                                                                                                                                     000001',
      '1000000000000000000000090227113099523                         0330000000000004235800000000002N           0  01000069799927072200000002925000  0    01N310322000000000000005850000000000000000000000000000000000000000000000290657289003205ENDERECO DO SACADO TESTE 1                                                                  96640000097834188000105  EMPRESA CEDENTE TESTE                      00000241220815095271000579550010007557131663871343',
      '9                                                                                                                                                                                                                                                                                                                                                                                                         000003',
    ];

    return layoutCNAB;
  }

  async cnabSantandeer444Invalid() {
    let invalidLayoutCNAB = [
      '01REMESSA01COBRANCA       00000000000005336391EMPRESA CEDENTE TESTE         033SANTANDER      200622        MX0000008                                                                                                                                                                                                                                                                                     000001',
      '1000000000000000000000090227113099523                         0330000000000004235800000000002N           0  01000069799927072200000002925000  0    01N310322000000000000005850000000000000000000000000000000000000000000000290657289003205ENDERECO DO SACADO TESTE 1                                                                  96640000097834188000105  EMPRESA CEDENTE TESTE                      00000241220815095271000579550010007557131663871343',
      '1000000000000000000000090227113099523                         0330000000000004236600000000002N           0  01000069800004082200000002925000  0    01N310322000000000000005850000000000000000000000000000000000000000000000290657289003205ENDERECO DO SACADO TESTE 2                                                                  96640000097834188000105  EMPRESA CEDENTE TESTE                      00000341220815095271000579550010007557131663871343',
      '1000000000000000000000090227113099523                         0330000000000004237400000000002N           0  01000069800127072200000004875000  0    01N310322000000000000009750000000000000000000000000000000000000000000000290657289009670ENDERECO DO SACADO TESTE 3                                                                  96930000097834188000105  EMPRESA CEDENTE TESTE                      00000441220815095271000579550010007557131663871343',
      '9                                                                                                                                                                                                                                                                                                                                                                                                         000013',
    ];

    return invalidLayoutCNAB;
  }

  async createNewCNABToValidate() {
    dynamicNameFile = `cnab_endtoend_${moment().format("DDMMYYhmmss")}.rem`;

    let layoutCNAB = await this.cnabSantander444ToValidate();
    layoutCNAB = layoutCNAB.join("\n");
    layoutCNAB = Buffer.from(layoutCNAB);

    layoutCNAB.write(moment().format("DDMMYYhmmss"), 951);

    fs.writeFile(
      `./data-test/${dynamicNameFile}`,
      layoutCNAB.toString(),
      function (err) {
        if (err) {
          // console.log("There is an error when creating the file", err);
        }
      }
    );
  }

  async createUnacceptableFileExtensionToValidate() {
    dynamicNameFile = `cnab_endtoend_${moment().format("DDMMYYhmmss")}.pdf`;

    let layoutCNAB = await this.cnabSantander444ToValidate();
    layoutCNAB = layoutCNAB.join("\n");
    layoutCNAB = Buffer.from(layoutCNAB);

    layoutCNAB.write(moment().format("DDMMYYhmmss"), 951);

    fs.writeFile(
      `./data-test/${dynamicNameFile}`,
      layoutCNAB.toString(),
      function (err) {
        if (err) {
          // console.log("There is an error when creating the file", err);
        }
      }
    );
  }

  async createInvalidCNABSantander444ToValidate() {
    dynamicNameFile = `cnab_endtoend_${moment().format("DDMMYYhmmss")}.rem`;

    let invalidLayoutCNAB = await this.cnabSantandeer444Invalid();
    invalidLayoutCNAB = invalidLayoutCNAB.join("\n");
    invalidLayoutCNAB = Buffer.from(invalidLayoutCNAB);

    fs.writeFile(
      `./data-test/${dynamicNameFile}`,
      invalidLayoutCNAB.toString(),
      function (err) {
        if (err) {
          // console.log("There is an error when creating the file", err);
        }
      }
    );
  }

  async clickFileValidationSubMenu() {
    await (await this.fileValidationSubMenu).waitForExist({ timeout });
    await (await this.fileValidationSubMenu).click();
  }

  async clickDownloadOption() {
    await (await this.downloadOption).waitForClickable({ timeout });
    await (await this.downloadOption).click();
  }

  async getValidFileMessage() {
    await (await this.validFileMessage).waitForExist({ timeout });
    return (await this.validFileMessage).getText();
  }
}

export default new CreditPage();
