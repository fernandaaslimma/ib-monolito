import React from "react";
import moment from "moment";
import HideableValue from "../common/HideableValue";
import { remFontSize } from "../../styles/tools";
import { Portion } from "./styles";
import { translate, getDateFieldPlaceholderByLocale } from "../../utils/i18n";
import { DEFAULT_VALUE } from "../../utils/constants";

const renderValue = (item, _, isTotal = false, digits) => {
  return item ? (
    <HideableValue
      value={item}
      styles={`font-size: ${remFontSize(11)}; font-family: ${
        isTotal ? "Lato Bold" : "Lato"
      }`}
      digits={digits || 2}
    />
  ) : (
    DEFAULT_VALUE
  );
};

export const contractColumns = [
  {
    title: translate("CREDIT_CONTRACT"),
    field: "number"
  },
  {
    title: translate("PRODUCT"),
    field: "product",
    nestedField: "name"
  },
  {
    title: translate("PAYMENT_METHOD"),
    field: "paymentMethod"
  },
  {
    title: `${translate("ANNUAL_RATE")} (%)`,
    field: "rates",
    nestedField: "annual",
    align: "right",
    cellRender: (item, _, isTotal) => renderValue(item, _, isTotal, 4)
  },
  {
    title: `${translate("NOMINAL_RATE")} (%)`,
    field: "rates",
    nestedField: "nominal",
    align: "right",
    cellRender: (item, _, isTotal) => renderValue(item, _, isTotal, 4)
  },
  {
    title: `${translate("EFFECTIVE_RATE")} (%)`,
    field: "rates",
    nestedField: "effective",
    align: "right",
    cellRender: (item, _, isTotal) => renderValue(item, _, isTotal, 4)
  },
  {
    title: translate("CREDIT_START_DATE"),
    field: "startDate",
    align: "right",
    cellRender: item => moment(item).format(getDateFieldPlaceholderByLocale())
  },
  {
    title: translate("TOTAL_TERM"),
    field: "tenure",
    nestedField: "total",
    align: "right"
  },
  {
    title: translate("REMAINING_TERM"),
    field: "tenure",
    nestedField: "remaining",
    align: "right"
  }
];

export const installmentColumns = [
  {
    title: null,
    field: null,
    width: 40,
    // eslint-disable-next-line react/display-name
    cellRender: (_, index) => <Portion>{index + 1}</Portion>
  },
  {
    title: translate("MATURITY_DATE"),
    field: "maturityDate",
    width: 140,
    cellRender: item => moment(item).format(getDateFieldPlaceholderByLocale())
  },
  {
    title: `${translate("PRINCIPAL")} (${translate("BRL_CURRENCY")})`,
    field: "principalValue",
    cellRender: (item, _, isTotal) => renderValue(item, _, isTotal),
    total: true,
    align: "right"
  },
  {
    title: `${translate("MONETARY_ADJUSTMENT")} (${translate("BRL_CURRENCY")})`,
    field: "monetaryAdjustmentValue",
    cellRender: (item, _, isTotal) => renderValue(item, _, isTotal),
    total: true,
    width: 180,
    align: "right"
  },
  {
    title: `${translate("INTEREST")} (${translate("BRL_CURRENCY")})`,
    field: "interestValue",
    cellRender: (item, _, isTotal) => renderValue(item, _, isTotal),
    total: true,
    align: "right"
  },
  {
    title: `${translate("LATE_PAYMENT_COMMISION")} (${translate(
      "BRL_CURRENCY"
    )})`,
    field: "latePaymentCommissionValue",
    cellRender: (item, _, isTotal) => renderValue(item, _, isTotal),
    total: true,
    align: "right"
  },
  {
    title: `${translate("CREDIT_IOF")} (${translate("BRL_CURRENCY")})`,
    field: "iofValue",
    cellRender: (item, _, isTotal) => renderValue(item, _, isTotal),
    total: true,
    align: "right"
  },
  {
    title: `${translate("DEFAULT_INTEREST")} (${translate("BRL_CURRENCY")})`,
    field: "defaultInterestValue",
    cellRender: (item, _, isTotal) => renderValue(item, _, isTotal),
    total: true,
    align: "right",
    width: 120
  },
  {
    title: `${translate("FINE")} (${translate("BRL_CURRENCY")})`,
    field: "fineValue",
    cellRender: (item, _, isTotal) => renderValue(item, _, isTotal),
    total: true,
    align: "right"
  },
  {
    title: `${translate("AMOUNT_CHARGED")} (${translate("BRL_CURRENCY")})`,
    field: "totalValue",
    cellRender: (item, _, isTotal) => renderValue(item, _, isTotal),
    total: true,
    width: 140,
    align: "right"
  }
];
