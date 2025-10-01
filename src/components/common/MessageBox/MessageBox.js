import React from "react";
import { Container, Message } from "./styles";
import Icon from "../Icon";
import { warning400 } from "../../../styles/settings";

const MessageBox = ({ message = "", dataTest = "messageBox" }) => {
  return (
    <Container data-test={dataTest}>
      <Icon
        type="WaitingWarning"
        iconColor={warning400}
        dataTest="messageIcon"
      />
      {message && <Message data-test="message">{message}</Message>}
    </Container>
  );
};

export default MessageBox;
