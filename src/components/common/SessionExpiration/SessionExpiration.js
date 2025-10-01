import React, { Component } from "react";
import { func } from "prop-types";

import TimeExpirationAlert from "../TimeExpirationAlert";
import { TIME_ALERT_POPUP_THRESHOLD } from "../../../utils/constants";
import { translate } from "../../../utils/i18n";
import { hardRedirect } from "../../../utils/redirect";
import { getSessionExpirationTime } from "../../../utils/token";

class SessionExpiration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remaining: Number(getSessionExpirationTime())
    };

    this.timeAlertRef = React.createRef();
  }

  componentDidUpdate() {
    const { remaining } = this.state;
    this.timeAlertRef.current.resetTimer(remaining);
  }

  render() {
    const { updateAccessAndRefreshToken, loading, isConsentFlow } = this.props;
    const { remaining } = this.state;

    return (
      <TimeExpirationAlert
        lockButton={loading}
        timeLeft={remaining}
        threshold={TIME_ALERT_POPUP_THRESHOLD}
        ref={this.timeAlertRef}
        clickAction={updateAccessAndRefreshToken}
        alignment={["top", "right"]}
        expirationAction={() =>
          isConsentFlow
            ? hardRedirect(localStorage.getItem("urlOpenBank"))
            : hardRedirect("/")
        }
        contantLabels={{
          message: translate("ENDING_SESSION"),
          keepConnected: translate("KEEP_CONECTED")
        }}
      />
    );
  }
}

SessionExpiration.propTypes = {
  updateAccessAndRefreshToken: func
};

export default SessionExpiration;
