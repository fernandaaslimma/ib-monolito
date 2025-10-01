import React, { Component, Fragment } from "react";
import { string, arrayOf, shape, number, func } from "prop-types";

import getMonth from "../../utils/getMonth";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import Hide from "../common/Hide";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

import store from "../../utils/store";
import { hotjarTag } from "../../utils/hotjarFun";
import { redirect } from "../../utils/redirect";
import {
  SUITABILITY_NOTIFICATION_TYPE,
  REGISTRATION_DATA_NOTIFICATION_TYPE
} from "../../utils/constants";

const LIMIT = 9;

class Summary extends Component {
  componentDidMount() {
    // tags hotjar to local path
    hotjarTag();

    this.month = getMonth();

    const {
      getIndexes,
      getConsolidatedPosition,
      getConsolidatedAssets,
      getTransactions,
      getPendingTransactions
    } = this.props;

    getPendingTransactions();
    getIndexes(this.month);
    getConsolidatedPosition();
    getConsolidatedAssets();
    getTransactions(LIMIT);
  }

  componentWillUnmount() {
    // tags hotjar to next path
    hotjarTag();
  }

  render() {
    const {
      indexes,
      consolidatedPosition,
      consolidatedAssets,
      transactions,
      notification,
      error,
      userInfo,
      loading
    } = this.props;

    const { notificated } = store.getState();

    if (
      !notificated[SUITABILITY_NOTIFICATION_TYPE] &&
      notification &&
      notification.find(item => item.type === SUITABILITY_NOTIFICATION_TYPE)
    ) {
      redirect("/suitability");
    } else if (
      !notificated[REGISTRATION_DATA_NOTIFICATION_TYPE] &&
      notification &&
      notification.find(
        item => item.type === REGISTRATION_DATA_NOTIFICATION_TYPE
      )
    ) {
      redirect("/registrationData");
    }

    return (
      <ErrorBoundary errorStatus={error}>
        <Fragment>
          <Hide above="md">
            <Mobile
              indexes={indexes}
              consolidatedPosition={consolidatedPosition}
              consolidatedAssets={consolidatedAssets}
              transactions={transactions}
              userInfo={userInfo}
              pendingTransactions={this.props.pendingTransactions}
              loading={loading}
            />
          </Hide>
          <Hide below="md">
            <Desktop
              indexes={indexes}
              consolidatedPosition={consolidatedPosition}
              consolidatedAssets={consolidatedAssets}
              transactions={transactions}
              userInfo={userInfo}
              pendingTransactions={this.props.pendingTransactions}
              loading={loading}
            />
          </Hide>
        </Fragment>
      </ErrorBoundary>
    );
  }
}

Summary.defaultProps = {
  indexes: [],
  transactions: [],
  consolidatedPosition: [],
  consolidatedAssets: []
};

Summary.propTypes = {
  indexes: arrayOf(
    shape({
      index: string,
      monthAcrrued: number,
      yearAccrued: number
    })
  ),
  consolidatedPosition: arrayOf(
    shape({
      name: string,
      netBalance: number,
      grossBalance: number,
      portfolioShare: number
    })
  ),
  consolidatedAssets: arrayOf(
    shape({
      name: string,
      netBalance: number,
      grossBalance: number,
      portfolioShare: number
    })
  ),
  transactions: arrayOf(
    shape({
      date: string,
      grossValue: number,
      type: string,
      assetName: string
    })
  ),
  getConsolidatedAssets: func.isRequired,
  getConsolidatedPosition: func.isRequired,
  getIndexes: func.isRequired,
  getTransactions: func.isRequired
};

export default Summary;
