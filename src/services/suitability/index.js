import fetchHandler from "../../utils/fetchHandler";

export function defaultSuitabilityAnswerPost(answers) {
  return {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: JSON.stringify(answers)
  };
}

export const getSuitabilityFormId = () =>
  fetchHandler(`${__API__}/suitabilityforms/v1/api/Form`);

export const getInvestorProfile = () =>
  fetchHandler(`${__API__}/suitabilityforms/v1/api/client/profile`);

export const getSuitabilityFormData = formId =>
  fetchHandler(
    `${__API__}/suitabilityforms/v1/api/Form/${formId}/lastVersion/questions`
  );

export const getSuitabilityResult = ({ formVersionId, answers }) =>
  fetchHandler(
    `${__API__}/suitabilityforms/v1/api/Form/formVersion/${formVersionId}/answers`,
    defaultSuitabilityAnswerPost(answers)
  );

export const getSuitabilityInfo = () =>
  fetchHandler(`${__API__}/suitabilityforms/v1/api/Form/info`);

export const submitSuitabilityAnswers = (answers, formVersionId) => {
  return fetchHandler(
    `${__API__}/suitabilityforms/v1/api/Form/FormVersion/${formVersionId}/answers/confirm`,
    defaultSuitabilityAnswerPost(answers)
  );
};
