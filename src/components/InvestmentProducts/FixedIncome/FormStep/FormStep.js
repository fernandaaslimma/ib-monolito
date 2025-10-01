import React from "react";
import { InstanceContext } from "../fixedIncomeContext";
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
  CardTitle,
  FormWrapperInfoCard,
  InfoWrapper,
  Label,
  InfoValue
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
import { BRL_CURRENCY } from "../../../../utils/constants";
import HideableValue from "../../../common/HideableValue";
import AmmountInput from "../../../common/AmmountInput";
import { neutral200 } from "../../../../styles/settings";
import formatNumber, { unFormatNumber } from "../../../../utils/formatNumber";
import { ContainerWrapper } from "../../styles";
import AnimatedBottonSheet from "../../../common/AnimatedBottomSheet";
import AccountSelector from "../../../common/AccountSelector";

function FormStep({ stepForward, currentStep, stepBack }) {
  const {
    props: { accounts },
    state: { filledValue, selectedAccount, selectedProduct, chosenOperation },
    selectAccount,
    changeAmmount
  } = React.useContext(InstanceContext);

  const [hideValue, setHideValue] = React.useState(true);
  const [openAccountSelection, setOpenAccountSelection] = React.useState(false);

  const minimumInvestmentToCompare =
    selectedProduct && selectedProduct.minimumSubscription;
  const maximumInvestmentToCompare =
    selectedProduct && selectedProduct.maximumSubscription;
  const availableBalanceToCompare =
    selectedAccount && selectedAccount.availableBalance;
  const investmentValueToCompare = filledValue && unFormatNumber(filledValue);

  const verifyInputInvestAmmount = () =>
    investmentValueToCompare >= minimumInvestmentToCompare &&
    investmentValueToCompare <= maximumInvestmentToCompare &&
    investmentValueToCompare <= availableBalanceToCompare;

  let lcaDetails;

  if (selectedProduct) {
    lcaDetails = [
      { label: "INVESTMENTS_FI_ISSUER", value: selectedProduct["issuer"] },
      { label: "INVESTMENTS_FI_TAX", value: selectedProduct["yieldLabel"] },
      {
        label: "INVESTMENTS_FI_MINIMUM_APPLICATION",
        value: selectedProduct["minimumSubscription"]
      },
      {
        label: "INVESTMENTS_FI_MAXIMUM_APPLICATION",
        value: selectedProduct["maximumSubscription"]
      },
      {
        label: "INVESTMENTS_FI_LIQUIDITY",
        value: selectedProduct["liquidityLabel"]
      },
      {
        label: "INVESTMENTS_FI_DEADLINE",
        value: selectedProduct["monthsToMaturityLabel"]
      }
    ];
  }

  const renderInfo = info => {
    let { label, value } = info;
    if (
      label === "INVESTMENTS_FI_MINIMUM_APPLICATION" ||
      label === "INVESTMENTS_FI_MAXIMUM_APPLICATION"
    ) {
      return `${BRL_CURRENCY} ${formatNumber(value)}`;
    } else {
      return value;
    }
  };

  const changeAccount = event => {
    selectAccount(event);
    setOpenAccountSelection(false);
  };

  const continueButtonAction = () => {
    stepForward();
  };

  const continueButton = () => {
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
  };

  const inputAmmount = () => {
    return (
      <AmmountInput
        config={{
          operation: "invest",
          ammountValue: filledValue,
          available: selectedAccount.availableBalance,
          minimum: selectedProduct.minimumSubscription,
          maximum: selectedProduct.maximumSubscription,
          invalidMessages: {
            aboveAvailable: translate("UNSUFICIENT_BALANCE"),
            belowMinimum: `${translate(
              "MINIMUM_VALUE"
            )}${BRL_CURRENCY} ${formatNumber(
              selectedProduct.minimumSubscription,
              {
                digits: 2
              }
            )}`,
            aboveMaximum: `${translate(
              "MAXIMUM_VALUE_FI"
            )}: ${BRL_CURRENCY} ${formatNumber(
              selectedProduct.maximumSubscription,
              {
                digits: 2
              }
            )}`
          }
        }}
        blockAddValues
        showTotalButton
        onChange={changeAmmount}
        increments={{
          ranges: [5000, 10000, 20000, 30000, 50000],
          totalLabel: translate("AVAILABLE_AMOUNT")
        }}
      />
    );
  };

  return (
    currentStep === 3 && (
      <ContainerWrapper>
        <StepVisibility id="FormStep" />
        <AccountWrapper>
          <Account data-test="accountNumber">
            {`${translate("STATEMENTS_ACCOUNT")} ${
              selectedAccount.accountNumber
            }`}
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

        <FormWrapper>
          <Type>{selectedProduct.productLabel}</Type>
          <Name>{selectedProduct.issuer}</Name>

          <FundAmmount>{translate("INVESTMENT_VALUE")}</FundAmmount>
          {inputAmmount()}

          <CardTitle>{translate("GENERAL_INFO_FI")}</CardTitle>
          <FormWrapperInfoCard>
            {lcaDetails.map((item, index) => {
              return (
                <InfoWrapper className="InfoWrapper" key={index}>
                  <Label>{translate(`${item.label}`)}</Label>
                  <InfoValue>{renderInfo(item)}</InfoValue>
                </InfoWrapper>
              );
            })}
          </FormWrapperInfoCard>
        </FormWrapper>

        <StickyWrapper>
          <Separator />
          <BtnWrapper>
            <Button
              type="outline"
              onClick={() => stepBack()}
              spacing={{ top: "s", bottom: "s", right: "xxs", left: "s" }}
            >
              {translate("INVESTMENTS_FI_BACK")}
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
              accounts={accounts}
              onChange={changeAccount}
              selectedAccountNumber={selectedAccount.accountNumber}
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
