import React, { Component } from "react";
import { StepSlider } from "react-bocombbm-components";
import getQueryParam from "../../../utils/getQueryParam";
import { redirect } from "../../../utils/redirect";
import DefaultShimmerLoading from "../../common/DefaultShimmerLoading";
import ErrorBoundary from "../../ErrorBoundary";
import ConclusionStep from "./ConclusionStep";
import ConsentStep from "./ConsentStep";
import RedirectStep from "./RedirectStep";
import ResumeStep from "./ResumeStep";
import CancelStep from "./CancelStep";
import ConfirmationStep from "./ConfirmationStep";
import { translate } from "../../../utils/i18n";
import { checkIfHasAccess } from "../../common/CanAccess/CanAccess";
import { APPROVE_CONSENTS } from "../../../utils/constants";

export const OpenBankingConsentContext = React.createContext(null);

class Consent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectBottonSheetForbidden: false,
      cancelBottomSheet: false,
      consentFromParam: "",
      selectedAccount: null,
      setResource: false,
      cancelFlow: false,
      consentNotPending: false,
      loadingConsentStep: true,
      statusResource: null,
      canApprove: true
    };
    this.steps = [
      ConsentStep,
      ResumeStep,
      RedirectStep,
      ConclusionStep,
      CancelStep
    ];

    this.steps2 = [ConfirmationStep];

    this.tagConf = {
      AWAITING_AUTHORISATION: [
        "#FFD46A",
        "#80521B",
        translate("OPEN_BANKING_TAG_STATUS_PENDING")
      ],
      REJECTED: [
        "#D9E0E4",
        "#244859",
        translate("OPEN_BANKING_TAG_STATUS_REJECTED")
      ],
      AUTHORISED: [
        "#CCE9E1",
        "#004933",
        translate("OPEN_BANKING_TAG_STATUS_AUTHORIZED")
      ]
    };

    this.changeState = this.changeState.bind(this);
    this.saveResources = this.saveResources.bind(this);
    this.chengeStatusResource = this.chengeStatusResource.bind(this);
    this.findResource = this.findResource.bind(this);
    this.isApplicant = this.isApplicant.bind(this);
    this.corporationConsentStatus = this.corporationConsentStatus.bind(this);
    this.checkStatusApplicant = this.checkStatusApplicant.bind(this);
    this.consolidatedConsent = this.consolidatedConsent.bind(this);
  }

  changeState(state, value) {
    this.setState({ [state]: value });
  }

  selectAllOptions() {
    const { consentInfo } = this.props;
    let modificatedResources = [];
    consentInfo &&
      consentInfo.resourceGroups.map(item => {
        item.resources &&
          item.resources.map(resource => {
            modificatedResources.push({
              resourceId: resource.resourceId,
              type: item.type,
              status: true
            });
          });
      });
    this.setState({
      statusResource: modificatedResources,
      clientResources: modificatedResources
    });
  }

  saveResources() {
    this.props.consentInfo &&
      this.props.consentInfo.resourceGroups.map(item => {
        item.resources &&
          item.resources.map(resource => {
            this.setState({
              [resource.resourceId]: {
                resourceId: resource.resourceId,
                type: item.type,
                status: true
              }
            });
            this.setState({
              setResource: true
            });
          });
      });
  }

  findResource(id) {
    return this.state[id].status;
  }

  chengeStatusResource(id) {
    if (this.state[id].status === false) {
      this.setState({
        [id]: {
          ...this.state[id],
          status: true
        }
      });
    } else {
      this.setState({
        [id]: {
          ...this.state[id],
          status: false
        }
      });
    }
  }

  isApplicant() {
    const { document } = this.props.userInfo;
    const {
      loggedUser: {
        document: { identification }
      }
    } = this.props.consentInfo;

    return document === identification;
  }

  corporationConsentStatus(confirmConsent = false) {
    const { consentInfo, confirmConsentResponse, userInfo } = this.props;
    const { document } = userInfo;
    if (confirmConsent) {
      if (confirmConsentResponse && userInfo.tenants[0] === "Corporation") {
        const checkLoggedUserApprove = confirmConsentResponse.approvers.find(
          item => {
            const documentApprover = item.approverId.substring(
              item.approverId.indexOf("@") + 1
            );
            const documentId = documentApprover.substring(
              documentApprover.indexOf("@") + 1
            );
            return (
              item.status !== "AWAITING_AUTHORISATION" &&
              documentId === document
            );
          }
        );
        return checkLoggedUserApprove;
      } else {
        return false;
      }
    } else {
      if (consentInfo && userInfo.tenants[0] === "Corporation") {
        const checkLoggedUserApprove = consentInfo.approvers.find(item => {
          const documentApprover = item.approverId.substring(
            item.approverId.indexOf("@") + 1
          );
          const documentId = documentApprover.substring(
            documentApprover.indexOf("@") + 1
          );
          return (
            item.status !== "AWAITING_AUTHORISATION" && documentId === document
          );
        });
        return checkLoggedUserApprove;
      } else {
        return false;
      }
    }
  }

  componentWillMount() {
    const consentId = getQueryParam(location, "intent_id");

    if (consentId) {
      this.setState({ consentFromParam: consentId });
    }
  }

  async componentDidMount() {
    const { userInfo } = this.props;
    if (checkIfHasAccess(userInfo, [APPROVE_CONSENTS])) {
      const { consentFromParam } = this.state;
      const { setConsentId, emptyRedirectUri } = this.props;

      if (consentFromParam.length > 0) {
        await setConsentId(consentFromParam);
        emptyRedirectUri();
      }

      const {
        openBankingReceivedInfo: { intent_id },
        isConsentFlowConfirmation,
        isConsentFlowCancel
      } = this.props;

      // const openBankingReceivedInfo = JSON.parse(localStorage.getItem("openBankingReceivedInfo"));

      isConsentFlowConfirmation && (await this.consolidatedConsent());
      await Promise.all([
        intent_id &&
          !(isConsentFlowConfirmation || isConsentFlowCancel) &&
          (await this.props.getConsentInfo(intent_id)),
        this.props.consentInfo &&
          (await this.props.getSpecificOrganization(
            this.props.consentInfo.organisationId
          ))
      ]);

      this.selectAllOptions();

      if (this.props.consentInfoError) {
        this.setState({ selectBottonSheetForbidden: true });
      } else {
        if (
          (this.props.consentInfo &&
            this.props.consentInfo.status !== "PENDING" &&
            !isConsentFlowConfirmation) ||
          (this.corporationConsentStatus() && !isConsentFlowConfirmation)
        ) {
          this.setState({ selectBottonSheetForbidden: true });
        } else {
          this.setState({ consentNotPending: true });
        }
      }
      this.saveResources();
    } else {
      this.setState({ canApprove: false });
    }
  }

  checkStatusApplicant() {
    const { userInfo } = this.props;
    if (this.props.consentInfo && userInfo.tenants[0] === "Corporation") {
      const checkLoggedUserApprove = this.props.consentInfo.approvers.find(
        item => {
          return (
            item.approverId ===
              this.props.consentInfo.loggedUser.document.identification &&
            item.status === "AUTHORISED"
          );
        }
      );
      return checkLoggedUserApprove;
    } else {
      return false;
    }
  }

  async consolidatedConsent() {
    const { state, code } = this.props.openBankingReceivedInfoConfirmation;
    if (!this.props.isConsentFlowCancel) {
      await this.props.confirmConsent({
        authorizationCode: code,
        requestId: state
      });
    } else {
      // const stateTppConsent = JSON.parse(localStorage.getItem("consentIdTpp"));
      // if (state === stateTppConsent.state) {
      //   // ESCOPO PARA QUANDO FOR POSSÍVEL CANCELAR O CONSENTIMENTO DEPOIS DE FAZER O GET E PEGAR O SHARE ID
      //   // await getReceivedCurrentSharesSpecific(stateTppConsent.consentId);
      //   // console.log(receivedCurrentSharesSpecific);
      //   // await rejectConsentReceived(receivedCurrentSharesSpecific.shareId);
      // } else {
      this.setState({ loadingConsentStep: false });
      // }
    }
  }

  render() {
    const { loading, consentFromParam } = this.state;
    const {
      isConsentFlow,
      isConsentFlowConfirmation,
      isConsentFlowCancel,
      error
    } = this.props;

    return (
      <ErrorBoundary errorStatus={error}>
        <React.Fragment>
          {isConsentFlow ||
          consentFromParam ||
          isConsentFlowConfirmation ||
          isConsentFlowCancel ? (
            loading ? (
              <DefaultShimmerLoading repeat={4} innerRepeat={2} />
            ) : (
              <OpenBankingConsentContext.Provider value={this}>
                <StepSlider
                  steps={
                    isConsentFlowConfirmation || isConsentFlowCancel
                      ? this.steps2
                      : this.steps
                  }
                />
              </OpenBankingConsentContext.Provider>
            )
          ) : (
            redirect("/open-banking/my-shares")
          )}
        </React.Fragment>
      </ErrorBoundary>
    );
  }
}

export default Consent;
