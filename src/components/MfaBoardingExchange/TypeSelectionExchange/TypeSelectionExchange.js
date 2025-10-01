import React from "react";
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
} from "./styles.js";
import { translate } from "../../../utils/i18n";
import { MFABOARDING_PARAM_AUTH } from "../../../utils/constants";

function TypeSelectionExchange({ changeCurrentScreen, notification }) {
  return (
    <Wrapper>
      <WrapperTitle data-test="MfaExchangeSelectionTypeTitle">
        <Title fontSize={22} marginBottom={12}>
          {translate("TYPE_SELECTION_TITLE_EX")}
        </Title>
        <SubTitle fontSize={18}>
          {translate("TYPE_SELECTION_SUBTITLE_EX")}
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
                changeCurrentScreen(2);
              }}
              data-test={`MfaExchangeSelectionTypeBtn_${item.id}`}
            >
              {item.type === MFABOARDING_PARAM_AUTH && (
                <Icon type="MfaAuthenticator" />
              )}

              <SelectionTypeText>
                <Title fontSize={16} marginBottom={8}>
                  {translate(`TYPE_SELECTION_BUTTON_${item.id}_TITLE`)}
                </Title>
                <SubTitle fontSize={14}>
                  {translate("TYPE_SELECTION_BUTTON_SUBTITLE_EX")}
                </SubTitle>
              </SelectionTypeText>
              <Icon type="MfaChevronRight" />
            </SelectionType>
          </ClickWrapper>
        ))}
      </WrapperSelectionType>
    </Wrapper>
  );
}
export default TypeSelectionExchange;
