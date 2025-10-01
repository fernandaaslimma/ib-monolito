import React from "react";

import { translate } from "../../../utils/i18n";
import { black30 } from "../../../styles/settings";
import Icon from "../Icon";
import DefaultContent from "../DefaultContent";

function PermissionDenied() {
  return (
    <DefaultContent
      data-test="PermissionDenied"
      Icon={() => (
        <Icon dataTest="icon-attention" type="Attention" color={black30} />
      )}
      primaryText={translate("YOU_DONT_HAVE_THIS_PERMISSION")}
      secondaryTexts={[
        translate(
          "YOU_CANT_ACCESS_THIS_PAGE_BECAUSE_YOUR_PROFILE_DOESNT_HAVE_THE_PERMISSION"
        )
      ]}
    />
  );
}

export default PermissionDenied;
