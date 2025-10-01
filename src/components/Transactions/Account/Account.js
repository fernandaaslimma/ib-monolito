import React, { Component } from "react";
import { func } from "prop-types";

import Hide from "../../common/Hide";
import Mobile from "./Mobile";
import Desktop from "./Desktop";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.props.getUserCashAccountTransactions();
  }

  componentDidUpdate(prevProps) {
    const cashAccounts = this.props.cashAccounts;

    if (cashAccounts !== prevProps.cashAccounts) {
      this.setState({
        isLoading: false
      });
    }
  }

  render() {
    const { cashAccounts, error } = this.props;
    const { isLoading } = this.state;
    return (
      <ErrorBoundary errorStatus={error}>
        <div data-test="Transactions_Cash_Account">
          <Hide above="md">
            <Mobile loading={isLoading} cashAccounts={cashAccounts} />
          </Hide>
          <Hide below="md">
            <Desktop loading={isLoading} cashAccounts={cashAccounts} />
          </Hide>
        </div>
      </ErrorBoundary>
    );
  }
}

Account.propTypes = {
  getUserCashAccountTransactions: func.isRequired
};

export default Account;
