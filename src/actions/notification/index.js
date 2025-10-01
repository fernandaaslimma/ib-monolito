import * as NOTIFICATION_API from "../../services/notification";
import { checkIfHasAccess } from "../../components/common/CanAccess/CanAccess";

import { GET_NOTIFICATIONS } from "../../utils/constants";

export default () => ({
  getNotification: async state => {
    let responseNotifications = [];
    if (checkIfHasAccess(state.userInfo, [GET_NOTIFICATIONS])) {
      try {
        const rawNotifications = await NOTIFICATION_API.getIbNotificationAPI();
        responseNotifications = await rawNotifications.json();
      } catch (error) {
        responseNotifications = [];
        return { error };
      }
    }

    return {
      notification: responseNotifications
    };
  },
  setNotificationStatus: (state, type) => {
    return {
      notificated: {
        ...state.notificated,
        [type]: true
      }
    };
  },
  setNotificationSelect: (_, id) => {
    return {
      notificatedId: id
    };
  }
});
