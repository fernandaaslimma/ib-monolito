import React, { useContext } from "react";
import { Button, AlertMessage } from "react-bocombbm-components";
import { InstanceContext } from "../fixedIncomeContext";
import { isPtBR, translate } from "../../../../utils/i18n";

import {
  DetailHeader,
  FundTypes,
  InvestmentType,
  FundName,
  Wrapper,
  Content,
  InfoContentBold
} from "./styles";
import {
  StickyWrapper,
  BtnWrapper,
  Separator,
  StepVisibility
} from "../styles";
import Tag from "../../../common/Tag";
import { ContainerWrapper } from "../../styles";

import DetailsCard from "../FIDetailsCard";
import { redirect } from "../../../../utils/redirect";
import AnimatedBottonSheet from "../../../common/AnimatedBottomSheet";
import {
  ACTION_TYPE_APPROVE_INVESTMENT,
  BRASILIA_UTC_OFFSET,
  EN_US_AM_PM_FORMAT,
  PT_BR_24H_FORMAT,
  SUITABILITY_NOTIFICATION_TYPE
} from "../../../../utils/constants";
import {
  BottomSheetWrapper,
  ContentWrapper,
  PendencieContent,
  PendencieContentBold
} from "../ConfirmationStep/styles";
import mfaActionsCheck from "../../../../utils/mfaActionsCheck";
import moment from "moment";
import { modelBrazilianTime } from "../../../../utils/formatDate";

function DetailsStep({ goToStep, currentStep, stepBack }) {
  const {
    props: { availableDateRanges, getAuthFactors, authFactors, serverTime },
    state: {
      selectedProduct,
      typeOfFundPendencie,
      route,
      isBottomSheetUpdate,
      clickedToContinue
    },
    colors,
    resetSubscriptionPendencie,
    verifyPendencies,
    changeState
  } = useContext(InstanceContext);

  if (typeOfFundPendencie !== "" && isBottomSheetUpdate === false) {
    changeState("isBottomSheetUpdate", true);
  }

  currentStep !== 2 &&
    clickedToContinue === true &&
    changeState("clickedToContinue", false);

  React.useEffect(() => {
    async function checkValidAuthFactors() {
      const validAuthFactors = await mfaActionsCheck(
        ACTION_TYPE_APPROVE_INVESTMENT,
        authFactors
      );

      if (validAuthFactors.result !== true) {
        return redirect("/mfaboarding");
      } else {
        currentStep === 2 && verifyPendencies(goToStep);
        changeState("clickedToContinue", false);
      }
    }

    authFactors && clickedToContinue === true && checkValidAuthFactors();
  }, [
    authFactors,
    verifyPendencies,
    clickedToContinue,
    currentStep,
    goToStep,
    changeState
  ]);

  let lcaDetails;

  if (selectedProduct) {
    lcaDetails = {
      minimumaApplication: selectedProduct["minimumSubscription"],
      maximumApplication: selectedProduct["maximumSubscription"],
      Tax: selectedProduct["yieldLabel"],
      deadline: selectedProduct["monthsToMaturityLabel"],
      liquidity: selectedProduct["liquidityLabel"],
      IR: selectedProduct["incomeTaxLabel"]
    };
  }

  const mountMessageWithAvailabilityTime = () => {
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
      <React.Fragment>
        {translate("INVESTMENTS_FI_INVEST_BETWEEN_MSG1")}
        <InfoContentBold>{rangeStart}</InfoContentBold>
        {translate("INVESTMENTS_FI_INVEST_BETWEEN_MSG2")}
        <InfoContentBold>{rangeEnd}</InfoContentBold>
        {translate("INVESTMENTS_FI_INVEST_BETWEEN_MSG3")}
      </React.Fragment>
    );
  };

  const checkAvailabilityToInvest = async () => {
    changeState("clickedToContinue", true);
    await getAuthFactors();
  };

  const resetTypeFundPendencieAndCloseModal = () => {
    resetSubscriptionPendencie();
  };

  const checkAvailabilityHour = () => {
    const { startTime, endTime } = { ...availableDateRanges[0] };
    return !moment(serverTime).isBetween(startTime, endTime);
  };

  return (
    selectedProduct && (
      <ContainerWrapper>
        <Wrapper>
          <Content>
            {currentStep === 2 && <StepVisibility id="DetailsStep" />}
            <DetailHeader>
              <FundTypes>
                <InvestmentType>{selectedProduct.productLabel}</InvestmentType>
                <Tag
                  title={selectedProduct.riskProfileLabel}
                  color={colors[selectedProduct.riskProfile.toLowerCase()]}
                />
              </FundTypes>
              <FundName>{selectedProduct.issuer}</FundName>
            </DetailHeader>
            <AlertMessage
              icon="Attention"
              type="neutral"
              spacing={{
                top: "none",
                bottom: "m",
                right: "s",
                left: "s"
              }}
            >
              {mountMessageWithAvailabilityTime()}
            </AlertMessage>
            <DetailsCard list={lcaDetails} dataTest="detailsCard" />
          </Content>

          <StickyWrapper>
            <Separator />
            <BtnWrapper>
              <Button
                type="outline"
                onClick={stepBack}
                spacing={{ top: "s", bottom: "s", right: "xxs", left: "s" }}
              >
                {translate("INVESTMENTS_FI_BACK")}
              </Button>
              <Button
                dataTest="investFixedIncome"
                onClick={() => checkAvailabilityToInvest()}
                disabled={checkAvailabilityHour()}
                spacing={{ top: "s", bottom: "s", right: "s", left: "xxs" }}
              >
                {translate("INVEST")}
              </Button>
            </BtnWrapper>
          </StickyWrapper>
          <AnimatedBottonSheet
            isOpen={isBottomSheetUpdate}
            velocity={0.3}
            head={{
              title:
                typeOfFundPendencie === SUITABILITY_NOTIFICATION_TYPE
                  ? translate("SUITABILITY_FUND_PENDENCIE_TITLE")
                  : translate("PERSON_REGISTRATION_FUND_PENDENCIE_TITLE"),
              close: true
            }}
            onClickInBack={() => resetTypeFundPendencieAndCloseModal()}
          >
            <BottomSheetWrapper>
              <ContentWrapper>
                <PendencieContent data-test="typeOfFundPendencie">
                  {typeOfFundPendencie === SUITABILITY_NOTIFICATION_TYPE
                    ? translate("SUITABILITY_FUND_PENDENCIE")
                    : translate("PERSON_REGISTRATION_FUND_PENDENCIE")}

                  <PendencieContentBold>
                    {typeOfFundPendencie === SUITABILITY_NOTIFICATION_TYPE
                      ? translate("SUITABILITY_FUND_PENDENCIE_FILL")
                      : translate("PERSON_REGISTRATION_FUND_PENDENCIE_UPDATE")}
                  </PendencieContentBold>
                </PendencieContent>
              </ContentWrapper>
              <StickyWrapper>
                <Separator />
                <BtnWrapper>
                  <Button
                    dataTest="noButton"
                    type="outline"
                    onClick={() => resetTypeFundPendencieAndCloseModal()}
                    spacing={{ top: "s", bottom: "s", right: "xxs", left: "s" }}
                  >
                    {translate("FUNDS_NO")}
                  </Button>
                </BtnWrapper>
                <BtnWrapper>
                  <Button
                    dataTest="yesButton"
                    onClick={() => redirect(route)}
                    spacing={{ top: "s", bottom: "s", right: "s", left: "s" }}
                  >
                    {translate("FUNDS_YES")}
                  </Button>
                </BtnWrapper>
              </StickyWrapper>
            </BottomSheetWrapper>
          </AnimatedBottonSheet>
        </Wrapper>
      </ContainerWrapper>
    )
  );
}

export default DetailsStep;
