import React, { Component } from "react";
import { arrayOf, shape, number, string, func, bool } from "prop-types";

import Hide from "../../common/Hide";
import Mobile from "./Mobile";
import Desktop from "./Desktop";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";

class Equities extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEmpty: false
    };
  }

  async componentDidMount() {
    this.props.getTotalEquities();

    await this.props.getEquities();

    this.setState({ isEmpty: this.props.equities.length === 0 });
  }

  render() {
    const { equities, totalEquities, loading, error } = this.props;
    const { isEmpty } = this.state;

    return (
      <ErrorBoundary errorStatus={error}>
        <div data-test="Position_Equities">
          <Hide above="md">
            <Mobile
              equities={equities}
              totalEquities={totalEquities}
              loading={loading}
              isEmpty={isEmpty}
            />
          </Hide>
          <Hide below="md">
            <Desktop
              equities={equities}
              totalEquities={totalEquities}
              loading={loading}
              isEmpty={isEmpty}
            />
          </Hide>
        </div>
      </ErrorBoundary>
    );
  }
}

Equities.defaultProps = {
  equities: [],
  loading: false
};

Equities.propTypes = {
  equities: arrayOf(
    shape({
      name: string,
      date: string,
      grossBalance: number,
      portfolioShare: number
    })
  ),
  loading: bool,
  getEquities: func.isRequired,
  getTotalEquities: func.isRequired
};

export default Equities;
