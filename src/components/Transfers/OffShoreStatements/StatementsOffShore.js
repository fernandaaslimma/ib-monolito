import React, { Fragment, useContext, useEffect, useState } from 'react'
import StatementsOffShoreView from './StatementsOffShoreView';
import PrintViewOffShore from '../Statements/PrintViewOffShore';
import { Context } from '../../common/OffshoreSelect/offshoreContext';
import DefaultShimmerLoading from '../../common/DefaultShimmerLoading';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import moment from 'moment';
import { STATEMENTS_PAGE_SIZE } from '../../../utils/constants';

const StatementsOffShore = ({ error, loading, isGlobalMode, getAccountsOffShore, userInfo, balanceAndEventsHistoryOffShore, accountsOffShore, getBalanceAndEventsHistoryOffShore }) => {

    const [selectedAccountOffShore, setSelectedAccountOffShore] = useState(null);
    const [printContext, setPrintContext] = useState(false);
    const [hideValues, setHideValues] = useState(true);
    const [filterButtonFill, setFilterButtonFill] = useState(undefined);
    const [isEmptyEventsOffShore, setIsEmptyEventsOffShore] = useState(false);
    const [balanceHistoryParams, setBalanceHistoryParams] = useState({
        range: {
            from: moment
                .utc()
                .subtract(60, "days")
                .toDate(),
            to: moment.utc().toDate()
        },
        activePage: 1,
        limit: STATEMENTS_PAGE_SIZE,
        offset: 0,
        onlyDaysWithTransaction: true
    });

    const {
        currentCoin,
    } = useContext(Context);

    useEffect(() => {
        const fetchInitialData = (async () => {
            await getAccountsOffShore();
        });

        fetchInitialData();
    }, []);

    useEffect(() => {
        balanceAndEventsHistoryOffShore?.length > 0 ?
            setIsEmptyEventsOffShore(false) : setIsEmptyEventsOffShore(true);
    }, [balanceAndEventsHistoryOffShore]);

    useEffect(() => {
        if (selectedAccountOffShore?.currency?.some(x => x.code == currentCoin) && balanceHistoryParams && currentCoin) {
            const fetchData = (async () => {
                await getBalanceAndEventsHistoryOffShore(selectedAccountOffShore, balanceHistoryParams, currentCoin);
            });
            fetchData();
        }
    }, [currentCoin]);

    const printScreen = async () => {
        setPrintContext(true);
        await new Promise(resolve => setTimeout(resolve, 0));
        window.print();
        setPrintContext(false);
    }


    const changeAccountOffShore = async (accountNumber) => {
        const currentAccountOffShore = accountsOffShore?.find(
            account => account.accountNumber === accountNumber
        );
        if (currentAccountOffShore && balanceHistoryParams && currentCoin) {
            setSelectedAccountOffShore(currentAccountOffShore);
            await getBalanceAndEventsHistoryOffShore(currentAccountOffShore, balanceHistoryParams, currentCoin);
        }
    }

    const onFilterMobile = async ({ range, filterButtonFill }) => {
        setFilterButtonFill(filterButtonFill);
        await getBalanceAndEventsHistoryOffShore(selectedAccountOffShore, { ...balanceHistoryParams, range }, currentCoin);
        setBalanceHistoryParams({ ...balanceHistoryParams, range });
    }

    const resetStates = () => {
        setFilterButtonFill(undefined);
        setBalanceHistoryParams(
            {
                range: {
                    from: moment
                        .utc()
                        .subtract(60, "days")
                        .toDate(),
                    to: moment.utc().toDate()
                },
                activePage: 1,
                limit: STATEMENTS_PAGE_SIZE,
                offset: 0,
                onlyDaysWithTransaction: true
            });
    }

    const displayOffShore = () => {
        return (
            <StatementsOffShoreView
                changeAccountOffShore={changeAccountOffShore}
                isBottomSheet={false}
                onFilter={onFilterMobile}
                changeValuesVisibility={() => setHideValues(!hideValues)}
                hideValues={hideValues}
                filterButtonFill={filterButtonFill}
                resetStates={resetStates}
                loading={loading}
                printContext={printContext}
                isGlobalMode={isGlobalMode}
                userInfo={userInfo}
                balanceAndEventsHistoryOffShore={balanceAndEventsHistoryOffShore}
                isEmptyEventsOffShore={isEmptyEventsOffShore}
                selectedAccountOffShore={selectedAccountOffShore}
                accountsOffShore={accountsOffShore}
                printScreen={printScreen}
            />
        )
    }

    const displayPrintContentOffShore = () => {
        return (
            <PrintViewOffShore
                balanceHistoryParams={balanceHistoryParams}
                balanceAndEventsHistory={balanceAndEventsHistoryOffShore}
                isEmptyEvents={isEmptyEventsOffShore}
                AccountOffShore={selectedAccountOffShore}
                currentCurrency={currentCoin}
                userName={userInfo?.givenName}
            />
        );
    };

    return (
        loading ? (
            <DefaultShimmerLoading repeat={2} innerRepeat={3} dataTest={"loadingOffShoreTest"} />
        ) : (
            <ErrorBoundary errorStatus={error}>
                {printContext ?
                    <Fragment>{displayPrintContentOffShore()}</Fragment> :
                    <Fragment>{displayOffShore()}</Fragment>}
            </ErrorBoundary>
        )
    )
}

export default StatementsOffShore