import React, { Fragment, useState, useContext } from "react";
import { Button } from "react-bocombbm-components";
import { InstanceContext } from "../IndividualWireTransfer";
import {
  AccTitle,
  Separator,
  StickyWrapper,
  FormWrapper,
  StepVisibility,
  BtnWrapper,
  AmmountWrapper
} from "../styles";
import {
  FillStepWrapper,
  ModalWrapper,
  ModalMessage,
  HorizontalLine,
  WrapperButton
} from "./styles";
import AmmountInput from "../../../common/AmmountInput";
import { translate } from "../../../../utils/i18n";
import { checkValidCpfAndCnpj } from "../../../../utils/validations/input";
import AccountSelectorBottomSheet from "../../../common/AccountSelectorBottomSheet";
import AnimatedBottonSheet from "../../../common/AnimatedBottomSheet";
import { checkBank } from "../../../../utils/validations/EFT";
import createLogError from "../../../../utils/createLogError";
import {
  unFormatNumber,
  formatNumberWithoutCurrency
} from "../../../../utils/formatNumber";
import TransferTabs from "../TransferTabs";
import { blue20 } from "../../../../styles/settings";

function FillStep({ stepForward, currentStep }) {
  const {
    props: {
      handleUserInputFavoredDataBank,
      handleUserInputFavoredData,
      handleUserFavoredDataThird,
      handleIsThirdFavored,
      handleIsFavoredContactList,
      transferData,
      banksList,
      favoredData,
      loading,
      userInfo,
      favoredAccounts,
      limitTed
    },
    state: {
      selectedAccount,
      commonValidToMoveOn,
      disableForward,
      validAsScheduled,
      isScheduled,
      accounts,
      positionSelectedTab,
      selectedPeopleData,
      selectedPeopleAccountsData,
      selectedPeople,
      selectedAccounts,
      validToMoveOn,
      tabs
    },
    setStateValue,
    changeOriginAccount,
    changeAmmount,
    clearTabsData,
    changeSelectedMenu,
    checkFavoredAccounts,
    initialDate
  } = useContext(InstanceContext);

  const [limitReached, setLimitReached] = useState(false);

  React.useEffect(() => {
    if (currentStep === 1) {
      setStateValue("validToMoveOn", {
        account: favoredData.account,
        verifyDigit: favoredData.verifyDigit,
        agency: favoredData.agency
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep]);

  React.useEffect(() => {
    const inputs = document
      .getElementById("fillWrapper")
      .querySelectorAll("input[type=text]");

    inputs.forEach((_, index) => {
      const item = inputs[index];
      item.tabIndex = index + 1;
      if (index > 3) return;
      item.addEventListener("keypress", function(e) {
        if (e.key == "Enter") {
          e.preventDefault();
          let nextInput = document.querySelectorAll(
            '[tabIndex="' + (this.tabIndex + 1) + '"]'
          );
          if (!nextInput.length)
            nextInput = document.querySelectorAll('[tabIndex="1"]');

          nextInput[0].scrollIntoView({ block: "center" });
          nextInput[0].focus();
        }
      });
    });
    getNextAndFocus(1);
  }, []);

  const changeAndCheckField = (event, validationMethod) => {
    const value = event.target.value;
    const field = event.target.name;
    const valid = validationMethod(value);

    setStateValue("validToMoveOn", { ...validToMoveOn, [field]: valid });
    handleUserInputFavoredData(event);

    return valid;
  };

  const getNextAndFocus = tabIndex => {
    setTimeout(() => {
      const nextInput = document.querySelectorAll(`[tabIndex="${tabIndex}"]`);

      nextInput[0].scrollIntoView({ block: "center" });
      nextInput[0].focus();
    }, 0);
  };

  const changeAndCheckBankName = bank => {
    const valid = checkBank(bank.name, banksList) != null;
    setStateValue("validToMoveOn", { ...validToMoveOn, name: valid });
    handleUserInputFavoredDataBank(bank);
  };

  const changeAndCheckThirdFavoredFullname = thirdData => {
    setStateValue("validToMoveOn", {
      ...validToMoveOn,
      thirdFavoredFullName:
        thirdData.target.value !== "" ? thirdData.target.value : null
    });
    handleUserFavoredDataThird(thirdData);
  };

  const changeAndCheckThirdFavoredDocument = thirdData => {
    const value = thirdData.target.value;

    setStateValue("validToMoveOn", {
      ...validToMoveOn,
      thirdFavoredDocument: value
        ? checkValidCpfAndCnpj(value)
          ? value
          : null
        : null
    });

    handleUserFavoredDataThird(thirdData);
  };

  const enableContinueButton = () => {
    const localKeys = Object.keys(validToMoveOn);
    const commonKeys = Object.keys(commonValidToMoveOn);
    const enableButton =
      localKeys.every(key => !!validToMoveOn[key]) &&
      commonKeys.every(key => !!commonValidToMoveOn[key]);
    return enableButton;
  };

  const changeAccountNumber = event => {
    changeOriginAccount(event);
    getNextAndFocus(1);
  };

  try {
    if (Object.keys(selectedAccount).length === 0) {
      throw new Error("This user has no accounts");
    }

    return (
      <FillStepWrapper>
        {currentStep === 1 && <StepVisibility id="FillStep" />}
        {currentStep === 1 && (
          <Fragment>
            <FormWrapper id="fillWrapper">
              <AccountSelectorBottomSheet
                initialDate={initialDate}
                accounts={accounts}
                selectedAccount={selectedAccount}
                changeAccount={changeAccountNumber}
              />
              <AmmountWrapper>
                <AccTitle backgroundColor={blue20}>
                  {translate("PROVIDE_VALUE")}
                </AccTitle>
                <AmmountInput
                  config={{
                    ammountValue: transferData && transferData.value,
                    available:
                      selectedAccount && selectedAccount.availableBalance,
                    invalidMessages: {
                      aboveAvailable: translate("INSUFFICIENT_AMMOUNT_MESSAGE")
                    }
                  }}
                  onChange={changeAmmount}
                  showTotalButton
                  increments={{
                    ranges: [1000.0, 5000.0, 10000.0, 30000.0, 50000.0],
                    totalLabel: translate("AVAILABLE_AMOUNT")
                  }}
                  backgroundColor={blue20}
                />
              </AmmountWrapper>
            </FormWrapper>

            <TransferTabs
              tabs={tabs}
              favoredData={favoredData}
              banksList={banksList}
              changeAndCheckThirdFavoredFullname={
                changeAndCheckThirdFavoredFullname
              }
              changeAndCheckThirdFavoredDocument={
                changeAndCheckThirdFavoredDocument
              }
              changeAndCheckBankName={changeAndCheckBankName}
              changeAndCheckField={changeAndCheckField}
              checkFavoredAccounts={checkFavoredAccounts}
              loading={loading}
              favoredAccounts={favoredAccounts}
              setStateValue={setStateValue}
              positionSelectedTab={positionSelectedTab}
              selectedPeopleData={selectedPeopleData}
              selectedPeopleAccountsData={selectedPeopleAccountsData}
              selectedPeople={selectedPeople}
              selectedAccounts={selectedAccounts}
              clearTabsData={clearTabsData}
              changeSelectedMenu={changeSelectedMenu}
              userInfo={userInfo}
              handleIsThirdFavored={handleIsThirdFavored}
              handleIsFavoredContactList={handleIsFavoredContactList}
            />
            <StickyWrapper>
              <Separator />
              <BtnWrapper>
                <Button
                  dataTest="continueButton"
                  onClick={
                    transferData.value !== undefined &&
                    unFormatNumber(transferData.value) > limitTed.tedLimitPf
                      ? () => setLimitReached(true)
                      : stepForward
                  }
                  disabled={
                    isScheduled
                      ? !enableContinueButton() ||
                        disableForward ||
                        !validAsScheduled
                      : !enableContinueButton()
                  }
                  loading={loading}
                  spacing={{ top: "s", bottom: "s", right: "s", left: "s" }}
                >
                  {translate("CONTINUE")}
                </Button>
              </BtnWrapper>
            </StickyWrapper>
          </Fragment>
        )}

        <AnimatedBottonSheet
          isOpen={limitReached}
          head={{
            title: translate("TED_LIMIT_REACHED")
          }}
          velocity={0.3}
        >
          <ModalWrapper>
            <ModalMessage data-test="tedLimitReached">
              {`${translate(
                "TED_LIMIT_REACHED_MSG1"
              )} ${formatNumberWithoutCurrency(limitTed.tedLimitPf, {
                digits: 2
              })} ${translate("TED_LIMIT_REACHED_MSG1.2")}`}
            </ModalMessage>
            <ModalMessage>{translate("TED_LIMIT_REACHED_MSG2")}</ModalMessage>
          </ModalWrapper>
          <HorizontalLine />
          <WrapperButton>
            <Button
              type="primary"
              spacing={{ top: "xs", bottom: "l", right: "s", left: "s" }}
              dataTest="ButtonCloseLimitReachedModal"
              onClick={() => setLimitReached(false)}
            >
              {translate("UNDERSTOOD")}
            </Button>
          </WrapperButton>
        </AnimatedBottonSheet>
      </FillStepWrapper>
    );
  } catch (error) {
    createLogError({
      message: error.message,
      status: "",
      corpId: userInfo.corpId
    });
  }
}

export default FillStep;
