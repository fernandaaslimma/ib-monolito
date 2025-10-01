import fetchHandler from "../../../utils/fetchHandler";

export const postRemmitanceValidation = async (body, layoutType) => {
  try {
    return await fetchHandler(
      `${__API__}/remittancesapi/v1/Validator?layoutType=${layoutType}`,
      {
        method: "POST",
        body: body
      }
    );
  } catch (error) {
    return {
      error
    };
  }
};

export const getRemmitanceValidationLayouts = async () => {
  try {
    return await fetchHandler(
      `${__API__}/remittancesapi/v1/Validator/cnablayouts`
    );
  } catch (error) {
    return {
      error
    };
  }
};
