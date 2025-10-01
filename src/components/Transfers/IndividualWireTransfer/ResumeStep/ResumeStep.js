import React, { Fragment, useContext } from "react";
import { Button, Icon } from "react-bocombbm-components";
import moment from "moment";
import { InstanceContext } from "../IndividualWireTransfer";
import TransferDetails from "../TransferDetails";
import {
  translate,
  getDateFieldPlaceholderByLocale
} from "../../../../utils/i18n";
import { formatCPF, formatCNPJ } from "../../../../utils/formatNumber";

import {
  StickyWrapper,
  Separator,
  FormWrapper,
  StepVisibility,
  BtnWrapper
} from "../styles";
import { MainMessage, SubTitle, Title } from "./styles";
import { conclusive200 } from "../../../../styles/settings";
import { isToday } from "../../../../utils/validations/EFT";

function ResumeStep({ goToStep, currentStep }) {
  const {
    props: { favoredData, transferData, serverTime },
    state: { selectedAccount, isNewAccount },
    resetClassAndStoreState
  } = useContext(InstanceContext);

  const date = moment(serverTime)
    .utcOffset(-3)
    .format(`${getDateFieldPlaceholderByLocale()}, HH:mm`);
  const dataFrom = transferData
    ? [`${translate("CURRENCY_UNIT")} ${transferData.value}`]
    : [];
  const dataTransferAnotherDay = transferData
    ? [
        moment
          .utc(transferData.date, getDateFieldPlaceholderByLocale())
          .format(getDateFieldPlaceholderByLocale())
      ]
    : [];

  const dataDest =
    currentStep === 3 && favoredData
      ? [
          favoredData.isThirdFavored
            ? favoredData.thirdFavoredFullName
            : isNewAccount
            ? selectedAccount.name
            : favoredData.name,
          favoredData.isThirdFavored
            ? favoredData.thirdFavoredDocument &&
              (favoredData.thirdFavoredDocument.replace(/\D+/g, "").length ===
              11
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

  return (
    <Fragment>
      {currentStep === 3 && <StepVisibility id="ResumeStep" />}
      <FormWrapper>
        <MainMessage>
          <Icon
            dataTest="SuccessIcon"
            type="RoundedCheck"
            width="58"
            height="58"
            color={conclusive200}
          />
          <Title>{translate("OPERATION_SUMMARY_TED_PF")}</Title>
          <SubTitle>{date.toUpperCase()}</SubTitle>
        </MainMessage>

        {transferData && !isToday(transferData.date, serverTime) && (
          <TransferDetails
            dataTest="ScheduleDateResume"
            title={translate("SCHEDULE_DATE_RESUME_TED_PF")}
            list={dataTransferAnotherDay}
          />
        )}

        <TransferDetails
          dataTest="ValueTED"
          title={translate("VALUE_TED_PF")}
          list={dataFrom}
        />

        <TransferDetails
          dataTest="DestinationTED"
          title={translate("DESTINATION_TED_PF")}
          list={dataDest}
        />

        <br />
        <br />
      </FormWrapper>
      <StickyWrapper>
        <Separator />
        <BtnWrapper>
          <Button
            onClick={() => {
              resetClassAndStoreState();
              goToStep(1);
            }}
            dataTest="NewTransfer"
            spacing={{ top: "s", bottom: "s", right: "s", left: "s" }}
          >
            {translate("NEW_TRANSFER_TED_PF")}
          </Button>
        </BtnWrapper>
      </StickyWrapper>
    </Fragment>
  );
}

export default ResumeStep;
