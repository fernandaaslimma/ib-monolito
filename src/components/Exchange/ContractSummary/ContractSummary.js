import React, { Component } from "react";
import { string, number, shape, bool, arrayOf, func } from "prop-types";

import { Title, SummaryWrapper, SummaryRow } from "./styles";
import Card from "../../common/Card";
import ContractOverview from "./ContractOverview";
import ContractCallToAction from "./ContractCallToAction";
import ContractAccount from "./ContractAccount";
import SignAccount from "./SignAccount";
import ContractSellAccount from "./ContractSellAccount";

import { translate } from "../../../utils/i18n";
import { BUY } from "../../../utils/constants";
import { orange10 } from "../../../styles/settings";
import { formatDateToLocale } from "../../../utils/formatDate";

class ContractSummary extends Component {
  render() {
    const {
      contractId,
      foreignAmount,
      foreignCurrency,
      fxNature,
      localAmount,
      localCurrency,
      tradeDate,
      type,
      rate,
      destinationAccount,
      intermediaryAccount,
      groups,
      loading,
      groupsInProgress,
      userInfoMail,
      getUserInfo
    } = this.props;
    getUserInfo && getUserInfo();
    if (loading) {
      return (
        <SummaryWrapper data-test={"ContractSummaryLoading"}>
          <Title>{translate("FX_CONTRACT")}</Title>
          <SummaryRow operation>
            <Card title={translate("OPERATION_SUMMARY")} icon="Cash">
              <ContractOverview loading={loading} />
            </Card>
            <Card title={translate("DESTINATION_ACCOUNT")} icon="CashTransfer">
              <ContractSellAccount loading={loading} />
            </Card>
          </SummaryRow>
        </SummaryWrapper>
      );
    }
    const parsedSettlementDate = formatDateToLocale(tradeDate);

    // TODO: Change validation after contract type is defined
    const isBuy = typeof type === "string" && type.toLowerCase().match(BUY);
    if (!type) {
      return null;
    }
    return (
      <SummaryWrapper data-test={`ContractSummary-${contractId}`}>
        <Title>
          {translate("FX_CONTRACT")}: {contractId}
        </Title>
        <SummaryRow operation>
          <Card title={translate("OPERATION_SUMMARY")} icon="Cash">
            <ContractOverview
              typeOfExchange={type}
              settlementDate={parsedSettlementDate}
              localCurrency={localCurrency}
              foreignCurrency={foreignCurrency}
              valueOfForeignCurrency={foreignAmount}
              valueOfNationalCurrency={localAmount}
              natureOfExchange={fxNature}
              exchangeRate={rate}
              data-test={`typeOfContract-${type}`}
            />
          </Card>
          {isBuy && destinationAccount && (
            <Card title={translate("DESTINATION_ACCOUNT")} icon="CashTransfer">
              <ContractSellAccount
                bank={destinationAccount.bank.name}
                owner={destinationAccount.name}
                bankId={destinationAccount.bank.id}
                agency={destinationAccount.branch}
                account={destinationAccount.account}
                document={destinationAccount.taxId}
              />
            </Card>
          )}
        </SummaryRow>

        {!isBuy && (
          <SummaryRow>
            {destinationAccount && (
              <Card
                title={translate("DESTINATION_ACCOUNT")}
                icon="CashTransfer"
              >
                <ContractAccount
                  bank={destinationAccount.bank.name}
                  account={destinationAccount.account}
                  country={destinationAccount.country}
                  owner={destinationAccount.name}
                  swift={destinationAccount.bank.swift}
                  chips={destinationAccount.bank.chips}
                  aba={destinationAccount.bank.aba}
                />
              </Card>
            )}
            {intermediaryAccount && (
              <Card title={translate("INTERMEDIARY_ACCOUNT")} icon="Bank">
                <ContractAccount
                  bank={intermediaryAccount.bank.name}
                  account={intermediaryAccount.account}
                  swift={intermediaryAccount.bank.swift}
                  chips={intermediaryAccount.bank.chips}
                  aba={intermediaryAccount.bank.aba}
                />
              </Card>
            )}
          </SummaryRow>
        )}
        {groups.length > 0 && (
          <SummaryRow>
            {destinationAccount && (
              <Card
                title={translate("SIGNATURES")}
                titleColor={orange10}
                iconContainerBg={"223, 149, 68"}
                icon="Signatures"
                iconColor={orange10}
              >
                <SignAccount
                  groups={groups}
                  contractId={contractId}
                  groupsInProgress={groupsInProgress}
                  email={userInfoMail}
                />
              </Card>
            )}
          </SummaryRow>
        )}
        {groups.length === 0 && (
          <Card>
            <ContractCallToAction contractId={contractId} />
          </Card>
        )}
      </SummaryWrapper>
    );
  }
}

ContractSummary.defaultProps = {
  groupsInProgress: [],
  loading: false,
  contractId: null,
  type: null,
  tradeDate: null,
  localCurrency: null,
  foreignCurrency: null,
  localAmount: null,
  foreignAmount: null,
  fxNature: null,
  totalEffectiveRate: null,
  destinationAccount: {
    bank: {}
  },
  intermediaryAccount: {
    bank: {}
  },
  rolePeople: null,
  groups: []
};

ContractSummary.propTypes = {
  groupsInProgress: arrayOf(string),
  loading: bool,
  contractId: string,
  foreignAmount: number,
  foreignCurrency: string,
  fxNature: string,
  localAmount: number,
  localCurrency: string,
  tradeDate: string,
  type: string,
  totalEffectiveRate: number,
  destinationAccount: shape({
    account: string,
    bank: shape({
      aba: string,
      chips: string,
      name: string,
      swift: string
    }),
    country: string,
    name: string
  }),
  rolePeople: string,
  intermediaryAccount: shape({
    account: string,
    bank: shape({
      aba: string,
      chips: string,
      name: string,
      swift: string
    })
  }),
  groups: arrayOf(
    shape({
      id: string,
      name: string,
      recipients: arrayOf(
        shape({
          email: string,
          embedded: bool,
          name: string,
          status: string,
          type: string
        })
      ),
      signOrder: number,
      status: string
    })
  ),
  resetSignLoading: func.isRequired
};

export default ContractSummary;
