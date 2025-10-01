import React, { Fragment } from "react";
import { arrayOf, shape, number, string, bool } from "prop-types";

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
  Label
} from "../../../../styles/mobileGrid";

import DefaultContent from "../../../common/DefaultContent";
import Icon from "../../../common/Icon";
import { black30 } from "../../../../styles/settings";

import Card from "../../../common/Card";
import formatNumber from "../../../../utils/formatNumber";
import formatDate from "../../../../utils/formatDate";
import ShimmerLoading from "../../../common/ShimmerLoading";

const buildShimmerLoadingRow = () => {
  return (
    <AssetWrapper>
      <AssetRow>
        <Card>
          <MobileGrid columns={2}>
            <GridInfo>
              <Label>{translate("ACCOUNT_NUMBER")}</Label>
              <ShimmerLoading />
            </GridInfo>
            <GridInfo alignRight>
              <Label>{translate("REFERENCE_DATE")}</Label>
              <ShimmerLoading />
            </GridInfo>
          </MobileGrid>
          <Separator />
          <br />
          <MobileRow>
            <Label>{translate("AVAILABLE_BALANCE")}</Label>
            <ShimmerLoading />
          </MobileRow>
          <MobileRow>
            <Label>{translate("BLOCKED_BALANCE")}</Label>
            <ShimmerLoading />
          </MobileRow>
          <MobileRow>
            <Label>{translate("TOTAL_BALANCE")}</Label>
            <ShimmerLoading />
          </MobileRow>
        </Card>
      </AssetRow>
    </AssetWrapper>
  );
};

const buildAccounts = rows => {
  return rows.map((b, i) => (
    <AssetWrapper
      key={`PositionAccountMobile${i}`}
      data-test={`PositionAccountMobile${i}`}
    >
      <AssetRow>
        <Card>
          <MobileGrid columns={2}>
            <GridInfo>
              <Label>{translate("ACCOUNT_NUMBER")}</Label>
              <SecondaryValue>{b.accountNumber}</SecondaryValue>
            </GridInfo>
            <GridInfo alignRight>
              <Label>{translate("REFERENCE_DATE")}</Label>
              <SecondaryValue>{formatDate(b.date)}</SecondaryValue>
            </GridInfo>
          </MobileGrid>
          <Separator />
          <br />
          <MobileRow>
            <Label>{translate("AVAILABLE_BALANCE")}</Label>
            <PrincipalValue>
              {formatNumber(b.availableBalance, { digits: 2 })}
            </PrincipalValue>
          </MobileRow>
          <MobileRow>
            <Label>{translate("BLOCKED_BALANCE")}</Label>
            <PrincipalValue>
              {formatNumber(b.blockedBalance, { digits: 2 })}
            </PrincipalValue>
          </MobileRow>
          <MobileRow>
            <Label>{translate("TOTAL_BALANCE")}</Label>
            <PrincipalValue>
              {formatNumber(b.totalBalance, { digits: 2 })}
            </PrincipalValue>
          </MobileRow>
        </Card>
      </AssetRow>
    </AssetWrapper>
  ));
};

function Mobile({ accounts, isEmpty, loading }) {
  return (
    <Fragment>
      <Wrapper>
        {isEmpty && (
          <DefaultContent
            data-test="Empty_Position"
            Icon={() => <Icon type="EmptyWallet" color={black30} />}
            primaryText={translate("NO_RECORDS")}
            secondaryTexts={[translate("NO_RECORD_WAS_FOUND")]}
          />
        )}
        {!isEmpty &&
          (() => {
            if (loading) {
              return buildShimmerLoadingRow();
            } else {
              return buildAccounts(accounts);
            }
          })()}
      </Wrapper>
    </Fragment>
  );
}

Mobile.defaultProps = {
  accounts: []
};

Mobile.propTypes = {
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

export default Mobile;
