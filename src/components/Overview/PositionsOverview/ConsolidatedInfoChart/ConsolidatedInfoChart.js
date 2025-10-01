import React, { memo } from "react";
import { rem, remFontSize } from "../../../../styles/tools";
import { BRL_CURRENCY } from "../../../../utils/constants";
import { translate } from "../../../../utils/i18n";
import HideableValue from "../../../common/HideableValue";
import {
  HideValueWrapper,
  InvestmentConsolidatedInfo,
  InvestmentConsolidatedInfoSpan,
  ClickableItem,
  WrapperCommomIcon
} from "./styles";
import IconCommom from "../../../common/Icon";
import { Icon } from "react-bocombbm-components";

function ConsolidatedInfoChart({ hideValues, total, callback, currentCoin, isOffShore }) {
  return (
    <InvestmentConsolidatedInfo>
      {hideValues ? (
        <ClickableItem style={{ cursor: "pointer" }} onClick={() => callback()}>
          <Icon
            type="View"
            width={32}
            height={32}
            cursorPointer
            color="#3976CF"
          />
        </ClickableItem>
      ) : (
        <ClickableItem onClick={() => callback()}>
          <Icon
            type="HideView"
            width={32}
            height={32}
            cursorPointer
            color="#3976CF"
          />
        </ClickableItem>
      )}
      <InvestmentConsolidatedInfoSpan>
        {`${translate("TOTAL_INVESTED")}`}
      </InvestmentConsolidatedInfoSpan>
      <HideValueWrapper>
        <HideableValue
          hide={hideValues}
          currency={isOffShore ? currentCoin : BRL_CURRENCY}
          value={total.grossBalance}
          currencyColor="#99B5C6"
          currencySize={12}
          styles={`font-size: ${remFontSize(
            22
          )}; color: "#2d4758"; font-family: Lato Bold; margin-right: ${rem(
            4
          )}; display: flex; align-items: center;`}
        />
      </HideValueWrapper>
      {isOffShore && (<WrapperCommomIcon data-testid="flagIcon">
        <IconCommom width="28" height="28" type={currentCoin} />
      </WrapperCommomIcon>)}
    </InvestmentConsolidatedInfo>
  );
}

export default memo(ConsolidatedInfoChart, (prevProps, nextProps) => {
  return (
    prevProps.total.grossBalance === nextProps.total.grossBalance &&
    prevProps.hideValues === nextProps.hideValues &&
    prevProps.currentCoin === nextProps.currentCoin
  );
});

ConsolidatedInfoChart.displayName = "ConsolidatedInfoChart";
