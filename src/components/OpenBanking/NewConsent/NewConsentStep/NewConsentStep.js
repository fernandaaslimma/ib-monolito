import React from "react";
import { Button, AlertMessage } from "react-bocombbm-components";
import { OpenBankingNewConsentContext } from "../NewConsent";
import Icon from "../../../common/Icon";
import InfoCard from "../../InfoCard";
import { Image } from "../../../common/Image/Image";
import { ContainerWrapper } from "../../../InvestmentProducts/styles";
import { neutral200 } from "../../../../styles/settings";
import { scrollToTop } from "../../../../utils/dom";
import { BtnWrapper, StickyWrapper } from "../../Consent/styles";
import AnimatedBottonSheet from "../../../common/AnimatedBottomSheet";
import DefaultShimmerLoading from "../../../common/DefaultShimmerLoading";
import Checkbox from "../../../common/Checkbox";
import { translate } from "../../../../utils/i18n";
import SearchBar from "../../../common/SearchBar";
import BankPng from "../../../common/Icon/default_bank100.png";
import { formatCNPJ, formatDocument } from "../../../../utils/formatNumber";

import {
  AccountBalance,
  AccountText,
  Value,
  SaveAccount,
  SaveAccountInfo,
  Text,
  SubTitle,
  ReceivingInstitutionInfo,
  ReceivingInstitutionName,
  WrapperInstitution,
  ValueInstitution,
  CardAccounts,
  CardAccountsNames,
  WrapperCardAccounts,
  WrapperAccounts,
  TitleAccounts,
  Bold,
  LinkCitizen,
  LinkDetails,
  WrapperSearch,
  DescriptionNames,
  TitleNames,
  Title,
  TitleBig,
  WapperImg,
  AbsoluteWrapperBottomSheet,
  WrapperBottomSheet
} from "./styles";

function NewConsentSetp({ stepForward, currentStep }) {
  const {
    state: {
      selectAccountOriginBottomSheet,
      selectedInstitutionBottonSheet,
      selectSpecificInstitutionNames,
      selectAccountCNPJBottomSheet,
      loadingNewConsentStep,
      finalInstitutions,
      selectCNPJ,
      selectFinalCNPJ
    },
    props: { institutions, specificOrganization, userInfo },
    changeState,
    getInstituion,
    createShare
  } = React.useContext(OpenBankingNewConsentContext);

  const [objectives, setData] = React.useState([
    translate("OPEN_BANKING_NEW_SHARE_INFO")
  ]);
  const [selectedInstitution, setSelectedInstitution] = React.useState(null);
  const [selectedObjective, setSelectedObjective] = React.useState({
    item: translate("OPEN_BANKING_NEW_SHARE_INFO"),
    index: 0
  });

  React.useEffect(() => {
    scrollToTop();
  }, [setData]);

  React.useEffect(() => {
    // let organizationIds = [];
    // const filteredInstitutions = institutions && institutions.filter(institution => {
    //     if (organizationIds.includes(institution.OrganisationId)) {
    //         return false;
    //     } else {
    //         organizationIds.push(institution.OrganisationId)
    //         return true;
    //     }
    // })
    changeState("finalInstitutions", institutions);
    if (userInfo && userInfo.tenantsMembers.length === 1) {
      changeState("selectFinalCNPJ", userInfo.tenantsMembers[0].document);
    }
  }, [institutions, userInfo]);

  const PersonImage = ({ profileImageUrl, ...rest }) => (
    <Image src={profileImageUrl} srcOnError={BankPng} {...rest} />
  );

  const verifyCheckedObjective = () => {
    if (selectedObjective.item !== "" || objectives.length < 2) {
      return (
        <AccountText>{selectedObjective.item || objectives[0]}</AccountText>
      );
    } else {
      return (
        <AccountText>
          {translate("OPEN_BANKING_NEW_VIEW_SELECTE_OBJECTIVE")}
        </AccountText>
      );
    }
  };

  const verifyCheckedCNPJ = () => {
    if (selectFinalCNPJ !== "" || userInfo.tenantsMembers.length < 2) {
      return (
        <AccountText>
          {formatCNPJ(selectFinalCNPJ) ||
            formatCNPJ(userInfo.tenantsMembers[0].document)}
        </AccountText>
      );
    } else {
      return (
        <AccountText>
          {translate("OPEN_BANKING_SELECT_CPNJ_INTITUTION2")}
        </AccountText>
      );
    }
  };

  const openCitizenPortal = () => {
    window.open("https://openbankingbrasil.org.br/", "_blank");
  };

  function addScrollBody() {
    document.getElementsByTagName("body")[0].style.overflow = "visible";
  }

  const selectionBottomSheet = (fullHeight, data) => {
    return (
      <AnimatedBottonSheet
        isOpen={selectAccountOriginBottomSheet}
        head={{
          title: translate("OPEN_BANKING_NEW_VIEW_OBJECTIVE"),
          close: false
        }}
        velocity={0}
        onClickInBack={() => {
          setSelectedObjective({ item: "", index: null });
          changeState("selectAccountOriginBottomSheet", false);
        }}
        fullHeight={fullHeight}
      >
        <React.Fragment>
          <Title></Title>
          {data &&
            data.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <SaveAccount key={index} checked>
                    <Checkbox
                      type="common"
                      margin="0"
                      checked={item === selectedObjective.item}
                      name="switchBox"
                      dataTest="switchSaveAccount"
                      onChange={() => setSelectedObjective({ item, index })}
                    />
                    <SaveAccountInfo>
                      <Text>{item}</Text>
                    </SaveAccountInfo>
                  </SaveAccount>
                </React.Fragment>
              );
            })}
          <StickyWrapper>
            <BtnWrapper>
              <Button
                type="primary"
                spacing={{ top: "s", bottom: "s", right: "s", left: "xxs" }}
                dataTest="SaveAccountButton"
                onClick={() => {
                  changeState("selectAccountOriginBottomSheet", false);
                  addScrollBody();
                }}
              >
                {translate("STATEMENTS_SAVE")}
              </Button>
            </BtnWrapper>
          </StickyWrapper>
        </React.Fragment>
      </AnimatedBottonSheet>
    );
  };

  const checkContinue = () => {
    if (userInfo.tenants[0] === "Corporation") {
      if (selectedInstitution && selectFinalCNPJ) {
        return false;
      } else {
        return true;
      }
    } else if (selectedInstitution) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <ContainerWrapper>
      <InfoCard
        title={{
          tl: translate("OPEN_BANKING_NEW_CONSENT_SHARE"),
          bigTitle: true
        }}
        paddingCard="24px 16px 16px 16px"
        bigTitleMargin="0 0 0 0"
      ></InfoCard>
      <AlertMessage
        icon="Attention"
        type="neutral"
        spacing={{
          top: "xxs",
          bottom: "m",
          right: "s",
          left: "s"
        }}
      >
        {translate("OPEN_BANKING_NEW_SELECT_NEED_INSTITUTION")}
      </AlertMessage>
      <InfoCard
        title={{ tl: translate("OPEN_BANKING_NEW_CLIENT_IDENTIFICATION") }}
      >
        <React.Fragment>
          <Title>{translate("OPEN_BANKING_NAME")}</Title>
          <SubTitle>
            {userInfo && `${userInfo.givenName}${" "}${userInfo.surname}`}
          </SubTitle>
          {userInfo && (
            <React.Fragment>
              <Title>{translate("OPEN_BANKING_CPF")}</Title>
              <SubTitle data-test="cpfOrCnpjLabel">
                {formatDocument(userInfo.document)}
              </SubTitle>
            </React.Fragment>
          )}
        </React.Fragment>
      </InfoCard>
      <InfoCard key={1} title={{ tl: translate("OPEN_BANKING_PURPOSE_DATA") }}>
        <AccountBalance
          cursor={objectives.length < 2 ? false : true}
          onClick={() =>
            objectives.length < 2
              ? null
              : changeState("selectAccountOriginBottomSheet", true)
          }
        >
          {verifyCheckedObjective()}
          {objectives.length > 1 && (
            <Value>
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
            </Value>
          )}
        </AccountBalance>
        {selectAccountOriginBottomSheet &&
          selectionBottomSheet(false, objectives)}
      </InfoCard>
      {userInfo.tenants[0] === "Corporation" && (
        <InfoCard
          key={1}
          title={{ tl: translate("OPEN_BANKING_SELECT_CPNJ_INTITUTION") }}
        >
          <AccountBalance
            data-test="openSelectCNPJ"
            cursor={userInfo.tenantsMembers.length > 1 ? true : false}
            onClick={() =>
              userInfo.tenantsMembers.length > 1
                ? changeState("selectAccountCNPJBottomSheet", true)
                : null
            }
          >
            {verifyCheckedCNPJ()}
            {userInfo.tenantsMembers.length > 1 && (
              <Value>
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
              </Value>
            )}
          </AccountBalance>
          <AnimatedBottonSheet
            isOpen={selectAccountCNPJBottomSheet}
            head={{
              title: translate("OPEN_BANKING_SELECT_CPNJ_INTITUTION2"),
              close: false
            }}
            velocity={0.3}
            onClickInBack={() => {
              changeState("selectCNPJ", selectFinalCNPJ);
              changeState("selectAccountCNPJBottomSheet", false);
            }}
          >
            <React.Fragment>
              <Title></Title>
              {userInfo.tenantsMembers &&
                userInfo.tenantsMembers.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      <SaveAccount key={index} checked>
                        <Checkbox
                          type="common"
                          margin="0"
                          checked={item.document === selectCNPJ}
                          name="switchBox"
                          dataTest="checkboxSelectCNPJ"
                          onChange={() =>
                            changeState("selectCNPJ", item.document)
                          }
                        />
                        <SaveAccountInfo>
                          <Text>{formatCNPJ(item.document)}</Text>
                        </SaveAccountInfo>
                      </SaveAccount>
                    </React.Fragment>
                  );
                })}
              <StickyWrapper>
                <BtnWrapper>
                  <Button
                    type="primary"
                    spacing={{ top: "s", bottom: "s", right: "s", left: "xxs" }}
                    dataTest="saveCNPJButton"
                    onClick={() => {
                      changeState("selectFinalCNPJ", selectCNPJ);
                      changeState("selectAccountCNPJBottomSheet", false);
                      addScrollBody();
                    }}
                  >
                    {translate("STATEMENTS_SAVE")}
                  </Button>
                </BtnWrapper>
              </StickyWrapper>
            </React.Fragment>
          </AnimatedBottonSheet>
        </InfoCard>
      )}
      <InfoCard
        title={{
          tl: translate("OPEN_BANKING_NEW_SELECT_INSTITUTION"),
          subTitle: true,
          sl: translate("OPEN_BANKING_NEW_SELECT_INSTITUTION2")
        }}
      >
        {selectedInstitution === null ? (
          <AccountBalance
            data-test="selectBank"
            onClick={() => {
              changeState("selectedInstitutionBottonSheet", true);
            }}
            noSpacebetween
            cursor
          >
            <ValueInstitution>
              <Icon
                spacing={{
                  bottom: "none",
                  left: "s",
                  right: "none",
                  top: "none"
                }}
                type="Search"
                color={neutral200}
                height="18"
                width="18"
              />
            </ValueInstitution>
            <AccountText>
              {translate("OPEN_BANKING_NEW_SEARCH_INSTITUTION")}
            </AccountText>
          </AccountBalance>
        ) : (
          <React.Fragment>
            <TitleBig>
              {translate("OPEN_BANKING_NEW_SELECTED_INSTITUTION")}
            </TitleBig>
            <ReceivingInstitutionInfo
              onClick={() =>
                changeState("selectedInstitutionBottonSheet", true)
              }
            >
              <WrapperInstitution>
                {currentStep === 1 &&
                  selectedInstitution.CustomerFriendlyLogoUri && (
                    <PersonImage
                      profileImageUrl={
                        selectedInstitution.CustomerFriendlyLogoUri
                      }
                    />
                  )}
                <ReceivingInstitutionName>
                  {selectedInstitution.CustomerFriendlyName}
                </ReceivingInstitutionName>
              </WrapperInstitution>
              <Icon type="Change" width={16} height={20.36} />
            </ReceivingInstitutionInfo>
          </React.Fragment>
        )}
        <AnimatedBottonSheet
          isOpen={selectedInstitutionBottonSheet}
          head={{
            title: `${
              !selectSpecificInstitutionNames
                ? translate("OPEN_BANKING_NEW_SELECT_INSTITUTION")
                : translate("OPEN_BANKING_NEW_SELECT_INSTITUTION_INFO")
            }`,
            close: selectSpecificInstitutionNames ? false : true
          }}
          velocity={0.3}
          onClickInBack={() =>
            changeState("selectedInstitutionBottonSheet", false)
          }
          fullHeight
        >
          {selectSpecificInstitutionNames ? (
            <React.Fragment>
              {loadingNewConsentStep ? (
                <DefaultShimmerLoading repeat={4} innerRepeat={2} />
              ) : (
                <React.Fragment>
                  <WrapperSearch>
                    <DescriptionNames>
                      {translate("OPEN_BANKING_NEW_SELECT_INSTITUTION_RESUME")}
                    </DescriptionNames>
                    <TitleNames>
                      {`${specificOrganization.length} ${translate(
                        "OPEN_BANKING_NEW_SELECT_INSTITUTION_NAMES"
                      )} ${specificOrganization &&
                        specificOrganization[0].CustomerFriendlyName}.`}
                    </TitleNames>
                    <CardAccountsNames>
                      {specificOrganization &&
                        specificOrganization.map((organization, index) => {
                          return (
                            <TitleAccounts key={index}>
                              {organization.CustomerFriendlyName}
                            </TitleAccounts>
                          );
                        })}
                    </CardAccountsNames>
                    <LinkDetails onClick={() => openCitizenPortal()}>
                      {translate("OPEN_BANKING_CITIZEN_PORTAL_LINK_MSG")}
                      <LinkCitizen>
                        {translate("OPEN_BANKING_CITIZEN_PORTAL_LINK_MSG2")}
                      </LinkCitizen>
                    </LinkDetails>
                  </WrapperSearch>
                  <WrapperBottomSheet />
                  <AbsoluteWrapperBottomSheet>
                    <BtnWrapper>
                      <Button
                        type="outline"
                        spacing={{
                          top: "s",
                          bottom: "s",
                          right: "s",
                          left: "xxs"
                        }}
                        dataTest="SaveAccountButton"
                        onClick={() => {
                          changeState("selectSpecificInstitutionNames", false);
                        }}
                      >
                        {translate("BACK")}
                      </Button>
                    </BtnWrapper>
                  </AbsoluteWrapperBottomSheet>
                </React.Fragment>
              )}
            </React.Fragment>
          ) : (
            <WrapperSearch>
              <SearchBar
                dataTest="Favored"
                list={finalInstitutions && finalInstitutions}
                keysNameToMach={["CustomerFriendlyName"]}
                placeholder={translate(
                  "OPEN_BANKING_NEW_SEARCH_INSTITUTION_LIST"
                )}
              >
                {finalInstitutions &&
                  finalInstitutions.map((institution, index) => (
                    <CardAccounts key={index}>
                      <WrapperCardAccounts
                        data-test={`cardBank_${institution.CustomerFriendlyName}`}
                        onClick={() => {
                          setSelectedInstitution(institution);
                          changeState("selectedInstitutionBottonSheet", false);
                          addScrollBody();
                        }}
                      >
                        {currentStep === 1 &&
                        institution.CustomerFriendlyLogoUri ? (
                          <PersonImage
                            profileImageUrl={
                              institution.CustomerFriendlyLogoUri
                            }
                          />
                        ) : (
                          <WapperImg>
                            <Icon
                              type="Bank"
                              width={20}
                              height={20}
                              color="#2D4758"
                            />
                          </WapperImg>
                        )}
                      </WrapperCardAccounts>
                      <WrapperAccounts>
                        <TitleAccounts
                          onClick={() => {
                            setSelectedInstitution(institution);
                            changeState(
                              "selectedInstitutionBottonSheet",
                              false
                            );
                            addScrollBody();
                          }}
                        >
                          <Bold>{institution.CustomerFriendlyName}</Bold>
                        </TitleAccounts>
                        <WrapperCardAccounts
                          onClick={() => {
                            setSelectedInstitution(institution);
                            changeState(
                              "selectedInstitutionBottonSheet",
                              false
                            );
                            addScrollBody();
                          }}
                          width={"100%"}
                          height={"28px"}
                        ></WrapperCardAccounts>
                        <LinkDetails
                          onClick={() => {
                            getInstituion(institution.OrganisationId);
                            changeState("selectSpecificInstitutionNames", true);
                          }}
                        >
                          <LinkCitizen>
                            {translate("OPEN_BANKING_NEW_VIEW_DETAIL_NAMES")}
                          </LinkCitizen>
                        </LinkDetails>
                      </WrapperAccounts>
                      <WrapperCardAccounts
                        onClick={() => {
                          setSelectedInstitution(institution);
                          changeState("selectedInstitutionBottonSheet", false);
                          addScrollBody();
                        }}
                        width={"100%"}
                      ></WrapperCardAccounts>
                    </CardAccounts>
                  ))}
              </SearchBar>
            </WrapperSearch>
          )}
        </AnimatedBottonSheet>
      </InfoCard>
      <StickyWrapper>
        <BtnWrapper>
          <Button
            type="primary"
            spacing={{ top: "s", bottom: "s", right: "s", left: "s" }}
            dataTest="continueNewConsentButton"
            disabled={checkContinue()}
            onClick={() => {
              createShare(
                selectedInstitution.AuthorisationServerId,
                selectedInstitution.OrganisationId,
                selectedInstitution.CustomerFriendlyLogoUri,
                selectedInstitution.CustomerFriendlyName,
                selectedObjective.item,
                selectedObjective.index,
                selectFinalCNPJ
              );
              stepForward();
            }}
          >
            {translate("CONTINUE")}
          </Button>
        </BtnWrapper>
      </StickyWrapper>
    </ContainerWrapper>
  );
}

export default NewConsentSetp;
