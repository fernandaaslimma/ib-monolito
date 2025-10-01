import fetchHandler from "../../utils/fetchHandler";

export const getContracts = () =>
  fetchHandler(`${__API__}/esign/v1/api/Contracts/Fx`);

export const getContractID = contractId =>
  fetchHandler(`${__API__}/esign/v1/api/Contracts/Fx/${contractId}`);

export const getSignedContracts = () =>
  fetchHandler(`${__API__}/esign/v1/api/Contracts/Fx/History`);

export const getContractSignUrl = contractId => {
  const redirectUrl = encodeURIComponent(
    btoa(
      location &&
        `${location.origin}/exchanges/sign-confirmation?contractId=${contractId}`
    )
  );

  return fetchHandler(
    `${__API__}/esign/v1/api/Contracts/Fx/${contractId}/Sign_Url?redirect=${redirectUrl}`
  );
};

export const markAsSigned = contractId => {
  return fetchHandler(
    `${__API__}/esign/v1/api/Contracts/Fx/${contractId}/Signed`,
    {
      method: "PUT"
    }
  );
};

export const getContractFile = contractId =>
  fetchHandler(
    `${__API__}/esign/v1/api/Contracts/Fx/${contractId}/Document_File`
  );
