import React, { Component } from "react";
import { func, bool, number } from "prop-types";
import { Button } from "react-bocombbm-components";
import { translate } from "../../../utils/i18n";

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      remaining: Number(props.timeLeft)
    };

    this.count = this.count.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  count() {
    this.timer && clearInterval(this.timer);
    let { remaining } = this.state;
    const { expirationAction } = this.props;

    this.timer =
      remaining > 0
        ? setInterval(() => {
            this.setState({ remaining: remaining - 1 });
          }, 1000)
        : expirationAction();
  }

  componentDidUpdate() {
    if (this.props.startTimer === true) {
      this.count();
    }
  }

  resetTimer(newTime) {
    this.setState({ remaining: newTime });
  }

  render() {
    const { remaining } = this.state;
    return (
      <Button
        spacing={{ top: "s" }}
        data-test="CountDown"
        type="text"
        onClick={() => {}}
        small
        disabled
      >
        {`${translate("BOARDING_MFA_WAITING")} (${remaining})`}
      </Button>
    );
  }
}

Timer.propTypes = {
  timeLeft: number.isRequired,
  expirationAction: func.isRequired,
  startTimer: bool.isRequired
};

export default Timer;
