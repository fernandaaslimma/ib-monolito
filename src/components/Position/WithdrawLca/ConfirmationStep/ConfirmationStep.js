import React from "react";
import Icon from "react-bocombbm-components/dist/Icon";
import { gray200, neutral200 } from "../../../../styles/settings";
import { rem } from "../../../../styles/tools";
import { BRL_CURRENCY } from "../../../../utils/constants";
import formatNumber from "../../../../utils/formatNumber";
import formatDate from "../../../../utils/formatDate";
import { translate } from "../../../../utils/i18n";
import AccountSelector from "../../../common/AccountSelector";
import AnimatedBottonSheet from "../../../common/AnimatedBottomSheet";
import Card from "../../../common/Card";
import ShimmerLoading from "../../../common/ShimmerLoading";
import { WithdrawalValueLabel } from "../FormStep/styles";
import {
  BorderedWrapper,
  BtnWrapper,
  ContentWrapper,
  Separator,
  StickyWrapper
} from "../styles";
import { InstanceContext } from "../withdrawLcaContext";

import {
  SelectedAccount,
  WithdrawalCurrency,
  WithdrawalValue,
  WithdrawalValueInfo,
  LcaInformation,
  LcaInformationLine,
  Value,
  Label,
  CardWrapper,
  DetailsTitle,
  FixedButtonArea,
  RedemptionErrorMessage,
  RedemptionErrorMessageWrapper
} from "./styles";
import { Button } from "react-bocombbm-components";

function ConfirmationStep({ currentStep, goToStep }) {
  const {
    props: { accounts, responseLcaDetails },
    state: {
      loadingLcaDetails,
      valueToBeRescued,
      currentAccount,
      previous,
      loadingCreateWithdrawal,
      openMaxWithdrawalSheet,
      errorTitle,
      errorMessage
    },
    changeAccount,
    finalClickWithdrawal,
    changeState
  } = React.useContext(InstanceContext);

  let loadingArray = [1, 2, 3, 4, 5, 6, 7, 8];

  const [accountBottomSheet, setAccountBottomSheet] = React.useState(false);

  const changeAccountAndCloseSheet = e => {
    setAccountBottomSheet(false);
    changeAccount(e.target.value);
  };

  const getRandom = (max, min) => Math.random() * (max - min) + min;

  return (
    currentStep === 3 && (
      <React.Fragment>
        <ContentWrapper>
          <BorderedWrapper onClick={() => setAccountBottomSheet(true)}>
            <SelectedAccount>{`${translate(
              "FIXED_INCOME_WITHDRAWAL_ACCOUNT"
            )} ${currentAccount.accountNumber}`}</SelectedAccount>
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
          <WithdrawalValueLabel>
            {translate("FIXED_INCOME_WITHDRAWAL_VALUE")}
          </WithdrawalValueLabel>

          <WithdrawalValueInfo>
            <WithdrawalCurrency>{BRL_CURRENCY}</WithdrawalCurrency>
            <WithdrawalValue>{formatNumber(valueToBeRescued)}</WithdrawalValue>
          </WithdrawalValueInfo>

          <AnimatedBottonSheet
            isOpen={accountBottomSheet}
            velocity={0.2}
            head={{
              title: translate("FIXED_INCOME_WITHDRAWAL_SELECT_ACCOUNT"),
              close: true
            }}
            onClickInBack={() => setAccountBottomSheet(false)}
          >
            <AccountSelector
              accounts={accounts}
              onChange={e => changeAccountAndCloseSheet(e)}
              selectedAccountNumber={currentAccount.accountNumber}
              withButton
              isOpen={accountBottomSheet}
            />
          </AnimatedBottonSheet>

          <React.Fragment>
            <DetailsTitle data-test="withdrawalDetails">
              {translate("FIXED_INCOME_WITHDRAWAL_DETAILS")}
            </DetailsTitle>
            {loadingLcaDetails && (
              <React.Fragment>
                <CardWrapper>
                  <Card title="loading" icon="AssetPosition" loading>
                    {loadingArray.map((_, index) => {
                      return (
                        <LcaInformation key={index}>
                          <LcaInformationLine className={"LcaInformationLine"}>
                            <Label>
                              <ShimmerLoading
                                width={getRandom(20, 120)}
                                height={16}
                              />
                            </Label>
                            <Value>
                              <ShimmerLoading
                                darker
                                width={getRandom(20, 120)}
                                height={16}
                              />
                            </Value>
                          </LcaInformationLine>
                        </LcaInformation>
                      );
                    })}
                  </Card>
                </CardWrapper>
              </React.Fragment>
            )}
            {!loadingLcaDetails &&
              responseLcaDetails.map((item, index) => {
                return (
                  <CardWrapper key={index}>
                    <Card
                      key={index}
                      title={item.product}
                      icon="AssetPosition"
                      styles={`margin-bottom: ${rem(16)}`}
                      titleColor={gray200}
                      iconColor={gray200}
                      iconHeight={20}
                      iconWidth={20}
                    >
                      <LcaInformation>
                        <LcaInformationLine className={"LcaInformationLine"}>
                          <Label>
                            {translate("FIXED_INCOME_WITHDRAWAL_ISSUER")}
                          </Label>
                          <Value>{item.issuer}</Value>
                        </LcaInformationLine>
                        <LcaInformationLine className={"LcaInformationLine"}>
                          <Label>
                            {translate("FIXED_INCOME_WITHDRAWAL_ISSUE_DATE")}
                          </Label>
                          <Value>{formatDate(item.issueDate)}</Value>
                        </LcaInformationLine>
                        <LcaInformationLine className={"LcaInformationLine"}>
                          <Label>
                            {translate("FIXED_INCOME_WITHDRAWAL_DUE_DATE")}
                          </Label>
                          <Value>{formatDate(item.maturityDate)}</Value>
                        </LcaInformationLine>
                        <LcaInformationLine className={"LcaInformationLine"}>
                          <Label>
                            {translate("FIXED_INCOME_WITHDRAWAL_GROSS_AMOUNT")}
                          </Label>
                          <Value>
                            {`${BRL_CURRENCY} ${formatNumber(item.grossValue, {
                              digits: 2
                            })}`}
                          </Value>
                        </LcaInformationLine>
                        <LcaInformationLine className={"LcaInformationLine"}>
                          <Label>
                            {translate("FIXED_INCOME_WITHDRAWAL_NET_AMOUNT")}
                          </Label>
                          <Value>
                            {`${BRL_CURRENCY} ${formatNumber(
                              item.netValue
                                .toString()
                                .match(/^-?\d+(?:\.\d{0,2})?/)[0],
                              { digits: 2 }
                            )}`}
                          </Value>
                        </LcaInformationLine>
                        <LcaInformationLine className={"LcaInformationLine"}>
                          <Label>
                            {translate(
                              "FIXED_INCOME_WITHDRAWAL_QUANTITY_UNITY"
                            )}
                          </Label>
                          <Value>{item.quantity}</Value>
                        </LcaInformationLine>
                        <LcaInformationLine className={"LcaInformationLine"}>
                          <Label>
                            {translate("FIXED_INCOME_WITHDRAWAL_UNITY_PRICE")}
                          </Label>
                          <Value>
                            {`${BRL_CURRENCY} ${formatNumber(item.unitPrice, {
                              digits: 8
                            })}`}
                          </Value>
                        </LcaInformationLine>
                        <LcaInformationLine className={"LcaInformationLine"}>
                          <Label>{translate("FIXED_RATE")}</Label>
                          <Value>{item.formattedYield}</Value>
                        </LcaInformationLine>
                      </LcaInformation>
                    </Card>
                  </CardWrapper>
                );
              })}
          </React.Fragment>
        </ContentWrapper>
        <StickyWrapper>
          <Separator />
          <BtnWrapper>
            <Button
              type="outline"
              dataTest="backToPreviousStep"
              onClick={() => goToStep(previous)}
              disabled={loadingLcaDetails || loadingCreateWithdrawal}
              spacing={{ top: "s", bottom: "s", right: "xxs", left: "s" }}
            >
              {translate("FIXED_INCOME_WITHDRAWAL_BACK")}
            </Button>
            <Button
              dataTest="finishWithdraw"
              onClick={() => finalClickWithdrawal(goToStep)}
              disabled={loadingLcaDetails || loadingCreateWithdrawal}
              loading={loadingLcaDetails || loadingCreateWithdrawal}
              spacing={{ top: "s", bottom: "s", right: "s", left: "xxs" }}
            >
              {translate("FIXED_INCOME_WITHDRAWAL_CONTINUE")}
            </Button>
          </BtnWrapper>
        </StickyWrapper>
        <AnimatedBottonSheet
          data-test="createRedemption"
          isOpen={openMaxWithdrawalSheet}
          head={{
            title: errorTitle
          }}
          velocity={0.3}
          onClickInBack={() => changeState("openMaxWithdrawalSheet", false)}
        >
          <React.Fragment>
            <RedemptionErrorMessageWrapper>
              {errorMessage &&
                errorMessage.map((message, index) => (
                  <RedemptionErrorMessage
                    key={index}
                    className="RedemptionErrorMessage"
                  >
                    {message}
                  </RedemptionErrorMessage>
                ))}
            </RedemptionErrorMessageWrapper>
            <FixedButtonArea>
              <Button
                onClick={() => changeState("openMaxWithdrawalSheet", false)}
              >
                {translate("FIXED_INCOME_WITHDRAWAL_UNDERSTOOD")}
              </Button>
            </FixedButtonArea>
          </React.Fragment>
        </AnimatedBottonSheet>
      </React.Fragment>
    )
  );
}

export default ConfirmationStep;
