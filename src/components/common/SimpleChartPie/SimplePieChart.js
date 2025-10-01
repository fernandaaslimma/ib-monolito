import React, { Fragment } from "react";
import { string, number } from "prop-types";
import { Chart, DataChart, Percentage } from "./styles";

function percentageFormat(percentage, insideChart = false) {
  const perc = percentage.toString();

  if (insideChart && percentage === 0) {
    return "--";
  }

  return percentage === 100 ? "100%" : perc + "%";
}

function SimplePieChart({ dataTest, percentage, background, color, width }) {
  return (
    <Fragment>
      <Chart
        data-test={dataTest}
        percentage={percentageFormat(percentage)}
        background={background}
        color={color}
        width={width}
      >
        <DataChart width={width}>
          <Percentage>{percentageFormat(percentage, true)}</Percentage>
        </DataChart>
      </Chart>
    </Fragment>
  );
}

SimplePieChart.defaultProps = {
  color: "red",
  background: "#D9E0E4",
  percentage: 0,
  width: 48
};

SimplePieChart.propTypes = {
  color: string,
  background: string,
  percentage: number,
  width: number
};

export default SimplePieChart;
