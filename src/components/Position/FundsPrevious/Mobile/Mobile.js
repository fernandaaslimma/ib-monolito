import React, { Fragment } from "react";
import { arrayOf, shape, number, string, bool } from "prop-types";

import { translate } from "../../../../utils/i18n";
import {
  Wrapper,
  AssetWrapper,
  AssetRow,
  MobileRow,
  InfoWrapper,
  PrincipalValue,
  SecondaryValue,
  Separator,
  MobileGrid,
  GridInfo,
  Label,
  Text,
  TopHeader,
  TitleHeader,
  HeaderData,
  HeaderInfo,
  HeaderLabel,
  HeaderText,
  Name
} from "../../../../styles/mobileGrid";
import DefaultContent from "../../../common/DefaultContent";
import { isValueNullOrUndefined } from "../../../../utils/validations/input";
import { DEFAULT_VALUE } from "../../../../utils/constants";
import Card from "../../../common/Card";
import formatNumber from "../../../../utils/formatNumber";
import formatDate from "../../../../utils/formatDate";
import { black30 } from "../../../../styles/settings";
import Icon from "../../../common/Icon";
import ShimmerLoading from "../../../common/ShimmerLoading";
import LinkCard from "../../../common/LinkCard";

const buildShimmerLoadingRow = () => {
  return (
    <AssetWrapper>
      <AssetRow>
        <Card>
          <MobileRow>
            <InfoWrapper>
              <Name>
                {`${translate("NAME")}: `}
                <ShimmerLoading />
              </Name>
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
              <Label>{translate("APPL_DATE")}</Label>
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
              <Label>{`${translate("IOF")} (R$)`}</Label>
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
              <Name>{`${translate("NAME")}: ${b.name}`}</Name>
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
              <Label>{translate("APPL_DATE")}</Label>
              <SecondaryValue>{formatDate(b.investmentDate)}</SecondaryValue>
            </GridInfo>
            <GridInfo>
              <Label>{translate("REFERENCE_DATE")}</Label>
              <SecondaryValue>{formatDate(b.date)}</SecondaryValue>
            </GridInfo>
            <GridInfo>
              <Label>{`${translate("IOF")} (R$)`}</Label>
              <SecondaryValue>
                {formatNumber(b.iofBalance, { digits: 2 })}
              </SecondaryValue>
            </GridInfo>
            <GridInfo>
              <Label> {`${translate("INCOME_TAX")} (R$)`}</Label>
              <SecondaryValue>
                {formatNumber(b.incomeTaxBalance, { digits: 2 })}
              </SecondaryValue>
            </GridInfo>
            <GridInfo>
              <Label>{translate("QUANTITY")}</Label>
              <Text>
                {isValueNullOrUndefined(b.quantity)
                  ? DEFAULT_VALUE
                  : formatNumber(b.quantity, { digits: 8 })}
              </Text>
            </GridInfo>
          </MobileGrid>
        </Card>
      </AssetRow>
    </AssetWrapper>
  ));
};

const buildTopInfo = (totalFunds, loading) => {
  const portfolioShare = loading ? (
    <ShimmerLoading />
  ) : (
    totalFunds && totalFunds.portfolioShare
  );

  const grossBalance = loading ? (
    <ShimmerLoading />
  ) : (
    formatNumber(totalFunds && totalFunds.grossBalance, { digits: 2 })
  );

  const netBalance = loading ? (
    <ShimmerLoading />
  ) : (
    formatNumber(totalFunds && totalFunds.netBalance, { digits: 2 })
  );

  return (
    <TopHeader>
      <TitleHeader>{translate("TOTAL")}</TitleHeader>
      <HeaderData>
        <HeaderInfo>
          <HeaderLabel>{`${translate("PORTFOLIO")} (%)`}</HeaderLabel>
          <HeaderText>{portfolioShare}</HeaderText>
        </HeaderInfo>
        <HeaderInfo>
          <HeaderLabel>{`${translate("GROSS_BALANCE")} (R$)`}</HeaderLabel>
          <HeaderText>{grossBalance}</HeaderText>
        </HeaderInfo>
        <HeaderInfo>
          <HeaderLabel>{`${translate("NET_BALANCE")} (R$)`}</HeaderLabel>
          <HeaderText>{netBalance}</HeaderText>
        </HeaderInfo>
      </HeaderData>
    </TopHeader>
  );
};

function Mobile({ funds, totalFunds, isEmpty, loading }) {
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
          {buildTopInfo(totalFunds, loading)}
          {buildRows(funds, loading)}
          <AssetWrapper>
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
          </AssetWrapper>
        </Wrapper>
      )}
    </Fragment>
  );
}

Mobile.defaultProps = {
  funds: [],
  loading: false,
  isEmpty: false
};

Mobile.propTypes = {
  funds: arrayOf(
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
      iofBalance: number
    })
  ),
  loading: bool,
  isEmpty: bool
};

export default Mobile;
