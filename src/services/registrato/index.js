import fetchHandler from "../../utils/fetchHandler";

const options = securityPhrase => ({
  method: "POST",
  headers: new Headers({
    "Content-Type": "application/json"
  }),
  body: JSON.stringify({
    securityPhrase
  })
});

export const validateSecurityPhrase = securityPhrase =>
  fetchHandler(
    `${__API__}/registrato/v1/validatephrase`,
    options(securityPhrase)
  );
