import React from "react";
import ErrorProccess from "./ErrorProccess";
import { redirect } from "../../utils/redirect";
import createLogError from "../../utils/createLogError";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
    this.goHome = this.goHome.bind(this);
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidCatch(error, info) {
    this.setState({
      error: error,
      info
    });
    error && createLogError(error);
  }

  componentDidUpdate(prevProps, prevState) {
    //trigger modal wrapper close when exist
    if (prevProps.errorStatus !== this.props.errorStatus) {
      prevProps.closeModal && prevProps.closeModal();
    }
    if (
      prevProps.errorStatus !== this.props.errorStatus &&
      this.props.errorStatus &&
      this.props.errorStatus.typeError !== "Offline"
    ) {
      createLogError(this.props.errorStatus);
    }
    if (prevState.error !== this.state.error && prevState.error) {
      createLogError(this.state.error);
    }
  }

  goHome(goPath) {
    if (this.props.isMfaError) this.props.handleClose();

    goPath ? redirect(goPath) : redirect("/home");
  }

  render() {
    const receivedError = this.state.error || this.props.errorStatus;

    if (receivedError) {
      return <ErrorProccess {...this.props} goHome={this.goHome} />;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
