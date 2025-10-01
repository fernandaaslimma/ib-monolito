import { isMsBrowser } from "./getNavigator";
import { DEFAULT_FILE_FORMAT } from "../utils/constants";

export function checkIfIsDownloadFromMobileApp() {
  return typeof MOBILEAPP_Download === "function";
}

function checkIfIsShareFromMobileApp() {
  return typeof MOBILEAPP_Share === "function";
}

export function getLink(blob, fileName) {
  const data = URL.createObjectURL(blob);
  const link = document.createElement("a");
  document.body.appendChild(link);
  link.href = data;
  link.download = `${fileName || "file.pdf"}`;
  link.click();

  setTimeout(function() {
    URL.revokeObjectURL(data);
  }, 100);

  return link;
}

function getDOMLink(blob, filename, fileFormat = DEFAULT_FILE_FORMAT) {
  const newBlob = new Blob([blob], { type: fileFormat });
  if (isMsBrowser()) {
    navigator.msSaveOrOpenBlob(newBlob, `${filename || "file.pdf"}`);
    return;
  }
  const data = URL.createObjectURL(newBlob);
  const link = document.createElement("a");
  document.body.appendChild(link);
  link.href = data;
  link.download = `${filename || "file.pdf"}`;
  link.click();

  setTimeout(function() {
    URL.revokeObjectURL(data);
  }, 100);

  return link;
}

export default (blob, filename) => {
  return getDOMLink(blob, filename);
};

export function downloadFromBlob(blob, fileName, fileFormat) {
  if (checkIfIsDownloadFromMobileApp()) {
    const name = `${fileName || "file.pdf"}`;
    return MOBILEAPP_Download(name, fileFormat, blob); // eslint-disable-line
  } else {
    return getDOMLink(blob, fileName, fileFormat);
  }
}

export function downloadFromBase64(
  base64Str,
  fileName,
  fileFormat = DEFAULT_FILE_FORMAT
) {
  if (checkIfIsDownloadFromMobileApp()) {
    const name = `${fileName || "file.pdf"}`;
    return MOBILEAPP_Download(name, fileFormat, base64Str); // eslint-disable-line
  }

  // decode base64 string, remove space for IE compatibility
  const binary = atob(base64Str.replace(/\s/g, ""));
  const len = binary.length;
  const buffer = new ArrayBuffer(len);

  let blob = new Uint8Array(buffer);
  for (var i = 0; i < len; i++) {
    blob[i] = binary.charCodeAt(i);
  }

  return getDOMLink(blob, fileName, fileFormat);
}

export function shareFromBase64(
  base64Str,
  fileName,
  fileFormat = DEFAULT_FILE_FORMAT
) {
  if (checkIfIsShareFromMobileApp()) {
    const name = `${fileName || "voucher.png"}`;
    return MOBILEAPP_Share(name, fileFormat, base64Str); // eslint-disable-line
  }
  // decode base64 string, remove space for IE compatibility
  const binary = atob(base64Str.replace(/\s/g, ""));
  const len = binary.length;
  const buffer = new ArrayBuffer(len);

  let blob = new Uint8Array(buffer);
  for (var i = 0; i < len; i++) {
    blob[i] = binary.charCodeAt(i);
  }

  return getDOMLink(blob, fileName, fileFormat);
}
