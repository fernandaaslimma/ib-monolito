import React, { Component } from "react";
import { Container } from "../../styles/grid";
import RegistrationDataForm from "./RegistrationDataForm";

import { rem } from "../../styles/tools";
import { MODAL_TYPES } from "../common/Modal/Modal";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import {
  REGISTRATION_DATA_NOTIFICATION_TYPE,
  ACTION_TYPE_PERSON_REGISTRATION_CONFIRM_INFORMATION
} from "../../utils/constants";
import mfaActionsCheck from "../../utils/mfaActionsCheck";
import { redirect } from "../../utils/redirect";

class RegistrationData extends Component {
  constructor(props) {
    super(props);

    this.openModal = this.openModal.bind(this);
  }

  async componentDidMount() {
    const { getAuthFactors, setNotificationStatus } = this.props;
    await getAuthFactors();

    const validAuthFactors = await mfaActionsCheck(
      ACTION_TYPE_PERSON_REGISTRATION_CONFIRM_INFORMATION,
      this.props.authFactors
    );
    if (validAuthFactors.result === true) {
      return this.openModal();
    } else {
      setNotificationStatus(REGISTRATION_DATA_NOTIFICATION_TYPE);
      return redirect("/mfaboarding");
    }
  }

  openModal() {
    this.props.openModal({
      type: MODAL_TYPES.PAGE_AS_MODAL,
      width: rem(1100),
      children: () => {
        return <RegistrationDataForm />;
      }
    });
  }

  render() {
    const { error } = this.props;

    return (
      <ErrorBoundary errorStatus={error} {...this.props}>
        <Container />
      </ErrorBoundary>
    );
  }
}

export default RegistrationData;
