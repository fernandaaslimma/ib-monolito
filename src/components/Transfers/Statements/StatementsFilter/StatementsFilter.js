import "react-day-picker/lib/style.css";
import "../../../common/Table/Filter/styles.css";

import React, { Fragment, Component } from "react";
import { func } from "prop-types";

import { Filter } from "react-bocombbm-components";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { formatDateForDayPicker } from "../../../../utils/formatDate";

import { translate, getLanguage } from "../../../../utils/i18n";
import localeUtils from "react-day-picker/moment";
import { Wrapper, FilterLabel, StatementDayPickerWrapper } from "./styles";

import { darkGreen } from "../../../../styles/settings";
import Icon from "../../../common/Icon";
import { DateUtils } from "react-day-picker";

class StatementsFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      range: {
        from: "",
        to: ""
      }
    };
    this.onChangeDateRange = this.onChangeDateRange.bind(this);
  }

  onChangeDateRange(day) {
    const { range } = this.state;
    const newRange = DateUtils.addDayToRange(day, range);

    this.setState({
      range: newRange
    });
  }

  componentDidMount() {
    const { filter } = this.props;
    if (filter) {
      this.setState({
        range: filter.range
      });
    }
  }

  render() {
    const { onFilter } = this.props;
    const { range } = this.state;
    const modifiers = { start: range.from, end: range.to };

    const componentLabels = {
      filterButton: translate("STATEMENTS_FILTER"),
      filterLabel: translate("FILTER_BY")
    };

    return (
      <Wrapper data-test="StatementsFilter">
        <Filter
          onFilter={() => onFilter(range)}
          componentLabels={componentLabels}
        >
          {() => (
            <Fragment>
              <FilterLabel>{translate("PERIOD")}</FilterLabel>
              <StatementDayPickerWrapper isRange data-test="SelectDatePeriod">
                <DayPickerInput
                  placeholder={translate("SELECT_A_DATE_PERIOD")}
                  formatDate={formatDateForDayPicker}
                  onDayChange={this.onChangeDateRange}
                  dayPickerProps={{
                    locale: getLanguage(),
                    localeUtils,
                    numberOfMonths: 2,
                    selectedDays: [range.from, range],
                    modifiers,
                    className: "DatePickerRange",
                    disabledDays: { after: new Date() }
                  }}
                  hideOnDayClick={false}
                  inputProps={{
                    readOnly: true
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
              </StatementDayPickerWrapper>
            </Fragment>
          )}
        </Filter>
      </Wrapper>
    );
  }
}

StatementsFilter.propTypes = {
  onFilter: func.isRequired
};

export default StatementsFilter;
