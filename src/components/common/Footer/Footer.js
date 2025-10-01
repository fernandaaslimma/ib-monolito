import React, { Component } from "react";
import { func, shape } from "prop-types";
import Icon from "../../common/Icon";
import Hide from "../../common/Hide";
import ContactBanker from "../../common/ContactBanker";
import CanAccess from "../CanAccess";
import { MODAL_TYPES } from "../../common/Modal/Modal";
import { rem } from "../../../styles/tools";
import { translate, isPtBR } from "../../../utils/i18n";
import { scrollToTop } from "../../../utils/dom";
import openExternalLink from "../../../utils/openExternalLink";

import {
  CREATE_REGISTRATO,
  GET_ACCOUNT_MANAGER,
  BOCOM_BBM_FOOTER_COMPLIANCE_BR,
  BOCOM_BBM_FOOTER_COMPLIANCE_US,
  GET_CREDIT_PORTFOLIO,
  DOWNLOAD_PRODUCT_TERMS_ENDPOINT,
  GET_PORTABILITIES
} from "../../../utils/constants";

import {
  FooterWrapper,
  Disclaimer,
  IconWrapper,
  Subcontent,
  Copyright,
  Text,
  ToggleButton,
  LinkWrapper,
  DisclaimerFrag
} from "./styles";
import { isMobile } from "../../../utils/openFile";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
    this.clickedToDownload = this.clickedToDownload.bind(this);
  }

  async clickedToDownload(file, name) {
    if (isMobile()) {
      await this.props.downloadTerms(file);
    } else {
      const link = document.createElement("a");
      document.body.appendChild(link);
      link.href = `${__API__}${DOWNLOAD_PRODUCT_TERMS_ENDPOINT}${file}`;
      link.download = name;
      link.target = "_blank";
      link.click();

      setTimeout(link.remove(), 100);

      return link;
    }
  }

  onClickTab(url) {
    this.props.history.push(url);
  }

  toggleButton() {
    this.setState({ expanded: !this.state.expanded });
  }

  openContactModal() {
    const { resetErrors, openModal, error } = this.props;
    const currentError = error ? error : null;

    resetErrors();
    scrollToTop();
    openModal({
      type: MODAL_TYPES.PAGE_AS_MODAL,
      overwriteDefaultButtons: true,
      width: rem(561),
      children: () => (
        <ContactBanker closeModal={() => this.props.closeModal(currentError)} />
      )
    });
  }

  render() {
    const { expanded } = this.state;
    return (
      <FooterWrapper visible={this.props.visible} data-test="footer-wrapper">
        <IconWrapper>
          <Icon type="FooterLogo" />
        </IconWrapper>

        <Disclaimer data-test="disclaimer">
          {translate("DISCLAIMER_CLOSE")}
          <DisclaimerFrag expanded={expanded}>
            {` ${translate("DISCLAIMER")}`}
          </DisclaimerFrag>
        </Disclaimer>
        <Hide above="md">
          <LinkWrapper>
            <ToggleButton
              data-test="toggle-seemore"
              onClick={() => this.toggleButton()}
            >
              {expanded
                ? `${translate("SHOW_LESS")}...`
                : `${translate("SHOW_MORE")}...`}
            </ToggleButton>
          </LinkWrapper>
        </Hide>
        <Subcontent>
          <Copyright>{`${translate("COPYRIGHT_FIRST_PART")} ${new Date().getFullYear()} ${translate("COPYRIGHT_LAST_PART")}`}</Copyright>
          <CanAccess userInfo={this.props.userInfo} roles={[CREATE_REGISTRATO]}>
            <Text onClick={() => this.onClickTab("/registrato")}>
              {translate("REGISTRATO")}
            </Text>
          </CanAccess>
          <CanAccess
            userInfo={this.props.userInfo}
            roles={[GET_ACCOUNT_MANAGER]}
          >
            <Text onClick={() => this.openContactModal()}>
              {translate("CONTACT")}
            </Text>
          </CanAccess>
          {isPtBR() ? (
            <Text
              onClick={() => openExternalLink(BOCOM_BBM_FOOTER_COMPLIANCE_BR)}
            >
              {translate("BOCOM_BBM_FOOTER_COMPLIANCE")}
            </Text>
          ) : (
            <Text
              onClick={() => openExternalLink(BOCOM_BBM_FOOTER_COMPLIANCE_US)}
            >
              {translate("BOCOM_BBM_FOOTER_COMPLIANCE")}
            </Text>
          )}
          <CanAccess
            userInfo={this.props.userInfo}
            roles={[GET_CREDIT_PORTFOLIO]}
          >
            <Text
              data-test="creditFooter"
              onClick={() => this.onClickTab("/credit")}
            >
              {translate("CREDIT_PORTABILITY")}
            </Text>
          </CanAccess>
          <CanAccess
            userInfo={this.props.userInfo}
            roles={[GET_PORTABILITIES]}
          >
            <Text
              data-test="investmentsPortabilityFooter"
              onClick={() => this.onClickTab("/investments-portability")}
            >
              {translate("INVESTMENT_PORTABILITY")}
            </Text>
          </CanAccess>
          <Text
            onClick={() =>
              this.clickedToDownload(
                "Termo de Adesão - Internet Banking.pdf",
                translate("CONTRACT_OF_ADHESION")
              )
            }
          >
            {translate("TERMS_OF_USE")}
          </Text>
        </Subcontent>
      </FooterWrapper>
    );
  }
}

Footer.displayName = "Footer";

Footer.propTypes = {
  history: shape({
    push: func
  })
};

export default Footer;
