import React, { Component } from "react";
import { translate } from "../../utils/i18n";
import { Container } from "../../styles/grid/";

import {
  TermsWrapper,
  Title,
  ListOfDocuments,
  InnerListItem,
  InnerListItemName,
  IconButton
} from "./styles";

import {
  DOWNLOAD_PRODUCT_TERMS_ENDPOINT,
  CUSTODY_CCVM,
  INTERMEDIATION,
  ACCOUNT_AND_ORDER,
  DEBENTURES,
  LCA,
  LCI,
  DIRECT_TREASURE,
  CUSTODY,
  FINANCIAL_BILL_COMMITMENT,
  SECURITIES_CONSULTING_SERVICES_CONTRACT
} from "../../utils/constants";
import { isMobile } from "../../utils/openFile";

class Terms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: []
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

  render() {
    const { loading } = this.props;
    if (!loading) {
      return (
        <TermsWrapper data-test="TermsPage">
          <Container>
            <Title>{translate("TERMS_MAIN_TITLE")}</Title>
            <ListOfDocuments>
              <InnerListItem>
                <IconButton
                  type="Download"
                  width="20"
                  height="20"
                  onClick={() =>
                    this.clickedToDownload(
                      CUSTODY,
                      translate("BOCOM_BBM_ESCROW_CONTRACT")
                    )
                  }
                />
                <InnerListItemName>
                  {translate("BOCOM_BBM_ESCROW_CONTRACT")}
                </InnerListItemName>
              </InnerListItem>
              <InnerListItem>
                <IconButton
                  type="Download"
                  width="20"
                  height="20"
                  onClick={() =>
                    this.clickedToDownload(
                      CUSTODY_CCVM,
                      translate("BOCOM_BBM_ESCROW_CCVM_CONTRACT")
                    )
                  }
                />
                <InnerListItemName>
                  {translate("BOCOM_BBM_ESCROW_CCVM_CONTRACT")}
                </InnerListItemName>
              </InnerListItem>
              <InnerListItem>
                <IconButton
                  type="Download"
                  width="20"
                  height="20"
                  onClick={() =>
                    this.clickedToDownload(
                      INTERMEDIATION,
                      translate("INTERMEDIATION_AGREEMENT")
                    )
                  }
                />
                <InnerListItemName>
                  {translate("INTERMEDIATION_AGREEMENT")}
                </InnerListItemName>
              </InnerListItem>
              <InnerListItem>
                <IconButton
                  type="Download"
                  width="20"
                  height="20"
                  onClick={() =>
                    this.clickedToDownload(
                      ACCOUNT_AND_ORDER,
                      translate("TERM_ACCOUNT_ORDER")
                    )
                  }
                />
                <InnerListItemName>
                  {translate("TERM_ACCOUNT_ORDER")}
                </InnerListItemName>
              </InnerListItem>
              <InnerListItem>
                <IconButton
                  type="Download"
                  width="20"
                  height="20"
                  onClick={() =>
                    this.clickedToDownload(
                      DEBENTURES,
                      translate("DEBENTURES_TERM")
                    )
                  }
                />
                <InnerListItemName>
                  {translate("DEBENTURES_TERM")}
                </InnerListItemName>
              </InnerListItem>
              <InnerListItem>
                <IconButton
                  type="Download"
                  width="20"
                  height="20"
                  onClick={() =>
                    this.clickedToDownload(LCA, translate("LCA_TERM"))
                  }
                />
                <InnerListItemName>{translate("LCA_TERM")}</InnerListItemName>
              </InnerListItem>
              <InnerListItem>
                <IconButton
                  type="Download"
                  width="20"
                  height="20"
                  onClick={() =>
                    this.clickedToDownload(LCI, translate("LCI_TERM"))
                  }
                />
                <InnerListItemName>{translate("LCI_TERM")}</InnerListItemName>
              </InnerListItem>
              <InnerListItem>
                <IconButton
                  type="Download"
                  width="20"
                  height="20"
                  onClick={() =>
                    this.clickedToDownload(
                      DIRECT_TREASURE,
                      translate("DIRECT_TREASURY_TERM")
                    )
                  }
                />
                <InnerListItemName>
                  {translate("DIRECT_TREASURY_TERM")}
                </InnerListItemName>
              </InnerListItem>
              <InnerListItem>
                <IconButton
                  type="Download"
                  width="20"
                  height="20"
                  onClick={() =>
                    this.clickedToDownload(
                      FINANCIAL_BILL_COMMITMENT,
                      translate("FINANCIAL_BILL_COMMITMENT_TERM")
                    )
                  }
                />
                <InnerListItemName>
                  {translate("FINANCIAL_BILL_COMMITMENT_TERM")}
                </InnerListItemName>
              </InnerListItem>
              <InnerListItem>
                <IconButton
                  type="Download"
                  width="20"
                  height="20"
                  onClick={() =>
                    this.clickedToDownload(
                      SECURITIES_CONSULTING_SERVICES_CONTRACT,
                      translate("SECURITIES_CONSULTING_SERVICES_CONTRACT_TERM")
                    )
                  }
                />
                <InnerListItemName>
                  {translate("SECURITIES_CONSULTING_SERVICES_CONTRACT_TERM")}
                </InnerListItemName>
              </InnerListItem>
            </ListOfDocuments>
          </Container>
        </TermsWrapper>
      );
    }
    return null;
  }
}

Terms.defaultProps = {
  state: {
    isEmpty: false
  }
};

export default Terms;
