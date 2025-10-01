import React, { Fragment } from "react";

import { Button, Icon } from "react-bocombbm-components";
import ClickWrapper from "../../../utils/clickWrapper/clickWrapper";
// import { translate } from "../../../utils/i18n";
import ExitConfirmation from "../../common/ExitConfirmation";
import Header from "../../common/Modal/Header/Header";
import {
  Description,
  Title,
  ButtonsWrapper,
  Wrapper,
  IconWrapper,
  ApproveNewTermsWrapper
} from "./styles";

function NotificationModal({
  isExiting,
  onClickClose,
  notification,
  navigatedTo,
  changeState,
  handleClose
}) {
  let buttonLabel =
    notification &&
    notification.parameters &&
    notification.parameters.find(element => element.type === "buttonLabel");

  let redirectToUrl =
    notification &&
    notification.parameters &&
    notification.parameters.find(element => element.type === "url");

  return (
    <Fragment>
      <Header
        onClickClose={isExiting ? null : onClickClose}
        data-test="TermsSelectionTypeExit"
        removeCloseIcon={
          notification.displayMethod === "PopUpBlocking" ? true : false
        }
      />
      {isExiting ? (
        <Wrapper paddingLeft={64} paddingRight={64}>
          <ExitConfirmation
            onClickExit={() => handleClose()}
            onClickCancel={() => changeState({ isExiting: false })}
            message="Tem certeza que deseja fechar?"
            padding={90}
          />
        </Wrapper>
      ) : (
        <Wrapper>
          <ApproveNewTermsWrapper>
            <IconWrapper>
              <Icon type="DocumentAlert" />
            </IconWrapper>
            <Title>{notification.title}</Title>
            <Description>{notification.description}</Description>
            <ButtonsWrapper>
              <ClickWrapper>
                <Button
                  type="conclusive"
                  onClick={() => navigatedTo(redirectToUrl.value)}
                >
                  {buttonLabel.value}
                </Button>
              </ClickWrapper>
            </ButtonsWrapper>
          </ApproveNewTermsWrapper>
        </Wrapper>
      )}
    </Fragment>
  );
}
export default NotificationModal;
