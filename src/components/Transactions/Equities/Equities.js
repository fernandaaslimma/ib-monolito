import React, { Component } from "react";
import {
  string,
  arrayOf,
  shape,
  number,
  func,
  oneOfType,
  instanceOf
} from "prop-types";

import Hide from "../../common/Hide";
import Mobile from "./Mobile";
import Desktop from "./Desktop";
import fetchDataForFilter from "../../../utils/pagination";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";

const PAGE_SIZE = 10;

class Equities extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEmpty: false,
      activePage: 1
    };

    this.onChangePage = this.onChangePage.bind(this);
    this.onFilter = this.onFilter.bind(this);
  }

  async componentWillMount() {
    await this.props.getEquityIncomeTransactions();
    this.setState({
      isEmpty: this.props.equityIncomeTransactions.length === 0
    });
  }

  onChangePage(activePage) {
    const { getEquityIncomeTransactions, filter } = this.props;
    this.setState({ activePage });
    fetchDataForFilter(
      getEquityIncomeTransactions,
      filter,
      activePage,
      PAGE_SIZE
    );
  }

  onFilter(...args) {
    this.setState({ activePage: 1 });
    this.props.getEquityIncomeTransactions(...args);
  }

  render() {
    const { loading, equityIncomeTransactions, totalCount, error } = this.props;
    const { isEmpty, activePage } = this.state;

    return (
      <ErrorBoundary errorStatus={error}>
        <div data-test="Transactions_Equities">
          <Hide above="md">
            <Mobile
              totalCount={totalCount}
              equityIncomeTransactions={equityIncomeTransactions}
              loading={loading}
              isEmpty={isEmpty}
              activePage={activePage}
              onFilter={this.onFilter}
              onChangePage={this.onChangePage}
            />
          </Hide>
          <Hide below="md">
            <Desktop
              totalCount={totalCount}
              equityIncomeTransactions={equityIncomeTransactions}
              loading={loading}
              isEmpty={isEmpty}
              activePage={activePage}
              onFilter={this.onFilter}
              onChangePage={this.onChangePage}
            />
          </Hide>
        </div>
      </ErrorBoundary>
    );
  }
}

Equities.defaultProps = {
  equityIncomeTransactions: [],
  totalCount: 0,
  filter: {
    from: "",
    range: {
      from: "",
      to: ""
    },
    selectedOption: "",
    currentRoute: ""
  }
};

Equities.propTypes = {
  equityIncomeTransactions: arrayOf(
    shape({
      assetName: string,
      type: string,
      date: string,
      grossValue: number,
      netValue: number
    })
  ),
  totalCount: number,
  getEquityIncomeTransactions: func.isRequired,
  filter: shape({
    from: oneOfType([string, instanceOf(Date)]),
    range: shape({
      from: oneOfType([string, instanceOf(Date)]),
      to: oneOfType([string, instanceOf(Date)])
    }),
    selectedOption: string,
    currentRoute: string
  })
};

export default Equities;
