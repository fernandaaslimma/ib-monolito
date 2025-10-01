import React, { useContext } from "react";
import { Button, Icon, AlertMessage } from "react-bocombbm-components";
import moment from "moment";
import { InstanceContext } from "../withdrawLcaContext";
import {
  translate,
  getDateFieldPlaceholderByLocale
} from "../../../../utils/i18n";

import { StickyWrapper, Separator, BtnWrapper } from "../styles";
import {
  Container,
  MainMessage,
  SubTitle,
  Title,
  StepVisibility,
  DetailsWrapper,
  DetailsTitle,
  DetailsSubtitle,
  Message,
  IssuerInfoWrapper
} from "./styles";
import { conclusive200 } from "../../../../styles/settings";
import { BRL_CURRENCY } from "../../../../utils/constants";
import formatNumber from "../../../../utils/formatNumber";
import { redirect } from "../../../../utils/redirect";

function ResumeStep({ currentStep }) {
  const {
    props: { serverTime, responseLcaDetails },
    state: { valueToBeRescued }
  } = useContext(InstanceContext);

  const listOfDifferentIssuers = responseLcaDetails.reduce(function(p, c) {
    if (
      !p.some(function(detailedLca) {
        return detailedLca.issuer === c.issuer;
      })
    )
      p.push(c);
    return p;
  }, []);

  const date = moment(serverTime)
    .utcOffset(-3)
    .format(`${getDateFieldPlaceholderByLocale()}, HH:mm`);

  const todayDate = moment(serverTime)
    .utcOffset(-3)
    .format(`${getDateFieldPlaceholderByLocale()}`);

  return (
    <React.Fragment>
      <Container>
        {currentStep === 4 && <StepVisibility id="ResumeStep" />}
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

        <DetailsWrapper>
          <DetailsTitle>LCA</DetailsTitle>
          <IssuerInfoWrapper>
            {listOfDifferentIssuers.map((item, index) => {
              return (
                <DetailsSubtitle key={index}>{item.issuer}</DetailsSubtitle>
              );
            })}
          </IssuerInfoWrapper>

          <DetailsTitle>
            {translate("FIXED_INCOME_WITHDRAWAL_VALUE")}
          </DetailsTitle>
          <DetailsSubtitle>{`${BRL_CURRENCY} ${formatNumber(valueToBeRescued, {
            digits: 2
          })}`}</DetailsSubtitle>

          <DetailsTitle>
            {translate("FIXED_INCOME_WITHDRAWAL_REDEMPTION_DATE")}
          </DetailsTitle>
          <DetailsSubtitle>{todayDate}</DetailsSubtitle>
        </DetailsWrapper>

        <AlertMessage
          icon="Attention"
          type="neutral"
          spacing={{
            top: "xl",
            bottom: "l",
            right: "s",
            left: "s"
          }}
        >
          <Message data-test="withdrawalInProcess">
            {translate("FIXED_INCOME_WITHDRAWAL_DISCALIMER")}
          </Message>
        </AlertMessage>
      </Container>
      <StickyWrapper>
        <Separator />
        <BtnWrapper>
          <Button
            onClick={() => {
              redirect("/home");
            }}
            dataTest="closeResume"
            spacing={{ top: "s", bottom: "s", right: "s", left: "s" }}
          >
            {translate("CLOSE")}
          </Button>
        </BtnWrapper>
      </StickyWrapper>
    </React.Fragment>
  );
}

export default ResumeStep;
