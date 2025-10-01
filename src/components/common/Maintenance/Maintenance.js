import React from "react";

import { translate } from "../../../utils/i18n";
import { black30 } from "../../../styles/settings";
import Icon from "../Icon";
import DefaultContent from "../DefaultContent";

function Maintenance() {
  return (
    <DefaultContent
      Icon={() => (
        <Icon dataTest="icon-attention" type="Attention" color={black30} />
      )}
      primaryText={translate("PAGE_UNDER_MAINTENANCE")}
      secondaryTexts={[
        translate("THIS_FEATURE_IS_CURRENTLY_UNDER_MAINTENANCE"),
        translate("TRY_AGAIN_LATER")
      ]}
    />
  );
}

export default Maintenance;
