import React from "react";
import styled, { css } from "styled-components";
import { Flex, Box } from "grid-styled";
import { rem, media } from "../tools";

export const Container = styled(Box)`
  flex: 1;
  margin-left: auto;
  margin-right: auto;
  max-width: ${rem(670)};
  padding: 0 ${rem(15)};

  ${media.md(css`
    max-width: ${rem(981)};
  `)};

  ${media.lg(css`
    max-width: ${rem(1182)};
  `)};
`;

Container.displayName = "Container";
Container.propTypes = Box.propTypes;

export const Row = props => <Flex {...props} mx={rem(-15)} />;

Row.displayName = "Row";
Row.propTypes = Flex.propTypes;

export const Column = props => <Box {...props} px={0} flex="1 1 auto" />;

Column.displayName = "Column";
Column.propTypes = Box.propTypes;
