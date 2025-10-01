import React, { Fragment } from "react";
import { arrayOf, shape, number, string, bool, func } from "prop-types";

import { translate } from "../../../../utils/i18n";
import {
  Wrapper,
  LinkCardWrapper,
  AssetWrapper,
  AssetRow,
  MobileRow,
  InfoWrapper,
  IncomeName,
  PrincipalValue,
  SecondaryValue,
  Separator,
  MobileGrid,
  GridInfo,
  GridInfoLeftBorder,
  Label,
  TopHeader,
  TitleHeader,
  HeaderData,
  HeaderInfo,
  HeaderLabel,
  HeaderText,
  Name
} from "../../../../styles/mobileGrid";

import loadable from "loadable-components";
import Pagination from "../../../common/Table/Pagination";

import DefaultContent from "../../../common/DefaultContent";
import Card from "../../../common/Card";
import formatNumber from "../../../../utils/formatNumber";
import formatDate from "../../../../utils/formatDate";
import { black30 } from "../../../../styles/settings";
import Icon from "../../../common/Icon";
import ShimmerLoading from "../../../common/ShimmerLoading";
import LinkCard from "../../../common/LinkCard";

const Filter = loadable(() => import("../../../common/Table/Filter"));
const PAGE_SIZE = 10;

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
              <Label>{`${translate("DATE")}:`}</Label>
              <ShimmerLoading />
            </InfoWrapper>
          </MobileRow>
          <MobileRow>
            <InfoWrapper>
              <Name>
                {`${translate("GROSS_VALUE")}: `}
                <ShimmerLoading />
              </Name>
            </InfoWrapper>
          </MobileRow>
          <MobileRow>
            <Label>{`${translate("NET_VALUE")}`}</Label>
            <PrincipalValue>
              <ShimmerLoading />
            </PrincipalValue>
          </MobileRow>
          <Separator />
          <MobileGrid>
            <GridInfo>
              <Label>{translate("APPL_DATE")}</Label>
              <SecondaryValue>
                <ShimmerLoading />
              </SecondaryValue>
            </GridInfo>
            <GridInfoLeftBorder>
              <Label> {`${translate("INCOME_TAX")} (R$)`}</Label>
              <SecondaryValue>
                <ShimmerLoading />
              </SecondaryValue>
            </GridInfoLeftBorder>
            <GridInfoLeftBorder>
              <Label> {`${translate("IOF")} (R$)`}</Label>
              <SecondaryValue>
                <ShimmerLoading />
              </SecondaryValue>
            </GridInfoLeftBorder>
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
    <AssetWrapper key={`mobileFunds_${i}`}>
      <AssetRow>
        <Card data-test={`Card-${i}`}>
          <MobileRow>
            <InfoWrapper>
              <Name>{b.assetName}</Name>
            </InfoWrapper>
            <InfoWrapper>
              <Name toRight>{`${translate("DATE")}: ${formatDate(
                b.date
              )}`}</Name>
            </InfoWrapper>
          </MobileRow>

          <MobileRow>
            <Label>{`${translate("GROSS_VALUE")} (R$)`}</Label>
            <PrincipalValue>
              {formatNumber(b.grossValue, { digits: 2 })}
            </PrincipalValue>
          </MobileRow>
          <MobileRow>
            <Label>{`${translate("NET_VALUE")} (R$)`}</Label>
            <PrincipalValue>
              {formatNumber(b.netValue, { digits: 2 })}
            </PrincipalValue>
          </MobileRow>

          <Separator />

          <MobileGrid>
            <GridInfo>
              <Label>{translate("TYPE")}</Label>
              <SecondaryValue>{b.type}</SecondaryValue>
            </GridInfo>
            <GridInfoLeftBorder>
              <Label>{`${translate("INCOME_TAX")} (R$)`}</Label>
              <SecondaryValue>
                {formatNumber(b.incomeTax, { digits: 2 })}
              </SecondaryValue>
            </GridInfoLeftBorder>
            <GridInfoLeftBorder>
              <Label>{`${translate("IOF")} (R$)`}</Label>
              <SecondaryValue>
                {formatNumber(b.iof, { digits: 2 })}
              </SecondaryValue>
            </GridInfoLeftBorder>
          </MobileGrid>
        </Card>
      </AssetRow>
    </AssetWrapper>
  ));
};

const buildTopInfo = (totaltransactions, loading) => {
  const incomeTax = loading ? (
    <ShimmerLoading />
  ) : (
    formatNumber(totaltransactions && totaltransactions.incomeTax, {
      digits: 2
    })
  );

  const iof = loading ? (
    <ShimmerLoading />
  ) : (
    formatNumber(totaltransactions && totaltransactions.iof, { digits: 2 })
  );

  const grossValue = loading ? (
    <ShimmerLoading />
  ) : (
    formatNumber(totaltransactions && totaltransactions.grossValue, {
      digits: 2
    })
  );

  const netValue = loading ? (
    <ShimmerLoading />
  ) : (
    formatNumber(totaltransactions && totaltransactions.netValue, { digits: 2 })
  );

  return (
    <TopHeader>
      <TitleHeader>{translate("TOTAL")}</TitleHeader>
      <HeaderData>
        <HeaderInfo>
          <HeaderLabel>{`${translate("INCOME_TAX")} (R$`}</HeaderLabel>
          <HeaderText>{incomeTax}</HeaderText>
        </HeaderInfo>
        <HeaderInfo>
          <HeaderLabel>{`${translate("IOF")} (R$)`}</HeaderLabel>
          <HeaderText>{iof}</HeaderText>
        </HeaderInfo>
        <HeaderInfo>
          <HeaderLabel>{`${translate("GROSS_VALUE")} (R$)`}</HeaderLabel>
          <HeaderText>{grossValue}</HeaderText>
        </HeaderInfo>
        <HeaderInfo>
          <HeaderLabel>{`${translate("NET_VALUE")} (R$)`}</HeaderLabel>
          <HeaderText>{netValue}</HeaderText>
        </HeaderInfo>
      </HeaderData>
    </TopHeader>
  );
};

function Mobile({
  fundsIncomeTransactions,
  isEmpty,
  activePage,
  totalCount,
  loading,
  onFilter,
  onChangePage
}) {
  const totaltransactions = generateSum(fundsIncomeTransactions);
  return (
    <Fragment>
      {!isEmpty && <Filter search={onFilter} />}
      {isEmpty && (
        <DefaultContent
          data-test="Empty_Position"
          Icon={() => <Icon type="EmptyWallet" color={black30} />}
          primaryText={translate("NO_RECORDS")}
          secondaryTexts={[translate("NO_RECORD_WAS_FOUND")]}
        />
      )}
      {!isEmpty && (
        <Wrapper>
          {buildTopInfo(totaltransactions, loading)}
          {buildRows(fundsIncomeTransactions, loading)}
        </Wrapper>
      )}
      {!isEmpty && (
        <Pagination
          onChangePage={onChangePage}
          pageTotal={totalCount}
          activePage={activePage}
          pageSize={PAGE_SIZE}
        />
      )}
      {!isEmpty && !loading && (
        <LinkCardWrapper>
          <LinkCard
            iconType="FiLoader"
            to="/investments/overview?menu=movements&from=funds"
            anchorText={translate("CLICK_TO_VIEW_FUNDS")}
            versionText={translate("WISH_TO_SEE_SIMPLIFIED_VERSION")}
            dataTest="LinkToSimplified"
            noSpan
            withUnderline
            fontSize={14}
          />
        </LinkCardWrapper>
      )}
    </Fragment>
  );
}

Mobile.defaultProps = {
  fundsIncomeTransactions: [],
  totalCount: 0
};

Mobile.propTypes = {
  fundsIncomeTransactions: arrayOf(
    shape({
      assetName: string,
      type: string,
      date: string,
      grossValue: number,
      netValue: number,
      incomeTax: number,
      iof: number
    })
  ),
  loading: bool,
  isEmpty: bool,
  totalCount: number,
  onFilter: func.isRequired,
  onChangePage: func.isRequired
};

export default Mobile;
