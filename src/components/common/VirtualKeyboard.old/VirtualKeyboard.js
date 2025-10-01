import React, { Component } from "react";
import { func, number, bool } from "prop-types";
import Icon from "../Icon";
import { translate } from "../../../utils/i18n";

import { Wrapper, KeyBoard, Key, Erase, Title } from "./styles";
import VirtualKeyboardInput from "./VirtualKeyboardInput";
class VirtualKeyboard extends Component {
  constructor(props) {
    super(props);

    this.inputKeys = [...Array(10).keys()].sort(() => Math.random() * 3 - 1);
  }
  changeAttachedInputValue(value) {
    const { virtualKeyboardConfig } = this.props;
    const { lastFocusedInput, lastFocusedInputComponent } =
      virtualKeyboardConfig || {};

    lastFocusedInputComponent &&
      lastFocusedInputComponent.props.onChange &&
      lastFocusedInputComponent.props.onChange({
        target: {
          name: lastFocusedInput.name,
          value: lastFocusedInput.value ? lastFocusedInput.value + value : value
        }
      });
  }

  eraseAttachedInputValue() {
    const { virtualKeyboardConfig } = this.props;
    const { lastFocusedInput, lastFocusedInputComponent } =
      virtualKeyboardConfig || {};

    lastFocusedInputComponent &&
      lastFocusedInputComponent.props.onChange &&
      lastFocusedInputComponent.props.onChange({
        target: {
          name: lastFocusedInput.name,
          value: ""
        }
      });
  }

  render() {
    const {
      onKeyDown,
      onErase,
      hideBelow,
      virtualKeyboardConfig,
      alwaysActive
    } = this.props;
    const { activeInput, lastFocusedInput } = virtualKeyboardConfig || {};
    const focusInput = () => {
      VirtualKeyboardInput.cleanTimeout();
      lastFocusedInput && lastFocusedInput.focus();
    };

    return (
      <Wrapper
        hideBelow={hideBelow}
        active={alwaysActive || !!activeInput}
        onClick={focusInput}
      >
        <Title>
          <Icon type="Keyboard" />
          <span>{translate("VITUAL_KEYBOARD")}</span>
        </Title>
        <KeyBoard>
          {this.inputKeys.map(inputKey => (
            <Key
              key={inputKey}
              data-test={`virtualKeyboardKey${inputKey}`}
              onMouseDown={e => {
                focusInput();
                this.changeAttachedInputValue(inputKey.toString());
                onKeyDown && onKeyDown(inputKey.toString());
                e.preventDefault();
                e.stopPropagation();
              }}
              onTouchStart={() => {
                focusInput();
              }}
              onTouchEnd={() => {
                focusInput();
              }}
            >
              {inputKey}
            </Key>
          ))}
          <Erase
            onClick={e => {
              e.preventDefault();
              this.eraseAttachedInputValue();
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
