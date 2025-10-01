import React from "react";
import Button from "../Button";
import {
  Divider,
  ModalButtonsContainer,
  ModalContainer,
  ModalText,
  ModalTitle
} from "./styles";
import { rem } from "../../../styles/tools";
import { translate } from "../../../utils/i18n";

const LogoutContent = ({ doLogout = () => {}, closeModal = () => {} }) => {
  return (
    <ModalContainer>
      <ModalTitle>{translate("LOGOUT_MODAL_TITLE")}</ModalTitle>
      <Divider />
      <ModalText>{translate("LOGOUT_MODAL_MESSAGE")}</ModalText>
      <ModalButtonsContainer>
        <Button style={{ width: "100%" }} onClick={doLogout}>
          {translate("YES")}
        </Button>
        <Button
          style={{ width: "100%", marginLeft: rem(24) }}
          onClick={() => closeModal()}
          actionSecondary
        >
          {translate("BACK")}
        </Button>
      </ModalButtonsContainer>
    </ModalContainer>
  );
};

export default LogoutContent;
