export default async function(file, filename, callbackToDownloadMobile) {
  if (isMobile()) {
    callbackToDownloadMobile(file);
  } else {
    const link = document.createElement("a");
    document.body.appendChild(link);
    link.href = file;
    link.download = filename;
    link.target = "_blank";
    link.click();
    setTimeout(link.remove(), 100);
    return link;
  }
}

export function isMobile() {
  return typeof MOBILEAPP_Download === "function";
}
