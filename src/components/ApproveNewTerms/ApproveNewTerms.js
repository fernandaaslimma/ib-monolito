import React, { Component, Fragment } from "react";
import { Container } from "../../styles/grid";
import { APPROVE_TERMS_TYPE } from "../../utils/constants";
import { translate } from "../../utils/i18n";
import { isMobile } from "../../utils/openFile";
import { redirect } from "../../utils/redirect";
import { getTermName } from "../../utils/getTermNameInUrl";
import ExitConfirmation from "../common/ExitConfirmation";
import { MODAL_TYPES } from "../common/Modal/Modal";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import ApproveTermsModal from "./ApproveTermsModal";
import { Wrapper } from "./ApproveTermsModal/styles";
class ApproveNewTerms extends Component {
  constructor(props) {
    super(props);
    this.openModalTerms = this.openModalTerms.bind(this);
    this.state = {
      checked: false,
      isExiting: false,
      notificationState: {},
      termsApproved: false
    };
    this.renderExitConfirmation = this.renderExitConfirmation.bind(this);
    this.onClickClose = this.onClickClose.bind(this);
    this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
    this.acceptTerms = this.acceptTerms.bind(this);
    this.viewTerms = this.viewTerms.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  async componentDidMount() {
    const { notification, notificatedId } = this.props;
    if (notification && notification.length > 0) {
      const notificationTerms = notification.find(x => x.type === APPROVE_TERMS_TYPE && x.parameters.
        find(y => y.type == "termId")?.id === notificatedId);

      if (notificationTerms && notificationTerms.parameters) {
        this.setState({
          notificationState: notificationTerms
        });
        setTimeout(() => {
          this.openModalTerms();
        }, 0);
      } else {
        redirect("/investments/overview");
      }
    } else {
      redirect("/investments/overview");
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.checked !== this.state.checked ||
      prevState.termsApproved !== this.state.termsApproved ||
      prevState.isExiting !== this.state.isExiting ||
      prevProps.notification !== this.props.notification
    ) {
      this.openModalTerms();
    }
  }
  renderExitConfirmation(termsInfo) {
    return (
      <Wrapper paddingLeft={64} paddingRight={64}>
        <ExitConfirmation
          onClickExit={() => this.handleClose(termsInfo)}
          onClickCancel={() => this.setState({ isExiting: false })}
          message={translate("DID_NOT_ACCEPT_TERMS")}
          padding={90}
        />
      </Wrapper>
    );
  }
  handleClose(termsInfo) {
    const { setNotificationStatus, closeModal } = this.props;
    closeModal();
    setNotificationStatus(`${APPROVE_TERMS_TYPE}${termsInfo?.find(element => element?.type === "termId")?.id}`);
    redirect("/home");
  }
  onClickClose() {
    if (this.state.isExiting) {
      this.setState({ isExiting: false });
    } else {
      this.props.closeToastr();
      this.setState({ isExiting: true });
    }
  }
  handleChangeCheckbox(e) {
    this.setState({
      checked: e.target.checked
    });
  }
  async acceptTerms(termsInfo, accept) {
    const {
      openToastr,
      closeModal,
      setNotificationStatus,
      approveNewTerms,
      closeToastr,
      enableToastrTimeout,
      cancelToastrTimeout
    } = this.props;
    let idPath = termsInfo.find(element => element.type === "termId");
    let body = {
      termId: idPath.id,
      accepted: accept
    };
    this.setState({
      termsApproved: true
    });
    try {
      await approveNewTerms(body);

      setNotificationStatus(`${APPROVE_TERMS_TYPE}${idPath?.id}`);
      closeToastr();
      enableToastrTimeout();
      openToastr({
        text: accept ? translate("TOASTR_ACCEPTED_NEW_TERMS") : translate("TOASTR_REJECT_NEW_TERMS"),
        isBelow: false,
        isTop: true,
        timeout: 3000
      });
      setTimeout(() => {
        closeModal();
        redirect("/home");
      }, 3000);
    } catch (error) {
      this.setState({
        termsApproved: false
      });
      closeToastr();
      cancelToastrTimeout();
      openToastr({
        text: translate("TOASTR_ERROR_ACCEPTED_NEW_TERMS"),
        isBelow: false,
        isTop: true,
        error: true,
        timeout: 600000
      });
    }
  }

  async viewTerms(urlFile) {
    if (isMobile()) {
      const { term, urlTermName } = getTermName(urlFile);
      await this.props.downloadTerms(term, urlTermName);
    } else {
      const link = document.createElement("a");
      document.body.appendChild(link);
      link.href = urlFile;
      link.download = translate("CONTRACT_OF_ADHESION");
      link.target = "_blank";
      link.click();

      setTimeout(link.remove(), 100);

      return link;
    }
  }

  openModalTerms() {
    const { checked, isExiting, notificationState, termsApproved } = this.state;
    this.props.openModal({
      type: MODAL_TYPES.PAGE_AS_MODAL,
      width: "auto",
      children: () => {
        return (
          <Fragment>
            <ApproveTermsModal
              checked={checked}
              isExiting={isExiting}
              renderExitConfirmation={this.renderExitConfirmation}
              onClickClose={this.onClickClose}
              handleChangeCheckbox={this.handleChangeCheckbox}
              acceptTerms={this.acceptTerms}
              viewTerms={this.viewTerms}
              notification={notificationState}
              termsApproved={termsApproved}
            />
          </Fragment>
        );
      }
    });
  }
  render() {
    const { error } = this.props;
    return (
      <ErrorBoundary errorStatus={error} {...this.props}>
        <Container />
      </ErrorBoundary>
    );
  }
}
export default ApproveNewTerms;
