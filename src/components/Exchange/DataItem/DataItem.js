import React from "react";
import { string, number, oneOfType, bool, element, array } from "prop-types";
import Icon from "../../common/Icon";

import { Title, Data, DataItemWrapper, IconContainer } from "./styles";
import { EMPTY_CHARACTER } from "../../../utils/constants";

function DataItem({ title, data, icon, iconColor, status, waitingBox }) {
  return (
    <DataItemWrapper isEmpty={!data} status={status} waitingBox={waitingBox}>
      <Title>
        {icon && (
          <IconContainer>
            <Icon type={icon} color={iconColor} />
          </IconContainer>
        )}
        {title && title}
      </Title>
      <Data status={status}>{data || EMPTY_CHARACTER}</Data>
    </DataItemWrapper>
  );
}

DataItem.defaultProps = {
  title: null,
  data: null,
  icon: null
};

DataItem.propTypes = {
  title: string,
  data: oneOfType([string, number, element, array]),
  icon: string,
  status: string,
  waitingBox: bool
};

export default DataItem;
