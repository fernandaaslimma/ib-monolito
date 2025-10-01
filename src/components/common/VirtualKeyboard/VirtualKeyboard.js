import React, { Component } from "react";
import { func, number, bool } from "prop-types";
import Icon from "../Icon";
import { translate } from "../../../utils/i18n";

import { Wrapper, KeyBoard, Key, Erase, Title } from "./styles";

class VirtualKeyboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputPressed: null
    };
    this.inputKeys = [...Array(10).keys()].sort(() => Math.random() * 3 - 1);
  }

  render() {
    const { onKeyDown, onErase, hideBelow } = this.props;

    return (
      <Wrapper hideBelow={hideBelow} active>
        <Title>
          <Icon type="Keyboard" />
          <span>{translate("VITUAL_KEYBOARD")}</span>
        </Title>

        <KeyBoard>
          {this.inputKeys.map(inputKey => (
            <Key
              isPressed={this.state.inputPressed === inputKey.toString()}
              key={inputKey}
              data-test={`virtualKeyboardKey${inputKey}`}
              onClick={e => {
                this.setState({ inputPressed: inputKey.toString() }, () => {
                  setTimeout(() => {
                    this.setState({ inputPressed: null });
                  }, 150);
                });
                onKeyDown && onKeyDown(inputKey.toString());
                e.preventDefault();
              }}
            >
              {inputKey}
            </Key>
          ))}
          <Erase
            data-test="eraseButton"
            onClick={e => {
              e.preventDefault();
              onErase && onErase();
            }}
          >
            <Icon type="Erase" />
            <span>{translate("ERASE")}</span>
          </Erase>
        </KeyBoard>
      </Wrapper>
    );
  }
}

VirtualKeyboard.defaultProps = {
  onKeyDown: null,
  onErase: null,
  hideBelow: null,
  alwaysActive: false
};

VirtualKeyboard.propTypes = {
  onKeyDown: func,
  onErase: func,
  hideBelow: number,
  alwaysActive: bool
};

export default VirtualKeyboard;
