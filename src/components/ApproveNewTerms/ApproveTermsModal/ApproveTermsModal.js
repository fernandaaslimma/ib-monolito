import React, { Fragment } from "react";
import { translate } from "../../../utils/i18n";
import Checkbox from "../../common/Checkbox/Checkbox";
import Header from "../../common/Modal/Header/Header";
import {
  Description,
  Title,
  ButtonsWrapper,
  AgreedNewTerms,
  Wrapper,
  ApproveNewTermsWrapper
} from "./styles";
import Button from "../../common/Button";
import { lightGreen, lightRed, white } from "../../../styles/settings";
import { POPUPREBLOCK, POPUPREJECTION } from "../../../utils/constants";
function ApproveTermsModal({
  checked,
  isExiting,
  renderExitConfirmation,
  onClickClose,
  handleChangeCheckbox,
  acceptTerms,
  viewTerms,
  notification,
  termsApproved
}) {
  let fileUrl =
    notification &&
    notification.parameters &&
    notification.parameters.find(element => element.type === "url");
  return (
    <Fragment>
      <Header
        onClickClose={isExiting ? null : onClickClose}
        data-test="TermsSelectionTypeExit"
        removeCloseIcon={
          notification.displayMethod === POPUPREBLOCK || notification.displayMethod === POPUPREJECTION ? true : false
        }
      />
      {isExiting && renderExitConfirmation(notification.parameters)}
      {!isExiting && (
        <Wrapper>
          <ApproveNewTermsWrapper>
            <Title data-test="titleLabel">{notification.title}</Title>
            <Description data-test="descriptionLabel">
              {notification.description}
            </Description>
            {notification.displayMethod !== POPUPREBLOCK && notification.displayMethod !== POPUPREJECTION && (
              <AgreedNewTerms>
                <Checkbox
                  dataTest={"CheckboxNewTerms"}
                  label={translate("NEW_TERMS_CHECKBOX_LABEL")}
                  onChange={handleChangeCheckbox}
                  checked={checked}
                />
              </AgreedNewTerms>
            )}
            <ButtonsWrapper>
              <Button
                padding={0}
                width={162}
                isModalType={true}
                onClick={() => viewTerms(fileUrl.url)}
              >
                {translate("VIEW_TERMS")}
              </Button>
              <Button
                background={lightGreen}
                color={white}
                border={"none"}
                width={162}
                isModalType={true}
                noHoverBackground={true}
                disabled={
                  termsApproved
                    ? true
                    : notification.displayMethod === POPUPREBLOCK || notification.displayMethod === POPUPREJECTION
                      ? false
                      : !checked
                }
                onClick={() => acceptTerms(notification.parameters, true)}
              >
                {translate("ACCEPT_TERMS")}
              </Button>
              {notification.displayMethod === POPUPREJECTION && (
                <Button
                  background={lightRed}
                  color={white}
                  border={"none"}
                  width={162}
                  isModalType={true}
                  noHoverBackground={true}
                  disabled={
                    termsApproved
                      ? true
                      : notification.displayMethod === POPUPREJECTION
                        ? false
                        : !checked
                  }
                  onClick={() => acceptTerms(notification.parameters, false)}
                >
                  {translate("REJECT")}
                </Button>)}
            </ButtonsWrapper>
          </ApproveNewTermsWrapper>
        </Wrapper>
      )}
    </Fragment>
  );
}
export default ApproveTermsModal;
