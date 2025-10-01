import React, { useContext, useEffect, useState } from 'react'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import OffshoreSelect from '../common/OffshoreSelect/OffshoreSelect'
import { MainWrapper, Wrapper } from './styles'
import Tabs from '../common/Tabs'
import { translate } from '../../utils/i18n'
import PositionsOverviewOffShore from './PositionOverviewOffShore/PositionsOverviewOffShore'
import { Context } from '../common/OffshoreSelect/offshoreContext'
import { adjustItemsPercentage, getInvestmentPercentage, sumArrayKeys } from '../../utils/positionOperations'
import { CASH_ACCOUNT, INVESTMENT_POSITIONS, PERCENT_COMPARE_VALUE_MAX, STATEMENTS_URL, GETINVESTMENTSOFFSHORETRANSACTIONS } from '../../utils/constants';
import TransactionsOffShore from "./TransactionsOffShore";
import { checkIfHasAccess } from "../common/CanAccess/CanAccess";


const OverviewOffShore = ({
    error,
    userInfo,
    getInvestimentPositionOffShore,
    positionsOffShore,
    getAccountsOffShore,
    accountsOffShore,
    loading,
    getTransactionsOffShore,
    transactionsOffShore,
    totalCount
}) => {
    const { currentCoin } = useContext(Context);
    const [positionFilter, setPositionFilter] = useState([]);
    const [availableBalance, setAvailableBalance] = useState();
    const [triggerAvailableBalance, setTriggerAvailableBalance] = useState(false);
    const [selectedTab, setSelectedTab] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            await getInvestimentPositionOffShore();
            await getAccountsOffShore();
        };

        fetchData();
    }, []);

    useEffect(() => {
        returnCurrentPoisition();
    }, [positionsOffShore, triggerAvailableBalance]);

    useEffect(() => {
        if (accountsOffShore && currentCoin) {
            const availableBalanceSum = accountsOffShore
                .flatMap(account => account.balances)
                .filter(balance => balance.currency === currentCoin)
                .reduce((total, balance) => total + balance.availableBalance, 0);

            setAvailableBalance(availableBalanceSum);
            setTriggerAvailableBalance((prev) => !prev);
        }
    }, [accountsOffShore, currentCoin]);


    const returnCurrentPoisition = () => {
        if (positionsOffShore && availableBalance != null && availableBalance != undefined && currentCoin) {
            const selectedCurrent = positionsOffShore.find(x => x.currency == currentCoin);
            const balanceTotal = availableBalance + (selectedCurrent?.grossBalance || 0);
            const balancePercentageAccount = getInvestmentPercentage(availableBalance, balanceTotal);

            let timeDepositObject;

            if (selectedCurrent) {
                timeDepositObject = {
                    ...selectedCurrent,
                    name: selectedCurrent.assetTypeLabel,
                    route: INVESTMENT_POSITIONS,
                    portfolioShare: 0,
                    assets: selectedCurrent.assets.map(asset => ({
                        ...asset,
                        portfolioShare: getInvestmentPercentage(
                            asset.accruedBalance,
                            balanceTotal
                        )
                    }))
                };

                adjustItemsPercentage(balancePercentageAccount + sumArrayKeys(timeDepositObject?.assets, "portfolioShare"), timeDepositObject?.assets, "portfolioShare", PERCENT_COMPARE_VALUE_MAX);
                timeDepositObject.portfolioShare = sumArrayKeys(timeDepositObject?.assets, "portfolioShare");
            }

            const assetsCashAcount = accountsOffShore?.filter(x => x.balances?.some(balance => balance.currency === currentCoin))?.map(acc => ({
                name: acc.accountNumber,
                portfolioShare: getInvestmentPercentage(acc.balances.filter(x => x.currency === currentCoin)?.[0]?.availableBalance, balanceTotal),
                accruedBalance: acc.balances?.filter(x => x.currency === currentCoin)?.[0]?.availableBalance
            }));

            adjustItemsPercentage(sumArrayKeys(assetsCashAcount, "portfolioShare"), assetsCashAcount, "portfolioShare", balancePercentageAccount);

            const position = [
                ...(timeDepositObject ? [timeDepositObject] : []),
                {
                    portfolioShare: balancePercentageAccount,
                    assetType: CASH_ACCOUNT,
                    name: translate("OVERVIEW_OFFSHORE_CASH_ACCOUNT"),
                    grossBalance: availableBalance,
                    route: STATEMENTS_URL,
                    date: new Date(),
                    assets: assetsCashAcount
                }
            ];

            setPositionFilter(position);
        }
    };

    const hasAccessTransactions = checkIfHasAccess(userInfo, [GETINVESTMENTSOFFSHORETRANSACTIONS]);

    return (
        <ErrorBoundary errorStatus={error}>
            <OffshoreSelect userInfo={userInfo} />
            <MainWrapper>
                <Tabs
                    selectedTab={selectedTab}
                    setSelectedTab={(value) => setSelectedTab(value)}
                >
                    <section title={translate("OVERVIEW_TAB_POSITION")}>
                        <Wrapper>
                            <PositionsOverviewOffShore
                                consolidatedPosition={positionFilter}
                                currentCoin={currentCoin}
                                loading={loading}
                            />
                        </Wrapper>
                    </section>
                    <section
                        title={translate("OVERVIEW_TRANSACTION")}
                        hide={!hasAccessTransactions}
                    >
                        <TransactionsOffShore
                            getTransactions={getTransactionsOffShore}
                            loading={loading}
                            transactions={transactionsOffShore && transactionsOffShore[0]?.transactions}
                            isEmpty={!transactionsOffShore || transactionsOffShore.length === 0 || !transactionsOffShore[0]?.transactions || transactionsOffShore[0]?.transactions?.length === 0}
                            totalCount={totalCount}
                            currentCoin={currentCoin}
                        />
                    </section>
                </Tabs>
            </MainWrapper>
        </ErrorBoundary >
    )
}

export default OverviewOffShore
