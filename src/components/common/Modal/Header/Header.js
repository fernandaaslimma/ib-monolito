import React, { Component } from "react";
import {
  Wrapper,
  HeaderTitle,
  CloseIcon,
  BackButton,
  StyledCloseIcon
} from "./styles";
import { Button, Icon } from "react-bocombbm-components";
import { translate } from "../../../../utils/i18n";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      headerOnClickBack,
      headerOnClickClose,
      onClickBack,
      onClickClose,
      title,
      removeCloseIcon = false
    } = this.props;
    const onClickBackFunction = headerOnClickBack || onClickBack || false;
    const onClickCloseFunction = headerOnClickClose || onClickClose || false;
    return (
      <Wrapper wrapperStyle={this.props.wrapperStyle}>
        {onClickBackFunction && (
          <BackButton>
            <Button
              dataTest="backButton"
              withIcon={{ name: "IconBack", position: "left" }}
              type="text"
              small
              onClick={onClickBackFunction}
            >
              {translate("BACK")}
            </Button>
          </BackButton>
        )}
        <HeaderTitle bottomSheetHeaderStyle={this.props.bottomSheetHeaderStyle}>
          {title || "\u00A0"}
        </HeaderTitle>
        {removeCloseIcon === false &&
          (onClickCloseFunction && !this.props.bottomSheetHeaderStyle ? (
            <CloseIcon
              type="Close"
              dataTest="registration-data-close"
              width="20"
              height="20"
              onClick={onClickCloseFunction}
            />
          ) : onClickCloseFunction && this.props.bottomSheetHeaderStyle ? (
            <StyledCloseIcon>
              <Icon
                data-test="closeKnowMoreButton"
                type="BorderedClose"
                onClick={onClickCloseFunction}
              />{" "}
            </StyledCloseIcon>
          ) : null)}
      </Wrapper>
    );
  }
}
export default Header;
