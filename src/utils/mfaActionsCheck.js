export default async (actionType, authFactors) => {
  const checkAuthFactors = await authFactors.filter(auth => {
    if (
      auth.actions.includes(actionType) &&
      auth.activated === true &&
      auth.approved === true
    ) {
      return true;
    } else {
      return false;
    }
  });
  if (checkAuthFactors.length > 0) {
    const response = {
      result: true,
      authFactors: checkAuthFactors
    };
    return response;
  } else {
    const response = {
      result: false,
      authFactors: checkAuthFactors
    };
    return response;
  }
};
