import React, { useState, Fragment, useEffect } from "react";
import moment from "moment";

import RadioButtonRounded from "../../common/RadioButtonRounded";
import AnimatedBottomSheet from "../../common/AnimatedBottomSheet";
import TransactionsCard from "./TransactionsCard";
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
import { Button, Input, Icon } from "react-bocombbm-components";

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
  FlotateButton,
  StickyFlotateWrapper
} from "./styles";

function TransactionsOffShore({
  transactions,
  loading,
  getTransactions,
  isEmpty,
  totalCount,
  currentCoin
}) {
  const [pickedPeriod, setPickedPeriod] = useState(undefined);
  const [dateFrom, setDateFrom] = useState("");
  const [isBottomSheetState, setIsBottomSheetState] = useState(false);
  const [dateTo, setDateTo] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [pickedActive, setPickedActive] = useState(translate("OVERVIEWOFFSHORE_TIMEDEPOSIT_SUBTAB"));
  const [filterbuttonfill, setFilterbuttonfill] = useState(undefined);
  const [filterButtonContent, setFilterbuttonContent] = useState(undefined);
  const [futureDate, setFutureDate] = useState(false);
  const [seeMoreLoading, setSeeMoreLoading] = useState(false);

  useEffect(() => {
    resetFilter()
  }, [currentCoin]);

  useEffect(() => {
    const filterButtonContent = filterbuttonfill
      ? filterbuttonfill.fillType === "period"
        ? `${filterbuttonfill.fillValue}`
        : filterbuttonfill.fillValue.from === filterbuttonfill.fillValue.to
          ? formatTitle(filterbuttonfill.fillValue.from, true)
          : `${formatTitle(filterbuttonfill.fillValue.from, true)}
  ${translate("STATEMENTS_LOWERCASE_TO")}
  ${formatTitle(filterbuttonfill.fillValue.to, true)}`
      : undefined;

    setFilterbuttonContent(filterButtonContent)
  }, [filterbuttonfill])


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

  const setFixedPeriod = value => {
    setPickedPeriod(value);
    setDateFrom("");
    setDateTo("");
    setErrorMessage(undefined);
  };

  const changeContent = () => {
    openFilterBottomSheet();
    setIsBottomSheetState(true);
  };

  const closeCleaning = () => {
    setFutureDate(false);
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

  const resetFilter = () => {
    setFilterbuttonfill(undefined);
    setFilterbuttonContent(undefined);
    setFutureDate(false);
    clearAllPeriods();
    setIsBottomSheetState(false);
    getTransactions({ dateFrom: '', dateTo: '', currency: currentCoin })
    scrollToTop();
  };

  const resetRadioFilter = () => {
    setPickedPeriod(undefined);
    setErrorMessage(undefined);
  };


  const resetFixedPeriod = () => {
    resetRadioFilter();
    setErrorMessage(undefined);
  };

  const isValidDate = date => {
    const isDate = moment(date, getDateFieldPlaceholderByLocale(), true);
    return isDate.isValid();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
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

  const changeFilter = () => {
    scrollToTop();
    if (pickedPeriod) {
      const period = defineFilterPeriod();
      const filterButtonFill = {
        fillType: "period",
        fillValue: `${pickedPeriod}`
      };
      setFilterbuttonfill(filterButtonFill)
      getTransactions({ dateFrom: period.from, dateTo: period.to, currency: currentCoin })
      setFutureDate(true);
      setIsBottomSheetState(false);
    } else if (dateFrom || dateTo) {
      const from = moment(dateFrom, getDateFieldPlaceholderByLocale()).format("YYYY-MM-DD");
      const to = moment(dateTo, getDateFieldPlaceholderByLocale()).format("YYYY-MM-DD");
      const daysDiff = moment(to).diff(from, "days");
      if (daysDiff < 0 || dateFrom === "" || dateTo === "") {
        setErrorMessage(translate("STATEMENTS_ERROR_SELECT_VALID_PERIOD"));
      } else {
        const filterButtonFill = {
          fillType: "range",
          fillValue: { from: from, to: to }
        };
        setFilterbuttonfill(filterButtonFill)

        getTransactions({ dateFrom: from, dateTo: to, currency: currentCoin })
        setIsBottomSheetState(false);
      }
    } else {
      setIsBottomSheetState(false);
    }
  };

  const seeMoreMovimentations = () => {
    setSeeMoreLoading(true);
    const limit = transactions?.length + 10;
    if (pickedPeriod) {
      const period = defineFilterPeriod();
      getTransactions({ dateFrom: period?.from, dateTo: period?.to, limit, currency: currentCoin })
    } else if (dateFrom || dateTo) {
      const from = moment(dateFrom, getDateFieldPlaceholderByLocale()).format("YYYY-MM-DD");
      const to = moment(dateTo, getDateFieldPlaceholderByLocale()).format("YYYY-MM-DD");
      getTransactions({ dateFrom: from, dateTo: to, limit, currency: currentCoin })
    } else {
      getTransactions({ dateFrom: "", dateTo: "", limit, currency: currentCoin })
    }
  };

  const buildEmptystate = () => {
    return (
      <DefaultContent
        data-test="emptyStatements"
        Icon={() => (
          <Icon
            type={"NoTransactions"}
            color={black30}
            height={rem(66)}
            width={rem(66)}
          />
        )}
        primaryText={translate("OVERVIEW_NO_MOVIMENTATION")}
        secondaryTexts={[futureDate ? translate("OVERVIEW_EMPTY_STATE")
          : translate("OVERVIEW_EMPTY_STATE3")]}
      />
    );
  };

  const buildCards = active => {
    return active.map((item, i) => (
      <TransactionsCard
        currency={currentCoin}
        key={i}
        item={item}
        formatTitle={formatTitle}
        dataTest={`card_${i}`}
        dataX={"card"}
      />
    ));
  };

  const fixedFilterActives = [
    'Time Deposit'
  ];

  const fixedFilterPeriods = ["7", "15", "30", "60"];

  const activeClear =
    pickedPeriod || dateFrom != "" || dateTo != "" ? true : false;

  const activeFilter =
    pickedPeriod || (isValidDate(dateFrom) && isValidDate(dateTo))
      ? true
      : false;

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
              setValue={setPickedActive}
              buttonValue={`${active}`}
              disabled={loading}
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
            disabled={loading}
            loading={false}
            dataTest="filterButton"
            onClick={() => changeContent()}
          >
            {filterButtonContent || translate("OVERVIEW_TRANSACTION_PERIOD")}
          </Button>
        </CalendarButtonWrapper>
      </FormHeader>
      <FormContent>
        {loading ?
          <DefaultShimmerLoading repeat={1} innerRepeat={3} />
          :
          <Fragment>
            {isEmpty && buildEmptystate()}
            {!isEmpty && transactions &&
              buildCards(transactions)}
          </Fragment>
        }
        {transactions?.length < totalCount && !isEmpty && !loading &&
          <ViewMoreWrapper
            data-test="viewMore"
            onClick={seeMoreMovimentations}
          >
            {translate("OVERVIEW_TRANSACTION_VIEW_MORE")}
          </ViewMoreWrapper>
        }

        {transactions?.length < totalCount && loading && seeMoreLoading &&
          <ViewMoreWrapper>
            <Bar />
            <Bar />
            <Bar />
            <Bar />
          </ViewMoreWrapper>
        }

      </FormContent>
      {showBackToTop && !isEmpty && (
        <StickyFlotateWrapper showBackToTop={showBackToTop}>
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

      <AnimatedBottomSheet
        isOpen={isBottomSheetState}
        head={{ title: translate("OVERVIEW_TRANSACTION_PERIOD") }}
        velocity={0.3}
        onClickInBack={() => closeCleaning()}
        dataTest='filterModal'
      >
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
                setValue={(value) => setFixedPeriod(value)}
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
                setDateFrom(e.target.value);
                resetFixedPeriod();
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
                setDateTo(e.target.value);
                resetFixedPeriod();
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
                onClick={() => resetFilter()}
              >
                {translate("OVERVIEW_TRANSACTION_RESET_FILTER")}
              </Button>
            )}
          </FilterButtonsWrapper>
        </FilterWrapper>
      </AnimatedBottomSheet>
    </ContentWrapper>
  );
}

export default TransactionsOffShore;
