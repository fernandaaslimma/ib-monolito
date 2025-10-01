import fetchHandler from "../../utils/fetchHandler";

export const getRegistrationFormData = () =>
  fetchHandler(`${__API__}/personregistration/v1/api/person`);

export const getCountries = () => fetchHandler(`${__API__}/countries`);

export const postConfirmRegistrationFormData = () =>
  fetchHandler(
    `${__API__}/personregistration/v1/api/person/confirmation/request`,
    {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }
  );

export const putConfirmRegistrationFormData = body =>
  fetchHandler(`${__API__}/personregistration/v1/api/person/confirmation/`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });

export const postUpdateRegistrationFormData = body =>
  fetchHandler(`${__API__}/personregistration/v1/api/person/update/request`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });

export const putUpdateRegistrationFormData = body =>
  fetchHandler(
    `${__API__}/personregistration/v1/api/person/update/confirmation/`,
    {
      method: "PUT",
      body: JSON.stringify(body),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }
  );
