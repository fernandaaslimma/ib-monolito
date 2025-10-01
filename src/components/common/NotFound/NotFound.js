import React from "react";

import { translate } from "../../../utils/i18n";
import { black30, darkBlue, white } from "../../../styles/settings";
import Icon from "../Icon";
import DefaultContent from "../DefaultContent";
import Link from "../Link";
import { isInternetExplorer as isIe } from "../../../utils/getNavigator";
import { Content, Wrapper } from "./styles";

function NotFound() {
  return (
    <Wrapper>
      <DefaultContent
        data-test="NotFound"
        Icon={() => (
          <Icon dataTest="icon-notFound" type="NotFound" color={black30} />
        )}
        primaryText={translate("PAGE_NOT_FOUND")}
        secondaryTexts={[translate("SORRY_PAGE_NOT_FOUND")]}
        isIe={isIe()}
      >
        <Content>
          <Link
            background={darkBlue}
            color={white}
            width={240}
            to="/home"
            dataTest="button-not-found"
            actionSecondary={true}
          >
            {translate("BACK_TO_HOME_SCREEN")}
          </Link>
        </Content>
      </DefaultContent>
    </Wrapper>
  );
}

export default NotFound;
