import React, { useEffect, useState, useContext, Fragment } from "react";
import {
  ButtonWrapper,
  Card,
  Container,
  FooterButtonsContainer,
  RadioInput,
  RadioLabel,
  Span,
  SpanCotainer,
  ContainerBlue20,
  StyledRadio,
  WrapperDefaultContent,
  MainContainer,
  ShimmerContainer,
  FlagIconContainer
} from "./styles";
import { translate } from "../../../../utils/i18n";
import {
  blue,
  gray100,
  gray200,
  gray500,
  white,
  gray80
} from "../../../../styles/settings";
import Buttons from "../../../common/Buttons";
import { rem } from "../../../../styles/tools";
import Button from "../../../common/Button";
import { InstanceContext } from "../sendMoneyContext";
import DefaultShimmerLoading from "../../../common/DefaultShimmerLoading";
import DefaultContent from "../../../common/DefaultContent";
import Icon from "../../../common/Icon";

const WhoIsFavored = ({ stepForward, stepBack, currentStep }) => {
  const {
    getExchangeRecipientAccounts,
    exchangeRecipientAccounts,
    setFavored
  } = useContext(InstanceContext);

  const [myAccounts, setMyAccounts] = useState(true);
  const [otherFavoredAccounts, setOtherFavoredAccounts] = useState(null);
  const [mineFavoredAccounts, setMineFavoredAccounts] = useState(null);
  const [checked, setChecked] = useState(null);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [favoredAccounts, setFavoredAccounts] = useState(null);

  useEffect(() => {
    if (currentStep === 2) getExchangeRecipientAccounts();
  }, [currentStep]);

  useEffect(() => {
    if (exchangeRecipientAccounts != undefined) {
      const filteredMineExchangeAccounts = exchangeRecipientAccounts.filter(
        item => !item.isThirdParty
      );
      const filteredOtherExchangeAccounts = exchangeRecipientAccounts.filter(
        item => item.isThirdParty
      );

      setMineFavoredAccounts(filteredMineExchangeAccounts);
      setOtherFavoredAccounts(filteredOtherExchangeAccounts);

      if (myAccounts) {
        setFavoredAccounts(filteredMineExchangeAccounts);
      } else {
        setFavoredAccounts(filteredOtherExchangeAccounts);
      }

      setLoading(false);
    }
  }, [exchangeRecipientAccounts]);

  const handleChangeAccounts = e => {
    setMyAccounts(e);
    setChecked(null);
    setSelected(null);
    if (e) {
      setFavoredAccounts(mineFavoredAccounts);
    } else {
      setFavoredAccounts(otherFavoredAccounts);
    }
  };

  const handleGoBack = () => {
    stepBack();
  };

  const handleSubmit = () => {
    setFavored(selected);
    stepForward();
  };

  return (
    <MainContainer>
      {loading ? (
        <ShimmerContainer>
          <DefaultShimmerLoading repeat={4} innerRepeat={2} />
        </ShimmerContainer>
      ) : (
        <Fragment>
          <ContainerBlue20>
            <Container>
              <ButtonWrapper>
                <Span
                  fontSize={18}
                  color={gray500}
                  lineHeight={20}
                  fontWeight={700}
                >
                  {translate("TED_WHO_IS_FAVORED")}
                </Span>
                <Buttons
                  paddingWrapper={{ b: 10 }}
                  buttons={[
                    {
                      dataTest: "changeFavoredMe",
                      children: translate("TED_ITS_ME"),
                      onClick: () => handleChangeAccounts(true),
                      background: !myAccounts ? `${white}` : `${blue}`,
                      color: !myAccounts ? `${gray100}` : `${white}`,
                      border: `solid ${rem(1)} ${!myAccounts ? gray100 : blue}`,
                      noHoverBackground: true,
                      fontSize: "14",
                      borderRadius: { rightTop: "0", rightBottom: "0" },
                      padding: { r: "20", l: "20" },
                      style: {
                        width: "100%"
                      }
                    },
                    {
                      dataTest: "changeFavoredOthers",
                      children: translate("TED_OTHER"),
                      onClick: () => handleChangeAccounts(false),
                      background: !myAccounts ? `${blue}` : `${white}`,
                      color: !myAccounts ? `${white}` : `${gray100}`,
                      border: `solid ${rem(1)} ${!myAccounts ? blue : gray100}`,
                      noHoverBackground: true,
                      fontSize: "14",
                      borderRadius: { leftTop: "0", leftBottom: "0" },
                      padding: { r: "20", l: "20" },
                      style: {
                        width: "100%"
                      }
                    }
                  ]}
                />
              </ButtonWrapper>
              {!loading &&
                favoredAccounts != null &&
                favoredAccounts.map((item, index) => (
                  <Card
                    onClick={() => {
                      setChecked(index);
                      setSelected(item);
                    }}
                    key={index}
                    background={index === checked ? gray80 : white}
                  >
                    <SpanCotainer>
                      {item.name && (
                        <RadioLabel>
                          <RadioInput
                            type="radio"
                            checked={index === checked}
                          ></RadioInput>
                          <StyledRadio />
                          <Span
                            fontSize={14}
                            color={gray500}
                            lineHeight={18}
                            fontWeight={650}
                          >
                            {item.name}
                          </Span>
                        </RadioLabel>
                      )}
                      {item.account.number && (
                        <Span
                          fontSize={14}
                          color={gray200}
                          lineHeight={18}
                          fontWeight={600}
                          paddingLeft={45}
                        >
                          {translate("EXCHANGE_ACCOUNT")}: {item.account.number}
                        </Span>
                      )}
                      {item.account.bank.name && (
                        <Span
                          fontSize={14}
                          color={gray200}
                          lineHeight={18}
                          fontWeight={600}
                          paddingLeft={45}
                        >
                          {translate("EXCHANGE_BANK")}: {item.account.bank.name}
                        </Span>
                      )}
                      {item.account.bank.swift && (
                        <Span
                          fontSize={14}
                          color={gray200}
                          lineHeight={18}
                          fontWeight={600}
                          paddingLeft={45}
                        >
                          {translate("EXCHANGE_SWIFT_CODE")}:{" "}
                          {item.account.bank.swift}
                        </Span>
                      )}
                      {item.account.bank.intermediary.bank.name && (
                        <Span
                          fontSize={14}
                          color={gray200}
                          lineHeight={18}
                          fontWeight={600}
                          paddingLeft={45}
                        >
                          {translate("EXCHANGE_INTERMEDIARY_BANK")}:{" "}
                          {item.account.bank.intermediary.bank.name}
                        </Span>
                      )}
                      {item.account.bank.intermediary.bank.swift && (
                        <Span
                          fontSize={14}
                          color={gray200}
                          lineHeight={18}
                          fontWeight={600}
                          paddingLeft={45}
                        >
                          {translate("EXCHANGE_INTERMEDIARY_SWIFT_CODE")}:{" "}
                          {item.account.bank.intermediary.bank.swift}
                        </Span>
                      )}
                      {item.currency && (
                        <Span
                          fontSize={14}
                          color={gray200}
                          lineHeight={12}
                          fontWeight={600}
                          paddingLeft={45}
                        >
                          <FlagIconContainer>
                            <Icon
                              type={item.currency.code}
                              height={28}
                              width={28}
                            />
                          </FlagIconContainer>
                          {item.currency.code} - {item.currency.name}
                        </Span>
                      )}
                    </SpanCotainer>
                  </Card>
                ))}
              {(!loading && favoredAccounts === null) ||
                (favoredAccounts.length === 0 && (
                  <WrapperDefaultContent>
                    <DefaultContent
                      Icon={() => (
                        <Icon
                          type="NoRecord"
                          height={rem(66)}
                          width={rem(66)}
                        />
                      )}
                      primaryText={translate("TED_NO_REGISTERED_FAVOREDS")}
                      secondaryTexts={[
                        translate("TED_NO_REGISTERED_FAVOREDS_MSG")
                      ]}
                    />
                  </WrapperDefaultContent>
                ))}
            </Container>
          </ContainerBlue20>
          <FooterButtonsContainer>
            <Button
              dataTest="BackButtonSelectAccount"
              type="outline"
              onClick={handleGoBack}
              margin={{ r: 16 }}
              style={{
                width: "100%"
              }}
            >
              {translate("BACK")}
            </Button>
            <Button
              dataTest="ContinueButtonSelectAccount"
              actionSecondary
              onClick={handleSubmit}
              disabled={selected === null}
              style={{
                width: "100%"
              }}
            >
              {translate("OPEN_BANKING_CONTINUE")}
            </Button>
          </FooterButtonsContainer>
        </Fragment>
      )}
    </MainContainer>
  );
};

export default WhoIsFavored;
