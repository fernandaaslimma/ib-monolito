export const isMsBrowser = () => {
  if (typeof window !== "undefined") {
    return !!(navigator && navigator.msSaveOrOpenBlob);
  }
};

export const isMsEdge = () => {
  if (typeof window !== "undefined") {
    return !!(
      navigator &&
      navigator.msSaveOrOpenBlob &&
      navigator.appVersion.includes("Edge")
    );
  }
};

export const isInternetExplorer = () => isMsBrowser() && !isMsEdge();
