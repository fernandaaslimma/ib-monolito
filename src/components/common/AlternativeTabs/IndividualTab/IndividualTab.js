import React from "react";
import { Container, Title } from "./styles";

const IndividualTab = ({
  tab,
  selected,
  setCurrentTab = () => {},
  dataTest = "individualTab"
}) => {
  return (
    <Container
      data-test={dataTest}
      onClick={() => setCurrentTab()}
      selected={selected}
    >
      {tab && tab.title && (
        <Title data-test="title" selected={selected}>
          {tab.title}
        </Title>
      )}
    </Container>
  );
};

export default IndividualTab;
