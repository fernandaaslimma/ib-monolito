import React, { Fragment } from "react";
import { TabsWrapper, Title, Line } from "./styles";

const Tab = ({ title }) => {
  return (
    <Fragment>
      <TabsWrapper>
        <Title>{title}</Title>
        <Line />
      </TabsWrapper>
    </Fragment>
  );
};

export default Tab;
