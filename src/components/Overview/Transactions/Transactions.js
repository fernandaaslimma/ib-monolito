import React, { useState, Fragment, useEffect } from "react";
import moment from "moment";

import RadioButtonRounded from "../../common/RadioButtonRounded";
import AnimatedBottomSheet from "../../common/AnimatedBottomSheet";
import MovimentationsCard from "./TransactionsCard";
import DefaultContent from "../../common/DefaultContent";
import DefaultShimmerLoading from "../../common/DefaultShimmerLoading";
import {
  translate,
  getDateFieldPlaceholderByLocale,
  getLanguage
} from "../../../utils/i18n";
import { getShortDateStringFromEpoch } from "../../../utils/formatDate";
import { rem } from "../../../styles/tools";
import { black30 } from "../../../styles/settings";
import CanAccess from "../../common/CanAccess";
import LinkCard from "../../common/LinkCard";
import {
  INVESTMENT_FUNDS_ROLE,
  INVESTMENT_PRODUCTS_LIST_URL,
  CORPORATION
} from "../../../utils/constants";
import { redirect } from "../../../utils/redirect";

import { Button, Input, Icon } from "react-bocombbm-components";
import { checkUserType } from "../../common/CanAccess/CanAccess";

import {
  ContentWrapper,
  RadioButtonsWrapper,
  CalendarButtonWrapper,
  FormHeader,
  FilterWrapper,
  FilterLabels,
  InputsWrapper,
  FilterButtonsWrapper,
  FormContent,
  ViewMoreWrapper,
  ErrorMessage,
  Bar,
  StickyWrapper,
  FlotateButton,
  StickyFlotateWrapper
} from "./styles";

function Transactions({
  getMovimentationData,
  loadedTransactionsData,
  selectedTab,
  isEmptyFunds,
  isEmptyFixedIncome,
  isEmptyEquites,
  onFilter,
  resetStates,
  fundsIncomeTransactions,
  fixedIncomeTransactions,
  equityIncomeTransactions,
  totalCountFunds,
  totalCountFixedIncome,
  totalCountEquitesIncome,
  seeMoreMovimentations,
  loadingFunds,
  goToFilterFunds,
  filterButtonFillFunds,
  loadingFixedIncome,
  goToFilterFixedIncome,
  filterButtonFillFixedIncome,
  loadingEquityIncome,
  goToFilterEquityIncome,
  filterButtonFillEquityIncome,
  loadingFundsMovimentations,
  loadingFixedIncomeMovimentations,
  loadingEquitesIncomeMovimentations,
  futureDateFunds,
  futureDateFixedIncome,
  futureDateEquitesIncome,
  userInfo,
  pickedActive,
  setPickedActive
}) {
  const [dateFrom, setDateFrom] = useState("");
  const [pickedPeriod, setPickedPeriod] = useState(undefined);
  const [isBottomSheetState, setIsBottomSheetState] = useState(false);
  const [dateTo, setDateTo] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    async function getTransactionsfromCallback() {
      return await getMovimentationData();
    }
    if (loadedTransactionsData === false && selectedTab === 1) {
      getTransactionsfromCallback();
    }
  }, [loadedTransactionsData, selectedTab, getMovimentationData]);

  const setFixedActive = value => {
    setPickedActive(value);
  };

  const linkTo = () => {
    if (pickedActive === translate("OVERVIEW_FUNDS_SUBTAB")) {
      return "/investments/transactions/funds";
    }
    if (pickedActive === translate("OVERVIEW_FIXED_INCOME_SUBTAB")) {
      return "/investments/transactions/fixed-income";
    }
    if (pickedActive === translate("OVERVIEW_EQUITES_SUBTAB")) {
      return "/investments/transactions/equities";
    }
    return "/investments/transactions/funds";
  };

  const checkIfIsinTop = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  useEffect(() => {
    window.onscroll = function () {
      checkIfIsinTop();
    };
  }, []);

  const setFixedPeriod = value => {
    setPickedPeriod(value);
    setDateFrom("");
    setDateTo("");
    setErrorMessage(undefined);
  };

  const openFilterBottomSheet = () => {
    if (filterbuttonfill && filterbuttonfill.fillType === "period") {
      setFixedPeriod(filterbuttonfill.fillValue);
    }
    if (filterbuttonfill && filterbuttonfill.fillType === "range") {
      const from = moment(filterbuttonfill.fillValue.from).format(
        getDateFieldPlaceholderByLocale()
      );
      const to = moment(filterbuttonfill.fillValue.to).format(
        getDateFieldPlaceholderByLocale()
      );
      setDateFrom(from);
      setDateTo(to);
    }
    setIsBottomSheetState(true);
  };

  const changeContent = () => {
    openFilterBottomSheet();
    setIsBottomSheetState(true);
  };

  const closeCleaning = () => {
    setIsBottomSheetState(false);
    clearAllPeriods();
    scrollToTop();
  };

  const clearAllPeriods = () => {
    resetRadioFilter();
    setDateFrom("");
    setDateTo("");
    setErrorMessage(undefined);
  };

  const resetRadioFilter = () => {
    setPickedPeriod(undefined);
    setErrorMessage(undefined);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const resetFixedPeriod = () => {
    resetRadioFilter();
    setErrorMessage(undefined);
  };

  const isValidDate = date => {
    const isDate = moment(date, getDateFieldPlaceholderByLocale(), true);
    return isDate.isValid();
  };

  const changeFilter = () => {
    scrollToTop();
    if (pickedPeriod) {
      const period = defineFilterPeriod();
      const filterButtonFill = {
        fillType: "period",
        fillValue: `${pickedPeriod}`
      };
      onFilter(
        { range: period, filterButtonFill: filterButtonFill },
        pickedActive
      );
      setIsBottomSheetState(false);
      clearAllPeriods();
    } else if (dateFrom || dateTo) {
      const from = moment(dateFrom, getDateFieldPlaceholderByLocale()).format("YYYY-MM-DD");
      const to = moment(dateTo, getDateFieldPlaceholderByLocale()).format("YYYY-MM-DD");
      const daysDiff = moment(to).diff(from, "days");

      if (daysDiff < 0 || dateFrom === "" || dateTo === "") {
        setErrorMessage(translate("STATEMENTS_ERROR_SELECT_VALID_PERIOD"));
      } else {
        const period = defineFilterPeriod();

        const filterButtonFill = {
          fillType: "range",
          fillValue: { from: from, to: to }
        };
        onFilter(
          {
            range: period,
            filterButtonFill: filterButtonFill
          },
          pickedActive
        );
        setIsBottomSheetState(false);
        clearAllPeriods();
      }
    } else {
      clearAllPeriods();
      resetStates(pickedActive);
      setIsBottomSheetState(false);
    }
  };

  const defineFilterPeriod = () => {
    if (pickedPeriod) {
      const period = pickedPeriod.substring(0, pickedPeriod.lastIndexOf(" "));
      const startDate = moment()
        .subtract(period, "days")
        .format("YYYY-MM-DD");
      const endDate = moment().format("YYYY-MM-DD");
      return { from: startDate, to: endDate };
    }

    const startDate = moment(
      dateFrom,
      getDateFieldPlaceholderByLocale()
    ).format("YYYY-MM-DD");
    const endDate = moment(dateTo, getDateFieldPlaceholderByLocale()).format("YYYY-MM-DD");
    return { from: startDate, to: endDate };
  };

  const formatTitle = (value, type = false) => {
    const daysFromToday = moment
      .utc()
      .startOf("day")
      .diff(
        moment(value)
          .utc()
          .startOf("day"),
        "days"
      );

    if (type === false) {
      if (daysFromToday === 0) {
        return translate("TODAY");
      } else if (daysFromToday === 1) {
        return translate("YESTERDAY");
      } else if (daysFromToday === -1) {
        return translate("TOMORROW");
      }
    }

    return `${getShortDateStringFromEpoch(value, true)} ${moment(value).format("YYYY")}`;
  };

  const buildEmptystate = () => {
    return (
      <DefaultContent
        data-test="emptyStatementsMobile"
        Icon={() => (
          <Icon
            type={"NoTransactions"}
            color={black30}
            height={rem(66)}
            width={rem(66)}
          />
        )}
        primaryText={translate("OVERVIEW_NO_MOVIMENTATION")}
        secondaryTexts={[
          (goToFilterFunds &&
            pickedActive === translate("OVERVIEW_FUNDS_SUBTAB")) ||
            (goToFilterFixedIncome &&
              pickedActive === translate("OVERVIEW_FIXED_INCOME_SUBTAB")) ||
            (goToFilterEquityIncome &&
              pickedActive === translate("OVERVIEW_EQUITES_SUBTAB"))
            ? translate("OVERVIEW_EMPTY_STATE")
            : currentFutureDate
              ? translate("OVERVIEW_EMPTY_STATE")
              : translate("OVERVIEW_EMPTY_STATE3")
        ]}
      />
    );
  };

  const buildCards = active => {
    return active.map((item, i) => (
      <MovimentationsCard
        key={i}
        item={item}
        formatTitle={formatTitle}
        pickedActive={pickedActive}
        dataTest={`card_${i}`}
        dataX={"card"}
      />
    ));
  };

  const fixedFilterActives = [
    translate("OVERVIEW_FUNDS_SUBTAB"),
    translate("OVERVIEW_FIXED_INCOME_SUBTAB"),
    translate("OVERVIEW_EQUITES_SUBTAB")
  ];
  const fixedFilterPeriods = ["7", "15", "30", "60"];

  const activeClear =
    pickedPeriod || dateFrom != "" || dateTo != "" ? true : false;
  const activeFilter =
    pickedPeriod || (isValidDate(dateFrom) && isValidDate(dateTo))
      ? true
      : false;

  const filterbuttonfill =
    pickedActive === translate("OVERVIEW_FUNDS_SUBTAB")
      ? filterButtonFillFunds
      : pickedActive === translate("OVERVIEW_FIXED_INCOME_SUBTAB")
        ? filterButtonFillFixedIncome
        : filterButtonFillEquityIncome;
  const filterButtonContent = filterbuttonfill
    ? filterbuttonfill.fillType === "period"
      ? `${filterbuttonfill.fillValue}`
      : filterbuttonfill.fillValue.from === filterbuttonfill.fillValue.to
        ? formatTitle(filterbuttonfill.fillValue.from, true)
        : `${formatTitle(filterbuttonfill.fillValue.from, true)}
    ${translate("STATEMENTS_LOWERCASE_TO")}
    ${formatTitle(filterbuttonfill.fillValue.to, true)}`
    : undefined;
  const currentLoading =
    pickedActive === translate("OVERVIEW_FUNDS_SUBTAB")
      ? {
        loading: loadingFunds,
        loadingMovimentation: loadingFundsMovimentations
      }
      : pickedActive === translate("OVERVIEW_FIXED_INCOME_SUBTAB")
        ? {
          loading: loadingFixedIncome,
          loadingMovimentation: loadingFixedIncomeMovimentations
        }
        : {
          loading: loadingEquityIncome,
          loadingMovimentation: loadingEquitesIncomeMovimentations
        };
  const currentStateWithFilter =
    pickedActive === translate("OVERVIEW_FUNDS_SUBTAB") && !goToFilterFunds
      ? isEmptyFunds
      : pickedActive === translate("OVERVIEW_FIXED_INCOME_SUBTAB") &&
        !goToFilterFixedIncome
        ? isEmptyFixedIncome
        : pickedActive === translate("OVERVIEW_EQUITES_SUBTAB") &&
          !goToFilterEquityIncome
          ? isEmptyEquites
          : false;
  const currentState =
    pickedActive === translate("OVERVIEW_FUNDS_SUBTAB")
      ? {
        isEmpty: isEmptyFunds,
        transactions: fundsIncomeTransactions,
        totalCounts: totalCountFunds
      }
      : pickedActive === translate("OVERVIEW_FIXED_INCOME_SUBTAB")
        ? {
          isEmpty: isEmptyFixedIncome,
          transactions: fixedIncomeTransactions,
          totalCounts: totalCountFixedIncome
        }
        : pickedActive === translate("OVERVIEW_EQUITES_SUBTAB")
          ? {
            isEmpty: isEmptyEquites,
            transactions: equityIncomeTransactions,
            totalCounts: totalCountEquitesIncome
          }
          : false;
  const currentFutureDate =
    pickedActive === translate("OVERVIEW_FUNDS_SUBTAB")
      ? futureDateFunds
      : pickedActive === translate("OVERVIEW_FIXED_INCOME_SUBTAB")
        ? futureDateFixedIncome
        : pickedActive === translate("OVERVIEW_EQUITES_SUBTAB")
          ? futureDateEquitesIncome
          : false;

  const isCorporation = checkUserType(userInfo, CORPORATION);

  return (
    <ContentWrapper>
      <FormHeader>
        <RadioButtonsWrapper>
          {fixedFilterActives.map((active, index) => (
            <RadioButtonRounded
              radioName="activeRadio"
              key={index}
              itemKey={index}
              selectedValue={pickedActive}
              setValue={setFixedActive}
              buttonValue={`${active}`}
              disabled={currentLoading.loading}
            />
          ))}
        </RadioButtonsWrapper>
        <CalendarButtonWrapper>
          <Button
            type={filterbuttonfill ? "primary" : "outline"}
            withIcon={{ name: "CalendarEmpty", position: "left" }}
            spacing={{
              top: "none",
              bottom: "none",
              right: "none",
              left: "none"
            }}
            disabled={currentStateWithFilter && !currentFutureDate}
            loading={currentLoading.loading && !currentStateWithFilter}
            dataTest="filterButton"
            onClick={() => changeContent()}
          >
            {filterButtonContent || translate("OVERVIEW_TRANSACTION_PERIOD")}
          </Button>
        </CalendarButtonWrapper>
      </FormHeader>
      <FormContent>
        {currentLoading.loading ? (
          <DefaultShimmerLoading repeat={1} innerRepeat={3} />
        ) : (
          <Fragment>
            {currentState.isEmpty && buildEmptystate()}
            {!currentState.isEmpty &&
              currentState.transactions &&
              buildCards(currentState.transactions)}
          </Fragment>
        )}
        {currentLoading.loading ||
          currentState.transactions.length ===
          currentState.totalCounts ? null : !currentState.isEmpty &&
            currentState.transactions.length < currentState.totalCounts &&
            !currentLoading.loadingMovimentation ? (
          <ViewMoreWrapper
            data-test="viewMore"
            onClick={() => seeMoreMovimentations(pickedActive)}
          >
            {translate("OVERVIEW_TRANSACTION_VIEW_MORE")}
          </ViewMoreWrapper>
        ) : !currentState.isEmpty ? (
          <ViewMoreWrapper>
            <Bar />
            <Bar />
            <Bar />
            <Bar />
          </ViewMoreWrapper>
        ) : null}
        {!currentState.isEmpty && (
          <LinkCard
            iconType="FiLoader"
            to={linkTo()}
            anchorText={translate("CLICK_TO_VIEW_MOVIMENTATIONS")}
            versionText={translate("WISH_TO_SEE_PREVIOUS_VERSION")}
            noSpan
            withUnderline
            fontSize={14}
          />
        )}
      </FormContent>
      {showBackToTop && !currentState.isEmpty &&
        (
          <StickyFlotateWrapper
            isCorporation={isCorporation}
            showBackToTop={showBackToTop}
          >
            <FlotateButton
              onClick={() => scrollToTop()}
              data-test="goToTopButton"
            >
              <Icon
                type={"PointingArrow"}
                color={"white"}
                height={30}
                width={30}
              />
            </FlotateButton>
          </StickyFlotateWrapper>
        )}

      <CanAccess userInfo={userInfo} roles={[INVESTMENT_FUNDS_ROLE]}>
        <StickyWrapper>
          <Button
            onClick={() => redirect(INVESTMENT_PRODUCTS_LIST_URL)}
            disabled={false}
            spacing={{ top: "s", bottom: "s", right: "s", left: "s" }}
          >
            {translate("INVEST")}
          </Button>
        </StickyWrapper>
      </CanAccess>
      <AnimatedBottomSheet
        isOpen={isBottomSheetState}
        head={{ title: translate("OVERVIEW_TRANSACTION_PERIOD") }}
        velocity={0.3}
        onClickInBack={() => closeCleaning()}
      >
        <Fragment>
          <FilterWrapper>
            <FilterLabels>
              {translate("OVERVIEW_TRANSACTION_SELECT_PERIOD")}
            </FilterLabels>
            <RadioButtonsWrapper>
              {fixedFilterPeriods.map((period, index) => (
                <RadioButtonRounded
                  radioName="periodRadio"
                  key={index}
                  itemKey={index}
                  selectedValue={pickedPeriod}
                  setValue={setFixedPeriod}
                  buttonValue={`${period} ${translate(
                    "STATEMENTS_LOWERCASE_DAYS"
                  )}`}
                />
              ))}
            </RadioButtonsWrapper>
            <FilterLabels>
              {translate("OVERVIEW_TRANSACTION_SPECIFC_PERIOD")}
            </FilterLabels>
            <InputsWrapper>
              <Input
                onChange={e => {
                  setDateFrom(e.target.value) && resetFixedPeriod();
                }}
                type="text"
                name="date"
                inputMode="numeric"
                value={dateFrom}
                label={translate("OVERVIEW_TRANSACTION_FROM")}
                dataTest="filterDateFrom"
                maskType="datetime"
                valid={isValidDate(dateFrom)}
                required={() => false}
                locale={getLanguage()}
                onBlur={() => { }}
                onFocus={() => resetRadioFilter()}
              />
              <Input
                onChange={e => {
                  setDateTo(e.target.value) && resetFixedPeriod();
                }}
                type="text"
                name="date"
                inputMode="numeric"
                value={dateTo}
                label={translate("OVERVIEW_TRANSACTION_TO")}
                dataTest="filterDateTo"
                maskType="datetime"
                valid={isValidDate(dateTo)}
                required={() => false}
                locale={getLanguage()}
                onBlur={() => { }}
                onFocus={() => resetRadioFilter()}
              />
            </InputsWrapper>
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            <FilterButtonsWrapper>
              {activeClear && (
                <Fragment>
                  <Button
                    type="outline"
                    spacing={{
                      top: "none",
                      bottom: "none",
                      right: "none",
                      left: "none"
                    }}
                    dataTest="clearAllFiltersButton"
                    onClick={() => clearAllPeriods()}
                  >
                    {translate("OVERVIEW_TRANSACTION_CLEAR_ALL")}
                  </Button>

                  <Button
                    type="primary"
                    spacing={{
                      top: "none",
                      bottom: "none",
                      right: "none",
                      left: "none"
                    }}
                    dataTest="applyFilterButton"
                    onClick={() => changeFilter()}
                    disabled={!activeFilter}
                  >
                    {translate("OVERVIEW_TRANSACTION_FILTER")}
                  </Button>
                </Fragment>
              )}
              {!activeClear && (
                <Button
                  type="outline"
                  spacing={{
                    top: "none",
                    bottom: "none",
                    right: "none",
                    left: "none"
                  }}
                  dataTest="clearFilterButton"
                  onClick={() => changeFilter()}
                >
                  {translate("OVERVIEW_TRANSACTION_RESET_FILTER")}
                </Button>
              )}
            </FilterButtonsWrapper>
          </FilterWrapper>
        </Fragment>
      </AnimatedBottomSheet>
    </ContentWrapper>
  );
}
export default Transactions;