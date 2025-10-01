import React, { Fragment } from "react";
import { CardInfo, Title, BigTitle, SubTitle } from "./styles";

function InfoCard({
  children,
  title,
  dataTest = "infoCard",
  colorTitle,
  paddingCard,
  bigTitleMargin
}) {
  return (
    <CardInfo data-test={`${dataTest}`} padding={paddingCard}>
      <Fragment>
        {title &&
          (title.bigTitle ? (
            <BigTitle margin={bigTitleMargin} subTitle={title.subTitle}>
              {title.tl}
            </BigTitle>
          ) : (
            <Title colorTitle={colorTitle}>{title.tl}</Title>
          ))}
        {title && title.subTitle && <SubTitle>{title.sl}</SubTitle>}
        {children}
      </Fragment>
    </CardInfo>
  );
}

export default InfoCard;
