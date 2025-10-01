import React from "react";
import { connect } from "redux-zero/react";

import Maintenance from "../Maintenance";
import actions from "../../../actions/status";

const withMaintenanceMode = PassedComponent => {
  class Wrapped extends React.Component {
    componentWillUnmount() {
      this.props.resetMaintenance();
    }

    render() {
      if (this.props.isMaintenance) {
        return <Maintenance />;
      }
      return <PassedComponent {...this.props} />;
    }
  }

  return connect(
    ({ isMaintenance }) => ({ isMaintenance }),
    actions
  )(Wrapped);
};

export default withMaintenanceMode;
