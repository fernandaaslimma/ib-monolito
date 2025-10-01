import React, { Component } from "react";
import { arrayOf, shape, number, string, func, bool } from "prop-types";

import Hide from "../../common/Hide";
import Mobile from "./Mobile";
import Desktop from "./Desktop";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import { checkDate } from "../../../utils/validations/fund";
import { redirect } from "../../../utils/redirect";
import AnimatedBottonSheet from "../../common/AnimatedBottomSheet";
import { translate } from "../../../utils/i18n";
import { BtnWrapper, Separator, StickyWrapper } from "../WithdrawLca/styles";
import Button from "react-bocombbm-components/dist/Button";
import formatNumber from "../../../utils/formatNumber";
import { BRL_CURRENCY, CREATE_TRANSACTION } from "../../../utils/constants";
import {
  ContentWrapper,
  BottomSheetWrapper,
  SheetContent,
  SheetContentContact
} from "./styles";
import { checkIfHasAccess } from "../../common/CanAccess/CanAccess";

class FixedIncome extends Component {
  constructor(props) {
    super(props);
    this.verifyOnGoingTransactions = this.verifyOnGoingTransactions.bind(this);

    this.state = {
      isEmpty: false,
      onGoingTransactions: []
    };
  }

  async componentDidMount() {
    const {
      getTotalFixedIncome,
      getFixedIncome,
      getPendingTransactionsFI,
      getTotalLca,
      getAvailableDateRanges
    } = this.props;

    if (checkIfHasAccess(this.props.userInfo, [CREATE_TRANSACTION])) {
      await Promise.all([getPendingTransactionsFI(), getTotalLca()]);
    }

    await Promise.all([
      getTotalFixedIncome(),
      getFixedIncome(),
      getAvailableDateRanges("FixedIncome")
    ]);
    this.setState({ isEmpty: this.props.fixedIncome.length === 0 });
  }

  async verifyOnGoingTransactions() {
    this.setState({
      loadingButtonWithdrawal: true
    });

    const thisTransactionToday = this.props.pendingTransactionsFI.filter(
      transaction => {
        return (
          transaction.type === "redemption" &&
          checkDate(transaction.transactionDate, this.props.serverTime)
        );
      }
    );

    if (thisTransactionToday.length === 0) {
      this.setState({ loadingButtonWithdrawal: false });

      return redirect("/investments/positions/fixed-income/withdrawal");
    } else {
      this.setState({
        onGoingTransactions: thisTransactionToday,
        onGoingTransactionValue: formatNumber(
          thisTransactionToday[0].transactionValue
        ),
        loadingButtonWithdrawal: false
      });
    }
  }

  render() {
    const { onGoingTransactions, onGoingTransactionValue } = this.state;
    const {
      fixedIncome,
      totalFixedIncome,
      loading,
      error,
      pendingTransactionsFI,
      totalLcaRaw
    } = this.props;
    const { isEmpty } = this.state;
    return (
      <ErrorBoundary errorStatus={error}>
        <div data-test="Position_Fixed_Income">
          <Hide above="md">
            <Mobile
              fixedIncome={fixedIncome}
              totalFixedIncome={totalFixedIncome}
              loading={loading}
              isEmpty={isEmpty}
              pendingTransactions={pendingTransactionsFI}
              totalLca={totalLcaRaw}
              verifyOnGoingTransactions={this.verifyOnGoingTransactions}
              userInfo={this.props.userInfo}
            />
          </Hide>
          <Hide below="md">
            <Desktop
              fixedIncome={fixedIncome}
              totalFixedIncome={totalFixedIncome}
              loading={loading}
              isEmpty={isEmpty}
              pendingTransactions={pendingTransactionsFI}
              totalLca={totalLcaRaw}
              verifyOnGoingTransactions={this.verifyOnGoingTransactions}
              userInfo={this.props.userInfo}
            />
          </Hide>
        </div>
        <AnimatedBottonSheet
          isOpen={onGoingTransactions.length > 0}
          velocity={0.3}
          head={{
            title: translate("LCA_WITHDRAW"),
            close: true
          }}
          onClickInBack={() => this.setState({ onGoingTransactions: [] })}
        >
          <BottomSheetWrapper>
            <ContentWrapper>
              <SheetContent data-test="transactionInMovement">
                {`${translate(
                  "WITHDRAWAL_LCA_ON_GOING_REDEMPTION_TEXT_1"
                )} ${BRL_CURRENCY} ${onGoingTransactionValue}. `}
              </SheetContent>

              <SheetContentContact>
                {translate("WITHDRAWAL_LCA_ON_GOING_REDEMPTION_TEXT_2")}
              </SheetContentContact>
            </ContentWrapper>
            <StickyWrapper>
              <Separator />
              <BtnWrapper>
                <Button
                  dataTest="onGoingTransactionsUnderstood"
                  onClick={() => this.setState({ onGoingTransactions: [] })}
                  spacing={{ top: "s", bottom: "s", right: "s", left: "s" }}
                >
                  {translate("WITHDRAWAL_LCA_ON_GOING_REDEMPTION_UNDERSTOOD")}
                </Button>
              </BtnWrapper>
            </StickyWrapper>
          </BottomSheetWrapper>
        </AnimatedBottonSheet>
      </ErrorBoundary>
    );
  }
}

FixedIncome.defaultProps = {
  fixedIncome: [],
  loading: false
};

FixedIncome.propTypes = {
  fixedIncome: arrayOf(
    shape({
      name: string,
      date: string,
      issuer: string,
      maturityDate: string,
      grossBalance: number,
      netBalance: number,
      portfolioShare: number,
      indexerRate: number,
      indexer: string,
      incomeTaxBalance: number,
      iofBalance: number
    })
  ),
  loading: bool,
  getFixedIncome: func.isRequired,
  getTotalFixedIncome: func.isRequired
};

export default FixedIncome;
