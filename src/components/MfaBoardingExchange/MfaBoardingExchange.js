import React, { Component, Fragment } from "react";
import { Container } from "../../styles/grid";
import { MODAL_TYPES } from "../common/Modal/Modal";
import { translate } from "../../utils/i18n";
import MfaBoardingScreenExchange from "./MfaBoardingScreenExchange";

class MfaBoardingExchange extends Component {
  constructor(props) {
    super(props);
    this.openModalMfa = this.openModalMfa.bind(this);
    this.state = { notificationState: {} };
  }

  componentDidMount() {
    const notificationArray = {
      title: translate("TYPE_SELECTION_TITLE"),
      description: translate("TYPE_SELECTION_SUBTITLE"),
      displayMethod: "PopUp",
      type: "MFABoarding",
      parameters: [{ type: "authenticatorApp", id: 2 }]
    };
    
    this.setState({
      notificationState: notificationArray
    });

    this.openModalMfa();
  }

  openModalMfa() {
    this.props.openModal({
      type: MODAL_TYPES.PAGE_AS_MODAL,
      width: "auto",
      children: () => {
        return (
          <Fragment>
            <MfaBoardingScreenExchange
              historyGoBack={this.props.history.goBack}
              closeModal={this.props.closeModal}
              notification={this.state.notificationState}
            ></MfaBoardingScreenExchange>
          </Fragment>
        );
      }
    });
  }

  render() {
    return <Container />;
  }
}
export default MfaBoardingExchange;
