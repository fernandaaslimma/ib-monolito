import React, { useEffect, useState, useContext, Fragment } from "react";
import DefaultShimmerLoading from "../../../common/DefaultShimmerLoading";
import {
  Container,
  DropDownWrapper,
  Span,
  FooterButtonsContainer,
  ContainerBlue20
} from "./styles";
import { translate } from "../../../../utils/i18n";
import { formatNumberWithoutCurrency } from "../../../../utils/formatNumber";
import Dropdown from "../components/Dropdown";
import { gray200, gray500 } from "../../../../styles/settings";
import {
  PRIVATEACCOUNT,
  TRANSACTIONALACCOUNT
} from "../../../../utils/constants";
import { InstanceContext } from "../sendMoneyContext";
import Button from "../../../common/Button";

const SelectAccount = ({ stepForward, currentStep }) => {
  const {
    getAccounts,
    accounts,
    setSelectedAccount,
    cleanExchangeTransactionsSimulation
  } = useContext(InstanceContext);

  const [accountSelect, setAccountSelect] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (currentStep === 1) {
      getAccounts(null, false, [PRIVATEACCOUNT, TRANSACTIONALACCOUNT]);
    }
  }, [currentStep]);

  useEffect(() => {
    if (accounts != undefined) setLoading(false);
  }, [accounts]);

  const handleChange = account => {
    if (!account) return;
    setAccountSelect(account);
    cleanExchangeTransactionsSimulation();
  };

  const handleSubmit = () => {
    setSelectedAccount(accountSelect);
    stepForward();
  };

  return (
    <div>
      {loading ? (
        <DefaultShimmerLoading repeat={4} innerRepeat={2} />
      ) : (
        <Fragment>
          <ContainerBlue20>
            <Container>
              <DropDownWrapper>
                <Span
                  fontSize={18}
                  color={gray500}
                  lineHeight={20}
                  fontWeight={700}
                  marginBottom={15}
                  data-test="TitleSelectAccount"
                >
                  {translate("ORIGIN_ACCOUNT")}
                </Span>
                {!accountSelect && (
                  <Span
                    fontSize={12}
                    color={gray200}
                    lineHeight={14}
                    fontWeight={600}
                    marginBottom={8}
                    data-test="SubTitleSelectAccount"
                  >
                    {translate("EXCHANGE_SELECT_ACCOUNT_PAYMENT")}
                  </Span>
                )}

                <Dropdown
                  optionsKey={"accountNumber"}
                  options={accounts}
                  label={translate("TED_SELECT_ACCOUNT")}
                  onChange={value => {
                    handleChange(value);
                  }}
                  dataTest="DropDownSelectAccount"
                />
                {accountSelect && (
                  <Span
                    color={gray200}
                    fontSize={14}
                    lineHeight={16}
                    fontWeight={600}
                    marginTop={8}
                    data-test="AccountMoney"
                  >
                    {translate("AVAILABLE_BALANCE") + ": "}
                    {translate("EXCHANGE_BRL_CURRENCY") + " "}
                    {formatNumberWithoutCurrency(
                      accountSelect.availableBalance,
                      {
                        digits: 2
                      }
                    )}
                  </Span>
                )}
              </DropDownWrapper>
            </Container>
          </ContainerBlue20>
          <FooterButtonsContainer>
            <Button
              dataTest="BackButtonSelectAccount"
              type="outline"
              onClick={() => {
                window.history.back();
              }}
              margin={{ r: 16 }}
              style={{
                width: "100%"
              }}
            >
              {translate("BACK")}
            </Button>
            <Button
              dataTest="ContinueButtonSelectAccount"
              actionSecondary
              onClick={handleSubmit}
              disabled={!accountSelect}
              style={{
                width: "100%"
              }}
            >
              {translate("OPEN_BANKING_CONTINUE")}
            </Button>
          </FooterButtonsContainer>
        </Fragment>
      )}
    </div>
  );
};

export default SelectAccount;
