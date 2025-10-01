import styled, { css } from "styled-components";
import { rem, media } from "../../../styles/tools";
import { gray90, grey190, lighestgrey, white } from "../../../styles/settings";
import Icon from "../../common/Icon";

export const CloseIcon = styled(Icon)`
  position: absolute;
  right: ${rem(20)};
  top: ${rem(15)};
  cursor: pointer;
  color: ${grey190};
`;

export const Token = styled.div`
  margin: auto auto ${rem(16)} auto;
  ${media.md(css`
    margin: auto auto ${rem(16)} auto;
  `)};
`;

export const StickyWrapper = styled.div`
  overflow: auto;
  position: sticky;
  bottom: 0;
  background: ${white};
  display: flex;
  max-width: ${rem(600)};
  margin: 0 auto;
`;

export const BtnWrapper = styled.div`
  flex-grow: 1;
  position: relative;
  flex-basis: 0;
  display: flex;

  > div {
    flex-grow: 1;
    flex-basis: 0;
  }
`;

export const Separator = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${rem(1)};
  background: ${lighestgrey};
`;

export const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  padding: ${rem(8)};
  margin: 0 auto;
`;

export const BorderedWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: ${rem(1)} solid ${gray90};
  box-sizing: border-box;
  border-radius: ${rem(6)};
  align-items: center;
  align-content: center;
  margin: ${rem(16)} ${rem(8)} ${rem(32)} ${rem(8)};
  cursor: pointer;
`;

export const PrioritySelectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${rem(8)} ${rem(3)} 0;
`;

export const RadioWrapper = styled.div`
  margin-top: ${rem(6)};
`;

export const Space = styled.span`
  display: block;
  margin: ${rem(6)} ${rem(8)};
  position: relative;
`;
