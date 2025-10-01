import React, { Fragment } from "react";
import { string } from "prop-types";
import moment from "moment";
import { AlertMessage } from "react-bocombbm-components";
import Icon from "../Icon";
import {
  translate,
  getDateFieldPlaceholderByLocale
} from "../../../utils/i18n";
import { formatCPF, formatCNPJ } from "../../../utils/formatNumber";

import {
  ReceivingInstitutionInfo,
  ReceivingInstitutionName,
  WapperBankImg,
  InfoCard,
  Title,
  SubTitle
} from "./styles";
function ResumeCard({
  cardTitle,
  cardMessage,
  destinyLogoUri,
  destinyName,
  name,
  document,
  destiny,
  purpose,
  creationDate,
  expiration,
  alertMsg,
  ...props
}) {
  const expirationDiff = date => {
    const diff = moment.duration(moment(date).diff(moment(new Date())));
    const meses = diff.asMonths();
    const expirationTime = `${meses.toFixed(0)} ${translate(
      "MONTHS"
    )} | ${moment(date).format(getDateFieldPlaceholderByLocale())}`;

    return expirationTime;
  };

  const originInfo = destinyName && (
    <ReceivingInstitutionInfo>
      {destinyLogoUri === "Bank" ||
      destinyLogoUri === undefined ||
      destinyLogoUri === null ? (
        <Icon type="Bank" width={36} height={36} />
      ) : (
        <WapperBankImg src={destinyLogoUri} />
      )}
      <ReceivingInstitutionName>{destinyName}</ReceivingInstitutionName>
    </ReceivingInstitutionInfo>
  );

  return (
    <Fragment>
      {cardTitle && originInfo && (
        <InfoCard data-test={props.dataTest}>
          <Title>{cardTitle}</Title>
          {cardMessage}
          {originInfo}
        </InfoCard>
      )}
      <InfoCard>
        <Title>{translate("OPEN_BANKING_SHARING_SUMMARY")}</Title>
        {name && (
          <Fragment>
            {translate("OPEN_BANKING_NAME")}
            <SubTitle data-test="nameLabel">{name}</SubTitle>
          </Fragment>
        )}
        {document && (
          <Fragment>
            {document.length === 11
              ? translate("OPEN_BANKING_CPF")
              : document.length === 14
              ? translate("OPEN_BANKING_CNPJ")
              : translate("OPEN_BANKING_DOCUMENT")}
            <SubTitle data-test="cpfOrCnpjLabel">
              {document.length === 11
                ? formatCPF(document)
                : document.length === 14
                ? formatCNPJ(document)
                : document}
            </SubTitle>
          </Fragment>
        )}
        {destiny && (
          <Fragment>
            {translate("OPEN_BANKING_DESTINATION_INSTITUTION")}
            <SubTitle data-test="destinationInstitutionLabel">
              {destiny}
            </SubTitle>
          </Fragment>
        )}
        {purpose && (
          <Fragment>
            {translate("OPEN_BANKING_PURPOSE_DATA")}
            <SubTitle data-test="consentPurpose">{purpose}</SubTitle>
          </Fragment>
        )}

        {creationDate && (
          <Fragment>
            {translate("OPEN_BANKING_CONFIRMATION_DATA")}
            <SubTitle data-test="creationDate">{creationDate}</SubTitle>
          </Fragment>
        )}
        {expiration && (
          <Fragment>
            {translate("OPEN_BANKING_SHARE_TERM")}
            <SubTitle data-test="expirationDateTime">
              {expirationDiff(expiration)}
            </SubTitle>
          </Fragment>
        )}

        {alertMsg && (
          <AlertMessage
            icon="Attention"
            type="neutral"
            spacing={{
              top: "s",
              bottom: "none",
              right: "none",
              left: "none"
            }}
          >
            {alertMsg}
          </AlertMessage>
        )}
      </InfoCard>
    </Fragment>
  );
}

ResumeCard.defaultProps = {
  cardTitle: null,
  cardMessage: null,
  destinyLogoUri: null,
  destinyName: null,
  name: null,
  document: null,
  destiny: null,
  purpose: null,
  expiration: null,
  dataTest: undefined,
  alertMsg: null
};

ResumeCard.propTypes = {
  cardTitle: string,
  cardMessage: string,
  destinyLogoUri: string,
  destinyName: string,
  name: string,
  document: string,
  destiny: string,
  purpose: string,
  expiration: string,
  dataTest: string,
  alertMsg: string
};

export default ResumeCard;
