import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { storiesOf } from "@storybook/react"; // eslint-disable-line
import { withInfo } from "@storybook/addon-info"; // eslint-disable-line

import { Container, Column, Row } from "./index";
import { rem } from "../tools";

const Theme = ({ children }) => (
  <ThemeProvider
    theme={{
      space: [0, rem(5), rem(10), rem(15), rem(20)],
      breakpoints: [32, 48, 64]
    }}
  >
    {children}
  </ThemeProvider>
);

const StyledRow = styled(Row)`
  background: #ffc1c1;

  p {
    background: #e4eff3;
    width: 100%;
    line-height: ${rem(50)};
    text-align: center;
    font-family: "Arial";
    font-weight: bold;
    font-size: 0.8rem;
    text-transform: uppercase;
    margin: ${rem(10)} 0;
  }
`;

StyledRow.displayName = "Row";
StyledRow.propTypes = Row.propTypes;

storiesOf("Grid System", module)
  .add(
    "default",
    withInfo()(() => (
      <Theme>
        <Container my={3}>
          <StyledRow>
            <Column>
              <p>auto</p>
            </Column>
            <Column>
              <p>auto</p>
            </Column>
            <Column>
              <p>auto</p>
            </Column>
          </StyledRow>
        </Container>
      </Theme>
    ))
  )
  .add(
    "with custom width",
    withInfo()(() => (
      <Theme>
        <Container my={3}>
          <StyledRow>
            <Column w={3 / 12}>
              <p>3/12</p>
            </Column>
            <Column w={6 / 12}>
              <p>6/12</p>
            </Column>
            <Column w={3 / 12}>
              <p>3/12</p>
            </Column>
          </StyledRow>
        </Container>
      </Theme>
    ))
  )
  .add(
    "with responsive settings",
    withInfo()(() => (
      <Theme>
        <Container my={3}>
          <StyledRow wrap>
            <Column w={[1, 1 / 2, 8 / 12]}>
              <p>responsive: [1, 1/2, 8/12]</p>
            </Column>
            <Column w={[1, 1 / 2, 4 / 12]}>
              <p>responsive: [1, 1/2, 4/12]</p>
            </Column>
          </StyledRow>
        </Container>
      </Theme>
    ))
  );
