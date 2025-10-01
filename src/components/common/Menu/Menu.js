import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  Container,
  IconContainer,
  LeftIconContainer,
  MenuIcon,
  MenuIconContainer,
  ProfileLabel,
  Subtitle,
  Title,
  TitleContainer
} from "./styles";
import Icon from "../Icon";
import { blue10 } from "../../../styles/settings";
import AvatarLetterIcon from "../AvatarLetterIcon/AvatarLetterIcon";
import { rem } from "../../../styles/tools";
import SubMenu from "./SubMenu";
import { Header } from "react-bocombbm-components";
import ChangeLanguage from "../ChangeLanguage";

const Menu = ({
  config = {},
  goToRoute = () => {},
  currentRoute = "",
  showNavigationMenu = () => {},
  isNavigationMenuShown,
  mobileAditionalAction = {},
  setPageName = () => {},
  openToastr,
  setHiddenContentForMenuMobile
}) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [currentMenu, setCurrentMenu] = useState(currentRoute);
  const [currentMenuLabel, setCurrentMenuLabel] = useState(currentRoute);
  const [currentSubMenuLabel, setCurrentSubMenuLabel] = useState(currentRoute);
  const [pageFound, setPageFound] = useState(false);

  const cardRef = useRef();

  useEffect(() => {
    const menu = config.find(el => el.routeLink === currentMenu);

    setPageFound(false);

    if (menu) {
      setCurrentMenuLabel(
        menu.secondLevelLabel ? menu.secondLevelLabel : menu.label
      );
      setCurrentSubMenuLabel("");
      setPageFound(true);
    } else {
      config.forEach(item => {
        if (item.subItems) {
          const subMenu = item.subItems.find(
            subItem => subItem.routeLink === currentMenu
          );
          if (subMenu) {
            setPageFound(true);
            setCurrentSubMenuLabel(subMenu.label);
            setCurrentMenuLabel(
              item.secondLevelLabel ? item.secondLevelLabel : item.label
            );
          }
        }
      });
    }

    if (!pageFound) {
      setCurrentMenuLabel("");
      setCurrentSubMenuLabel("");
    }
  }, [currentMenu]);

  useEffect(() => {
    setPageName({ currentMenuLabel, currentSubMenuLabel });
  }, [currentMenuLabel, currentSubMenuLabel]);

  useEffect(() => {
    setHiddenContentForMenuMobile(isNavigationMenuShown);
  }, [isNavigationMenuShown]);

  return (
    <div>
      <MenuIconContainer
        onClick={() => {
          showNavigationMenu(!isNavigationMenuShown);
          setShowSubMenu(false);
        }}
      >
        <div style={{ width: rem(50) }}>
          <MenuIcon isNavigationMenuShown={isNavigationMenuShown}>
            <Icon type={isNavigationMenuShown ? "MenuClose" : "Menu"} />
          </MenuIcon>
        </div>
        <div style={{ marginLeft: "auto" }}>
          <Header />
        </div>
        <div
          style={{
            marginLeft: "auto",
            marginTop: rem(8),
            width: rem(50)
          }}
        >
          <ChangeLanguage />
        </div>
      </MenuIconContainer>
      <Container menuShown={isNavigationMenuShown}>
        {config &&
          config.map(
            (item, i) =>
              item.allowed && (
                <Card
                  ref={cardRef}
                  onClick={() => {
                    setCurrentMenu(item.routeLink);
                    if (item.subItems) {
                      setShowSubMenu(true);
                    } else {
                      goToRoute(item.routeLink);
                      showNavigationMenu(false);
                    }
                  }}
                  key={i}
                  style={item.style && item.style}
                >
                  <TitleContainer>
                    {item.icon && item.icon === "Avatar" ? (
                      <AvatarLetterIcon fullName={item.label} />
                    ) : (
                      <LeftIconContainer>
                        <Icon type={item.icon} />
                      </LeftIconContainer>
                    )}
                    <Title>{item.label}</Title>
                    <IconContainer>
                      <Icon
                        type="ArrowRight"
                        height="18"
                        width="18"
                        iconColor={blue10}
                      />
                    </IconContainer>
                  </TitleContainer>
                  {item.subtitle && (
                    <Subtitle>
                      {item.subtitle}
                      <ProfileLabel
                        onClick={e => {
                          e.stopPropagation();
                          showNavigationMenu(false);
                          goToRoute(item.subRouteLink);
                        }}
                      >
                        {item.profileLabel}
                      </ProfileLabel>
                    </Subtitle>
                  )}
                </Card>
              )
          )}
        {mobileAditionalAction && (
          <Card
            onClick={() => mobileAditionalAction.action()}
            style={{ marginTop: rem(24), padding: `${rem(30)} ${rem(16)}` }}
          >
            <TitleContainer>
              <Title>{mobileAditionalAction.label}</Title>
              <IconContainer>
                <Icon type="Logout" width="28" height="28" />
              </IconContainer>
            </TitleContainer>
          </Card>
        )}
      </Container>

      <SubMenu
        item={config && config.find(el => el.routeLink === currentMenu)}
        showSubMenu={showSubMenu}
        setShowSubMenu={setShowSubMenu}
        goToRoute={route => {
          showNavigationMenu(false);
          setCurrentMenu(route);
          goToRoute(route);
        }}
        openToastr={openToastr}
      />
    </div>
  );
};
export default Menu;
