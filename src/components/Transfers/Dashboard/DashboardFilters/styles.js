import styled, { css } from "styled-components";
import { rem, media } from "../../../../styles/tools";
import { grey70 } from "../../../../styles/settings";

export const Label = styled.label`
  color: ${grey70};
  padding: 0 ${rem(15)};
`;

export const FormItem = styled.div`
  padding: 0 ${rem(15)};
  align-items: center;
  display: flex;
  min-width: 100%;
  margin: ${rem(5)} 0;

  ${media.md(css`
    min-width: auto;
    flex-grow: 1;
    max-width: 50%;
    margin: 0;
  `)};
`;
