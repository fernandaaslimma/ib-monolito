import React, { Fragment } from "react";
import { string, node, number } from "prop-types";
import { ContentWrapper, Corner } from "./styles";

function CornerBox({
  width,
  height,
  cornerColor,
  cornerSize,
  cornerThickness,
  cornerOpacity,
  children
}) {
  return (
    <Fragment>
      <ContentWrapper
        width={width}
        height={height}
        cornerColor={cornerColor}
        cornerSize={cornerSize}
        cornerThickness={cornerThickness}
        cornerOpacity={cornerOpacity}
      >
        {children}
        <Corner
          cornerColor={cornerColor}
          cornerSize={cornerSize}
          cornerThickness={cornerThickness}
          cornerOpacity={cornerOpacity}
        ></Corner>
      </ContentWrapper>
    </Fragment>
  );
}

CornerBox.defaultProps = {
  width: 50,
  height: 50,
  cornerColor: "black",
  cornerSize: 5,
  cornerThickness: 2,
  cornerOpacity: 1,
  children: null
};

CornerBox.propTypes = {
  width: number,
  height: number,
  cornerColor: string,
  cornerSize: number,
  cornerThickness: number,
  cornerOpacity: number,
  children: node
};

export default CornerBox;
