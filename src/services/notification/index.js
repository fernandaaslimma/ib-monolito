import fetchHandler from "../../utils/fetchHandler";

export const getIbNotificationAPI = () => {
  try {
    return fetchHandler(`${__API__}/ibnotifications/v1/notifications`);
  } catch (error) {
    return { error };
  }
};
