import fetchHandler from "../../utils/fetchHandler";

export const getAccountManagersAPI = () => {
  return fetchHandler(`${__API__}/personmanagement/v1/accountmanager`);
};

export const getAccountManagersPhotosAPI = email => {
  return fetchHandler(
    `${__API__}/personmanagement/v1/accountmanager/${email}/photo/64x64`
  );
};

export const getButtonsMessagesAPI = () => {
  return fetchHandler(`${__API__}/clientcontacts/v1/messages`);
};

export const postEmailAPI = body => {
  try {
    return fetchHandler(`${__API__}/clientcontacts/v1/mail/send`, {
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
