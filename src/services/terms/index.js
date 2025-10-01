import fetchHandler from "../../utils/fetchHandler";

export const downloadTerm = (term, urlTermName) => {
  const options = {
    headers: new Headers({
      "X-Fetch-Type": "download/pdf",
      "X-File-Name": `${term}`
    })
  };
  return fetchHandler(
    `${__API__}/productterms/${urlTermName ? urlTermName : term}`,
    options
  );
};

export const approveNewTermsAPI = body => {
  try {
    return fetchHandler(`${__API__}/clientterms/v1/api/agreementterms`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
  } catch (error) {
    throw { error };
  }
};
