import React from "react";
import { func, oneOfType, bool, shape, number } from "prop-types";
import { PageAsModalContainer } from "./styles";

function PageAsModal({ modalSettings }) {
  if (!modalSettings) {
    return null;
  }
  const { children, width } = modalSettings;

  return (
    <PageAsModalContainer data-test="PageAsModal" width={width}>
      {children && children()}
    </PageAsModalContainer>
  );
}

PageAsModal.confirmButtonRef = React.createRef();

PageAsModal.defaultProps = {
  modal: null
};

PageAsModal.propTypes = {
  modal: oneOfType([
    bool,
    shape({
      width: number,
      children: func
    })
  ])
};

export default PageAsModal;
