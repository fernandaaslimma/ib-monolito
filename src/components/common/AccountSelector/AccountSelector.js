import React, { Fragment, useState } from "react";
import { string, func, array } from "prop-types";
import { RadioWrapper, Space, Separator, BtnWrapper } from "./styles";
import { translate } from "../../../utils/i18n";
import Radio from "../Radio";
import formatNumber, { formatCNPJ } from "../../../utils/formatNumber";
import { BRL_CURRENCY } from "../../../utils/constants";
import { Button } from "react-bocombbm-components";
import { isIndividualUser } from "../../../utils/roles";

function AccountSelector({
  accounts,
  onChange,
  selectedAccountNumber,
  withButton,
  isOpen //only use this prop when the account selector is inside an AnimatedBottomSheet
}) {
  const [changedSelectedAccount, setChangedSelectedAccount] = useState(
    selectedAccountNumber
  );

  //When closing the Sheet, verify the selected account
  if (isOpen === false && selectedAccountNumber !== changedSelectedAccount) {
    setChangedSelectedAccount(selectedAccountNumber);
  }

  // UseEffect for change account outside AnimatedBottomSheet
  React.useEffect(() => {
    if (!isOpen && selectedAccountNumber !== changedSelectedAccount) {
      setChangedSelectedAccount(selectedAccountNumber);
    }
  }, [
    isOpen,
    selectedAccountNumber,
    changedSelectedAccount,
    setChangedSelectedAccount
  ]);

  return (
    <RadioWrapper>
      {accounts &&
        accounts.length &&
        accounts.map((account, index) => {
          const { availableBalance } = account;
          const formatedBalance = formatNumber(availableBalance, {
            digits: 2
          });
          const balanceLabel = translate("EFT_AVAILABLE_BALANCE");

          const subLabels = !isIndividualUser()
            ? [
                `CNPJ: ${formatCNPJ(account.document)}`,
                `${balanceLabel}: ${BRL_CURRENCY}${formatedBalance}`
              ]
            : [`${balanceLabel}: ${BRL_CURRENCY}${formatedBalance}`];

          return (
            <Fragment key={index}>
              <Radio
                dataTestLabel={`Account_${index}`}
                label={account.accountNumber}
                subLabels={subLabels}
                onChange={e =>
                  withButton
                    ? setChangedSelectedAccount(e.target.value)
                    : onChange(e)
                }
                name="number"
                value={account.accountNumber}
                checked={account.accountNumber === changedSelectedAccount}
                disabled={false}
              />
              {account !== accounts[accounts.length - 1] && (
                <Fragment>
                  <Space>
                    <Separator />
                  </Space>
                  <Separator />
                </Fragment>
              )}
            </Fragment>
          );
        })}
      {withButton && accounts && accounts.length > 0 && changedSelectedAccount && (
        <BtnWrapper>
          <Button
            dataTest="saveAccount"
            onClick={() =>
              onChange({ target: { value: changedSelectedAccount } })
            }
            spacing={{ top: "s", bottom: "s", right: "s", left: "s" }}
          >
            {translate("ACCOUNT_SELECTOR_COMPONENT_SAVE_BUTTON")}
          </Button>
        </BtnWrapper>
      )}
    </RadioWrapper>
  );
}

AccountSelector.propTypes = {
  accounts: array.isRequired,
  onChange: func.isRequired,
  selectedAccountNumber: string.isRequired
};

export default AccountSelector;
