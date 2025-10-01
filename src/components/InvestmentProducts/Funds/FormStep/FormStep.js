import React, { useContext, useState, useEffect } from "react";
import { InstanceContext } from "../fundsContext";
import { Icon, Button } from "react-bocombbm-components";
import {
  AccountWrapper,
  Account,
  AccountBalanceWrapper,
  FundAmmount,
  FormWrapper,
  Type,
  Name,
  ContainerWrapperAccounts,
  TotalAvailableWrapper,
  AccountText,
  Currency,
  Value
} from "./styles";
import {
  StickyWrapper,
  BtnWrapper,
  Separator,
  StepVisibility,
  ClickableItem
} from "../styles";
import { remFontSize } from "../../../../styles/tools";
import { translate } from "../../../../utils/i18n";
import { hotjarTag } from "../../../../utils/hotjarFun";
import { BRL_CURRENCY } from "../../../../utils/constants";
import HideableValue from "../../../common/HideableValue";
import AmmountInput from "../../../common/AmmountInput";
import AnimatedBottonSheet from "../../../common/AnimatedBottomSheet";
import AccountSelector from "../../../common/AccountSelector";
import { neutral200 } from "../../../../styles/settings";
import DetailsCard from "../../DetailsCard";
import formatNumber, { unFormatNumber } from "../../../../utils/formatNumber";
import { ContainerWrapper } from "../../styles";

function FormStep({ stepForward, currentStep, stepBack }) {
  const {
    props: { accounts, serverTime, funds },
    state: { filledValue, selectedAccount, selectedFund, chosenOperation },
    selectAccount,
    changeAmmount,
    resetInvestability,
    checkFundIsInMoviment
  } = useContext(InstanceContext);
  const initialInvestmentToCompare = () => {
    if (selectedFund && minimum) {
      if (minimum.length > 0) {
        return selectedFund.minimumTransaction;
      } else {
        return selectedFund.initialInvestment;
      }
    }
  };
  const filteredAccounts =
    selectedFund && selectedFund.investmentDetails
      ? accounts.filter(
          item => item.holderId === selectedFund.investmentDetails.clientId
        )
      : accounts;
  const minimum =
    selectedFund && funds.filter(item => item.fundCnpj === selectedFund.cnpj);
  const availableBalanceToCompare =
    selectedAccount && selectedAccount.availableBalance;
  const investmentValueToCompare = filledValue && unFormatNumber(filledValue);

  const minimumTransactionToCompare =
    selectedFund && selectedFund.minimumTransaction;
  const grossBalanceToCompare =
    selectedFund &&
    selectedFund.investmentDetails &&
    selectedFund.investmentDetails.grossBalance;
  const minimumBalanceToCompare =
    selectedFund &&
    selectedFund.investmentDetails &&
    selectedFund.minimumBalance;
  const redeemValueToCompare = filledValue && unFormatNumber(filledValue);

  const [hideValue, setHideValue] = useState(true);
  const [openAccountSelection, setOpenAccountSelection] = useState(false);
  const [selectedModeledData, setModeledData] = useState({});

  const changeAccount = event => {
    selectAccount(event);
    setOpenAccountSelection(false);
    if (chosenOperation === "redeem") {
      stepForward();
    }
  };

  const verifyInputInvestAmmount = () =>
    investmentValueToCompare >= initialInvestmentToCompare() &&
    investmentValueToCompare <= availableBalanceToCompare;

  const verifyInputRedeemAmmount = () =>
    (redeemValueToCompare >= minimumTransactionToCompare &&
      redeemValueToCompare <= grossBalanceToCompare &&
      redeemValueToCompare < grossBalanceToCompare - minimumBalanceToCompare) ||
    redeemValueToCompare === grossBalanceToCompare;

  useEffect(() => {
    //Detect if component is in viewport and tag Hotjar path
    var component = document.querySelector("#FormStep");
    component && hotjarTag("investments/products/funds/form");
  });

  useEffect(() => {
    selectedFund &&
      setModeledData(
        chosenOperation === "redeem"
          ? {
              minimumTransaction: selectedFund.minimumTransaction,
              minimumBalance: selectedFund.minimumBalance,
              POSITION_FUNDS_GROSS_BALANCE:
                selectedFund.investmentDetails.grossBalance
            }
          : {
              initialInvestment: selectedFund.initialInvestment,
              minimumTransaction: selectedFund.minimumTransaction,
              minimumBalance: selectedFund.minimumBalance,
              subsConversionDays: selectedFund.subscription.conversionDays
            }
      );
  }, [selectedFund, chosenOperation]);

  const continueButtonAction = () => {
    checkFundIsInMoviment(selectedFund.name, serverTime);
    if (chosenOperation === "redeem") {
      filteredAccounts.length > 1
        ? setOpenAccountSelection(true)
        : stepForward();
    } else {
      stepForward();
    }
  };

  const resetAndGoBack = () => {
    resetInvestability();
    stepBack();
  };

  const continueButton = () => {
    if (chosenOperation === "redeem") {
      return (
        <Button
          dataTest="continueRedeemButton"
          onClick={() => continueButtonAction()}
          spacing={{ top: "s", bottom: "s", right: "s", left: "xxs" }}
          disabled={!verifyInputRedeemAmmount()}
        >
          {translate("CONTINUE")}
        </Button>
      );
    } else {
      return (
        <Button
          dataTest="continueInvestButton"
          onClick={() => continueButtonAction()}
          spacing={{ top: "s", bottom: "s", right: "s", left: "xxs" }}
          disabled={!verifyInputInvestAmmount()}
        >
          {translate("CONTINUE")}
        </Button>
      );
    }
  };

  const inputAmmount = () => {
    if (chosenOperation === "redeem") {
      return (
        <AmmountInput
          config={{
            operation: "redeem",
            ammountValue: filledValue,
            available: selectedFund.investmentDetails.grossBalance,
            minimum: selectedFund.minimumTransaction,
            minimumBalance: selectedFund.minimumBalance,
            invalidMessages: {
              aboveAvailable: `${translate(
                "POSITION_FUNDS_GREATER_THAN_REDEEM_BALANCE"
              )}`,
              aboveMinimumBalance: `${translate(
                "POSITION_FUNDS_MINIMUM_PERMANENCE_BALANCE"
              )} ${BRL_CURRENCY} ${formatNumber(selectedFund.minimumBalance, {
                digits: 2
              })}`,
              belowMinimum: `${translate(
                "POSITION_FUNDS_MINIMUM_REDEMPTION_AMOUNT"
              )} ${BRL_CURRENCY} ${formatNumber(
                selectedFund.minimumTransaction,
                {
                  digits: 2
                }
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
        />
      );
    } else {
      return (
        <AmmountInput
          config={{
            operation: "invest",
            ammountValue: filledValue,
            available: selectedAccount.availableBalance,
            minimum:
              minimum.length > 0
                ? selectedFund.minimumTransaction
                : selectedFund.initialInvestment,
            invalidMessages: {
              aboveAvailable: translate("UNSUFICIENT_BALANCE"),
              belowMinimum: `${translate(
                "MINIMUM_VALUE"
              )}${BRL_CURRENCY} ${formatNumber(
                minimum.length > 0
                  ? selectedFund.minimumTransaction
                  : selectedFund.initialInvestment,
                {
                  digits: 2
                }
              )}`
            }
          }}
          blockAddValues
          onChange={changeAmmount}
          increments={{
            ranges: [5000, 10000, 20000],
            totalLabel: translate("AVAILABLE_AMOUNT")
          }}
        />
      );
    }
  };

  return (
    currentStep === 3 && (
      <ContainerWrapper>
        <StepVisibility id="FormStep" />
        {chosenOperation === "invest" && selectedAccount.accountNumber && (
          <AccountWrapper>
            <Account data-test="accountNumber">
              {`${translate("STATEMENTS_ACCOUNT")} ${
                selectedAccount.accountNumber
              }`}
              {filteredAccounts.length > 1 && (
                <ClickableItem
                  onClick={() => setOpenAccountSelection(!openAccountSelection)}
                >
                  <Icon
                    dataTest="selectAccountButton"
                    spacing={{
                      bottom: "none",
                      left: "s",
                      right: "none",
                      top: "none"
                    }}
                    type="Arrow"
                    height="20"
                    width="20"
                  />
                </ClickableItem>
              )}
            </Account>
            <AccountBalanceWrapper>
              <HideableValue
                value={selectedAccount.availableBalance}
                currency={BRL_CURRENCY}
                styles={`flex-grow: 1; font-size: ${remFontSize(
                  26
                )}; font-family: "Lato Bold"`}
                digits={2}
                hide={hideValue}
              />
              <ClickableItem onClick={() => setHideValue(!hideValue)}>
                <Icon
                  data-test="hideableValueIcon"
                  type={hideValue ? "View" : "HideView"}
                  width={"26"}
                  height={"26"}
                  cursorPointer
                  color={neutral200}
                />
              </ClickableItem>
            </AccountBalanceWrapper>
          </AccountWrapper>
        )}

        {selectedFund &&
          selectedFund.investmentDetails &&
          chosenOperation === "redeem" && (
            <TotalAvailableWrapper data-test="avaiableForRedemption">
              <AccountText>
                {translate("POSITION_FUNDS_AVAILABLE_FOR_REDEMPTION")}
              </AccountText>
              <div>
                <Currency>{`${BRL_CURRENCY} `}</Currency>
                <Value data-test="value">
                  {formatNumber(selectedFund.investmentDetails.grossBalance, {
                    digits: 2
                  })}
                </Value>
              </div>
            </TotalAvailableWrapper>
          )}

        {currentStep === 3 && (
          <FormWrapper>
            <Type>{selectedFund.classTypeLabel}</Type>
            <Name>{selectedFund.name}</Name>

            <FundAmmount>
              {chosenOperation === "redeem"
                ? translate("POSITION_FUNDS_REDEMPTION_VALUE")
                : translate("INVEST_VALUE")}
            </FundAmmount>
            {inputAmmount()}
          </FormWrapper>
        )}

        <DetailsCard
          bottomSpace={"32px"}
          title={
            chosenOperation === "redeem"
              ? translate("POSITION_FUNDS_REDEMPTION_DETAILS")
              : translate("INVESTMENT_DETAILS")
          }
          list={selectedModeledData}
          dataTest={
            chosenOperation === "redeem"
              ? "redeemGeneralInfoCard"
              : "investGeneralInfoCard"
          }
        />

        <StickyWrapper>
          <Separator />
          <BtnWrapper>
            <Button
              type="outline"
              onClick={() => resetAndGoBack()}
              spacing={{ top: "s", bottom: "s", right: "xxs", left: "s" }}
            >
              {translate("FUNDS_BACK")}
            </Button>
            {continueButton()}
          </BtnWrapper>
        </StickyWrapper>

        <AnimatedBottonSheet
          isOpen={openAccountSelection}
          velocity={0.3}
          head={{
            title: translate("SELECT_ACCOUNT"),
            close: chosenOperation === "redeem" ? false : true
          }}
          onClickInBack={() => setOpenAccountSelection(false)}
        >
          <ContainerWrapperAccounts>
            <AccountSelector
              accounts={filteredAccounts}
              onChange={changeAccount}
              selectedAccountNumber={filteredAccounts[0].accountNumber}
              withButton
              isOpen={openAccountSelection}
            />
          </ContainerWrapperAccounts>
        </AnimatedBottonSheet>
      </ContainerWrapper>
    )
  );
}

export default FormStep;
