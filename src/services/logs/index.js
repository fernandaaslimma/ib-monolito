import fetchHandler from "../../utils/fetchHandler";

export const logError = (error, userAgent) => {
  return fetchHandler(__ERROR_LOG_URL__, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: JSON.stringify({
      error,
      userAgent
    })
  });
};
