import React, { Fragment } from "react";
import { func } from "prop-types";
import { Title, Message, Wrapper } from "./styles";

import { translate } from "../../../utils/i18n";
import { REGISTRATION_DATA_NOTIFICATION_TYPE } from "../../../utils/constants";
import { redirect } from "../../../utils/redirect";

import Header from "../../common/Modal/Header";
import { Icon, Button } from "react-bocombbm-components";

export function finish(closeModal, setNotificationStatus) {
  setNotificationStatus(REGISTRATION_DATA_NOTIFICATION_TYPE);
  closeModal();
  redirect("/home");
}

function RegistrationDataFormResult({ closeModal, setNotificationStatus }) {
  return (
    <Fragment>
      <Header onClickClose={() => finish(closeModal, setNotificationStatus)} />
      <Wrapper>
        <Icon
          data-test="ImgDocumentWaiting"
          type="DocumentChecked"
          width="192"
          height="193"
        />
        <Title>{translate("ATUCAD_DATA_SUCCESSFULLY_SENT")}</Title>
        <Message>{translate("ATUCAD_DATA_SUCCESSFULLY_SENT_MESSAGE")}</Message>
        <Button
          dataTest="registration-data-form-close-modal"
          type="conclusive"
          spacing={{ left: "none", top: "l", right: "none", bottom: "m" }}
          onClick={() => finish(closeModal, setNotificationStatus)}
        >
          {translate("ATUCAD_BACK_TO_NAVIGATION")}
        </Button>
      </Wrapper>
    </Fragment>
  );
}

RegistrationDataFormResult.propTypes = {
  closeModal: func.isRequired,
  setNotificationStatus: func.isRequired
};

export default RegistrationDataFormResult;
