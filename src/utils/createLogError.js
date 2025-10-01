import CreateLog from "../services/error";

export default async function createLogError(errorResponse) {
  let errorParsed;
  const isObject = typeof errorResponse === "object" && errorResponse !== null;
  if (!isObject) errorParsed = await JSON.parse(errorResponse);
  const error = {
    errorJSON: !isObject ? errorParsed : errorResponse,
    httpStatusCode: !isObject ? errorParsed.status : errorResponse.status,
    apiUrl: !isObject ? errorParsed.url : errorResponse.url,
    typeError: !isObject ? errorParsed.stack : errorResponse.stack,
    errorMessage: !isObject ? errorParsed.message : errorResponse.message,
    browserUrl: window.location.href
  };

  await CreateLog(error);

  return;
}
