import React, { Fragment } from "react";
import {
  FooterButtonsModal,
  InfoTitleModal,
  InfoTextModal,
  ModalContainer
} from "./styles";
import Header from "../../../../common/Modal/Header";
import Icon from "../../../../common/Icon";
import Button from "../../../../common/Button";
import { translate } from "../../../../../utils/i18n";
import { rem } from "../../../../../styles/tools";

const TimerModal = ({ handleCloseModal }) => {
  return (
    <Fragment>
      <Header
        wrapperStyle={` border-bottom: none`}
        onClickClose={() => handleCloseModal()}
      />
      <ModalContainer>
        <Icon type={"ExchangeTimerError"} height={75} width={75} />
        <InfoTitleModal>
          {translate("EXCHANGE_TIMER_MODAL_ERROR_TITLE")}
        </InfoTitleModal>
        <InfoTextModal>
          {translate("EXCHANGE_TIMER_MODAL_ERROR_TEXT")}
        </InfoTextModal>
      </ModalContainer>

      <FooterButtonsModal>
        <Button
          type="outline"
          onClick={() => handleCloseModal()}
          margin={{ r: 16 }}
          style={{
            minWidth: rem(120)
          }}
        >
          {translate("CANCEL_BTN")}
        </Button>
        <Button
          // actionSecondary
          type="outline"
          onClick={() => handleCloseModal()}
          style={{
            backgroundColor: "#0A8765",
            minWidth: rem(120),
            color: "#fff",
            border: "none"
          }}
        >
          {translate("UPDATE_BTN")}
        </Button>
      </FooterButtonsModal>
    </Fragment>
  );
};

export default TimerModal;
