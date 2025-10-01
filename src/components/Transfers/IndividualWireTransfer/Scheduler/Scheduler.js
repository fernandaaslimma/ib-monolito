import React, { Fragment, useContext, useState } from "react";
import moment from "moment";
import { InstanceContext } from "../IndividualWireTransfer";
import {
  InputWrapper,
  AlertMessageWrapper,
  InputErrorMessage,
  FavoredInfo
} from "./styles";
export const rem = value => `${value / 16}rem`;
import { AccTitle, FormWrapper } from "../styles";
import { AlertMessage, Input } from "react-bocombbm-components";
import {
  translate,
  getLanguage,
  getDateFieldPlaceholderByLocale,
  isPtBR
} from "../../../../utils/i18n";
import { isToday, checkDate } from "../../../../utils/validations/EFT";
import { modelBrazilianTime } from "../../../../utils/formatDate";
import {
  PT_BR_24H_FORMAT,
  EN_US_AM_PM_FORMAT,
  WIRETRANSFER_SERVICE,
  BRASILIA_UTC_OFFSET
} from "../../../../utils/constants";
import { blue, gray100, white } from "../../../../styles/settings";
import Buttons from "../../../common/Buttons";

function Scheduler({ title, hideAlert, hideSelection }) {
  const {
    props: {
      nextAvailableDate,
      availableDateRanges,
      transferData,
      loading,
      handleUserInputTranferDataDate,
      getAvailableDateRanges,
      serverTime
    },
    state: { isScheduled, inputedDate, validAsScheduled, commonValidToMoveOn },
    setStateValue,
    changeTransferDate,
    changeCommonValidDate,
    checkAvailabilitySchedule
  } = useContext(InstanceContext);

  const [canDoToday, setCanDoToday] = useState(true);
  const [untouched, setUntouched] = useState(true);
  const [focused, setFocused] = useState(false);
  const [availableRange, setAvailableRange] = useState({
    maxEndTime: null,
    minStartTime: null
  });

  const transferTimeSituations = {
    BEFORE_TIME: 0,
    ON_TIME: 1,
    AFTER_TIME: 2
  };
  const [transferTimeStatus, setTransferTimeStatus] = useState(
    transferTimeSituations.ON_TIME
  );

  React.useEffect(() => {
    const today = moment(serverTime)
      .utcOffset(BRASILIA_UTC_OFFSET)
      .format(getDateFieldPlaceholderByLocale());

    if (today !== nextAvailableDate) setCanDoToday(false);
    if (transferData.date !== nextAvailableDate)
      setStateValue("isScheduled", true);

    const now = Date.parse(
      moment(serverTime)
        .utcOffset(BRASILIA_UTC_OFFSET)
        .format()
    );

    const maxEndTime = Math.max(...availableDateRanges.map(x => x.endTime));
    const minStartTime = Math.min(...availableDateRanges.map(x => x.startTime));

    setAvailableRange({ maxEndTime, minStartTime });

    const minute = 60000;

    if (now <= maxEndTime - minute && now >= minStartTime - minute)
      setTransferTimeStatus(transferTimeSituations.ON_TIME);

    if (now <= minStartTime - minute)
      setTransferTimeStatus(transferTimeSituations.BEFORE_TIME);

    if (now >= maxEndTime - minute)
      setTransferTimeStatus(transferTimeSituations.AFTER_TIME);

    if (
      isToday(transferData.date, serverTime) &&
      !isScheduled &&
      transferTimeStatus.AFTER_TIME
    ) {
      setCanDoToday(false);
      setStateValue("isScheduled", true);
    }

    availableDateRanges.length
      ? setStateValue("validAsScheduled", true)
      : setStateValue("validAsScheduled", false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transferData.date, availableDateRanges]);

  const checkDateInput = () =>
    inputedDate.length !== 0 && checkDate(inputedDate, true, serverTime);

  const enableScheduling = () => {
    setStateValue("isScheduled", true);
    changeTransferDate({ target: { value: "" } });
  };

  const enableToday = async () => {
    setStateValue("isScheduled", false);

    const today = moment(serverTime)
      .utcOffset(BRASILIA_UTC_OFFSET)
      .format(getDateFieldPlaceholderByLocale());

    handleUserInputTranferDataDate(today);

    await getAvailableDateRanges(WIRETRANSFER_SERVICE);

    changeCommonValidDate(true);
  };

  const getInvalidDateMessage = () => {
    switch (true) {
      case checkDateInput() && !validAsScheduled:
        return (
          <InputErrorMessage data-test="InvalidDay">
            {translate("NOT_BUSINESS_DAY")}
          </InputErrorMessage>
        );
      case checkDateInput() && isToday(inputedDate, serverTime):
        return (
          <InputErrorMessage>
            {translate("SELECT_TODAY_FOR_CURRENT_DATE")}
          </InputErrorMessage>
        );
      case !checkDateInput():
        return (
          <InputErrorMessage data-test="ProvideValidDate">
            {translate("PROVIDE_VALID_DATE")}
          </InputErrorMessage>
        );
    }
  };

  const getAlertMessage = () => {
    const rangeEnd = isPtBR()
      ? modelBrazilianTime(
          moment(availableRange.maxEndTime)
            .utcOffset(BRASILIA_UTC_OFFSET)
            .format(PT_BR_24H_FORMAT)
        )
      : moment(availableRange.maxEndTime)
          .utcOffset(BRASILIA_UTC_OFFSET)
          .format(EN_US_AM_PM_FORMAT);
    const rangeStart = isPtBR()
      ? modelBrazilianTime(
          moment(availableRange.minStartTime)
            .utcOffset(BRASILIA_UTC_OFFSET)
            .format(PT_BR_24H_FORMAT)
        )
      : moment(availableRange.minStartTime)
          .utcOffset(BRASILIA_UTC_OFFSET)
          .format(EN_US_AM_PM_FORMAT);

    const buildMessage = currentMessage => (
      <AlertMessageWrapper noMargin={hideSelection}>
        <AlertMessage
          dataTest="TransactionPeriod"
          icon="Attention"
          type="neutral"
          spacing={{
            top: "xs",
            bottom: "l",
            right: "xxs",
            left: "xxs"
          }}
        >
          {currentMessage}
        </AlertMessage>
      </AlertMessageWrapper>
    );

    let message = null;

    if (canDoToday && transferTimeStatus === transferTimeSituations.BEFORE_TIME)
      message = `${translate("INVALID_RANGE_1")} ${rangeStart} ${translate(
        "INVALID_RANGE_2"
      )} ${rangeEnd}${translate("INVALID_RANGE_3")} ${rangeStart}`;
    else
      message = `${translate(
        "VALIDATION_HOUR_SCHEDULE_1"
      )} ${rangeStart} ${translate("VALIDATION_HOUR_SCHEDULE_2")} ${rangeEnd}`;

    return buildMessage(message);
  };

  const dateInputChangeCallBack = event => {
    changeTransferDate(event);
    const value = event.target.value;

    if (event.target.value.indexOf("_") === -1) {
      const today = moment(serverTime)
        .utcOffset(BRASILIA_UTC_OFFSET)
        .startOf("day");
      const inputDate = moment(value, getDateFieldPlaceholderByLocale())
        .utcOffset(-3, true)
        .startOf("day");

      setStateValue("validAsScheduled", true);
      setFocused(false);
      inputDate.diff(today, "days") > 0 && checkAvailabilitySchedule();
    }
  };

  const checkIfIsValidDateAndEnableForward = () => {
    commonValidToMoveOn.date && setStateValue("disableForward", false);
  };

  const inputIsValid =
    checkDateInput() && !isToday(inputedDate, serverTime) && validAsScheduled;

  return (
    <Fragment>
      {title && <AccTitle>{title}</AccTitle>}
      <FormWrapper>
        {!hideSelection && (
          <FavoredInfo>
            <Buttons
              paddingWrapper={{ b: 6 }}
              buttons={[
                {
                  dataTest: "ButtonTransferToday",
                  children: translate("TODAY"),
                  onClick: () => enableToday(),
                  background: isScheduled ? `${white}` : `${blue}`,
                  color: isScheduled ? `${gray100}` : `${white}`,
                  border: `solid ${rem(1)} ${isScheduled ? gray100 : blue}`,
                  noHoverBackground: true,
                  fontSize: "14",
                  disabled: !canDoToday,
                  borderRadius: { rightTop: "0", rightBottom: "0" },
                  padding: { r: "20", l: "20" }
                },
                {
                  dataTest: "ButtonScheduledTransfer",
                  children: translate("SCHEDULE"),
                  onClick: () => enableScheduling(),
                  background: isScheduled ? `${blue}` : `${white}`,
                  color: isScheduled ? `${white}` : `${gray100}`,
                  border: `solid ${rem(1)} ${isScheduled ? blue : gray100}`,
                  noHoverBackground: true,
                  fontSize: "14",
                  borderRadius: { leftTop: "0", leftBottom: "0" },
                  padding: { r: "20", l: "20" }
                }
              ]}
            />
          </FavoredInfo>
        )}

        {isScheduled && !hideSelection && (
          <Fragment>
            <InputWrapper margin={{ t: 24, b: 24, l: 7, r: 0 }}>
              <Input
                onChange={e => dateInputChangeCallBack(e)}
                type="text"
                name="date"
                value={inputedDate}
                label={translate("DATE")}
                dataTest="transferDate"
                maskType="datetime"
                valid={inputIsValid}
                required
                locale={getLanguage()}
                onBlur={checkIfIsValidDateAndEnableForward}
                onFocus={() => {
                  setFocused(true);
                  setStateValue("disableForward", true);
                  setUntouched(false);
                }}
              />
            </InputWrapper>
            {!untouched && !focused && !loading && getInvalidDateMessage()}
          </Fragment>
        )}
        {!hideAlert && getAlertMessage()}
      </FormWrapper>
    </Fragment>
  );
}

export default Scheduler;
