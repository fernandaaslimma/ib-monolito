import React from "react";
import { string, node, bool, number } from "prop-types";
import Icon from "../Icon";
import { Section, Title, IconContainer, Header } from "./styles.js";

function GroupCard({
  title,
  icon,
  iconColor,
  titleColor,
  iconContainerBg,
  children,
  waitingBox,
  pendingBox,
  status,
  recipientsSize,
  titleSignatures,
  blockedBox,
  ...props
}) {
  return (
    <Section
      data-test={props["data-test"]}
      hasChildren={!!children}
      waitingBox={waitingBox}
      pendingBox={pendingBox}
      blockedBox={blockedBox}
      status={status}
      recipientsSize={recipientsSize}
    >
      {(icon || title) && (
        <Header>
          {icon && (
            <IconContainer iconContainerBg={iconContainerBg}>
              <Icon type={icon} color={iconColor} />
            </IconContainer>
          )}
          {title && (
            <Title titleColor={titleColor} titleSignatures={titleSignatures}>
              {title}
            </Title>
          )}
        </Header>
      )}

      {children}
    </Section>
  );
}

GroupCard.defaultProps = {
  title: null,
  icon: null,
  iconColor: null,
  titleColor: null,
  children: null,
  waitingBox: false,
  pendingBox: false,
  blockedBox: false,
  status: null,
  recipientsSize: null
};

GroupCard.propTypes = {
  title: string,
  icon: string,
  iconColor: string,
  titleColor: string,
  children: node,
  waitingBox: bool,
  pendingBox: bool,
  blockedBox: bool,
  status: string,
  recipientsSize: number
};

export default GroupCard;
