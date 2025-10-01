import React, { createContext, Fragment } from "react";
import { StepSlider } from "react-bocombbm-components";
import moment from "moment";
import DefaultShimmerLoading from "../../common/DefaultShimmerLoading";
import ErrorBoundary from "../../ErrorBoundary";
import DetailsStep from "./DetailsStep";
import ListStep from "./ListStep";
import ResumeStep from "./ResumeStep";
import CancelStep from "./CancelStep";
import ChangeSharingStep from "./ChangeSharingStep";
import ConfirmStep from "./ConfirmStep";
import RedirectStep from "./RedirectStep";
import { translate } from "../../../utils/i18n";

export const OpenBankingSharesContext = createContext(null);
class Shares extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      selectedTab: 0,
      selectedBank: null,
      endSharingBottomSheet: false,
      changeSharingBottomSheet: false,
      renewSharingBottomSheet: false,
      loadingCurrentShares: true,
      resumeEndSharing: false,
      organisationId: null,
      selectAccountOriginBottomSheet: false,
      selectedInstitutionBottonSheet: false,
      previusStep: null,
      selectDeadLineBottomSheet: false,
      loadingChangeStep: false,
      selectedConsentResources: null,
      selectShareOld: null,
      newConsentCreated: null,
      payloadToNewConsent: null
    };

    this.tagConf = {
      inactive: [
        "#D9E0E4",
        "#244859",
        translate("OPEN_BANKING_TAG_STATUS_INACTVE")
      ],
      expired: [
        "#D9E0E4",
        "#244859",
        translate("OPEN_BANKING_TAG_STATUS_EXPIRED")
      ],
      overdue: [
        "#D9E0E4",
        "#244859",
        translate("OPEN_BANKING_TAG_STATUS_OVERDUE")
      ],
      pending: [
        "#FFD46A",
        "#80521B",
        translate("OPEN_BANKING_TAG_STATUS_PENDING")
      ],
      active: [
        "#CCE9E1",
        "#004933",
        translate("OPEN_BANKING_TAG_STATUS_ACTIVE")
      ]
    };

    this.steps = [
      ListStep,
      DetailsStep,
      ResumeStep,
      CancelStep,
      ChangeSharingStep,
      ConfirmStep,
      RedirectStep
    ];

    this.setSelectedTab = this.setSelectedTab.bind(this);
    this.setSelectedBank = this.setSelectedBank.bind(this);
    this.changeState = this.changeState.bind(this);
    this.formatDate = this.formatDate.bind(this);
    this.capitalized = this.capitalized.bind(this);
    this.corporationConsentStatus = this.corporationConsentStatus.bind(this);
    this.createShare = this.createShare.bind(this);
    this.createRenewPayload = this.createRenewPayload.bind(this);
    this.startRenewConsent = this.startRenewConsent.bind(this);
    this.populateSelectedConsentResources = this.populateSelectedConsentResources.bind(
      this
    );
  }

  async componentDidMount() {
    const {
      getTransmittedCurrentShares,
      getReceivedCurrentShares,
      getInstitutions
    } = this.props;

    await Promise.all([
      getTransmittedCurrentShares(),
      getReceivedCurrentShares(),
      getInstitutions()
    ]);

    this.setState({ loadingCurrentShares: false });
  }

  setSelectedTab(value) {
    this.setState({ selectedTab: value });
  }

  setSelectedBank(value, callback) {
    this.setState({ selectedBank: value });
    callback();
  }

  populateSelectedConsentResources() {
    this.setState({ loadingChangeStep: true });
    let dataPermissionsPayload = [];
    const { resourceGroups, deadlines } = this.state.selectedBank;
    resourceGroups.map(resourceGroup => {
      resourceGroup.dataPermissions.map(dataPermissions => {
        dataPermissionsPayload.push({
          permissionCode: dataPermissions.permissionCode,
          displayName: dataPermissions.displayName
        });
      });
    });

    this.setState({
      selectedConsentResources: {
        dataPermissions: dataPermissionsPayload,
        deadlines
      }
    });
    this.setState({ loadingChangeStep: false });
  }

  async createRenewPayload() {
    const redirectUri =
      window.location.hostname === "localhost"
        ? "https://localhost:8080"
        : `${window.location.origin}/home`;
    const { dataPermissions, deadlines } = this.state.selectedConsentResources;

    const renewPayload = {
      dataPermissions,
      deadLine: deadlines[0],
      redirectUri
    };
    this.setState({ payloadToNewConsent: renewPayload });
  }

  startRenewConsent() {
    const { selectedBank } = this.state;
    this.setState({ loadingChangeStep: true });
    this.setState({ newConsentCreated: selectedBank });
    this.createRenewPayload(selectedBank);
    this.setState({ loadingChangeStep: false });
  }

  changeState(state, value) {
    this.setState({ [state]: value });
  }

  formatDate(date) {
    return moment(date).format("DD/MM/YYYY - HH:mm");
  }

  capitalized(word) {
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }

  corporationConsentStatus() {
    const { userInfo } = this.props;
    if (
      this.state.selectedBank &&
      this.state.selectedBank.approvers &&
      userInfo.tenants[0] === "Corporation"
    ) {
      const checkLoggedUserApprove = this.state.selectedBank.approvers.find(
        item => {
          return (
            item.approverId ===
              this.state.selectedBank.loggedUser.document.identification &&
            item.status === "AUTHORISED"
          );
        }
      );
      return checkLoggedUserApprove;
    } else {
      return false;
    }
  }

  async createShare(
    authorisationServerId,
    organisationId,
    logo,
    name,
    finality,
    finalityId
  ) {
    this.setState({ loadingChangeStep: true });
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
            identification: this.props.userInfo.tenantsMembers[0].document,
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
      newConsentCreated: this.props.consentCreated,
      consentLogo: logo,
      consentName: name,
      loadingChangeStep: false
    });
  }

  render() {
    const { loading } = this.state;
    const { error } = this.props;

    return (
      <ErrorBoundary errorStatus={error}>
        <Fragment>
          {loading ? (
            <DefaultShimmerLoading repeat={4} innerRepeat={2} />
          ) : (
            <OpenBankingSharesContext.Provider value={this}>
              <StepSlider steps={this.steps} />
            </OpenBankingSharesContext.Provider>
          )}
        </Fragment>
      </ErrorBoundary>
    );
  }
}

export default Shares;
