import React, { Component } from "react";
import moment from "moment";

import {
  translate,
  getDateFieldParserLocale,
  getDayMonthFieldFormatterByLocale,
  isPtBR
} from "../../../utils/i18n";
import { isToday } from "../../../utils/validations/EFT";

import { EFTModalWrapper, Description, Title } from "./styles";

import { IconContainer } from "../Modal/styles";
import { Button, Icon } from "react-bocombbm-components";
import {
  EN_US_AM_PM_FORMAT,
  PT_BR_24H_FORMAT,
  BRASILIA_UTC_OFFSET
} from "../../../utils/constants";

class EFTUnavailable extends Component {
  constructor(props) {
    super(props);

    this.handleSuggestAnotherDate = this.handleSuggestAnotherDate.bind(this);
    this.handleSuggestDate = this.handleSuggestDate.bind(this);
    this.focusInput = this.focusInput.bind(this);
    this.modelBrazilianTime = this.modelBrazilianTime.bind(this);
  }

  focusInput() {
    const { dateInput } = this.props;
    if (dateInput) {
      dateInput.focus();
    }
  }

  handleSuggestDate() {
    const {
      handleUserInputTranferDataDate,
      nextAvailableDate,
      closeModal
    } = this.props;
    handleUserInputTranferDataDate(nextAvailableDate);

    this.focusInput();
    closeModal();
  }

  handleSuggestAnotherDate() {
    const { closeModal } = this.props;

    this.focusInput();
    closeModal();
  }

  modelBrazilianTime(formattedHour) {
    if (formattedHour.includes(":00")) {
      formattedHour = formattedHour.slice(0, -3).concat("h");
    } else {
      formattedHour = formattedHour.replace(/:/g, "h");
    }

    return formattedHour;
  }

  render() {
    const {
      transferData,
      nextAvailableDate,
      availableDateRanges,
      serverTime
    } = this.props;
    const viewDate = moment(
      nextAvailableDate,
      getDateFieldParserLocale()
    ).format(getDayMonthFieldFormatterByLocale());

    const maxEndTime = Math.max(...availableDateRanges.map(x => x.endTime));
    const minStartTime = Math.min(...availableDateRanges.map(x => x.startTime));

    let hourEnd = isPtBR()
      ? this.modelBrazilianTime(
          moment(maxEndTime)
            .utcOffset(BRASILIA_UTC_OFFSET)
            .format(PT_BR_24H_FORMAT)
        )
      : moment(maxEndTime)
          .utcOffset(BRASILIA_UTC_OFFSET)
          .format(EN_US_AM_PM_FORMAT);
    let hourStart = isPtBR()
      ? this.modelBrazilianTime(
          moment(minStartTime)
            .utcOffset(BRASILIA_UTC_OFFSET)
            .format(PT_BR_24H_FORMAT)
        )
      : moment(minStartTime).format(EN_US_AM_PM_FORMAT);

    let hourRange = `<b style="font-family: Lato Bold">${hourStart} ${translate(
      "AND"
    )} ${hourEnd}.</b>`;
    let message = "";
    let title = "";
    let icon = () => null;

    if (isToday(transferData.date, serverTime)) {
      message = `${translate(
        "TRANSFER_UNAVAILABLE_TIME_EXPIRATION_1"
      )}${hourRange}${translate("TRANSFER_UNAVAILABLE_TIME_EXPIRATION_2")}`;
      title = translate("TRANSFER_UNAVAILABLE_TIME_TITLE");
      icon = <Icon type="RedClock" width="40" height="40" />;
    } else {
      message = translate("TRANSFER_UNAVAILABLE_DESCRIPTION_SCHEDULED");
      title = translate("TRANSFER_UNAVAILABLE");
      icon = <Icon type="Attention" width="40" height="40" />;
    }

    return (
      <EFTModalWrapper data-test="eftModalWrapper">
        <IconContainer>{icon}</IconContainer>
        <Title>{title}</Title>
        <Description dangerouslySetInnerHTML={{ __html: message }} />
        <Button
          onClick={this.handleSuggestAnotherDate}
          dataTest="ScheduleSuggestAnotherDate"
          type="outline"
        >
          {translate("SCHEDULE_SUGGEST_ANOTHER_DATE")}
        </Button>
        <Button onClick={this.handleSuggestDate} dataTest="ScheduleSuggest">
          {`${translate("SCHEDULE_SUGGEST_DATE")} ${viewDate}`}
        </Button>
      </EFTModalWrapper>
    );
  }
}

EFTUnavailable.defaultProps = {};

EFTUnavailable.propTypes = {};

export default EFTUnavailable;
