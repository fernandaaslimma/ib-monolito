import React, { Component, Fragment } from "react";
import { Button } from "react-bocombbm-components";
import { shape, string, number, func } from "prop-types";
import { translate } from "../../../../utils/i18n";
import { formatCNPJ } from "../../../../utils/formatNumber";

import {
  FooterContainer,
  CenterContainer,
  UpperDiv,
  SubDiv,
  Title,
  LargeSubTitle,
  SubTitle,
  LowerDiv,
  Line
} from "./styles";

class ModalDeleteFavoredAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  render() {
    const { onDelete, closeModal, favoredList } = this.props;

    return (
      <Fragment>
        <Line />
        <CenterContainer>
          <UpperDiv>
            <SubDiv>
              <Title>{translate("FAVORED")}</Title>
              <LargeSubTitle data-test="favoredListName">
                {favoredList.name}
              </LargeSubTitle>
            </SubDiv>
            <SubDiv />
            <SubDiv>
              <Title>{translate("CNPJ")}</Title>
              <SubTitle data-test="favoredListDocument">
                {formatCNPJ(favoredList.document)}
              </SubTitle>
            </SubDiv>
          </UpperDiv>
          <LowerDiv>
            <SubDiv width="46%">
              <Title>{translate("DESTINATION_BANK")}</Title>
              <SubTitle data-test="favoredListBank">
                {`${favoredList.account.bankCode} - ${favoredList.account.bankName}`}
              </SubTitle>
            </SubDiv>
            <SubDiv width="20%">
              <Title>{translate("AGENCY")}</Title>
              <SubTitle data-test="favoredListBranch">
                {favoredList.account.branch}
              </SubTitle>
            </SubDiv>
            <SubDiv>
              <Title>{translate("ACCOUNT")}</Title>
              <SubTitle data-test="favoredListBankAccount">
                {`${favoredList.account.number} - ${favoredList.account.verifyingDigit}`}
              </SubTitle>
            </SubDiv>
          </LowerDiv>
        </CenterContainer>

        <FooterContainer>
          <Button type="outline" dataTest="Cancel" onClick={() => closeModal()}>
            {translate("CANCEL_BTN")}
          </Button>

          <Button
            type="negative"
            dataTest="delete"
            onClick={() => {
              onDelete(favoredList.id, favoredList.account.id);
            }}
          >
            {translate("TED_DELETE")}
          </Button>
        </FooterContainer>
      </Fragment>
    );
  }
}

ModalDeleteFavoredAccount.defaultProps = {
  favoredList: {
    id: null,
    document: "",
    name: "",
    account: {
      bankCode: "",
      bankName: "",
      branch: "",
      id: null,
      number: "",
      verifyingDigit: ""
    }
  },
  onDelete: () => null,
  closeModal: () => null
};

ModalDeleteFavoredAccount.propTypes = {
  favoredList: shape({
    id: number,
    document: string,
    name: string,
    account: shape({
      bankCode: string,
      bankName: string,
      branch: string,
      id: number,
      number: string,
      verifyingDigit: string
    })
  }),
  onDelete: func,
  closeModal: func
};

export default ModalDeleteFavoredAccount;
