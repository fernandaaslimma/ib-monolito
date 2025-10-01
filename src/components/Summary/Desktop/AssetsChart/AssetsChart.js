import "react-vis/dist/style.css";

import React, { Component } from "react";
import { shape, number, string, arrayOf } from "prop-types";
import { RadialChart, Hint } from "react-vis";
import { generate } from "shortid";

import Card from "../../../common/Card";
import {
  Wrapper,
  ChartWrapper,
  ColoredDot,
  Totals,
  Item,
  Label,
  Value
} from "./styles";
import formatNumber from "../../../../utils/formatNumber";
import getColorForAsset from "../../../../utils/getColorForAsset";
import { darkGreen, white } from "../../../../styles/settings";
import DefaultShimmerLoading from "../../../common/DefaultShimmerLoading";

export const parseData = assets =>
  assets.map((asset, i) => ({
    angle: asset.netBalance,
    label: `${formatNumber(asset.portfolioShare)} %`,
    color: getColorForAsset(i)
  }));

class AssetsChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: null
    };
  }

  render() {
    const { assets, icon, title, dataTest } = this.props;
    const { value } = this.state;

    return (
      <div data-test={dataTest}>
        <Wrapper>
          {assets.length === 0 ? (
            <DefaultShimmerLoading repeat={2} innerRepeat={1} />
          ) : (
            <Card
              title={title}
              icon={icon}
              iconColor={darkGreen}
              titleColor={darkGreen}
            >
              <Totals>
                {assets.map((asset, i) => (
                  <Item key={generate()}>
                    <Label>
                      <ColoredDot color={getColorForAsset(i)} />
                      {asset.name}
                    </Label>
                    <Value>
                      {formatNumber(asset.netBalance, { digits: 2 })}
                    </Value>
                  </Item>
                ))}
              </Totals>
              <ChartWrapper>
                <RadialChart
                  stroke={white}
                  colorType="literal"
                  width={160}
                  height={160}
                  innerRadius={70}
                  radius={60}
                  data={parseData(assets)}
                  onValueMouseOver={v => this.setState({ value: v })}
                  onSeriesMouseOut={() => this.setState({ value: false })}
                >
                  {value && (
                    <Hint
                      value={value}
                      style={{
                        background: white,
                        borderRadius: "14.5px",
                        width: "70px",
                        height: "29px",
                        boxShadow: "0 3px 12px 0 #d3e3fd",
                        border: `1px solid ${value.color}`,
                        fontSize: 11,
                        fontFamily: "Lato",
                        fontWeight: 900,
                        letterSpacing: 0.4,
                        color: value.color,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <p>{value.label}</p>
                    </Hint>
                  )}
                </RadialChart>
              </ChartWrapper>
            </Card>
          )}
        </Wrapper>
      </div>
    );
  }
}

AssetsChart.defaultProps = {
  assets: [],
  icon: "",
  title: "",
  dataTest: ""
};

AssetsChart.propTypes = {
  assets: arrayOf(
    shape({
      name: string,
      netBalance: number,
      grossBalance: number,
      portfolioShare: number
    })
  ),
  icon: string,
  title: string,
  dataTest: string
};

export default AssetsChart;
