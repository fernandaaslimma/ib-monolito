import styled from "styled-components";
import { gray300, gray90 } from "../../../styles/settings";
import { rem } from "../../../styles/tools";

export const ItemWrapper = styled.li`
  background: transparent;
  border-style: solid;
  border-width: ${rem(1.5)};
  border-color: ${gray90};
  border-radius: ${rem(4)};
  margin-top: ${rem(32)};
  margin-bottom: ${rem(16)};
  cursor: pointer;
  padding: ${rem(16)} ${rem(16)};
  display: flex;
  align-items: center;
`;

export const VersionText = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${rem(14)};
  line-height: 150%;
  margin-bottom: ${rem(3)};

  letter-spacing: ${rem(0.45)};

  color: ${gray300};
`;

export const LinkArea = styled.section`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: ${rem(14)};
  line-height: 150%;
  margin-left: ${rem(18)};
  display: flex;
  flex-direction: column;
`;
