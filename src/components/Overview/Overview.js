import React, { Component } from "react";
import { string, arrayOf, shape, number } from "prop-types";
import moment from "moment";
import Movimentations from "./Transactions";
import { MainWrapper, Wrapper, StickyWrapper } from "./styles";
import getMonth from "../../utils/getMonth";
import { hotjarTag } from "../../utils/hotjarFun";
import { translate, getDateFieldPlaceholderByLocale } from "../../utils/i18n";
import { redirect } from "../../utils/redirect";
import {
  INVESTMENT_FUNDS_ROLE,
  INVESTMENT_PRODUCTS_LIST_URL,
  INVESTMENT_POSITIONS_FUNDS_URL,
  INVESTMENT_POSITIONS_FIXED_INCOME_URL,
  INVESTMENT_POSITIONS_EQUITIES_URL,
  MOVIMENTS_TAB_SIZE,
  INVESTMENT_FIXED_INCOME_ROLE,
  STATEMENTS_URL
} from "../../utils/constants";
import Tabs from "../common/Tabs/Tabs";
import CanAccess from "../common/CanAccess";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import PositionsOverview from "./PositionsOverview";
import { Button } from "react-bocombbm-components";
import OffshoreSelect from "../common/OffshoreSelect/OffshoreSelect";
class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionPickedActive: translate("OVERVIEW_FUNDS_SUBTAB"),
      pickedActive: undefined,
      loadingFunds: true,
      goToFilterFunds: undefined,
      filterButtonFillFunds: undefined,
      loadingFixedIncome: true,
      goToFilterFixedIncome: undefined,
      filterButtonFillFixedIncome: undefined,
      loadingEquityIncome: true,
      goToFilterEquityIncome: undefined,
      filterButtonFillEquityIncome: undefined,
      fundsBalanceHistoryParams: {
        range: {
          from: moment
            .utc()
            .subtract(60, "days")
            .toDate(),
          to: moment.utc().toDate()
        },
        limit: MOVIMENTS_TAB_SIZE
      },
      fixedIncomeBalanceHistoryParams: {
        range: {
          from: moment
            .utc()
            .subtract(60, "days")
            .toDate(),
          to: moment.utc().toDate()
        },
        limit: MOVIMENTS_TAB_SIZE
      },
      equityIncomeBalanceHistoryParams: {
        range: {
          from: moment
            .utc()
            .subtract(60, "days")
            .toDate(),
          to: moment.utc().toDate()
        },
        limit: MOVIMENTS_TAB_SIZE
      },
      totalCountFunds: undefined,
      totalCountFixedIncome: undefined,
      totalCountEquitesIncome: undefined,
      loadingFundsMovimentations: false,
      loadingFixedIncomeMovimentations: false,
      loadingEquitesIncomeMovimentations: false,
      isEmptyFunds: true,
      isEmptyFixedIncome: true,
      isEmptyEquites: true,
      hideValues: true,
      futureDateFunds: false,
      futureDateFixedIncome: false,
      futureDateEquitesIncome: false,
      selectedTab: 0,
      positions: [],
      loading: true,
      loadedTransactionsData: false
    };
    this.resetStates = this.resetStates.bind(this);
    this.onFilter = this.onFilter.bind(this);
    this.seeMoreMovimentations = this.seeMoreMovimentations.bind(this);
    this.filterMovimentation = this.filterMovimentation.bind(this);
    this.getMovimentationData = this.getMovimentationData.bind(this);
    this.setPickedActive = this.setPickedActive.bind(this);
    this.setSelectedTab = this.setSelectedTab.bind(this);
    this.onCollapse = this.onCollapse.bind(this);
    this.setStateAsset = this.setStateAsset.bind(this);
    this.checkStateAsset = this.checkStateAsset.bind(this);
    this.findAssettype = this.findAssettype.bind(this);
    this.findLoading = this.findLoading.bind(this);
  }

  movimentationsInitial() {
    const urlParams = new URLSearchParams(window.location.search);
    const menu = urlParams.get("menu");
    const from = urlParams.get("from");
    window.history.replaceState({}, document.title, "/investments/overview");

    if (menu === "movements") {
      const selectedSession = () => {
        switch (from) {
          case "funds":
            return translate("OVERVIEW_FUNDS_SUBTAB");
          case "fixedIncome":
            return translate("OVERVIEW_FIXED_INCOME_SUBTAB");
          case "equities":
            return translate("OVERVIEW_EQUITES_SUBTAB");
          default:
            break;
        }
      };
      const result = selectedSession();
      this.setState({ selectedTab: 1, sessionPickedActive: result });
    }
  }

  async componentWillUnmount() {
    this.setState({
      loadedTransactionsData: false
    });
  }

  async componentDidMount() {
    // tags hotjar to local path
    hotjarTag();

    this.movimentationsInitial();

    this.month = getMonth();

    const {
      getConsolidatedPosition,
      getConsolidatedAssets,
      getPendingTransactions
    } = this.props;

    await Promise.all([
      getConsolidatedPosition(),
      getConsolidatedAssets(),
      getPendingTransactions()
    ]);

    let positionsWithRoute = new Array();

    this.props.consolidatedPosition.map(position => {
      if (
        position.assetType !== "Equity" &&
        position.assetType !== "FixedIncome" &&
        position.assetType !== "Funds" &&
        position.assetType !== "CashAccount"
      ) {
        positionsWithRoute.push({ ...position });

        this.setState({
          [position.assetType]: false
        });
      }
      if (position.assetType === "CashAccount") {
        positionsWithRoute.push({
          ...position,
          route: STATEMENTS_URL
        });

        this.setState({
          [position.assetType]: false
        });
      }
      if (position.assetType === "Equity") {
        positionsWithRoute.push({
          ...position,
          route: INVESTMENT_POSITIONS_EQUITIES_URL
        });

        this.setState({
          [position.assetType]: false
        });
      }
      if (position.assetType === "FixedIncome") {
        positionsWithRoute.push({
          ...position,
          route: INVESTMENT_POSITIONS_FIXED_INCOME_URL
        });

        this.setState({
          [position.assetType]: false
        });
      }
      if (position.assetType === "Funds") {
        positionsWithRoute.push({
          ...position,
          route: INVESTMENT_POSITIONS_FUNDS_URL
        });

        this.setState({
          [position.assetType]: false
        });
      }
    });

    this.props.consolidatedAssets.map(asset => {
      this.setState({
        [asset.assetClass]: false
      });
    });

    this.setState({
      positions: positionsWithRoute,
      loading: false
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      fundsBalanceHistoryParams,
      fixedIncomeBalanceHistoryParams,
      equityIncomeBalanceHistoryParams
    } = this.state;

    if (
      prevState.fundsBalanceHistoryParams !== fundsBalanceHistoryParams ||
      prevState.fixedIncomeBalanceHistoryParams !==
        fixedIncomeBalanceHistoryParams ||
      prevState.equityIncomeBalanceHistoryParams !==
        equityIncomeBalanceHistoryParams
    ) {
      this.filterMovimentation();
    }
  }

  async getMovimentationData() {
    const {
      getFundsIncomeTransactions,
      getFixedIncomeTransactions,
      getEquityIncomeTransactions
    } = this.props;
    if (
      this.state.goToFilterFunds === undefined &&
      this.state.goToFilterFixedIncome === undefined &&
      this.state.goToFilterEquityIncome === undefined
    ) {
      await getFundsIncomeTransactions();
      this.setState({
        totalCountFunds: this.props.totalCount
      });
      await getFixedIncomeTransactions();
      this.setState({
        totalCountFixedIncome: this.props.totalCount
      });
      await getEquityIncomeTransactions();
      this.setState({ totalCountEquitesIncome: this.props.totalCount });

      this.setState({
        isEmptyFunds: this.props.fundsIncomeTransactions.length === 0,
        isEmptyFixedIncome: this.props.fixedIncomeTransactions.length === 0,
        isEmptyEquites: this.props.equityIncomeTransactions.length === 0,
        loadingFunds: false,
        loadingFixedIncome: false,
        loadingEquityIncome: false
      });
    } else if (
      this.state.pickedActive === translate("OVERVIEW_FUNDS_SUBTAB") &&
      this.state.goToFilterFunds === false
    ) {
      this.setState({ loadingFunds: true });
      await getFundsIncomeTransactions();
      this.setState({
        totalCountFunds: this.props.totalCount,
        loadingFunds: false,
        goToFilterFunds: undefined,
        isEmptyFunds: this.props.fundsIncomeTransactions.length === 0
      });
    } else if (
      this.state.pickedActive === translate("OVERVIEW_FIXED_INCOME_SUBTAB") &&
      this.state.goToFilterFixedIncome === false
    ) {
      this.setState({ loadingFixedIncome: true });
      await getFixedIncomeTransactions();
      this.setState({
        totalCountFixedIncome: this.props.totalCount,
        loadingFixedIncome: false,
        goToFilterFixedIncome: undefined,
        isEmptyFixedIncome: this.props.fixedIncomeTransactions.length === 0
      });
    } else {
      this.setState({ loadingEquityIncome: true });
      await getEquityIncomeTransactions();
      this.setState({
        totalCountFunds: this.props.totalCount,
        loadingEquityIncome: false,
        goToFilterEquityIncome: undefined,
        isEmptyEquites: this.props.equityIncomeTransactions.length === 0
      });
    }
    this.setState({
      loadedTransactionsData: true
    });
  }

  onFilter({ range, filterButtonFill }, pickedActive) {
    const today = moment(moment(), getDateFieldPlaceholderByLocale()).format();
    if (pickedActive === translate("OVERVIEW_FUNDS_SUBTAB")) {
      if (moment(range.from).isAfter(today, "day")) {
        this.setState({
          isEmptyFunds: true,
          futureDateFunds: true,
          filterButtonFillFunds: filterButtonFill
        });
      } else {
        this.setState({
          loadingFunds: true,
          goToFilterFunds: true,
          pickedActive,
          filterButtonFillFunds: filterButtonFill,
          fundsBalanceHistoryParams: {
            ...this.state.fundsBalanceHistoryParams,
            range
          }
        });
      }
    } else if (pickedActive === translate("OVERVIEW_FIXED_INCOME_SUBTAB")) {
      if (moment(range.from).isAfter(today, "day")) {
        this.setState({
          isEmptyFixedIncome: true,
          futureDateFixedIncome: true,
          filterButtonFillFixedIncome: filterButtonFill
        });
      } else {
        this.setState({
          loadingFixedIncome: true,
          goToFilterFixedIncome: true,
          pickedActive,
          filterButtonFillFixedIncome: filterButtonFill,
          fixedIncomeBalanceHistoryParams: {
            ...this.state.fixedIncomeBalanceHistoryParams,
            range
          }
        });
      }
    } else {
      if (moment(range.from).isAfter(today, "day")) {
        this.setState({
          isEmptyEquites: true,
          futureDateEquitesIncome: true,
          filterButtonFillEquityIncome: filterButtonFill
        });
      } else {
        this.setState({
          loadingEquityIncome: true,
          goToFilterEquityIncome: true,
          pickedActive,
          filterButtonFillEquityIncome: filterButtonFill,
          equityIncomeBalanceHistoryParams: {
            ...this.state.equityIncomeBalanceHistoryParams,
            range
          }
        });
      }
    }
  }

  async filterMovimentation() {
    if (
      this.state.pickedActive === translate("OVERVIEW_FUNDS_SUBTAB") &&
      this.state.goToFilterFunds
    ) {
      await this.props.getFundsIncomeTransactions(
        this.state.fundsBalanceHistoryParams.range.from,
        this.state.fundsBalanceHistoryParams.range.to
      );
      this.setState({
        isEmptyFunds: this.props.fundsIncomeTransactions.length === 0,
        totalCountFunds: this.props.totalCount,
        loadingFunds: false
      });
    } else if (
      this.state.pickedActive === translate("OVERVIEW_FIXED_INCOME_SUBTAB") &&
      this.state.goToFilterFixedIncome
    ) {
      await this.props.getFixedIncomeTransactions(
        this.state.fixedIncomeBalanceHistoryParams.range.from,
        this.state.fixedIncomeBalanceHistoryParams.range.to
      );
      this.setState({
        isEmptyFixedIncome: this.props.fixedIncomeTransactions.length === 0,
        totalCountFixedIncome: this.props.totalCount,
        loadingFixedIncome: false
      });
    } else if (
      this.state.pickedActive === translate("OVERVIEW_EQUITES_SUBTAB") &&
      this.state.goToFilterEquityIncome
    ) {
      await this.props.getEquityIncomeTransactions(
        this.state.equityIncomeBalanceHistoryParams.range.from,
        this.state.equityIncomeBalanceHistoryParams.range.to
      );
      this.setState({
        isEmptyEquites: this.props.equityIncomeTransactions.length === 0,
        totalCountEquitesIncome: this.props.totalCount,
        loadingEquityIncome: false
      });
    } else {
      this.getMovimentationData();
    }
  }

  resetStates(pickedActive) {
    if (pickedActive === translate("OVERVIEW_FUNDS_SUBTAB")) {
      this.setState({
        pickedActive,
        goToFilterFunds: false,
        filterButtonFillFunds: undefined,
        fundsBalanceHistoryParams: {
          range: {
            from: moment
              .utc()
              .subtract(60, "days")
              .toDate(),
            to: moment.utc().toDate()
          },
          limit: MOVIMENTS_TAB_SIZE
        }
      });
    } else if (pickedActive === translate("OVERVIEW_FIXED_INCOME_SUBTAB")) {
      this.setState({
        pickedActive,
        goToFilterFixedIncome: false,
        filterButtonFillFixedIncome: undefined,
        fixedIncomeBalanceHistoryParams: {
          range: {
            from: moment
              .utc()
              .subtract(60, "days")
              .toDate(),
            to: moment.utc().toDate()
          },
          limit: MOVIMENTS_TAB_SIZE
        }
      });
    } else {
      this.setState({
        pickedActive,
        goToFilterEquityIncome: false,
        filterButtonFillEquityIncome: undefined,
        equityIncomeBalanceHistoryParams: {
          range: {
            from: moment
              .utc()
              .subtract(60, "days")
              .toDate(),
            to: moment.utc().toDate()
          },
          limit: MOVIMENTS_TAB_SIZE
        }
      });
    }
  }

  async seeMoreMovimentations(active) {
    const limit =
      active === translate("OVERVIEW_FUNDS_SUBTAB")
        ? this.props.fundsIncomeTransactions.length + 10
        : active === translate("OVERVIEW_FIXED_INCOME_SUBTAB")
        ? this.props.fixedIncomeTransactions.length + 10
        : this.props.equityIncomeTransactions.length + 10;

    if (active === translate("OVERVIEW_FUNDS_SUBTAB")) {
      this.setState({ loadingFundsMovimentations: true });
      if (this.state.goToFilterFunds) {
        await this.props.getFundsIncomeTransactions(
          this.state.fundsBalanceHistoryParams.range.from,
          this.state.fundsBalanceHistoryParams.range.to,
          0,
          limit
        );
      } else {
        await this.props.getFundsIncomeTransactions("", "", 0, limit);
      }
      this.setState({
        isEmptyFunds: this.props.fundsIncomeTransactions.length === 0,
        totalCountFunds: this.props.totalCount,
        loadingFundsMovimentations: false
      });
    } else if (active === translate("OVERVIEW_FIXED_INCOME_SUBTAB")) {
      this.setState({ loadingFixedIncomeMovimentations: true });
      if (this.state.goToFilterFixedIncome) {
        await this.props.getFixedIncomeTransactions(
          this.state.fixedIncomeBalanceHistoryParams.range.from,
          this.state.fixedIncomeBalanceHistoryParams.range.to,
          0,
          limit
        );
      } else {
        await this.props.getFixedIncomeTransactions("", "", 0, limit);
      }
      this.setState({
        isEmptyFixedIncome: this.props.fixedIncomeTransactions.length === 0,
        totalCountFixedIncome: this.props.totalCount,
        loadingFixedIncomeMovimentations: false
      });
    } else {
      this.setState({ loadingEquitesIncomeMovimentations: true });
      if (this.state.goToFilterEquityIncome) {
        await this.props.getEquityIncomeTransactions(
          this.state.equityIncomeBalanceHistoryParams.range.from,
          this.state.equityIncomeBalanceHistoryParams.range.to,
          0,
          limit
        );
      } else {
        await this.props.getEquityIncomeTransactions("", "", 0, limit);
      }
      this.setState({
        isEmptyEquites: this.props.equityIncomeTransactions.length === 0,
        totalCountEquitesIncome: this.props.totalCount,
        loadingEquitesIncomeMovimentations: false
      });
    }
  }

  setPickedActive(value) {
    this.setState({ sessionPickedActive: value });
  }

  setSelectedTab(value) {
    this.setState({ selectedTab: value });
  }

  async onCollapse(expandedIndex, assetType, name) {
    const loading = `${name}_loading`;
    const asset = `${name}_asset`;
    const { getAssetsByType, currentIndex } = this.props;
    if (
      currentIndex !== expandedIndex ||
      currentIndex === -1 ||
      (currentIndex === expandedIndex && this.checkStateAsset(assetType))
    ) {
      this.setState({ [loading]: true });
      await getAssetsByType(assetType, expandedIndex, currentIndex);
    }
    this.setState({
      [asset]: this.props.assets,
      [loading]: false
    });
  }

  setStateAsset(type) {
    if (this.state[type] === false) {
      this.setState({
        [type]: true
      });
    } else {
      this.setState({
        [type]: false
      });
    }
  }

  checkStateAsset(type) {
    return this.state[type];
  }

  findAssettype(name) {
    const asset = `${name}_asset`;
    return this.state[asset];
  }

  findLoading(name) {
    const loading = `${name}_loading`;
    return this.state[loading];
  }

  render() {
    const {
      pendingTransactions,
      consolidatedAssets,
      userInfo,
      error,
      assets
    } = this.props;

    const {
      positions,
      loading,
      loadedTransactionsData,
      selectedTab
    } = this.state;
    
    return (
      <ErrorBoundary errorStatus={error}>
        <OffshoreSelect userInfo={userInfo} />

        {!this.props.isGlobalMode && (
          <MainWrapper>
            <Tabs
              selectedTab={this.state.selectedTab}
              setSelectedTab={this.setSelectedTab}
            >
               <section title={translate("OVERVIEW_TAB_POSITION")}>
                <Wrapper>
                  <PositionsOverview
                    onCollapse={this.onCollapse}
                    assets={assets}
                    pendingTransactions={pendingTransactions}
                    consolidatedPosition={positions}
                    consolidatedAssets={consolidatedAssets}
                    loading={loading}
                    setStateAsset={this.setStateAsset}
                    checkStateAsset={this.checkStateAsset}
                    findAssettype={this.findAssettype}
                    findLoading={this.findLoading}
                  />

                  {!loading && (
                    <CanAccess
                      userInfo={userInfo}
                      roles={[
                        INVESTMENT_FUNDS_ROLE,
                        INVESTMENT_FIXED_INCOME_ROLE
                      ]}
                      anyRole={true}
                    >
                      <StickyWrapper data-test="investButton">
                        <Button
                          onClick={() => redirect(INVESTMENT_PRODUCTS_LIST_URL)}
                          disabled={false}
                          spacing={{
                            top: "s",
                            bottom: "s",
                            right: "s",
                            left: "s"
                          }}
                        >
                          {translate("INVEST")}
                        </Button>
                      </StickyWrapper>
                    </CanAccess>
                  )}
                </Wrapper>
              </section>

              <Movimentations
                getMovimentationData={this.getMovimentationData}
                loadedTransactionsData={loadedTransactionsData}
                selectedTab={selectedTab}
                initialSession={this.state.initialMovementSession}
                title={translate("OVERVIEW_TRANSACTION")}
                isEmptyFunds={this.state.isEmptyFunds}
                isEmptyFixedIncome={this.state.isEmptyFixedIncome}
                isEmptyEquites={this.state.isEmptyEquites}
                hideValues={this.state.hideValues}
                onFilter={this.onFilter}
                resetStates={this.resetStates}
                fundsIncomeTransactions={this.props.fundsIncomeTransactions}
                fixedIncomeTransactions={this.props.fixedIncomeTransactions}
                equityIncomeTransactions={this.props.equityIncomeTransactions}
                totalCountFunds={this.state.totalCountFunds}
                totalCountFixedIncome={this.state.totalCountFixedIncome}
                totalCountEquitesIncome={this.state.totalCountEquitesIncome}
                loadingFundsMovimentations={
                  this.state.loadingFundsMovimentations
                }
                loadingFixedIncomeMovimentations={
                  this.state.loadingFixedIncomeMovimentations
                }
                loadingEquitesIncomeMovimentations={
                  this.state.loadingEquitesIncomeMovimentations
                }
                seeMoreMovimentations={this.seeMoreMovimentations}
                loadingFunds={this.state.loadingFunds}
                goToFilterFunds={this.state.goToFilterFunds}
                filterButtonFillFunds={this.state.filterButtonFillFunds}
                loadingFixedIncome={this.state.loadingFixedIncome}
                goToFilterFixedIncome={this.state.goToFilterFixedIncome}
                filterButtonFillFixedIncome={
                  this.state.filterButtonFillFixedIncome
                }
                loadingEquityIncome={this.state.loadingEquityIncome}
                goToFilterEquityIncome={this.state.goToFilterEquityIncome}
                filterButtonFillEquityIncome={
                  this.state.filterButtonFillEquityIncome
                }
                futureDateFunds={this.state.futureDateFunds}
                futureDateFixedIncome={this.state.futureDateFixedIncome}
                futureDateEquitesIncome={this.state.futureDateEquitesIncome}
                userInfo={this.props.userInfo}
                pickedActive={this.state.sessionPickedActive}
                setPickedActive={this.setPickedActive}
              />
            </Tabs>
          </MainWrapper>
        )}
      </ErrorBoundary>
    );
  }
}

Overview.defaultProps = {
  consolidatedPosition: [],
  consolidatedAssets: []
};

Overview.propTypes = {
  indexes: arrayOf(
    shape({
      index: string,
      monthAcrrued: number,
      yearAccrued: number
    })
  ),
  consolidatedPosition: arrayOf(
    shape({
      name: string,
      netBalance: number,
      grossBalance: number,
      portfolioShare: number
    })
  ),
  consolidatedAssets: arrayOf(
    shape({
      name: string,
      netBalance: number,
      grossBalance: number,
      portfolioShare: number
    })
  ),
  transactions: arrayOf(
    shape({
      date: string,
      grossValue: number,
      type: string,
      assetName: string
    })
  )
};

export default Overview;
