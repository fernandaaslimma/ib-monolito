import React, { Component } from "react";
import { func } from "prop-types";

import { translate } from "../../../utils/i18n";
import { DOCUSIGN_SUCCESS_REDIRECT_QUERY_PARAMS } from "../../../utils/constants";
import { lightGreen } from "../../../styles/settings";
import Icon from "../Icon";
import DefaultContent from "../DefaultContent";
import { markAsSigned } from "../../../services/contracts";
import getQueryParam from "../../../utils/getQueryParam";

class SignConfirmation extends Component {
  componentWillMount() {
    this.props.resetContracts();
  }

  render() {
    const { location } = this.props;

    const eventParam = getQueryParam(location, "event");
    const contractIdParam = getQueryParam(location, "contractId");

    if (
      eventParam === DOCUSIGN_SUCCESS_REDIRECT_QUERY_PARAMS &&
      contractIdParam
    ) {
      markAsSigned(contractIdParam);
    }

    return (
      <DefaultContent
        data-test="SignConfirmation"
        Icon={() => <Icon type="Document" color={lightGreen} />}
        primaryText={translate("THE_CONTRACT_WAS_SIGNED")}
      />
    );
  }
}

SignConfirmation.propTypes = {
  resetContracts: func.isRequired
};

export default SignConfirmation;
