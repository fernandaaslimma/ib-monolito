import styled, { css } from "styled-components";
import { rem, remFontSize } from "../../../../styles/tools";
import { grey190, grey80 } from "../../../../styles/settings";
import Icon from "../../Icon";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid ${rem(2)} ${grey80};
  padding: ${rem(5)} ${rem(10)} ${rem(5)} ${rem(10)};

  ${({ wrapperStyle }) =>
    wrapperStyle &&
    css`
      ${wrapperStyle}
    `}
`;

export const CloseIcon = styled(Icon)`
  position: absolute;
  right: ${rem(20)};
  cursor: pointer;
  color: ${grey190};
`;

export const BackButton = styled.div`
  position: absolute;
  left: ${rem(0)};
`;

export const HeaderTitle = styled.h2`
  font-family: "Lato";
  font-size: ${remFontSize(16)};
  font-weight: 900;
  line-height: ${rem(20)};
  padding: 0 ${rem(30)};
  letter-spacing: ${rem(0.6)};
  color: ${grey190};

  ${({ bottomSheetHeaderStyle }) =>
    bottomSheetHeaderStyle &&
    css`
      font-family: Lato;
      font-style: normal;
      font-weight: bold;
      font-size: ${rem(20)};
      line-height: ${rem(24)};
      /* identical to box height */

      text-align: center;
      letter-spacing: 0.4px;

      color: #003b77;
    `}
`;

export const StyledCloseIcon = styled.section`
  position: absolute;
  right: ${rem(20)};
  cursor: pointer;
  color: ${grey190};
`;
