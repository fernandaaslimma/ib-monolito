import React, { Component, Fragment } from "react";
import ClickOut from "react-click-out";
import { string, shape, func } from "prop-types";

import { Wrapper, LanguageContainer, Text, Arrow } from "./styles";
import { PT_BR, EN_US, ZH_CN } from "../../../utils/constants";

import LanguagePopup from "./LanguagePopup";
import Icon from "../Icon";
import { getStorageLanguage } from "../../../utils/i18n";

class ChangeLanguage extends Component {
  constructor(props) {
    super(props);
    this.state = { showChooseLanguage: false };
  }

  toggleChooseLanguage(toggle) {
    this.setState({
      showChooseLanguage:
        toggle != null ? toggle : !this.state.showChooseLanguage
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.showChooseLanguage !== this.state.showChooseLanguage;
  }

  render() {
    const { showChooseLanguage } = this.state;
    const { userInfo, setLanguage } = this.props;

    const isDevelopment = window.NODE_ENV !== "production";
    let languages = [
      {
        icon: "FlagUSA",
        code: EN_US,
        name: "English",
        acronym: "EN"
      },
      {
        icon: "FlagBR",
        code: PT_BR,
        name: "Português",
        acronym: "PT"
      },
      {
        icon: "FlagCN",
        code: ZH_CN,
        name: "简体中文",
        acronym: "ZH"
      }
    ];

    if (isDevelopment) {
      languages.push({
        icon: "FlagUSA",
        code: "keys",
        name: "Chaves do Arquivo",
        acronym: "KF"
      });
    }

    const currentLanguage = languages.find(language => {
      const storageLanguage = getStorageLanguage();
      return storageLanguage
        ? language.code === storageLanguage
        : language.code === userInfo.preferredLanguage;
    });

    const languagesWithOnClick = languages.map(language => ({
      ...language,
      onClick: () => {
        this.toggleChooseLanguage();
        setLanguage(language.code);
        window.location.reload();
      }
    }));

    return (
      <ClickOut callback={() => this.toggleChooseLanguage(false)}>
        <Wrapper data-test="ChangeLanguage">
          <LanguageContainer
            onClick={() => this.toggleChooseLanguage()}
            data-test="ChangeLanguage_Open"
          >
            {currentLanguage && (
              <Fragment>
                <Icon type={currentLanguage.icon} />
                <Text>{currentLanguage.acronym}</Text>
              </Fragment>
            )}
            <Arrow />
          </LanguageContainer>
          {showChooseLanguage && (
            <LanguagePopup
              currentLanguage={
                getStorageLanguage() || userInfo.preferredLanguage
              }
              languages={languagesWithOnClick}
            />
          )}
        </Wrapper>
      </ClickOut>
    );
  }
}

ChangeLanguage.defaultProps = {
  userInfo: {}
};

ChangeLanguage.propTypes = {
  userInfo: shape({
    preferredLanguage: string
  }),
  setLanguage: func.isRequired
};

export default ChangeLanguage;
