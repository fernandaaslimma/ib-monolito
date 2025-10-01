import React, { Component } from "react";
import { arrayOf, shape, func } from "prop-types";

import { Container } from "../../styles/grid";
import { translate } from "../../utils/i18n";
import ContractSummary from "./ContractSummary";
import { ExchangeWrapper } from "./styles";
import DefaultContent from "../common/DefaultContent";
import Icon from "../common/Icon";
import { black30 } from "../../styles/settings";
import { generate } from "shortid";

import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

class Exchange extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEmpty: false,
      loading: true
    };
  }

  async componentWillMount() {
    this.props.resetSignLoading();
    await this.props.getContracts();

    this.setState({
      isEmpty: this.props.contracts.length === 0,
      loading: false
    });
  }

  renderContent(contracts, isEmpty, loading) {
    if (!isEmpty) {
      return contracts.map(contract => (
        <ContractSummary
          key={generate()}
          groups={contract.groups}
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
        secondaryTexts={[translate("THERE_ARE_NO_PENDING_CONTRACTS")]}
      />
    );
  }

  render() {
    const { contracts, error } = this.props;
    const { isEmpty, loading } = this.state;
    return (
      <ErrorBoundary errorStatus={error}>
        <ExchangeWrapper>
          <Container data-test="ContractsList">
            {this.renderContent(contracts, isEmpty, loading)}
          </Container>
        </ExchangeWrapper>
      </ErrorBoundary>
    );
  }
}

Exchange.defaultProps = {
  contracts: []
};

Exchange.propTypes = {
  contracts: arrayOf(shape(ContractSummary.propTypes)),
  getContracts: func.isRequired,
  resetSignLoading: func.isRequired
};

export default Exchange;
