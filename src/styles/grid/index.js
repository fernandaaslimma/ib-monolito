import React from "react";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";
import { rem } from "../tools";

export const Container = styled(Box)`
  flex: 1;
  margin-left: auto;
  margin-right: auto;
  max-width: ${rem(1182)};
  padding: 0 ${rem(15)};
`;

Container.displayName = "Container";
Container.propTypes = Box.propTypes;

export const Row = props => <Flex {...props} mx={rem(-15)} />;

Row.displayName = "Row";
Row.propTypes = Flex.propTypes;

export const Column = props => <Box {...props} px={0} flex="1 1 auto" />;

Column.displayName = "Column";
Column.propTypes = Box.propTypes;
