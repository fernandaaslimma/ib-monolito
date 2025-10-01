import React, { Fragment } from "react";
import { arrayOf, shape, number, string, bool } from "prop-types";

import { translate } from "../../../../utils/i18n";
import {
  Wrapper,
  AssetWrapper,
  AssetRow,
  MobileRow,
  IncomeName,
  InfoWrapper,
  PrincipalValue,
  SecondaryValue,
  MobileGrid,
  GridInfo,
  Text,
  Label,
  TopHeader,
  TitleHeader,
  HeaderData,
  HeaderInfo,
  HeaderLabel,
  HeaderText
} from "../../../../styles/mobileGrid";
import { IssuanceDate, Issuer } from "./styles";
import { isValueNullOrUndefined } from "../../../../utils/validations/input";
import { CREATE_TRANSACTION, DEFAULT_VALUE } from "../../../../utils/constants";
import DefaultContent from "../../../common/DefaultContent";
import Card from "../../../common/Card";
import formatNumber from "../../../../utils/formatNumber";
import formatDate from "../../../../utils/formatDate";
import { black30 } from "../../../../styles/settings";
import Icon from "../../../common/Icon";
import ShimmerLoading from "../../../common/ShimmerLoading";
import { AlertMessage, Button } from "react-bocombbm-components";
import { BtnWrapper, Separator, StickyWrapper } from "../../WithdrawLca/styles";
import PendingTransactions from "../../../common/PendingTransactions";
import { checkIfHasAccess } from "../../../common/CanAccess/CanAccess";

const buildShimmerLoadingRow = () => {
  return (
    <AssetWrapper>
      <AssetRow>
        <Card>
          <MobileRow>
            <IncomeName>
              <ShimmerLoading />
            </IncomeName>
            <InfoWrapper>
              <IssuanceDate>{`${translate("ISSUANCE")}:`}</IssuanceDate>
              <Issuer>
                <ShimmerLoading />
              </Issuer>
            </InfoWrapper>
          </MobileRow>
          <MobileRow>
            <Label>{`${translate("NET_BALANCE")} (R$)`}</Label>
            <PrincipalValue>
              <ShimmerLoading />
            </PrincipalValue>
          </MobileRow>
          <MobileRow>
            <Label>{`${translate("GROSS_REVENUE")} (R$)`}</Label>
            <PrincipalValue>
              <ShimmerLoading />
            </PrincipalValue>
          </MobileRow>
          <MobileRow>
            <Label>{`${translate("GROSS_BALANCE")} (R$)`}</Label>
            <PrincipalValue>
              <ShimmerLoading />
            </PrincipalValue>
          </MobileRow>
          <Separator />
          <MobileGrid>
            <GridInfo>
              <Label>{translate("EXPIRATION")}</Label>
              <SecondaryValue>
                <ShimmerLoading />
              </SecondaryValue>
            </GridInfo>
            <GridInfo>
              <Label>{translate("REFERENCE_DATE")}</Label>
              <SecondaryValue>
                <ShimmerLoading />
              </SecondaryValue>
            </GridInfo>
            <GridInfo>
              <Label>{translate("INDEX")}</Label>
              <SecondaryValue>
                <ShimmerLoading />
              </SecondaryValue>
            </GridInfo>
            <GridInfo>
              <Label>{`${translate("PORTFOLIO")} (%)`}</Label>
              <SecondaryValue>
                <ShimmerLoading />
              </SecondaryValue>
            </GridInfo>
            <GridInfo>
              <Label> {`${translate("INCOME_TAX")} (R$)`}</Label>
              <SecondaryValue>
                <ShimmerLoading />
              </SecondaryValue>
            </GridInfo>
            <GridInfo>
              <Label>{`${translate("IOF")} (R$)`}</Label>
              <SecondaryValue>
                <ShimmerLoading />
              </SecondaryValue>
            </GridInfo>
          </MobileGrid>
        </Card>
      </AssetRow>
    </AssetWrapper>
  );
};

const buildRows = (rows, loading) => {
  if (loading) {
    return buildShimmerLoadingRow();
  }
  return rows.map((b, i) => (
    <AssetWrapper key={`mobileFixedIncome_${i}`}>
      <AssetRow>
        <Card data-test={`Card-${i}`}>
          <MobileRow>
            <IncomeName>{b.name}</IncomeName>
            <InfoWrapper>
              <IssuanceDate>{`${translate("ISSUANCE")}: ${formatDate(
                b.issueDate
              )}`}</IssuanceDate>
              <Issuer>{b.issuer}</Issuer>
            </InfoWrapper>
          </MobileRow>
          <MobileRow>
            <Label>{`${translate("NET_BALANCE")} (R$)`}</Label>
            <PrincipalValue>
              {formatNumber(b.netBalance, { digits: 2 })}
            </PrincipalValue>
          </MobileRow>
          <MobileRow>
            <Label>{`${translate("GROSS_REVENUE")} (R$)`}</Label>
            <PrincipalValue>
              {formatNumber(b.grossResultBalance, { digits: 2 })}
            </PrincipalValue>
          </MobileRow>
          <MobileRow>
            <Label>{`${translate("GROSS_BALANCE")} (R$)`}</Label>
            <PrincipalValue>
              {formatNumber(b.grossBalance, { digits: 2 })}
            </PrincipalValue>
          </MobileRow>
          <Separator />
          <MobileGrid>
            <GridInfo>
              <Label>{translate("MATURITY")}</Label>
              <SecondaryValue>{formatDate(b.maturityDate)}</SecondaryValue>
            </GridInfo>
            <GridInfo>
              <Label>{translate("REFERENCE_DATE")}</Label>
              <SecondaryValue>{formatDate(b.date)}</SecondaryValue>
            </GridInfo>
            <GridInfo>
              <Label>{translate("INDEX")}</Label>
              <SecondaryValue>{b.indexer}</SecondaryValue>
            </GridInfo>
          </MobileGrid>
          <MobileGrid>
            <GridInfo>
              <Label>{`${translate("PORTFOLIO")} (%)`}</Label>
              <SecondaryValue>{b.portfolioShare}</SecondaryValue>
            </GridInfo>
            <GridInfo>
              <Label> {`${translate("INCOME_TAX")} (R$)`}</Label>
              <SecondaryValue>
                {formatNumber(b.incomeTaxBalance, { digits: 2 })}
              </SecondaryValue>
            </GridInfo>
            <GridInfo>
              <Label>{`${translate("IOF")} (R$)`}</Label>
              <SecondaryValue>
                {formatNumber(b.iofBalance, { digits: 2 })}
              </SecondaryValue>
            </GridInfo>
          </MobileGrid>
          <MobileGrid>
            <GridInfo>
              <Label>{translate("QUANTITY")}</Label>
              <Text>
                {isValueNullOrUndefined(b.quantity)
                  ? DEFAULT_VALUE
                  : formatNumber(b.quantity, { digits: 2 })}
              </Text>
            </GridInfo>
            <GridInfo>
              <Label>{`${translate("RATE")} (%)`}</Label>
              <SecondaryValue>{b.indexerRate}</SecondaryValue>
            </GridInfo>
          </MobileGrid>
        </Card>
      </AssetRow>
    </AssetWrapper>
  ));
};

const buildTopInfo = (totalFixedIncome, loading) => {
  const portfolioShare = loading ? (
    <ShimmerLoading />
  ) : (
    totalFixedIncome && totalFixedIncome.portfolioShare
  );

  const grossBalance = loading ? (
    <ShimmerLoading />
  ) : (
    formatNumber(totalFixedIncome && totalFixedIncome.grossBalance, {
      digits: 2
    })
  );

  const netBalance = loading ? (
    <ShimmerLoading />
  ) : (
    formatNumber(totalFixedIncome && totalFixedIncome.netBalance, {
      digits: 2
    })
  );

  const incomeTaxBalance = loading ? (
    <ShimmerLoading />
  ) : (
    formatNumber(totalFixedIncome && totalFixedIncome.incomeTaxBalance, {
      digits: 2
    })
  );

  const iofBalance = loading ? (
    <ShimmerLoading />
  ) : (
    formatNumber(totalFixedIncome && totalFixedIncome.iofBalance, {
      digits: 2
    })
  );

  const grossResultBalance = loading ? (
    <ShimmerLoading />
  ) : (
    formatNumber(totalFixedIncome && totalFixedIncome.grossResultBalance, {
      digits: 2
    })
  );

  return (
    <TopHeader>
      <TitleHeader>{translate("TOTAL")}</TitleHeader>
      <HeaderData>
        <HeaderInfo>
          <HeaderLabel>{`${translate("GROSS_BALANCE")} (R$)`}</HeaderLabel>
          <HeaderText>{grossBalance}</HeaderText>
        </HeaderInfo>
        <HeaderInfo>
          <HeaderLabel>{`${translate("NET_BALANCE")} (R$)`}</HeaderLabel>
          <HeaderText>{netBalance}</HeaderText>
        </HeaderInfo>
        <HeaderInfo>
          <HeaderLabel>{`${translate("PORTFOLIO")} (%)`}</HeaderLabel>
          <HeaderText>{portfolioShare}</HeaderText>
        </HeaderInfo>
        <HeaderInfo>
          <HeaderLabel>{`${translate("INCOME_TAX")} (R$)`}</HeaderLabel>
          <HeaderText>{incomeTaxBalance}</HeaderText>
        </HeaderInfo>
        <HeaderInfo>
          <HeaderLabel>{`${translate("IOF")} (R$)`}</HeaderLabel>
          <HeaderText>{iofBalance}</HeaderText>
        </HeaderInfo>
        <HeaderInfo>
          <HeaderLabel>{`${translate("GROSS_REVENUE")} (R$)`}</HeaderLabel>
          <HeaderText>{grossResultBalance}</HeaderText>
        </HeaderInfo>
      </HeaderData>
    </TopHeader>
  );
};

function Mobile({
  fixedIncome,
  totalFixedIncome,
  isEmpty,
  loading,
  pendingTransactions,
  totalLca,
  verifyOnGoingTransactions,
  userInfo
}) {
  return (
    <Fragment>
      {isEmpty ? (
        <DefaultContent
          data-test="Empty_Position"
          Icon={() => <Icon type="EmptyWallet" color={black30} />}
          primaryText={translate("NO_RECORDS")}
          secondaryTexts={[translate("NO_RECORD_WAS_FOUND")]}
        />
      ) : (
        <Wrapper>
          {buildTopInfo(totalFixedIncome, loading)}
          {checkIfHasAccess(userInfo, [CREATE_TRANSACTION]) &&
            pendingTransactions &&
            pendingTransactions.length > 0 && (
              <PendingTransactions
                backgroundColor={"#EEF1F3"}
                pendingTransactions={pendingTransactions}
                mode={"mobile"}
              />
            )}
          {buildRows(fixedIncome, loading)}
        </Wrapper>
      )}
      {checkIfHasAccess(userInfo, [CREATE_TRANSACTION]) &&
      !loading &&
      (!totalLca || totalLca === 0) ? (
        <AlertMessage
          icon="Attention"
          type="neutral"
          spacing={{
            top: "s",
            bottom: "s",
            right: "s",
            left: "s"
          }}
        >
          {translate("NO_LCA_WITH_LIQUIDITY")}
        </AlertMessage>
      ) : null}

      {checkIfHasAccess(userInfo, [CREATE_TRANSACTION]) ? (
        <StickyWrapper>
          <Separator />
          <BtnWrapper>
            <Button
              disabled={!totalLca || totalLca === 0}
              spacing={{ top: "s", bottom: "s", right: "s", left: "s" }}
              onClick={() => verifyOnGoingTransactions()}
            >
              {translate("FIXED_INCOME_WITHDRAW_LCA")}
            </Button>
          </BtnWrapper>
        </StickyWrapper>
      ) : null}
    </Fragment>
  );
}

Mobile.defaultProps = {
  fixedIncome: [],
  loading: false,
  isEmpty: false
};

Mobile.propTypes = {
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

export default Mobile;
