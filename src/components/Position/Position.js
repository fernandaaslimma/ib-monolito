import React, { useContext, useEffect, useState } from "react";
import OffshoreSelect from "../common/OffshoreSelect/OffshoreSelect";
import {
  BalanceContainer,
  Container,
  SummaryContainer,
  SummaryItem,
  Total,
  EmptyStateContainer
} from "./styles";
import PosistionItem from "./PositionItem";
import { rem } from "../../styles/tools";
import { Info, InfoValue } from "./PositionItem/styles";
import { Context } from "../common/OffshoreSelect/offshoreContext";
import formatNumber from "../../utils/formatNumber";
import { translate } from "../../utils/i18n";
import {
  adjustItemsPercentage,
  getInvestmentPercentage,
  sumArrayKeys
} from "../../utils/positionOperations";
import DefaultShimmerLoading from "../common/DefaultShimmerLoading";
import { PERCENT_COMPARE_VALUE_MAX } from "../../utils/constants";
import { black30 } from "../../styles/settings";
import DefaultContent from "../common/DefaultContent";
import Icon from "../common/Icon";

const Position = ({
  userInfo,
  offshorePosition,
  accountsOffShore,
  getOffshorePosition = () => { },
  getAccountsOffShore = () => { }
}) => {
  const { currentCoin } = useContext(Context);

  const [loading, setLoading] = useState(true);
  const [currentInvestment, setCurrentInvestment] = useState();
  const [availableBalance, setAvailableBalance] = useState();

  useEffect(() => {
    getOffshorePosition();
    getAccountsOffShore();
  }, []);

  useEffect(() => {
    setCurrentInvestment(null);
    if (
      offshorePosition &&
      currentCoin &&
      availableBalance !== null &&
      availableBalance !== undefined
    ) {
      const newCurrentInvesment = offshorePosition?.investments?.find(
        item => item.currency === currentCoin
      );

      let newList = [];
      if (
        newCurrentInvesment &&
        newCurrentInvesment.assets &&
        newCurrentInvesment.assets.length > 0
      ) {
        newCurrentInvesment.assets.forEach(investment => {
          let newItem = investment;
          newItem.percentage = getInvestmentPercentage(
            investment.accruedBalance,
            availableBalance + newCurrentInvesment.grossBalance
          );
          newList.push(newItem);
        });

        const balancePercentage = getInvestmentPercentage(
          availableBalance,
          availableBalance + newCurrentInvesment.grossBalance
        );

        const positionTotalPercentage = sumArrayKeys(newList, "percentage");

        setCurrentInvestment({
          ...newCurrentInvesment,
          assets: adjustItemsPercentage(
            balancePercentage + positionTotalPercentage,
            newList,
            "percentage",
            PERCENT_COMPARE_VALUE_MAX
          )
        });
      } else {
        setLoading(false);
      }
    }
  }, [offshorePosition, currentCoin, availableBalance]);

  useEffect(() => {
    if (accountsOffShore && currentCoin) {
      const availableBalanceSum = accountsOffShore
        .flatMap(account => account.balances)
        .filter(balance => balance.currency === currentCoin)
        .reduce((total, balance) => total + balance.availableBalance, 0);

      setAvailableBalance(availableBalanceSum);
    }
  }, [accountsOffShore, currentCoin]);

  useEffect(() => {
    if (currentInvestment) {
      setLoading(false);
    }
  }, [currentInvestment]);

  const buildEmptystate = () => {
    return (
      <DefaultContent
        data-test="emptyStatements"
        Icon={() => (
          <Icon
            type={"EmptyWallet"}
            color={black30}
            height={94}
            width={100}
          />
        )}
        primaryText={translate("OFFSHORE_NO_POSITION")}
      />
    );
  };

  return (
    <>
      <OffshoreSelect userInfo={userInfo} />
      {loading ? (
        <div style={{ height: rem(244) }}>
          <DefaultShimmerLoading
            repeat={1}
            innerRepeat={3}
            dataTest="shimmerLoading"
          />
        </div>
      ) : (
        currentInvestment ? (
          <Container>
            <SummaryContainer data-test="summaryContainer">
              <Total>{translate("TOTAL")}</Total>
              <SummaryItem style={{ marginLeft: "auto" }}>
                <Info>{translate("POSITION_WALLET").toUpperCase()}</Info>
                <InfoValue>
                  {formatNumber(
                    sumArrayKeys(currentInvestment.assets, "percentage"),
                    { digits: 2 }
                  )}
                </InfoValue>
              </SummaryItem>
              <BalanceContainer>
                <SummaryItem>
                  <Info>
                    {translate("POSITION_GROSS_BALANCE") +
                      "(" +
                      currentCoin +
                      ")"}
                  </Info>
                  <InfoValue>
                    {formatNumber(currentInvestment.grossBalance, {
                      digits: 2
                    })}
                  </InfoValue>
                </SummaryItem>
                <SummaryItem>
                  <Info>
                    {translate("POSITION_ACCRUED_INTEREST") +
                      "(" +
                      currentCoin +
                      ")"}
                  </Info>
                  <InfoValue>
                    {formatNumber(
                      sumArrayKeys(currentInvestment.assets, "accruedInterest"),
                      {
                        digits: 2
                      }
                    )}
                  </InfoValue>
                </SummaryItem>
              </BalanceContainer>
            </SummaryContainer>
            {currentInvestment.assets &&
              currentInvestment.assets.length > 0 &&
              currentInvestment.assets.map((item, index) => (
                <PosistionItem
                  key={index}
                  item={item}
                  style={{ marginTop: rem(index > 0 ? 32 : 16) }}
                />
              ))}
          </Container>
        ) : (
          <EmptyStateContainer>
            {buildEmptystate()}
          </EmptyStateContainer>
        )
      )}
    </>
  );
};

export default Position;
