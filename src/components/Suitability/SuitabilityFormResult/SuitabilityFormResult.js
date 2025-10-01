import React, { Component, Fragment } from "react";
import { shape, object, func } from "prop-types";
import { Wrapper, Title, Profile, Description, Buttons, Token } from "./styles";

import { translate } from "../../../utils/i18n";
import {
  SUITABILITY_NOTIFICATION_TYPE,
  VOID,
  ACTION_TYPE_APPROVE_SUITABILITY
} from "../../../utils/constants";
import { redirect, hardRedirect } from "../../../utils/redirect";
import EFTToken from "../../common/EFTToken";
import Header from "../../common/Modal/Header";
import Button from "../../common/Button";
import Link from "../../common/Link";
import ExitConfirmation from "../../common/ExitConfirmation";

class SuitabilityFormResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticating: false,
      isExiting: false
    };

    this.redo = this.redo.bind(this);
    this.finish = this.finish.bind(this);
  }

  redo() {
    this.props.closeModal();
    hardRedirect("/suitability");
  }

  async finish(formParams) {
    const {
      closeModal,
      setNotificationStatus,
      approveSuitability
    } = this.props;
    try {
      await approveSuitability(formParams);
      setNotificationStatus(SUITABILITY_NOTIFICATION_TYPE);
      closeModal();
      redirect("/home");
    } catch (error) {
      this.props.addError(error);
      closeModal();
      return { error };
    }
  }

  getAuthCodeParams() {
    const { suitabilityResult } = this.props;

    const params = {
      actionType: ACTION_TYPE_APPROVE_SUITABILITY,
      payload: {
        $type: suitabilityResult.$type,
        id: suitabilityResult.id,
        formVersionId: suitabilityResult.formVersionId,
        lastUpdated: suitabilityResult.lastUpdated,
        profileId: suitabilityResult.profile.id,
        profile: {
          $type: suitabilityResult.profile.$type,
          id: suitabilityResult.profile.id,
          name: suitabilityResult.profile.name,
          description: suitabilityResult.profile.description,
          language: suitabilityResult.profile.language
        }
      }
    };
    return params;
  }

  renderExitConfirmation() {
    return (
      <ExitConfirmation
        onClickExit={() => this.handleClose()}
        onClickCancel={() => this.setState({ isExiting: false })}
      />
    );
  }

  handleClose() {
    const { setNotificationStatus, closeModal } = this.props;
    closeModal();

    setNotificationStatus(SUITABILITY_NOTIFICATION_TYPE);
    redirect("/home");
  }

  renderToken() {
    const { suitabilityFormParams, mfaTokenValidated } = this.props;

    return (
      <Token>
        <EFTToken
          onMFAConfirmation={() => this.finish(suitabilityFormParams)}
          mfaTokenValidated={mfaTokenValidated}
          createAuthCodeParams={this.getAuthCodeParams()}
          onMFAError={() => {}}
        />
      </Token>
    );
  }

  render() {
    const { suitabilityResult, methodChanging } = this.props;
    const { isAuthenticating, isExiting } = this.state;

    return (
      <Fragment>
        <Header
          title={
            !this.props.methodChanging
              ? translate("KEEP_YOUR_SUITABILITY_UP_TO_DATE")
              : null
          }
          dataTest="suitability-data-close"
          onClickClose={() => this.setState({ isExiting: true })}
          onClickBack={
            methodChanging ? () => this.props.changeFactorTogle(false) : null
          }
        />
        {isExiting && this.renderExitConfirmation()}
        {isAuthenticating && !isExiting && this.renderToken()}
        {!isAuthenticating && !isExiting && (
          <Wrapper>
            <Title>{translate("YOUR_SUITABILITY_PROFILE_IS")}</Title>
            <Profile data-test="suitabilityProfile">
              {suitabilityResult.profile.name}
            </Profile>
            <Description data-test="suitabilityProfileDescription">
              {suitabilityResult.profile.description}
            </Description>
            <Buttons>
              <Button onClick={() => this.redo()}>{translate("REDO")}</Button>
              <Link
                href={VOID}
                id="Confirm"
                onClick={() => this.setState({ isAuthenticating: true })}
                isCallToAction
                dataTest="ConfirmSuitability"
              >
                {translate("I_AGREE_WITH_MY_PROFILE")}
              </Link>
            </Buttons>
          </Wrapper>
        )}
      </Fragment>
    );
  }
}

SuitabilityFormResult.defaultProps = {
  suitabilityResult: {},
  mfaToken: ""
};

SuitabilityFormResult.propTypes = {
  suitabilityResult: shape({
    profile: object
  }),
  submitSuitabilityAnswers: func.isRequired
};

export default SuitabilityFormResult;
