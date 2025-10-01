import React from "react";
import moment from "moment";
import { Button } from "react-bocombbm-components";
import Icon from "../../../common/Icon";
import { OpenBankingNewConsentContext } from "../NewConsent";
import InfoCard from "../../InfoCard";
import { ContainerWrapper } from "../../../InvestmentProducts/styles";
import { scrollToTop } from "../../../../utils/dom";
import { BtnWrapper, StickyWrapper } from "../../Consent/styles";
import AnimatedBottonSheet from "../../../common/AnimatedBottomSheet";
import ActionCard from "../../../common/ActionCard";
import Checkbox from "../../../common/Checkbox";
import {
  translate,
  getDateFieldPlaceholderByLocale
} from "../../../../utils/i18n";
import { neutral200 } from "../../../../styles/settings";
import { Image } from "../../../common/Image/Image";

import {
  SaveAccount,
  SaveAccountInfo,
  Text,
  CardAccounts,
  LinkCitizen,
  LinkDetails,
  WrapperSearch,
  DescriptionNames,
  ReceivingInstitutionInfo,
  WrapperInstitution,
  ReceivingInstitutionName,
  AllText,
  AccountBalance,
  AccountText,
  Value,
  Wrapper,
  Separator,
  SubTitle,
  SaveAccountDeadLine,
  SaveAccountInfoDeadLine,
  DescriptionNewConsent,
  Title,
  MessageBold
} from "./styles";
import DefaultShimmerLoading from "../../../common/DefaultShimmerLoading";

import BankPng from "../../../common/Icon/default_bank100.png";

function DetaislStep({ stepForward, stepBack }) {
  const {
    state: {
      consentCreated,
      consentLogo,
      consentName,
      finalRequiredData,
      finalOptionalData,
      finalDataPermisson,
      selectDataBottomSheet,
      selectDeadLineBottomSheet,
      selectedDeadLine,
      selectFinalDeadLine,
      loadingNewConsentStep,
      allStatusResource
    },
    changeState
  } = React.useContext(OpenBankingNewConsentContext);

  const [selectedDataPermission, setSelectedDataPermission] = React.useState(
    null
  );

  React.useEffect(() => {
    scrollToTop();
  }, []);

  React.useEffect(() => {
    let requiredData = [];
    let optionalData = [];
    let finalDataPermission = [];
    let allStatusByType = [];

    consentCreated &&
      consentCreated.resourceGroups.map(resource => {
        allStatusByType.push({
          type: resource.type,
          status: false
        });
        const data = resource.dataPermissions
          .map(dataPermission => {
            finalDataPermission.push({
              permissionCode: dataPermission.permissionCode,
              displayName: dataPermission.displayName,
              detail: dataPermission.detail,
              type: resource.type,
              required: dataPermission.required,
              status: false
            });
            return dataPermission.required;
          })
          .every(item => item === true);

        if (data === true) {
          requiredData.push(resource);
        } else {
          optionalData.push(resource);
        }
      });

    const dataPermissions = finalDataPermission.map(fDataPermission => {
      if (fDataPermission.required === true) {
        return {
          ...fDataPermission,
          status: true
        };
      } else {
        return fDataPermission;
      }
    });

    changeState("finalRequiredData", requiredData);
    changeState("finalOptionalData", optionalData);
    changeState("finalDataPermisson", dataPermissions);
    changeState(
      "selectFinalDeadLine",
      consentCreated && consentCreated.deadLines[1]
    );
    changeState(
      "selectedDeadLine",
      consentCreated && consentCreated.deadLines[1]
    );
    changeState("allStatusResource", allStatusByType);
  }, [consentCreated]);

  const changeStatusResource = (permissionCodeId, type) => {
    let modificatedDataPermissions = [];
    finalDataPermisson &&
      finalDataPermisson.map(item => {
        if (item.permissionCode === permissionCodeId) {
          modificatedDataPermissions.push({
            ...item,
            status: !item.status
          });
          chengeSelectAllstatusdata(type, false);
        } else {
          modificatedDataPermissions.push({
            ...item
          });
          chengeSelectAllstatusdata(type, false);
        }
      });
    changeState("finalDataPermisson", modificatedDataPermissions);

    const allStatusChecked = modificatedDataPermissions
      .filter(item => {
        if (item.type === type) {
          return item;
        }
      })
      .every(item => item.status === true);
    if (allStatusChecked) {
      chengeSelectAllstatusdata(type, false);
    }
  };

  const checkIfAllStatusData = type => {
    const status = finalDataPermisson
      .filter(item => item.type === type)
      .every(item => item.status === true);
    return status;
  };

  const changeAllStatusData = resourcetype => {
    let modificatedAllData = [];
    const statusSelectedAll = chengeSelectAllstatusdata(resourcetype).filter(
      statusResource => statusResource.type === resourcetype
    );
    finalDataPermisson.map(item => {
      if (item.type === resourcetype) {
        modificatedAllData.push({
          ...item,
          status: statusSelectedAll[0].status
        });
      } else {
        modificatedAllData.push({
          ...item
        });
      }
    });
    changeState("finalDataPermisson", modificatedAllData);
  };

  const chengeSelectAllstatusdata = (type, choseStatus = false) => {
    let finalAllStatusResource = [];

    if (choseStatus) {
      allStatusResource.map(statusResource => {
        if (statusResource.type === type) {
          finalAllStatusResource.push({
            ...statusResource,
            status: choseStatus
          });
        } else {
          finalAllStatusResource.push({
            ...statusResource
          });
        }
      });
    } else {
      allStatusResource.map(statusResource => {
        if (statusResource.type === type) {
          finalAllStatusResource.push({
            ...statusResource,
            status: !statusResource.status
          });
        } else {
          finalAllStatusResource.push({
            ...statusResource
          });
        }
      });
    }
    changeState("allStatusResource", finalAllStatusResource);
    return finalAllStatusResource;
  };

  const transIndex = id => {
    const index =
      finalDataPermisson &&
      finalDataPermisson.findIndex(item => item.permissionCode === id);
    return index;
  };

  function addScrollBody() {
    document.getElementsByTagName("body")[0].style.overflow = "visible";
  }

  const expirationDiff = date => {
    const expirationTime = `${moment(date).format(
      getDateFieldPlaceholderByLocale()
    )}`;
    return expirationTime;
  };

  const PersonImage = ({ profileImageUrl, ...rest }) => (
    <Image src={profileImageUrl} srcOnError={BankPng} {...rest} />
  );

  const selectionBottomSheet = (fullHeight, data) => {
    return (
      <AnimatedBottonSheet
        isOpen={selectDeadLineBottomSheet}
        head={{
          title: translate("OPEN_BANKING_NEW_CONSENT_CONSENT_SCOPE"),
          close: false
        }}
        velocity={0.3}
        onClickInBack={() => {
          changeState("selectedDeadLine", selectFinalDeadLine);
          changeState("selectDeadLineBottomSheet", false);
        }}
        fullHeight={fullHeight}
      >
        {selectDeadLineBottomSheet ? (
          <React.Fragment>
            <Title></Title>
            {data &&
              data.map((item, index) => {
                return (
                  <SaveAccountDeadLine key={index} checked>
                    <Checkbox
                      type="common"
                      margin="0"
                      checked={item.total === selectedDeadLine.total}
                      name="switchBox"
                      dataTest="switchSaveAccount"
                      onChange={() => {
                        changeState("selectedDeadLine", null);
                        changeState("selectedDeadLine", item);
                      }}
                      beforeTop="40%"
                      beforeLeft="29%"
                    />
                    <SaveAccountInfoDeadLine>
                      <Text>{`${item.total} ${translate(
                        "OPEN_BANKING_NEW_CONSENT_MONTHS"
                      )}`}</Text>
                    </SaveAccountInfoDeadLine>
                  </SaveAccountDeadLine>
                );
              })}
            <StickyWrapper>
              <BtnWrapper>
                <Button
                  type="primary"
                  spacing={{ top: "s", bottom: "s", right: "s", left: "xxs" }}
                  dataTest="continueNewConsentButton"
                  onClick={() => {
                    changeState("selectFinalDeadLine", selectedDeadLine);
                    changeState("selectDeadLineBottomSheet", false);
                    addScrollBody();
                  }}
                >
                  {translate("STATEMENTS_SAVE")}
                </Button>
              </BtnWrapper>
            </StickyWrapper>
          </React.Fragment>
        ) : null}
      </AnimatedBottonSheet>
    );
  };

  return (
    <ContainerWrapper>
      {loadingNewConsentStep ? (
        <DefaultShimmerLoading repeat={4} innerRepeat={2} />
      ) : (
        <React.Fragment>
          <InfoCard
            title={{
              tl: translate("OPEN_BANKING_NEW_CONSENT_SHARE"),
              bigTitle: true
            }}
          >
            <DescriptionNewConsent>
              {translate("OPEN_BANKING_NEW_CONSENT_DETAILS_TEXT")}
              <MessageBold>
                {translate("OPEN_BANKING_NEW_CONSENT_DETAILS_TEXT2")}
              </MessageBold>
              {translate("OPEN_BANKING_NEW_CONSENT_DETAILS_TEXT3")}
              <MessageBold>
                {translate("OPEN_BANKING_NEW_CONSENT_DETAILS_TEXT4")}
              </MessageBold>{" "}
              <br></br>
              {translate("OPEN_BANKING_NEW_CONSENT_DETAILS_TEXT5")}
              <MessageBold>
                {translate("OPEN_BANKING_NEW_CONSENT_DETAILS_TEXT6")}
              </MessageBold>
              {translate("OPEN_BANKING_NEW_CONSENT_DETAILS_TEXT7")}
            </DescriptionNewConsent>
          </InfoCard>
          <InfoCard
            title={{
              tl: translate("OPEN_BANKING_NEW_CONSENT_SELECT_INSTITUTION")
            }}
          >
            <ReceivingInstitutionInfo onClick={() => null}>
              <WrapperInstitution>
                {consentLogo && consentName && (
                  <PersonImage profileImageUrl={consentLogo} />
                )}
                <ReceivingInstitutionName>
                  {consentName}
                </ReceivingInstitutionName>
              </WrapperInstitution>
            </ReceivingInstitutionInfo>
          </InfoCard>
          {finalRequiredData && finalRequiredData.length > 1 && (
            <InfoCard
              title={{
                tl: translate("OPEN_BANKING_NEW_CONSENT_DATA"),
                bigTitle: true
              }}
              paddingCard={"16px 15px 2px 15px"}
            >
              <React.Fragment>
                <Wrapper>
                  <Separator />
                  {finalRequiredData.map((resourceGroup, index) => {
                    return (
                      <InfoCard
                        key={index}
                        title={{ tl: resourceGroup.displayName }}
                        colorTitle={"#587485"}
                        paddingCard={"16px 15px 2px 15px"}
                      >
                        {resourceGroup.dataPermissions.map(
                          (dataPermission, index) => {
                            return (
                              <ActionCard
                                key={index}
                                title={dataPermission.displayName}
                                text={dataPermission.detail}
                                ellipsis
                              >
                                <LinkDetails
                                  onClick={() => {
                                    setSelectedDataPermission(dataPermission);
                                    changeState("selectDataBottomSheet", true);
                                  }}
                                >
                                  <LinkCitizen>
                                    {translate(
                                      "OPEN_BANKING_NEW_CONSENT_SHOW_DATA"
                                    )}
                                  </LinkCitizen>
                                </LinkDetails>
                              </ActionCard>
                            );
                          }
                        )}
                      </InfoCard>
                    );
                  })}
                </Wrapper>
              </React.Fragment>
            </InfoCard>
          )}
          {finalOptionalData && finalOptionalData.length > 0 && (
            <InfoCard
              title={{
                tl: translate("OPEN_BANKING_NEW_CONSENT_OPTION_DATA"),
                bigTitle: true
              }}
              paddingCard={"16px 15px 2px 15px"}
            >
              <React.Fragment>
                <Wrapper>
                  <Separator />
                  {finalOptionalData.map((resourceGroup, index) => {
                    return (
                      <InfoCard
                        key={index}
                        title={{ tl: `${resourceGroup.displayName}` }}
                        colorTitle={"#587485"}
                        paddingCard={"16px 15px 2px 15px"}
                      >
                        <SaveAccount jContent="flex-end">
                          <SaveAccountInfo>
                            <AllText>
                              {translate("OPEN_BANKING_NEW_CONSENT_SELECT_ALL")}
                            </AllText>
                          </SaveAccountInfo>
                          <Checkbox
                            type="common"
                            margin="0"
                            checked={checkIfAllStatusData(resourceGroup.type)}
                            name="switchBox"
                            dataTest="switchSaveAccount"
                            onChange={() => {
                              changeAllStatusData(resourceGroup.type);
                            }}
                            beforeTop="40%"
                            beforeLeft="29%"
                          />
                        </SaveAccount>
                        {resourceGroup.dataPermissions.map(
                          (dataPermission, index) => {
                            return (
                              <ActionCard
                                key={index}
                                title={dataPermission.displayName}
                                text={dataPermission.detail}
                                dataTest={`dataPermission-${index}`}
                                actionOnChange={() =>
                                  changeStatusResource(
                                    dataPermission.permissionCode,
                                    resourceGroup.type
                                  )
                                }
                                checkBox
                                checked={
                                  finalDataPermisson[
                                    transIndex(dataPermission.permissionCode)
                                  ].status
                                }
                                ellipsis
                              >
                                <LinkDetails
                                  onClick={() => {
                                    setSelectedDataPermission(dataPermission);
                                    changeState("selectDataBottomSheet", true);
                                  }}
                                  flexStart
                                >
                                  <LinkCitizen>
                                    {translate(
                                      "OPEN_BANKING_NEW_CONSENT_SHOW_DATA"
                                    )}
                                  </LinkCitizen>
                                </LinkDetails>
                              </ActionCard>
                            );
                          }
                        )}
                      </InfoCard>
                    );
                  })}
                </Wrapper>
              </React.Fragment>
            </InfoCard>
          )}
          <InfoCard
            title={{
              tl: translate("OPEN_BANKING_NEW_CONSENT_CONSENT_SCOPE"),
              subTitle: true,
              sl: translate("OPEN_BANKING_NEW_CONSENT_TO_BE_CANCEL")
            }}
          >
            <React.Fragment>
              <SubTitle>
                {translate("OPEN_BANKING_NEW_CONSENT_CHOSE_SCOPE")}
              </SubTitle>
              <AccountBalance
                onClick={() =>
                  consentCreated && consentCreated.deadLines.length === 1
                    ? null
                    : changeState("selectDeadLineBottomSheet", true)
                }
              >
                <AccountText>
                  {(selectFinalDeadLine &&
                    `${selectFinalDeadLine.total} ${translate(
                      "OPEN_BANKING_NEW_CONSENT_MONTHS"
                    )}`) ||
                    (consentCreated &&
                      `${consentCreated.deadLines[1].total} ${translate(
                        "OPEN_BANKING_NEW_CONSENT_MONTHS"
                      )}`) ||
                    (consentCreated &&
                      `${consentCreated.deadLines[0].total} ${translate(
                        "OPEN_BANKING_NEW_CONSENT_MONTHS"
                      )}`)}
                </AccountText>
                {consentCreated && consentCreated.deadLines.length > 1 && (
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
              <SubTitle>{`${translate(
                "OPEN_BANKING_NEW_CONSENT_EXPIRES_IN"
              )} ${expirationDiff(
                selectFinalDeadLine && selectFinalDeadLine.expirationDateTime
              )}`}</SubTitle>
              {selectionBottomSheet(
                false,
                consentCreated && consentCreated.deadLines
              )}
            </React.Fragment>
          </InfoCard>
          <StickyWrapper>
            <BtnWrapper>
              <Button
                type="outline"
                spacing={{ top: "s", bottom: "s", right: "s", left: "s" }}
                dataTest="backNewConsentButton"
                onClick={() => {
                  stepBack();
                }}
              >
                {translate("BACK")}
              </Button>
              <Button
                type="primary"
                spacing={{ top: "s", bottom: "s", right: "s", left: "s" }}
                dataTest="continueNewConsentButton"
                onClick={() => {
                  stepForward();
                }}
              >
                {translate("CONTINUE")}
              </Button>
            </BtnWrapper>
          </StickyWrapper>
        </React.Fragment>
      )}
      <AnimatedBottonSheet
        bottomsheetBlue
        isOpen={selectDataBottomSheet}
        head={{
          title: selectedDataPermission && selectedDataPermission.displayName,
          close: true
        }}
        velocity={0.3}
        onClickInBack={() => {
          changeState("selectDataBottomSheet", false);
        }}
      >
        {selectDataBottomSheet ? (
          <React.Fragment>
            <WrapperSearch>
              <DescriptionNames>
                {translate("OPEN_BANKING_NEW_SHARE_DATA")}
              </DescriptionNames>
              <CardAccounts>{selectedDataPermission.detail}</CardAccounts>
            </WrapperSearch>
            <StickyWrapper>
              <BtnWrapper>
                <Button
                  spacing={{ top: "s", bottom: "s", right: "s", left: "xxs" }}
                  dataTest="continueNewConsentButton"
                  onClick={() => {
                    changeState("selectDataBottomSheet", false);
                  }}
                >
                  {translate("OPEN_BANKING_CONSENT_UNDERSTAND_BUTTON")}
                </Button>
              </BtnWrapper>
            </StickyWrapper>
          </React.Fragment>
        ) : null}
      </AnimatedBottonSheet>
    </ContainerWrapper>
  );
}

export default DetaislStep;
