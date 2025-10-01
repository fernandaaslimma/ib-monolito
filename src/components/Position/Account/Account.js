import React, { Component } from "react";
import { arrayOf, shape, number, string, func, bool } from "prop-types";

import Hide from "../../common/Hide";
import Mobile from "./Mobile";
import Desktop from "./Desktop";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";

class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEmpty: false
    };
  }

  async componentDidMount() {
    await this.props.getAccounts(true);
    this.setState({ isEmpty: this.props.accounts.length === 0 });
  }

  render() {
    const { accounts, loading, error } = this.props;
    const { isEmpty } = this.state;

    return (
      <ErrorBoundary errorStatus={error}>
        <div data-test="Position_Cash_Account">
          <Hide above="md">
            <Mobile accounts={accounts} loading={loading} isEmpty={isEmpty} />
          </Hide>
          <Hide below="md">
            <Desktop accounts={accounts} loading={loading} isEmpty={isEmpty} />
          </Hide>
        </div>
      </ErrorBoundary>
    );
  }
}

Account.defaultProps = {
  accounts: []
};

Account.propTypes = {
  accounts: arrayOf(
    shape({
      id: number,
      accountNumber: string,
      date: string,
      totalBalance: number,
      availableBalance: number,
      blockedBalance: number
    })
  ),
  loading: bool.isRequired,
  getAccounts: func.isRequired
};

export default Account;
