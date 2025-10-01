import React, { Fragment } from "react";
import { translate } from "../../utils/i18n";

class ClickWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpened: false };
    this.handleChildrenClick = this.handleChildrenClick.bind(this);
    this.handleConnectionChange = this.handleConnectionChange.bind(this);
    this.renderChildren = this.renderChildren.bind(this);
  }

  handleConnectionChange(event) {
    // Case internet state is ok, deactivates listener and opens toastr
    const {
      openToastr,
      closeModal,
      closeToastr,
      enableToastrTimeout
    } = this.props;
    const connected = navigator.onLine ? true : false;

    if (
      connected &&
      event.type === "online" &&
      this.state.modalOpened === true
    ) {
      this.setState({ modalOpened: false });
      closeModal();
    }

    if (connected && event.type === "online") {
      window.removeEventListener("online", this.handleConnectionChange);
      enableToastrTimeout();
      closeToastr();
      openToastr({
        text: translate("YOUR_CONNECTION_HAS_BEEN_REESTABLISHED"),
        isBelow: false,
        isTop: true
      });
    }
  }

  handleChildrenClick() {
    // Case internet is not ok activate listener, open modal and toastr
    const {
      openToastr,
      openModal,
      closeToastr,
      cancelToastrTimeout,
      modalSettings
    } = this.props;
    const { disabled } = this.props.children.props;
    if (this.props.children.props && !disabled) {
      const connected = navigator.onLine ? true : false;
      if (
        connected === false &&
        modalSettings &&
        modalSettings.isOpen === !true
      ) {
        this.setState({ modalOpened: true });
        cancelToastrTimeout();
        closeToastr();
        openModal({
          title: translate("LOOKS_LIKE_YOU_ARE_OUT_OF_CONNECTION"),
          icon: "ConnectionLost",
          description: [translate("CHECK_YOUR_INTERNET_AND_TRY_TO_RECONNECT")],
          confirmButton: translate("UNDERSTOOD"),
          type: "Information",
          onClose: () => {
            openToastr({
              text: translate("YOUR_INTERNET_CONNECTION_HAS_BEEN_LOST"),
              isBelow: false,
              isTop: true,
              timeout: 600000,
              noClose: true,
              error: true
            });
          }
        });
        window.addEventListener("online", this.handleConnectionChange);
      } else if (connected === false && modalSettings.isOpen === true) {
        this.setState({ modalOpened: false });
        cancelToastrTimeout();
        closeToastr();
        openToastr({
          text: translate("YOUR_INTERNET_CONNECTION_HAS_BEEN_LOST"),
          isBelow: false,
          isTop: true,
          timeout: 600000,
          noClose: true,
          error: true
        });
        window.addEventListener("online", this.handleConnectionChange);
      } else {
        this.setState({ modalOpened: false });
        // Case internet is ok, calls onClick method from original child element on memory
        this.props.children.props.onClick();
      }
    }
  }

  renderChildren() {
    // Clones child element and overrides original onClick method by handleChildrenClick
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        onClick: this.handleChildrenClick
      });
    });
  }

  render() {
    // renders the changed clone element renderChildren
    return <Fragment>{this.renderChildren()}</Fragment>;
  }
}
export default ClickWrapper;
