import React, { Component } from "react";
import { string, arrayOf, shape, number } from "prop-types";

import { Wrapper } from "./styles";
import IndexTable from "./IndexTable";
import ConsolidatedPositionTable from "./ConsolidatedPositionTable";
import AssetsChart from "./AssetsChart";
import TransactionsTable from "./TransactionsTable";
import { Container, Row, Column } from "../../../styles/grid";
import { translate } from "../../../utils/i18n";
import { Button } from "react-bocombbm-components";
import { StickyWrapper } from "../Mobile/styles";
import { redirect } from "../../../utils/redirect";
import {
  INVESTMENT_FIXED_INCOME_ROLE,
  INVESTMENT_FUNDS_ROLE,
  INVESTMENT_PRODUCTS_LIST_URL
} from "../../../utils/constants";
import CanAccess from "../../common/CanAccess";
import PendingTransactions from "../../common/PendingTransactions";

class Desktop extends Component {
  render() {
    const {
      indexes,
      consolidatedPosition,
      consolidatedAssets,
      transactions,
      pendingTransactions,
      loading
    } = this.props;

    return (
      <Wrapper>
        <Container>
          <Row mb={20}>
            <Column width={1 / 2} ml={15} mr={2}>
              <AssetsChart
                assets={consolidatedPosition}
                title={translate("TYPE_OF_ASSETS_PERCENT_IN_PORTFOLIO")}
                icon="Portfolio"
                dataTest="Assets_Type"
                loading={loading}
              />
            </Column>
            <Column width={1 / 2} mr={15} ml={2}>
              <AssetsChart
                assets={consolidatedAssets}
                title={translate("ASSET_CLASS")}
                icon="Wallet"
                dataTest="Assets_Class"
                loading={loading}
              />
            </Column>
          </Row>
          {pendingTransactions && pendingTransactions.length > 0 && (
            <Row>
              <Column width={1 / 2} ml={15} mr={3}>
                <PendingTransactions
                  mode={"desktop"}
                  pendingTransactions={pendingTransactions}
                />
              </Column>
            </Row>
          )}
          <Row>
            <Column>
              <ConsolidatedPositionTable
                consolidatedPosition={consolidatedPosition}
              />
            </Column>
          </Row>
          <Row>
            <Column width={3 / 5} ml={15} mr={2}>
              <TransactionsTable transactions={transactions} />
            </Column>
            <Column width={2 / 5} ml={15} mr={2}>
              <IndexTable indexes={indexes} />
            </Column>
          </Row>
        </Container>
        <CanAccess
          userInfo={this.props.userInfo}
          roles={[INVESTMENT_FUNDS_ROLE, INVESTMENT_FIXED_INCOME_ROLE]}
          anyRole={true}
        >
          <StickyWrapper data-test="investButton">
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

Desktop.defaultProps = {
  indexes: [],
  transactions: [],
  consolidatedPosition: [],
  consolidatedAssets: []
};

Desktop.propTypes = {
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

export default Desktop;
