import React from "react";
import { Button } from "react-bocombbm-components";
import AlertMessage from "react-bocombbm-components/dist/AlertMessage";
import Icon from "react-bocombbm-components/dist/Icon";
import { neutral200 } from "../../../../styles/settings";
import { BRL_CURRENCY } from "../../../../utils/constants";
import { setFormatCurrency } from "../../../../utils/currency";
import formatNumber, {
  formatCNPJ,
  unFormatNumber
} from "../../../../utils/formatNumber";
import { translate } from "../../../../utils/i18n";
import { isIndividualUser } from "../../../../utils/roles";
import AnimatedBottonSheet from "../../../common/AnimatedBottomSheet";
import Radio from "../../../common/Radio";
import RadioButton from "../../../common/RadioButton";
import ShimmerLoading from "../../../common/ShimmerLoading";
import { InstanceContext } from "../withdrawLcaContext";

import {
  BorderedWrapper,
  BtnWrapper,
  ContentWrapper,
  Separator,
  StickyWrapper,
  RadioWrapper,
  Space,
  PrioritySelectionWrapper
} from "../styles";
import {
  SuggestionWrapper,
  Suggestion,
  SuggestionValue,
  SelectValues,
  PrioritizeInfo,
  PrioritizeLabel,
  PrioritizeValue,
  Wrapper,
  SegmentLoading
} from "./styles";

function PriorityStep({ currentStep, stepForward, goToStep }) {
  const {
    props: { availableDateRanges, accounts, priorities, totalMax, totalMin },
    state: {
      filledValue,
      openAccountSelectionBottomSheet,
      openSecondPriorityBottomSheet,
      loadingPriorities,
      currentPriority,
      currentAccount
    },
    getMaxAndMinValues,
    checkAvailabilityHour,
    changeState,
    changeAccount,
    mountMessageWithAvailabilityTime,
    getWithdrawalDetails
  } = React.useContext(InstanceContext);
  const [selectedValue, setSelectedValue] = React.useState(0);
  const [selectedAccount, setSelectedAccount] = React.useState(
    currentAccount.accountNumber
  );
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

  const renderNewValues = () => {
    let priority = priorities.find(
      priority => priority.name === selectedPriority
    );
    getMaxAndMinValues(unFormatNumber(filledValue), priority);
    changeState("openSecondPriorityBottomSheet", false);
    changeState("currentPriority", priority);
  };

  const goToConfirmationStep = () => {
    let selectedPositions =
      selectedValue === totalMax.totalMaxValue
        ? totalMax.maxPositions
        : totalMin.minPositions;
    changeAccount(selectedAccount);
    getWithdrawalDetails(currentStep, selectedPositions);
    changeState("openAccountSelectionBottomSheet", false);
    changeState("valueToBeRescued", selectedValue);
    changeState("previous", 2);
    stepForward();
  };

  return (
    currentStep === 2 && (
      <React.Fragment>
        <ContentWrapper>
          <BorderedWrapper
            onClick={() => changeState("openSecondPriorityBottomSheet", true)}
          >
            <PrioritizeInfo>
              <PrioritizeLabel>
                {translate("FIXED_INCOME_WITHDRAWAL_PRIORITIZE_BY")}
              </PrioritizeLabel>
              <PrioritizeValue>{currentPriority.name}</PrioritizeValue>
            </PrioritizeInfo>
            <Icon
              type="Arrow"
              color={neutral200}
              width="15"
              height="15"
              spacing={{
                bottom: "none",
                left: "none",
                right: "s",
                top: "none"
              }}
            />
          </BorderedWrapper>

          {loadingPriorities && (
            <React.Fragment>
              <SuggestionWrapper>
                <Suggestion>
                  <ShimmerLoading darker width={250} height={20} />
                  <SuggestionValue>
                    <ShimmerLoading darker width={30} height={20} />
                  </SuggestionValue>
                </Suggestion>
              </SuggestionWrapper>
              <SelectValues>
                <ShimmerLoading darker width={180} height={20} />
              </SelectValues>
            </React.Fragment>
          )}
          {!loadingPriorities &&
            unFormatNumber(filledValue) !== totalMax.totalMaxValue && (
              <SuggestionWrapper>
                <Suggestion>
                  {`${translate("CANT_EXACTLY_REDEEM")}`}
                  <SuggestionValue>{` ${translate(
                    "CURRENCY_UNIT"
                  )}${setFormatCurrency(filledValue)}.`}</SuggestionValue>
                </Suggestion>
              </SuggestionWrapper>
            )}
          <SelectValues>{`${translate("SELECT_APROX_VALUES")}:`}</SelectValues>

          {loadingPriorities ? (
            <React.Fragment>
              <SegmentLoading>
                <ShimmerLoading />
              </SegmentLoading>
              <SegmentLoading>
                <ShimmerLoading />
              </SegmentLoading>
            </React.Fragment>
          ) : (
            <Wrapper>
              {totalMax.totalMaxValue !== null && (
                <RadioButton
                  label={`${translate("CURRENCY_UNIT")} ${formatNumber(
                    totalMax.totalMaxValue
                      .toString()
                      .match(/^-?\d+(?:\.\d{0,2})?/)[0],
                    { digits: 2 }
                  )}`}
                  onChange={() => setSelectedValue(totalMax.totalMaxValue)}
                  checked={totalMax.totalMaxValue === selectedValue}
                  dataTest={`0_OptionButton`}
                />
              )}
              {totalMin.totalMinValue !== 0 &&
                totalMin.totalMinValue !== null && (
                  <RadioButton
                    label={`${translate("CURRENCY_UNIT")} ${formatNumber(
                      totalMin.totalMinValue
                        .toString()
                        .match(/^-?\d+(?:\.\d{0,2})?/)[0],
                      { digits: 2 }
                    )}`}
                    onChange={() => setSelectedValue(totalMin.totalMinValue)}
                    checked={totalMin.totalMinValue === selectedValue}
                    dataTest={`1_OptionButton`}
                  />
                )}

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

              {openSecondPriorityBottomSheet && (
                <AnimatedBottonSheet
                  isOpen={openSecondPriorityBottomSheet}
                  velocity={0.2}
                  head={{
                    title: translate("FIXED_INCOME_WITHDRAWAL_SELECT_PRIORITY"),
                    close: true
                  }}
                  onClickInBack={() => {
                    if (selectedPriority != currentPriority.name)
                      setSelectedPriority(currentPriority.name);
                    changeState("openSecondPriorityBottomSheet", false);
                  }}
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
                              onChange={e =>
                                setSelectedPriority(e.target.value)
                              }
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
                      dataTest="changePriority"
                      onClick={() => renderNewValues()}
                      spacing={{
                        top: "s",
                        bottom: "s",
                        right: "s",
                        left: "xxs"
                      }}
                    >
                      {translate("FIXED_INCOME_WITHDRAWAL_CONTINUE")}
                    </Button>
                  </PrioritySelectionWrapper>
                </AnimatedBottonSheet>
              )}

              {openAccountSelectionBottomSheet && (
                <AnimatedBottonSheet
                  isOpen={openAccountSelectionBottomSheet}
                  velocity={0.2}
                  head={{
                    title: translate("FIXED_INCOME_WITHDRAWAL_SELECT_ACCOUNT"),
                    close: true
                  }}
                  onClickInBack={() =>
                    changeState("openAccountSelectionBottomSheet", false)
                  }
                >
                  <PrioritySelectionWrapper>
                    {accounts &&
                      accounts.length &&
                      accounts.map((acc, index) => {
                        const { availableBalance } = acc;
                        const formatedBalance = formatNumber(availableBalance, {
                          digits: 2
                        });
                        const balanceLabel = translate("EFT_AVAILABLE_BALANCE");

                        const subLabels = !isIndividualUser()
                          ? [
                              `CNPJ: ${formatCNPJ(acc.document)}`,
                              `${balanceLabel}: ${BRL_CURRENCY}${formatedBalance}`
                            ]
                          : [
                              `${balanceLabel}: ${BRL_CURRENCY}${formatedBalance}`
                            ];
                        return (
                          <RadioWrapper key={index}>
                            <Radio
                              dataTestLabel={`Priority_${index}`}
                              label={acc.accountNumber}
                              subLabels={subLabels}
                              onChange={e => setSelectedAccount(e.target.value)}
                              name="number"
                              value={acc.accountNumber}
                              checked={acc.accountNumber === selectedAccount}
                              disabled={false}
                            />
                            {index !== accounts.length - 1 && (
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
                      onClick={() => goToConfirmationStep()}
                      spacing={{
                        top: "s",
                        bottom: "s",
                        right: "s",
                        left: "xxs"
                      }}
                    >
                      {translate("FIXED_INCOME_WITHDRAWAL_SAVE")}
                    </Button>
                  </PrioritySelectionWrapper>
                </AnimatedBottonSheet>
              )}
            </Wrapper>
          )}
        </ContentWrapper>
        <StickyWrapper>
          <Separator />
          <BtnWrapper>
            <Button
              type="outline"
              dataTest="backToFormStep"
              onClick={() => goToStep(1)}
              disabled={loadingPriorities}
              spacing={{ top: "s", bottom: "s", right: "xxs", left: "s" }}
            >
              {translate("FIXED_INCOME_WITHDRAWAL_BACK")}
            </Button>
            <Button
              dataTest="continueToConfirmationStep"
              onClick={() =>
                changeState("openAccountSelectionBottomSheet", true)
              }
              loading={loadingPriorities}
              disabled={
                selectedValue === 0 &&
                checkAvailabilityHour(availableDateRanges)
              }
              spacing={{ top: "s", bottom: "s", right: "s", left: "xxs" }}
            >
              {translate("FIXED_INCOME_WITHDRAWAL_CONTINUE")}
            </Button>
          </BtnWrapper>
        </StickyWrapper>
      </React.Fragment>
    )
  );
}

export default PriorityStep;
