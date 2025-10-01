import * as contactsAPI from "../../services/contacts";

export default () => ({
  getAccountManagers: async () => {
    try {
      const rawAccountManagers = await contactsAPI.getAccountManagersAPI();
      const accManagers = await rawAccountManagers.json();

      const response = accManagers.map(async elm => {
        try {
          const photo = await contactsAPI.getAccountManagersPhotosAPI(elm.mail);
          const base64Photo = await photo.text();
          elm.avatar = base64Photo.substring(1, base64Photo.length - 1);

          return elm;
        } catch (error) {
          return elm;
        }
      });

      const responseAccountManagers = await Promise.all(response);
      return { responseAccountManagers };
    } catch (error) {
      return { error };
    }
  },

  getButtonsMessages: async () => {
    try {
      const rawButtonMessage = await contactsAPI.getButtonsMessagesAPI();
      const responseButtonMessage = await rawButtonMessage.json();
      return { responseButtonMessage };
    } catch (error) {
      return { error };
    }
  },

  postEmail: async (_, body) => {
    try {
      const rawPostEmail = await contactsAPI.postEmailAPI(body);
      const responsePostEmail = await rawPostEmail.json();
      return { responsePostEmail };
    } catch (error) {
      // for the error reach the controller level, must use throw in the action and set erro manually from the controller
      throw error;
    }
  }
});
