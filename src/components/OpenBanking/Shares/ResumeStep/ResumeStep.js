import React, { Fragment } from "react";
import { Button } from "react-bocombbm-components";
import {
  Separator,
  StepVisibility
} from "../../../InvestmentProducts/Funds/styles";
import { ContainerWrapper } from "../../../InvestmentProducts/styles";
import { OpenBankingSharesContext } from "../Shares";
import InfoCard from "../../InfoCard";
import CardWithDetails from "../../../common/CardWithDetails";
import { neutral200 } from "../../../../styles/settings";
import Icon from "../../../common/Icon";
import AnimatedBottonSheet from "../../../common/AnimatedBottomSheet";
import RadioButtonRounded from "../../../common/RadioButtonRounded";
import { translate } from "../../../../utils/i18n";
import { scrollToTop } from "../../../../utils/dom";
import {
  BtnWrapper,
  StickyWrapper,
  ContentWrapper,
  ContentTitle,
  Content,
  Data,
  AccountBalance,
  Value,
  AccountText,
  ResourceInfo,
  SaveAccount,
  SaveAccountInfo,
  Text,
  RadioButtonsWrapper,
  ResourceWrapper
} from "./styles";

function ResumeStep({ currentStep, stepBack }) {
  const {
    state: { selectedBank, selectAccountOriginBottomSheet },
    changeState,
    corporationConsentStatus
  } = React.useContext(OpenBankingSharesContext);

  React.useEffect(() => {
    scrollToTop();
  }, []);

  const refactorResourceGroups = () => {
    let resourceGroups = [];
    selectedBank.resourceGroups.map(item => {
      if (item.displayName === "Contas") {
        resourceGroups.unshift(item);
      } else {
        resourceGroups.push(item);
      }
    });
    return resourceGroups;
  };

  const verifyCheckedOrigins = resources => {
    if (
      resources.length > 1 &&
      (selectedBank.status !== "PENDING" || corporationConsentStatus())
    ) {
      return (
        <RadioButtonsWrapper>
          <RadioButtonRounded
            radioName="periodRadio"
            buttonValue={`${resources.length} ${translate(
              "OPEN_BANKING_RESUME_DATA_ORIGIN_SELECTED"
            )}`}
            style={{ background: "none", border: "2px solid #3976CF" }}
          />
        </RadioButtonsWrapper>
      );
    } else {
      return <AccountText>{resources[0].displayName}</AccountText>;
    }
  };

  const selectionBottomSheet = (key, name, resources) => {
    return (
      <AnimatedBottonSheet
        isOpen={selectAccountOriginBottomSheet === key}
        head={{
          title: `${name}`,
          close: true
        }}
        velocity={0.3}
        onClickInBack={() => {
          changeState("selectAccountOriginBottomSheet", false);
        }}
      >
        <ResourceWrapper>
          <ResourceInfo>
            {selectedBank.status !== "PENDING" || corporationConsentStatus()
              ? translate("OPEN_BANKING_RESUME_DATA_ORIGIN_MSG_1")
              : translate("OPEN_BANKING_RESUME_DATA_ORIGIN_MSG_2")}
          </ResourceInfo>
          {resources &&
            resources.map((resource, index) => {
              return (
                <SaveAccount key={index} checked>
                  <SaveAccountInfo>
                    <Text>{resource.displayName}</Text>
                  </SaveAccountInfo>
                </SaveAccount>
              );
            })}
        </ResourceWrapper>
      </AnimatedBottonSheet>
    );
  };

  return (
    <ContainerWrapper>
      {currentStep === 3 && <StepVisibility id="ListStep" />}
      <InfoCard
        title={{ tl: translate("OPEN_BANKING_SHARED_DATA"), bigTitle: true }}
      ></InfoCard>

      {selectedBank &&
        refactorResourceGroups().map((item, index) => {
          const { dataPermissions, resources } = item;
          return (
            <InfoCard
              key={index}
              title={{
                tl: item.displayName,
                subTitle: item.resources ? true : false,
                sl:
                  resources && resources.length >= 1
                    ? translate("OPEN_BANKING_DATA_SOURCE")
                    : null
              }}
            >
              {resources && resources.length >= 1 && (
                <AccountBalance
                  onClick={() =>
                    resources.length > 1 &&
                    changeState("selectAccountOriginBottomSheet", index)
                  }
                  cursor={resources.length > 1}
                >
                  {verifyCheckedOrigins(resources)}
                  <Value>
                    {resources.length > 1 && (
                      <Icon
                        spacing={{
                          bottom: "none",
                          left: "s",
                          right: "none",
                          top: "none"
                        }}
                        type="Arrow"
                        color={neutral200}
                        height="18"
                        width="18"
                      />
                    )}
                  </Value>
                </AccountBalance>
              )}
              {dataPermissions &&
                dataPermissions.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <CardWithDetails title={item.displayName}>
                        <ContentWrapper>
                          <ContentTitle>
                            {translate("OPEN_BANKING_SELECTED_SHARED_DATA")}
                          </ContentTitle>
                          <Content>
                            <Data>{item.detail}</Data>
                          </Content>
                        </ContentWrapper>
                      </CardWithDetails>
                    </Fragment>
                  );
                })}
              {selectionBottomSheet(index, item.displayName, resources)}
            </InfoCard>
          );
        })}
      <StickyWrapper>
        <Separator />
        <BtnWrapper>
          <Button
            dataTest="transferBackButton"
            onClick={() => stepBack()}
            type="outline"
            spacing={{ top: "s", bottom: "s", right: "xxs", left: "s" }}
          >
            {translate("OPEN_BANKING_BACK")}
          </Button>
        </BtnWrapper>
      </StickyWrapper>
    </ContainerWrapper>
  );
}

export default ResumeStep;
