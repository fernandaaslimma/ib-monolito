import React from "react";

import { ProgressBarWrapper, FillerWrapper } from "./styles";

const Filler = props => {
  return <FillerWrapper percentage={props.percentage} className="filler" />;
};

const ProgressBar = props => {
  return (
    <ProgressBarWrapper>
      <Filler percentage={props.percentage} />
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
