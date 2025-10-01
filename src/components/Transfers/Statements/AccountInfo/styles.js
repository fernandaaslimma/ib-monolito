import styled, { css } from "styled-components";
import { gray200, gray300 } from "../../../../styles/settings";
import { media, rem } from "../../../../styles/tools";

export const AccountInfoWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.span`
  margin-top: ${rem(24)};
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: ${rem(16)};
  line-height: ${rem(19)};
  letter-spacing: ${rem(0.45)};

  color: ${gray300};
  ${media.md(css`
    display: flex;
  `)};
`;
export const BankTitle = styled.section`
  display: flex;
  align-items: center;
  margin-left: ${rem(16)};
  color: ${gray300};
`;

export const BankCode = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: ${rem(16)};
  line-height: 125%;

  letter-spacing: ${rem(0.452308)};
  ${media.md(css`
    white-space: nowrap;
  `)};
`;

export const BankName = styled(BankCode)`
  font-weight: 700;
  ${media.md(css`
    white-space: nowrap;
  `)};
`;

export const Label = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${rem(14)};
  line-height: 125%;
  /* identical to box height, or 17px */

  letter-spacing: ${rem(0.452308)};

  color: ${gray200};
  text-align: left;
`;

export const Text = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: ${rem(14)};
  line-height: 125%;
  /* identical to box height, or 17px */

  letter-spacing: 0.452308px;

  color: ${gray300};
  text-align: right;

  white-space: nowrap;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: ${rem(16)};

  :last-child {
    margin-bottom: ${rem(0)};
  }

  ${media.md(css`
    margin-bottom: ${rem(0)};
  `)};
`;

export const BankInfo = styled.section`
  display: flex;
  align-items: center;
  margin-top: ${rem(24)};
`;

export const GridWrapper = styled.section`
  margin-top: ${rem(16)};

  ${media.md(css`
    margin-top: ${rem(16)};
    display: grid;
    grid-column-gap: ${rem(64)};
    grid-template-columns: 1fr 1fr;
    grid-row-gap: ${rem(16)};
    border-radius: ${rem(4)};
  `)};
`;
