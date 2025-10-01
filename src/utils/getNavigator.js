export const isMsBrowser = () => {
  return !!(navigator && navigator.msSaveOrOpenBlob);
};

export const isMsEdge = () => {
  return !!(
    navigator &&
    navigator.msSaveOrOpenBlob &&
    navigator.appVersion.includes("Edge")
  );
};

export const isInternetExplorer = () => {
  return isMsBrowser() && !isMsEdge();
};
