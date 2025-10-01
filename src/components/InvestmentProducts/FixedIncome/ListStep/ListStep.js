import React, { useContext } from "react";
import { InstanceContext } from "../fixedIncomeContext";
import {
  ListWrapper,
  SectionOne,
  SectionTwo,
  Label,
  Info,
  Value,
  Item,
  ItemWrapper,
  MainInfo,
  Title,
  FundsInfo,
  FirstSection,
  Container,
  ConatinerListWrapper,
  EmptyWrapper,
  EmptyWrapperMessage
} from "./styles";
import { StepVisibility } from "../styles";
import Tag from "../../../common/Tag";
import { ContainerWrapper } from "../../styles";

import { BRL_CURRENCY } from "../../../../utils/constants";
import formatNumber from "../../../../utils/formatNumber";
import { isPtBR, translate } from "../../../../utils/i18n";
import Icon from "../../../common/Icon";
import Button from "react-bocombbm-components/dist/Button";
import { redirect } from "../../../../utils/redirect";

function ListStep({ currentStep, stepForward }) {
  const {
    props: { investmentFI },
    state: { filledValue },
    selectProduct,
    colors,
    changeState
  } = useContext(InstanceContext);

  const formatValues = value => formatNumber(Math.abs(value), { digits: 2 });
  const injectCurrency = value => {
    return `${BRL_CURRENCY} ${formatValues(value)}`;
  };

  currentStep === 1 &&
    filledValue !== (isPtBR ? "0,00" : "0.00") &&
    changeState("filledValue", isPtBR ? "0,00" : "0.00");

  return (
    <ContainerWrapper>
      {currentStep === 1 && <StepVisibility id="ListStep" />}
      {investmentFI.length === 0 || !investmentFI ? (
        <EmptyWrapper>
          <Icon type="EmptyInvest" height="73" width="66px" />
          <EmptyWrapperMessage>
            {translate("INVESTMENTS_FIXED_INCOME_EMPTY_PRODUCTS")}
          </EmptyWrapperMessage>
          <Button type="outline" onClick={() => redirect("/home")}>
            {translate("INVESTMENTS_FIXED_INCOME_BACK_TO_HOME")}
          </Button>
        </EmptyWrapper>
      ) : (
        <React.Fragment>
          <MainInfo>
            <Title>{translate("INVESTMENTS_FI_FIXED_INCOME")}</Title>
            {translate("INVESTMENTS_FI_DISCLAIMER")}
          </MainInfo>
          <ConatinerListWrapper data-test="listLCA">
            {investmentFI.map(item => {
              return (
                <ListWrapper key={item.id} data-test="LCA">
                  <ItemWrapper onClick={() => selectProduct(item, stepForward)}>
                    <Item>
                      <FirstSection>
                        <Info>
                          <FundsInfo>
                            <Label>{translate("INVESTMENTS_FI_LCA")}</Label>
                            <Value>{item.issuer}</Value>
                          </FundsInfo>
                        </Info>
                        <Tag
                          title={item.riskProfileLabel}
                          color={colors[item.riskProfile.toLowerCase()]}
                        />
                      </FirstSection>
                      <Container>
                        <SectionOne>
                          <Info>
                            <Label>
                              {translate("INVESTMENTS_FI_MINIMUM_APPLICATION")}
                            </Label>
                            <Value>
                              {injectCurrency(item.minimumSubscription)}
                            </Value>
                          </Info>
                          <Info>
                            <Label>
                              {translate("INVESTMENTS_FI_LIQUIDITY")}
                            </Label>
                            <Value>{item.liquidityLabel}</Value>
                          </Info>
                        </SectionOne>

                        <SectionTwo>
                          <Info>
                            <Label>{translate("INVESTMENTS_FI_TAX")}</Label>
                            <Value conclusive={true}>{item.yieldLabel}</Value>
                          </Info>
                          <Info>
                            <Label>
                              {translate("INVESTMENTS_FI_DEADLINE")}
                            </Label>
                            <Value>{item.monthsToMaturityLabel}</Value>
                          </Info>
                        </SectionTwo>
                      </Container>
                    </Item>
                  </ItemWrapper>
                </ListWrapper>
              );
            })}
          </ConatinerListWrapper>
        </React.Fragment>
      )}
    </ContainerWrapper>
  );
}

export default ListStep;
