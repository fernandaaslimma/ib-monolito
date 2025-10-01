import React from "react";

import { translate } from "../../../utils/i18n";
import { Wrapper } from "./styles";
import { black30 } from "../../../styles/settings";
import Icon from "../Icon";
import DefaultContent from "../DefaultContent";

import { isInternetExplorer as isIe } from "../../../utils/getNavigator";

function NotSupportMobile() {
  return (
    <Wrapper>
      <DefaultContent
        data-test="NotSupportMobile"
        Icon={() => (
          <Icon
            dataTest="icon-mobileWarning"
            type="MobileWarning"
            color={black30}
          />
        )}
        primaryText={translate("PAGE_NOT_AVAILABLE_MOBILE")}
        secondaryTexts={[translate("PAGE_NOT_AVAILABLE_MOBILE_USE_COMPUTER")]}
        isIe={isIe()}
      />
    </Wrapper>
  );
}

export default NotSupportMobile;
