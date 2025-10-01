import React, { Component, Fragment } from "react";
import { shape, string } from "prop-types";
import { Wrapper, Title, Buttons, MessageWrapper, Message } from "./styles";

import { translate } from "../../../utils/i18n";
import { VOID, SUITABILITY_NOTIFICATION_TYPE } from "../../../utils/constants";
import { redirect } from "../../../utils/redirect";
import { MODAL_TYPES } from "../../common/Modal/Modal";
import SuitabilityForm from "../SuitabilityForm";

import Header from "../../common/Modal/Header";
import Button from "../../common/Button";
import Link from "../../common/Link";
import { rem } from "../../../styles/tools";
import { ShowAndHideDescription } from "react-bocombbm-components";

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
    };

    this.decline = this.decline.bind(this);
    this.goOn = this.goOn.bind(this);
  }

  decline() {
    const { closeModal, setNotificationStatus } = this.props;
    closeModal();

    setNotificationStatus(SUITABILITY_NOTIFICATION_TYPE);
    redirect("/home");
  }

  goOn() {
    this.props.closeModal();

    this.props.openModal({
      type: MODAL_TYPES.PAGE_AS_MODAL,
      width: rem(1130),
      children: () => <SuitabilityForm />
    });
  }

  async componentDidMount() {
    await this.props.getSuitabilityInfo();
  }

  render() {
    const { isLoading } = this.state;
    const { userInfo, suitabilityInfo } = this.props;

    return (
      <Fragment>
        <Wrapper>
          <Header title={translate("KEEP_YOUR_SUITABILITY_UP_TO_DATE")} />
          <Title>
            {`${userInfo.givenName}, `}
            {translate("UPDATE_PROFILE_REQUEST")}
          </Title>

          <MessageWrapper>
            <Message>{translate("SUITABILITY_WELCOME_MESSAGE")}</Message>
          </MessageWrapper>
          {suitabilityInfo && (
            <ShowAndHideDescription
              spacing={{ top: "s", left: "l", right: "l", bottom: "l" }}
              texts={{
                button: translate("LEARN_MORE"),
                description: suitabilityInfo.value
              }}
            />
          )}
          <Buttons>
            <Button dataTest="answerLater" onClick={() => this.decline()}>
              {translate("ANSWER_LATER")}
            </Button>
            <Link
              href={VOID}
              id="Confirm"
              onClick={() => this.goOn()}
              isCallToAction
              loading={!!isLoading}
            >
              {translate("ANSWER_NOW")}
            </Link>
          </Buttons>
        </Wrapper>
      </Fragment>
    );
  }
}

Welcome.propTypes = {
  suitabilityResult: shape({
    profile: string
  })
};

export default Welcome;
