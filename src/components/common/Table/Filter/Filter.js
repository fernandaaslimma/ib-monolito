import "react-day-picker/lib/style.css";
import "./styles.css";

import React, { Component } from "react";
import { func, string, oneOfType, instanceOf, shape } from "prop-types";
import DayPickerInput from "react-day-picker/DayPickerInput";
import localeUtils from "react-day-picker/moment";
import moment from "moment";

import {
  formatDateForDayPicker,
  formatToQuery,
  formatDateToLocale
} from "../../../../utils/formatDate";
import { translate, getLanguage } from "../../../../utils/i18n";
import Icon from "../../Icon";
import Button from "../../Button";
import history from "../../../../services/history";

import {
  FilterWrapper,
  FilterIcon,
  FilterLabel,
  FilterGroup,
  FilterShowHide,
  FilterContentMobileWrapper,
  FilterDescription,
  RadioLabel,
  DayPickerWrapper,
  RadioButtion,
  FilterGroupCombos
} from "./styles";
import { darkGreen } from "../../../../styles/settings";

const OPTION1 = "option1";
const OPTION2 = "option2";

let labels;

const defaultProps = {
  filter: {
    from: "",
    range: {
      from: "",
      to: ""
    },
    selectedOption: OPTION1,
    currentRoute: ""
  }
};

class Filter extends Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleShowHide = this.handleShowHide.bind(this);

    this.state = {
      isShown: false
    };
  }

  componentWillMount() {
    const lang = getLanguage();
    const locale = lang.split("-")[0];
    moment.locale(locale);

    const currentRoute = history.location.pathname;
    this.props.setProps(defaultProps.filter, currentRoute);
  }

  handleShowHide() {
    this.setState({
      isShown: !this.state.isShown
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.handleShowHide();

    const { search, filter } = this.props;
    const { from, range } = filter;

    if (range.to) {
      const formattedfrom = range.from ? formatToQuery(range.from) : "";
      const formattedto = range.to ? formatToQuery(range.to) : "";
      search(formattedfrom, formattedto);
    } else {
      const formattedfrom = from ? formatToQuery(from) : "";
      search(formattedfrom);
    }
  }

  renderMobileFilterDescription(from, range, selectedOption) {
    switch (true) {
      case from != "":
        return `${labels[selectedOption]} ${formatDateToLocale(from)}`;
      case range.from != "":
        return `${labels[selectedOption]} ${formatDateToLocale(
          range.from
        )} - ${formatDateToLocale(range.to)}`;
      default:
        return translate("NO_FILTER");
    }
  }

  render() {
    labels = {
      option1: translate("SINCE"),
      option2: translate("PER_PERIOD")
    };

    const {
      onChangeOption,
      filter,
      onChangeDateFrom,
      onChangeDateRange
    } = this.props;

    const { selectedOption, from, range } = filter;
    const { isShown } = this.state;
    const modifiers = { start: range.from, end: range.to };

    return (
      <FilterWrapper onSubmit={this.handleFormSubmit} isShown={isShown}>
        <FilterGroup onClick={this.handleShowHide} data-test="FilterInfo">
          <FilterIcon hasFilter={from != "" || range.from != ""}>
            <Icon type="Filter" />
          </FilterIcon>
          <FilterLabel>
            {translate("FILTER_BY")}:
            <FilterDescription>
              {this.renderMobileFilterDescription(from, range, selectedOption)}
            </FilterDescription>
          </FilterLabel>
          <FilterShowHide isShown={isShown}>
            <Icon type="Arrow" />
          </FilterShowHide>
        </FilterGroup>
        {/* if in mobile context wrapper init */}
        <FilterContentMobileWrapper isShown={isShown} data-test="FilterForm">
          {/* if in mobile context wrapper end */}
          <FilterGroup>
            <FilterGroupCombos onClick={() => onChangeOption(OPTION1)}>
              <RadioButtion
                data-test="SinceRadioBtn"
                type="radio"
                value={OPTION1}
                checked={selectedOption === OPTION1}
                onChange={() => onChangeOption(OPTION1)}
              />
              <RadioLabel>{labels[OPTION1]}:</RadioLabel>
            </FilterGroupCombos>
            <DayPickerWrapper
              disabled={selectedOption !== OPTION1}
              data-test="SelectDate"
            >
              <DayPickerInput
                placeholder={translate("SELECT_A_DATE")}
                formatDate={formatDateForDayPicker}
                onDayChange={onChangeDateFrom}
                dayPickerProps={{
                  locale: getLanguage(),
                  localeUtils,
                  selectedDays: from
                }}
                hideOnDayClick={false}
                inputProps={{
                  readOnly: true,
                  disabled: selectedOption !== OPTION1
                }}
                value={from}
              />
              <Icon type="Arrow" color={darkGreen} />
            </DayPickerWrapper>
          </FilterGroup>
          <FilterGroup>
            <FilterGroupCombos onClick={() => onChangeOption(OPTION2)}>
              <RadioButtion
                data-test="PerPeriodRadioBtn"
                type="radio"
                value={OPTION2}
                checked={selectedOption === OPTION2}
                onChange={() => onChangeOption(OPTION2)}
              />
              <RadioLabel>{labels[OPTION2]}:</RadioLabel>
            </FilterGroupCombos>
            <DayPickerWrapper
              isRange
              disabled={selectedOption !== OPTION2}
              data-test="SelectDatePeriod"
            >
              <DayPickerInput
                placeholder={translate("SELECT_A_DATE_PERIOD")}
                formatDate={formatDateForDayPicker}
                onDayChange={onChangeDateRange}
                dayPickerProps={{
                  locale: getLanguage(),
                  localeUtils,
                  numberOfMonths: 2,
                  selectedDays: [range.from, range],
                  modifiers,
                  className: "DatePickerRange"
                }}
                hideOnDayClick={false}
                inputProps={{
                  readOnly: true,
                  disabled: selectedOption !== OPTION2
                }}
                value={
                  range.from && range.to
                    ? `${formatDateForDayPicker(range.from)} ${translate(
                        "TO"
                      )} ${formatDateForDayPicker(range.to)}`
                    : translate("SELECT_A_DATE_PERIOD")
                }
              />
              <Icon type="Arrow" color={darkGreen} />
            </DayPickerWrapper>
          </FilterGroup>
          <Button
            onClick={this.handleFormSubmit}
            isCallToAction
            small
            width="110"
            data-test="ApplyFilter"
          >
            {translate("APPLY")}
          </Button>
          {/* if in mobile context wrapper init */}
        </FilterContentMobileWrapper>
        {/* if in mobile context wrapper end */}
      </FilterWrapper>
    );
  }
}

Filter.defaultProps = defaultProps;

Filter.propTypes = {
  filter: shape({
    from: oneOfType([string, instanceOf(Date)]),
    range: shape({
      from: oneOfType([string, instanceOf(Date)]),
      to: oneOfType([string, instanceOf(Date)])
    }),
    selectedOption: string,
    currentRoute: string
  }),
  search: func.isRequired,
  onChangeOption: func.isRequired,
  onChangeDateFrom: func.isRequired,
  onChangeDateRange: func.isRequired,
  setProps: func.isRequired
};

export default Filter;
