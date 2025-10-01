import actions from "./index";
import {
  MFABOARDING_PARAM_APP,
  MFABOARDING_PARAM_AUTH
} from "../../utils/constants";

jest.mock("../../services/notification");

const getNotification = require("../../services/notification")
  .getIbNotificationAPI;

const notificationResponse = [
  {
    title: "Precisamos cadastrar um novo fator de autenticação",
    description: "Qual fator deseja cadastrar?",
    displayMethod: "PopUp",
    type: "MFABoarding",
    parameters: [
      {
        type: MFABOARDING_PARAM_APP,
        id: 1
      },
      {
        type: MFABOARDING_PARAM_AUTH,
        id: 2
      }
    ]
  },
  {
    type: "SuitabilityForms",
    parameters: {
      formId: 1
    }
  },
  {
    type: "PersonRegistrationForms"
  }
];

const state = {
  userInfo: {
    roles: ["GetNotifications"]
  }
};

describe("Notification actions", () => {
  it("should return an action object", () => {
    expect(typeof actions() === "object").toBeTruthy();
    expect(Object.keys(actions())).toEqual([
      "getNotification",
      "setNotificationStatus",
      "setNotificationSelect"
    ]);
  });

  describe("getNotification", () => {
    beforeEach(() => {
      getNotification.mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(notificationResponse)
        })
      );
    });

    it("Should getNotification with success", async () => {
      const { getNotification } = actions();
      const response = await getNotification(state);

      const object = {
        notification: notificationResponse
      };

      expect(response).toEqual(object);
    });

    it("Should return an empty notification when the user role not permit notification access", async () => {
      const newState = {
        userInfo: {
          roles: ["mock"]
        }
      };

      const { getNotification } = actions();
      const response = await getNotification(newState);

      const object = {
        notification: []
      };

      expect(response).toEqual(object);
    });
  });

  describe("setNotificationStatus", () => {
    it("Should setNotificationStatus with success", async () => {
      const { setNotificationStatus } = actions();

      const response = await setNotificationStatus(
        {
          notificated: {}
        },
        "suitability"
      );

      const object = {
        notificated: {
          suitability: true
        }
      };

      expect(response).toEqual(object);
    });
  });
});
