import React from "react";
import { func, oneOfType, bool, shape, number } from "prop-types";
import { ScrollModalContainer } from "./styles";

function FixedModal({ modalSettings }) {
  const isOpenModal = React.useCallback(() => {
    document.getElementsByTagName("body")[0].style.position = "absolute";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
  }, []);

  React.useEffect(() => {
    if (modalSettings && modalSettings.isOpen === true) {
      return isOpenModal();
    }
  }, [modalSettings, isOpenModal]);

  if (!modalSettings) {
    return null;
  }
  const { children, width, bigModal } = modalSettings;

  return (
    <ScrollModalContainer
      data-test="ScrollModal"
      width={width}
      bigModal={bigModal}
    >
      {children && children()}
    </ScrollModalContainer>
  );
}

FixedModal.confirmButtonRef = React.createRef();

FixedModal.defaultProps = {
  modal: null
};

FixedModal.propTypes = {
  modal: oneOfType([
    bool,
    shape({
      width: number,
      children: func
    })
  ])
};

export default FixedModal;
