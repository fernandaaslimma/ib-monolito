import React from "react";
import { arrayOf, shape, number, string, bool } from "prop-types";

import Table from "../../common/Table";
import { translate } from "../../../utils/i18n";
import formatNumber from "../../../utils/formatNumber";
import formatDate from "../../../utils/formatDate";
import { Span, Name } from "../styles";
import { DOWN } from "../../../utils/constants";
import { rem } from "../../../styles/tools";

const buildRows = (rows, isEquity) =>
  rows.map(b => {
    const basicRows = {
      assetName: <Name>{b.assetName}</Name>,
      type: <span>{b.type}</span>,
      date: <span>{formatDate(b.date)}</span>,
      grossValue: (
        <Span red={b.grossValue < 0}>
          {formatNumber(b.grossValue, { digits: 2 })}
        </Span>
      ),
      netValue: (
        <Span red={b.netValue < 0}>
          {formatNumber(b.netValue, { digits: 2 })}
        </Span>
      )
    };
    return isEquity
      ? basicRows
      : {
          ...basicRows,
          incomeTax: <span>{formatNumber(b.incomeTax, { digits: 2 })}</span>,
          iof: <span>{formatNumber(b.iof, { digits: 2 })}</span>
        };
  });

const generateSum = transactions => {
  const initialTransactions = {
    grossValue: 0,
    netValue: 0,
    incomeTax: 0,
    iof: 0
  };

  return transactions.reduce((acc, current) => {
    acc.grossValue += current.grossValue;
    acc.netValue += current.netValue;
    acc.incomeTax += current.incomeTax;
    acc.iof += current.iof;
    return acc;
  }, initialTransactions);
};

function AssetTable({
  transactions,
  title,
  styleName,
  isEquity,
  shimmerLoading
}) {
  const totaltransactions = generateSum(transactions);
  const headersFirstPart = [
    {
      title: translate("NAME"),
      field: "assetName",
      width: "15%",
      style: styleName ? null : { fontSize: rem(10), lineHeight: 1.4 }
    },
    {
      title: "",
      field: "",
      width: "2%"
    },
    {
      title: translate("TYPE"),
      field: "type",
      width: "15%"
    },
    {
      title: translate("DATE"),
      field: "date"
    }
  ];

  const headersSecondPart = [
    {
      title: translate("INCOME_TAX"),
      field: "incomeTax",
      currency: true,
      align: "right",
      width: "9%",
      total: true
    },
    {
      title: translate("IOF"),
      field: "iof",
      currency: true,
      align: "right",
      width: "7%",
      total: true
    }
  ];

  const headersThirdPart = [
    {
      title: translate("GROSS_VALUE"),
      field: "grossValue",
      currency: true,
      align: "right",
      total: true
    },
    {
      title: translate("NET_VALUE"),
      field: "netValue",
      currency: true,
      align: "right",
      total: true
    }
  ];

  const headers = isEquity
    ? [...headersFirstPart, ...headersThirdPart]
    : [...headersFirstPart, ...headersSecondPart, ...headersThirdPart];

  return (
    <Table
      title={title}
      headers={headers}
      data={buildRows(transactions, isEquity)}
      total={totaltransactions}
      totalPosition={DOWN}
      shimmerLoading={shimmerLoading}
    />
  );
}

AssetTable.defaultProps = {
  transactions: [],
  title: "",
  styleName: false,
  isEquity: false,
  shimmerLoading: null
};

AssetTable.propTypes = {
  title: string,
  styleName: bool,
  shimmerLoading: shape({
    rows: number,
    loading: bool
  }),
  transactions: arrayOf(
    shape({
      assetName: string,
      type: string,
      date: string,
      grossBalance: number,
      netBalance: number,
      incomeTax: number,
      iof: number
    })
  )
};

export default AssetTable;
