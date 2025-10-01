import React, { useState } from "react";
import {
  Container,
  ContainerWrapper,
  Image,
  InfoContent,
  InfoWrapper,
  SpanRequestDate,
  SpanTitle
} from "../styles";
import { SpanSubtitle, SpanValue, Span, SpanContainer } from "../../styles";
import {
  getDateFieldPlaceholderByLocale,
  translate
} from "../../../../../utils/i18n";
import ImageSuccess from "../../../../../assets/imgs/success.png";
import moment from "moment";
import formatNumber from "../../../../../utils/formatNumber";
import Icon from "../../../../common/Icon";
import { neutral200 } from "../../../../../styles/settings";
import AnimatedBottonSheet from "../../../../common/AnimatedBottomSheet";
import Button from "../../../../common/Button";
import { rem } from "../../../../../styles/tools";

const Success = ({ exchangeData }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Container>
      <Image src={ImageSuccess} data-test="SuccessImage" />
      <SpanTitle data-test="ExReqTitle">
        {translate("EXCHANGE_TRANSACTION_REQUESTED")}
      </SpanTitle>
      <SpanRequestDate data-test="ExReqDate">
        {`${moment(new Date()).format(
          getDateFieldPlaceholderByLocale()
        )} ${translate("AT")} ${moment(new Date()).format("HH:mm")}`}
      </SpanRequestDate>
      <SpanSubtitle data-test="ExReqFavoredSpan">
        {translate("EXCHANGE_BENEFICIARY")}
      </SpanSubtitle>
      {exchangeData && exchangeData.favored && (
        <SpanValue data-test="ExReqFavoredName">
          {exchangeData.favored.name}
        </SpanValue>
      )}
      {exchangeData && exchangeData.favored && (
        <SpanValue data-test="ExReqFavoredAccNr">
          {translate("EXCHANGE_ACCOUNT") +
            " " +
            exchangeData.favored.account.number}
        </SpanValue>
      )}
      {exchangeData && exchangeData.favored && (
        <SpanValue data-test="ExReqFavoredBankName">
          {translate("EXCHANGE_BANK") +
            " " +
            exchangeData.favored.account.bank.name}
        </SpanValue>
      )}
      {exchangeData && exchangeData.favored && (
        <SpanValue data-test="ExReqFavoredBankSwift">
          {translate("SWIFTCode") +
            " " +
            exchangeData.favored.account.bank.swift}
        </SpanValue>
      )}
      <SpanSubtitle data-test="ExReqValueSpan">
        {translate("VALUE")}
      </SpanSubtitle>
      {exchangeData && exchangeData.transactionValues && (
        <SpanValue data-test="ExReqValue">
          {`${exchangeData.transactionValues.target.currency} ${formatNumber(
            exchangeData.transactionValues.target.total,
            {
              digits: 2
            }
          )}`}
        </SpanValue>
      )}
      <SpanSubtitle data-test="ExReqDebitDateSpan">
        {translate("EXCHANGE_DATE_DEBIT")}
      </SpanSubtitle>
      {exchangeData && exchangeData.transactionValues && (
        <SpanValue data-test="ExReqDebitDate">
          {moment(exchangeData.transactionValues.origin.settleDate).format(
            getDateFieldPlaceholderByLocale()
          )}
        </SpanValue>
      )}
      <SpanContainer>
        <Span data-test="ExReqCreditDateSpan" style={{ marginRight: rem(8) }}>
          {translate("EXCHANGE_DATE_CREDIT")}
        </Span>
        <Icon
          cursorPointer
          type="Attention"
          width="24"
          height="24"
          color={neutral200}
          onClick={setOpenModal}
          dataTest="ExReqCreditDateIcon"
        />
      </SpanContainer>
      {exchangeData && exchangeData.transactionValues && (
        <SpanValue data-test="ExReqCreditDate" style={{ marginTop: rem(8) }}>
          {moment(exchangeData.transactionValues.target.settleDate).format(
            getDateFieldPlaceholderByLocale()
          )}
        </SpanValue>
      )}
      <AnimatedBottonSheet
        isOpen={openModal}
        velocity={0.3}
        head={{
          title: translate("EXCHANGE_DATE_CREDIT"),
          close: true,
          icon: "BorderedClose"
        }}
        onClickInBack={() => setOpenModal(false)}
      >
        <ContainerWrapper data-test="Modal">
          <InfoWrapper>
            <InfoContent data-test="ModalMsg">
              {translate("EXCHANGE_RESULT_CREDIT_MSG")}
            </InfoContent>
            <Button
              dataTest="ModalBtn"
              actionSecondary
              onClick={() => setOpenModal(false)}
              style={{ marginTop: rem(32), marginHorizontal: rem(16) }}
            >
              {translate("UNDERSTOOD")}
            </Button>
          </InfoWrapper>
        </ContainerWrapper>
      </AnimatedBottonSheet>
    </Container>
  );
};

export default Success;
