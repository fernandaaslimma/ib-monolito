import "react-vis/dist/style.css";

import React, { useState, Fragment } from "react";
import { RadialChart, makeVisFlexible, Hint } from "react-vis";

import Card from "../../common/Card";
import { Wrapper, ChartWrapper, ChartTitle } from "./styles";
import formatNumber from "../../../utils/formatNumber";
import getColorForAsset from "../../../utils/getColorForAsset";
import { white } from "../../../styles/settings";
import ShimmerLoading from "../ShimmerLoading";

export const parseData = (assets) =>
  assets.map((asset, i) => ({
    angle: asset.grossBalance,
    label: `${asset.portfolioShare
        ? formatNumber(asset.portfolioShare)
        : formatNumber("0.00")
      } %`,
    portfolioShare: asset.portfolioShare,
    color: getColorForAsset(i)
  }));

function DonutChart({ assets, dataTest, children, title, loading }) {

  const FlexibleRadialChart = makeVisFlexible(RadialChart);

  const [value, setValue] = useState(null);
 
  const onValueMouseOver = (v) => setValue(v);
  const onValueMouseOut = () => setValue(null)

  return (
    <div data-test={dataTest}>
      <Wrapper>
        <Fragment>
          {title && (
            <ChartTitle data-test="typeGraphic">
              {loading ? <ShimmerLoading width={40} height={12} /> : title}
            </ChartTitle>
          )}

          <Card>
            {loading ? (
              <ShimmerLoading circle height={230} width={230} />
            ) : (
              <ChartWrapper onMouseLeave={() => setValue(null)}>
                {children}
                <FlexibleRadialChart
                  stroke={white}
                  colorType="literal"
                  height={230}
                  innerRadius={100}
                  radius={112}
                  data={parseData(assets)}
                  onValueMouseOver={onValueMouseOver}
                  onValueMouseOut={onValueMouseOut}
                >
                  {value && (
                    <Hint value={value}>
                    <div style={{ background: 'white', color: 'black', padding: 5, borderRadius: 5, fontFamily: 'Roboto', fontSize: 12 }}>
                      {value.label}
                    </div>
                    </Hint>
                  )}
                </FlexibleRadialChart>
              </ChartWrapper>
            )}
          </Card>
        </Fragment>
      </Wrapper>
    </div>
  );
}

export default DonutChart;
