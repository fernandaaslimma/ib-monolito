import React, { useContext, useEffect, useState, Fragment } from "react";
import { AlertMessage, Button, Icon } from "react-bocombbm-components";
import { InstanceContext } from "../fundsContext";
import { isPtBR, translate } from "../../../../utils/i18n";
import { hotjarTag } from "../../../../utils/hotjarFun";
import DetailsCard from "../../DetailsCard";
import AnimatedBottonSheet from "../../../common/AnimatedBottomSheet";
import { brandPrimary } from "../../../../styles/settings";

import {
  DetailHeader,
  FundTypes,
  InvestmentType,
  FundName,
  QualifiedInvestorInfo,
  QualifiedInvestorWrapper,
  FundDescription,
  Wrapper,
  InfoContent,
  InfoWrapper,
  ButtonWrapper,
  InfoContentBold,
  ButtonsWrapper,
  AsteriskMessage,
  AsteriskTitle,
  Content,
  InfoContentDetais,
  InfoContentResidents,
  ContentAvailar,
  ContentWrapper,
  SubTitle,
  FirstContentAvailar,
  ContentWrapper2
} from "./styles";
import {
  StickyWrapper,
  BtnWrapper,
  Separator,
  StepVisibility,
  ClickableItem
} from "../styles";
import formatDate, { modelBrazilianTime } from "../../../../utils/formatDate";
import Tag from "../../../common/Tag";
import { redirect } from "../../../../utils/redirect";
import mfaActionsCheck from "../../../../utils/mfaActionsCheck";
import {
  ACTION_TYPE_APPROVE_INVESTMENT,
  EN_US_AM_PM_FORMAT,
  PT_BR_24H_FORMAT,
  SUITABILITY_NOTIFICATION_TYPE,
  BRASILIA_UTC_OFFSET
} from "../../../../utils/constants";
import moment from "moment";
import { ContainerWrapper } from "../../styles";

function DetailsStep({ stepForward, currentStep, stepBack }) {
  const {
    state: { selectedFund, typeOfFundPendencie, route, canInvest },
    props: { availableDateRanges, getAuthFactors, authFactors, serverTime },
    colors,
    verifyPendencies,
    resetInvestability,
    resetFundPendencie,
    setChosenOperation
  } = useContext(InstanceContext);
  
  const investmentDetails =
    selectedFund && selectedFund.investmentDetails
      ? selectedFund.investmentDetails
      : null;

  const [
    isQualifiedInvestorBottomSheet,
    setIsQualifiedInvestorBottomSheet
  ] = useState(false);
  const [isBottomSheet, changeBottomSheetState] = useState(false);
  const [isBottomSheetUpdate, changeBottomSheetUpdateState] = useState(false);
  const [verifyAvailablePendencies, changeVerifyPendencies] = useState(false);
  const [
    iorIofBottomSheetInformation,
    changeIorIofBottomSheetInformation
  ] = useState(false);
  const [clickedToContinue, checkClickedToContinue] = useState(false);

  let profitabilityObj, generalInfo, fundsDetails, investedFundInfo;

  useEffect(() => {
    //Detect if component is in viewport and tag Hotjar path
    var component = document.querySelector("#DetailsStep");
    component && hotjarTag("investments/products/funds/details");
  });

  useEffect(() => {
    if (canInvest === true && currentStep === 2) {
      resetInvestability();
      stepForward();
    }
  }, [canInvest, stepForward, currentStep, resetInvestability]);

  useEffect(() => {
    typeOfFundPendencie !== "" && changeBottomSheetUpdateState(true);
  }, [typeOfFundPendencie]);

  useEffect(() => {
    currentStep !== 2 && checkClickedToContinue(false);
  }, [currentStep]);

  useEffect(() => {
    async function checkValidAuthFactors() {
      const validAuthFactors = await mfaActionsCheck(
        ACTION_TYPE_APPROVE_INVESTMENT,
        authFactors
      );
      if (validAuthFactors.result !== true) {
        return redirect("/mfaboarding");
      } else {
        currentStep === 2 && clickedToContinue && verifyPendencies();
      }
    }

    verifyAvailablePendencies && authFactors && checkValidAuthFactors();
  }, [
    authFactors,
    verifyPendencies,
    verifyAvailablePendencies,
    clickedToContinue,
    currentStep
  ]);

  const checkAvailabilityHour = () => {
    const { startTime, endTime } = { ...availableDateRanges[0] };
    return !moment(serverTime).isBetween(startTime, endTime);
  };

  const mountMessageWithAvailabilityTime = (afterAvailabilityTime = false) => {
    const { startTime, endTime } = { ...availableDateRanges[0] };
    const maxEndTime = Math.max(endTime);
    const maxStartTime = Math.max(startTime);

    const rangeStart = isPtBR()
      ? modelBrazilianTime(
          moment(maxStartTime)
            .utcOffset(BRASILIA_UTC_OFFSET)
            .format(PT_BR_24H_FORMAT)
        )
      : moment(maxStartTime)
          .utcOffset(BRASILIA_UTC_OFFSET)
          .format(EN_US_AM_PM_FORMAT);

    const rangeEnd = isPtBR()
      ? modelBrazilianTime(
          moment(maxEndTime)
            .utcOffset(BRASILIA_UTC_OFFSET)
            .format(PT_BR_24H_FORMAT)
        )
      : moment(maxEndTime)
          .utcOffset(BRASILIA_UTC_OFFSET)
          .format(EN_US_AM_PM_FORMAT);

    return (
      <Fragment>
        {afterAvailabilityTime
          ? translate("FUNDS_CANT_INVEST_AFTER_MSG1")
          : translate("FUNDS_CANT_INVEST_MSG1")}
        <InfoContentBold>
          {rangeStart}
          {afterAvailabilityTime
            ? translate("FUNDS_CANT_INVEST_AFTER_MSG2")
            : translate("FUNDS_CANT_INVEST_MSG2")}
          {rangeEnd}
        </InfoContentBold>
        {afterAvailabilityTime
          ? translate("FUNDS_CANT_INVEST_AFTER_MSG3")
          : translate("FUNDS_CANT_INVEST_MSG3")}
      </Fragment>
    );
  };

  const checkAvailabilityToInvest = async () => {
    checkClickedToContinue(true);
    changeVerifyPendencies(true);
    setChosenOperation("invest");
    await getAuthFactors();
  };

  const resetTypeFundPendencieAndCloseModal = () => {
    resetFundPendencie();
    changeBottomSheetUpdateState(false);
  };

  function showHideIorIofInformation() {
    changeIorIofBottomSheetInformation(!iorIofBottomSheetInformation);
  }

  if (selectedFund) {
    if (investmentDetails) {
      investedFundInfo = {
        netBalance: selectedFund["investmentDetails"]["netBalance"],
        investmentValue: selectedFund["investmentDetails"]["investmentValue"],
        irIof: selectedFund["investmentDetails"]["irIof"]
      };
    }
    profitabilityObj = {
      yearFunds: selectedFund["returns"]["year"],
      twelveMonths: selectedFund["returns"]["twelveMonths"],
      twentyFourMonths: selectedFund["returns"]["twentyFourMonths"],
      thirtySixMonths: selectedFund["returns"]["thirtySixMonths"],
      fortyEightMonths: selectedFund["returns"]["fortyEightMonths"]
    };
    generalInfo = {
      initialInvestment: selectedFund["initialInvestment"],
      minimumTransaction: selectedFund["minimumTransaction"], // Movimentação mín.
      minimumBalance: selectedFund["minimumBalance"], // Saldo mínimo
      subsConversionDays: selectedFund["subscription"]["conversionDays"],
      redempConversionDays: selectedFund["redemption"]["conversionDays"],
      redempSettlementDays: selectedFund["redemption"]["settlementDays"]
    };
    fundsDetails = {
      administratorFunds: selectedFund["administrator"], // Administrador
      managerFunds: selectedFund["manager"], // Gestor
      custodianFunds: selectedFund["custodian"], // Custodiante
      inceptionDateFunds: selectedFund["inceptionDate"], // Data de ínicio do fundo
      benchmarkFunds: selectedFund["benchmark"], // Benckmark
      performanceFeeFunds: selectedFund["performanceFee"], // Taxa de perfomance
      administrationFeeFunds: selectedFund["administrationFee"], // Taxa de administração
    };

    fundsDetails = {
      ...fundsDetails,
      ...("maximumAdministrationFee" in selectedFund && {administrationFeeMaxFunds: selectedFund["maximumAdministrationFee"]}), // Taxa de administração Máxima
      ...("maximumDistributionFee" in selectedFund && {maximumDistributionFeeFunds: selectedFund["maximumDistributionFee"]}), // Taxa máxima de distribuição
      ...("managementFee" in selectedFund && {managementFeeFunds: selectedFund["managementFee"]}) // Taxa de gestão
    }
  }

  return (
    selectedFund && (
      <ContainerWrapper>
        <Wrapper>
          <Content>
            {currentStep === 2 && <StepVisibility id="DetailsStep" />}
            <DetailHeader>
              <FundTypes>
                <InvestmentType>{selectedFund.classTypeLabel}</InvestmentType>
                <Tag
                  title={selectedFund.riskProfileLabel}
                  color={colors[selectedFund.riskProfile.toLowerCase()]}
                />
              </FundTypes>
              <FundName>{selectedFund.name}</FundName>
              {selectedFund.qualifiedInvestor && (
                <QualifiedInvestorWrapper>
                  <QualifiedInvestorInfo>
                    {translate("FUNDS_PRODUCT_FOR_QUALIFIED_INVESTOR")}
                  </QualifiedInvestorInfo>
                  <ClickableItem
                    onClick={() => setIsQualifiedInvestorBottomSheet(true)}
                  >
                    <Icon
                      type="Interrogation"
                      height={16}
                      width={16}
                      color={brandPrimary}
                    />
                  </ClickableItem>
                </QualifiedInvestorWrapper>
              )}
              <FundDescription>{selectedFund.description}</FundDescription>
            </DetailHeader>
            {selectedFund.closedFund && (
              <AlertMessage
                icon="Attention"
                type="neutral"
                spacing={{
                  top: "none",
                  bottom: "l",
                  right: "s",
                  left: "s"
                }}
              >
                {translate("FUND_CLOSED_TO_NEW_APPLICATIONS")}
              </AlertMessage>
            )}
            {checkAvailabilityHour() && (
              <AlertMessage
                icon="Attention"
                type="neutral"
                spacing={{
                  top: "none",
                  bottom: "l",
                  right: "s",
                  left: "s"
                }}
              >
                {mountMessageWithAvailabilityTime(true)}
              </AlertMessage>
            )}
            {selectedFund.investmentDetails && (
              <DetailsCard
                bottomExtraSpace={"24px"}
                featureType={"position_funds_"}
                list={investedFundInfo}
                netBalance={investmentDetails && investmentDetails.netBalance}
                grossBalance={
                  investmentDetails && investmentDetails.grossBalance
                }
                dataTest="investedFundInfoCard"
                stepForward={stepForward}
                showHideIorIofInfo={showHideIorIofInformation}
                disableRedemption={checkAvailabilityHour()}
              />
            )}
            <DetailsCard
              title={
                selectedFund.investmentDetails
                  ? translate("POSITION_FUNDS_INCOME_PER_PERIOD")
                  : null
              }
              list={profitabilityObj}
              netIncome={investmentDetails && investmentDetails.netIncome}
              grossResultBalance={
                investmentDetails && investmentDetails.grossResultBalance
              }
              periodActive={selectedFund.monthActivity}
              profitabilitySoFar={
                selectedFund.monthActivity < 12
                  ? selectedFund["returns"]["sinceInception"]
                  : selectedFund["returns"]["twelveMonths"]
              }
              clickInfo={() => changeBottomSheetState(true)}
              dataTest="profitabilityDetailsCard"
            />

            <DetailsCard
              title={translate("GENERAL_INFO_FUNDS")}
              list={generalInfo}
              dataTest="generalInfoCard"
            />

            <DetailsCard
              title={translate("FUNDS_DETAILS")}
              list={fundsDetails}
              dataTest="detailsCard"
            />

            {!checkAvailabilityHour() && (
              <AlertMessage
                icon="Attention"
                type="neutral"
                spacing={{
                  top: "m",
                  bottom: "none",
                  right: "s",
                  left: "s"
                }}
              >
                {mountMessageWithAvailabilityTime()}
              </AlertMessage>
            )}

            {selectedFund.allowedSubscriptions === false && (
              <AsteriskMessage>
                <AsteriskTitle data-test="notAllowedSubscriptionsMessage">
                  {`*${selectedFund.notAllowedSubscriptionsMessage}`}
                </AsteriskTitle>
              </AsteriskMessage>
            )}
          </Content>

          <StickyWrapper>
            <Separator />
            <BtnWrapper>
              <Button
                type="outline"
                onClick={stepBack}
                spacing={{ top: "s", bottom: "s", right: "xxs", left: "s" }}
              >
                {translate("FUNDS_BACK")}
              </Button>
              <Button
                dataTest="investFund"
                onClick={() => checkAvailabilityToInvest()}
                disabled={
                  selectedFund.allowedSubscriptions === false
                    ? true
                    : checkAvailabilityHour()
                }
                spacing={{ top: "s", bottom: "s", right: "s", left: "xxs" }}
              >
                {translate("INVEST")}
              </Button>
            </BtnWrapper>
          </StickyWrapper>

          <AnimatedBottonSheet
            isOpen={isQualifiedInvestorBottomSheet}
            velocity={0.3}
            head={{ title: translate("FUNDS_QUALIFIED_INVESTOR_TITLE") }}
            onClickInBack={() => setIsQualifiedInvestorBottomSheet(false)}
          >
            <ContainerWrapper>
              <InfoWrapper>
                <InfoContent
                  dangerouslySetInnerHTML={{
                    __html: translate("FUNDS_QUALIFIED_INVESTOR_DESCRIPTION")
                  }}
                />
                <ButtonWrapper>
                  <Button
                    type="outline"
                    onClick={() => setIsQualifiedInvestorBottomSheet(false)}
                  >
                    {translate("FUNDS_BACK")}
                  </Button>
                </ButtonWrapper>
              </InfoWrapper>
            </ContainerWrapper>
          </AnimatedBottonSheet>

          <AnimatedBottonSheet
            isOpen={isBottomSheet}
            velocity={0.3}
            head={{ title: translate("FUND_PROFT") }}
            onClickInBack={() => changeBottomSheetState(false)}
          >
            <ContainerWrapper>
              <InfoWrapper>
                <InfoContent>
                  {translate("FUND_UPDATED_HOUR")}
                  <InfoContentBold>
                    {translate("FUNDS_UNTIL")}
                    {formatDate(selectedFund.quotaDate)}.
                  </InfoContentBold>
                </InfoContent>
                <ButtonWrapper>
                  <Button
                    type="outline"
                    onClick={() => changeBottomSheetState(false)}
                  >
                    {translate("FUNDS_BACK")}
                  </Button>
                </ButtonWrapper>
              </InfoWrapper>
            </ContainerWrapper>
          </AnimatedBottonSheet>

          <AnimatedBottonSheet
            isOpen={isBottomSheetUpdate}
            velocity={0.3}
            head={{
              title:
                typeOfFundPendencie === SUITABILITY_NOTIFICATION_TYPE
                  ? translate("SUITABILITY_FUND_PENDENCIE_TITLE")
                  : translate("PERSON_REGISTRATION_FUND_PENDENCIE_TITLE")
            }}
            onClickInBack={() => changeBottomSheetUpdateState(false)}
          >
            <ContainerWrapper>
              <InfoWrapper>
                <InfoContent data-test="typeOfFundPendencie">
                  {typeOfFundPendencie === SUITABILITY_NOTIFICATION_TYPE
                    ? translate("SUITABILITY_FUND_PENDENCIE")
                    : translate("PERSON_REGISTRATION_FUND_PENDENCIE")}

                  <InfoContentBold>
                    {typeOfFundPendencie === SUITABILITY_NOTIFICATION_TYPE
                      ? translate("SUITABILITY_FUND_PENDENCIE_FILL")
                      : translate("PERSON_REGISTRATION_FUND_PENDENCIE_UPDATE")}
                  </InfoContentBold>
                </InfoContent>
                <ButtonsWrapper>
                  <BtnWrapper>
                    <Button
                      dataTest="noButton"
                      type="outline"
                      onClick={() => resetTypeFundPendencieAndCloseModal()}
                    >
                      {translate("FUNDS_NO")}
                    </Button>
                  </BtnWrapper>
                  <BtnWrapper>
                    <Button
                      dataTest="yesButton"
                      onClick={() => redirect(route)}
                    >
                      {translate("FUNDS_YES")}
                    </Button>
                  </BtnWrapper>
                </ButtonsWrapper>
              </InfoWrapper>
            </ContainerWrapper>
          </AnimatedBottonSheet>

          <AnimatedBottonSheet
            isOpen={iorIofBottomSheetInformation}
            velocity={0.3}
            head={{
              title: translate("ABOUT_TAXES")
            }}
            onClickInBack={() =>
              changeIorIofBottomSheetInformation(!iorIofBottomSheetInformation)
            }
          >
            <ContainerWrapper>
              <InfoWrapper>
                <InfoContentDetais>
                  <SubTitle>{translate("FUNDS_INCOME_TAX_TITLE")}</SubTitle>
                </InfoContentDetais>
                <InfoContentDetais>
                  <ContentWrapper>
                    {translate("FUNDS_INCOME_TAX")}
                    <InfoContentBold>
                      {translate("FUNDS_INCOME_TAX2")}
                    </InfoContentBold>
                    {translate("FUNDS_INCOME_TAX3")}
                  </ContentWrapper>
                </InfoContentDetais>
                <InfoContentDetais>
                  <FirstContentAvailar>
                    {translate("FUNDS_AVAILAR")}
                    <InfoContentBold>
                      {translate("FUNDS_AVAILAR2")}
                    </InfoContentBold>
                  </FirstContentAvailar>
                  <ContentAvailar>
                    {translate("FUNDS_AVAILAR3")}
                    <InfoContentBold>
                      {translate("FUNDS_AVAILAR4")}
                    </InfoContentBold>
                  </ContentAvailar>
                  <ContentAvailar>
                    {translate("FUNDS_AVAILAR5")}
                    <InfoContentBold>
                      {translate("FUNDS_AVAILAR6")}
                    </InfoContentBold>
                  </ContentAvailar>
                  <ContentAvailar>
                    {translate("FUNDS_AVAILAR7")}
                    <InfoContentBold>
                      {translate("FUNDS_AVAILAR8")}
                    </InfoContentBold>
                  </ContentAvailar>
                </InfoContentDetais>
                <InfoContentDetais>
                  <ContentWrapper2>
                    <InfoContentBold>{translate("FUNDS_IOF")}</InfoContentBold>
                    {translate("FUNDS_IOF2")}
                  </ContentWrapper2>
                </InfoContentDetais>
                <InfoContentDetais>
                  <ContentWrapper>
                    {translate("FUNDS_IOF3")}
                    <InfoContentBold>{translate("FUNDS_IOF4")}</InfoContentBold>
                    {translate("FUNDS_IOF5")}
                  </ContentWrapper>
                </InfoContentDetais>
                <InfoContentDetais>
                  <ContentWrapper2>
                    <InfoContentBold>{translate("FUNDS_INR")}</InfoContentBold>
                    {translate("FUNDS_INR2")}
                  </ContentWrapper2>
                </InfoContentDetais>
                <InfoContentResidents>
                  {translate("FUNDS_RESIDENT")}
                </InfoContentResidents>
                <ButtonsWrapper>
                  <BtnWrapper>
                    <Button
                      dataTest="noButton"
                      type="outline"
                      onClick={() =>
                        changeIorIofBottomSheetInformation(
                          !iorIofBottomSheetInformation
                        )
                      }
                    >
                      {translate("CLOSE")}
                    </Button>
                  </BtnWrapper>
                </ButtonsWrapper>
              </InfoWrapper>
            </ContainerWrapper>
          </AnimatedBottonSheet>
        </Wrapper>
      </ContainerWrapper>
    )
  );
}

export default DetailsStep;
