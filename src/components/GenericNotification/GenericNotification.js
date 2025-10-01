import React, { Component, Fragment } from "react";
import { Container } from "../../styles/grid";
import { redirect } from "../../utils/redirect";
import { MODAL_TYPES } from "../common/Modal/Modal";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import NotificationModal from "./NotificationModal";

class GenericNotification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      isExiting: false,
      notificationState: { id: "" },
      termsApproved: false
    };
    this.changeState = this.changeState.bind(this);
    this.onClickClose = this.onClickClose.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.openModalApproveConsent = this.openModalApproveConsent.bind(this);
    this.navigatedTo = this.navigatedTo.bind(this);
  }

  async componentDidMount() {
    const { notificated, setNotificationStatus, notification } = this.props;

    let notificationInfo;
    if (notification && notification.length > 0) {
      notificationInfo = notification.find(noti => {
        if (
          noti.id &&
          !notificated[`${noti.id}`] &&
          noti.type === "navigateTo"
        ) {
          return noti;
        }
      });

      if (notificationInfo && notificationInfo.parameters) {
        this.setState({
          notificationState: notificationInfo
        });
        setTimeout(() => {
          this.openModalApproveConsent();
        }, 0);
      } else {
        setNotificationStatus(`${notificationInfo?.id}`);

        redirect("/home");
      }
    } else {
      setNotificationStatus(`${notification?.id}`);

      redirect("/home");
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.isExiting !== this.state.isExiting) {
      this.openModalApproveConsent();
    }
  }

  navigatedTo(url) {
    const { notificationState } = this.state;
    const { setNotificationStatus, closeModal } = this.props;
    closeModal();
    setNotificationStatus(`${notificationState.id}`);
    redirect(url);
  }

  changeState(object) {
    this.setState(object);
  }

  handleClose() {
    const { notificationState } = this.state;
    const { setNotificationStatus, closeModal } = this.props;
    closeModal();
    setNotificationStatus(`${notificationState.id}`);
    redirect("/home");
  }

  onClickClose() {
    if (this.state.isExiting) {
      this.setState({ isExiting: false });
    } else {
      this.setState({ isExiting: true });
    }
  }

  openModalApproveConsent() {
    const { isExiting, notificationState } = this.state;
    this.props.openModal({
      type: MODAL_TYPES.PAGE_AS_MODAL,
      width: "auto",
      children: () => {
        return (
          <Fragment>
            <NotificationModal
              isExiting={isExiting}
              onClickClose={this.onClickClose}
              notification={notificationState}
              navigatedTo={this.navigatedTo}
              handleClose={this.handleClose}
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
export default GenericNotification;
