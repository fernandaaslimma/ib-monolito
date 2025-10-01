import React from "react";
import { string, arrayOf, shape, number } from "prop-types";

import Table from "../../../common/Table";
import { translate } from "../../../../utils/i18n";
import formatNumber from "../../../../utils/formatNumber";
import formatDate from "../../../../utils/formatDate";
import Link from "../../../common/Link";

import { Span, RedirectBox } from "./styles";

const buildRows = rows =>
  rows.map(b => ({
    date: <span>{formatDate(b.date)}</span>,
    assetName: <span>{b.assetName}</span>,
    type: <span>{b.type}</span>,
    grossValue: (
      <Span red={b.grossValue < 0}>
        {formatNumber(b.grossValue, { digits: 2 })}
      </Span>
    )
  }));

function TransactionsTable({ transactions }) {
  return (
    <div data-test="Latest_Transactions">
      <Table
        title={translate("LATEST_TRANSACTIONS")}
        headers={[
          { title: translate("DATE"), field: "date" },
          {
            title: translate("ASSET"),
            field: "assetName",
            width: "25%"
          },
          {
            title: translate("TYPE"),
            field: "type"
          },
          {
            title: translate("VALUE"),
            field: "grossValue",
            currency: true,
            align: "right"
          }
        ]}
        data={buildRows(transactions)}
        zebra
        withBackground
        render={
          <RedirectBox>
            <Link to={"/investments/transactions/fixed-income"} anchor>
              {translate("SEE_ALL_TRANSACTIONS")}
            </Link>
          </RedirectBox>
        }
      />
    </div>
  );
}

TransactionsTable.defaultProps = {
  transactions: []
};

TransactionsTable.propTypes = {
  transactions: arrayOf(
    shape({
      date: string,
      grossValue: number,
      type: string,
      assetName: string
    })
  )
};

export default TransactionsTable;
