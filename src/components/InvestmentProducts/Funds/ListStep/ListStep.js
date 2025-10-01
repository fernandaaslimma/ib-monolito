import React, { useContext, Fragment, useState, useEffect } from "react";
import { InstanceContext } from "../fundsContext";
import {
  ListWrapper,
  Section,
  Label,
  Info,
  Value,
  Item,
  ItemWrapper,
  Overview,
  MainInfo,
  Title,
  ClickbleText,
  ClickbleTextArea,
  Percentage,
  Modality,
  FundsInfo,
  ItemFooterDisclaimer,
  ItemFooterDisclaimerText
} from "./styles";
import { StepVisibility } from "../styles";
import { RotateComponent } from "../../DetailsCard/styles";
import Tag from "../../../common/Tag";
import { translate } from "../../../../utils/i18n";
import { hotjarTag } from "../../../../utils/hotjarFun";
import { BRL_CURRENCY, DEFAULT_VALUE } from "../../../../utils/constants";
import formatNumber from "../../../../utils/formatNumber";
import AnimatedBottonSheet from "../../../common/AnimatedBottomSheet";
import { Icon } from "react-bocombbm-components";
import {
  black,
  gray300,
  conclusive200,
  neutral200
} from "../../../../styles/settings";
import { ContainerWrapper } from "../../styles";

function ListStep({ currentStep, stepForward }) {
  const {
    props: { investmentFunds },
    selectFund
  } = useContext(InstanceContext);

  const colorInfo = {
    moderate: "#E3F1D4",
    aggressive: "#E2DCF5",
    conservative: "#DAE6F2"
  };

  const renderConversionDays = conversionDays => {
    if (conversionDays !== null) {
      if (conversionDays > 0) return `D + ${conversionDays}`;
      if (conversionDays === 0) return `D + 0`;
    } else {
      return DEFAULT_VALUE;
    }
  };

  const showDisclaimerQualifiedInvestor = () => {
    return (
      <ItemFooterDisclaimer closedCard={false}>
        <Icon type="Qualified" height={13} width={13} color={neutral200} />
        <ItemFooterDisclaimerText data-test="productQualified">
          {translate("FUNDS_PRODUCT_FOR_QUALIFIED_INVESTOR")}
        </ItemFooterDisclaimerText>
      </ItemFooterDisclaimer>
    );
  };

  const [openDisclaimer, setOpenDisclaimer] = useState(false);

  useEffect(() => {
    //Detect if component is in viewport and tag Hotjar path
    var component = document.querySelector("#ListStep");
    component && hotjarTag("investments/products/funds/list");
  });

  return (
    <ContainerWrapper>
      {currentStep === 1 && <StepVisibility id="ListStep" />}
      <MainInfo>
        <Title>{translate("INVESTMENT_FUNDS")}</Title>
        {translate("FUNDS_EXPLANATION_1")}
        <ClickbleTextArea
          data-test="knowMoreButton"
          onClick={() => setOpenDisclaimer(true)}
        >
          <ClickbleText>{translate("KNOW_MORE")}</ClickbleText>
          <RotateComponent angle={270}>
            <Icon type="Arrow" height={20} width={20} color={neutral200} />
          </RotateComponent>
        </ClickbleTextArea>
        <AnimatedBottonSheet
          isOpen={openDisclaimer}
          dataTest="Test"
          velocity={0.2}
          fullHeight
          head={{
            title: translate("INVESTMENT_FUNDS"),
            close: true,
            icon: "MenuClose"
          }}
          onClickInBack={() => setOpenDisclaimer(false)}
        >
          <Overview data-test="explanation">
            {`${translate("FUNDS_EXPLANATION_1")} ${translate(
              "FUNDS_EXPLANATION_2"
            )}`}
          </Overview>
        </AnimatedBottonSheet>
      </MainInfo>

      <ListWrapper data-test="listFunds">
        {investmentFunds.map(item => {
          const rentability = {
            value:
              item.monthActivity >= 12
                ? item.returns.twelveMonths
                : item.returns.sinceInception,
            hasNote: item.monthActivity >= 6 && item.monthActivity < 12,
            unavailable: item.monthActivity < 6
          };

          return (
            <ItemWrapper
              key={item.id}
              data-test={`fund_${item.id}`}
              onClick={() => selectFund(item, stepForward)}
            >
              <Item>
                <Section data-test={`nameFund_${item.name}`}>
                  <Info>
                    <FundsInfo>
                      <Modality>{item.classTypeLabel}</Modality>
                      <Label>{item.classLabel}</Label>
                    </FundsInfo>
                    <Value fundName>{item.name}</Value>
                  </Info>
                  <Tag
                    title={item.riskProfileLabel}
                    color={colorInfo[item.riskProfile.toLowerCase()]}
                  />
                </Section>
                <br />
                <Section>
                  <Info>
                    <Label>
                      {rentability.hasNote
                        ? `${translate("FUNDS_RENT")} ${
                            item.monthActivity
                          } ${translate("FUNDS_MONTH")}`
                        : translate("RENTABILITY_12_MONTHS")}
                    </Label>
                    <Value data-test={`rentability12Months_${item.id}`}>
                      {rentability.unavailable ? (
                        translate("NO_HISTORY")
                      ) : (
                        <Fragment>
                          {rentability.value.toFixed(2) != 0 && (
                            <RotateComponent isRotate={rentability.value < 0}>
                              <Icon
                                type="PointingArrow"
                                height={20}
                                width={20}
                                color={
                                  rentability.value >= 0 ? conclusive200 : black
                                }
                              />
                            </RotateComponent>
                          )}
                          <Percentage
                            positive={rentability.value.toFixed(2) > 0}
                          >
                            {formatNumber(Math.abs(rentability.value), {
                              digits: 2
                            })}{" "}
                            %{rentability.hasNote && "*"}
                          </Percentage>
                        </Fragment>
                      )}
                    </Value>
                  </Info>
                  <Info>
                    <Label>{translate("INITIAL_INVESTMENT")}</Label>
                    <Value data-test={`rentabilityInitial_${item.id}`}>
                      {`${BRL_CURRENCY} ${formatNumber(item.initialInvestment, {
                        digits: 2
                      })}`}
                    </Value>
                  </Info>
                  <Info>
                    <Label>{translate("REDEMPTION")}</Label>
                    <Value data-test={`rentabilityRedemption_${item.id}`}>
                      {renderConversionDays(item.redemption.conversionDays)}
                    </Value>
                  </Info>
                </Section>
              </Item>
              {item.closedFund && (
                <ItemFooterDisclaimer closedCard={true}>
                  <Icon type="Lock" height={13} width={13} color={gray300} />
                  <ItemFooterDisclaimerText data-test="productClosed">
                    {translate("FUND_IS_CLOSED")}
                  </ItemFooterDisclaimerText>
                </ItemFooterDisclaimer>
              )}
              {!item.closedFund &&
                (item.qualifiedInvestor && showDisclaimerQualifiedInvestor())}
            </ItemWrapper>
          );
        })}
      </ListWrapper>
    </ContainerWrapper>
  );
}

export default ListStep;
