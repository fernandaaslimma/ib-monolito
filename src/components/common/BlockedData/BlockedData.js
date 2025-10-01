import React from "react";
import { Container, Title } from "./styles";
import Icon from "../Icon";
import { negative200 } from "../../../styles/settings";
import { translate } from "../../../utils/i18n";

const BlockedData = () => {
  return (
    <Container>
      <Icon iconColor={negative200} type="Failed" />
      <Title>{translate("BLOCKED_STATEMENT_DATA")}</Title>
    </Container>
  );
};

export default BlockedData;
