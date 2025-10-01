import styled, { css, keyframes } from "styled-components";
import { negative_light } from "../Common/styles/colors";
import { darkBlue } from "../../../styles/settings";
import { rem, remFontSize, media } from "../Common/styles/tools";
import Spacing from "../Common/styles/spacing";
import { animationFadeIn as animationToolsFadeIn } from "../../../styles/tools/animation";

const fileLineHeight = rem(40);

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fileHeightUp = keyframes`
  from {
    height: 0;
  }
  to {
    height: ${fileLineHeight};
  }
`;

const fileHeightDown = keyframes`
  0% {
    height: ${fileLineHeight};
  }
  100% {
    height: 0;
  }
`;

export const Wrapper = styled.div`
  ${({ spacing }) => Spacing(spacing)}
  font-family: "Lato";
  font-size: ${remFontSize(13)};
`;

export const animationFadeIn = css`
  animation: ${fadeIn} 0.3s linear;
`;

export const DropFilesWrapper = styled.div`
  border-radius: ${rem(4)};
  border: dashed ${rem(2)} #d3dde4;
  text-align: center;
  transition: transform 0.5s;
  background: white;
  margin-bottom: ${rem(24)};

  ${({ onDragFile, rejectDragFile, calledAPI, statusCalledApi }) =>
    onDragFile &&
    !rejectDragFile &&
    !calledAPI &&
    !statusCalledApi &&
    css`
      border-color: #4a90e2;
      transform: scale(1.01);
      transition: transform 0.2s;
    `};

  &:focus {
    outline: unset;
  }
`;

export const SelecFileWrapper = styled.div`
  ${animationFadeIn}
  display: flex;
  flex-direction: column;
  height: ${rem(112)};
  align-items: center;
  justify-content: center;

  ${media.md(css`
    flex-direction: row;
  `)};
`;

export const ButtonWrapper = styled.div`
  margin: 0 0 0 0;

  @media (max-width: 991px) {
    margin: ${rem(10)} 0 0 0;
  }
`;

export const Text = styled.p`
  font-family: "Lato";
  color: #27445f;
  margin: 0 ${rem(5)} 0 ${rem(5)};
  font-size: ${remFontSize(13)}
    ${({ warn }) =>
      warn &&
      css`
        color: ${negative_light};
        margin: ${rem(12)} ${rem(5)} ${rem(16)} ${rem(5)};
      `};
`;

export const FilesList = styled.ul`
  list-style: none;
  margin: 0 0 ${rem(24)} 0;
  padding: 0;

  ${({ warn }) =>
    warn &&
    css`
      border: solid ${rem(1)} ${negative_light};

      ${File} {
        color: ${negative_light};
      }
    `};

  &:empty {
    border: none;
  }
`;

export const File = styled.li`
  background: white;
  padding: 0 0 0 ${rem(20)};
  margin: 0 0 ${rem(5)} 0;
  border: solid ${rem(1)} #d3dde4;
  color: #4e768f;
  display: flex;
  align-items: center;
  overflow: hidden;
  height: ${fileLineHeight};

  ${({ animateHeight }) =>
    animateHeight &&
    css`
      animation: ${fileHeightUp} 0.2s linear forwards;
    `};

  ${({ isRemoving }) =>
    isRemoving &&
    css`
      animation: ${fileHeightDown} 0.17s linear;
    `};
`;

export const Remove = styled.button`
  border: none;
  background: none;
  color: inherit;
  cursor: pointer;
  height: 100%;
  margin-left: auto;
  padding: 0 ${rem(14)};

  &:focus {
    outline: none;
  }
`;

const valid = ({ isValid, pristine }) =>
  !isValid &&
  !pristine &&
  css`
    color: ${negative_light};
  `;

export const Title = styled.h2`
  font-family: Lato;
  color: #2c4d6a;
  display: flex;
  align-items: center;
  font-size: ${rem(24)};
  line-height: ${rem(28.8)};
  margin: 0 0 ${rem(8)} 0;
  letter-spacing: ${rem(0.4)};
  font-weight: 700;

  ${valid};
`;

export const Message = styled.p`
  margin: 0 0 ${rem(24)} 0;
  color: #27445f;
  line-height: 16px;
  letter-spacing: ${rem(0.3575)};
  font-size: ${rem(13)};
  font-weight: 400;
  font-style: normal;

  ${valid}
`;

export const LoadingBarContainer = styled.div`
  margin: 0 0 ${rem(24)} 0;
`;

export const ProgressWrapper = styled.div`
  ${animationToolsFadeIn}
  display: block;
  height: fit-content;
  margin: auto;
`;

export const ProgressBarTextWrapper = styled.div`
  display: flex;
  width: fit-content;
  margin: 0 auto;
  line-height: 40px;
`;

export const TextParagraphGray = styled.p`
  color: #939598;
  margin-left: ${props => (props.marginLeft ? props.marginLeft : "0")}px;
  margin-right: ${props => (props.marginRight ? props.marginRight : "0")}px;
`;

export const TextParagraphBlue = styled.p`
  color: ${darkBlue};
`;

export const PercentageWrapper = styled.div`
  font-size: 22px;
  color: ${darkBlue};
  line-height: 40px;
`;
