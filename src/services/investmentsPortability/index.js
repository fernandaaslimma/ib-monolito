import fetchHandler from "../../utils/fetchHandler";

export const getPortabilities = () => {
  try {
    return fetchHandler(`${__API__}/investmentsportability/v1/portabilities`);
  } catch (error) {
    return { error };
  }
};

export const getInstitutions = () => {
  try {
    return fetchHandler(`${__API__}/investmentsportability/v1/institutions`);
  } catch (error) {
    return { error };
  }
};

export const getPositions = (investorId) => {
  try {
    return fetchHandler(`${__API__}/investmentsportability/v1/positions?investorId=${investorId}`);
  } catch (error) {
    return { error };
  }
};

export const requestPortability = (body) => {
  try {
    return fetchHandler(`${__API__}/investmentsportability/v1/portabilities`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
  } catch (error) {
    return { error };
  }
};