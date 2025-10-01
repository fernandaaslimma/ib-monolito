import React, { Component } from "react";
import throttle from "lodash/throttle";

let closeTimeout;

class VirtualKeyboardInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDetached: false
    };
  }

  componentDidMount() {
    this.checkDetachment();

    this.listener = throttle(() => {
      this.checkDetachment();
    }, 500);

    window.addEventListener("resize", this.listener);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.listener);
  }

  checkDetachment() {
    const isDetached =
      this.props.detachBelow && window.innerWidth < this.props.detachBelow;

    this.setState({ isDetached });
  }

  render() {
    const { render, setActiveInput, cleanActiveInput } = this.props;

    const self = this;
    const RenderedComponent = render();

    let innerRef;
    const NewCompoent = React.cloneElement(RenderedComponent, {
      innerRef(el) {
        innerRef = el;
      },
      readOnly: self.state.isDetached ? null : "readonly",
      onKeyDown(e) {
        if (self.state.isDetached) {
          RenderedComponent.onKeyDown && RenderedComponent.onKeyDown(e);
          return;
        }

        e.preventDefault();
      },
      onBlur(e) {
        if (self.state.isDetached) {
          RenderedComponent.onBlur && RenderedComponent.onBlur(e);
          return;
        }
        clearTimeout && clearTimeout(closeTimeout);
        closeTimeout = setTimeout(() => {
          setActiveInput && cleanActiveInput(innerRef);
        }, 200);
      },
      onFocus(e) {
        if (self.state.isDetached) {
          RenderedComponent.onFocus && RenderedComponent.onFocus(e);
          return;
        }
        clearTimeout && clearTimeout(closeTimeout);
        setActiveInput && setActiveInput(innerRef, NewCompoent);
      }
    });

    return NewCompoent;
  }
}

VirtualKeyboardInput.cleanTimeout = function() {
  clearTimeout && clearTimeout(closeTimeout);
};

export default VirtualKeyboardInput;
