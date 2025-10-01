import * as logErrorAPI from "../services/logs";

export default function logError(e) {
  const { message } = e;

  const { userAgent } = window.navigator;

  logErrorAPI.logError(message, userAgent.replace(/[\W_]+/g, " "));
}
