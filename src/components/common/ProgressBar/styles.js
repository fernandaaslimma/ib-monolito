import styled from "styled-components";

import { darkBlue } from "../../../styles/settings";

export const ProgressBarWrapper = styled.div`
  height: 8px;
  width: 250px;
  border-radius: 4px;
  border: 1px solid ${darkBlue};
`;

export const FillerWrapper = styled.div`
  background: ${darkBlue};
  height: 100%;
  width: ${({ percentage }) => percentage || 0}%;
  border-radius: inherit;
  transition: width 0.3s ease-in;
`;
