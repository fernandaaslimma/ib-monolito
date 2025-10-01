import React, { Fragment } from "react";
import { Button, AlertMessage } from "react-bocombbm-components";
import Icon from "../../../common/Icon";
import DefaultContent from "../../../common/DefaultContent";
import DefaultShimmerLoading from "../../../common/DefaultShimmerLoading";
import { checkViewContextAndRedirect } from "../../../../utils/fetchHandler";
import history from "../../../../services/history";
import { scrollToTop } from "../../../../utils/dom";
import { ContainerWrapper } from "../../../InvestmentProducts/styles";
import { OpenBankingConsentContext } from "../Consent";
import InfoCard from "../../InfoCard";
import CardWithDetails from "../../../common/CardWithDetails";
import AnimatedBottonSheet from "../../../common/AnimatedBottomSheet";
import ShowMoreLess from "../../../common/ShowMoreLess";
import { translate } from "../../../../utils/i18n";
import { hardRedirect } from "../../../../utils/redirect";
import {
  BtnWrapper,
  StickyWrapper,
  Separator,
  StepVisibility
} from "../../Consent/styles";

import {
  ReceivingInstitutionInfo,
  ReceivingInstitutionName,
  WapperBankImg,
  CancelBottomSheetWrapper,
  InfoWrapper,
  MainMessage,
  Message,
  ButtonWrapper,
  DoubleButtonWrapper,
  ContentWrapper,
  ContentTitle,
  Content,
  Data,
  LinkDetails,
  LinkCitizen,
  Title,
  SubTitle,
  WarningMessage,
  WrapperCard,
  SimpleBold,
  CardInput,
  CardInputOption,
  CardInputDisplayName,
  CardInputMsg,
  CardInputTitle
} from "./styles";
import Checkbox from "../../../common/Checkbox";

function ConsentStep({ currentStep, stepForward, goToStep }) {
  const {
    props: {
      consentInfo,
      userInfo,
      doLogout,
      cancelConsent,
      showNavigationMenu,
      isConsentFlow,
      sharesList,
      specificOrganization
    },
    state: {
      selectBottonSheetForbidden,
      cancelBottomSheet,
      consentFromParam,
      consentNotPending,
      statusResource,
      loadingConsentStep,
      canApprove
    },
    changeState,
    isApplicant,
    corporationConsentStatus,
    checkStatusApplicant
  } = React.useContext(OpenBankingConsentContext);

  React.useEffect(() => {
    if (
      currentStep === 1 &&
      history &&
      history.location &&
      history.location.afterRedirectUrl &&
      history.location.afterRedirectUrl === "/"
    ) {
      doLogout().then(() => {
        checkViewContextAndRedirect();
      });
    } else if (currentStep === 1) {
      scrollToTop();
    }
  }, [currentStep]);

  React.useEffect(() => {
    if (
      consentInfo &&
      isConsentFlow &&
      !sharesList &&
      userInfo.tenants[0] === "Corporation" &&
      userInfo.document !== consentInfo.loggedUser.document.identification
    ) {
      changeState("selectBottonSheetForbidden", true);
    } else {
      if (consentInfo && consentInfo.consentId && consentNotPending) {
        changeState("loadingConsentStep", false);
      }
    }
  }, [currentStep, consentInfo, loadingConsentStep, consentNotPending]);

  React.useEffect(() => {
    let modificatedResources = [];
    consentInfo &&
      consentInfo.resourceGroups.map(item => {
        item.resources &&
          item.resources.map(resource => {
            if (item.resources.length === 1) {
              modificatedResources.push({
                resourceId: resource.resourceId,
                type: item.type,
                status: true
              });
            } else {
              modificatedResources.push({
                resourceId: resource.resourceId,
                type: item.type,
                status: false
              });
            }
          });
      });
    changeState("statusResource", modificatedResources);
  }, [consentInfo]);

  const refactorResourceGroups = () => {
    let resourceGroups = [];
    let creditDataPermisionsFirst = [];
    let creditDataPermisions = [];

    consentInfo.resourceGroups.map(item => {
      const aditionalInfoValue =
        item.additionalInfos.length > 0 &&
        JSON.parse(window.atob(item.additionalInfos[0].value));
      if (item.displayName === "Contas") {
        resourceGroups.unshift(item);
      } else if (
        aditionalInfoValue &&
        aditionalInfoValue.category === "OperaÃ§Ãµes de CrÃ©dito"
      ) {
        if (creditDataPermisions.length > 0) {
          item.dataPermissions.map((dataPermission, index) => {
            const SameDataPermission = creditDataPermisions.find(
              newDataPermission =>
                newDataPermission.displayName === dataPermission.displayName
            );
            if (!SameDataPermission) {
              if (index === 0) {
                creditDataPermisionsFirst = [
                  ...creditDataPermisionsFirst,
                  dataPermission
                ];
              } else {
                creditDataPermisions = [
                  ...creditDataPermisions,
                  dataPermission
                ];
              }
            }
          });
        } else {
          item.dataPermissions.map((dataPermission, index) => {
            if (index === 0) {
              creditDataPermisionsFirst = [
                ...creditDataPermisionsFirst,
                dataPermission
              ];
            } else {
              creditDataPermisions = [...creditDataPermisions, dataPermission];
            }
          });
        }
      } else {
        resourceGroups.push(item);
      }
    });
    const creditResourceGroup = {
      resourceGroupId: 1,
      dataPermissions: creditDataPermisionsFirst.concat(creditDataPermisions),
      displayName: "Operações de Crédito",
      type: "CREDIT",
      additionalInfos: [],
      resources: null
    };
    const finalResourceGroups =
      creditDataPermisions.length > 0
        ? [...resourceGroups, creditResourceGroup]
        : resourceGroups;

    return finalResourceGroups;
  };

  const changeStatusResource = (id, type) => {
    let modificatedResources = [];
    statusResource.map(item => {
      if (item.resourceId === id) {
        modificatedResources.push({
          ...item,
          status: !item.status
        });
        changeState("allStatusResource", false);
      } else {
        modificatedResources.push({
          ...item
        });
        changeState("allStatusResource", false);
      }
    });
    changeState("statusResource", modificatedResources);
    const allStatusChecked = modificatedResources
      .filter(item => {
        if (item.type === type) {
          return item;
        }
      })
      .every(item => item.status === true);
    if (allStatusChecked) {
      changeState("allStatusResource", false);
    }
  };

  const transIndex = id => {
    const index =
      statusResource &&
      statusResource.findIndex(item => item.resourceId === id);
    return index;
  };

  const checkIfChecked = (type, resources) => {
    if (!isApplicant()) {
      return true;
    } else if (!resources) {
      return true;
    } else if (resources.length === 1 || resources.length === 0) {
      return true;
    } else {
      const status =
        statusResource &&
        statusResource
          .filter(item => item.type === type)
          .some(item => item.status === true);
      return status;
    }
  };

  const confirmAction = () => {
    changeState("selectBottonSheetForbidden", false);
    hardRedirect(
      !(
        (consentInfo && consentInfo.status !== "PENDING") ||
        corporationConsentStatus()
      )
        ? localStorage.getItem("urlOpenBank")
        : "/home"
    );
  };

  const endConsentFlow = () => {
    changeState("selectBottonSheetForbidden", false);
    hardRedirect("/home");
  };

  const consentCancel = async () => {
    const { shareId } = consentInfo;
    changeState("cancelBottomSheet", false);
    await cancelConsent(shareId);
    if (isApplicant()) {
      setTimeout(() => {
        goToStep(3);
      }, 1000);
    } else {
      goToStep(5);
    }
  };

  const denyApprovalNotification = async () => {
    const { shareId } = consentInfo;
    changeState("cancelBottomSheet", false);
    showNavigationMenu(true);
    await cancelConsent(shareId);
    if (isApplicant()) {
      setTimeout(() => {
        goToStep(3);
      }, 1000);
    } else {
      goToStep(5);
    }
  };

  const openCitizenPortal = () => {
    window.open("https://openbankingbrasil.org.br/", "_blank");
  };

  const checkIsApplicantAndApprove = () => {
    if (isApplicant()) {
      return true;
    } else if (checkStatusApplicant()) {
      return true;
    } else {
      return false;
    }
  };

  const bottonSheetForbiddenFooter = (
    <BtnWrapper>
      <Button
        type="primary"
        spacing={{ top: "s", bottom: "m", right: "s", left: "s" }}
        onClick={() => {
          confirmAction();
        }}
      >
        {translate("OPEN_BANKING_CONSENT_UNDERSTAND_BUTTON")}
      </Button>
    </BtnWrapper>
  );

  const cancelBottomSheetFooter = (
    <DoubleButtonWrapper>
      <Button
        dataTest="cancelOpenBankingButton"
        onClick={() =>
          consentFromParam.length > 0
            ? denyApprovalNotification()
            : consentCancel()
        }
        type="negative"
        spacing={{ top: "s", bottom: "none" }}
      >
        {translate("OPEN_BANKING_YES_CANCEL_BTN")}
      </Button>
      <Button
        type="outline"
        onClick={() => changeState("cancelBottomSheet", false)}
        spacing={{ top: "s", bottom: "none" }}
      >
        {translate("OPEN_BANKING_BACK")}
      </Button>
    </DoubleButtonWrapper>
  );

  const endFlowConsent = (
    <ButtonWrapper>
      <Button
        dataTest="endConsentFlowOpenBankingButton"
        onClick={() => endConsentFlow()}
        spacing={{ top: "s", bottom: "none" }}
      >
        {"Entendi"}
      </Button>
    </ButtonWrapper>
  );

  const checkIfResourcesOrOneResource = () => {
    const result =
      consentInfo &&
      consentInfo.resourceGroups.map(resourceGroups => {
        if (resourceGroups.resources && resourceGroups.resources.length > 1) {
          return true;
        } else {
          return false;
        }
      });
    return result.some(map => map === true);
  };

  const getLengthCheckedAccounts = type => {
    const resourceStatus =
      statusResource &&
      statusResource.filter(item => item.type === type && item.status === true);

    return resourceStatus.length;
  };

  return loadingConsentStep ? (
    <React.Fragment>
      <DefaultShimmerLoading repeat={4} innerRepeat={2} />
      <AnimatedBottonSheet
        dataTest="ab-confirmation"
        isOpen={selectBottonSheetForbidden}
        head={{
          title: translate("OPEN_BANKING"),
          close: true
        }}
        footer={bottonSheetForbiddenFooter}
        velocity={0.3}
        fullHeight
        onClickInBack={() => confirmAction()}
      >
        <React.Fragment>
          <DefaultContent
            data-test="emptyStatements"
            Icon={() =>
              (consentInfo && consentInfo.status !== "PENDING") ||
              corporationConsentStatus() ? (
                <Icon
                  dataTest="icon-attention"
                  type="Attention"
                  color="#4A90E2"
                  width={100}
                  height={100}
                />
              ) : (
                <Icon
                  dataTest="icon-identifier"
                  type="Identifier"
                  width={100}
                  height={100}
                />
              )
            }
            primaryText={
              (consentInfo && consentInfo.status !== "PENDING") ||
              corporationConsentStatus()
                ? translate("OPEN_BANKING_CONSENT_WARNING_MSG_1")
                : translate("OPEN_BANKING_CONSENT_WARNING_MSG_2")
            }
          />
          {(consentInfo && consentInfo.status !== "PENDING") ||
          corporationConsentStatus() ? (
            <WrapperCard>
              <WarningMessage>
                {`${translate("OPEN_BANKING_CONSENT_ALERT_MSG_1")} `}
                {consentInfo && consentInfo.organisationName ? (
                  <SimpleBold>{consentInfo.organisationName}</SimpleBold>
                ) : (
                  translate("OPEN_BANKING_CONSENT_ALERT_TITLE_1")
                )}
              </WarningMessage>
            </WrapperCard>
          ) : (
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
                  <Title>
                    {translate("OPEN_BANKING_CONSENT_ALERT_TITLE_2")}
                  </Title>
                  <SubTitle>
                    {`\u25CF  ${translate("OPEN_BANKING_CONSENT_ALERT_MSG_3")}`}
                    <SimpleBold>{` ${translate(
                      "OPEN_BANKING_CONSENT_ALERT_MSG_BOLD"
                    )} `}</SimpleBold>
                    {translate("OPEN_BANKING_CONSENT_ALERT_MSG_4")}
                  </SubTitle>
                  <SubTitle>
                    {`\u25CF  ${translate("OPEN_BANKING_CONSENT_ALERT_MSG_2")}`}
                    <SimpleBold>{` ${translate(
                      "OPEN_BANKING_CONSENT_ALERT_MSG_BOLD"
                    )} `}</SimpleBold>
                  </SubTitle>
                </React.Fragment>
              </WrapperCard>
            </AlertMessage>
          )}
        </React.Fragment>
      </AnimatedBottonSheet>
      <AnimatedBottonSheet
        isOpen={!canApprove}
        head={{
          title: translate("OPEN_BANKING")
        }}
        dataTest="ab-openbanking"
        footer={endFlowConsent}
        fullHeight
        velocity={0.3}
        onClickInBack={() => changeState("canApprove", false)}
      >
        <CancelBottomSheetWrapper>
          <InfoWrapper>
            <Icon type="Attention" height={80} width={80} color="#2D4758" />
            <MainMessage>
              {translate("OPEN_BANKING_PROSPECT_BLOCK_TITLE")}
            </MainMessage>
            <Message botomSpace="58px" data-test="consentMessageStatus">
              {translate("OPEN_BANKING_PROSPECT_BLOCK_MSG1")}
            </Message>

            <Message>
              <SimpleBold>
                {translate("OPEN_BANKING_PROSPECT_BLOCK_MSG2_BOLD")}
              </SimpleBold>
              {translate("OPEN_BANKING_PROSPECT_BLOCK_MSG2")}
            </Message>
          </InfoWrapper>
        </CancelBottomSheetWrapper>
      </AnimatedBottonSheet>
    </React.Fragment>
  ) : (
    <ContainerWrapper>
      {currentStep === 1 && <StepVisibility id="ListStep" />}
      <InfoCard
        title={{
          tl: translate("OPEN_BANKING_CONFIRMATION_SHARING"),
          bigTitle: true
        }}
      >
        {translate("OPEN_BANKING_BEFORE_SHARING_CONFIRM")}
      </InfoCard>
      {isApplicant() && checkIfResourcesOrOneResource() && (
        <AlertMessage
          data-test="alert-icon-attention"
          icon="Attention"
          type="neutral"
          spacing={{
            top: "n",
            bottom: "s",
            right: "s",
            left: "s"
          }}
        >
          {translate("OPEN_BANKING_SELECT_ORIGIN_MESSAGE")}
        </AlertMessage>
      )}
      <InfoCard
        title={{ tl: translate("OPEN_BANKING_DESTINATION_INSTITUTION") }}
      >
        <ReceivingInstitutionInfo>
          {specificOrganization ? (
            <WapperBankImg
              src={specificOrganization[0].CustomerFriendlyLogoUri}
            />
          ) : (
            <Icon type="Bank" width={36} height={36} />
          )}
          <ReceivingInstitutionName>
            {consentInfo && consentInfo.organisationName}
          </ReceivingInstitutionName>
        </ReceivingInstitutionInfo>
      </InfoCard>

      {consentInfo &&
        refactorResourceGroups().map((item, index) => {
          const { dataPermissions, resources } = item;
          return (
            item.type !== "RESOURCE" && (
              <InfoCard
                dataTest={`card_${index}`}
                key={index}
                title={{
                  tl: item.displayName,
                  subTitle:
                    item.resources && item.type === "ACCOUNT" ? true : false
                }}
              >
                {resources && resources.length > 0 && (
                  <Fragment>
                    <CardInputTitle>{`${translate(
                      "OPEN_FINANCE_SELECTED_ACCOUNTS_TITLE"
                    )} (${getLengthCheckedAccounts(
                      item.type
                    )})`}</CardInputTitle>
                    <CardInput
                      noSelectAccount={
                        getLengthCheckedAccounts(item.type) === 0 ? true : false
                      }
                    >
                      {resources.map((resource, index) => {
                        return (
                          <CardInputOption key={index}>
                            {checkIsApplicantAndApprove() && (
                              <Checkbox
                                dataTest={`checkboxOption_${resource.displayName}`}
                                disabled={
                                  isApplicant()
                                    ? resources.length === 1
                                      ? true
                                      : false
                                    : true
                                }
                                type="common"
                                margin="0"
                                checked={
                                  isApplicant()
                                    ? statusResource &&
                                      statusResource[
                                        transIndex(resource.resourceId)
                                      ].status
                                    : true
                                }
                                name="switchBox"
                                onChange={() =>
                                  changeStatusResource(
                                    resource.resourceId,
                                    item.type
                                  )
                                }
                              />
                            )}
                            <CardInputDisplayName>
                              {resource.displayName}
                            </CardInputDisplayName>
                          </CardInputOption>
                        );
                      })}
                    </CardInput>
                    <CardInputMsg
                      noSelectAccount={
                        getLengthCheckedAccounts(item.type) === 0 ? true : false
                      }
                    >
                      {resources.length === 1 &&
                        translate("OPEN_FINANCE_SELECT_ACCOUNT_MSG")}
                      {getLengthCheckedAccounts(item.type) === 0 &&
                        translate("OPEN_FINANCE_SELECT_ACCOUNT_MSG_2")}
                    </CardInputMsg>
                  </Fragment>
                )}
                {checkIfChecked(item.type, resources) && dataPermissions && (
                  <ShowMoreLess key={index} dataTest="DataPermissionsCards">
                    {dataPermissions.map((item, index) => {
                      return (
                        <React.Fragment key={index}>
                          <CardWithDetails
                            dataTest={`subCard_${index}`}
                            title={item.displayName}
                          >
                            <ContentWrapper>
                              <ContentTitle>
                                {translate("OPEN_BANKING_SELECTED_SHARED_DATA")}
                              </ContentTitle>
                              <Content>
                                <Data>{item.detail}</Data>
                              </Content>
                            </ContentWrapper>
                          </CardWithDetails>
                        </React.Fragment>
                      );
                    })}
                  </ShowMoreLess>
                )}
              </InfoCard>
            )
          );
        })}
      <LinkDetails data-test="link-details" onClick={() => openCitizenPortal()}>
        {translate("OPEN_BANKING_CITIZEN_PORTAL_LINK_MSG")}
        <LinkCitizen>
          {translate("OPEN_BANKING_CITIZEN_PORTAL_LINK_MSG2")}
        </LinkCitizen>
      </LinkDetails>
      <StickyWrapper>
        <Separator />
        <BtnWrapper>
          <Button
            dataTest="cancelButton"
            onClick={() => changeState("cancelBottomSheet", true)}
            type="outline"
            spacing={{ top: "s", bottom: "s", right: "xxs", left: "s" }}
          >
            {translate("OPEN_BANKING_CANCEL")}
          </Button>
          <Button
            disabled={false}
            dataTest="continueButton"
            onClick={() => stepForward()}
            spacing={{ top: "s", bottom: "s", right: "s", left: "xxs" }}
          >
            {translate("OPEN_BANKING_CONTINUE")}
          </Button>
        </BtnWrapper>
      </StickyWrapper>

      <AnimatedBottonSheet
        isOpen={cancelBottomSheet}
        head={{
          title: translate("OPEN_BANKING")
        }}
        footer={cancelBottomSheetFooter}
        fullHeight
        velocity={0.3}
        onClickInBack={() => changeState("cancelBottomSheet", false)}
      >
        <CancelBottomSheetWrapper>
          <InfoWrapper>
            <Icon type="Attention" height={80} width={80} color="#D2444A" />
            <MainMessage>
              {translate("OPEN_BANKING_WANT_TO_CANCEL")}
            </MainMessage>
            <Message>
              {consentInfo && consentInfo.organisationName
                ? `${translate("OPEN_BANKING_WANT_TO_CANCEL_MSG")} ${
                    consentInfo.organisationName
                  }`
                : `${translate("OPEN_BANKING_WANT_TO_CANCEL_MSG")} ${translate(
                    "OPEN_BANKING_GENERAL_INSTITUTION"
                  )}`}
            </Message>
          </InfoWrapper>
        </CancelBottomSheetWrapper>
      </AnimatedBottonSheet>
    </ContainerWrapper>
  );
}

export default ConsentStep;
