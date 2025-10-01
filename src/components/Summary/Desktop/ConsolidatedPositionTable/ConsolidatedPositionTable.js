import React, { Component } from "react";
import { arrayOf, shape, number, string, func } from "prop-types";

import Table from "../../../common/Table";
import { translate } from "../../../../utils/i18n";
import formatNumber from "../../../../utils/formatNumber";
import getRouteForAsset from "../../../../utils/getRouteForAsset";
import {
  DOWN,
  FIXED_INCOME,
  FUNDS,
  ONE_HUNDRED
} from "../../../../utils/constants";
import Link from "../../../common/Link";
import { RedirectBox } from "./styles.js";
import formatDate from "../../../../utils/formatDate";

const buildRows = rows =>
  rows.map(b => ({
    name: <span>{b.name}</span>,
    grossBalance: <span>{formatNumber(b.grossBalance, { digits: 2 })}</span>,
    netBalance: <span>{formatNumber(b.netBalance, { digits: 2 })}</span>,
    portfolioShare: <span>{formatNumber(b.portfolioShare)}</span>
  }));

export const generateSum = consolidatedPosition => {
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

class ConsolidatedPositionTable extends Component {
  render() {
    const {
      consolidatedPosition,
      assets,
      getAssetsByType,
      currentIndex,
      loading
    } = this.props;

    const totalConsolidatedPosition =
      consolidatedPosition.length === 0
        ? null
        : generateSum(consolidatedPosition);

    const onCollapse = newIndex => {
      getAssetsByType(
        consolidatedPosition[newIndex].assetType,
        newIndex,
        currentIndex
      );
    };

    const routeForAsset = getRouteForAsset(
      consolidatedPosition[currentIndex] &&
        consolidatedPosition[currentIndex].assetType
    );

    const date = formatDate(
      consolidatedPosition[0] && consolidatedPosition[0].date
    );

    return (
      <div data-test="Consolidated_Position">
        <Table
          title={`${translate("CONSOLIDATED_POSITION_ON")} ${date}`}
          headers={[
            { title: translate("NAME"), field: "name", width: "30%" },
            {
              title: translate("GROSS_BALANCE"),
              field: "grossBalance",
              align: "right",
              currency: true,
              total: true
            },
            {
              title: translate("NET_BALANCE"),
              field: "netBalance",
              align: "right",
              currency: true,
              total: true
            },
            {
              title: translate("PORTFOLIO"),
              field: "portfolioShare",
              percent: true,
              align: "right",
              total: true
            },
            {
              title: "",
              field: "",
              width: "5%"
            }
          ]}
          data={buildRows(consolidatedPosition)}
          total={totalConsolidatedPosition}
          totalPosition={DOWN}
          collapse={{
            onCollapse: onCollapse,
            data: buildRows(assets),
            index: currentIndex,
            shimmerLoading: {
              rows: 3,
              loading,
              inverse: true
            },
            render: (
              <RedirectBox>
                {consolidatedPosition[currentIndex] &&
                  [FIXED_INCOME, FUNDS].includes(
                    consolidatedPosition[currentIndex].assetType
                  ) && (
                    <Link to={routeForAsset} anchor>
                      {translate("SEE_FULL_POSITION")}
                    </Link>
                  )}
              </RedirectBox>
            )
          }}
        />
      </div>
    );
  }
}

ConsolidatedPositionTable.defaultProps = {
  consolidatedPosition: [],
  assets: [],
  currentIndex: -1
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
