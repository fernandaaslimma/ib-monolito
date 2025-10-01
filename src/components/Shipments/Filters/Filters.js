import "react-day-picker/lib/style.css";
import "../../common/Table/Filter/styles.css";

import React from "react";
import PropTypes from "prop-types";

import LocalIcon from "../../common/Icon";
import Card from "../../common/AbstractCard";
import {
  Wrapper,
  WrapperForm,
  WrapperInput,
  WrapperInputs,
  WrapperIcon,
  Icon,
  Title,
  WrapperElements,
  WrapperButton,
  StatementDayPickerWrapper,
  ViewText,
  WrapperIconDropdown
  // FilterLabel
} from "./styled";
import Button from "../../common/AbstractButton";
import Dropdown from "../../common/AbstractDropdown";

import { translate, getLanguage } from "../../../utils/i18n";
import { formatDateForDayPicker } from "../../../utils/formatDate";
import { darkGreen } from "../../../styles/settings";

import DayPickerInput from "react-day-picker/DayPickerInput";
import localeUtils from "react-day-picker/moment";

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.checkAvailableButton = this.checkAvailableButton.bind(this);
    this.renderDropdownOptions = this.renderDropdownOptions.bind(this);
    this.renderDropdownOptionsStatus = this.renderDropdownOptionsStatus.bind(
      this
    );
    this.renderDropdownOptionsProduct = this.renderDropdownOptionsProduct.bind(
      this
    );
    this.clearFilter = this.clearFilter.bind(this);
  }

  renderDropdownOptions(options) {
    return options.map(option => (
      <Dropdown.Option key={option.id} value={option.name}>
        {option.name}
      </Dropdown.Option>
    ));
  }

  renderDropdownOptionsStatus(options) {
    return options.map(option => (
      <Dropdown.Option key={option.id} value={option.ptName}>
        {option.ptName}
      </Dropdown.Option>
    ));
  }

  renderDropdownOptionsProduct(options) {
    return options.map(option => (
      <Dropdown.Option key={option.id} value={option.description}>
        {option.description}
      </Dropdown.Option>
    ));
  }

  checkAvailableButton(clearFilter = false) {
    const { range, pageSize } = this.props;
    if (pageSize === "" && (range.to === "" || range.from === "")) {
      return clearFilter ? false : true;
    } else {
      return clearFilter ? true : false;
    }
  }

  clearFilter() {
    this.props.onClearDateRange();
    this.props.handleClearPageItems("");
  }

  render() {
    const {
      filterOperations,
      disabled,
      handleChangePageItems,
      dropdowOptions,
      pageSize,
      range,
      onChangeDateRange
    } = this.props;
    const modifiers = { start: range.from, end: range.to };
    return (
      <Wrapper>
        <Card marginTop="10px">
          <WrapperForm>
            <WrapperInputs>
              <WrapperIcon>
                <Icon>
                  <LocalIcon
                    type="Filter"
                    color="#3175BD"
                    width="26px"
                    height="26px"
                  />
                </Icon>
                <Title>{translate("REMITTANCES_DOWNLOAD_FILTER_BY")}</Title>
              </WrapperIcon>
              <WrapperElements>
                {!disabled ? (
                  <StatementDayPickerWrapper
                    isRange
                    data-test="SelectDatePeriod"
                  >
                    <DayPickerInput
                      placeholder={translate(
                        "REMITTANCES_DOWNLOAD_DATE_FILTER_PERIOD"
                      )}
                      formatDate={formatDateForDayPicker}
                      onDayChange={onChangeDateRange}
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
                          : translate("REMITTANCES_DOWNLOAD_DATE_FILTER_PERIOD")
                      }
                    />
                    <WrapperIconDropdown /*onClick={() => {  }}*/>
                      <LocalIcon type="Arrow" color={darkGreen} />
                    </WrapperIconDropdown>
                  </StatementDayPickerWrapper>
                ) : (
                  <WrapperInput width="250px" padding="0 25px 0 0">
                    <Dropdown
                      disabled={disabled}
                      dataTest="btn-filter-range"
                      name="period"
                      label="Período"
                      height="48px"
                      filterStyle
                    >
                      <Dropdown.Option value="" />
                    </Dropdown>
                  </WrapperInput>
                )}
                <WrapperInput width="214px">
                  <Dropdown
                    disabled={disabled}
                    dataTest="btn-filter-pageSize"
                    onChange={handleChangePageItems}
                    name="pageSize"
                    label={translate("REMITTANCES_DOWNLOAD_PAGE_ITEMS")}
                    value={pageSize}
                    height="48px"
                    filterStyle
                  >
                    <Dropdown.Option value="" />
                    {this.renderDropdownOptions(dropdowOptions)}
                  </Dropdown>
                </WrapperInput>
              </WrapperElements>
              <WrapperButton>
                {this.checkAvailableButton(true) && (
                  <ViewText
                    data-test={`filter-clean-return`}
                    onClick={() => {
                      this.clearFilter();
                    }}
                  >
                    {translate("REMITTANCES_DOWNLOAD_CLEAR_FILTER")}
                  </ViewText>
                )}
                <Button
                  disabled={this.checkAvailableButton() || disabled}
                  width="125"
                  height="48"
                  onClick={filterOperations}
                  dataTest="btn-filter-operation-list"
                  isCallToAction
                >
                  {translate("REMITTANCES_DOWNLOAD_APPLICATION_BUTTON")}
                </Button>
              </WrapperButton>
            </WrapperInputs>
          </WrapperForm>
        </Card>
      </Wrapper>
    );
  }
}

Filters.propTypes = {
  filterOperations: PropTypes.func,
  pageSize: PropTypes.number,
  disabled: PropTypes.bool,
  setBasicInfo: PropTypes.func,
  dropdowOptions: PropTypes.object,
  businessGroupState: PropTypes.object,
  handleChangePageItems: PropTypes.func,
  range: PropTypes.object,
  onChangeDateRange: PropTypes.func
};

export default Filters;
