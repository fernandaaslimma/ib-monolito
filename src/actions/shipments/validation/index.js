import * as validationAPI from "../../../services/shipments/validation";
import { translate } from "../../../utils/i18n";

export default store => ({
  postRemmitanceValidation: async (
    _,
    layoutType,
    body,
    progressFunction,
    callbackSuccess,
    callbackError
  ) => {
    try {
      const postRemmitanceValidationResponse = await validationAPI.postRemmitanceValidation(
        body,
        layoutType
      );
      const RemmitanceValidationResponse = postRemmitanceValidationResponse.status
        ? await postRemmitanceValidationResponse.json()
        : {};
      if (
        postRemmitanceValidationResponse.error &&
        postRemmitanceValidationResponse.error.status === 400
      ) {
        store.setState({ calledAPI: false });
        progressFunction(false, {
          status: 400,
          toastR: true,
          message: postRemmitanceValidationResponse.error.Message,
          toastRMode: "error"
        });
      } else if (
        postRemmitanceValidationResponse.status <= 201 &&
        RemmitanceValidationResponse.validFile === false
      ) {
        store.setState({ calledAPI: false });
        progressFunction(false, {
          status: 400,
          toastR: true,
          message: translate("REMITTANCES_UPLOAD_VALIDATION_FAILED"),
          toastRMode: "warning"
        });
        callbackError();
        return { RemmitanceValidationResponse: RemmitanceValidationResponse };
      } else if (
        postRemmitanceValidationResponse.status <= 201 &&
        RemmitanceValidationResponse.validFile === true
      ) {
        store.setState({ calledAPI: false });
        progressFunction(false, { status: 200, toastR: false });
        callbackSuccess(RemmitanceValidationResponse);
        return { RemmitanceValidationResponse: RemmitanceValidationResponse };
      } else {
        return { error: postRemmitanceValidationResponse.error };
      }
    } catch (error) {
      return { error };
    }
  },

  getRemmitanceValidationLayouts: async () => {
    try {
      const rawCnabLayouts = await validationAPI.getRemmitanceValidationLayouts();
      const response = await rawCnabLayouts.json();
      const cnabLayouts = response.map(item => {
        return {
          value: item.layoutType,
          label: item.name,
          layoutManualUrl: item.layoutManualUrl
        };
      });
      return { cnabLayouts };
    } catch (error) {
      return { error };
    }
  }
});
