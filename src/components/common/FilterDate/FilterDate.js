import React, { Fragment, useEffect, useState } from "react";
import {
  getDateFieldPlaceholderByLocale,
  getLanguage,
  translate
} from "../../../utils/i18n";
import AnimatedBottomSheet from "../AnimatedBottomSheet";
import {
  ErrorMessage,
  FilterButtonsWrapper,
  FilterLabels,
  FilterWrapper,
  InputsWrapper,
  RadioButtonsWrapper
} from "./styles";
import RadioButtonRounded from "../RadioButtonRounded";
import { Button, Input } from "react-bocombbm-components";
import moment from "moment";
import { rem } from "../../../styles/tools";

const FilterDate = ({
  showFilter,
  closeFilter = () => { },
  onFilter = () => { },
  dataTest = "container"
}) => {
  const fixedFilterPeriods = ["7", "15", "30", "60"];

  const isValidDate = date => {
    const isDate = moment(date, getDateFieldPlaceholderByLocale(), true);
    return isDate.isValid();
  };

  const [pickedPeriod, setPickedPeriod] = useState();
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const setFixedPeriod = value => {
    setPickedPeriod(value);
    setDateFrom("");
    setDateTo("");
    setErrorMessage(undefined);
  };

  const resetRadioFilter = () => {
    setPickedPeriod(undefined);
    setErrorMessage(undefined);
  };

  const formatRadioDate = () => {
    const today = new Date();
    const targetDate = moment(today).subtract(
      pickedPeriod.split(" ")[0],
      "days"
    );
    return {
      dateFrom: moment(targetDate, getDateFieldPlaceholderByLocale()).format("YYYY-MM-DD"),
      dateTo: moment(today, getDateFieldPlaceholderByLocale()).format("YYYY-MM-DD")
    };
  };

  useEffect(() => {
    setPickedPeriod("");
  }, [dateFrom, dateTo]);

  return (
    <AnimatedBottomSheet
      isOpen={showFilter}
      head={{ title: translate("PERIOD") }}
      velocity={0.3}
      onClickInBack={() => closeFilter()}
      dataTest={dataTest}
    >
      <Fragment>
        <FilterWrapper>
          <FilterLabels data-test="selectLabel">
            {translate("OVERVIEW_TRANSACTION_SELECT_PERIOD")}
          </FilterLabels>
          <RadioButtonsWrapper>
            {fixedFilterPeriods.map((period, index) => (
              <RadioButtonRounded
                radioName="radioButton"
                key={index}
                itemKey={index}
                selectedValue={pickedPeriod}
                buttonValue={`${period} ${translate(
                  "STATEMENTS_LOWERCASE_DAYS"
                )}`}
                setValue={value => {
                  setFixedPeriod(value);
                }}
                style={{ marginRight: rem(12) }}
              />
            ))}
          </RadioButtonsWrapper>
          <FilterLabels data-test="specifcLabel">
            {translate("OVERVIEW_TRANSACTION_SPECIFC_PERIOD")}
          </FilterLabels>
          <InputsWrapper>
            <Input
              onChange={e => {
                setDateFrom(e.target.value);
              }}
              type="text"
              inputMode="numeric"
              value={dateFrom}
              label={translate("OVERVIEW_TRANSACTION_FROM")}
              dataTest="filterDateFrom"
              maskType="datetime"
              valid={isValidDate(dateFrom)}
              locale={getLanguage()}
              onFocus={() => resetRadioFilter()}
              required={!pickedPeriod}
            />
            <Input
              onChange={e => {
                setDateTo(e.target.value);
              }}
              type="text"
              inputMode="numeric"
              value={dateTo}
              label={translate("OVERVIEW_TRANSACTION_TO")}
              dataTest="filterDateTo"
              maskType="datetime"
              valid={isValidDate(dateTo)}
              locale={getLanguage()}
              onFocus={() => resetRadioFilter()}
              required={!pickedPeriod}
            />
          </InputsWrapper>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <FilterButtonsWrapper>
            <Fragment>
              <Button
                type="primary"
                spacing={{
                  top: "none",
                  bottom: "none",
                  right: "none",
                  left: "none"
                }}
                dataTest="filterButton"
                onClick={() => {
                  onFilter(
                    pickedPeriod
                      ? formatRadioDate()
                      : {
                        dateFrom: moment(dateFrom, getDateFieldPlaceholderByLocale()).format(
                          "YYYY-MM-DD"
                        ),
                        dateTo: moment(dateTo, getDateFieldPlaceholderByLocale()).format(
                          "YYYY-MM-DD"
                        )
                      }
                  );
                }}
                disabled={
                  !pickedPeriod &&
                  (!isValidDate(dateFrom) || !isValidDate(dateTo))
                }
              >
                {translate("OVERVIEW_TRANSACTION_FILTER")}
              </Button>
            </Fragment>
          </FilterButtonsWrapper>
        </FilterWrapper>
      </Fragment>
    </AnimatedBottomSheet>
  );
};

export default FilterDate;
