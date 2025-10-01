import React from "react";
import Link from "../Link";
import Icon from "../../common/Icon";
import { scrollToTop } from "../../../utils/dom";

import { ItemWrapper, LinkArea, VersionText } from "./styles";

function LinkCard({
  iconType,
  to,
  anchorText,
  dataTest,
  noSpan,
  withUnderline,
  fontSize,
  versionText
}) {
  return (
    <ItemWrapper>
      <Icon type={iconType} />
      <LinkArea>
        <VersionText>{versionText}</VersionText>
        <Link
          dataTest={dataTest}
          onClick={scrollToTop}
          to={to}
          anchor
          noSpan={noSpan}
          withUnderline={withUnderline}
          fontSize={fontSize}
        >
          {anchorText}
        </Link>
      </LinkArea>
    </ItemWrapper>
  );
}

export default LinkCard;
