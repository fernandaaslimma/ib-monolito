import React, { useContext, useEffect } from "react";
import moment from "moment";
import { Icon, Button, AlertMessage } from "react-bocombbm-components";
import { conclusive200 } from "../../../../styles/settings";
import {
  getDateFieldPlaceholderByLocale,
  getSufixFormatHourByLocate,
  isPtBR,
  translate
} from "../../../../utils/i18n";
import { InstanceContext } from "../fundsContext";
import {
  BtnWrapper,
  Separator,
  StickyWrapper,
  StepVisibility
} from "../styles";
import {
  ResumeInfoWrapper,
  ResumeItemTitle,
  ResumeItemValue
} from "../ConfirmationStep/styles";
import {
  MainMessage,
  Title,
  SubTitle,
  Item,
  Message,
  MessageBold
} from "./styles";
import {
  EN_US_AM_PM_FORMAT,
  PT_BR_24H_FORMAT,
  BRASILIA_UTC_OFFSET
} from "../../../../utils/constants";
import { modelBrazilianTime } from "../../../../utils/formatDate";
import { redirect } from "../../../../utils/redirect";
import { ContainerWrapper } from "../../styles";

function ResumeStep({ currentStep }) {
  const {
    props: { openToastr, availableDateRanges },
    state: { filledValue, selectedFund, chosenOperation }
  } = useContext(InstanceContext);

  useEffect(() => {
    //Detect if component is in viewport and tag Hotjar path
    var component = document.querySelector("#ResumeStep");
    component &&
      window.hj &&
      window.hj("stateChange", "investments/products/funds/resume");
  });

  useEffect(() => {
    currentStep === 5 &&
      openToastr({
        text:
          chosenOperation === "redeem"
            ? translate("POSITION_FUNDS_TOASTR_ACCEPTED_REDEMPTION")
            : translate("TOASTR_ACCEPTED_FUNDS"),
        isBelow: false,
        isTop: true,
        timeout: 3000
      });
  }, [chosenOperation, currentStep, openToastr]);

  let resumeInfo = {};

  const date = moment().format(
    `${getDateFieldPlaceholderByLocale()}, ${getSufixFormatHourByLocate()}`
  );

  if (currentStep === 5) {
    if (chosenOperation === "redeem") {
      resumeInfo = {
        FUND_ASSET: selectedFund["name"],
        POSITION_FUNDS_REDEMPTION_VALUE: filledValue,
        POSITION_FUNDS_REDEMPTION_DATE: moment().format(
          getDateFieldPlaceholderByLocale()
        )
      };
    } else {
      resumeInfo = {
        FUND_ASSET: selectedFund["name"],
        INVESTMENT_VALUE: filledValue,
        APLICATION_DATE_FUND: moment().format(getDateFieldPlaceholderByLocale())
      };
    }
  }

  const maxEndTime = Math.max(...availableDateRanges.map(x => x.endTime));

  const rangeEnd = isPtBR()
    ? modelBrazilianTime(
        moment(maxEndTime)
          .utcOffset(BRASILIA_UTC_OFFSET)
          .format(PT_BR_24H_FORMAT)
      )
    : moment(maxEndTime)
        .utcOffset(BRASILIA_UTC_OFFSET)
        .format(EN_US_AM_PM_FORMAT);

  if (Object.keys(resumeInfo).length > 0) {
    return (
      <ContainerWrapper>
        {currentStep === 5 && <StepVisibility id="ResumeStep" />}
        <MainMessage>
          <Icon
            dataTest="SuccessIcon"
            type="RoundedCheck"
            width="58"
            height="58"
            color={conclusive200}
          />
          <Title>{translate("REQUEST_CONFIRMED_FUNDS")}</Title>
          <SubTitle>{date.toUpperCase()}</SubTitle>
        </MainMessage>
        <ResumeInfoWrapper>
          {Object.keys(resumeInfo).map((key, i) => (
            <Item key={i}>
              <ResumeItemTitle>{translate(`${key}`)}</ResumeItemTitle>
              <ResumeItemValue>
                {key === "INVESTMENT_VALUE" || key === "REDEMPTION_VALUE"
                  ? `R$ ${resumeInfo[key]}`
                  : resumeInfo[key]}
              </ResumeItemValue>
            </Item>
          ))}
        </ResumeInfoWrapper>
        <AlertMessage
          icon="Attention"
          type="neutral"
          spacing={{
            top: "none",
            bottom: "l",
            right: "s",
            left: "s"
          }}
        >
          <Message>
            {chosenOperation === "redeem"
              ? translate("POSITION_FUNDS_REDEMPTION_PROCESS_INFO")
              : translate("INVESTMENT_PROCESS_FUNDS")}
            <MessageBold>
              {chosenOperation === "redeem"
                ? translate("POSITION_FUNDS_REDEMPTION_PROCESS_INFO_BOLD")
                : translate("FUNDS_UNTIL_2")}
              {rangeEnd}.
            </MessageBold>
            {chosenOperation === "redeem"
              ? null
              : translate("FUNDS_WARNING_AMMOUNT_AVAILABILITY")}
          </Message>
        </AlertMessage>
        <StickyWrapper>
          <Separator />
          <BtnWrapper>
            <Button
              dataTest="concludeButton"
              onClick={() => redirect("/investments/overview")}
              spacing={{ top: "s", bottom: "s", right: "s", left: "s" }}
            >
              {translate("VIEW_POSITION_FUNDS")}
            </Button>
          </BtnWrapper>
        </StickyWrapper>
      </ContainerWrapper>
    );
  } else {
    return null;
  }
}

export default ResumeStep;
