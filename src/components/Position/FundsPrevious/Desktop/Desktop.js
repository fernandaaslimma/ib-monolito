import React from "react";
import { arrayOf, shape, number, string, bool } from "prop-types";
import { Wrapper } from "../../styles";
import formatNumber from "../../../../utils/formatNumber";
import formatDate from "../../../../utils/formatDate";
import { isValueNullOrUndefined } from "../../../../utils/validations/input";

import DefaultContent from "../../../common/DefaultContent";
import { black30 } from "../../../../styles/settings";
import Icon from "../../../common/Icon";
import { UP, DEFAULT_VALUE } from "../../../../utils/constants";
import Table from "../../../../components/common/Table/";
import { translate } from "../../../../utils/i18n";
import { Container } from "../../../../styles/grid";
import LinkCard from "../../../common/LinkCard";

const buildRowsFunds = rows =>
  rows.map(b => ({
    name: <span>{b.name}</span>,
    investmentDate: <span>{formatDate(b.investmentDate)}</span>,
    date: <span>{formatDate(b.date)}</span>,
    quantity: (
      <span>
        {isValueNullOrUndefined(b.quantity)
          ? DEFAULT_VALUE
          : formatNumber(b.quantity, { digits: 8 })}
      </span>
    ),
    grossBalance: <span>{formatNumber(b.grossBalance, { digits: 2 })}</span>,
    netBalance: <span>{formatNumber(b.netBalance, { digits: 2 })}</span>,
    incomeTaxBalance: (
      <span>{formatNumber(b.incomeTaxBalance, { digits: 2 })}</span>
    ),
    iofBalance: <span>{formatNumber(b.iofBalance, { digits: 2 })}</span>,
    grossResultBalance: (
      <span>{formatNumber(b.grossResultBalance, { digits: 2 })}</span>
    )
  }));

function Desktop({ isEmpty, funds, totalFunds, loading }) {
  return (
    <Wrapper>
      <Container>
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
                width: "20%"
              },
              {
                title: translate("APPL_DATE"),
                field: "investmentDate",
                align: "right",
                widht: "12%"
              },
              {
                title: translate("REFERENCE_DATE"),
                field: "date",
                widht: "7%",
                align: "right"
              },
              {
                title: translate("QUANTITY"),
                field: "quantity",
                width: "10%",
                align: "right"
              },
              {
                title: translate("GROSS_BALANCE"),
                field: "grossBalance",
                currency: true,
                align: "right",
                widht: "12%",
                total: true
              },
              {
                title: translate("NET_BALANCE"),
                field: "netBalance",
                currency: true,
                align: "right",
                widht: "12%",
                total: true
              },
              {
                title: translate("INCOME_TAX"),
                field: "incomeTaxBalance",
                currency: true,
                align: "right",
                total: true
              },
              {
                title: translate("IOF"),
                field: "iofBalance",
                currency: true,
                align: "right",
                width: "5%"
              },
              {
                title: translate("GROSS_REVENUE"),
                field: "grossResultBalance",
                currency: true,
                align: "right",
                width: "14%",
                total: true
              }
            ]}
            data={buildRowsFunds(funds)}
            total={totalFunds}
            totalPosition={UP}
            shimmerLoading={{ rows: 10, loading }}
          />
        )}
        {!loading && (
          <LinkCard
            iconType="FiLoader"
            to="/investments/positions/funds"
            anchorText={translate("CLICK_TO_VIEW_FUNDS")}
            versionText={translate("WISH_TO_SEE_SIMPLIFIED_VERSION")}
            dataTest="LinkToSimplified"
            noSpan
            withUnderline
            fontSize={14}
          />
        )}
      </Container>
    </Wrapper>
  );
}

Desktop.defaultProps = {
  funds: [],
  loading: false
};

Desktop.propTypes = {
  funds: arrayOf(
    shape({
      name: string,
      date: string,
      investmentDate: string,
      iofBalance: number,
      grossResultBalance: number,
      grossBalance: number,
      incomeTaxBalance: number,
      portfolioShare: number,
      quantity: number
    })
  ),
  loading: bool,
  isEmpty: bool
};

export default Desktop;
