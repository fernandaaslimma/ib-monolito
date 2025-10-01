import downloadFile, {
  downloadFromBase64,
  shareFromBase64
} from "./downloadFile";

jest.useFakeTimers();
let base64String = "YXp1bCBlc2N1cm8=";

beforeEach(() => {
  global.Blob = jest.fn(function() {
    this.blob = "blob";
  });

  global.ArrayBuffer = jest.fn();

  global.navigator = {
    msSaveOrOpenBlob: jest.fn()
  };

  global.URL = {
    createObjectURL: jest.fn(() => "blobURL"),
    revokeObjectURL: jest.fn()
  };
});

describe("downloadFile", () => {
  it("Should parse Blob", () => {
    downloadFile("blob");
    expect(global.Blob).toHaveBeenCalled();
  });

  it("Should call createObjectURL with parsed blob", () => {
    downloadFile("blob");
    expect(global.URL.createObjectURL).toHaveBeenCalledWith({ blob: "blob" });
  });

  it("Should return a link element with download attributes", () => {
    const resp = downloadFile("blob");
    expect(resp.outerHTML).toEqual(
      '<a href="blobURL" download="file.pdf"></a>'
    );
  });

  it("Should return a link element with download attributes and custom filemane", () => {
    const resp = downloadFile("blob", "filename.pdf");
    expect(resp.outerHTML).toEqual(
      '<a href="blobURL" download="filename.pdf"></a>'
    );
  });

  it("Should return call URL.revokeObjectURL after timeout runs out", () => {
    downloadFile("blob");

    expect(URL.revokeObjectURL).not.toHaveBeenCalledWith("blobURL");
    jest.runAllTimers();
    expect(URL.revokeObjectURL).toHaveBeenCalledWith("blobURL");
  });
});

describe("downloadFromBase64", () => {
  it("Should parse base64", () => {
    downloadFromBase64(base64String, "test");
    expect(global.ArrayBuffer).toHaveBeenCalledWith(11);
  });
});

describe("shareFromBase64", () => {
  it("Should parse base64", () => {
    shareFromBase64(base64String, "test");
    expect(global.ArrayBuffer).toHaveBeenCalledWith(11);
  });
});
