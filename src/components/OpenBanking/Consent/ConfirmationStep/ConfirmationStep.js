import React, { Fragment } from "react";
import { Button, Icon, AlertMessage } from "react-bocombbm-components";
import IconLocal from "../../../common/Icon";
import { conclusive200, neutral200 } from "../../../../styles/settings";
import RadioButtonRounded from "../../../common/RadioButtonRounded";
import AnimatedBottonSheet from "../../../common/AnimatedBottomSheet";
import ResumeCard from "../../../common/ResumeCard";
import DefaultShimmerLoading from "../../../common/DefaultShimmerLoading";
import DefaultContent from "../../../common/DefaultContent";
import CardWithDetails from "../../../common/CardWithDetails";
import { OpenBankingConsentContext } from "../Consent";
import { BtnWrapper, StickyWrapper, Separator } from "../styles";
import { hardRedirect } from "../../../../utils/redirect";
import { translate } from "../../../../utils/i18n";
import {
  getConsentInitiator,
  getConsentEntity
} from "../../../../utils/openBankingUtils";
import InfoCard from "../../InfoCard";
import {
  ConclusionStepWrapper,
  IconWrapper,
  SucessMessage,
  ContainerWrapper,
  ContentWrapper,
  ContentTitle,
  Content,
  Data,
  AccountBalance,
  Value,
  AccountText,
  ResourceInfo,
  SaveAccount,
  SaveAccountInfo,
  Text,
  RadioButtonsWrapper,
  ResourceWrapper,
  BottomMessage,
  Wrapper,
  WrapperCard,
  SubTitleDiv,
  MessageBold,
  TitleSub,
  SubMessage,
  CancelMessage
} from "./styles";
function ConfirmationStep({ currentStep }) {
  const {
    state: {
      selectAccountOriginBottomSheet,
      selectBottonSheetForbidden,
      loadingConsentStep
    },
    props: {
      userInfo,
      urlConfirmation,
      confirmConsentResponse,
      isConsentFlowCancel
    },
    corporationConsentStatus,
    changeState,
    isApplicant
  } = React.useContext(OpenBankingConsentContext);
  React.useEffect(() => {
    if (
      confirmConsentResponse &&
      userInfo.tenants[0] === "Corporation" &&
      userInfo.document !==
        confirmConsentResponse.loggedUser.document.identification
    ) {
      changeState("selectBottonSheetForbidden", true);
    } else {
      if (
        (confirmConsentResponse && confirmConsentResponse.consentId) ||
        isConsentFlowCancel
      ) {
        changeState("loadingConsentStep", false);
      }
    }
  }, [currentStep, confirmConsentResponse]);
  // const expirationDiff = date => {
  //   const diff = moment.duration(moment(date).diff(moment(new Date())));
  //   const meses = diff.asMonths();
  //   const expirationTime = `${meses.toFixed(0)} meses | ${moment(date).format(
  //     getDateFieldPlaceholderByLocale()
  //   )}`;
  //   return expirationTime;
  // };
  const refactorResourceGroups = () => {
    let resourceGroups = [];
    confirmConsentResponse.resourceGroups.map(item => {
      if (item.displayName === "Contas") {
        resourceGroups.unshift(item);
      } else {
        resourceGroups.push(item);
      }
    });
    return resourceGroups;
  };
  const verifyCheckedOrigins = resources => {
    if (
      resources.length > 1 &&
      (confirmConsentResponse.status === "ACTIVE" ||
        (corporationConsentStatus(true) &&
          corporationConsentStatus(true).status === "AUTHORISED"))
    ) {
      return (
        <RadioButtonsWrapper>
          <RadioButtonRounded
            radioName="periodRadio"
            buttonValue={`${resources.length} origens de dados selecionadas`}
            style={{ background: "none", border: "2px solid #3976CF" }}
          />
        </RadioButtonsWrapper>
      );
    } else {
      return <AccountText>{resources[0].displayName}</AccountText>;
    }
  };
  const selectionBottomSheet = (key, name, resources) => {
    return (
      <AnimatedBottonSheet
        isOpen={selectAccountOriginBottomSheet === key}
        head={{
          title: `${name}`,
          close: true
        }}
        velocity={0.3}
        onClickInBack={() => {
          changeState("selectAccountOriginBottomSheet", false);
        }}
      >
        <ResourceWrapper>
          <ResourceInfo>
            {confirmConsentResponse.status === "ACTIVE" ||
            (corporationConsentStatus(true) &&
              corporationConsentStatus(true).status === "AUTHORISED")
              ? "Origens de dados selecionadas pelo requerente"
              : "Origens de dados do consentimento"}
          </ResourceInfo>
          {resources &&
            resources.map((resource, index) => {
              return (
                <SaveAccount key={index} checked>
                  <SaveAccountInfo>
                    <Text>{resource.displayName}</Text>
                  </SaveAccountInfo>
                </SaveAccount>
              );
            })}
        </ResourceWrapper>
      </AnimatedBottonSheet>
    );
  };
  return loadingConsentStep ? (
    <React.Fragment>
      <DefaultShimmerLoading repeat={4} innerRepeat={2} />
      <AnimatedBottonSheet
        isOpen={selectBottonSheetForbidden}
        head={{
          title: "OpenBanking",
          close: false
        }}
        velocity={0.3}
      >
        <React.Fragment>
          <Wrapper>
            <DefaultContent
              data-test="emptyStatements"
              Icon={() => <Icon type="Identifier" />}
              primaryText={translate("OPEN_BANKING_CONSENT_WARNING_MSG_2")}
            />
            <AlertMessage
              type="neutral"
              spacing={{
                top: "n",
                bottom: "n",
                right: "s",
                left: "s"
              }}
            >
              <WrapperCard>
                <React.Fragment>
                  <TitleSub>
                    {translate("OPEN_BANKING_CONSENT_ALERT_TITLE_2")}
                  </TitleSub>
                  <SubTitleDiv>
                    {translate("OPEN_BANKING_CONSENT_ALERT_MSG_2")}
                    <MessageBold>
                      {translate("OPEN_BANKING_CONSENT_ALERT_MSG_BOLD")}
                    </MessageBold>
                  </SubTitleDiv>
                </React.Fragment>
              </WrapperCard>
            </AlertMessage>
          </Wrapper>
          <StickyWrapper>
            <BtnWrapper>
              <Button
                type="primary"
                spacing={{ top: "xs", bottom: "s", right: "s", left: "s" }}
                onClick={() => {
                  changeState("selectBottonSheetForbidden", false);
                  hardRedirect(isApplicant() ? urlConfirmation : "/");
                }}
              >
                {translate("OPEN_BANKING_CONSENT_UNDERSTAND_BUTTON")}
              </Button>
            </BtnWrapper>
          </StickyWrapper>
        </React.Fragment>
      </AnimatedBottonSheet>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <ContainerWrapper>
        <InfoCard
          title={{
            tl: translate("OPEN_BANKING_CONFIRM_ASPPROVE"),
            bigTitle: true
          }}
          bigTitleMargin="0 0 0 0"
        />
        <ConclusionStepWrapper>
          <IconWrapper>
            <Icon
              spacing={{
                top: "none",
                bottom: "none",
                left: "none",
                right: "none"
              }}
              dataTest="successIcon"
              height="63.33"
              width="63.33"
              type="RoundedCheck"
              color={isConsentFlowCancel ? neutral200 : conclusive200}
            />
          </IconWrapper>
          {!isConsentFlowCancel && (
            <SucessMessage data-test="consentMessageStatus">
              {translate("OPEN_BANKING_CONFIRM_ASPPROVE2")}
            </SucessMessage>
          )}
          {isConsentFlowCancel && (
            <CancelMessage data-test="consentMessageStatus">
              {translate("OPEN_BANKING_CONFIRM_CANCEL2")}
            </CancelMessage>
          )}
          {isConsentFlowCancel && (
            <SubMessage>
              {translate("OPEN_BANKING_RETURN_SUB_MESSAGE")}
            </SubMessage>
          )}
        </ConclusionStepWrapper>
        {!isConsentFlowCancel && (
          <ResumeCard
            name={
              confirmConsentResponse &&
              getConsentInitiator(confirmConsentResponse)
            }
            document={
              confirmConsentResponse &&
              getConsentEntity(confirmConsentResponse, userInfo)
            }
            destiny={
              confirmConsentResponse &&
              confirmConsentResponse.authorisationServer.customerFriendlyName
            }
            purpose={
              confirmConsentResponse &&
              confirmConsentResponse.finality.displayName
            }
            expiration={
              confirmConsentResponse.expirationDateTime ||
              confirmConsentResponse.deadLines.expirationDateTime
            }
            dataTest="NewConsentResumeCard"
          />
        )}
        {confirmConsentResponse &&
          !isConsentFlowCancel &&
          refactorResourceGroups().map((item, index) => {
            const { dataPermissions, resources } = item;
            return (
              <InfoCard
                key={index}
                title={{
                  tl: item.displayName,
                  subTitle: item.resources ? true : false,
                  sl: translate("OPEN_BANKING_DATA_SOURCE")
                }}
              >
                {resources && resources.length >= 1 && (
                  <AccountBalance
                    onClick={() =>
                      resources.length > 1 &&
                      changeState("selectAccountOriginBottomSheet", index)
                    }
                    cursor={resources.length > 1}
                  >
                    {verifyCheckedOrigins(resources)}
                    <Value>
                      {resources.length > 1 && (
                        <IconLocal
                          spacing={{
                            bottom: "none",
                            left: "s",
                            right: "none",
                            top: "none"
                          }}
                          type="Arrow"
                          color={neutral200}
                          height="18"
                          width="18"
                        />
                      )}
                    </Value>
                  </AccountBalance>
                )}
                {dataPermissions &&
                  dataPermissions.map((item, index) => {
                    return (
                      <Fragment key={index}>
                        <CardWithDetails title={item.displayName}>
                          <ContentWrapper>
                            <ContentTitle>
                              {translate("OPEN_BANKING_SELECTED_SHARED_DATA")}
                            </ContentTitle>
                            <Content>
                              <Data>{item.detail}</Data>
                            </Content>
                          </ContentWrapper>
                        </CardWithDetails>
                      </Fragment>
                    );
                  })}
                {selectionBottomSheet(index, item.displayName, resources)}
              </InfoCard>
            );
          })}
        {!isConsentFlowCancel && (
          <BottomMessage>
            {translate("OPEN_BANKING_ACCESS_CONSENT")}
          </BottomMessage>
        )}
        {!isConsentFlowCancel && (
          <BtnWrapper>
            <Button
              type="outline"
              dataTest="transferBackButton"
              onClick={() =>
                window.location.assign("/open-banking/new-consent")
              }
              spacing={{ top: "n", bottom: "l", right: "s", left: "s" }}
            >
              {translate("OPEN_BANKING_NEW_CONSENT")}
            </Button>
          </BtnWrapper>
        )}
        <StickyWrapper>
          <Separator />
          <BtnWrapper>
            <Button
              type="primary"
              dataTest="transferBackButton"
              onClick={() => window.location.assign("/home")}
              spacing={{ top: "s", bottom: "s", right: "s", left: "xxs" }}
            >
              {translate("OPEN_BANKING_CONSENT_UNDERSTAND_BUTTON")}
            </Button>
          </BtnWrapper>
        </StickyWrapper>
      </ContainerWrapper>
    </React.Fragment>
  );
}
export default ConfirmationStep;
