import React from "react";
import { Button } from "react-bocombbm-components";
import ClickWrapper from "../../../utils/clickWrapper";
import Icon from "../../common/Icon";

import {
  Wrapper,
  WrapperTitle,
  Title,
  SubTitle,
  WrapperSelectionType,
  SelectionType,
  SelectionTypeText
} from "./styles";
import { translate } from "../../../utils/i18n";
import {
  MFABOARDING_PARAM_APP,
  MFABOARDING_PARAM_AUTH
} from "../../../utils/constants";

function TypeSelection({ changeCurrentScreen, notification }) {
  return (
    <Wrapper>
      <WrapperTitle data-test="MfaSelectionTypeTitle">
        <Title fontSize={24} marginBottom={12}>
          {translate("TYPE_SELECTION_TITLE")}
        </Title>
        <SubTitle fontSize={18}>
          {translate("TYPE_SELECTION_SUBTITLE")}
        </SubTitle>
      </WrapperTitle>

      <WrapperSelectionType>
        {notification.parameters.map((item, index) => (
          <ClickWrapper key={index}>
            <SelectionType
              hasMarginBottom={
                notification.parameters.lenght === Number(index) + 1
                  ? false
                  : true
              }
              onClick={() => {
                switch (item.type) {
                  case MFABOARDING_PARAM_APP:
                    changeCurrentScreen(3);
                    return;
                  case MFABOARDING_PARAM_AUTH:
                    changeCurrentScreen(5);
                    return;
                }
              }}
              data-test={`MfaSelectionTypeBtn_${item.id}`}
            >
              {item.type === MFABOARDING_PARAM_APP && (
                <Icon type="MfaSmartphone" />
              )}
              {item.type === MFABOARDING_PARAM_AUTH && (
                <Icon type="MfaAuthenticator" />
              )}

              <SelectionTypeText>
                <Title fontSize={16} marginBottom={8}>
                  {translate(`TYPE_SELECTION_BUTTON_${item.id}_TITLE`)}
                </Title>
                <SubTitle fontSize={13}>
                  {translate(`TYPE_SELECTION_BUTTON_${item.id}_SUBTITLE`)}
                </SubTitle>
              </SelectionTypeText>
              <Icon type="MfaChevronRight" />
            </SelectionType>
          </ClickWrapper>
        ))}
      </WrapperSelectionType>
      <ClickWrapper>
        <Button
          spacing={{ bottom: "xxs", top: "none" }}
          type="text"
          onClick={() => changeCurrentScreen(2)}
          dataTest="RegisterLater"
        >
          {translate("REGISTER_LATER")}
        </Button>
      </ClickWrapper>
    </Wrapper>
  );
}
export default TypeSelection;
