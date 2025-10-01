import {
  getDateFieldPlaceholderByLocale,
  getSufixFormatHourByLocate
} from "../utils/i18n";
import moment from "moment";

export const getConsentInitiator = consent => {
  if (
    consent &&
    consent.additionalInfos &&
    consent.additionalInfos.length >= 1
  ) {
    const base64Coded =
      consent &&
      consent.additionalInfos &&
      consent.additionalInfos.find(item => item.key === "ConsentInitiator");
    const consentInitiatorString =
      base64Coded && base64Coded.value
        ? decodeURIComponent(escape(window.atob(base64Coded.value)))
        : null;
    const initiator = consentInitiatorString
      ? JSON.parse(consentInitiatorString)
      : null;
    return initiator && initiator.Name ? initiator.Name : null;
  } else {
    return null;
  }
};

export const formatDate = date => {
  return moment(date).format(
    `${getDateFieldPlaceholderByLocale()} - ${getSufixFormatHourByLocate()}`
  );
};

export const getConsentEntity = (consent, userInfo) =>
  consent
    ? userInfo.tenants[0] === "Corporation" && consent.businessEntity
      ? consent.businessEntity.document.identification
      : consent.loggedUser.document.identification
    : null;
