import React, { Component } from "react";
import { translate } from "../../../utils/i18n";
import { VOID } from "../../../utils/constants";
import Link from "../../common/Link";
import Icon from "../../common/Icon";

import {
  EFTModalWrapper,
  ContentWrapper,
  IconWrapper,
  FooterContainer,
  Title,
  Message,
  Button
} from "./styles";

class EFTSchedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
    };
    this.handleConfirmButton = this.handleConfirmButton.bind(this);
  }

  handleConfirmButton() {
    this.setState({
      isLoading: true
    });
    this.props.onConfirm();
  }

  render() {
    const { closeModal } = this.props;
    const { isLoading } = this.state;

    return (
      <EFTModalWrapper data-test="transferInsufficientFundsModal">
        <ContentWrapper>
          <IconWrapper>
            <Icon type="Schedule" />
          </IconWrapper>
          <Title>{translate("TRANSFER_INSUFFICIENT_FUNDS")}</Title>
          <Message>{translate("TRANSFER_INSUFFICIENT_FUNDS_MESSAGE")}</Message>
        </ContentWrapper>
        <FooterContainer>
          <Button
            id="Cancel"
            onClick={() => closeModal()}
            dataTest="Cancel"
            isWarning
            disabled={!!isLoading}
          >
            {translate("CANCEL_BTN")}
          </Button>
          <Link
            href={VOID}
            id="Confirm"
            onClick={this.handleConfirmButton}
            disabled={!!isLoading}
            isCallToAction
            loading={isLoading}
            dataTest="Confirm"
          >
            {translate("CONFIRM_BTN")}
          </Link>
        </FooterContainer>
      </EFTModalWrapper>
    );
  }
}

EFTSchedule.defaultProps = {};

EFTSchedule.propTypes = {};

export default EFTSchedule;
