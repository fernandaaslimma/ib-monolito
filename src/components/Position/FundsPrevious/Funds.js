import React, { Component } from "react";
import { arrayOf, shape, number, string, func, bool } from "prop-types";

import Hide from "../../common/Hide";
import Mobile from "./Mobile";
import Desktop from "./Desktop";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";

class Funds extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEmpty: false
    };
  }

  async componentDidMount() {
    this.props.getTotalFunds();
    await this.props.getFunds();
    this.setState({ isEmpty: this.props.funds.length === 0 });
  }

  render() {
    const { funds, totalFunds, loading, error } = this.props;
    const { isEmpty } = this.state;

    return (
      <ErrorBoundary errorStatus={error}>
        <div data-test="Position_Funds">
          <Hide above="md">
            <Mobile
              funds={funds}
              totalFunds={totalFunds}
              isEmpty={isEmpty}
              loading={loading}
            />
          </Hide>
          <Hide below="md">
            <Desktop
              funds={funds}
              totalFunds={totalFunds}
              loading={loading}
              isEmpty={isEmpty}
            />
          </Hide>
        </div>
      </ErrorBoundary>
    );
  }
}

Funds.defaultProps = {
  funds: [],
  loading: false
};

Funds.propTypes = {
  funds: arrayOf(
    shape({
      name: string,
      date: string,
      investmentDate: string,
      iofBalance: number,
      grossResultBalance: number,
      grossBalance: number,
      incomeTaxBalance: number,
      portfolioShare: number
    })
  ),
  loading: bool,
  getFunds: func.isRequired,
  getTotalFunds: func.isRequired
};

export default Funds;
