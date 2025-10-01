import React, { useContext } from "react";
import { Button } from "react-bocombbm-components";
import Icon from "../../../common/Icon";
import ResumeCard from "../../../common/ResumeCard";
import { scrollToTop } from "../../../../utils/dom";
import {
  getConsentInitiator,
  formatDate,
  getConsentEntity
} from "../../../../utils/openBankingUtils";
// import DefaultContent from "../../../common/DefaultContent";
// // import AnimatedBottonSheet from "../../../common/AnimatedBottomSheet";
// import { certificateLocalUrl } from '../../../../utils/constants';
import { Image } from "../../../common/Image/Image";
import {
  Separator,
  StepVisibility,
  BtnWrapper,
  StickyWrapper
} from "../../Consent/styles";
import { translate } from "../../../../utils/i18n";
import { OpenBankingNewConsentContext } from "../NewConsent";

import {
  ContainerWrapper,
  InfoCard,
  Title,
  ReceivingInstitutionInfo,
  ReceivingInstitutionName,
  // Wrapper,
  // TitleDiv,
  // SubTitleDiv,
  // WrapperCard,
  // MessageBold,
  WapperImg
} from "./styles";

import BankPng from "../../../common/Icon/default_bank100.png";

function ResumeStep({ currentStep, stepForward, stepBack }) {
  const {
    props: {
      updateShareScope,
      userInfo
      // updateScopeError
    },
    state: {
      loadingApi,
      selectedDeadLine,
      finalDataPermisson,
      consentCreated,
      consentLogo,
      consentName
    }
    // changeState,
  } = useContext(OpenBankingNewConsentContext);

  React.useEffect(() => {
    scrollToTop();
  }, []);

  const consentCreate = async () => {
    const { shareId } = consentCreated;
    const dataPermissions =
      finalDataPermisson &&
      finalDataPermisson
        .filter(dataPermission => dataPermission.status === true)
        .map(item => {
          return {
            permissionCode: item.permissionCode,
            displayName: item.displayName,
            detail: item.detail
          };
        });

    const uriRedirect =
      window.location.hostname === "localhost"
        ? "https://localhost:8080/home"
        : `${window.location.origin}/home`;

    const resourcesBody = {
      dataPermissions: dataPermissions,
      deadLine: {
        total: selectedDeadLine.total,
        type: "MONTHS"
      },
      redirectUri: uriRedirect
    };

    await updateShareScope(shareId, resourcesBody);

    // if (updateScopeError) {
    //     changeState({ selectBottonSheetForbidden: true });
    // } else {
    setTimeout(() => {
      stepForward();
    }, 1000);
    // }
  };

  // const expirationDiff = date => {
  //   const diff = moment.duration(moment(date).diff(moment(new Date())));
  //   const meses = diff.asMonths();
  //   const expirationTime = `${meses.toFixed(0)} meses | ${moment(date).format(
  //     getDateFieldPlaceholderByLocale()
  //   )}`;
  //   return expirationTime;
  // };

  const PersonImage = ({ profileImageUrl, ...rest }) => (
    <Image src={profileImageUrl} srcOnError={BankPng} {...rest} />
  );

  return (
    <React.Fragment>
      <ContainerWrapper>
        {currentStep === 2 && <StepVisibility id="ResumeStep" />}
        <InfoCard>
          <Title>{translate("OPEN_BANKING_NEW_CONSENT_SHARE")}</Title>
          {translate("OPEN_BANKING_CONFIRMATION_SHARING_MSG")}
          <ReceivingInstitutionInfo>
            {consentLogo ? (
              <PersonImage profileImageUrl={consentLogo} />
            ) : (
              <WapperImg>
                <Icon type="Bank" width={35} height={35} />
              </WapperImg>
            )}
            <ReceivingInstitutionName>
              {consentName && consentName}
            </ReceivingInstitutionName>
          </ReceivingInstitutionInfo>
        </InfoCard>
        <ResumeCard
          name={consentCreated && getConsentInitiator(consentCreated)}
          document={
            consentCreated && getConsentEntity(consentCreated, userInfo)
          }
          destiny={consentName && consentName}
          purpose={translate("OPEN_BANKING_NEW_SHARE_INFO")}
          creationDate={
            consentCreated && formatDate(consentCreated.createDateTime)
          }
          expiration={selectedDeadLine && selectedDeadLine.expirationDateTime}
          dataTest="NewConsentResumeCard"
        />
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
              {translate("BACK")}
            </Button>
            <Button
              dataTest="consentConfirmButton"
              onClick={() => consentCreate()}
              spacing={{ top: "s", bottom: "s", right: "s", left: "xxs" }}
              loading={loadingApi}
            >
              {translate("CONFIRM_BTN")}
            </Button>
          </BtnWrapper>
        </StickyWrapper>
      </ContainerWrapper>
      {/* <AnimatedBottonSheet
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
                            Icon={() => (
                                <Icon
                                    type="Identifier"
                                />
                            )}
                            primaryText="Infelizmente a instituição selecionada não pode ser utilizada como transmissora."
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
                                    <TitleDiv>Este erro pode ter ocorrido pelos seguintes fatores:</TitleDiv>
                                    <SubTitleDiv>- O usuário que solicitou o compartilhamento não é <MessageBold>correntista</MessageBold> na transmissora selecionada</SubTitleDiv>
                                    <SubTitleDiv>- A instituição transmissora selecionada não possui os <MessageBold>requisitos técnicos</MessageBold> necessários no diretório central.</SubTitleDiv>
                                </React.Fragment>
                            </WrapperCard>
                        </AlertMessage>
                    </Wrapper>
                    <StickyWrapper>
                        <BtnWrapper>
                            <Button
                                type="primary"
                                spacing={{ top: "xs", bottom: "l", right: "s", left: "s" }}
                                onClick={() => {
                                    changeState("selectBottonSheetForbidden", false);
                                }}
                            >
                                Entendi
                            </Button>
                        </BtnWrapper>
                    </StickyWrapper>
                </React.Fragment>
            </AnimatedBottonSheet> */}
    </React.Fragment>
  );
}

export default ResumeStep;
