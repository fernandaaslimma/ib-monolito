import React, { useState } from "react";
import { Icon } from "react-bocombbm-components";
import SwipeableViews from "react-swipeable-views";
import { neutral200 } from "../../../styles/settings";
import { ONE_HUNDRED } from "../../../utils/constants";
import DonutChart from "../../common/DonutChart";
import PendingTransactions from "../../common/PendingTransactions";
import ConsolidatedInfoChart from "./ConsolidatedInfoChart";
import {
  Wrapper,
  Container,
  IconWrapper,
  ChartController,
  Dot
} from "./styles";
import DetailsPositionCharts from "./DetailsPositionCharts";
import { translate } from "../../../utils/i18n";
import { scrollToTop } from "../../../utils/dom";

function PositionsOverview({
  onCollapse,
  pendingTransactions,
  consolidatedPosition,
  consolidatedAssets,
  loading,
  setStateAsset,
  checkStateAsset,
  loadingSubCards,
  findAssettype,
  findLoading
}) {
  const [activeChart, setActiveChart] = useState(0);
  const [hideValues, setHideValues] = useState(false);

  React.useEffect(() => scrollToTop(), []);

  const generateSum = consolidatedPosition => {
    const initialConsolidatedPosition = {
      grossBalance: 0,
      netBalance: 0,
      portfolioShare: ONE_HUNDRED
    };

    return consolidatedPosition.reduce((acc, current) => {
      acc.grossBalance += current.grossBalance;
      acc.netBalance += current.netBalance;
      return acc;
    }, initialConsolidatedPosition);
  };

  const totalConsolidatedPosition = () =>
    consolidatedPosition.length === 0 ? 0 : generateSum(consolidatedPosition);

  const totalConsolidatedAssets = () =>
    consolidatedAssets.length === 0 ? 0 : generateSum(consolidatedAssets);

  return (
    <React.Fragment>
      <Wrapper>
        {consolidatedPosition !== {} && (
          <React.Fragment>
            {pendingTransactions && pendingTransactions.length > 0 && (
              <PendingTransactions
                pendingTransactions={pendingTransactions}
                backgroundColor={"#EEF1F3"}
                loading={loading}
                margins={{
                  top: "16px",
                  right: "16px",
                  bottom: "0px",
                  left: "16px"
                }}
              />
            )}

            <SwipeableViews index={activeChart} disabled={true}>
              <section>
                <DonutChart
                  assets={consolidatedPosition}
                  dataTest="mobilePositionsType"
                  loading={loading}
                  title={translate("OVERVIEW_CHART_PRODUCTS")}
                >
                  <ConsolidatedInfoChart
                    hideValues={hideValues}
                    total={totalConsolidatedPosition()}
                    callback={() => setHideValues(!hideValues)}
                  />
                  {!loading && (
                    <IconWrapper
                      data-test="rightIcon"
                      angle={270}
                      position={activeChart}
                    >
                      {activeChart !== 1 && (
                        <Icon
                          type="Arrow"
                          height={30}
                          width={30}
                          color={neutral200}
                          onClick={() => {
                            setActiveChart(1);
                          }}
                        />
                      )}
                    </IconWrapper>
                  )}
                </DonutChart>
              </section>

              <section>
                <DonutChart
                  assets={consolidatedAssets}
                  dataTest="mobileAssetsClass"
                  loading={loading}
                  title={translate("OVERVIEW_CHART_ASSET_CLASS")}
                >
                  <IconWrapper
                    data-test="leftIcon"
                    angle={90}
                    position={activeChart}
                  >
                    {activeChart === 1 && (
                      <Icon
                        className="teste"
                        type="Arrow"
                        height={30}
                        width={30}
                        color={neutral200}
                        onClick={() => {
                          setActiveChart(0);
                        }}
                      />
                    )}
                  </IconWrapper>
                  <ConsolidatedInfoChart
                    hideValues={hideValues}
                    total={totalConsolidatedAssets()}
                    callback={() => setHideValues(!hideValues)}
                  />
                </DonutChart>
              </section>
            </SwipeableViews>

            {!loading && (
              <ChartController>
                <Dot active={activeChart === 0} />
                <Dot active={activeChart === 1} />
              </ChartController>
            )}
          </React.Fragment>
        )}
      </Wrapper>

      <Container>
        {activeChart === 0 ? (
          <DetailsPositionCharts
            dataTest="consolidatedPosition"
            assets={consolidatedPosition}
            loading={loading}
            hideValues={hideValues}
            onCollapse={onCollapse}
            setStateAsset={setStateAsset}
            checkStateAsset={checkStateAsset}
            loadingSubCards={loadingSubCards}
            activeChart={activeChart}
            findAssettype={findAssettype}
            findLoading={findLoading}
          />
        ) : (
          <DetailsPositionCharts
            dataTest="consolidatedAssets"
            assets={consolidatedAssets}
            loading={loading}
            hideValues={hideValues}
            onCollapse={onCollapse}
            setStateAsset={setStateAsset}
            checkStateAsset={checkStateAsset}
            loadingSubCards={loadingSubCards}
            activeChart={activeChart}
            findAssettype={findAssettype}
            findLoading={findLoading}
          />
        )}
      </Container>
    </React.Fragment>
  );
}

export default PositionsOverview;
