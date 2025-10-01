import React, { Fragment } from "react";
import { number, string } from "prop-types";
import Icon from "../../common/Icon";
import { gray80, gray300 } from "../../../styles/settings";

import { WrapperAvatar, Name } from "./styles";

function avatarName(name) {
  if (name === "" || !name) return "--";
  const avatar = name.split(" ");
  return (
    name.substr(0, 1) + avatar[avatar.length - 1].substr(0, 1)
  ).toUpperCase();
}

function Avatar({
  background,
  avatarSize,
  iconName,
  iconSize,
  borderColor,
  color,
  name,
  fontSize,
  dataTest
}) {
  return (
    <Fragment>
      <WrapperAvatar
        data-test={dataTest}
        background={background}
        size={avatarSize}
        borderColor={borderColor}
      >
        {name !== null && name !== undefined && (
          <Name color={color} fontSize={fontSize}>
            {avatarName(name)}
          </Name>
        )}
        {iconName && (
          <Icon
            type={iconName}
            color={color}
            width={iconSize}
            height={iconSize}
          />
        )}
      </WrapperAvatar>
    </Fragment>
  );
}

Avatar.defaultProps = {
  background: gray80,
  avatarSize: 40,
  iconName: null,
  iconSize: 20,
  color: gray300,
  name: null,
  fontSize: 14,
  borderColor: null
};

Avatar.propTypes = {
  background: string,
  avatarSize: number,
  iconName: string,
  iconSize: number,
  color: string,
  name: string,
  fontSize: number,
  borderColor: string
};

export default Avatar;
