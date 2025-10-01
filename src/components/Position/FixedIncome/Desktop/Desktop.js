import React from "react";
import { arrayOf, shape, number, string, bool } from "prop-types";
import { Wrapper, Name } from "../../styles";
import formatNumber from "../../../../utils/formatNumber";
import formatDate from "../../../../utils/formatDate";
import { isValueNullOrUndefined } from "../../../../utils/validations/input";

import DefaultContent from "../../../common/DefaultContent";
import { black30 } from "../../../../styles/settings";
import Icon from "../../../common/Icon";
import {
  UP,
  DEFAULT_VALUE,
  CREATE_TRANSACTION
} from "../../../../utils/constants";
import Table from "../../../../components/common/Table/";
import { translate } from "../../../../utils/i18n";
import { StickyWrapper } from "../../../Transfers/IndividualWireTransfer/styles";
import { AlertMessage, Button } from "react-bocombbm-components";
import { BtnWrapper, Separator } from "../../WithdrawLca/styles";
import { AlertWrapper } from "./styles";
import { checkIfHasAccess } from "../../../common/CanAccess/CanAccess";

const buildRows = rows =>
  rows.map(b => ({
    name: <Name>{b.name}</Name>,
    issuer: <span>{b.issuer}</span>,
    maturityDate: <span>{formatDate(b.maturityDate)}</span>,
    indexerRate: <span>{formatNumber(b.indexerRate)}</span>,
    indexer: <span>{b.indexer}</span>,
    date: <span>{formatDate(b.date)}</span>,

    quantity: (
      <span>
        {isValueNullOrUndefined(b.quantity)
          ? DEFAULT_VALUE
          : formatNumber(b.quantity, { digits: 2 })}
      </span>
    ),
    grossBalance: <span>{formatNumber(b.grossBalance, { digits: 2 })}</span>,
    netBalance: <span>{formatNumber(b.netBalance, { digits: 2 })}</span>,
    portfolioShare: <span>{formatNumber(b.portfolioShare)}</span>,
    incomeTaxBalance: (
      <span>{formatNumber(b.incomeTaxBalance, { digits: 2 })}</span>
    ),
    iofBalance: <span>{formatNumber(b.iofBalance, { digits: 2 })}</span>,
    grossResultBalance: (
      <span>{formatNumber(b.grossResultBalance, { digits: 2 })}</span>
    )
  }));

function Desktop({
  isEmpty,
  fixedIncome,
  totalFixedIncome,
  loading,
  pendingTransactions,
  totalLca,
  verifyOnGoingTransactions,
  userInfo
}) {
  return (
    <React.Fragment>
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
              { title: translate("NAME"), field: "name", width: "14%" },
              {
                title: translate("ISSUANCE"),
                field: "issuer",
                width: "15%"
              },
              {
                title: translate("MATURITY"),
                field: "maturityDate",
                align: "right"
              },
              {
                title: translate("RATE"),
                field: "indexerRate",
                percent: true,
                align: "right",
                width: "6%"
              },
              {
                title: translate("INDEX"),
                field: "indexer",
                width: "3%",
                align: "right"
              },
              {
                title: translate("REFERENCE_DATE"),
                field: "date",
                align: "right",
                width: "11%"
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
                width: "12%",
                total: true
              },
              {
                title: translate("NET_BALANCE"),
                field: "netBalance",
                currency: true,
                align: "right",
                width: "11%",
                total: true
              },
              {
                title: translate("PORTFOLIO"),
                field: "portfolioShare",
                align: "right",
                percent: true,
                width: "7%",
                total: true
              },
              {
                title: translate("INCOME_TAX"),
                field: "incomeTaxBalance",
                currency: true,
                total: true,
                align: "right",
                width: "9.6%"
              },
              {
                title: translate("IOF"),
                field: "iofBalance",
                currency: true,
                total: true,
                align: "right",
                width: "6%"
              },
              {
                title: translate("GROSS_REVENUE"),
                field: "grossResultBalance",
                currency: true,
                align: "right",
                total: true,
                width: "15%"
              }
            ]}
            data={buildRows(fixedIncome)}
            total={totalFixedIncome}
            totalPosition={UP}
            shimmerLoading={{ rows: 10, loading }}
            pendingTransactions={pendingTransactions}
            userInfo={userInfo}
          />
        )}
      </Wrapper>
      {checkIfHasAccess(userInfo, [CREATE_TRANSACTION]) &&
      !loading &&
      (!totalLca || totalLca === 0) ? (
        <AlertWrapper data-test="alertMessageLCA">
          <AlertMessage
            icon="Attention"
            type="neutral"
            spacing={{
              top: "s",
              bottom: "s",
              right: "none",
              left: "none"
            }}
          >
            {translate("NO_LCA_WITH_LIQUIDITY")}
          </AlertMessage>
        </AlertWrapper>
      ) : null}

      {checkIfHasAccess(userInfo, [CREATE_TRANSACTION]) ? (
        <StickyWrapper>
          <Separator />
          <BtnWrapper>
            <Button
              dataTest="ButtonWithdrawLCA"
              disabled={!totalLca || totalLca === 0}
              spacing={{ top: "s", bottom: "s", right: "s", left: "s" }}
              onClick={() => verifyOnGoingTransactions()}
            >
              {translate("FIXED_INCOME_WITHDRAW_LCA")}
            </Button>
          </BtnWrapper>
        </StickyWrapper>
      ) : null}
    </React.Fragment>
  );
}

Desktop.defaultProps = {
  fixedIncome: [],
  loading: false,
  isEmpty: false
};

Desktop.propTypes = {
  fixedIncome: arrayOf(
    shape({
      name: string,
      date: string,
      issuer: string,
      maturityDate: string,
      grossBalance: number,
      netBalance: number,
      portfolioShare: number,
      indexerRate: number,
      indexer: string,
      incomeTaxBalance: number,
      iofBalance: number,
      quantity: number
    })
  ),
  loading: bool,
  isEmpty: bool
};

export default Desktop;
