import React from "react";
import { arrayOf, shape, number, string, bool } from "prop-types";

import { Wrapper } from "../../styles";

import { translate } from "../../../../utils/i18n";
import formatNumber from "../../../../utils/formatNumber";
import Table from "../../../../components/common/Table/";
import DefaultContent from "../../../common/DefaultContent";
import { black30 } from "../../../../styles/settings";
import Icon from "../../../common/Icon";
import { formatDateToLocale } from "../../../../utils/formatDate";

const buildRows = rows =>
  rows.map(b => ({
    accountNumber: <div>{b.accountNumber}</div>,
    date: <div>{formatDateToLocale(b.date)}</div>,
    availableBalance: (
      <div>{formatNumber(b.availableBalance, { digits: 2 })}</div>
    ),
    blockedBalance: <div>{formatNumber(b.blockedBalance, { digits: 2 })}</div>,
    totalBalance: <div>{formatNumber(b.totalBalance, { digits: 2 })}</div>
  }));

function Desktop({ accounts, isEmpty, loading }) {
  return (
    <Wrapper data-test="Position_Accounts">
      {isEmpty ? (
        <DefaultContent
          data-test="Empty_Position"
          Icon={() => <Icon type="EmptyWallet" color={black30} />}
          primaryText={translate("NO_RECORDS")}
          secondaryTexts={[translate("NO_RECORD_WAS_FOUND")]}
        />
      ) : (
        <Table
          headers={[
            {
              title: translate("ACCOUNT_NUMBER"),
              field: "accountNumber",
              width: "25%"
            },
            { title: translate("REFERENCE_DATE"), field: "date" },
            {
              title: translate("AVAILABLE_BALANCE"),
              field: "availableBalance",
              currency: true,
              align: "right",
              width: "12%"
            },
            {
              title: translate("BLOCKED_BALANCE"),
              field: "blockedBalance",
              currency: true,
              align: "right"
            },
            {
              title: translate("TOTAL_BALANCE"),
              field: "totalBalance",
              currency: true,
              align: "right"
            },
            {
              title: "",
              field: "",
              width: "7%"
            }
          ]}
          data={buildRows(accounts)}
          shimmerLoading={{ rows: 10, loading }}
        />
      )}
    </Wrapper>
  );
}

Desktop.defaultProps = {
  accounts: []
};

Desktop.propTypes = {
  accounts: arrayOf(
    shape({
      id: number,
      accountNumber: string,
      date: string,
      totalBalance: number,
      availableBalance: number,
      blockedBalance: number
    })
  ),
  loading: bool.isRequired
};

export default Desktop;
