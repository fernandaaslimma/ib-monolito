import React from "react";
import { string, func, oneOfType, bool, shape, arrayOf } from "prop-types";

import { translate } from "../../../../utils/i18n";
import { CustomContainer, CustomMessage, Button } from "./styles";

function Custom({ modalSettings, closeModal }) {
  if (!modalSettings) {
    return null;
  }

  const {
    message,
    onClose,
    onConfirm,
    children,
    width,
    shouldStartDisabled,
    overwriteDefaultButtons
  } = modalSettings;

  const closeHandler = callback => {
    const callbackResponse = callback && callback();

    if (callbackResponse && callbackResponse.then) {
      callbackResponse.then(() => closeModal && closeModal());
    } else {
      closeModal && closeModal();
    }
  };

  return (
    <CustomContainer data-test="CustomModal" width={width}>
      {message && <CustomMessage>{message}</CustomMessage>}
      {children && children()}
      {!overwriteDefaultButtons && (
        <Button
          onClick={() => closeHandler(onClose)}
          dataTest="Cancel"
          isWarning
        >
          {translate("CANCEL_BTN")}
        </Button>
      )}
      {!overwriteDefaultButtons && (
        <Button
          ref={Custom.confirmButtonRef}
          onClick={() => closeHandler(onConfirm)}
          dataTest="Confirm"
          isCallToAction
          shouldStartDisabled={shouldStartDisabled}
        >
          {translate("CONFIRM_BTN")}
        </Button>
      )}
    </CustomContainer>
  );
}

Custom.confirmButtonRef = React.createRef();

Custom.defaultProps = {
  modal: null
};

Custom.propTypes = {
  modal: oneOfType([
    bool,
    shape({
      title: string,
      icon: string,
      description: oneOfType([arrayOf(string), string]),
      onClose: func,
      children: func
    })
  ])
};

export default Custom;
