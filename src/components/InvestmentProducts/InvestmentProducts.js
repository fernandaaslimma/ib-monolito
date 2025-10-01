import React, { useEffect } from "react";
import { translate } from "../../utils/i18n";
import { Wrapper, Jumper, Text, ContainerWrapper } from "./styles";
import { redirect } from "../../utils/redirect";
import {
  INVESTMENT_FUNDS_URL,
  INVESTMENT_FIXED_INCOME_URL,
  INVESTMENT_FIXED_INCOME_ROLE,
  INVESTMENT_FUNDS_ROLE
} from "../../utils/constants";
import { Icon } from "react-bocombbm-components";
import { scrollToTop } from "../../utils/dom";
import { hotjarTag } from "../../utils/hotjarFun";
import CanAccess from "../common/CanAccess";

function InvestmentProducts(props) {
  useEffect(() => {
    hotjarTag();
  });

  useEffect(() => {
    scrollToTop();
  });

  useEffect(() => {
    return () => {
      hotjarTag();
    };
  }, []);

  const goToProductType = route => redirect(route);

  return (
    <ContainerWrapper>
      <Wrapper>
        <CanAccess
          userInfo={props.userInfo}
          roles={[INVESTMENT_FIXED_INCOME_ROLE]}
        >
          <Jumper
            data-test="investmentFixedIncomeButton"
            onClick={() => goToProductType(INVESTMENT_FIXED_INCOME_URL)}
          >
            <Icon type="Briefcase" height={24} width={24} color={"#3976CF"} />
            <Text>{translate("FIXED_INCOME")}</Text>
          </Jumper>
        </CanAccess>
        <CanAccess userInfo={props.userInfo} roles={[INVESTMENT_FUNDS_ROLE]}>
          <Jumper
            data-test="investmentFundsButton"
            onClick={() => goToProductType(INVESTMENT_FUNDS_URL)}
          >
            <Icon type="ChartArrow" height={24} width={24} color={"#3976CF"} />
            <Text>{translate("INVESTMENT_FUNDS")}</Text>
          </Jumper>
        </CanAccess>
      </Wrapper>
    </ContainerWrapper>
  );
}

export default InvestmentProducts;
