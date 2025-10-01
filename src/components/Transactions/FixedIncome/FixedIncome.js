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

class FixedIncome extends Component {
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
    await this.props.getFixedIncomeTransactions();
    this.setState({ isEmpty: this.props.fixedIncomeTransactions.length === 0 });
  }

  onChangePage(activePage) {
    const { getFixedIncomeTransactions, filter } = this.props;
    this.setState({ activePage });
    fetchDataForFilter(
      getFixedIncomeTransactions,
      filter,
      activePage,
      PAGE_SIZE
    );
  }

  onFilter(...args) {
    this.setState({ activePage: 1 });
    this.props.getFixedIncomeTransactions(...args);
  }

  render() {
    const { fixedIncomeTransactions, loading, totalCount, error } = this.props;
    const { isEmpty, activePage } = this.state;
    return (
      <ErrorBoundary errorStatus={error}>
        <div data-test="Transactions_Fixed_Income">
          <Hide above="md">
            <Mobile
              totalCount={totalCount}
              fixedIncomeTransactions={fixedIncomeTransactions}
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
              fixedIncomeTransactions={fixedIncomeTransactions}
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

FixedIncome.defaultProps = {
  fixedIncomeTransactions: [],
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

FixedIncome.propTypes = {
  fixedIncomeTransactions: arrayOf(
    shape({
      assetName: string,
      type: string,
      date: string,
      grossValue: number,
      netValue: number,
      incomeTax: number,
      iof: number
    })
  ),
  totalCount: number,
  getFixedIncomeTransactions: func.isRequired,
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

export default FixedIncome;
