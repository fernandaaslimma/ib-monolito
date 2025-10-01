import React from "react";
import { Button } from "react-bocombbm-components";
import AlertMessage from "react-bocombbm-components/dist/AlertMessage";
import { BRL_CURRENCY } from "../../../../utils/constants";
import { unFormatNumber } from "../../../../utils/formatNumber";
import { translate } from "../../../../utils/i18n";
import { redirect } from "../../../../utils/redirect";
import AmmountInput from "../../../common/AmmountInput";
import AnimatedBottonSheet from "../../../common/AnimatedBottomSheet";
import Radio from "../../../common/Radio";
import ShimmerLoading from "../../../common/ShimmerLoading";
import {
  ContentWrapper,
  Separator,
  StickyWrapper,
  BtnWrapper,
  BorderedWrapper,
  RadioWrapper,
  Space,
  PrioritySelectionWrapper
} from "../styles";
import { InstanceContext } from "../withdrawLcaContext";

import {
  ValueInfo,
  Currency,
  Value,
  AccountText,
  WithdrawalValueLabel,
  ModalWrapper,
  ModalMessage,
  HorizontalLine,
  WrapperButton
} from "./styles";

function FormStep({ goToStep, currentStep }) {
  const {
    props: { totalLca, availableDateRanges, priorities, limitLca },
    state: {
      filledValue,
      openPriorityBottomSheet,
      loading,
      currentPriority,
      limitReached
    },
    changeAmmount,
    changeState,
    getMaxAndMinValues,
    mountMessageWithAvailabilityTime,
    checkAvailabilityHour,
    getWithdrawalDetails
  } = React.useContext(InstanceContext);

  const [selectedPriority, setSelectedPriority] = React.useState(
    currentPriority.name
  );

  function usePrevious(value) {
    const ref = React.useRef();
    React.useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }
  const prevPriority = usePrevious(currentPriority.name);

  React.useEffect(() => {
    currentPriority.name != prevPriority &&
      setSelectedPriority(currentPriority.name);
  }, [currentPriority, prevPriority]);

  const isFilledValue = () => {
    if (filledValue === "0,00" || filledValue === "0.00") return false;
    return true;
  };

  const verifyFilledValue = () =>
    totalLca &&
    unFormatNumber(totalLca) >= unFormatNumber(filledValue) &&
    isFilledValue() &&
    checkAvailabilityHour(availableDateRanges);

  const checkIfIsFullWithdrawal = () => {
    if (unFormatNumber(filledValue) > limitLca.lcaRedemptionLimit) {
      changeState("limitReached", true);
      return null;
    }
    if (unFormatNumber(filledValue) !== unFormatNumber(totalLca)) {
      changeState("openPriorityBottomSheet", true);
    }
    if (unFormatNumber(filledValue) === unFormatNumber(totalLca)) {
      changeState("valueToBeRescued", unFormatNumber(filledValue));
      goToStep(3);
      getWithdrawalDetails(currentStep);
    }
  };

  const goToPriorityStep = () => {
    let priority = priorities.find(
      priority => priority.name === selectedPriority
    );

    changeState("openPriorityBottomSheet", false);
    document.getElementsByTagName("body")[0].style.overflow = "visible";
    changeState("currentPriority", priority);
    getMaxAndMinValues(unFormatNumber(filledValue), priority);
    goToStep(2);
  };

  return (
    <React.Fragment>
      <ContentWrapper>
        <BorderedWrapper>
          <AccountText>
            {translate("POSITION_FUNDS_AVAILABLE_FOR_REDEMPTION")}
          </AccountText>
          <ValueInfo>
            <Currency>{BRL_CURRENCY}</Currency>
            <Value>
              {loading ? (
                <ShimmerLoading darker width={50} height={14} />
              ) : (
                totalLca
              )}
            </Value>
          </ValueInfo>
        </BorderedWrapper>

        <WithdrawalValueLabel>
          {translate("FIXED_INCOME_WITHDRAWAL_VALUE")}
        </WithdrawalValueLabel>

        <AmmountInput
          config={{
            operation: "redeem",
            ammountValue: filledValue,
            available: totalLca && unFormatNumber(totalLca),
            invalidMessages: {
              aboveAvailable: `${translate(
                "POSITION_FUNDS_GREATER_THAN_REDEEM_BALANCE"
              )}`
            }
          }}
          showTotalButton
          blockAddValues
          onChange={changeAmmount}
          increments={{
            ranges: [5000, 10000, 20000, 30000, 50000],
            totalLabel: translate("AVAILABLE_AMOUNT")
          }}
          loading={loading}
        />

        {availableDateRanges && (
          <AlertMessage
            icon="Attention"
            type="neutral"
            spacing={{
              top: "m",
              bottom: "m",
              right: "xxs",
              left: "xxs"
            }}
          >
            {mountMessageWithAvailabilityTime(availableDateRanges)}
          </AlertMessage>
        )}
      </ContentWrapper>
      <StickyWrapper>
        <Separator />
        <BtnWrapper>
          <Button
            type="outline"
            dataTest="backToPositionsFixedIncome"
            onClick={() => redirect("/investments/positions/fixed-income")}
            spacing={{ top: "s", bottom: "s", right: "xxs", left: "s" }}
          >
            {translate("FIXED_INCOME_WITHDRAWAL_BACK")}
          </Button>
          <Button
            dataTest="continueToNextStep"
            onClick={() => checkIfIsFullWithdrawal()}
            disabled={!verifyFilledValue()}
            spacing={{ top: "s", bottom: "s", right: "s", left: "xxs" }}
          >
            {translate("FIXED_INCOME_WITHDRAWAL_CONTINUE")}
          </Button>
        </BtnWrapper>
      </StickyWrapper>
      {openPriorityBottomSheet && (
        <AnimatedBottonSheet
          isOpen={openPriorityBottomSheet}
          velocity={0.2}
          head={{
            title: translate("FIXED_INCOME_WITHDRAWAL_SELECT_PRIORITY"),
            close: true
          }}
          onClickInBack={() => changeState("openPriorityBottomSheet", false)}
        >
          <PrioritySelectionWrapper>
            {priorities &&
              priorities.length &&
              priorities.map((priority, index) => {
                return (
                  <RadioWrapper key={index}>
                    <Radio
                      dataTestLabel={`Priority_${index}`}
                      label={priority.name}
                      upperLabel={translate(
                        "FIXED_INCOME_WITHDRAWAL_PRIORITIZE_BY"
                      )}
                      onChange={e => setSelectedPriority(e.target.value)}
                      name="number"
                      value={priority.name}
                      checked={priority.name === selectedPriority}
                      disabled={false}
                    />
                    {index !== priorities.length - 1 && (
                      <React.Fragment>
                        <Space>
                          <Separator />
                        </Space>
                        <Separator />
                      </React.Fragment>
                    )}
                  </RadioWrapper>
                );
              })}
            <Button
              dataTest="continueToPriorityStep"
              onClick={() => goToPriorityStep()}
              spacing={{ top: "s", bottom: "s", right: "s", left: "xxs" }}
            >
              {translate("FIXED_INCOME_WITHDRAWAL_CONTINUE")}
            </Button>
          </PrioritySelectionWrapper>
        </AnimatedBottonSheet>
      )}
      <AnimatedBottonSheet
        isOpen={limitReached}
        head={{
          title: translate("TED_LIMIT_REACHED")
        }}
        velocity={0.3}
      >
        <ModalWrapper>
          <ModalMessage data-test="lcaLimitReached">
            {translate("LCA_LIMIT_REACHED_MSG1")}
          </ModalMessage>
          <ModalMessage>{translate("LCA_LIMIT_REACHED_MSG2")}</ModalMessage>
        </ModalWrapper>
        <HorizontalLine />
        <WrapperButton>
          <Button
            type="primary"
            spacing={{ top: "xs", bottom: "l", right: "s", left: "s" }}
            dataTest="ButtonCloseLimitReachedModal"
            onClick={() => changeState("limitReached", false)}
          >
            {translate("UNDERSTOOD")}
          </Button>
        </WrapperButton>
      </AnimatedBottonSheet>
    </React.Fragment>
  );
}

export default FormStep;
