import React, { useState, Fragment } from "react";
import { node, number, string } from "prop-types";

import { translate } from "../../../utils/i18n";
import Icon from "../../common/Icon";
import { neutral200 } from "../../../styles/settings";

import { WrapperText, WrapperExpand, WrapperIcon } from "./styles";

function getIconArrow(showMoreLess) {
  return (
    <WrapperIcon showMoreLess={showMoreLess}>
      <Icon type="Arrow" width={12} height={12} color={neutral200} />
    </WrapperIcon>
  );
}

function ShowMoreLess({ children, key, dataTest }) {
  const [showMoreLess, setShowMoreLess] = useState(false);

  return (
    <Fragment key={key} data-test={`showMoreLess${dataTest}`}>
      {showMoreLess && children}

      {showMoreLess ? (
        <WrapperExpand
          dataTest={`showMoreText${dataTest}`}
          onClick={() => setShowMoreLess(false)}
        >
          <WrapperText>
            {translate("OPEN_BANKING_LESS_DETAILS_BUTTON")}
          </WrapperText>
          {getIconArrow(showMoreLess)}
        </WrapperExpand>
      ) : (
        <WrapperExpand
          dataTest={`showLessText${dataTest}`}
          onClick={() => setShowMoreLess(true)}
        >
          <WrapperText>
            {translate("OPEN_BANKING_MORE_DETAILS_BUTTON")}
          </WrapperText>
          {getIconArrow(showMoreLess)}
        </WrapperExpand>
      )}
    </Fragment>
  );
}

ShowMoreLess.defaultProps = {
  children: null,
  key: null,
  dataTest: "datatest"
};

ShowMoreLess.propTypes = {
  children: node,
  key: number,
  dataTest: string
};

export default ShowMoreLess;
