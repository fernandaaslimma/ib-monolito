import moment from "moment";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { Icon, Button, AlertMessage } from "react-bocombbm-components";
import { rem, remFontSize } from "../../../../styles/tools";
import {
  BRL_CURRENCY,
  TYPE_PRODUCT_FUNDS,
  TYPE_PRODUCT_FUNDS_UNSUITABLE
} from "../../../../utils/constants";
import {
  getDateFieldPlaceholderByLocale,
  translate
} from "../../../../utils/i18n";
import AnimatedBottonSheet from "../../../common/AnimatedBottomSheet";
import Checkbox from "../../../common/Checkbox/Checkbox";
import HideableValue from "../../../common/HideableValue";
import {
  AccountBalance,
  AccountText,
  Value
} from "../../../Transfers/IndividualWireTransfer/ConfirmationStep/styles";
import { ContainerWrapper } from "../../styles";
import { verifyDays } from "../../utils";
import { hotjarTag } from "../../../../utils/hotjarFun";
import { InstanceContext } from "../fundsContext";
import {
  BtnWrapper,
  Separator,
  StickyWrapper,
  StepVisibility,
  ClickableItem
} from "../styles";
import {
  ResumeInfoWrapper,
  ResumeItemTitle,
  ResumeItemValue,
  ResumeAmmount,
  Currency,
  ResumeAmmountValue,
  Item,
  ContractAdhesionFunds,
  ReadTerm,
  CheckboxContainer,
  CheckboxContent,
  CheckboxText,
  CheckboxTextBold,
  InfoWrapper,
  UnsuitableFundText,
  UnsuitableFundTextBold,
  InfoModalWrapper,
  InfoContent,
  ButtonsWrapper,
  InfoContentBold,
  Message,
  ButtonWrapper,
  InfoRowWrapper,
  InfoContainer,
  MainContainer,
  ResumeItemTitleBold,
  StepVisibilityWrapper,
  AlertWrapper,
  TextInfoContainer,
  SubItens,
  ItemRemunerationInfo
} from "./styles";
import ReactHtmlParser from "react-html-parser";

function ConfirmationStep({ currentStep, goToStep, stepBack }) {
  const {
    state: {
      filledValue,
      selectedAccount,
      selectedFund,
      hasTerms,
      signed,
      hasUnsuitableTerm,
      fundsInMoviment,
      chosenOperation
    },
    createOperationFunction,
    approveTerm,
    downloadFile
  } = useContext(InstanceContext);

  const [hideValues, setHideValues] = useState(false);
  const [hasTermsState, setHasTermsState] = useState(false);
  const [agreeUnsuiTermsState, setAgreeUnsuitTermsState] = useState(false);
  const [checked, setCheked] = useState(false);
  const [fundsInMovimentModal, setFundsInMovimentModal] = useState(false);
  const [modalDistributorFees, setModalDistributorFees] = useState(null);
  const [distributorFees, setDistributorFees] = useState(null);

  const handleModaldistributorFees = (title, description) => {
    setModalDistributorFees({ title, description });
  };

  useEffect(() => {
    //Detect if component is in viewport and tag Hotjar path
    var component = document.querySelector("#ConfirmationStep");
    component && hotjarTag("investments/products/funds/ConfirmationStep");
  });

  useEffect(() => {
    currentStep !== 4 && setCheked(false);
  }, [currentStep]);

  useEffect(() => {
    hasTerms != null && setHasTermsState(true);
  }, [hasTerms]);

  useEffect(() => {
    signed === true && setHasTermsState(false);
  }, [signed]);

  useEffect(() => {
    if (
      currentStep === 4 &&
      (selectedFund != undefined && selectedFund.remunerationDetails)
    ) {
      setDistributorFees({
        distributor: {
          title: selectedFund.remunerationDetails.distributor.description,
          info: selectedFund.remunerationDetails.distributor.helpDescription
        },
        fees: selectedFund.remunerationDetails.distributor.remunerations
      });
    }
  }, [selectedFund, currentStep]);

  let resumeInfo = {};
  if (currentStep === 4) {
    if (chosenOperation === "redeem") {
      resumeInfo = {
        POSITION_FUNDS_REDEMPTION_VALUE: filledValue,
        FUND_ASSET: selectedFund["name"],
        POSITION_FUNDS_CASH_ACCOUNT: `${selectedAccount["name"]} - ${selectedAccount["accountNumber"]
          }`,
        POSITION_FUNDS_REDEMPTION_DATE: moment().format(
          getDateFieldPlaceholderByLocale()
        ),
        REDEMPCONVERSIONDAYS: selectedFund["redemption"]["conversionDays"],
        REDEMPSETTLEMENTDAYS: selectedFund["redemption"]["settlementDays"]
      };
    } else {
      resumeInfo = {
        INVESTMENT_VALUE: filledValue,
        FUND_ASSET: selectedFund["name"],
        SUBSCONVERSIONDAYS: selectedFund["subscription"]["conversionDays"],
        REDEMPCONVERSIONDAYS: selectedFund["redemption"]["conversionDays"],
        REDEMPSETTLEMENTDAYS: selectedFund["redemption"]["settlementDays"],
        APLICATION_DATE_FUND: moment().format(getDateFieldPlaceholderByLocale())
      };
    }
  }

  const renderValue = key => {
    if (key === "SUBSCONVERSIONDAYS") {
      return verifyDays(resumeInfo[key], selectedFund.subscription.type);
    } else if (
      key === "REDEMPCONVERSIONDAYS" ||
      key === "REDEMPSETTLEMENTDAYS"
    ) {
      return verifyDays(resumeInfo[key], selectedFund.redemption.type);
    } else {
      if (resumeInfo[key] != undefined) {
        return resumeInfo[key];
      }
    }
  };

  const renderCheckboxLabel = () => {
    const hasProductTerms = hasTerms.terms.filter(
      term => term.type === TYPE_PRODUCT_FUNDS
    );
    const hasNonComplianceTerms = hasTerms.terms.filter(
      term => term.type === TYPE_PRODUCT_FUNDS_UNSUITABLE
    );

    return (
      <CheckboxContent>
        <CheckboxText>
          {translate("DECLARE_TO_HAVE_READ_TERM")}
          <CheckboxTextBold>
            {hasProductTerms.length > 0 && hasNonComplianceTerms.length === 0
              ? `${translate("ADHERENCE_TERM_RISK_KNOWLEDGE")} ${selectedFund["name"]
              }`
              : hasProductTerms.length === 0 && hasNonComplianceTerms.length > 0
                ? hasNonComplianceTerms[0].name
                : `${translate("ADHERENCE_TERM_RISK_KNOWLEDGE")} ${selectedFund["name"]
                }, ${hasNonComplianceTerms[0].name}`}
          </CheckboxTextBold>
        </CheckboxText>
      </CheckboxContent>
    );
  };

  const valueInfo = () => {
    if (chosenOperation === "redeem") {
      return (
        <AccountBalance>
          <AccountText>
            {translate("POSITION_FUNDS_AVAILABLE_FOR_REDEMPTION")}
          </AccountText>
          <Value>
            <HideableValue
              hide={false}
              currency={BRL_CURRENCY}
              value={selectedFund.investmentDetails.grossBalance}
              currencyColor="#99B5C6"
              styles={`font-size: ${remFontSize(
                14
              )}; color: "#2d4758"; font-family: Lato Bold; margin-right: ${rem(
                12
              )}`}
            />
          </Value>
        </AccountBalance>
      );
    } else {
      return (
        <AccountBalance>
          <AccountText>{translate("BALANCE")}</AccountText>
          <Value>
            <HideableValue
              hide={hideValues}
              currency={BRL_CURRENCY}
              value={selectedAccount.availableBalance}
              currencyColor="#99B5C6"
              styles={`font-size: ${remFontSize(
                14
              )}; color: "#2d4758"; font-family: Lato Bold; margin-right: ${rem(
                12
              )}`}
            />
            {hideValues ? (
              <ClickableItem onClick={() => setHideValues(false)}>
                <Icon
                  type="View"
                  width={20}
                  height={20}
                  cursorPointer
                  color="#3976CF"
                />
              </ClickableItem>
            ) : (
              <ClickableItem onClick={() => setHideValues(true)}>
                <Icon
                  type="HideView"
                  width={20}
                  height={20}
                  cursorPointer
                  color="#3976CF"
                />
              </ClickableItem>
            )}
          </Value>
        </AccountBalance>
      );
    }
  };

  return (
    currentStep === 4 && (
      <MainContainer>
        <StepVisibilityWrapper>
          {currentStep === 4 && <StepVisibility id="ConfirmationStep" />}
          {valueInfo()}
        </StepVisibilityWrapper>
        <ResumeInfoWrapper>
          {Object.keys(resumeInfo).map((key, i) => (
            <Item key={i}>
              {resumeInfo[key] != undefined && (
                <InfoRowWrapper>
                  <ResumeItemTitle>{translate(`${key}`)}</ResumeItemTitle>
                </InfoRowWrapper>
              )}
              {key === "INVESTMENT_VALUE" ||
                key === "POSITION_FUNDS_REDEMPTION_VALUE" ? (
                <ResumeAmmount>
                  <Currency>{BRL_CURRENCY}</Currency>
                  <ResumeAmmountValue>
                    {resumeInfo.INVESTMENT_VALUE ||
                      resumeInfo.POSITION_FUNDS_REDEMPTION_VALUE}
                  </ResumeAmmountValue>
                </ResumeAmmount>
              ) : (
                <ResumeItemValue>{renderValue(key)}</ResumeItemValue>
              )}
            </Item>
          ))}
          {distributorFees != null && distributorFees.distributor && (
            <ItemRemunerationInfo>
              <InfoRowWrapper>
                <ResumeItemTitleBold>
                  {distributorFees.distributor.title}
                </ResumeItemTitleBold>
                {distributorFees.distributor.info &&
                  distributorFees.distributor.title && (
                    <ClickableItem
                      onClick={() =>
                        handleModaldistributorFees(
                          distributorFees.distributor.title,
                          distributorFees.distributor.info
                        )
                      }
                    >
                      <Icon
                        type="Attention"
                        height={22}
                        width={22}
                        cursorPointer
                        color="#3976CF"
                      />
                    </ClickableItem>
                  )}
              </InfoRowWrapper>
            </ItemRemunerationInfo>
          )}
          <SubItens>
            {distributorFees != null &&
              distributorFees.fees &&
              distributorFees.fees.map((item, index) => (
                <ResumeItemValue key={index}>
                  {item.description}
                </ResumeItemValue>
              ))}
          </SubItens>
        </ResumeInfoWrapper>

        {chosenOperation === "redeem" && (
          <AlertWrapper>
            <AlertMessage
              icon="Attention"
              type="neutral"
              spacing={{
                top: "none",
                bottom: "l",
                right: "none",
                left: "none"
              }}
            >
              <Message>
                {translate("POSITION_FUNDS_CONFIRMATION_DISCALIMER")}
              </Message>
            </AlertMessage>
          </AlertWrapper>
        )}

        <StickyWrapper>
          <Separator />
          <BtnWrapper>
            <Button
              type="outline"
              onClick={() => {
                setDistributorFees(null);
                stepBack();
              }}
              spacing={{ top: "s", bottom: "s", right: "xxs", left: "s" }}
            >
              {translate("FUNDS_BACK")}
            </Button>
            <Button
              dataTest="continueInvestButton"
              onClick={() => {
                fundsInMoviment !== ""
                  ? setFundsInMovimentModal(true)
                  : createOperationFunction(goToStep);
              }}
              spacing={{ top: "s", bottom: "s", right: "s", left: "s" }}
            >
              {translate("CONTINUE")}
            </Button>
          </BtnWrapper>
        </StickyWrapper>

        {hasTerms && (
          <AnimatedBottonSheet
            dataTest="alertModal"
            isOpen={hasTermsState}
            velocity={0.3}
            head={{
              title:
                !agreeUnsuiTermsState && hasUnsuitableTerm
                  ? translate("UNSUITABLE_PROFILE")
                  : translate("ACCEPTANCE_TERMS_FUND")
            }}
            onClickInBack={() => {
              setHasTermsState(false);
              setAgreeUnsuitTermsState(false);
            }}
          >
            {!agreeUnsuiTermsState && hasUnsuitableTerm ? (
              <Fragment>
                <InfoModalWrapper>
                  <UnsuitableFundText>
                    {translate("UNSUITABLE_TEXT")}
                    <UnsuitableFundTextBold>
                      {translate("UNSUITABLE_TEXT_2")}
                    </UnsuitableFundTextBold>
                  </UnsuitableFundText>
                </InfoModalWrapper>

                <BtnWrapper data-test="BtnWrapper">
                  <Button
                    type="outline"
                    dataTest="noButton"
                    onClick={() => setHasTermsState(false)}
                    spacing={{ top: "s", bottom: "s", right: "xxs", left: "s" }}
                  >
                    {translate("FUNDS_NO")}
                  </Button>
                  <Button
                    dataTest="yesButton"
                    onClick={() => setAgreeUnsuitTermsState(true)}
                    spacing={{ top: "s", bottom: "s", right: "s", left: "s" }}
                  >
                    {translate("FUNDS_YES")}
                  </Button>
                </BtnWrapper>
              </Fragment>
            ) : (
              <ContainerWrapper>
                <InfoWrapper>
                  {hasTerms &&
                    hasTerms.terms.map((item, index) => {
                      return (
                        <Fragment key={index}>
                          <ContractAdhesionFunds>
                            {item.type === TYPE_PRODUCT_FUNDS
                              ? `${translate(
                                "ADHERENCE_TERM_RISK_KNOWLEDGE"
                              )} ${selectedFund.name}`
                              : item.name}
                          </ContractAdhesionFunds>
                          <ReadTerm
                            onClick={() =>
                              item.type === TYPE_PRODUCT_FUNDS // third parameter: if is unsuitable term
                                ? downloadFile(item.url, item.name, false)
                                : downloadFile(item.url, item.name, true)
                            }
                          >
                            {translate("READ_TERM_FULL")}
                          </ReadTerm>
                        </Fragment>
                      );
                    })}
                </InfoWrapper>
                <CheckboxContainer>
                  <Checkbox
                    dataTest="checkboxAcceptAdhesionTermFunds"
                    label={renderCheckboxLabel()}
                    onChange={() => setCheked(!checked)}
                    checked={checked}
                  />
                </CheckboxContainer>
                <Button
                  disabled={!checked}
                  onClick={() => approveTerm(goToStep)}
                  dataTest="buttonAcceptAdhesionTermFunds"
                  spacing={{ top: "s", bottom: "s", right: "s", left: "s" }}
                >
                  {translate("ACCEPT_TERMS_FUNDS")}
                </Button>
              </ContainerWrapper>
            )}
          </AnimatedBottonSheet>
        )}

        <AnimatedBottonSheet
          isOpen={fundsInMovimentModal}
          velocity={0.3}
          head={{
            title: resumeInfo.FUND_ASSET || translate("FUND_IN_MOVIMENT_TITLE")
          }}
          onClickInBack={() => setFundsInMovimentModal(false)}
          ellipsis={true}
          widthTagEllipsis
        >
          <ContainerWrapper>
            <InfoWrapper>
              <InfoContent data-test="hasMovementInProgress">
                {translate("FUNDS_IN_MOVIMENT_MSG1")}
                <InfoContentBold>
                  {translate("FUNDS_IN_MOVIMENT_MSG2")}
                </InfoContentBold>
              </InfoContent>
              <ButtonsWrapper>
                <BtnWrapper>
                  <Button
                    dataTest="noButton"
                    type="outline"
                    onClick={() => setFundsInMovimentModal(false)}
                  >
                    {translate("FUNDS_NO")}
                  </Button>
                </BtnWrapper>
                <BtnWrapper data-test="BtnWrapper">
                  <Button
                    dataTest="yesButton"
                    onClick={() => {
                      createOperationFunction(goToStep);
                      setFundsInMovimentModal(false);
                    }}
                  >
                    {translate("FUNDS_YES")}
                  </Button>
                </BtnWrapper>
              </ButtonsWrapper>
            </InfoWrapper>
          </ContainerWrapper>
        </AnimatedBottonSheet>

        <AnimatedBottonSheet
          isOpen={modalDistributorFees != null}
          velocity={0.3}
          head={{
            title: modalDistributorFees && modalDistributorFees.title,
            close: true,
            icon: "Close"
          }}
          onClickInBack={() => setModalDistributorFees(null)}
        >
          <InfoContainer>
            {modalDistributorFees &&
              <TextInfoContainer>
                {ReactHtmlParser(modalDistributorFees.description)}
              </TextInfoContainer>}
          </InfoContainer>
          <ButtonWrapper>
            <Button onClick={() => setModalDistributorFees(null)}>
              {translate("FIXED_INCOME_WITHDRAWAL_UNDERSTOOD")}
            </Button>
          </ButtonWrapper>
        </AnimatedBottonSheet>
      </MainContainer>
    )
  );
}

export default ConfirmationStep;
