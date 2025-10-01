import "swipejs/style.css";

import React, { Component } from "react";
import Swipe, { SwipeItem } from "swipejs/react";
import { string, arrayOf, shape, number } from "prop-types";
import { Wrapper, ChartController, Dot, Title, StickyWrapper } from "./styles";

import ConsolidatedPositionCard from "./ConsolidatedPositionCard";
import TransactionsCard from "./TransactionsCard";

import AssetsChart from "./AssetsChart";
import { Container, Row, Column } from "../../../styles/grid";
import { translate } from "../../../utils/i18n";
import IndexesCard from "./IndexesCard";
import capitalize from "../../../utils/capitalize";
import { Button } from "react-bocombbm-components";
import { redirect } from "../../../utils/redirect";
import {
  INVESTMENT_FIXED_INCOME_ROLE,
  INVESTMENT_FUNDS_ROLE,
  INVESTMENT_PRODUCTS_LIST_URL
} from "../../../utils/constants";
import CanAccess from "../../common/CanAccess";
import PendingTransactions from "../../common/PendingTransactions";

class Mobile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeChart: 0
    };
  }

  onTransactionEnd(index) {
    this.setState({ activeChart: index });
  }

  render() {
    const {
      consolidatedPosition,
      consolidatedAssets,
      transactions,
      indexes,
      pendingTransactions,
      loading
    } = this.props;

    const { activeChart } = this.state;

    return (
      <Wrapper>
        <Container>
          <Swipe
            className="custom-swipe-container-class"
            ref={o => (this.swipe = o)}
            startSlide={0}
            speed={100}
            draggable={false}
            continuous={false}
            autoRestart={false}
            disableScroll={false}
            stopPropagation={false}
            transitionEnd={index => this.onTransactionEnd(index)}
          >
            <SwipeItem className="custom-swipe-item-class">
              <AssetsChart
                assets={consolidatedPosition}
                title={translate("TYPE_OF_ASSETS_PERCENT_IN_PORTFOLIO")}
                icon="Portfolio"
                dataTest="Mobile_Assets_Type"
                loading={loading}
              />
            </SwipeItem>
            <SwipeItem className="custom-swipe-item-class">
              <AssetsChart
                assets={consolidatedAssets}
                title={translate("ASSET_CLASS")}
                icon="Wallet"
                dataTest="Mobile_Assets_Class"
                loading={loading}
              />
            </SwipeItem>
          </Swipe>
          <ChartController>
            <Dot active={activeChart === 0} />
            <Dot active={activeChart === 1} />
          </ChartController>
          {pendingTransactions && pendingTransactions.length > 0 && (
            <PendingTransactions pendingTransactions={pendingTransactions} />
          )}
          <Row>
            <Column>
              <ConsolidatedPositionCard
                consolidatedPosition={consolidatedPosition}
              />
            </Column>
          </Row>
          {transactions.length > 0 && (
            <Row>
              <Column data-test="Mobile_Latest_Transactions">
                <Title>{translate("LATEST_TRANSACTIONS")}</Title>
                <TransactionsCard transactions={transactions} />
              </Column>
            </Row>
          )}
          {indexes.length > 0 && (
            <Row>
              <Column data-test="Mobile_Index_Table">
                <Title>{capitalize(translate("INDEX"))}</Title>
                <IndexesCard indexes={indexes} />
              </Column>
            </Row>
          )}
        </Container>
        <CanAccess
          userInfo={this.props.userInfo}
          roles={[INVESTMENT_FUNDS_ROLE, INVESTMENT_FIXED_INCOME_ROLE]}
          anyRole={true}
        >
          <StickyWrapper data-test="investButton2">
            <Button
              onClick={() => redirect(INVESTMENT_PRODUCTS_LIST_URL)}
              disabled={false}
              spacing={{ top: "s", bottom: "s", right: "s", left: "s" }}
            >
              {translate("INVEST")}
            </Button>
          </StickyWrapper>
        </CanAccess>
      </Wrapper>
    );
  }
}

Mobile.defaultProps = {
  indexes: [],
  transactions: [],
  consolidatedPosition: [],
  consolidatedAssets: []
};

Mobile.propTypes = {
  indexes: arrayOf(
    shape({
      index: string,
      monthAcrrued: number,
      yearAccrued: number
    })
  ),
  consolidatedPosition: arrayOf(
    shape({
      name: string,
      netBalance: number,
      grossBalance: number,
      portfolioShare: number
    })
  ),
  consolidatedAssets: arrayOf(
    shape({
      name: string,
      netBalance: number,
      grossBalance: number,
      portfolioShare: number
    })
  ),
  transactions: arrayOf(
    shape({
      date: string,
      grossValue: number,
      type: string,
      assetName: string
    })
  )
};

export default Mobile;
