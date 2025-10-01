import fetchHandler from "../../utils/fetchHandler";

export const getAuthFactors = email =>
  fetchHandler(
    `${__API__}/authcodesmanager/v1/users/authfactors/ib/${email}?activated=true&approved=true`,
    {
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }
  );

export const createAuthCode = body =>
  fetchHandler(`${__API__}/authcodesmanager/v1/authcodes`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });

export const checkMFA = (id, body) =>
  fetchHandler(`${__API__}/authcodesmanager/v1/authcodes/${id}/approve`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    timeout: 2000
  });

export const createAuthFactor = body =>
  fetchHandler(`${__API__}/authcodesmanager/v1/AuthFactors`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });

export const aproveAuthFactor = (idAuthFactor, body) =>
  fetchHandler(
    `${__API__}/authcodesmanager/v1/authfactors/${idAuthFactor}/approve`,
    {
      method: "PUT",
      body: JSON.stringify(body),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }
  );

export const activateAuthFactor = (idAuthFactor, body) =>
  fetchHandler(
    `${__API__}/authcodesmanager/v1/authfactors/${idAuthFactor}/activate`,
    {
      method: "PUT",
      body: JSON.stringify(body),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }
  );
