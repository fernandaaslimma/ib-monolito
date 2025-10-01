import React from "react";

import { string, shape } from "prop-types";
import { translate } from "../../../utils/i18n";

import { Wrapper, Description, Name, Return } from "./styles";

function isImpersonating(userInfo) {
  return userInfo.impersonate;
}

function Impersonate({ userInfo }) {
  if (!isImpersonating(userInfo)) {
    return "";
  }

  function goToLink(file) {
    const link = document.createElement("a");
    document.body.appendChild(link);
    link.href = file;
    link.click();

    setTimeout(link.remove(), 100);

    return link;
  }

  return (
    <Wrapper>
      <Description>
        {translate("WELCOME")}
        {", "}
        <Name>{userInfo.impersonate.name}</Name>
        {"! "}
        {translate("IMPERSONATE_DESCRIPTION")}
        <Name>{userInfo.givenName}</Name>
        {"."}
      </Description>
      <Return onClick={() => goToLink(__IMPERSONATE_REDIRECT_URL__)}>
        {translate("IMPERSONATE_SELECT_ANOTHER_USER")}
      </Return>
    </Wrapper>
  );
}

Impersonate.defaultProps = {
  userInfo: {}
};

Impersonate.propTypes = {
  userInfo: shape({
    impersonate: shape({
      name: string,
      user: string,
      idp: string
    })
  })
};

export default Impersonate;
