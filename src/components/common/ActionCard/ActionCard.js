import React from "react";
import { neutral200 } from "../../../styles/settings";
import Card from "../Card";
import Icon from "../Icon";
import Checkbox from "../../common/Checkbox";
import {
  CardInfo,
  CardTitle,
  CardWrapper,
  ExpandCollapseArrow,
  WrapperCard,
  WrapperIcon,
  WrapperSubCard
} from "./styles";
import { rem } from "../Common/styles/tools";

function ActionCard({
  children,
  title,
  text,
  actionClick = null,
  dataTest,
  checkBox,
  checked,
  actionOnChange,
  ellipsis,
  widthTagEllipsis = "100%",
  titleStyle = {},
  cardContentStyle = {},
  icon
}) {
  return (
    <CardWrapper data-test={dataTest}>
      <Card noBg={true} styles={{ padding: rem(19) }}>
        <WrapperCard
          actionClick={actionClick}
          onClick={() => (actionClick ? actionClick() : null)}
          data-test={dataTest}
          style={cardContentStyle}
        >
          <CardInfo>
            {icon && <Icon type={icon} />}
            <CardTitle data-test="card_title" style={titleStyle}>
              {title}
            </CardTitle>
          </CardInfo>
          <WrapperIcon>
            <ExpandCollapseArrow>
              {actionClick && !checkBox ? (
                <Icon
                  data-test="arrow_icon"
                  type="Arrow"
                  width={16}
                  height={16}
                  color={neutral200}
                />
              ) : checkBox ? (
                <Checkbox
                  type="common"
                  margin="0"
                  checked={checked}
                  name="switchBox"
                  dataTest="switchSaveAccount"
                  onChange={() => actionOnChange()}
                  beforeTop="40%"
                  beforeLeft="29%"
                />
              ) : null}
            </ExpandCollapseArrow>
          </WrapperIcon>
        </WrapperCard>
        <WrapperSubCard
          data-test="card_text"
          ellipsis={ellipsis}
          widthTagEllipsis={widthTagEllipsis}
        >
          {text}
        </WrapperSubCard>
        {children && <div>{children}</div>}
      </Card>
    </CardWrapper>
  );
}

export default ActionCard;
