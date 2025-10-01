import React from "react";
import { arrayOf, shape, bool, string, array, object } from "prop-types";

import { translate } from "../../../../utils/i18n";
import {
  Wrapper,
  AssetWrapper,
  AssetRow,
  MobileRow,
  PrincipalValue,
  SecondaryValue,
  Separator,
  MobileGrid,
  GridInfo,
  GridInfoLeftBorder,
  Label
} from "../../../../styles/mobileGrid";
import { BalanceAmountRow, Title } from "../../styles";

import Card from "../../../common/Card";
import formatNumber from "../../../../utils/formatNumber";
import formatDate from "../../../../utils/formatDate";
import ShimmerLoading from "../../../common/ShimmerLoading";

const buildShimmerLoadingRow = () => {
  return (
    <AssetWrapper>
      <AssetRow>
        <Card>
          <MobileRow>
            <Label>{`${translate("OPEN_BALANCE_ON")}:`}</Label>
            <ShimmerLoading />
          </MobileRow>

          <Separator noMargin />
          <MobileGrid>
            <GridInfo>
              <Label>{translate("DATE")}</Label>
              <SecondaryValue>
                <ShimmerLoading />
              </SecondaryValue>
            </GridInfo>
            <GridInfoLeftBorder>
              <Label> {translate("TYPE")}</Label>
              <SecondaryValue>
                <ShimmerLoading />
              </SecondaryValue>
            </GridInfoLeftBorder>
            <GridInfoLeftBorder>
              <Label> {`${translate("VALUE")} (R$)`}</Label>
              <SecondaryValue>
                <ShimmerLoading />
              </SecondaryValue>
            </GridInfoLeftBorder>
          </MobileGrid>
          <Separator noMargin />

          <MobileRow>
            <Label>{`${translate("CLOSE_BALANCE_ON")}:`}</Label>
            <ShimmerLoading />
          </MobileRow>
        </Card>
      </AssetRow>
    </AssetWrapper>
  );
};

const buildTransactions = rows => {
  return rows.map((b, i) => (
    <MobileGrid key={`MobileGrid_${i}`} data-test={`MobileGrid-${i}`}>
      <GridInfo>
        <Label>{translate("DATE")}</Label>
        <SecondaryValue>{formatDate(b.date)}</SecondaryValue>
      </GridInfo>
      <GridInfoLeftBorder>
        <Label>{translate("TYPE")}</Label>
        <SecondaryValue>{b.type}</SecondaryValue>
      </GridInfoLeftBorder>
      <GridInfoLeftBorder>
        <Label>{`${translate("VALUE")} (R$)`}</Label>
        <SecondaryValue>
          {formatNumber(b.amount, { digits: 2 })}{" "}
        </SecondaryValue>
      </GridInfoLeftBorder>
    </MobileGrid>
  ));
};

const buildAccounts = accounts => {
  return accounts.map((account, index) => (
    <AssetWrapper key={index}>
      <AssetRow>
        <Title>{`${translate("CHECKING_ACCOUNT")} ${
          account.userCashAccount
        }`}</Title>

        <Card>
          <MobileRow>
            <Label>{`${translate("OPEN_BALANCE_ON")} ${formatDate(
              account.accountOpenBalance.date
            )}`}</Label>
            <PrincipalValue>
              <BalanceAmountRow
                red={account.accountOpenBalance.openBalance < 0}
              >
                {formatNumber(account.accountOpenBalance.openBalance, {
                  digits: 2
                })}
              </BalanceAmountRow>
            </PrincipalValue>
          </MobileRow>
          <Separator noMargin />

          {buildTransactions(account.cashAccountTransactions)}

          <Separator noMargin />
          <br />
          <MobileRow>
            <Label>{`${translate("CLOSE_BALANCE_ON")} ${formatDate(
              account.accountCloseBalance.date
            )}`}</Label>
            <PrincipalValue>
              <BalanceAmountRow
                red={account.accountCloseBalance.closeBalance < 0}
              >
                {formatNumber(account.accountCloseBalance.closeBalance, {
                  digits: 2
                })}
              </BalanceAmountRow>
            </PrincipalValue>
          </MobileRow>
        </Card>
      </AssetRow>
    </AssetWrapper>
  ));
};

function Mobile({ cashAccounts, loading }) {
  return (
    <Wrapper>
      {loading && buildShimmerLoadingRow()}
      {!loading && buildAccounts(cashAccounts)};
    </Wrapper>
  );
}

Mobile.defaultProps = {
  cashAccounts: [],
  loading: true
};

Mobile.propTypes = {
  loading: bool,
  cashAccounts: arrayOf(
    shape({
      userCashAccount: string,
      cashAccountTransactions: array,
      accountOpenBalance: object,
      accountCloseBalance: object
    })
  )
};

export default Mobile;
