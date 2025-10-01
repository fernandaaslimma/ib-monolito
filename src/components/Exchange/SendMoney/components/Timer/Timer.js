import React, { useState, useEffect, useContext, Fragment } from "react";
import { TimerContainer, TimerText, TimerTextContainer } from "./styles";
import Icon from "../../../../common/Icon";
import { translate } from "../../../../../utils/i18n";
import { InstanceContext } from "../../sendMoneyContext";

const Timer = React.memo(({ dataTest }) => {
  const { timerRunning, remainingTimeRef } = useContext(InstanceContext);

  const [remainingTime, setRemainingTime] = useState(
    __EXCHANGE_TIMER_DURATION__
  );

  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;

  useEffect(() => {
    const timer = setInterval(() => {
      if (timerRunning && remainingTimeRef.current > 0) {
        setRemainingTime(remainingTimeRef.current);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timerRunning, remainingTime, remainingTimeRef]);

  return (
    <Fragment>
      <TimerContainer data-test={dataTest}>
        <Icon type="ExchangeTimer" />
        <TimerTextContainer>
          <TimerText>{translate("EXCHANGE_TIMER_TEXT")}</TimerText>
          <TimerText>{minutes}</TimerText>
          <TimerText>{translate("EXCHANGE_TIMER_TEXT_MIN")}</TimerText>
          <TimerText>{seconds}</TimerText>
          <TimerText>{translate("EXCHANGE_TIMER_TEXT_SEC")}</TimerText>
        </TimerTextContainer>
      </TimerContainer>
    </Fragment>
  );
});

export default Timer;
