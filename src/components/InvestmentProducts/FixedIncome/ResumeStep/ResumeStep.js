import React from "react";
import { Icon, Button } from "react-bocombbm-components";
import { conclusive200 } from "../../../../styles/settings";

import {
  BtnWrapper,
  Separator,
  StickyWrapper,
  StepVisibility
} from "../styles";
import { ResumeInfoWrapper } from "../ConfirmationStep/styles";
import {
  MainMessage,
  Title,
  SubTitle,
  ConfirmationInfoWrapper,
  ConfirmationLabel,
  ConfirmationValue
} from "./styles";

import { ContainerWrapper } from "../../styles";
import { InstanceContext } from "../fixedIncomeContext";
import {
  getDateFieldPlaceholderByLocale,
  getSufixFormatHourByLocate,
  translate
} from "../../../../utils/i18n";
import { BRASILIA_UTC_OFFSET, BRL_CURRENCY } from "../../../../utils/constants";
import formatDate from "../../../../utils/formatDate";
import moment from "moment";
import { redirect } from "../../../../utils/redirect";

function ResumeStep({ currentStep }) {
  const {
    props: { serverTime },
    state: { selectedProduct, filledValue }
  } = React.useContext(InstanceContext);

  let resumeInfo;
  if (selectedProduct) {
    resumeInfo = [
      {
        label: "INVESTMENTS_FI_TYPE_APPLICATION",
        value: selectedProduct["productLabel"]
      },
      { label: "INVESTMENTS_FI_ISSUER", value: selectedProduct["issuer"] },
      { label: "INVESTMENTS_FI_TAX", value: selectedProduct["yieldLabel"] },
      { label: "INVESTMENTS_FI_VALUE_APPLIED", value: filledValue },
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

  const date = moment(serverTime)
    .utcOffset(BRASILIA_UTC_OFFSET)
    .format(
      `${getDateFieldPlaceholderByLocale()}, ${getSufixFormatHourByLocate()}`
    );

  const renderInfo = info => {
    let { label, value } = info;
    if (label === "INVESTMENTS_FI_VALUE_APPLIED") {
      return `${BRL_CURRENCY} ${value}`;
    } else if (label === "INVESTMENTS_FI_MATURITY_DATE") {
      return `${formatDate(value)}`;
    } else {
      return value;
    }
  };

  return (
    currentStep === 5 && (
      <ContainerWrapper>
        <StepVisibility id="ResumeStep" />
        <MainMessage>
          <Icon
            dataTest="SuccessIcon"
            type="RoundedCheck"
            width="58"
            height="58"
            color={conclusive200}
          />
          <Title>{translate("INVESTMENTS_FI_APPLICATION_COMPLETED")}</Title>
          <SubTitle>{date.toUpperCase()}</SubTitle>
        </MainMessage>
        <ResumeInfoWrapper>
          {resumeInfo.map((item, index) => {
            return (
              <ConfirmationInfoWrapper
                key={index}
                className="ConfirmationInfoWrapper"
              >
                <ConfirmationLabel>
                  {translate(`${item.label}`)}
                </ConfirmationLabel>
                <ConfirmationValue>{renderInfo(item)}</ConfirmationValue>
              </ConfirmationInfoWrapper>
            );
          })}
        </ResumeInfoWrapper>
        <StickyWrapper>
          <Separator />
          <BtnWrapper>
            <Button
              dataTest="concludeButton"
              onClick={() => redirect("/home")}
              spacing={{ top: "s", bottom: "s", right: "s", left: "s" }}
            >
              {translate("INVESTMENTS_FI_CLOSE")}
            </Button>
          </BtnWrapper>
        </StickyWrapper>
      </ContainerWrapper>
    )
  );
}

export default ResumeStep;
