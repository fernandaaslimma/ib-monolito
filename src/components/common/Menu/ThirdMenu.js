import React, { Fragment } from "react";
import {
  Card,
  IconContainer,
  LeftIconContainer,
  SubMenuContainer,
  Title,
  TitleContainer
} from "./styles";
import { rem } from "../../../styles/tools";
import Icon from "../Icon";
import { blue10 } from "../../../styles/settings";

const ThirdMenu = ({
  thirdItem = {},
  showThird = false,
  setShowThird = () => {},
  setShowSubMenu = () => {},
  goToRoute = () => {}
}) => {
  return (
    <Fragment>
      <SubMenuContainer subOpen={showThird}>
        <Card
          style={{
            padding: `${rem(24)} ${rem(32)}`,
            marginTop: rem(24),
            marginBottom: rem(12)
          }}
          onClick={() => setShowThird(false)}
        >
          <TitleContainer>
            <IconContainer style={{ marginLeft: 0 }}>
              <Icon type="IconBack" height="18" width="18" iconColor={blue10} />
            </IconContainer>
            <Title style={{ marginLeft: rem(20) }}>{thirdItem.label}</Title>
          </TitleContainer>
        </Card>
        {thirdItem.subItems &&
          thirdItem.subItems.map(
            (subItem, i) =>
              subItem.allowed && (
                <Card
                  key={i}
                  style={subItem.style && subItem.style}
                  onClick={() => {
                    setShowSubMenu(false);
                    setShowThird(false);
                    goToRoute(subItem.routeLink);
                  }}
                >
                  <TitleContainer>
                    {subItem.icon && (
                      <LeftIconContainer>
                        <Icon type={subItem.icon} />
                      </LeftIconContainer>
                    )}
                    <Title>{subItem.label}</Title>
                    <IconContainer>
                      <Icon
                        type="ArrowRight"
                        height="18"
                        width="18"
                        iconColor={blue10}
                      />
                    </IconContainer>
                  </TitleContainer>
                </Card>
              )
          )}
      </SubMenuContainer>
    </Fragment>
  );
};

export default ThirdMenu;
