import React, { Fragment, useEffect, useState } from "react";
import Radio from "../../../common/Radio";
import RadioButtonRounded from "../../../common/RadioButtonRounded";
import formatNumber, { formatCNPJ } from "../../../../utils/formatNumber";
import moment from "moment";
import {
  translate,
  getLanguage,
  getDateFieldPlaceholderByLocale
} from "../../../../utils/i18n";
import { getShortDateStringFromEpoch } from "../../../../utils/formatDate";
import {
  FormHeader,
  FormContent,
  Separator,
  Space,
  RadioWrapper,
  RadioAccount,
  AccountWrapper,
  AccountBalance,
  Account,
  FilterWrapper,
  FilterLabels,
  RadioButtonsWrapper,
  InputsWrapper,
  FilterButtonsWrapper,
  CalendarButtonWrapper,
  IconView,
  AccountBalanceWrapper,
  ErrorMessage,
  ClicableItem,
  MobileStatementsWrapper,
  BalanceWrapper,
  FutureTransactionsWrapper,
  BtnWrapper
} from "./styles";
import StatementsCards from "./StatementsCards";
import PendingOperations from "../../../common/PendingOperations";
import AnimatedBottonSheet from "../../../common/AnimatedBottomSheet";
import DefaultContent from "../../../common/DefaultContent";
import { Icon, Input, Button } from "react-bocombbm-components";
import { black30, neutral200 } from "../../../../styles/settings";
import { rem } from "../../../../styles/tools";
import { concat } from "lodash";
import { WrapperPendingOperations } from "../styles";
import { isIndividualUser } from "../../../../utils/roles";
import Hide from "../../../common/Hide";
import OffshoreSelect from "../../../common/OffshoreSelect/OffshoreSelect";

function Mobile({
  changeAccount,
  accounts,
  originAccount,
  balanceAndEventsHistory,
  isEmptyEvents,
  futureEventsHistory,
  isEmptyFutureEvents,
  changeValuesVisibility,
  hideValues,
  onFilter,
  filterButtonFill,
  resetStates,
  loading,
  getPendingOperationsNumber,
  printContext,
  getBank,
  userInfo,
  printScreen
}) {
  const { accountNumber, availableBalance } = originAccount;
  const [pickedAccount, setPickedAccount] = useState(accountNumber);
  const [isBottomSheet, changeBottomSheetState] = useState(false);
  const [selectedContent, setSelectedContent] = useState(undefined);
  const [pickedPeriod, setPickedPeriod] = useState(undefined);
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [errorMessage, setNewErrorMessage] = useState(undefined);
  const [isFutureDateFrom, setIsFutureDateFrom] = useState(false);
  const [isFutureDateTo, setIsFutureDateTo] = useState(false);

  const setErrorMessage = message => {
    if (message != errorMessage) {
      setNewErrorMessage(message);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    scrollToTop();
  });

  const resetRadioFilter = () => {
    setPickedPeriod(undefined);
    if (errorMessage != undefined) {
      setErrorMessage(undefined);
    }
    const radioFilter = document.getElementById("RadioButtonsWrapper");
    radioFilter.scrollLeft = 0;
  };

  const openFilterBottomSheet = () => {
    if (filterButtonFill && filterButtonFill.fillType === "period") {
      setFixedPeriod(filterButtonFill.fillValue);
    }
    if (filterButtonFill && filterButtonFill.fillType === "range") {
      const from = moment(filterButtonFill.fillValue.from).format(
        getDateFieldPlaceholderByLocale()
      );
      const to = moment(filterButtonFill.fillValue.to).format(
        getDateFieldPlaceholderByLocale()
      );
      setDateFrom(from);
      setDateTo(to);
    }
    changeBottomSheetState(true);
  };

  const changeContent = contentType => {
    contentType === "filterContent"
      ? openFilterBottomSheet()
      : changeBottomSheetState(true);
    setSelectedContent(contentType);
  };

  const clearAllPeriods = () => {
    resetRadioFilter();
    setDateFrom("");
    setDateTo("");
    if (errorMessage != undefined) {
      setErrorMessage(undefined);
    }
  };

  const closeCleaning = () => {
    changeBottomSheetState(false);
    clearAllPeriods();
    scrollToTop();
  };

  const selectAcc = e => {
    setPickedAccount(e.target.value);
    scrollToTop();
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

    return `${getShortDateStringFromEpoch(value, true)} ${moment(value).format(
      "YYYY"
    )}`;
  };

  const changeFilter = () => {
    const from = moment(dateFrom, getDateFieldPlaceholderByLocale()).format();
    const to = moment(dateTo, getDateFieldPlaceholderByLocale()).format();
    scrollToTop();
    if (pickedPeriod) {
      const period = defineFilterPeriod();
      const filterButtonFill = {
        fillType: "period",
        fillValue: `${pickedPeriod}`
      };
      onFilter({ range: period, filterButtonFill: filterButtonFill });
      changeBottomSheetState(false);
    } else if (dateFrom || dateTo) {
      const daysDiff = moment(to).diff(from, "days");

      if (daysDiff < 0 || dateFrom === "" || dateTo === "") {
        if (errorMessage != translate("STATEMENTS_ERROR_SELECT_VALID_PERIOD")) {
          setNewErrorMessage(translate("STATEMENTS_ERROR_SELECT_VALID_PERIOD"));
        }
      } else {
        const period = defineFilterPeriod();

        const filterButtonFill = {
          fillType: "range",
          fillValue: { from: from, to: to }
        };
        onFilter({
          range: period,
          filterButtonFill: filterButtonFill
        });
        changeBottomSheetState(false);
      }
    } else {
      clearAllPeriods();
      resetStates();
      changeBottomSheetState(false);
    }
  };

  const maskValues = value => {
    const hideMask = "\u25CF".repeat(6);
    if (hideValues) {
      return value.lastIndexOf(" ") != -1
        ? concat(value.substring(0, value.lastIndexOf(" ") + 1), hideMask)
        : hideMask;
    }
    return value;
  };

  const changeAcc = () => {
    changeBottomSheetState(false);
    scrollToTop();
    accountNumber === pickedAccount
      ? null
      : changeAccount({ target: { value: pickedAccount } }) && resetStates();
  };

  const isValidDate = (date, inputType) => {
    const now = moment().startOf("day");
    const isDate = moment(date, getDateFieldPlaceholderByLocale(), true);

    if (isDate.isValid()) {
      const dateFormated = moment(date, getDateFieldPlaceholderByLocale());

      if (now.diff(dateFormated, "days") < 0) {
        if (inputType === "dateFrom") {
          isFutureDateFrom ? null : setIsFutureDateFrom(true);
        }
        if (inputType === "dateTo") {
          isFutureDateTo ? null : setIsFutureDateTo(true);
        }
        if (isFutureDateFrom || isFutureDateTo) {
          errorMessage === undefined
            ? setErrorMessage(
                translate("STATEMENTS_ERROR_INVALID_FUTURE_DATES")
              )
            : null;
        }
        return false;
      } else {
        if (inputType === "dateFrom") {
          isFutureDateFrom ? setIsFutureDateFrom(false) : null;
        }
        if (inputType === "dateTo") {
          isFutureDateTo ? setIsFutureDateTo(false) : null;
        }
        if (!isFutureDateFrom && !isFutureDateTo) {
          errorMessage === translate("STATEMENTS_ERROR_INVALID_FUTURE_DATES")
            ? setErrorMessage(undefined)
            : null;
        }
        return true;
      }
    } else {
      return false;
    }
  };

  const resetFixedPeriod = () => {
    resetRadioFilter();
    if (errorMessage != undefined) {
      setErrorMessage(undefined);
    }
  };

  const setFixedPeriod = value => {
    setPickedPeriod(value);
    setDateFrom("");
    setDateTo("");
    if (errorMessage != undefined) {
      setErrorMessage(undefined);
    }
  };

  const defineFilterPeriod = () => {
    if (pickedPeriod) {
      const period = pickedPeriod.substring(0, pickedPeriod.lastIndexOf(" "));
      const startDate = moment()
        .subtract(period, "days")
        .format();
      const endDate = moment().format();
      return { from: startDate, to: endDate };
    }

    const startDate = moment(
      dateFrom,
      getDateFieldPlaceholderByLocale()
    ).format();
    const endDate = moment(dateTo, getDateFieldPlaceholderByLocale()).format();
    return { from: startDate, to: endDate };
  };

  const accountsTotal = accounts && accounts.length;
  const defaultCurrency = "R$";
  const fixedFilterPeriods = ["7", "15", "30", "60", "90"];

  const activeClear =
    pickedPeriod || dateFrom != "" || dateTo != "" ? true : false;

  const activeFilter =
    pickedPeriod || (isValidDate(dateFrom) && isValidDate(dateTo))
      ? true
      : false;

  const filterButtonContent = filterButtonFill
    ? filterButtonFill.fillType === "period"
      ? `${filterButtonFill.fillValue}`
      : filterButtonFill.fillValue.from === filterButtonFill.fillValue.to
      ? formatTitle(filterButtonFill.fillValue.from, true)
      : `${formatTitle(filterButtonFill.fillValue.from, true)}
    ${translate("STATEMENTS_LOWERCASE_TO")}
    ${formatTitle(filterButtonFill.fillValue.to, true)}`
    : undefined;

  const filterContent = (
    <Fragment>
      <FilterWrapper>
        <FilterLabels>{translate("STATEMENTS_SELECT_PERIOD")}</FilterLabels>
        <RadioButtonsWrapper id="RadioButtonsWrapper">
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
        <FilterLabels>{translate("STATEMENTS_SPECIFIC_PERIOD")}</FilterLabels>
        <InputsWrapper>
          <Input
            onChange={e => {
              setDateFrom(e.target.value) && resetFixedPeriod();
            }}
            type="text"
            name="date"
            inputMode="numeric"
            value={dateFrom}
            label={translate("STATEMENTS_FROM")}
            dataTest="filterDateFrom"
            maskType="datetime"
            valid={isValidDate(dateFrom, "dateFrom")}
            required={() => false}
            locale={getLanguage()}
            onBlur={() => {}}
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
            label={translate("STATEMENTS_TO")}
            dataTest="filterDateTo"
            maskType="datetime"
            valid={isValidDate(dateTo, "dateTo")}
            required={() => false}
            locale={getLanguage()}
            onBlur={() => {}}
            onFocus={() => resetRadioFilter()}
          />
        </InputsWrapper>
        {errorMessage && (
          <ErrorMessage data-test="invalidFutureDate">
            {errorMessage}
          </ErrorMessage>
        )}
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
                {translate("STATEMENTS_CLEAR_ALL")}
              </Button>

              <Button
                type="primary"
                spacing={{
                  top: "none",
                  bottom: "none",
                  right: "none",
                  left: "none"
                }}
                loading={loading}
                dataTest="applyFilterButton"
                onClick={() => changeFilter()}
                disabled={!activeFilter}
              >
                {translate("STATEMENTS_FILTER")}
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
              loading={loading}
              dataTest="clearFilterButton"
              onClick={() => changeFilter()}
            >
              {translate("STATEMENTS_RESET_FILTER")}
            </Button>
          )}
        </FilterButtonsWrapper>
      </FilterWrapper>
    </Fragment>
  );

  const radioContent = (
    <Fragment>
      <RadioWrapper>
        {accounts &&
          accounts.map((account, index) => {
            const { availableBalance } = account;
            const formatedBalance = formatNumber(availableBalance, {
              digits: 2
            });
            const balanceLabel = translate("STATEMENTS_AVAILABLE_BALANCE");

            const subLabels = !isIndividualUser()
              ? [
                  `CNPJ: ${formatCNPJ(account.document)}`,
                  `${balanceLabel}: ${defaultCurrency} ${maskValues(
                    formatedBalance
                  )}`
                ]
              : [
                  `${balanceLabel}: ${defaultCurrency} ${maskValues(
                    formatedBalance
                  )}`
                ];

            return (
              <Fragment key={index}>
                <Radio
                  dataTestLabel={`Account_${index}`}
                  label={<RadioAccount>{account.accountNumber}</RadioAccount>}
                  subLabels={subLabels}
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
      <BtnWrapper>
        <Button
          type="primary"
          spacing={{ top: "xs", bottom: "l", right: "s", left: "s" }}
          loading={loading}
          dataTest="SaveAccountButton"
          onClick={() => changeAcc()}
        >
          {translate("STATEMENTS_SAVE")}
        </Button>
      </BtnWrapper>
    </Fragment>
  );

  const sheetContent =
    selectedContent === "radioContent" ? radioContent : filterContent;
  return (
    <MobileStatementsWrapper>
      <OffshoreSelect userInfo={userInfo} />
      <FormHeader>
        <AccountWrapper>
          <Account>
            {`${translate("STATEMENTS_ACCOUNT")}: ${accountNumber}`}
            {accountsTotal > 1 && (
              <ClicableItem>
                <Icon
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
                  onClick={() => changeContent("radioContent")}
                />
              </ClicableItem>
            )}
          </Account>
        </AccountWrapper>

        <BalanceWrapper>
          <AccountBalanceWrapper>
            <AccountBalance>
              {defaultCurrency}
              &nbsp;
              {maskValues(formatNumber(availableBalance, { digits: 2 }))}
            </AccountBalance>
            <IconView>
              <ClicableItem>
                {hideValues ? (
                  <Icon
                    data-test="iconView"
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
              </ClicableItem>
            </IconView>
          </AccountBalanceWrapper>
        </BalanceWrapper>
      </FormHeader>
      <FormContent>
        <CalendarButtonWrapper>
          <Button
            type={filterButtonFill ? "primary" : "outline"}
            withIcon={{ name: "CalendarEmpty", position: "left" }}
            spacing={{
              top: "none",
              bottom: "none",
              right: "none",
              left: "none"
            }}
            dataTest="filterButton"
            onClick={() => changeContent("filterContent")}
          >
            {filterButtonContent || translate("STATEMENTS_PERIOD")}
          </Button>

          <Hide below="md">
            {
              <Button
                type="primary"
                spacing={{
                  top: "none",
                  bottom: "none",
                  right: "none",
                  left: "none"
                }}
                withIcon={{ name: "Download", position: "left" }}
                dataTest="downloadPdfButton"
                onClick={printScreen}
                disabled={isEmptyEvents}
              >
                {translate("PDF")}
              </Button>
            }
          </Hide>
        </CalendarButtonWrapper>

        {!isEmptyFutureEvents && (
          <FutureTransactionsWrapper>
            <WrapperPendingOperations>
              <PendingOperations
                dataTest="futureTransactions"
                mode={"mobile"}
                boxTitle={`${translate(
                  "YOU_HAVE"
                )} ${getPendingOperationsNumber(
                  futureEventsHistory
                )} ${translate("FUTURE_TRANSACTIONS")}`}
                bottomSheetTitle={`${translate("FUTURE_TRANSACTIONS_TITLE")}`}
                withoutIcon={true}
              >
                <FormContent>
                  {futureEventsHistory &&
                    futureEventsHistory.map((item, i) => (
                      <StatementsCards
                        item={item}
                        key={i}
                        maskValues={val => val}
                        formatTitle={formatTitle}
                        defaultCurrency={defaultCurrency}
                        isFuture={true}
                        loading={loading}
                        getBank={getBank}
                        account={originAccount}
                      />
                    ))}
                </FormContent>
              </PendingOperations>
            </WrapperPendingOperations>
          </FutureTransactionsWrapper>
        )}

        {isEmptyEvents && !filterButtonFill && (
          <DefaultContent
            data-test="emptyStatementsMobile"
            Icon={() => (
              <Icon
                type="NoTransactions"
                color={black30}
                height={rem(66)}
                width={rem(66)}
              />
            )}
            primaryText={translate("STATEMENTS_NO_TRANSACTIONS_MSG")}
            secondaryTexts={[
              translate("STATEMENTS_NO_TRANSACTIONS_DISCLAIMER_MSG_SIXTY"),
              translate("STATEMENTS_NO_TRANSACTIONS_DISCLAIMER_MSG_2")
            ]}
          />
        )}
        {isEmptyEvents && filterButtonFill && (
          <DefaultContent
            data-test="emptyResultsMobile"
            Icon={() => (
              <Icon
                type="NoResults"
                color={black30}
                height={rem(66)}
                width={rem(66)}
              />
            )}
            primaryText={translate("STATEMENTS_NO_RESULTS")}
            secondaryTexts={[translate("STATEMENTS_NO_RESULTS_PERIOD")]}
          />
        )}

        {!isEmptyEvents &&
          balanceAndEventsHistory &&
          balanceAndEventsHistory.map((item, i) => (
            <StatementsCards
              item={item}
              key={i}
              maskValues={val => maskValues(val)}
              formatTitle={formatTitle}
              defaultCurrency={defaultCurrency}
              loading={loading}
              getBank={getBank}
              account={originAccount}
            />
          ))}
      </FormContent>

      {!printContext && (
        <AnimatedBottonSheet
          isOpen={isBottomSheet}
          head={{
            title:
              selectedContent === "radioContent"
                ? translate("SELECT_ACCOUNT")
                : translate("STATEMENTS_PERIOD")
          }}
          velocity={0.3}
          onClickInBack={() => closeCleaning()}
        >
          {selectedContent && sheetContent}
        </AnimatedBottonSheet>
      )}
    </MobileStatementsWrapper>
  );
}

export default Mobile;
