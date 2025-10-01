import React from "react";
import { string, bool, node, func } from "prop-types";
import {
  LinkTag,
  Child,
  RouterLinkTag,
  AnchorLinkTag,
  AnchorSpan
} from "../../../styles/objects";
import Icon from "../Icon";
import { blue } from "../../../styles/settings";
import LocalLoading from "../../common/LocalLoading";

function Link({
  href,
  to,
  children,
  isCallToAction,
  target,
  onClick,
  small,
  anchor,
  disabled,
  loading,
  width,
  isPending,
  noSpan,
  opacity,
  dataTest,
  actionSecondary,
  withUnderline,
  fontSize
}) {
  if (anchor) {
    return (
      <AnchorLinkTag
        width={width}
        data-test={dataTest ? dataTest : Link.displayName}
        onClick={onClick}
        to={to}
        disabled={disabled}
        withUnderline={withUnderline}
        fontSize={fontSize}
      >
        <AnchorSpan opacity={opacity} noSpan>
          {children}
        </AnchorSpan>

        {!noSpan && <Icon type="LinkArrow" color={blue} />}
      </AnchorLinkTag>
    );
  } else if (to) {
    return (
      <RouterLinkTag
        width={width}
        data-test={dataTest ? dataTest : Link.displayName}
        onClick={onClick}
        isCallToAction={isCallToAction}
        to={to}
        small={small}
        disabled={disabled}
        loading={loading}
        actionSecondary={actionSecondary}
      >
        {loading && <LocalLoading />}
        <Child>{children}</Child>
      </RouterLinkTag>
    );
  }
  return (
    <LinkTag
      width={width}
      data-test={dataTest ? dataTest : Link.displayName}
      onClick={onClick}
      isCallToAction={isCallToAction}
      small={small}
      href={href}
      target={target}
      disabled={disabled}
      isPending={isPending}
      loading={loading}
      actionSecondary={actionSecondary}
    >
      {loading && <LocalLoading />}
      <Child>{children}</Child>
    </LinkTag>
  );
}

Link.displayName = "Link";

Link.defaultProps = {
  to: null,
  href: null,
  target: null,
  isCallToAction: null,
  onClick: null,
  small: null,
  anchor: null,
  disabled: false,
  loading: false,
  width: null,
  actionSecondary: false
};

Link.propTypes = {
  children: node,
  to: string,
  href: string,
  target: string,
  isCallToAction: bool,
  onClick: func,
  small: bool,
  anchor: bool,
  disabled: bool,
  loading: bool,
  width: string,
  actionSecondary: bool
};

export default Link;
