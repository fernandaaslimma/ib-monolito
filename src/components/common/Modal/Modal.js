import React from "react";
import { string, func, oneOfType, bool, shape, arrayOf } from "prop-types";
import { Overlay } from "../../../styles/objects";

import { Wrapper, Content } from "./styles";
import { scrollToTop } from "../../../utils/dom";

const modalComponents = {
  Default: require("./Default").default,
  Confirmation: require("./Confirmation").default,
  Custom: require("./Custom").default,
  PageAsModal: require("./PageAsModal").default,
  Information: require("./Information").default,
  FixedModal: require("./FixedModal").default
};

export const MODAL_TYPES = {
  CONFIRMATION: "Confirmation",
  DEFAULT: "Default",
  CUSTOM: "Custom",
  PAGE_AS_MODAL: "PageAsModal",
  INFORMATION: "Information",
  FIXED_MODAL: "FixedModal"
};

function usePrevious(value) {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export function closeModal(isScrollModal) {
  if (window.scrollToCopy) {
    window.scrollTo = isScrollModal.current;
  }
  document.getElementsByTagName("body")[0].style.position = "relative";
  document.getElementsByTagName("body")[0].style.overflow = "visible";

  return null;
}
export function Modal(props) {
  let isScrollModal = React.useRef(window.scrollTo);
  window.scrollToCopy = window.scrollTo;

  const prevCloseTreatment = usePrevious(
    props.modalSettings && props.modalSettings.closeTreatment
  );
  const closeTreatment =
    props.modalSettings && props.modalSettings.closeTreatment;

  React.useEffect(() => {
    if (prevCloseTreatment !== closeTreatment) {
      closeTreatment === false && closeModal(isScrollModal);
    }
  }, [prevCloseTreatment, closeTreatment]);

  if (props.modalSettings && props.modalSettings.isOpen) {
    const { type } = props.modalSettings;

    if (type === "FixedModal") {
      scrollToTop();
      delete window.scrollTo;
      window.scrollTo = () => {};
    }

    const ModalContent =
      modalComponents[type] || modalComponents[MODAL_TYPES.DEFAULT];

    return (
      <Wrapper
        pageAsModal={type === "PageAsModal"}
        fixedModal={type === "FixedModal"}
      >
        <Content>
          <ModalContent {...props} />
        </Content>

        <Overlay data-test="Overlay" />
      </Wrapper>
    );
  }

  return null;
}

Modal.displayName = "Modal";

Modal.defaultProps = {
  modal: null
};

Modal.propTypes = {
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

export default Modal;
