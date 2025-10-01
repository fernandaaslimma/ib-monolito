import React, { useContext, useState, Fragment } from "react";
import moment from "moment";
import Scheduler from "../Scheduler";
import { InstanceContext } from "../IndividualWireTransfer";
import HideableValue from "../../../common/HideableValue";
import {
  translate,
  getDateFieldPlaceholderByLocale
} from "../../../../utils/i18n";
import { AccountBalance, AccountText, Value, Text } from "./styles";
import {
  StickyWrapper,
  Separator,
  FormWrapper,
  StepVisibility,
  BtnWrapper,
  AccTitle
} from "../styles";
import { remFontSize, rem } from "../../../../styles/tools";
import { Button, Icon } from "react-bocombbm-components";
import TransferDetails from "../TransferDetails";
import { formatCPF, formatCNPJ } from "../../../../utils/formatNumber";
import { BRL_CURRENCY } from "../../../../utils/constants";

function ConfirmationStep({ goToStep, currentStep, stepBack }) {
  const {
    props: { favoredData, transferData, loading },
    state: {
      selectedAccount,
      commonValidToMoveOn,
      isScheduled,
      isThirdFavored,
      isNewAccount
    },
    tokenModal
  } = useContext(InstanceContext);

  const [hideValues, setHideValues] = useState(false);

  const dataFrom = [selectedAccount.accountNumber];
  const dataDest = favoredData
    ? [
        isThirdFavored
          ? favoredData.thirdFavoredFullName
          : isNewAccount
          ? selectedAccount.name
          : favoredData.name,
        isThirdFavored
          ? favoredData.thirdFavoredDocument &&
            (favoredData.thirdFavoredDocument.replace(/\D+/g, "").length === 11
              ? `${translate("TED_PF_CPF")} ${formatCPF(
                  favoredData.thirdFavoredDocument
                )}`
              : `${translate("TED_CNPJ")} ${formatCNPJ(
                  favoredData.thirdFavoredDocument
                )}`)
          : isNewAccount
          ? selectedAccount.document &&
            (selectedAccount.document.replace(/\D+/g, "").length === 11
              ? `${translate("TED_PF_CPF")} ${formatCPF(
                  selectedAccount.document
                )}`
              : `${translate("TED_CNPJ")} ${formatCNPJ(
                  selectedAccount.document
                )}`)
          : favoredData.document &&
            (favoredData.document.replace(/\D+/g, "").length === 11
              ? `${translate("TED_PF_CPF")} ${favoredData.document}`
              : `${translate("TED_CNPJ")} ${favoredData.document}`),
        favoredData.bank,
        `${translate("TED_PF_AGENCY")} ${favoredData.agency}`,
        `${translate("TED_PF_ACCOUNT")} ${favoredData.account}-${
          favoredData.verifyDigit
        }`
      ]
    : [];
  const selectedDate = [
    moment(transferData.date, getDateFieldPlaceholderByLocale()).format(
      getDateFieldPlaceholderByLocale()
    )
  ];

  const enableContinueButton = () => {
    const commonKeys = Object.keys(commonValidToMoveOn);
    return commonKeys.every(key => !!commonValidToMoveOn[key]);
  };

  const callTokenModal = async () => {
    tokenModal("approve", goToStep);
  };

  return (
    currentStep === 2 && (
      <Fragment>
        <FormWrapper>
          {currentStep === 2 && <StepVisibility id="ConfirmationStep" />}
          <AccountBalance>
            <AccountText>{translate("BALANCE")}</AccountText>
            <Value>
              <HideableValue
                hide={hideValues}
                currency={BRL_CURRENCY}
                value={selectedAccount.availableBalance}
                currencyColor="#99B5C6"
                styles={`font-size: ${remFontSize(
                  14
                )}; color: "#2d4758"; font-family: Lato Bold; margin-right: ${rem(
                  12
                )}`}
              />
              {hideValues ? (
                <Icon
                  type="View"
                  width={20}
                  height={20}
                  cursorPointer
                  color="#3976CF"
                  onClick={() => setHideValues(false)}
                />
              ) : (
                <Icon
                  type="HideView"
                  width={20}
                  height={20}
                  cursorPointer
                  color="#3976CF"
                  onClick={() => setHideValues(true)}
                />
              )}
            </Value>
          </AccountBalance>

          <AccTitle>{translate("TRANSFER_VALUE")}</AccTitle>
          <Text>{BRL_CURRENCY}</Text>
          <Text highlighted>{transferData && transferData.value}</Text>

          <TransferDetails
            spaced
            dataTest="ConfirmationStepTransferFrom"
            title={translate("TRANSFER_FROM")}
            list={dataFrom}
          />

          <TransferDetails
            spaced
            dataTest="ConfirmationStepTransferTo"
            title={translate("TRANSFER_TO")}
            list={dataDest}
          />

          <TransferDetails
            spaced
            dataTest="ConfirmationStepTransferDate"
            title={translate("TRANSFER_DATE")}
            list={selectedDate}
          />

          <Scheduler hideSelection />
        </FormWrapper>
        <StickyWrapper>
          <Separator />
          <BtnWrapper>
            <Button
              dataTest="transferBackButton"
              onClick={stepBack}
              type="outline"
              disabled={loading}
              spacing={{ top: "s", bottom: "s", right: "xxs", left: "s" }}
            >
              {translate("BACK")}
            </Button>
          </BtnWrapper>
          <BtnWrapper>
            <Button
              dataTest="transferConfirmButton"
              onClick={() => callTokenModal()}
              disabled={isScheduled && !enableContinueButton()}
              loading={loading}
              spacing={{ top: "s", bottom: "s", right: "s", left: "xxs" }}
            >
              {translate("CONFIRM_TRANSFER")}
            </Button>
          </BtnWrapper>
        </StickyWrapper>
      </Fragment>
    )
  );
}

export default ConfirmationStep;
