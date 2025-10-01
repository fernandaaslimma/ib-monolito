import React, { useContext } from "react";
import Icon from "../../../common/Icon";
import { scrollToTop } from "../../../../utils/dom";
import {
  getConsentEntity,
  getConsentInitiator,
  formatDate
} from "../../../../utils/openBankingUtils";
import { Button } from "react-bocombbm-components";
import {
  Separator,
  StepVisibility,
  BtnWrapper,
  StickyWrapper
} from "../../Consent/styles";
import { translate } from "../../../../utils/i18n";
import ResumeCard from "../../../common/ResumeCard";
import { OpenBankingConsentContext } from "../Consent";

import {
  ContainerWrapper,
  InfoCard,
  Title,
  ReceivingInstitutionInfo,
  ReceivingInstitutionName,
  WapperBankImg
} from "./styles";
import ApproverCard from "../../ApproverCard";

function ResumeStep({ currentStep, stepForward, stepBack, goToStep }) {
  const {
    props: {
      consentInfo,
      shareResourcesPatch,
      aproveConsent,
      userInfo,
      specificOrganization
    },
    state: { loadingApi, clientResources },
    changeState,
    isApplicant,
    tagConf
  } = useContext(OpenBankingConsentContext);

  React.useEffect(() => {
    scrollToTop();
  }, []);

  const pendentAprovers = () => {
    if (
      consentInfo &&
      consentInfo.additionalInfos &&
      consentInfo.additionalInfos.length > 1
    ) {
      const base64CodedApprovers = consentInfo.additionalInfos.find(
        item => item.key === "PowersOfAttorney"
      );
      const approversString = decodeURIComponent(
        escape(window.atob(base64CodedApprovers.value))
      );

      let approversJSON = JSON.parse(approversString);

      const joinedApprovers = approversJSON.map(approverAdd => ({
        ...approverAdd,
        ...consentInfo.approvers.find(
          approver => approver.approverId === approverAdd.Id
        )
      }));

      const {
        loggedUser: {
          document: { identification }
        }
      } = consentInfo;

      const verifyApplicant = item => {
        if (item.Cpf === identification) {
          return { ...item, isApplicant: true };
        } else {
          return { ...item, isApplicant: false };
        }
      };
      const approversList = joinedApprovers.map(item => verifyApplicant(item));

      let approvers = Array.isArray(approversList)
        ? approversList
        : [approversList];

      return approvers;
    } else {
      return [];
    }
  };

  const getApplicant = () => {
    if (
      currentStep === 2 &&
      consentInfo &&
      consentInfo.additionalInfos &&
      consentInfo.additionalInfos.length > 1
    ) {
      const base64CodedApprovers =
        consentInfo &&
        consentInfo.additionalInfos.find(
          item => item.key === "ConsentInitiator"
        );
      const approversString = decodeURIComponent(
        escape(window.atob(base64CodedApprovers.value))
      );

      const applicantJson = JSON.parse(approversString);

      const documentApprover = approverId => {
        const documentApprover = approverId.substring(
          approverId.indexOf("@") + 1
        );
        const documentId = documentApprover.substring(
          documentApprover.indexOf("@") + 1
        );
        return documentId;
      };

      const statusApplicantTo = [applicantJson].map(approverAdd => ({
        ...approverAdd,
        ...consentInfo.approvers.find(
          approver =>
            approver.approverId === approverAdd.Id ||
            approver.approverId === documentApprover(approverAdd.Id)
        )
      }));

      let applicant = Array.isArray(statusApplicantTo)
        ? statusApplicantTo
        : [statusApplicantTo];

      return applicant;
    } else {
      return [];
    }
  };

  const consentApprove = async () => {
    const { shareId } = consentInfo;
    const resources =
      clientResources &&
      clientResources
        .filter(resource => resource.status === true)
        .map(item => {
          return {
            resourceId: item.resourceId,
            type: item.type
          };
        });
    const resourcesBody = {
      resources
    };

    if (consentInfo.status !== "PENDING") {
      // console.log(
      //   "Este compartilhamento expirou e não está mais disponível para aprovação."
      // );
    }

    changeState({ loadingApi: true });
    isApplicant() &&
      resources &&
      (await shareResourcesPatch(shareId, resourcesBody));
    await aproveConsent(shareId);
    changeState({ loadingApi: false });
    setTimeout(() => {
      !isApplicant() ? goToStep(4) : stepForward();
    }, 1000);
  };

  // const expirationDiff = date => {
  //   const diff = moment.duration(moment(date).diff(moment(new Date())));
  //   const meses = diff.asMonths();
  //   const expirationTime = `${meses.toFixed(0)} meses | ${moment(date).format(
  //     getDateFieldPlaceholderByLocale()
  //   )}`;
  //   return expirationTime;
  // };

  return (
    <ContainerWrapper>
      {currentStep === 2 && <StepVisibility id="ResumeStep" />}
      <InfoCard data-test="screenRedirect">
        <Title>{translate("OPEN_BANKING_CONFIRMATION_SHARING")}</Title>
        {translate("OPEN_BANKING_CONFIRMATION_SHARING_MSG")}
        <ReceivingInstitutionInfo>
          {currentStep === 2 && specificOrganization ? (
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
      {consentInfo && (
        <ResumeCard
          name={consentInfo && getConsentInitiator(consentInfo)}
          document={consentInfo && getConsentEntity(consentInfo, userInfo)}
          destiny={consentInfo && consentInfo.organisationName}
          purpose={translate("OPEN_BANKING_NEW_SHARE_INFO")}
          creationDate={consentInfo && formatDate(consentInfo.createDateTime)}
          expiration={
            (consentInfo && consentInfo.expirationDateTime) ||
            consentInfo.deadLines.expirationDateTime
          }
          dataTest="ApproveConsentResumeCard"
          alertMsg={translate("OPEN_BANKING_MSG_SHARE_SUMMARY")}
        />
      )}

      {/* <InfoCard>
        <Title>{translate("OPEN_BANKING_SHARING_SUMMARY")}</Title>
        {translate("OPEN_BANKING_NAME")}
        <SubTitle data-test="NameLabel">
          {getApplicant() && getApplicant().length >= 1 && getApplicant()[0].Name}
        </SubTitle>
        {consentInfo && (
          <Fragment>
            {consentInfo.loggedUser.document.identification.length === 11
              ? translate("OPEN_BANKING_CPF")
              : translate("OPEN_BANKING_CNPJ")}
            <SubTitle data-test="cpfOrCnpjLabel">
              {docObfuscation(consentInfo.loggedUser.document.identification)}
            </SubTitle>
          </Fragment>
        )}
        {translate("OPEN_BANKING_DESTINATION_INSTITUTION")}
        <SubTitle data-test="organizationNameLabel">
          {consentInfo && consentInfo.organisationName}
        </SubTitle>
        {translate("OPEN_BANKING_SHARE_TERM")}
        <SubTitle data-test="expirationDateTime">
          {consentInfo &&
            expirationDiff(
              consentInfo.expirationDateTime ||
                consentInfo.deadLines.expirationDateTime
            )}
        </SubTitle>
      </InfoCard> */}
      {userInfo.tenants[0] !== "Individual" &&
        (consentInfo && consentInfo.approvers.length > 1) && (
          <InfoCard>
            <Title>{translate("OPEN_BANKING_AUTHORIZATION")}</Title>
            {translate("OPEN_BANKING_AUTHORIZATION_MSG")}
            {getApplicant() &&
              getApplicant().length >= 1 &&
              getApplicant().map((item, index) => {
                const { Name } = item;
                return (
                  <ApproverCard
                    key={index}
                    item={item}
                    tagConf={tagConf}
                    Name={Name}
                    title="Requerente"
                  />
                );
              })}
            {pendentAprovers() &&
              pendentAprovers().length >= 1 &&
              pendentAprovers().map((item, index) => {
                const { Name } = item;
                return (
                  <ApproverCard
                    key={index}
                    item={item}
                    tagConf={tagConf}
                    Name={Name}
                    title="Autorizador"
                  />
                );
              })}
          </InfoCard>
        )}
      <StickyWrapper>
        <Separator />
        <BtnWrapper>
          <Button
            dataTest="backButton"
            onClick={() => stepBack()}
            type="outline"
            spacing={{ top: "s", bottom: "s", right: "xxs", left: "s" }}
            disabled={loadingApi}
          >
            {translate("OPEN_BANKING_SHARED_BACK")}
          </Button>
          <Button
            dataTest="consentConfirmButton"
            onClick={() => consentApprove()}
            spacing={{ top: "s", bottom: "s", right: "s", left: "xxs" }}
            loading={loadingApi}
          >
            {translate("OPEN_BANKING_CONFIRM")}
          </Button>
        </BtnWrapper>
      </StickyWrapper>
    </ContainerWrapper>
  );
}

export default ResumeStep;
