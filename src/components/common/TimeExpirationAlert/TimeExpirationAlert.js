import React, { Component } from "react";
import { array, func, string, shape, bool } from "prop-types";
import { Wrapper, Counter, Action, Message, Count } from "./styles";
import Button from "../../common/Button";

class TimeExpirationAlert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      remaining: Number(props.timeLeft)
    };

    this.count = this.count.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  count() {
    this.timer && clearInterval(this.timer);

    let { remaining } = this.state;
    const { expirationAction } = this.props;

    this.timer =
      remaining !== 0
        ? setInterval(() => {
            this.setState({ remaining: remaining - 1 });
          }, 1000)
        : expirationAction();
  }

  componentDidUpdate() {
    this.count();
  }

  clickHandler() {
    const { clickAction } = this.props;
    clickAction();
  }

  resetTimer(newTime) {
    this.setState({ remaining: newTime });
  }

  render() {
    const { alignment, contantLabels, threshold, lockButton } = this.props;
    const { remaining } = this.state;

    if (typeof remaining === "number" && remaining <= threshold) {
      return (
        <Wrapper alignment={alignment} data-test="TimeExpirationAlertPopup">
          <Counter remaining={remaining} threshold={threshold}>
            <Count data-test="TimeExpirationCounter">{remaining}</Count>
          </Counter>
          <Action>
            <Message>{contantLabels.message}</Message>

            <Button
              height={45}
              disabled={lockButton}
              isCallToAction
              onClick={this.clickHandler}
            >
              {contantLabels.keepConnected}
            </Button>
          </Action>
        </Wrapper>
      );
    }

    return null;
  }
}

TimeExpirationAlert.propTypes = {
  lockButton: bool,
  alignment: array,
  clickAction: func.isRequired,
  expirationAction: func.isRequired,
  contantLabels: shape({
    message: string,
    keepConnected: string
  }).isRequired
};

export default TimeExpirationAlert;
