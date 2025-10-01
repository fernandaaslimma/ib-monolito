import { translate } from "../../utils/i18n";

import { bindActions, combineActions } from "redux-zero/utils";
import store from "../store";
import modalActions from "../../actions/modal";
import toastrActions from "../../actions/toastr";

const actions = combineActions(modalActions, toastrActions);
const boundActions = bindActions(actions, store);

function connectionCheck() {
  return new Promise(resolve => {
    let modalOpened = false;

    const handleConnectionChange = () => {
      //resolve();
      // Case internet state is ok, deactivates listener and show success toastr
      const connected = navigator.onLine ? true : false;
      if (connected && modalOpened === true) {
        modalOpened = false;
        boundActions.closeModal();
      }

      if (connected) {
        window.removeEventListener("online", handleConnectionChange);
        boundActions.enableToastrTimeout();
        boundActions.closeToastr();
        boundActions.openToastr({
          text: translate("YOUR_CONNECTION_HAS_BEEN_REESTABLISHED"),
          isBelow: false,
          isTop: true
        });
      }
    };
    // Case internet is not ok activate listener, open modal and toastr
    const { modalSettings } = store.getState();
    const isMOdalOpened =
      modalSettings && modalSettings.isOpen === true ? true : false;
    const connected = navigator.onLine ? true : false;
    if (connected === false && !isMOdalOpened) {
      modalOpened = true;

      boundActions.cancelToastrTimeout();
      boundActions.closeToastr();
      boundActions.openModal({
        title: translate("LOOKS_LIKE_YOU_ARE_OUT_OF_CONNECTION"),
        icon: "ConnectionLost",
        description: [translate("CHECK_YOUR_INTERNET_AND_TRY_TO_RECONNECT")],
        confirmButton: translate("UNDERSTOOD"),
        type: "Information",
        onClose: () => {
          boundActions.openToastr({
            text: translate("YOUR_INTERNET_CONNECTION_HAS_BEEN_LOST"),
            isBelow: false,
            isTop: true,
            timeout: 600000,
            noClose: true,
            error: true
          });
        }
      });
      window.addEventListener("online", handleConnectionChange);
      resolve(false);
    } else if (connected === false && isMOdalOpened) {
      modalOpened = false;
      boundActions.cancelToastrTimeout();
      boundActions.closeToastr();
      boundActions.openToastr({
        text: translate("YOUR_INTERNET_CONNECTION_HAS_BEEN_LOST"),
        isBelow: false,
        isTop: true,
        timeout: 600000,
        noClose: true,
        error: true
      });
      window.addEventListener("online", handleConnectionChange);
      resolve(false);
    } else {
      modalOpened = false;
      resolve(true);
    }
  });
}
export default connectionCheck;
