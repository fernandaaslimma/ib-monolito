import React, { Fragment } from "react";

import {
  WrapperChart,
  WrapperSubChart,
  WrapperCard,
  ChartInfo,
  ChartTitle,
  WrapperIcon,
  WrapperSubCard,
  Title,
  ExpandCollapseArrow,
  WrapperButton
} from "./styles";
import SimpleChartPie from "../../../common/SimpleChartPie";
import Card from "../../../common/Card";
import getColorForAsset from "../../../../utils/getColorForAsset";
import Icon from "../../../common/Icon";
import HideableValue from "../../../common/HideableValue";
import { BRL_CURRENCY } from "../../../../utils/constants";
import { redirect } from "../../../../utils/redirect";

import { gray90, gray300 } from "../../../../styles/settings";
import ShimmerLoading from "../../../common/ShimmerLoading";

import { Button } from "react-bocombbm-components";
import { translate } from "../../../../utils/i18n";
import { formatDateToLocale } from "../../../../utils/formatDate";

function DetailsPositionCharts({
  onCollapse,
  assets,
  colorForAsset,
  loading,
  hideValues,
  dataTest,
  setStateAsset,
  checkStateAsset,
  activeChart,
  findAssettype,
  findLoading
}) {
  const renderLoadingMode = () => {
    return (
      <Fragment>
        {[0, 1, 2].map((_, index) => (
          <WrapperChart
            key={index}
            data-test={`${dataTest}_loading_${index}`}
            loading={loading}
          >
            <Card>
              <WrapperCard>
                <ShimmerLoading circle width={48} height={48} />

                <ChartInfo>
                  <ChartTitle>
                    <ShimmerLoading width={80} height={14} />
                  </ChartTitle>
                  <ShimmerLoading width={80} height={12} darker />
                </ChartInfo>
              </WrapperCard>
            </Card>
          </WrapperChart>
        ))}
      </Fragment>
    );
  };

  const buildSubCard = (type, name) => {
    return findAssettype(name) &&
      checkStateAsset(type) &&
      !findLoading(name) ? (
      findAssettype(name).map((asset, index) => (
        <WrapperSubChart key={index} data-test={`${dataTest}_subCard_${index}`}>
          <Card styles={"background: #F9FAFB; box-shadow: none;"}>
            <WrapperCard>
              <SimpleChartPie
                dataTest={`chart_${index}`}
                percentage={asset.portfolioShare ? asset.portfolioShare : 0}
                background={gray90}
                color={getColorForAsset(1)}
                width={48}
              />
              <ChartInfo>
                <ChartTitle
                  data-test="productName_subCard"
                  ellipsis={true}
                  widthTagEllipsis="100%"
                >
                  {asset.name}
                </ChartTitle>
                <HideableValue
                  hide={hideValues}
                  currency={BRL_CURRENCY}
                  value={asset.grossBalance}
                  currencyColor={gray300}
                  currencySize={12}
                />
              </ChartInfo>
            </WrapperCard>
          </Card>
        </WrapperSubChart>
      ))
    ) : (
      <WrapperChart data-test={`${dataTest}_subCard_loading`}>
        <Card styles={"background: #F9FAFB; box-shadow: none;"}>
          <WrapperCard>
            <ShimmerLoading circle width={48} height={48} />
            <ChartInfo>
              <ChartTitle data-test="productName_subCard">
                <ShimmerLoading width={80} height={14} />
              </ChartTitle>
              <ShimmerLoading width={80} height={12} darker />
            </ChartInfo>
          </WrapperCard>
        </Card>
      </WrapperChart>
    );
  };

  return loading ? (
    renderLoadingMode()
  ) : (
    <Fragment>
      {assets.map((position, index) => (
        <WrapperChart key={index} data-test={`${dataTest}_${index}`}>
          <Card>
            <WrapperCard>
              {loading ? (
                <ShimmerLoading circle width={48} height={48} />
              ) : (
                <SimpleChartPie
                  dataTest={`chart_${index}`}
                  percentage={
                    position.portfolioShare ? position.portfolioShare : 0
                  }
                  background={gray90}
                  color={getColorForAsset(
                    colorForAsset ? colorForAsset : index
                  )}
                  width={48}
                />
              )}

              <ChartInfo>
                <ChartTitle data-test="productName">
                  {loading ? (
                    <ShimmerLoading width={30} height={14} />
                  ) : (
                    position.name
                  )}
                </ChartTitle>
                {loading ? (
                  <ShimmerLoading width={30} height={12} darker />
                ) : (
                  <HideableValue
                    hide={hideValues}
                    currency={BRL_CURRENCY}
                    value={position.grossBalance}
                    currencyColor={gray300}
                    currencySize={12}
                  />
                )}
              </ChartInfo>
              {activeChart === 0 && (
                <WrapperIcon
                  onClick={() => {
                    setStateAsset(
                      activeChart === 0
                        ? position.assetType
                        : position.assetClass
                    );
                    onCollapse(
                      index,
                      activeChart === 0
                        ? position.assetType
                        : position.assetClass,
                      position.name
                    );
                  }}
                >
                  <ExpandCollapseArrow
                    collapse={checkStateAsset(
                      activeChart === 0
                        ? position.assetType
                        : position.assetClass
                    )}
                  >
                    <Icon
                      data-test={`arrowIcon_${index}`}
                      type="Arrow"
                      width="16"
                      height="16"
                    />
                  </ExpandCollapseArrow>
                </WrapperIcon>
              )}
            </WrapperCard>
            {checkStateAsset(
              activeChart === 0 ? position.assetType : position.assetClass
            ) && (
              <WrapperSubCard>
                <Title>{`${translate(
                  "OVERVIEW_CONSOLIDATED_DATE"
                )}${formatDateToLocale(position.date)}`}</Title>
                {buildSubCard(
                  activeChart === 0 ? position.assetType : position.assetClass,
                  position.name
                )}
                {activeChart === 0 && (
                  <WrapperButton data-test="showButtonDetailed">
                    <Button
                      onClick={() => redirect(position.route)}
                      disabled={position.route ? false : true}
                      spacing={{
                        top: "s",
                        bottom: "s",
                        right: "s",
                        left: "s"
                      }}
                      type="outline"
                    >
                      {translate("OVERVIEW_REDIRECT_BUTTON")}
                    </Button>
                  </WrapperButton>
                )}
              </WrapperSubCard>
            )}
          </Card>
        </WrapperChart>
      ))}
    </Fragment>
  );
}

export default DetailsPositionCharts;
