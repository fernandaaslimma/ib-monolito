import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react"; // eslint-disable-line
import { withInfo } from "@storybook/addon-info"; // eslint-disable-line

import Icon, { icons } from "./index";

const iconKeys = Object.keys(icons);

const IconContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  li {
    height: 100px;
    width: 100px;
    background: #eee;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;

    > span {
      font-family: Roboto;
      margin-top: 5px;
      font-size: 12px;
    }
  }
`;

storiesOf("common/Icon", module)
  .add(
    "default",
    withInfo()(() => (
      <IconContainer>
        {iconKeys.map(icon => (
          <li key={icon}>
            <Icon type={icon} width="30" height="30" />
            <span>{icon}</span>
          </li>
        ))}
      </IconContainer>
    ))
  )
  .add(
    "with color",
    withInfo()(() => (
      <IconContainer>
        {iconKeys.map(icon => (
          <li key={icon}>
            <Icon type={icon} width="30" height="30" color="#cc0000" />
            <span>{icon}</span>
          </li>
        ))}
      </IconContainer>
    ))
  );
