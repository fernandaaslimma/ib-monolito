import React, { Component } from "react";
import { Button, AlertMessage } from "react-bocombbm-components";
import { object, func } from "prop-types";
import { translate } from "../../../utils/i18n";
import Checkbox from "../../common/Checkbox2";
import Tag from "../../common/Tag";
import { formatCNPJ } from "../../../utils/formatNumber";

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
  WrapperCheckbox,
  WrapperAlert,
  TitleSave
} from "./styles";

class EFTConfirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      saveFavoredAccount: false,
      permissionToSaveAccount: false
    };
    this.handleConfirmButton = this.handleConfirmButton.bind(this);
    this.handleSaveFavoredAccount = this.handleSaveFavoredAccount.bind(this);
  }

  componentDidMount() {
    const { approvers, userInfo } = this.props;

    const userApprover = approvers.find(c => c.uid === userInfo.document);

    this.setState({
      permissionToSaveAccount:
        userApprover !== undefined
          ? userApprover.permissionToSaveAccount
          : false
    });
  }

  handleSaveFavoredAccount() {
    this.setState({
      saveFavoredAccount: this.state.saveFavoredAccount ? false : true
    });
  }

  handleConfirmButton() {
    this.setState({
      isLoading: true
    });
    this.props.onConfirm(this.state.saveFavoredAccount);
  }

  render() {
    const {
      transferData,
      favoredData,
      originAccount,
      approvers,
      closeModal,
      currentAccount,
      isNewAccount
    } = this.props;

    const {
      isLoading,
      saveFavoredAccount,
      permissionToSaveAccount
    } = this.state;

    return (
      <EFTModalWrapper>
        <MainContainer>
          <LeftContainer>
            <UpperDiv>
              <Title>{translate("DATE")}</Title>
              <SubTitle data-test="reviewTransferDate">
                {transferData.date}
              </SubTitle>
            </UpperDiv>
            <LowerDiv>
              <Title>{translate("VALUE")}</Title>
              <SubTitle data-test="reviewTransferAmount">
                {`${translate("CURRENCY_UNIT")} ${transferData.value}`}
              </SubTitle>
            </LowerDiv>
          </LeftContainer>

          <CenterContainer>
            <UpperDiv>
              <SubDiv>
                <Title>{translate("FAVORED")}</Title>
                <LargeSubTitle data-test="reviewRecipientName">
                  {currentAccount.name}
                </LargeSubTitle>
              </SubDiv>
              <SubDiv />
              <SubDiv>
                <Title>{translate("CNPJ")}</Title>
                <SubTitle data-test="reviewRecipientTaxId">
                  {formatCNPJ(favoredData.CNPJ)}
                </SubTitle>
              </SubDiv>
            </UpperDiv>
            <LowerDiv>
              <SubDiv width="46%">
                <Title>{translate("DESTINATION_BANK")}</Title>
                <SubTitle data-test="reviewRecipientBank">
                  {favoredData.bankCode} {favoredData.bank}
                </SubTitle>
              </SubDiv>
              <SubDiv width="20%">
                <Title>{translate("AGENCY")}</Title>
                <SubTitle data-test="reviewBankBranch">
                  {favoredData.agency}
                </SubTitle>
              </SubDiv>
              <SubDiv>
                <Title>{translate("ACCOUNT")}</Title>
                <SubTitle data-test="reviewRecipientBankAccount">
                  {favoredData.account}
                  {favoredData.verifyDigit && `-${favoredData.verifyDigit}`}
                </SubTitle>
              </SubDiv>
            </LowerDiv>
          </CenterContainer>

          <RightContainer>
            <UpperDiv>
              <Title>{translate("ORIGIN_ACCOUNT")}</Title>
              <SubTitle data-test="reviewOriginAccount">
                {originAccount.number}
              </SubTitle>
            </UpperDiv>
            <LowerDiv>
              <Title>{translate("APPROVERS")}</Title>
              <SubTitle>
                {approvers.map((c, i) => {
                  if (i === approvers.length - 1) {
                    return `${c.name}.`;
                  }
                  return `${c.name}, `;
                })}
              </SubTitle>
            </LowerDiv>
          </RightContainer>
        </MainContainer>

        {permissionToSaveAccount && (
          <WrapperSave>
            <TitleSave>
              {translate("EFT_SAVE_BANK_ACCOUNT")}
              <Tag title={translate("NEW")} color={"#D5E3F8"} />
            </TitleSave>

            <WrapperCheckbox>
              <Checkbox
                type="switch"
                name="switchBox"
                dataTest="switchSaveAccount"
                checked={saveFavoredAccount}
                onChange={this.handleSaveFavoredAccount}
              />
            </WrapperCheckbox>
          </WrapperSave>
        )}
        {!isNewAccount && !permissionToSaveAccount && (
          <WrapperAlert>
            <AlertMessage icon="Attention" type="neutral">
              {translate("EFT_ACCOUNTS_SAVE_DISCLAIMER")}
            </AlertMessage>
          </WrapperAlert>
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
            dataTest="Confirm"
            onClick={this.handleConfirmButton}
            disabled={!!isLoading}
            loading={isLoading}
          >
            {translate("CONFIRM_BTN")}
          </Button>
        </FooterContainer>
      </EFTModalWrapper>
    );
  }
}

EFTConfirmation.defaultProps = {
  transferData: null,
  favoredData: null,
  originAccount: null
};

EFTConfirmation.propTypes = {
  transferData: object,
  favoredData: object,
  originAccount: object,
  closeCallback: func
};

export default EFTConfirmation;
