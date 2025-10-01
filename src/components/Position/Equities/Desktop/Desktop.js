import React from "react";
import { arrayOf, shape, number, string, bool } from "prop-types";
import { Wrapper } from "../../styles";
import formatNumber from "../../../../utils/formatNumber";
import { isValueNullOrUndefined } from "../../../../utils/validations/input";
import formatDate from "../../../../utils/formatDate";

import DefaultContent from "../../../common/DefaultContent";
import { black30 } from "../../../../styles/settings";
import Icon from "../../../common/Icon";
import { UP, DEFAULT_VALUE } from "../../../../utils/constants";
import Table from "../../../../components/common/Table/";
import { translate } from "../../../../utils/i18n";

const buildRows = rows =>
  rows.map(b => ({
    name: <span>{b.name}</span>,

    date: <span>{formatDate(b.date)}</span>,
    quantity: (
      <span>
        {isValueNullOrUndefined(b.quantity)
          ? DEFAULT_VALUE
          : formatNumber(b.quantity, { digits: 0 })}
      </span>
    ),
    grossBalance: <span>{formatNumber(b.grossBalance, { digits: 2 })}</span>,
    portfolioShare: <span>{formatNumber(b.portfolioShare)}</span>
  }));

function Desktop({ isEmpty, equities, totalEquities, loading }) {
  return (
    <Wrapper>
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
              title: translate("NAME"),
              field: "name",
              width: "35%"
            },

            {
              title: translate("REFERENCE_DATE"),
              field: "date",
              width: "10%",
              align: "right"
            },
            {
              title: translate("QUANTITY"),
              field: "quantity",
              align: "right"
            },
            {
              title: translate("GROSS_BALANCE"),
              field: "grossBalance",
              currency: true,
              align: "right",
              total: true
            },
            {
              title: translate("PORTFOLIO"),
              field: "portfolioShare",
              percent: true,
              align: "right"
            }
          ]}
          data={buildRows(equities)}
          total={totalEquities}
          totalPosition={UP}
          shimmerLoading={{ rows: 10, loading }}
        />
      )}
    </Wrapper>
  );
}

Desktop.defaultProps = {
  equities: [],
  loading: false
};

Desktop.propTypes = {
  equities: arrayOf(
    shape({
      name: string,
      date: string,
      grossBalance: number,
      portfolioShare: number
    })
  ),
  loading: bool.isRequired,
  isEmpty: bool
};

export default Desktop;
