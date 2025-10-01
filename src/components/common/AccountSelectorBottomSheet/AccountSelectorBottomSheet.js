import { concat } from "lodash";
import React, { Fragment, useState } from "react";
import Button from "react-bocombbm-components/dist/Button";
import Icon from "react-bocombbm-components/dist/Icon";
import { neutral200 } from "../../../styles/settings";
import formatNumber from "../../../utils/formatNumber";
import { translate } from "../../../utils/i18n";
import { RadioWrapper, Separator, Space } from "../AccountSelector/styles";
import AnimatedBottonSheet from "../AnimatedBottomSheet";
import Radio from "../Radio";
import {
  Account,
  AccountBalance,
  AccountBalanceWrapper,
  AccountSelectorWrapper,
  IconView,
  RadioAccount
} from "./styles";

function AccountSelectorBottomSheet({
  accounts,
  selectedAccount,
  changeAccount,
  initialDate
}) {
  const [isBottomSheet, setBottomSheetState] = useState(false);
  const [pickedAccount, setPickedAccount] = useState(
    selectedAccount.accountNumber
  );

  React.useEffect(() => {
    setPickedAccount(selectedAccount.accountNumber);
  }, [selectedAccount.accountNumber]);

  const [hideValues, setHideValues] = useState(false);

  const { accountNumber, availableBalance } = selectedAccount;
  const accountsTotal = accounts && accounts.length;
  const defaultCurrency = "R$";

  const maskValues = value => {
    const hideMask = "\u25CF".repeat(6);
    if (hideValues) {
      return value.lastIndexOf(" ") != -1
        ? concat(value.substring(0, value.lastIndexOf(" ") + 1), hideMask)
        : hideMask;
    }
    return value;
  };

  const changeValuesVisibility = () => {
    setHideValues(!hideValues);
  };

  const selectAcc = e => {
    setPickedAccount(e.target.value);
  };

  const changeAcc = () => {
    initialDate();
    setBottomSheetState(false);
    return accountNumber === pickedAccount
      ? null
      : changeAccount({ target: { value: pickedAccount } });
  };

  return (
    <AccountSelectorWrapper>
      <Account>
        {`${translate("STATEMENTS_ACCOUNT")} ${accountNumber}`}
        {accountsTotal > 1 && (
          <Icon
            data-test="selectAccountMenu"
            spacing={{
              bottom: "none",
              left: "s",
              right: "none",
              top: "none"
            }}
            type="Arrow"
            color={neutral200}
            height="20"
            width="20"
            onClick={() => setBottomSheetState(true)}
          />
        )}
      </Account>
      <AccountBalanceWrapper>
        <AccountBalance data-test="accountBalance">
          {defaultCurrency}
          &nbsp;
          {maskValues(formatNumber(availableBalance, { digits: 2 }))}
        </AccountBalance>
        <IconView>
          {hideValues ? (
            <Icon
              type="View"
              width={"26"}
              height={"26"}
              cursorPointer
              onClick={changeValuesVisibility}
              color={neutral200}
            />
          ) : (
            <Icon
              type="HideView"
              width={"26"}
              height={"26"}
              cursorPointer
              onClick={changeValuesVisibility}
              color={neutral200}
            />
          )}
        </IconView>
      </AccountBalanceWrapper>

      <AnimatedBottonSheet
        isOpen={isBottomSheet}
        head={{
          title: translate("SELECT_ACCOUNT")
        }}
        velocity={0.3}
        onClickInBack={() => setBottomSheetState(false)}
      >
        <Fragment>
          <RadioWrapper>
            {accounts &&
              accounts.map((account, index) => {
                const { availableBalance } = account;
                const formatedBalance = formatNumber(availableBalance, {
                  digits: 2
                });
                const balanceLabel = translate("STATEMENTS_AVAILABLE_BALANCE");

                return (
                  <Fragment key={index}>
                    <Radio
                      dataTestLabel={`Account_${index}`}
                      label={
                        <RadioAccount>{account.accountNumber}</RadioAccount>
                      }
                      subLabel={`${balanceLabel}: ${defaultCurrency} ${maskValues(
                        formatedBalance
                      )}`}
                      onChange={e => selectAcc(e)}
                      name="number"
                      value={account.accountNumber}
                      checked={account.accountNumber === pickedAccount}
                      disabled={false}
                    />
                    {accountsTotal === index + 1 ? (
                      <Space />
                    ) : (
                      <Space>
                        <Separator />
                      </Space>
                    )}
                  </Fragment>
                );
              })}
          </RadioWrapper>
          <Button
            type="primary"
            spacing={{ top: "xs", bottom: "l", right: "s", left: "s" }}
            dataTest="SaveAccountButton"
            onClick={() => changeAcc()}
          >
            {translate("STATEMENTS_SAVE")}
          </Button>
        </Fragment>
      </AnimatedBottonSheet>
    </AccountSelectorWrapper>
  );
}

export default AccountSelectorBottomSheet;
