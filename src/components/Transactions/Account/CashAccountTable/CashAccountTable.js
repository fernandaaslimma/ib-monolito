import React, { Fragment } from "react";
import { arrayOf, shape, number, string, bool, object } from "prop-types";
import { Span, BalanceAmountRow, DateRow } from "../../styles";

import Table from "../../../common/Table";
import { translate } from "../../../../utils/i18n";
import formatNumber from "../../../../utils/formatNumber";
import formatDate from "../../../../utils/formatDate";

const buildOpenBalanceRow = accountOpenBalance => {
  return {
    date: (
      <span>{`${translate("OPEN_BALANCE_ON")} ${formatDate(
        accountOpenBalance.date
      )}`}</span>
    ),
    type: <span>{" - "}</span>,
    amount: (
      <BalanceAmountRow red={accountOpenBalance.openBalance < 0}>
        {formatNumber(accountOpenBalance.openBalance, { digits: 2 })}
      </BalanceAmountRow>
    )
  };
};

const buildAccountTransactionsRows = rows =>
  rows.map(b => {
    return {
      date: <DateRow>{formatDate(b.date)}</DateRow>,
      type: <span>{b.type}</span>,
      amount: (
        <Span red={b.amount < 0}>{formatNumber(b.amount, { digits: 2 })}</Span>
      )
    };
  });

const buildCloseBalanceRow = accountCloseBalance => {
  return {
    date: (
      <span>{`${translate("CLOSE_BALANCE_ON")} ${formatDate(
        accountCloseBalance.date
      )}`}</span>
    ),
    type: <span>{" - "}</span>,
    amount: (
      <BalanceAmountRow red={accountCloseBalance.closeBalance < 0}>
        {formatNumber(accountCloseBalance.closeBalance, { digits: 2 })}
      </BalanceAmountRow>
    )
  };
};

const headers = [
  { title: translate("DATE"), field: "date", width: "35%" },
  {
    title: translate("TYPE"),
    field: "type",
    align: "center"
  },
  {
    title: translate("VALUE"),
    field: "amount",
    currency: true,
    align: "right"
  },
  {
    title: "",
    field: "",
    width: "5%"
  }
];

function CashAccountTable({ cashAccounts, loading }) {
  return (
    <Fragment>
      {!loading &&
        cashAccounts.map((account, index) => {
          return (
            <Table
              key={index}
              title={`${translate("CHECKING_ACCOUNT")} ${
                account.userCashAccount
              }`}
              headers={headers}
              data={[
                buildOpenBalanceRow(account.accountOpenBalance),
                ...buildAccountTransactionsRows(
                  account.cashAccountTransactions
                ),
                buildCloseBalanceRow(account.accountCloseBalance)
              ]}
            />
          );
        })}
      {loading && (
        <Table
          headers={headers}
          data={[]}
          shimmerLoading={{ rows: 4, loading }}
        />
      )}
    </Fragment>
  );
}

CashAccountTable.defaultProps = {
  cashAccounts: [],
  shimmerLoading: null
};

CashAccountTable.propTypes = {
  title: string,
  styleName: bool,
  cashAccounts: arrayOf(
    shape({
      cashAccountTransactions: arrayOf(
        shape({
          userCashAccount: shape({
            assetName: string,
            type: string,
            date: string,
            grossBalance: number,
            netBalance: number,
            incomeTax: number,
            iof: number
          }),
          accountOpenBalance: object,
          accountCloseBalance: object
        })
      )
    })
  ),
  shimmerLoading: shape({
    rows: number,
    loading: bool
  })
};

export default CashAccountTable;
