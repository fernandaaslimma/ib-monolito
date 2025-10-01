import styled, { css } from "styled-components";
import { media, rem } from "../../../styles/tools";
import { CheckboxSpan } from "../../common/Checkbox/styles";
import { grey70, gray200, gray300, blue70 } from "../../../styles/settings";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

  ${media.md(css`
    padding-left: ${props => rem(props.paddingLeft)};
    padding-right: ${props => rem(props.paddingRight)};
    margin: auto;
  `)};
`;

export const ApproveNewTermsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  max-width: ${rem(860)};
`;

export const Title = styled.div`
  font-family: Lato;
  font-size: ${rem(24)};
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: ${rem(0.78)};
  text-align: center;
  color: ${blue70};

  margin-bottom: ${rem(12)};
`;

export const Description = styled.span`
  font-family: Lato;
  font-size: ${rem(18)};
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: ${rem(0.48)};
  text-align: center;
  color: ${gray200};

  margin: 0 ${rem(40)} ${rem(41)} ${rem(40)};

  ${media.md(css`
    margin: 0 ${rem(146)} ${rem(41)} ${rem(146)};
  `)};
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${media.md(css`
    justify-content: center;
    flex-direction: row;
  `)};

  margin: ${rem(3)} 0 ${rem(18)} 0;
`;

export const AgreedNewTerms = styled.div`
  ${CheckboxSpan} {
    position: relative;
    top: ${rem(-3)};
  }

  font-family: Lato;
  font-size: ${rem(12)};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: ${rem(0.25)};
  text-align: left;
  color: ${grey70};

  margin: 0 ${rem(10)} 0 ${rem(10)};

  ${media.md(css`
    margin: 0;
  `)};
`;

export const HighlightedText = styled(Description)`
  font-weight: bold;
  margin: 0;
  color: ${gray300};
`;

export const IconWrapper = styled.div`
  margin: ${rem(32)} 0 ${rem(24)} 0;
`;
