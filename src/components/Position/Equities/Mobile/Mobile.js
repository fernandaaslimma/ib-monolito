import React, { Fragment } from "react";
import { arrayOf, shape, number, string, bool } from "prop-types";

import { translate } from "../../../../utils/i18n";
import {
  Wrapper,
  AssetWrapper,
  AssetRow,
  MobileRow,
  MobileGrid,
  GridInfo,
  InfoWrapper,
  Text,
  TopHeader,
  Info,
  Label,
  TitleHeader,
  HeaderLabel,
  HeaderText,
  HeaderInfo,
  HeaderData,
  Name
} from "../../../../styles/mobileGrid";
import DefaultContent from "../../../common/DefaultContent";
import Card from "../../../common/Card";
import { isValueNullOrUndefined } from "../../../../utils/validations/input";
import { DEFAULT_VALUE } from "../../../../utils/constants";
import formatNumber from "../../../../utils/formatNumber";
import formatDate from "../../../../utils/formatDate";
import { black30 } from "../../../../styles/settings";
import Icon from "../../../common/Icon";
import ShimmerLoading from "../../../common/ShimmerLoading";

const buildShimmerLoadingRow = () => {
  return (
    <AssetWrapper>
      <AssetRow>
        <Card>
          <InfoWrapper>
            <Name>
              {`${translate("NAME")}: `} <ShimmerLoading />
            </Name>
          </InfoWrapper>
          <MobileRow>
            <Info>
              <Label align="left">{translate("REFERENCE_DATE")}</Label>
              <Text align="left">
                <ShimmerLoading />
              </Text>
            </Info>
            <Info>
              <Label align="right">{`${translate("PORTFOLIO")} (%)`}</Label>
              <Text align="right">
                <ShimmerLoading />
              </Text>
            </Info>
            <Info>
              <Label align="right">{`${translate(
                "GROSS_BALANCE"
              )} (R$)`}</Label>
              <Text align="right">
                <ShimmerLoading />
              </Text>
            </Info>
          </MobileRow>
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
    <AssetWrapper key={`mobileEquity_${i}`}>
      <AssetRow>
        <Card data-test={`Card-${i}`}>
          <InfoWrapper>
            <Name>{`${translate("NAME")}: ${b.name}`}</Name>
          </InfoWrapper>
          <MobileGrid>
            <GridInfo>
              <Label>{translate("REFERENCE_DATE")}</Label>
              <Text>{formatDate(b.date)}</Text>
            </GridInfo>
            <GridInfo>
              <Label>{`${translate("PORTFOLIO")} (%)`}</Label>
              <Text>{formatNumber(b.portfolioShare, { digits: 2 })}</Text>
            </GridInfo>
            <GridInfo>
              <Label>{`${translate("GROSS_BALANCE")} (R$)`}</Label>
              <Text>{formatNumber(b.grossBalance, { digits: 2 })}</Text>
            </GridInfo>
          </MobileGrid>
          <MobileGrid>
            <GridInfo>
              <Label>{translate("QUANTITY")}</Label>
              <Text>
                {isValueNullOrUndefined(b.quantity)
                  ? DEFAULT_VALUE
                  : formatNumber(b.quantity, { digits: 0 })}
              </Text>
            </GridInfo>
          </MobileGrid>
        </Card>
      </AssetRow>
    </AssetWrapper>
  ));
};

const buildTopInfo = (totalEquities, loading) => {
  const grossBalance = loading ? (
    <ShimmerLoading />
  ) : (
    formatNumber(totalEquities && totalEquities.grossBalance, { digits: 2 })
  );

  return (
    <TopHeader>
      <TitleHeader>{translate("TOTAL")}</TitleHeader>
      <HeaderData>
        <HeaderInfo>
          <HeaderLabel>{`${translate("GROSS_BALANCE")} (R$)`}</HeaderLabel>
          <HeaderText>{grossBalance}</HeaderText>
        </HeaderInfo>
      </HeaderData>
    </TopHeader>
  );
};

function Mobile({ equities, totalEquities, isEmpty, loading }) {
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
          {buildTopInfo(totalEquities, loading)}
          {buildRows(equities, loading)}
        </Wrapper>
      )}
    </Fragment>
  );
}

Mobile.defaultProps = {
  equities: [],
  loading: false,
  isEmpty: false
};

Mobile.propTypes = {
  equities: arrayOf(
    shape({
      name: string,
      date: string,
      issuer: string,
      maturityDate: string,
      grossBalance: number,
      netBalance: number,
      quantity: number,
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
