import React, { useContext, useState, useEffect, useRef } from "react";
import { InstanceContext } from "../../../InvestmentProducts/Funds/fundsContext";
import _ from "lodash";
import {
  ListWrapper,
  Section,
  Label,
  Info,
  Value,
  GrossValue,
  Item,
  ItemWrapper,
  Overview,
  OverviewTextBold,
  MainInfo,
  MainInfoLine,
  Title,
  MiniLabel,
  FundsInfo,
  TotalValue,
  Tag,
  StickyWrapper
} from "./styles";
import { StepVisibility } from "../styles";
import { translate } from "../../../../utils/i18n";
import {
  BRL_CURRENCY,
  DEFAULT_VALUE,
  INVESTMENT_FUNDS_ROLE
} from "../../../../utils/constants";
import formatNumber from "../../../../utils/formatNumber";
import AnimatedBottonSheet from "../../../common/AnimatedBottomSheet";
import { Button } from "react-bocombbm-components";
import { ContainerWrapper } from "../../../InvestmentProducts/styles";
import PendingTransactions from "../../../common/PendingTransactions";
import LinkCard from "../../../common/LinkCard";
import CanAccess from "../../../common/CanAccess";
import { scrollToTop } from "../../../../utils/dom";

function ListStep({ currentStep, stepForward, stepBack }) {
  const {
    state: { hasAccess },
    props: {
      investmentFunds,
      funds,
      totalFunds,
      pendingTransactionsFunds,
      userInfo
    },
    selectFund,
    isUsedStep,
    usesStep,
    clearUsedSteps,
    goToOriginalFundsList
  } = useContext(InstanceContext);

  const investmentFundsList = hasAccess ? investmentFunds : [];

  const activeTotal = funds ? funds.length : 0;

  const irIofSum = totalFunds.iofBalance + totalFunds.incomeTaxBalance;

  const selectCorrelatedFund = cnpj => {
    const correlated = hasAccess
      ? _.find(investmentFundsList, function(item) {
          return item.cnpj === cnpj;
        })
      : null;
    if (correlated && correlated.cnpj === cnpj) {
      selectFund(correlated, stepForward);
    } else {
      setOpenDisclaimer(true);
    }
  };

  const fundsInjectedFields = funds.map(fund => {
    const relatedItem = investmentFundsList.filter(
      item => item.cnpj === fund.fundCnpj
    );
    fund.conversionDays =
      relatedItem.length > 0 ? relatedItem[0].redemption.conversionDays : null;
    return fund;
  });

  const colorInfo = {
    moderate: "#E3F1D4",
    aggressive: "#E2DCF5",
    conservative: "#DAE6F2",
    totalFunds: "#EEF1F3"
  };

  const renderConversionDays = conversionDays => {
    if (conversionDays !== null) {
      if (conversionDays > 0) return `D + ${conversionDays}`;
      if (conversionDays === 0) return `D + 0`;
    } else {
      return DEFAULT_VALUE;
    }
  };

  const [openDisclaimer, setOpenDisclaimer] = useState(false);

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const historyState = history.state;
  const prevValues = usePrevious({ currentStep, historyState });

  useEffect(() => {
    if (!isUsedStep(currentStep)) {
      usesStep(currentStep);
      history.replaceState(currentStep, "", "");
    }
  }, [currentStep, isUsedStep, usesStep]);

  useEffect(() => {
    if (
      prevValues &&
      prevValues.currentStep != currentStep &&
      currentStep >= 5
    ) {
      clearUsedSteps();
    } else {
      if (prevValues && prevValues.currentStep != currentStep) {
        if (currentStep === historyState + 1) {
          if (isUsedStep(currentStep)) {
            history.forward();
          } else {
            usesStep(currentStep);
            history.pushState(currentStep, "", "");
          }

          scrollToTop();
        }
        if (currentStep === historyState - 1) {
          if (currentStep === 3) {
            history.replaceState(null, "", "");
          }
          history.go(-1);
          scrollToTop();
        }
      }
    }

    if (prevValues && prevValues.historyState != historyState) {
      if (historyState === currentStep + 1) {
        stepForward();
        scrollToTop();
      }
      if (historyState === currentStep - 1) {
        stepBack();
        scrollToTop();
        if (historyState === 3) {
          history.pushState(null, "", "");
        }
      }
    }
  }, [
    currentStep,
    prevValues,
    historyState,
    clearUsedSteps,
    isUsedStep,
    usesStep,
    stepForward,
    stepBack
  ]);

  return (
    <ContainerWrapper>
      {currentStep === 1 && <StepVisibility id="ListStep" />}
      <MainInfo
        bottomSpace={
          pendingTransactionsFunds && pendingTransactionsFunds.length > 0
            ? false
            : true
        }
      >
        <MainInfoLine>
          <Info>
            <Title>{translate("POSITION_FUNDS_GROSS_BALANCE")}</Title>
            <TotalValue>
              {`${BRL_CURRENCY} ${formatNumber(
                Math.abs(totalFunds.grossBalance),
                { digits: 2 }
              )}`}
            </TotalValue>
          </Info>
          {activeTotal >= 1 && (
            <Tag
              data-test="activeTotal"
              color={colorInfo["totalFunds"]}
            >{`${activeTotal} ${translate("FUNDS_ACTIVE")}`}</Tag>
          )}
        </MainInfoLine>

        <MainInfoLine>
          <FundsInfo>
            <Label>{translate("POSITION_FUNDS_NET_BALANCE")}</Label>
          </FundsInfo>
          <Value>
            {`${BRL_CURRENCY} ${formatNumber(Math.abs(totalFunds.netBalance), {
              digits: 2
            })}`}
          </Value>
        </MainInfoLine>
        <MainInfoLine>
          <FundsInfo>
            <Label>{translate("POSITION_FUNDS_GROSS_RESULT_BALANCE")}</Label>
          </FundsInfo>
          <GrossValue value={totalFunds.grossResultBalance}>
            {`${totalFunds.grossResultBalance > 0 ? "+ " : "- "}
            ${BRL_CURRENCY} ${formatNumber(
              Math.abs(totalFunds.grossResultBalance),
              { digits: 2 }
            )}`}
          </GrossValue>
        </MainInfoLine>
        <MainInfoLine>
          <FundsInfo>
            <Label>{translate("POSITION_FUNDS_IR_IOF")}</Label>
          </FundsInfo>
          <Value>
            {`${BRL_CURRENCY} ${formatNumber(Math.abs(irIofSum), {
              digits: 2
            })}`}
          </Value>
        </MainInfoLine>
        {pendingTransactionsFunds && pendingTransactionsFunds.length > 0 && (
          <PendingTransactions
            backgroundColor={"#EEF1F3"}
            pendingTransactions={pendingTransactionsFunds}
            mode={"desktop"}
          />
        )}
        <AnimatedBottonSheet
          isOpen={openDisclaimer}
          velocity={0.2}
          head={{ title: translate("POSITION_FUNDS_UNAVAILABLE") }}
          onClickInBack={() => setOpenDisclaimer(false)}
        >
          <Overview data-test="explanation">
            {translate("POSITION_FUNDS_UNAVAILABLE_MSG_1")}

            <OverviewTextBold>
              {translate("POSITION_FUNDS_UNAVAILABLE_MSG_2")}
            </OverviewTextBold>
          </Overview>

          <Button
            type="outline"
            spacing={{
              top: "none",
              bottom: "l",
              right: "s",
              left: "s"
            }}
            dataTest="closeBottomSheet"
            onClick={() => setOpenDisclaimer(false)}
          >
            {translate("POSITION_FUNDS_CLOSE")}
          </Button>
        </AnimatedBottonSheet>
      </MainInfo>

      <ListWrapper data-test="listFunds">
        {fundsInjectedFields.map((item, index) => {
          return (
            <ItemWrapper
              key={index}
              data-test={`fund_${index}`}
              clickableItem={hasAccess ? true : false}
              onClick={
                hasAccess ? () => selectCorrelatedFund(item.fundCnpj) : null
              }
            >
              <Item>
                <Section data-test={`nameFund_${item.name}`}>
                  <Info>
                    <FundsInfo>
                      <MiniLabel>{item.assetClass}</MiniLabel>
                    </FundsInfo>
                    <Value>{item.name}</Value>
                  </Info>
                </Section>
                <br />
                <Section>
                  <Info>
                    <MiniLabel>
                      {translate("POSITION_FUNDS_GROSS_BALANCE")}
                    </MiniLabel>
                    <Value data-test={`grossBalance_${item.fundCnpj}`}>
                      {`${BRL_CURRENCY} ${formatNumber(
                        Math.abs(item.grossBalance),
                        { digits: 2 }
                      )}`}
                    </Value>
                  </Info>
                  <Info>
                    <MiniLabel>
                      {translate("POSITION_FUNDS_GROSS_RESULT_BALANCE")}
                    </MiniLabel>
                    <Value
                      data-test={`rentabilityInitial_${item.fundCnpj}`}
                      value={item.grossResultBalance}
                    >
                      {`${item.grossResultBalance > 0 ? "+ " : "- "}
                        ${BRL_CURRENCY} ${formatNumber(
                        Math.abs(item.grossResultBalance),
                        { digits: 2 }
                      )}`}
                    </Value>
                  </Info>
                  <Info>
                    <MiniLabel>{translate("REDEMPTION")}</MiniLabel>
                    <Value data-test={"rentabilityRedemption"}>
                      {renderConversionDays(item.conversionDays)}
                      {/* {renderConversionDays(item.redemption.conversionDays)} */}
                    </Value>
                  </Info>
                </Section>
              </Item>
            </ItemWrapper>
          );
        })}
        <LinkCard
          iconType="FiLoader"
          to="/investments/positions/funds-previous"
          anchorText={translate("CLICK_TO_VIEW_FUNDS")}
          versionText={translate("WISH_TO_SEE_PREVIOUS_VERSION")}
          dataTest="LinkToPrevious"
          noSpan
          withUnderline
          fontSize={14}
        />
      </ListWrapper>

      <CanAccess userInfo={userInfo} roles={[INVESTMENT_FUNDS_ROLE]}>
        <StickyWrapper data-test="positionInvestButton">
          <Button
            onClick={() => goToOriginalFundsList()}
            disabled={false}
            spacing={{ top: "s", bottom: "s", right: "s", left: "s" }}
          >
            {translate("INVEST")}
          </Button>
        </StickyWrapper>
      </CanAccess>
    </ContainerWrapper>
  );
}

export default ListStep;
