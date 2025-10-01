import React, { Fragment } from "react";
import { string, node } from "prop-types";
import Icon from "../Icon";

import { Section, Title, IconContainer, Header } from "./styles";
import ShimmerLoading from "../ShimmerLoading";

function CardPrint({
  title,
  icon,
  iconColor,
  titleColor,
  iconContainerBg,
  children,
  BigTitle,
  height,
  styles,
  loading,
  ...props
}) {
  return (
    <Fragment>
      {BigTitle && (
        <Title titleColor={titleColor} BigTitle>
          {BigTitle}
        </Title>
      )}
      <Section
        data-test={props.dataTest}
        hasChildren={!!children}
        height={height}
        styles={styles}
      >
        {(icon || title) && (
          <Header>
            {icon && (
              <IconContainer iconContainerBg={iconContainerBg}>
                <Icon type={icon} color={iconColor} />
              </IconContainer>
            )}
            {title && (
              <Title data-test="date" titleColor={titleColor}>
                {loading ? (
                  <ShimmerLoading darker width={30} height={16} />
                ) : (
                  title
                )}
              </Title>
            )}
          </Header>
        )}

        {children}
      </Section>
    </Fragment>
  );
}

CardPrint.defaultProps = {
  title: null,
  icon: null,
  iconColor: null,
  titleColor: null,
  children: null,
  dataTest: undefined
};

CardPrint.propTypes = {
  title: string,
  icon: string,
  iconColor: string,
  titleColor: string,
  children: node,
  dataTest: string
};

export default CardPrint;
