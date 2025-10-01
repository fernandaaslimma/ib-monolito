import React, { useState } from "react";

import Card from "../../common/Card";
import Icon from "../../common/Icon";
import { neutral200 } from "../../../styles/settings";

import {
  CardWrapper,
  WrapperSubCard,
  WrapperCard,
  CardInfo,
  CardTitle,
  WrapperIcon,
  ExpandCollapseArrow
} from "./styles";

function CardWithDetails({ children, title, icon, dataTest }) {
  const [expandCollapseArrow, setExpandCollapseArrow] = useState(false);

  return (
    <CardWrapper
      key={1}
      data-test={`${dataTest}`}
      onClick={() => setExpandCollapseArrow(!expandCollapseArrow)}
    >
      <Card>
        <WrapperCard
          data-test="wrapperCard"
          onClick={() => setExpandCollapseArrow(!expandCollapseArrow)}
        >
          <CardInfo>
            {icon && (
              <Icon
                data-test="teste"
                type={icon.type}
                width={icon.width || "16"}
                height={icon.height || "18"}
              />
            )}
            <CardTitle data-test="productName" icon={icon}>
              {title}
            </CardTitle>
          </CardInfo>
          <WrapperIcon>
            <ExpandCollapseArrow collapse={expandCollapseArrow}>
              <Icon
                data-test="teste"
                type="Arrow"
                width={16}
                height={16}
                color={neutral200}
              />
            </ExpandCollapseArrow>
          </WrapperIcon>
        </WrapperCard>
        {expandCollapseArrow && (
          <WrapperSubCard data-test="wrapperSubCard">{children}</WrapperSubCard>
        )}
      </Card>
    </CardWrapper>
  );
}

export default CardWithDetails;
