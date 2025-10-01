import moment from "moment";
import React, { Component, Fragment } from "react";
import { array, object } from "prop-types";

import { translate, getDateFieldPlaceholderByLocale } from "../../utils/i18n";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { DataTable, Icon, AlertMessage } from "react-bocombbm-components";
import {
  Wrapper,
  Slider,
  SliderWrapper,
  Back,
  Info,
  Separator,
  Value,
  Message
} from "./styles";
import DefaultContent from "../common/DefaultContent";
import { contractColumns, installmentColumns } from "./creditTableColumns";
import Hide from "../common/Hide";
import NotSupportMobile from "../common/NotSupportMobile";

class Credit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEmpty: false,
      loading: true,
      position: 0,
      selected: {
        number: null,
        date: null
      }
    };

    this.rowClick = this.rowClick.bind(this);
    this.backToContracts = this.backToContracts.bind(this);
  }

  async componentDidMount() {
    this._isMounted = true;
    await this.props.getContracts();

    this._isMounted &&
      this.setState({
        loading: false,
        isEmpty: this.props.creditContracts.length === 0
      });
  }

  async rowClick(item) {
    this.setState({
      position: 1,
      loading: true
    });
    await this.props.getInstallmentBalances(item.id);

    this.setState({
      loading: false,
      selected: {
        number: item.number,
        date: moment(this.props.installmentBalances[0].referenceDate).format(
          getDateFieldPlaceholderByLocale()
        )
      }
    });
  }

  backToContracts() {
    this.setState({ position: 0 });
  }

  render() {
    const {
      error,
      installmentBalances,
      creditContracts,
      installmentBalancesTotals
    } = this.props;
    const { selected, loading, position, isEmpty } = this.state;

    const displayContent = () => (
      <Slider position={position}>
        <SliderWrapper>
          <DataTable
            data={creditContracts}
            columns={contractColumns}
            config={{
              rowClick: this.rowClick,
              title: translate("CREDIT_PORTABILITY")
            }}
            loading={loading}
          />
        </SliderWrapper>
        <SliderWrapper>
          <DataTable
            data={installmentBalances}
            columns={installmentColumns}
            totalData={installmentBalancesTotals}
            config={{
              title: (
                <Info>
                  <Back
                    data-test="IntallmentsBack"
                    onClick={this.backToContracts}
                  >
                    <Icon type="IconBack" />
                  </Back>
                  <Value data-test="ContractNumber">{selected.number}</Value>
                  <Separator>.</Separator>
                  <Value data-test="ContractDate">{selected.date}</Value>
                </Info>
              ),
              totalPosition: "down"
            }}
            loading={loading}
          />
          <Message>
            <AlertMessage
              icon="Attention"
              type="neutral"
              spacing={{
                top: "l",
                bottom: "l",
                right: "none",
                left: "none"
              }}
            >
              {translate("CREDIT_DISCLAIMER")}
            </AlertMessage>
          </Message>
        </SliderWrapper>
      </Slider>
    );

    return (
      <ErrorBoundary errorStatus={error}>
        <Wrapper data-test="CreditPage">
          {isEmpty ? (
            <DefaultContent
              data-test="EmptyCredits"
              Icon={() => <Icon type="EmptyWallet" />}
              primaryText={translate("NO_RECORDS")}
              secondaryTexts={[translate("NO_RECORD_WAS_FOUND")]}
            />
          ) : (
            <Fragment>
              <Hide above="md">
                <NotSupportMobile />
              </Hide>
              <Hide below="md">{displayContent()}</Hide>
            </Fragment>
          )}
        </Wrapper>
      </ErrorBoundary>
    );
  }
}

Credit.propTypes = {
  installmentBalances: array,
  creditContracts: array,
  installmentBalancesTotals: object
};

export default Credit;
