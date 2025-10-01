import React from "react";
import { Icon } from "react-bocombbm-components";
import { Container, Text, Title } from "./styles";
import { black30 } from "../../../styles/settings";
import { rem } from "../../../styles/tools";

const NoContent = ({ title = "", text = "", icon = "", dataTest = 'NoContent' }) => {
  return (
    <Container data-test={dataTest}>
      {icon && (
        <Icon
          dataTest="icon"
          type="NoTransactions"
          color={black30}
          height={rem(66)}
          width={rem(66)}
        />
      )}
      {title && <Title data-test="title">{title}</Title>}
      {text && <Text data-test="text">{text}</Text>}
    </Container>
  );
};

export default NoContent;
