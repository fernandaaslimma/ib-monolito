import React from "react";
import { arrayOf, shape, array, string, bool, object } from "prop-types";

import { Wrapper } from "../../../../styles/mobileGrid";
import CashAccountTable from "../CashAccountTable";

function Desktop({ cashAccounts, loading }) {
  return (
    <Wrapper data-test="Transactions_Account">
      <CashAccountTable cashAccounts={cashAccounts} loading={loading} />
    </Wrapper>
  );
}

Desktop.defaultProps = {
  cashAccounts: [],
  loading: true
};

Desktop.propTypes = {
  loading: bool,
  cashAccounts: arrayOf(
    shape({
      userCashAccount: string,
      cashAccountTransactions: array,
      accountOpenBalance: object,
      accountCloseBalance: object
    })
  )
};

export default Desktop;
