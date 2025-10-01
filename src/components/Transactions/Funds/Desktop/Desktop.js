import React from "react";
import { arrayOf, shape, number, string, bool, func } from "prop-types";

import loadable from "loadable-components";

import { Wrapper } from "../../../../styles/mobileGrid";
import DefaultContent from "../../../common/DefaultContent";
import { black30 } from "../../../../styles/settings";
import Icon from "../../../common/Icon";

import { translate } from "../../../../utils/i18n";
import AssetTable from "../../AssetTable";
import { Container, Row, Column } from "../../../../styles/grid";
import Pagination from "../../../common/Table/Pagination";
import LinkCard from "../../../common/LinkCard";

const Filter = loadable(() => import("../../../common/Table/Filter"));
const PAGE_SIZE = 10;

function Desktop({
  fundsIncomeTransactions,
  isEmpty,
  activePage,
  totalCount,
  loading,
  onFilter,
  onChangePage
}) {
  return (
    <Wrapper data-test="Transactions_Funds">
      <Container>
        {!isEmpty && <Filter search={onFilter} />}
        {isEmpty && (
          <DefaultContent
            data-test="Empty_Position"
            Icon={() => <Icon type="EmptyWallet" color={black30} />}
            primaryText={translate("NO_RECORDS")}
            secondaryTexts={[translate("NO_RECORD_WAS_FOUND")]}
          />
        )}
        {!isEmpty && (
          <Row>
            <Column>
              <AssetTable
                title={translate("FUNDS")}
                transactions={fundsIncomeTransactions}
                shimmerLoading={{ rows: PAGE_SIZE, loading }}
              />
            </Column>
          </Row>
        )}
        {!isEmpty && (
          <Pagination
            onChangePage={onChangePage}
            pageTotal={totalCount}
            activePage={activePage}
            pageSize={PAGE_SIZE}
          />
        )}
        {!isEmpty && !loading && (
          <LinkCard
            iconType="FiLoader"
            to="/investments/overview?menu=movements&from=funds"
            anchorText={translate("CLICK_TO_VIEW_FUNDS")}
            versionText={translate("WISH_TO_SEE_SIMPLIFIED_VERSION")}
            dataTest="LinkToSimplified"
            noSpan
            withUnderline
            fontSize={14}
          />
        )}
      </Container>
    </Wrapper>
  );
}

Desktop.defaultProps = {
  fundsIncomeTransactions: [],
  totalCount: 0
};

Desktop.propTypes = {
  fundsIncomeTransactions: arrayOf(
    shape({
      assetName: string,
      type: string,
      date: string,
      grossValue: number,
      netValue: number,
      incomeTax: number,
      iof: number
    })
  ),
  loading: bool,
  isEmpty: bool,
  totalCount: number,
  onFilter: func.isRequired,
  onChangePage: func.isRequired
};

export default Desktop;
