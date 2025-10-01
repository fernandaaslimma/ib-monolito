import React from "react";
import { string, func, oneOfType, bool, shape, arrayOf } from "prop-types";
import Icon from "../../Icon";

import { Title, IconContainer, Description, CloseBtn, Close } from "../styles";
import { DefaultContainer, FooterContainer, Button } from "./styles";

export function renderDescription(description) {
  if (typeof description === "string") {
    return <Description>{description}</Description>;
  }

  if (Array.isArray(description)) {
    return description.map(descriptionText => (
      <Description key={descriptionText}>{descriptionText}</Description>
    ));
  }

  return null;
}

function Information({ modalSettings, closeModal }) {
  if (!modalSettings) {
    return null;
  }

  const { title, icon, description, onClose, confirmButton } = modalSettings;

  return (
    <DefaultContainer>
      {icon && (
        <IconContainer>
          <Icon type={icon} width="80" height="80" />
        </IconContainer>
      )}

      {title && <Title modalType="Information">{title}</Title>}

      {renderDescription(description)}

      {!confirmButton && (
        <CloseBtn
          onClick={() => {
            closeModal && closeModal();
            onClose && onClose();
          }}
        >
          <Icon type="Close" width="14" height="14" />
          <Close>Close</Close>
        </CloseBtn>
      )}

      {confirmButton && (
        <FooterContainer>
          <Button
            onClick={() => {
              closeModal && closeModal();
              onClose && onClose();
            }}
          >
            {confirmButton}
          </Button>
        </FooterContainer>
      )}
    </DefaultContainer>
  );
}

Information.defaultProps = {
  modal: null
};

Information.propTypes = {
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

export default Information;
