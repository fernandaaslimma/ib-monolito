import React, { Component } from "react";
import { string, number, shape, arrayOf, bool } from "prop-types";

import SetListNameGroups from "./SetListNameGroups";
import GetUserSigned from "./GetUserSigned";
import { DataItemWrapper } from "./styles";
import { UP } from "../../../utils/constants";
import Hide from "../../common/Hide";
import { isThereAnySigned } from "../../../utils/exchanges";
import Tooltip from "../../common/Tooltip";

class NameItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tooltip: ""
    };

    this.toggleTooltip = this.toggleTooltip.bind(this);
  }

  toggleTooltip(recipients) {
    if (recipients && recipients.length > 3) {
      this.setState({ tooltip: recipients });
    } else {
      this.setState({ tooltip: "" });
    }
  }

  render() {
    const { data, groups } = this.props;
    const { tooltip } = this.state;
    return (
      <DataItemWrapper isEmpty>
        {isThereAnySigned(data.recipients) ? (
          <GetUserSigned recipients={data.recipients} />
        ) : (
          <SetListNameGroups
            recipients={data.recipients}
            groups={groups}
            group={data}
          />
        )}
        {tooltip && (
          <Hide below="md">
            <Tooltip position={UP}>{tooltip}</Tooltip>
          </Hide>
        )}
      </DataItemWrapper>
    );
  }
}

NameItem.defaultProps = {
  data: null
};

NameItem.propTypes = {
  data: shape({
    id: string,
    name: string,
    recipients: arrayOf(
      shape({
        email: string,
        embedded: bool,
        name: string,
        status: string,
        type: string
      })
    ),
    signOrder: number,
    status: string
  })
};

export default NameItem;
