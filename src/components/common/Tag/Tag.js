import React from "react";
import { string, number } from "prop-types";
import { TagElement } from "./styles";

function Tag({ title, color, width, titleColor, dataTest }) {
  return (
    <TagElement
      color={color}
      width={width}
      titleColor={titleColor}
      data-test={dataTest || "Tag"}
    >
      {title}
    </TagElement>
  );
}

Tag.propTypes = {
  title: string,
  color: string,
  width: number
};

export default Tag;
