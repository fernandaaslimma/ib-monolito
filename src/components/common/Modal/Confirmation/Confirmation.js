import React from "react";
import { string, func, oneOfType, bool, shape, arrayOf } from "prop-types";

import { translate } from "../../../../utils/i18n";
import { ConfirmationContainer, ConfirmationMessage, Button } from "./styles";

function Confirmation({ modalSettings, closeModal }) {
  if (!modalSettings) {
    return null;
  }

  const { message, onClose, onConfirm } = modalSettings;

  const closeHandler = callback => {
    const callbackResponse = callback && callback();

    if (callbackResponse && callbackResponse.then) {
      callbackResponse.then(() => closeModal && closeModal());
    } else {
      closeModal && closeModal();
    }
  };

  return (
    <ConfirmationContainer data-test="ConfirmationModal">
      {message && <ConfirmationMessage>{message}</ConfirmationMessage>}
      <Button
        onClick={() => closeHandler(onClose)}
        dataTest="CancelLogout"
        isWarning
      >
        {translate("NO")}
      </Button>
      <Button
        onClick={() => closeHandler(onConfirm)}
        dataTest="ConfirmLogout"
        isCallToAction
      >
        {translate("YES")}
      </Button>
    </ConfirmationContainer>
  );
}

Confirmation.defaultProps = {
  modal: null
};

Confirmation.propTypes = {
  modal: oneOfType([
    bool,
    shape({
      title: string,
      icon: string,
      description: oneOfType([arrayOf(string), string]),
      onClose: func
    })
  ])
};

export default Confirmation;
