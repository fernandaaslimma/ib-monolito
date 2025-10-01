import React, { Fragment, useState } from "react";
import {
  AccountContainer,
  Card,
  CopyContainer,
  IconContainer,
  Label,
  LeftIconContainer,
  SubMenuContainer,
  Title,
  TitleContainer,
  Value,
  ValueContainer
} from "./styles";
import Icon from "../Icon";
import { blue10 } from "../../../styles/settings";
import { rem } from "../../../styles/tools";
import { translate } from "../../../utils/i18n";
import ThirdMenu from "./ThirdMenu";

const SubMenu = ({
  showSubMenu = false,
  setShowSubMenu = () => {},
  item = {},
  goToRoute = () => {},
  openToastr
}) => {
  const copy = (value, message) => {
    openToastr({
      text: message,
      isBelow: true,
      isTop: false,
      isScrolling: false
    });
    if (!navigator.clipboard) return;
    return navigator.clipboard.writeText(value);
  };

  const [showThird, setShowThird] = useState(false);
  const [thirdItem, setThirdItem] = useState(false);

  return (
    <Fragment>
      <SubMenuContainer subOpen={showSubMenu}>
        <Card
          style={{
            padding: `${rem(24)} ${rem(32)}`,
            marginTop: rem(24),
            marginBottom: rem(12)
          }}
          onClick={() => setShowSubMenu(false)}
        >
          <TitleContainer>
            <IconContainer style={{ marginLeft: 0 }}>
              <Icon type="IconBack" height="18" width="18" iconColor={blue10} />
            </IconContainer>
            <Title style={{ marginLeft: rem(20) }}>
              {item.secondLevelLabel ? item.secondLevelLabel : item.label}
            </Title>
          </TitleContainer>
        </Card>
        {item.icon === "Avatar" && (
          <Card
            style={{
              padding: `${rem(16)} ${rem(32)}`,
              marginBottom: rem(18)
            }}
          >
            <TitleContainer>
              <Title style={{ marginLeft: 0 }}>
                {translate("CASH_ACCOUNT")}
              </Title>
              {/* <IconContainer>
              <Icon type="Share" />
            </IconContainer> */}
            </TitleContainer>
            <Label style={{ marginTop: rem(16) }}>{translate("BANK")}</Label>
            <Value style={{ marginLeft: 0, marginTop: rem(4) }}>
              {item.bankName}
            </Value>
            <AccountContainer>
              <CopyContainer>
                <ValueContainer>
                  <Label>{translate("TED_PF_AGENCY")}</Label>
                  <Value style={{ marginLeft: 0, marginTop: rem(2) }}>
                    {item.accountBranch}
                  </Value>
                </ValueContainer>
                <IconContainer
                  style={{ marginLeft: rem(12) }}
                  onClick={() =>
                    copy(
                      item.accountBranch,
                      translate("MENU_TOAST_AGENCY_COPY_CONFIRMATION")
                    )
                  }
                >
                  <Icon type="CopyAndPaste" />
                </IconContainer>
              </CopyContainer>
              <CopyContainer style={{ marginLeft: rem(16) }}>
                <ValueContainer>
                  <Label>{translate("CASH_ACCOUNT")}</Label>
                  <Value style={{ marginLeft: 0, marginTop: rem(2) }}>
                    {`${item.accountNumber}-${item.accountVerifyingDigit}`}
                  </Value>
                </ValueContainer>
                <IconContainer
                  style={{ marginLeft: rem(12) }}
                  onClick={() => {
                    copy(
                      item.accountNumber + "-" + item.accountVerifyingDigit,
                      translate("MENU_TOAST_ACCOUNT_COPY_CONFIRMATION")
                    );
                  }}
                >
                  <Icon type="CopyAndPaste" />
                </IconContainer>
              </CopyContainer>
            </AccountContainer>
          </Card>
        )}
        {item.subItems &&
          item.subItems.map(
            (subItem, i) =>
              subItem.allowed && (
                <Card
                  key={i}
                  style={subItem.style && subItem.style}
                  onClick={() => {
                    if (subItem.subItems) {
                      setShowThird(true);
                      setThirdItem(subItem);
                    } else {
                      setShowSubMenu(false);
                      goToRoute(subItem.alternativeLink || subItem.routeLink);
                    }
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
      <ThirdMenu
        thirdItem={thirdItem}
        showThird={showThird}
        setShowThird={setShowThird}
        setShowSubMenu={setShowSubMenu}
        goToRoute={goToRoute}
      />
    </Fragment>
  );
};
export default SubMenu;
