import React, { Component, Fragment } from "react";
import { arrayOf, shape, number, string, func } from "prop-types";

import { FIXED_INCOME, FUNDS, ONE_HUNDRED } from "../../../../utils/constants";
import { translate } from "../../../../utils/i18n";
import Link from "../../../common/Link";
import getRouteForAsset from "../../../../utils/getRouteForAsset";
import formatNumber from "../../../../utils/formatNumber";
import Card from "../../../common/Card";
import {
  Title,
  AssetWrapper,
  AssetRow,
  TopHeader,
  TitleHeader,
  HeaderData,
  HeaderInfo,
  HeaderLabel,
  HeaderText,
  AssetType,
  ExpandCollapseArrow,
  AssetName,
  Info,
  InfoWrapper,
  InfoLabel,
  InfoValue,
  TotalCard,
  RedirectBox
} from "./styles.js";
import formatDate from "../../../../utils/formatDate";
import ShimmerLoading from "../../../common/ShimmerLoading";
import Icon from "../../../common/Icon";
import { black50 } from "../../../../styles/settings";

const buildCard = (assets, loading) => {
  return assets.map((a, i) => (
    <Fragment key={`mobileAsset_${i}`}>
      <AssetName>{loading ? <ShimmerLoading /> : a.name}</AssetName>
      <InfoWrapper length={assets.length}>
        <Info alignEnd>
          <InfoLabel>
            {loading ? (
              <ShimmerLoading />
            ) : (
              `${translate("GROSS_BALANCE")} (R$)`
            )}
          </InfoLabel>
          <InfoValue>
            {loading ? (
              <ShimmerLoading />
            ) : (
              formatNumber(a.grossBalance, { digits: 2 })
            )}
          </InfoValue>
        </Info>
        <Info alignEnd>
          <InfoLabel>
            {loading ? <ShimmerLoading /> : `${translate("NET_BALANCE")} (R$)`}
          </InfoLabel>
          <InfoValue>
            {loading ? (
              <ShimmerLoading />
            ) : (
              formatNumber(a.netBalance, { digits: 2 })
            )}
          </InfoValue>
        </Info>
        <Info alignEnd>
          <InfoLabel>
            {loading ? <ShimmerLoading /> : `${translate("PORTFOLIO")} (%)`}
          </InfoLabel>
          <InfoValue>
            {loading ? <ShimmerLoading /> : formatNumber(a.portfolioShare)}
          </InfoValue>
        </Info>
      </InfoWrapper>
    </Fragment>
  ));
};

const buildTotalAsset = (totalAsset, loading) => (
  <TotalCard>
    <AssetName uppercase>
      {loading ? <ShimmerLoading /> : translate("TOTAL")}
    </AssetName>
    <InfoWrapper>
      <Info alignEnd>
        <InfoLabel>
          {loading ? <ShimmerLoading /> : `${translate("GROSS_BALANCE")} (R$)`}
        </InfoLabel>
        <InfoValue>
          {loading ? (
            <ShimmerLoading />
          ) : (
            formatNumber(totalAsset.grossBalance, { digits: 2 })
          )}
        </InfoValue>
      </Info>
      <Info alignEnd>
        <InfoLabel>
          {loading ? <ShimmerLoading /> : `${translate("NET_BALANCE")} (R$)`}
        </InfoLabel>
        <InfoValue>
          {loading ? (
            <ShimmerLoading />
          ) : (
            formatNumber(totalAsset.netBalance, { digits: 2 })
          )}
        </InfoValue>
      </Info>
      <Info alignEnd>
        <InfoLabel>
          {loading ? <ShimmerLoading /> : `${translate("PORTFOLIO")} (%)`}
        </InfoLabel>
        <InfoValue>
          {loading ? (
            <ShimmerLoading />
          ) : totalAsset.portfolioShare > 100 ? (
            ONE_HUNDRED
          ) : (
            formatNumber(totalAsset.portfolioShare)
          )}
        </InfoValue>
      </Info>
    </InfoWrapper>
  </TotalCard>
);

export const generateSum = consolidatedPosition => {
  const initialConsolidatedPosition = {
    grossBalance: 0,
    netBalance: 0,
    portfolioShare: 0
  };

  return consolidatedPosition.reduce((acc, current) => {
    acc.grossBalance += current.grossBalance;
    acc.netBalance += current.netBalance;
    acc.portfolioShare += current.portfolioShare;
    return acc;
  }, initialConsolidatedPosition);
};

const buildTotalPositionInfo = (totalPosition, consolidatedPosition) => {
  const totalPortfolio =
    consolidatedPosition.length === 0 ? (
      <ShimmerLoading />
    ) : (
      totalPosition && ONE_HUNDRED
    );

  const totalNetBalance =
    consolidatedPosition.length === 0 ? (
      <ShimmerLoading />
    ) : (
      formatNumber(totalPosition && totalPosition.netBalance, { digits: 2 })
    );

  const totalGrossBalance =
    consolidatedPosition.length === 0 ? (
      <ShimmerLoading />
    ) : (
      formatNumber(totalPosition && totalPosition.grossBalance, { digits: 2 })
    );

  return (
    <TopHeader>
      <TitleHeader>{translate("TOTAL")}</TitleHeader>
      <HeaderData>
        <HeaderInfo>
          <HeaderLabel>{`${translate("GROSS_BALANCE")} (R$)`}</HeaderLabel>
          <HeaderText>{totalGrossBalance}</HeaderText>
        </HeaderInfo>
        <HeaderInfo>
          <HeaderLabel>{`${translate("NET_BALANCE")} (R$)`}</HeaderLabel>
          <HeaderText>{totalNetBalance}</HeaderText>
        </HeaderInfo>
        <HeaderInfo>
          <HeaderLabel>{`${translate("PORTFOLIO")} (%)`}</HeaderLabel>
          <HeaderText>{totalPortfolio}</HeaderText>
        </HeaderInfo>
      </HeaderData>
    </TopHeader>
  );
};

class ConsolidatedPositionTable extends Component {
  onCollapse(expandedIndex, assetType) {
    const { getAssetsByType, currentIndex } = this.props;
    getAssetsByType(assetType, expandedIndex, currentIndex);
  }

  buildCards() {
    const { consolidatedPosition, currentIndex, assets, loading } = this.props;

    const routeForAsset = getRouteForAsset(
      consolidatedPosition[currentIndex] &&
        consolidatedPosition[currentIndex].assetType
    );
    return (
      <Fragment>
        {consolidatedPosition.map((type, i) => (
          <AssetWrapper key={`mobileFunds_${i}`}>
            <AssetRow>
              <Card data-test={`Mobile_Consolidated_Position_Row${i}`}>
                <AssetType onClick={() => this.onCollapse(i, type.assetType)}>
                  {type.assetTypeLabel}
                  <ExpandCollapseArrow collapse={currentIndex === i}>
                    <Icon type="Arrow" color={black50} width="10" />
                  </ExpandCollapseArrow>
                </AssetType>
                {currentIndex === i && (
                  <Fragment>
                    {buildCard(assets, loading)}
                    {buildTotalAsset(generateSum(assets), loading)}
                    <RedirectBox>
                      {!loading &&
                        consolidatedPosition[currentIndex] &&
                        [FIXED_INCOME, FUNDS].includes(
                          consolidatedPosition[currentIndex].assetType
                        ) && (
                          <Link to={routeForAsset} anchor>
                            {translate("SEE_FULL_POSITION")}
                          </Link>
                        )}
                    </RedirectBox>
                  </Fragment>
                )}
              </Card>
            </AssetRow>
          </AssetWrapper>
        ))}
      </Fragment>
    );
  }

  render() {
    const { consolidatedPosition } = this.props;

    const date = formatDate(
      consolidatedPosition[0] && consolidatedPosition[0].date
    );

    return (
      <div data-test="Mobile_Consolidated_Position">
        <Title>{`${translate("CONSOLIDATED_POSITION_ON")} ${date}`}</Title>
        {this.buildCards()}
        {buildTotalPositionInfo(
          generateSum(consolidatedPosition),
          consolidatedPosition
        )}
      </div>
    );
  }
}

ConsolidatedPositionTable.defaultProps = {
  consolidatedPosition: [],
  assets: []
};

ConsolidatedPositionTable.propTypes = {
  consolidatedPosition: arrayOf(
    shape({
      name: string,
      netBalance: number,
      grossBalance: number,
      portfolioShare: number
    })
  ),
  assets: arrayOf(
    shape({
      name: string,
      netBalance: number,
      grossBalance: number,
      portfolioShare: number
    })
  ),
  currentIndex: number,
  getAssetsByType: func.isRequired
};

export default ConsolidatedPositionTable;
