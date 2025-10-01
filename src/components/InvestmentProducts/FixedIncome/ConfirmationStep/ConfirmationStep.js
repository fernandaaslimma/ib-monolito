import React, { Fragment } from "react";
import { Button, Icon } from "react-bocombbm-components";
import { translate } from "../../../../utils/i18n";
import HideableValue from "../../../common/HideableValue";
import { BRASILIA_UTC_OFFSET, BRL_CURRENCY } from "../../../../utils/constants";
import { InstanceContext } from "../fixedIncomeContext";
import { rem, remFontSize } from "../../../../styles/tools";
import formatDate from "../../../../utils/formatDate";
import {
  ResumeInfoWrapper,
  AccountBalance,
  AccountText,
  Value,
  ClickableItem,
  ResumeAmmount,
  Currency,
  ConfirmationLabel,
  ConfirmationInfoWrapper,
  ResumeAmmountValue,
  ConfirmationValue,
  ApplicationResume,
  ContainerWrapper,
  PendencieContent,
  PendencieContentBold,
  BottomSheetWrapper,
  ContentWrapper
} from "./styles";
import {
  StepVisibility,
  StickyWrapper,
  BtnWrapper,
  Separator
} from "../styles";
import moment from "moment";
import AnimatedBottonSheet from "../../../common/AnimatedBottomSheet";

function ConfirmationStep({ currentStep, stepBack, goToStep }) {
  const {
    props: { serverTime },
    state: {
      filledValue,
      selectedAccount,
      onGoingTransactions,
      selectedProduct,
      onGoingBottomSheet,
      loadingButtonInvestRequest
    },
    verifyOnGoingTransactions,
    resetStateOnGoingTransaction,
    createOperationFunction,
    changeState
  } = React.useContext(InstanceContext);

  React.useEffect(() => {
    onGoingTransactions !== null && changeState("onGoingBottomSheet", true);
  }, [onGoingTransactions, changeState]);

  const [hideValue, setHideValue] = React.useState(true);

  let confirmationInfo;
  if (selectedProduct) {
    confirmationInfo = [
      { label: "INVESTMENTS_FI_APPLICATION_VALUE", value: filledValue },
      {
        label: "INVESTMENTS_FI_TYPE_APPLICATION",
        value: selectedProduct["productLabel"]
      },
      { label: "INVESTMENTS_FI_ISSUER", value: selectedProduct["issuer"] },
      { label: "INVESTMENTS_FI_TAX", value: selectedProduct["yieldLabel"] },
      {
        label: "INVESTMENTS_FI_APPLICATION_DATE",
        value: moment(serverTime)
          .utcOffset(BRASILIA_UTC_OFFSET)
          .format("YYYY-MM-DD")
      },
      {
        label: "INVESTMENTS_FI_LIQUIDITY",
        value: selectedProduct["liquidityLabel"]
      },
      {
        label: "INVESTMENTS_FI_MATURITY_DATE",
        value: selectedProduct["maturityDate"]
      }
    ];
  }

  const resetOnGoingTransactionAndCloseModal = () => {
    resetStateOnGoingTransaction();
    changeState("onGoingBottomSheet", false);
  };

  const createSubscriptionAndCloseModal = () => {
    resetStateOnGoingTransaction();
    changeState("onGoingBottomSheet", false);
    createOperationFunction(goToStep);
  };

  const renderInfo = info => {
    let { label, value } = info;
    if (
      label === "INVESTMENTS_FI_MATURITY_DATE" ||
      label === "INVESTMENTS_FI_APPLICATION_DATE"
    ) {
      return `${formatDate(value)}`;
    } else {
      return value;
    }
  };

  return (
    currentStep === 4 && (
      <Fragment>
        <StepVisibility id="ConfirmationStep" />
        <ContainerWrapper>
          <ResumeInfoWrapper>
            <AccountBalance>
              <AccountText>{translate("BALANCE")}</AccountText>
              <Value>
                <HideableValue
                  hide={hideValue}
                  currency={BRL_CURRENCY}
                  value={selectedAccount.availableBalance}
                  currencyColor="#99B5C6"
                  styles={`font-size: ${remFontSize(
                    14
                  )}; color: "#2d4758"; font-family: Lato Bold; margin-right: ${rem(
                    12
                  )}`}
                />
                {hideValue ? (
                  <ClickableItem onClick={() => setHideValue(false)}>
                    <Icon
                      type="View"
                      width={20}
                      height={20}
                      cursorPointer
                      color="#3976CF"
                    />
                  </ClickableItem>
                ) : (
                  <ClickableItem onClick={() => setHideValue(true)}>
                    <Icon
                      type="HideView"
                      width={20}
                      height={20}
                      cursorPointer
                      color="#3976CF"
                    />
                  </ClickableItem>
                )}
              </Value>
            </AccountBalance>
            <ApplicationResume>
              {translate("INVESTIMENT_FI_APPLICATION_RESUME")}
            </ApplicationResume>
            {confirmationInfo.map((item, index) => {
              return (
                <ConfirmationInfoWrapper
                  key={index}
                  className="ConfirmationInfoWrapper"
                >
                  <ConfirmationLabel>
                    {translate(`${item.label}`)}
                  </ConfirmationLabel>
                  {item.label === "INVESTMENTS_FI_APPLICATION_VALUE" ? (
                    <ResumeAmmount>
                      <Currency>{BRL_CURRENCY}</Currency>
                      <ResumeAmmountValue>{item.value}</ResumeAmmountValue>
                    </ResumeAmmount>
                  ) : (
                    <ConfirmationValue>{renderInfo(item)}</ConfirmationValue>
                  )}
                </ConfirmationInfoWrapper>
              );
            })}
          </ResumeInfoWrapper>
          <StickyWrapper>
            <Separator />
            <BtnWrapper>
              <Button
                type="outline"
                onClick={stepBack}
                disabled={loadingButtonInvestRequest}
                spacing={{ top: "s", bottom: "s", right: "xxs", left: "s" }}
              >
                {translate("INVESTMENTS_FI_BACK")}
              </Button>
              <Button
                dataTest="continueInvestButton"
                onClick={() =>
                  verifyOnGoingTransactions(
                    selectedProduct.id,
                    serverTime,
                    goToStep
                  )
                }
                loading={loadingButtonInvestRequest}
                disabled={loadingButtonInvestRequest}
                spacing={{ top: "s", bottom: "s", right: "s", left: "s" }}
              >
                {translate("CONTINUE")}
              </Button>
            </BtnWrapper>
          </StickyWrapper>
        </ContainerWrapper>
        <AnimatedBottonSheet
          isOpen={onGoingBottomSheet}
          velocity={0.3}
          head={{
            title: translate("INVESTMENTS_FI_ONGOING_TRANSACTIONS_MODAL_TITLE"),
            close: true
          }}
          onClickInBack={() => resetOnGoingTransactionAndCloseModal()}
        >
          <BottomSheetWrapper>
            <ContentWrapper>
              <PendencieContent data-test="transactionInMovement">
                {translate("INVESTMENTS_FI_ONGOING_TRANSACTIONS_1")}

                <PendencieContentBold>
                  {translate("INVESTMENTS_FI_ONGOING_TRANSACTIONS_2")}
                </PendencieContentBold>
              </PendencieContent>
            </ContentWrapper>
            <StickyWrapper>
              <Separator />
              <BtnWrapper>
                <Button
                  dataTest="noButton"
                  type="outline"
                  onClick={() => resetOnGoingTransactionAndCloseModal()}
                  spacing={{ top: "s", bottom: "s", right: "xxs", left: "s" }}
                >
                  {translate("FUNDS_NO")}
                </Button>
              </BtnWrapper>
              <BtnWrapper>
                <Button
                  dataTest="yesNewTransactionButton"
                  onClick={() => createSubscriptionAndCloseModal()}
                  disabled={loadingButtonInvestRequest}
                  spacing={{ top: "s", bottom: "s", right: "s", left: "s" }}
                >
                  {translate("FUNDS_YES")}
                </Button>
              </BtnWrapper>
            </StickyWrapper>
          </BottomSheetWrapper>
        </AnimatedBottonSheet>
      </Fragment>
    )
  );
}
export default ConfirmationStep;
