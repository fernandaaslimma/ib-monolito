import React, { Component } from "react";
import { StepSlider } from "react-bocombbm-components";
import DefaultShimmerLoading from "../../common/DefaultShimmerLoading";
import ErrorBoundary from "../../ErrorBoundary";
import NewConsentStep from "./NewConsentStep";
import DetailsStep from "./DetailsStep";
import ResumeStep from "./ResumeStep";
import RedirectStep from "./RedirectStep";

export const OpenBankingNewConsentContext = React.createContext(null);

class NewConsent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectBottonSheetForbidden: false,
      loading: false,
      selectAccountOriginBottomSheet: false,
      selectedInstitutionBottonSheet: false,
      selectDataBottomSheet: false,
      selectDeadLineBottomSheet: false,
      selectAccountCNPJBottomSheet: false,
      selectedDeadLine: {
        total: null
      },
      selectFinalDeadLine: {
        total: null
      },
      loadingNewConsentStep: false,
      selectCNPJ: "",
      selectFinalCNPJ: ""
    };
    this.steps = [NewConsentStep, DetailsStep, ResumeStep, RedirectStep];

    this.changeState = this.changeState.bind(this);
    this.getInstituion = this.getInstituion.bind(this);
    this.createShare = this.createShare.bind(this);
  }

  changeState(state, value) {
    this.setState({ [state]: value });
  }

  async componentDidMount() {
    await this.props.getInstitutions();
    await this.props.getDataPermissions();
  }

  async createShare(
    authorisationServerId,
    organisationId,
    logo,
    name,
    finality,
    finalityId,
    selectCNPJ
  ) {
    this.setState({ loadingNewConsentStep: true });
    let payload = {};
    if (this.props.userInfo.tenants[0] === "Corporation") {
      payload = {
        additionalInfos: [
          {
            key: "INTERNAL_ID",
            value: "1"
          }
        ],
        authorisationServer: {
          authorisationServerId: authorisationServerId,
          organisationId: organisationId
        },
        businessEntity: {
          document: {
            identification: selectCNPJ,
            rel: "CNPJ"
          }
        },
        finality: {
          finalityId: finalityId,
          displayName: finality
        },
        loggedUser: {
          document: {
            identification: this.props.userInfo.document,
            rel: "CPF"
          }
        }
      };
    } else {
      payload = {
        additionalInfos: [
          {
            key: "INTERNAL_ID",
            value: "1"
          }
        ],
        authorisationServer: {
          authorisationServerId: authorisationServerId,
          organisationId: organisationId
        },
        finality: {
          finalityId: finalityId,
          displayName: finality
        },
        loggedUser: {
          document: {
            identification: this.props.userInfo.document,
            rel: "CPF"
          }
        }
      };
    }
    await this.props.createShare(payload);
    this.setState({
      consentCreated: this.props.consentCreated,
      consentLogo: logo,
      consentName: name,
      loadingNewConsentStep: false
    });
  }

  async getInstituion(organizationId) {
    this.setState({ loadingNewConsentStep: true });
    await this.props.getSpecificOrganization(organizationId);
    this.setState({ loadingNewConsentStep: false });
  }

  render() {
    const { loading } = this.state;
    const { error } = this.props;

    return (
      <ErrorBoundary errorStatus={error}>
        <React.Fragment>
          {loading ? (
            <DefaultShimmerLoading repeat={4} innerRepeat={2} />
          ) : (
            <OpenBankingNewConsentContext.Provider value={this}>
              <StepSlider steps={this.steps} />
            </OpenBankingNewConsentContext.Provider>
          )}
        </React.Fragment>
      </ErrorBoundary>
    );
  }
}

export default NewConsent;
