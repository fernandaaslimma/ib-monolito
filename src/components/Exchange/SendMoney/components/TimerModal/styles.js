import styled from "styled-components";
import { rem, remFontSize } from "../../../../../styles/tools";
import { gray200 } from "../../../../../styles/settings";

export const FooterButtonsModal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: white;
  padding-left: ${rem(16)};
  padding-right: ${rem(16)};
  width: 100%;

  @media (max-width: ${rem(600)}) {
    width: 100%;
  }
`;

export const InfoTextModal = styled.div`
  font-family: Lato;
  font-weight: 400;
  font-size: ${remFontSize(16)};
  color: ${gray200};
  text-align: center;
`;

export const InfoTitleModal = styled.div`
  font-family: Lato;
  font-weight: 700;
  font-size: ${remFontSize(24)};
  color: ${gray200};
  text-align: center;
  margin: ${rem(40)} ${rem(16)} ${rem(24)} ${rem(16)};
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: ${rem(46)} ${rem(16)} ${rem(50)} ${rem(16)}; 
}
`;
