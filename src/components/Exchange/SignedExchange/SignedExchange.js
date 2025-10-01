import React, { Component } from "react";
import { arrayOf, shape, func } from "prop-types";

import { Container } from "../../../styles/grid";
import { translate } from "../../../utils/i18n";
import { ExchangeWrapper } from "./styles";
import SignedContractSummary from "./SignedContractSummary";
import DefaultContent from "../../common/DefaultContent";
import Icon from "../../common/Icon";
import { black30 } from "../../../styles/settings";

import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";

class SignedExchange extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEmpty: false,
      loading: true
    };
  }

  async componentWillMount() {
    await this.props.getSignedContracts();
    this.setState({
      isEmpty: this.props.signedContracts.length === 0,
      loading: false
    });
  }

  renderContent(contracts, isEmpty, loading) {
    if (!isEmpty) {
      return contracts.map(contract => (
        <SignedContractSummary
          key={contract.contractId}
          contract={contract}
          data-test={`exchangeContract${contract.contractId}`}
          loading={loading}
          {...contract}
        />
      ));
    }
    return (
      <DefaultContent
        Icon={() => (
          <Icon width="140" height="114" type="Papers" color={black30} />
        )}
        data-test="NoContracts"
        primaryText={translate("NO_CONTRACTS")}
        secondaryTexts={[translate("THERE_ARE_NO_SIGNED_CONTRACTS")]}
      />
    );
  }

  render() {
    const { signedContracts, error } = this.props;
    const { isEmpty, loading } = this.state;

    return (
      <ErrorBoundary errorStatus={error}>
        <ExchangeWrapper>
          <Container data-test="SignedExchange">
            {this.renderContent(signedContracts, isEmpty, loading)}
          </Container>
        </ExchangeWrapper>
      </ErrorBoundary>
    );
  }
}

SignedExchange.defaultProps = {
  signedContracts: []
};

SignedExchange.propTypes = {
  signedContracts: arrayOf(shape(SignedContractSummary.propTypes)),
  getSignedContracts: func.isRequired // eslint-disable-line
};

export default SignedExchange;
