import React, { Fragment, useContext } from "react";
import { Button } from "react-bocombbm-components";
import Icons from "../../../common/Icon";
import Tag from "../../../common/Tag";
import { scrollToTop } from "../../../../utils/dom";
import AnimatedBottonSheet from "../../../common/AnimatedBottomSheet";
import ResumeCard from "../../../common/ResumeCard";
import {
  formatDate,
  getConsentInitiator,
  getConsentEntity
} from "../../../../utils/openBankingUtils";

import { translate } from "../../../../utils/i18n";
import {
  Separator,
  StepVisibility
} from "../../../InvestmentProducts/Funds/styles";
import { ContainerWrapper } from "../../../InvestmentProducts/styles";
import { OpenBankingSharesContext } from "../Shares";
import InfoCard from "../../InfoCard";
import {
  BtnWrapper,
  StickyWrapper,
  InstitutionInfo,
  InstitutionName,
  ShareDetails,
  SharedDate,
  WrapperTag,
  EndSharringSheetWrapper,
  InfoWrapper,
  MainMessage,
  Message,
  ButtonWrapper,
  MessageBold,
  ChangeSharringSheetWrapper,
  ChangeSharringButtonWrapper,
  Bold
} from "./styles";
import ActionCard from "../../../common/ActionCard";
import { redirect } from "../../../../utils/redirect";

function DetailsSetep({ currentStep, stepForward, stepBack, goToStep }) {
  const {
    state: {
      selectedBank,
      endSharingBottomSheet,
      changeSharingBottomSheet,
      renewSharingBottomSheet,
      selectedTab
    },
    props: {
      setIsApproveConsent,
      setConsentId,
      emptyRedirectUri,
      userInfo,
      rejectConsentTransmitted,
      rejectConsentReceived
    },
    tagConf,
    createShare,
    changeState,
    startRenewConsent,
    populateSelectedConsentResources
  } = useContext(OpenBankingSharesContext);

  const [selectedObjective] = React.useState({
    item: translate("OPEN_BANKING_NEW_SHARE_INFO"),
    index: 0
  });

  React.useEffect(() => {
    scrollToTop();
  }, []);

  React.useEffect(() => {
    scrollToTop();
    if (selectedBank) {
      populateSelectedConsentResources();
    }
  }, [selectedBank]);

  const needApprovement = () => {
    if (selectedTab === 0 || selectedBank.status !== "PENDING") return false;
    if (selectedBank && selectedBank.approvers.length > 1) {
      const { document } = userInfo;
      if (userInfo.tenants[0] === "Corporation") {
        const loggedUserNeedToApprove = selectedBank.approvers.some(item => {
          const documentApprover = item.approverId.substring(
            item.approverId.indexOf("@") + 1
          );
          const documentId = documentApprover.substring(
            documentApprover.indexOf("@") + 1
          );

          if (
            item.status === "AWAITING_AUTHORISATION" &&
            documentId === document
          ) {
            return true;
          } else {
            return false;
          }
        });
        return loggedUserNeedToApprove;
      } else {
        const loggedUserNeedToApprove = selectedBank.approvers.some(item => {
          if (
            item.status === "AWAITING_AUTHORISATION" &&
            item.approverId === document
          ) {
            return true;
          } else {
            return false;
          }
        });
        return loggedUserNeedToApprove;
      }
    } else {
      return false;
    }
  };

  const approvePendingConsent = async () => {
    await Promise.all([
      emptyRedirectUri(),
      setIsApproveConsent(true, true),
      setConsentId(selectedBank.consentId)
    ]);
    redirect("/open-banking/consent");
  };

  const rejectShareTransmitted = async () => {
    await rejectConsentTransmitted(selectedBank.shareId);
    changeState("endSharingBottomSheet", false);
    goToStep(4);
  };

  const rejectShareReceived = async () => {
    await rejectConsentReceived(selectedBank.shareId);
    changeState("endSharingBottomSheet", false);
    goToStep(4);
  };

  const startChangeShare = () => {
    changeState("changeSharingBottomSheet", false);
    changeState("selectShareOld", selectedBank);
    createShare(
      selectedBank.authorisationServer.authorisationServerId,
      selectedBank.authorisationServer.organisationId,
      selectedBank.authorisationServer.customerFriendlyLogoUri,
      selectedBank.authorisationServer.customerFriendlyName,
      selectedObjective.item,
      selectedObjective.index
    );
    goToStep(5);
  };

  const startRenewShare = async () => {
    changeState("renewSharingBottomSheet", false);
    startRenewConsent();
    await createShare(
      selectedBank.authorisationServer.authorisationServerId,
      selectedBank.authorisationServer.organisationId,
      selectedBank.authorisationServer.customerFriendlyLogoUri,
      selectedBank.authorisationServer.customerFriendlyName,
      selectedObjective.item,
      selectedObjective.index
    );
    goToStep(6);
  };

  const translateAndReplaceInstitution = (basicMessage, selectedBank) => {

    if (typeof basicMessage === 'undefined') {
      console.error('basicMessage is undefined');
      return ''; // Return an empty string or a default message as appropriate
    }

    const bankName = selectedBank.organisationName || selectedBank.authorisationServer.customerFriendlyName;
                   
    return basicMessage.includes('<<<institution>>>')? basicMessage.replace(/<<<institution>>>/g, bankName) : `${basicMessage} ${bankName}`; 

  };

  const hasUpdateConsent = userInfo.roles.includes("UpdateConsent");

  return (
    currentStep === 2 && (
      <ContainerWrapper>
        {currentStep === 2 && <StepVisibility id="ResumeStep" />}
        {selectedBank && (
          <Fragment>
            <InfoCard>
              <Fragment>
                <WrapperTag>
                  <Tag
                    title={tagConf[selectedBank.status.toLowerCase()][2]}
                    color={tagConf[selectedBank.status.toLowerCase()][0]}
                    titleColor={tagConf[selectedBank.status.toLowerCase()][1]}
                  />
                </WrapperTag>
                <InstitutionInfo>
                  <Icons type="Bank" width={36} height={36} />
                  <ShareDetails>
                    <InstitutionName>
                      {selectedBank.organisationName ||
                        selectedBank.authorisationServer.customerFriendlyName}
                    </InstitutionName>
                    <SharedDate>
                      {selectedBank &&
                        formatDate(selectedBank.lastStatusUpdate)}
                    </SharedDate>
                  </ShareDetails>
                </InstitutionInfo>
              </Fragment>
            </InfoCard>
            {selectedBank && (
              <ResumeCard
                name={selectedBank && getConsentInitiator(selectedBank)}
                document={
                  selectedBank && getConsentEntity(selectedBank, userInfo)
                }
                destiny={
                  selectedBank.organisationName ||
                  selectedBank.authorisationServer.customerFriendlyName
                }
                purpose={
                  selectedBank.finality && selectedBank.finality.displayName
                }
                creationDate={
                  selectedBank && formatDate(selectedBank.createDateTime)
                }
                expiration={selectedBank && selectedBank.expirationDateTime}
                dataTest="SharesResumeCard"
              />
            )}
            <InfoCard
              title={{ tl: translate("OPEN_BANKING_AVAILABLE_ACTIONS") }}
            >
              <Fragment>
                <ActionCard
                  title={translate("OPEN_BANKING_VIEW_SHARED")}
                  text={translateAndReplaceInstitution(translate("OPEN_BANKING_VIEW_SHARED_MSG"), selectedBank)}
                  actionClick={stepForward}
                  dataTest="list_consent"
                />
                {selectedBank.status === "ACTIVE" && (
                  <ActionCard
                    title={translate("OPEN_BANKING_END_SHARING")}
                    text={`${translate(
                      "OPEN_BANKING_END_SHARING_MSG"
                    )} ${selectedBank.organisationName ||
                      selectedBank.authorisationServer.customerFriendlyName}`}
                    actionClick={() =>
                      changeState("endSharingBottomSheet", true)
                    }
                    dataTest="card_end_sharing"
                  />
                )}
                {needApprovement() ? (
                  <ActionCard
                    title={translate("OPEN_BANKING_APPROVE_CONSENT")}
                    text={translate("OPEN_BANKING_APPROVE_CONSENT")}
                    actionClick={approvePendingConsent}
                    dataTest="approve_pending_consent"
                  />
                ) : null}
                {hasUpdateConsent &&
                  selectedTab === 0 &&
                  selectedBank.status === "ACTIVE" && (
                    <ActionCard
                      title={translate("OPEN_BANKING_CHANGE_SHARED")}
                      text={translate("OPEN_BANKING_CHANGE_SHARED_MSG")}
                      actionClick={() =>
                        changeState("changeSharingBottomSheet", true)
                      }
                      dataTest="change_sharing"
                    />
                  )}
                {selectedTab === 0 &&
                  (selectedBank.status === "AWAITING_AUTHORISATION" ||
                    selectedBank.status === "ACTIVE") && (
                    <ActionCard
                      title={translate("OPEN_BANKING_RENEW_SHARED")}
                      text={translate("OPEN_BANKING_RENEW_SHARED_MSG")}
                      actionClick={() =>
                        changeState("renewSharingBottomSheet", true)
                      }
                      dataTest="renew_sharing"
                    />
                  )}
              </Fragment>
            </InfoCard>
          </Fragment>
        )}
        <StickyWrapper>
          <Separator />
          <BtnWrapper>
            <Button
              onClick={() => {
                stepBack();
              }}
              type="outline"
              spacing={{ top: "s", bottom: "s", right: "xxs", left: "s" }}
            >
              {translate("OPEN_BANKING_BACK")}
            </Button>
          </BtnWrapper>
        </StickyWrapper>

        <AnimatedBottonSheet
          isOpen={endSharingBottomSheet}
          head={{
            title: translate("OPEN_BANKING_END_SHARING"),
            close: true
          }}
          fullHeight
          velocity={0.3}
          onClickInBack={() => {
            stepBack();
            changeState("endSharingBottomSheet", false);
          }}
        >
          <EndSharringSheetWrapper>
            <Fragment>
              <InfoWrapper>
                <Icons
                  type="Attention"
                  height={63.33}
                  width={63.33}
                  color="#D2444A"
                />
                <MainMessage>
                  {translate("OPEN_BANKING_END_SHARING_MODAL")}
                </MainMessage>
                <Message>
                  {translate("OPEN_BANKING_END_SHARING_MODAL_MSG")}
                  <MessageBold>
                    {translate("OPEN_BANKING_END_SHARING_MODAL_MSG4")}
                  </MessageBold>
                  {translate("OPEN_BANKING_END_SHARING_MODAL_MSG6")}
                  <MessageBold>
                    {translate("OPEN_BANKING_END_SHARING_MODAL_MSG5")}
                  </MessageBold>
                  {translate("OPEN_BANKING_END_SHARING_MODAL_MSG7")}
                  <MessageBold color="#D2444A">
                    {translate("OPEN_BANKING_END_SHARING_MODAL_MSG2")}
                  </MessageBold>
                  {translate("OPEN_BANKING_END_SHARING_MODAL_MSG3")}
                </Message>
              </InfoWrapper>
              <ButtonWrapper>
                <Button
                  dataTest="openBankingConfirmCancel"
                  onClick={() =>
                    selectedTab === 1
                      ? rejectShareTransmitted()
                      : rejectShareReceived()
                  }
                  type="negative"
                  spacing={{ bottom: "s" }}
                >
                  {translate("OPEN_BANKING_YES_CLOSE")}
                </Button>
                <Button
                  type="outline"
                  onClick={() => {
                    changeState("endSharingBottomSheet", false);
                  }}
                >
                  {translate("OPEN_BANKING_BACK")}
                </Button>
              </ButtonWrapper>
            </Fragment>
          </EndSharringSheetWrapper>
        </AnimatedBottonSheet>
        <AnimatedBottonSheet
          isOpen={changeSharingBottomSheet}
          head={{
            title: translate("OPEN_BANKING_CHANGE_SHARED")
          }}
          velocity={0.3}
          onClickInBack={() => {
            changeState("changeSharingBottomSheet", false);
          }}
        >
          <Fragment>
            <ChangeSharringSheetWrapper>
              {translate("OPEN_BANKING_CHANGE_SHARED_MSG")}
              <Bold>{translate("OPEN_BANKING_CHANGE_SHARED_MSG2")}</Bold>
            </ChangeSharringSheetWrapper>
            <ChangeSharringButtonWrapper>
              <Button
                onClick={() => {
                  changeState("changeSharingBottomSheet", false);
                }}
                type="outline"
                spacing={{ bottom: "s" }}
              >
                {translate("OPEN_BANKING_CANCEL")}
              </Button>
              <Button
                onClick={() => startChangeShare()}
                spacing={{ bottom: "s" }}
              >
                {translate("OPEN_BANKING_YES_CHANGE")}
              </Button>
            </ChangeSharringButtonWrapper>
          </Fragment>
        </AnimatedBottonSheet>
        <AnimatedBottonSheet
          isOpen={renewSharingBottomSheet}
          head={{
            title: translate("OPEN_BANKING_RENEW_SHARED")
          }}
          velocity={0.3}
          onClickInBack={() => {
            changeState("renewSharingBottomSheet", false);
          }}
        >
          <Fragment>
            <ChangeSharringSheetWrapper>
              {translate("OPEN_BANKING_RENEW_SHARED_MSG_2")}
              <Bold>{translate("OPEN_BANKING_RENEW_SHARED_MSG_3")}</Bold>
            </ChangeSharringSheetWrapper>
            <ChangeSharringButtonWrapper>
              <Button
                onClick={() => {
                  changeState("renewSharingBottomSheet", false);
                }}
                type="outline"
                spacing={{ bottom: "s" }}
              >
                {translate("OPEN_BANKING_CANCEL")}
              </Button>
              <Button
                onClick={() => {
                  changeState("previusStep", currentStep);
                  startRenewShare();
                }}
                spacing={{ bottom: "s" }}
              >
                {translate("OPEN_BANKING_YES_RENEW")}
              </Button>
            </ChangeSharringButtonWrapper>
          </Fragment>
        </AnimatedBottonSheet>
      </ContainerWrapper>
    )
  );
}

export default DetailsSetep;
