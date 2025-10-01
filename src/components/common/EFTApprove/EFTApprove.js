import React, { Component } from "react";
import { Button, AlertMessage } from "react-bocombbm-components";
import { object, func } from "prop-types";
import { translate } from "../../../utils/i18n";
import formatNumber, {
  formatCPF,
  formatCNPJ
} from "../../../utils/formatNumber";
import { getDateStringFromEpoch } from "../../../utils/formatDate";
import { UP } from "../../../utils/constants";
import Tag from "../../common/Tag";
import Checkbox from "../../common/Checkbox2";
import Tooltip from "../../common/Tooltip";

import {
  EFTModalWrapper,
  MainContainer,
  LeftContainer,
  CenterContainer,
  RightContainer,
  FooterContainer,
  UpperDiv,
  LowerDiv,
  SubDiv,
  Title,
  SubTitle,
  LargeSubTitle,
  WrapperSave,
  WrapperAlert,
  WrapperCheckbox,
  TitleSave,
  WrapperTag
} from "./styles";

class EFTApprove extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      switchChecked: false,
      switchDisabled: false,
      tooltipDisabled: null,
      messageTooltip: null
    };
    this.handleFavoredAccountButton = this.handleFavoredAccountButton.bind(
      this
    );
  }

  componentDidMount() {
    const { pendency } = this.props;
    const status = pendency.approvers.find(c => c.hasApproved === true);

    this.setState({
      switchDisabled: status !== undefined ? true : false,
      switchChecked: pendency.recipient.saveRecipientAccount,
      tooltipDisabled: status !== undefined ? false : true,
      messageTooltip:
        status !== undefined &&
        (pendency.recipient.saveRecipientAccount
          ? translate("EFT_TOOLTIP_ACCOUNT_ENABLED")
          : translate("EFT_TOOLTIP_ACCOUNT_DISABLED"))
    });
  }

  handleFavoredAccountButton() {
    this.setState({
      switchChecked: this.state.switchChecked ? false : true
    });
  }

  render() {
    const {
      closeModal,
      pendency,
      header,
      data,
      handleSaveAccount
    } = this.props;

    const {
      isLoading,
      switchChecked,
      switchDisabled,
      tooltipDisabled,
      messageTooltip
    } = this.state;

    return (
      <EFTModalWrapper>
        <MainContainer>
          <LeftContainer>
            <UpperDiv>
              <Title>{translate("DATE")}</Title>
              <SubTitle data-test="reviewTransferDate">
                {getDateStringFromEpoch(pendency.dueDate)}
              </SubTitle>
            </UpperDiv>
            <LowerDiv>
              <Title>{translate("VALUE")}</Title>
              <SubTitle data-test="reviewTransferAmount">
                {`${translate("CURRENCY_UNIT")}`}{" "}
                {formatNumber(pendency.amount, { digits: 2 })}
              </SubTitle>
            </LowerDiv>
          </LeftContainer>

          <CenterContainer>
            <UpperDiv>
              <SubDiv>
                <Title>{translate("FAVORED")}</Title>
                <LargeSubTitle data-test="reviewRecipientName">
                  {pendency.recipient.name}
                </LargeSubTitle>
              </SubDiv>
              <SubDiv />
              <SubDiv>
                <Title>{translate("CNPJ")}</Title>
                <SubTitle data-test="reviewRecipientTaxId">
                  {pendency.recipient.taxId.length === 11
                    ? formatCPF(pendency.recipient.taxId)
                    : formatCNPJ(pendency.recipient.taxId)}
                </SubTitle>
              </SubDiv>
            </UpperDiv>

            <LowerDiv>
              <SubDiv width="46%">
                <Title>{translate("DESTINATION_BANK")}</Title>
                <SubTitle data-test="reviewRecipientBank">
                  {pendency.recipient.bankId} {pendency.recipient.bankName}
                </SubTitle>
              </SubDiv>
              <SubDiv width="20%">
                <Title>{translate("AGENCY")}</Title>
                <SubTitle data-test="reviewBankBranch">
                  {pendency.recipient.bankBranch}
                </SubTitle>
              </SubDiv>
              <SubDiv>
                <Title>{translate("ACCOUNT")}</Title>
                <SubTitle data-test="reviewRecipientBankAccount">
                  {pendency.recipient.bankAccount}
                  {pendency.recipient.verifyingDigit &&
                    `-${pendency.recipient.verifyingDigit}`}
                </SubTitle>
              </SubDiv>
            </LowerDiv>
          </CenterContainer>

          <RightContainer>
            <UpperDiv>
              <Title>{translate("ORIGIN_ACCOUNT")}</Title>
              <SubTitle data-test="reviewOriginAccount">
                {pendency.originAccount}
              </SubTitle>
            </UpperDiv>
            <LowerDiv>
              <Title>{translate("APPROVERS")}</Title>
              <SubTitle>
                {pendency.approvers.map((c, i) => {
                  if (i === pendency.approvers.length - 1) {
                    return `${c.name}.`;
                  }
                  return `${c.name}, `;
                })}
              </SubTitle>
            </LowerDiv>
          </RightContainer>
        </MainContainer>

        {pendency.recipient.accountSaved ? (
          <WrapperAlert>
            <AlertMessage icon="Attention" type="neutral">
              {translate("EFT_ACCOUNTS_SAVE_DISCLAIMER")}
            </AlertMessage>
          </WrapperAlert>
        ) : (
          <WrapperSave>
            <TitleSave>{translate("EFT_SAVE_BANK_ACCOUNT")}</TitleSave>

            <WrapperTag>
              <Tag title={translate("NEW")} color={"#D5E3F8"} />
            </WrapperTag>

            <Tooltip
              dataTest="tooltipETFApprove"
              position={UP}
              width={238}
              texts={[messageTooltip]}
              disabled={tooltipDisabled}
            >
              <WrapperCheckbox>
                <Checkbox
                  type="switch"
                  checked={switchChecked}
                  disabled={switchDisabled}
                  name="switchBox"
                  dataTest="switchSaveAccount"
                  onChange={this.handleFavoredAccountButton}
                />
              </WrapperCheckbox>
            </Tooltip>
          </WrapperSave>
        )}

        <FooterContainer>
          <Button
            type="outline"
            dataTest="Cancel"
            onClick={() => closeModal()}
            disabled={!!isLoading}
          >
            {translate("CANCEL_BTN")}
          </Button>

          <Button
            type="conclusive"
            dataTest="Approve"
            onClick={() => {
              handleSaveAccount(switchChecked);
              header.callback(data[header.field], "approve");
            }}
            disabled={!!isLoading}
            loading={isLoading}
          >
            {translate("APPROVE")}
          </Button>
        </FooterContainer>
      </EFTModalWrapper>
    );
  }
}

EFTApprove.defaultProps = {
  pendency: null,
  header: null,
  data: null
};

EFTApprove.propTypes = {
  closeModal: func,
  pendency: object,
  header: object,
  data: object
};

export default EFTApprove;
