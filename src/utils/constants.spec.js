import * as constants from "./constants";

describe("constants", () => {
  it("Should return the constants", () => {
    expect(constants.IS_CLIENT).toBe(true);
    expect(constants.EMPTY_CHARACTER).toBe("-");
    expect(constants.BUY).toBe("buy");
    expect(constants.VOID).toBe("javascript:void(0)");
    expect(constants.ENTERED).toBe("entered");
    expect(constants.ENTERING).toBe("entering");
    expect(constants.EXITED).toBe("exited");
    expect(constants.EXITING).toBe("exiting");
    expect(constants.UNMOUNTED).toBe("unmounted");
    expect(constants.PT_BR).toBe("pt-BR");
    expect(constants.EN_US).toBe("en-US");
    expect(constants.ZH_CN).toBe("zh-CN");
    expect(constants.SCREEN_LG).toBe(1199);
    expect(constants.SCREEN_MD).toBe(992);
    expect(constants.SCREEN_SM).toBe(767);
    expect(constants.DOCUSIGN_SUCCESS_REDIRECT_QUERY_PARAMS).toBe(
      "signing_complete"
    );
    expect(constants.UP).toBe("up");
    expect(constants.DOWN).toBe("down");
    expect(constants.RIGHT).toBe("right");
    expect(constants.CASH_ACCOUNT).toBe("CashAccount");
    expect(constants.FIXED_INCOME).toBe("FixedIncome");
    expect(constants.EQUITY).toBe("Equity");
    expect(constants.FUNDS).toBe("Funds");
    expect(constants.MAINTENANCE).toBe("Maintenance");
    expect(constants.PAGINATION_TOTAL).toBe("X-Total-Count");
    expect(constants.CORPORATION).toBe("Corporation");
    expect(constants.INDIVIDUAL).toBe("Individual");
    expect(constants.SIGNING).toBe("SignContract");
    expect(constants.VISUALIZATION).toBe("GetContract");
    expect(constants.PENDING).toBe("Pending");
    expect(constants.COMPLETED).toBe("Completed");
    expect(constants.SIGNED).toBe("Signed");
    expect(constants.IN_PROGRESS).toBe("InProgress");
    expect(constants.GET_POSITION).toBe("GetPosition");
    expect(constants.GET_TRANSACTIONS).toBe("GetTransactions");
    expect(constants.GET_CONTRACT).toBe("GetContract");
    expect(constants.GET_ACCOUNT_MANAGER).toBe("GetAccountManager");
    expect(constants.PERCENT_COMPARE_VALUE_MAX).toBe(100);
  });
});
