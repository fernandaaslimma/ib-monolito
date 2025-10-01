import React, { Fragment } from "react";
import moment from "moment";
import { Button } from "react-bocombbm-components";
import ActionCard from "../../../common/ActionCard";
import Icon from "../../../common/Icon";
import Checkbox from "../../../common/Checkbox";
import DefaultShimmerLoading from "../../../common/DefaultShimmerLoading";
import { Image } from "../../../common/Image/Image";
import BankPng from "../../../common/Icon/default_bank100.png";
import AnimatedBottonSheet from "../../../common/AnimatedBottomSheet";
import {
  translate,
  getDateFieldPlaceholderByLocale
} from "../../../../utils/i18n";
import { scrollToTop } from "../../../../utils/dom";
import InfoCard from "../../InfoCard";
import { OpenBankingSharesContext } from "../Shares";
import { neutral200 } from "../../../../styles/settings";

import {
  Description,
  DescriptionEnd,
  ReceivingInstitutionInfo,
  Wrapper,
  Separator,
  LinkDetails,
  LinkCitizen,
  SubTitle,
  AccountBalance,
  AccountText,
  Value,
  SaveAccount,
  SaveAccountInfo,
  AllText,
  WrapperInstitution,
  WapperImg,
  ReceivingInstitutionName,
  DescriptionNames,
  WrapperSearch,
  CardAccounts,
  StickyWrapper,
  ContainerWrapper,
  BtnWrapper,
  Title,
  Text,
  SaveAccountDeadLine,
  SaveAccountInfoDeadLine
} from "./styles";

function ChangeSharingStep({ currentStep, stepForward, goToStep }) {
  const {
    state: {
      selectShareOld,
      newConsentCreated,
      finalRequiredData,
      finalOptionalData,
      finalDataPermisson,
      allStatusResource,
      loadingChangeStep,
      consentLogo,
      consentName,
      selectedDeadLine,
      selectDataBottomSheet,
      selectAccountOriginBottomSheet,
      selectDeadLineBottomSheet
    },
    changeState
  } = React.useContext(OpenBankingSharesContext);

  const objectives = translate("OPEN_BANKING_NEW_SHARE_INFO");

  const [selectedObjective, setSelectedObjective] = React.useState({
    item: translate("OPEN_BANKING_NEW_SHARE_INFO"),
    index: 0
  });

  const [selectedDataPermission, setSelectedDataPermission] = React.useState(
    null
  );

  React.useEffect(() => {
    if (currentStep === 5) {
      scrollToTop();
      let requiredData = [];
      let optionalData = [];
      let finalDataPermission = [];
      let allStatusByType = [];
      const matchResourceOld = newConsentCreated && newConsentCreated;

      newConsentCreated &&
        newConsentCreated.resourceGroups.map((resource, index) => {
          let match = selectShareOld.resourceGroups.findIndex(
            oldShare => oldShare.type === resource.type
          );
          match < 0 && requiredData.push(selectShareOld.resourceGroups[index]);

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

      changeState("newConsentCreated", matchResourceOld);
      changeState("finalRequiredData", requiredData);
      changeState("finalOptionalData", optionalData);
      changeState("finalDataPermisson", dataPermissions);
      changeState(
        "selectedDeadLine",
        newConsentCreated && newConsentCreated.deadLines[1]
      );
      changeState("allStatusResource", allStatusByType);
    }
  }, [newConsentCreated, currentStep]);

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

  const transIndex = id => {
    const index =
      finalDataPermisson &&
      finalDataPermisson.findIndex(item => item.permissionCode === id);
    return index;
  };

  const PersonImage = ({ profileImageUrl, ...rest }) => (
    <Image src={profileImageUrl} srcOnError={BankPng} {...rest} />
  );

  const expirationDiff = date => {
    const diff = moment.duration(moment(date).diff(moment(new Date())));
    const meses = diff.asMonths();
    const expirationTime = `${meses.toFixed(0)} meses | ${moment(date).format(
      getDateFieldPlaceholderByLocale()
    )}`;
    return expirationTime;
  };

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

  const addScrollBody = () => {
    document.getElementsByTagName("body")[0].style.overflow = "visible";
  };

  const goToComfirmStep = () => {
    const uriRedirect =
      window.location.hostname === "localhost"
        ? "https://localhost:8080"
        : `${window.location.origin}/home`;

    const dataPermissions =
      finalDataPermisson &&
      finalDataPermisson
        .filter(dataPermission => dataPermission.status === true)
        .map(permissions => {
          return {
            permissionCode: permissions.permissionCode,
            displayName: permissions.displayName,
            detail: permissions.detail
          };
        });

    changeState("payloadToNewConsent", {
      dataPermissions: dataPermissions,
      deadLine: {
        total: selectedDeadLine.total,
        type: "MONTHS"
      },
      redirectUri: uriRedirect
    });
    changeState("previusStep", currentStep);

    stepForward();
  };

  const mandatoryDataBottomSheet = () => {
    return (
      <AnimatedBottonSheet
        isOpen={selectDataBottomSheet}
        head={{
          title: translate("OPEN_BANKING_NEW_CONSENT_DATAS"),
          close: false
        }}
        velocity={0.3}
        onClickInBack={() => {
          changeState("selectDataBottomSheet", false);
        }}
      >
        {selectDataBottomSheet && (
          <Fragment>
            <WrapperSearch>
              <DescriptionNames>
                {translate("OPEN_BANKING_NEW_SHARE_DATA")}
              </DescriptionNames>
              <CardAccounts>
                {selectedDataPermission && selectedDataPermission.detail}
              </CardAccounts>
            </WrapperSearch>
            <StickyWrapper>
              <BtnWrapper>
                <Button
                  type="outline"
                  spacing={{ top: "s", bottom: "s", right: "s", left: "xxs" }}
                  dataTest="SaveAccountButton"
                  onClick={() => {
                    changeState("selectDataBottomSheet", false);
                  }}
                >
                  {translate("BACK")}
                </Button>
              </BtnWrapper>
            </StickyWrapper>
          </Fragment>
        )}
      </AnimatedBottonSheet>
    );
  };

  const purposeDataBottomSheet = (fullHeight, data) => {
    return (
      <AnimatedBottonSheet
        isOpen={selectAccountOriginBottomSheet}
        head={{
          title: translate("OPEN_BANKING_NEW_VIEW_OBJECTIVE"),
          close: false
        }}
        dataTest="AnimatedbottomSheet"
        velocity={0}
        onClickInBack={() => {
          setSelectedObjective({ item: "", index: null });
          changeState("selectAccountOriginBottomSheet", false);
        }}
        fullHeight={fullHeight}
      >
        <Fragment>
          <Title></Title>
          {data &&
            data.map((item, index) => {
              return (
                <Fragment key={index}>
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
                </Fragment>
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
        </Fragment>
      </AnimatedBottonSheet>
    );
  };

  const deadLineBottomSheet = (fullHeight, data) => {
    return (
      <AnimatedBottonSheet
        isOpen={selectDeadLineBottomSheet}
        head={{
          title: translate("OPEN_BANKING_NEW_CONSENT_CONSENT_SCOPE"),
          close: false
        }}
        velocity={0.3}
        onClickInBack={() => {
          changeState("selectDeadLineBottomSheet", false);
        }}
        fullHeight={fullHeight}
      >
        {selectDeadLineBottomSheet && (
          <Fragment>
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
                  dataTest="SaveAccountButton"
                  onClick={() => {
                    changeState("selectDeadLineBottomSheet", false);
                    addScrollBody();
                  }}
                >
                  {translate("STATEMENTS_SAVE")}
                </Button>
              </BtnWrapper>
            </StickyWrapper>
          </Fragment>
        )}
      </AnimatedBottonSheet>
    );
  };

  return (
    currentStep === 5 && (
      <ContainerWrapper>
        {loadingChangeStep ? (
          <DefaultShimmerLoading repeat={4} innerRepeat={2} />
        ) : (
          <Fragment>
            <InfoCard
              title={{
                tl: translate("OPEN_BANKING_CHANGE_SHARED_DATA"),
                bigTitle: true
              }}
            >
              <Description>
                {translate("OPEN_BANKING_CHANGE_SHARED_DATA_MSG")}
              </Description>
              <DescriptionEnd>
                {translate("OPEN_BANKING_CHANGE_SHARED_DATA_MSG2")}
              </DescriptionEnd>
            </InfoCard>

            <InfoCard
              title={{
                tl: translate("OPEN_BANKING_NEW_CONSENT_SELECT_INSTITUTION")
              }}
            >
              <ReceivingInstitutionInfo onClick={() => null}>
                <WrapperInstitution>
                  {consentLogo && consentName ? (
                    <PersonImage profileImageUrl={consentLogo} />
                  ) : (
                    <WapperImg>
                      <Icon type="Bank" width={35} height={35} />
                    </WapperImg>
                  )}
                  <ReceivingInstitutionName>
                    {consentName}
                  </ReceivingInstitutionName>
                </WrapperInstitution>
              </ReceivingInstitutionInfo>
            </InfoCard>

            <InfoCard
              key={1}
              title={{ tl: translate("OPEN_BANKING_PURPOSE_DATA") }}
            >
              <AccountBalance
                data-testid="account-balance"
                cursor={objectives.length < 2 ? false : true}
                onClick={() =>
                  objectives.length < 2
                    ? false
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
                purposeDataBottomSheet(false, objectives)}
            </InfoCard>

            <InfoCard
              title={{
                tl: translate("OPEN_BANKING_NEW_CONSENT_DATA"),
                bigTitle: true
              }}
              paddingCard={"16px 15px 2px 15px"}
            >
              <Fragment>
                <Wrapper>
                  <Separator />
                  {finalRequiredData &&
                    finalRequiredData.map((resourceGroup, index) => {
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
                                      changeState(
                                        "selectDataBottomSheet",
                                        true
                                      );
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
              </Fragment>
              {mandatoryDataBottomSheet()}
            </InfoCard>

            {finalOptionalData && finalOptionalData.length > 0 && (
              <InfoCard
                title={{
                  tl: translate("OPEN_BANKING_NEW_CONSENT_OPTION_DATA"),
                  bigTitle: true
                }}
                paddingCard={"16px 15px 2px 15px"}
              >
                <Fragment>
                  <Wrapper>
                    <Separator />
                    {finalOptionalData &&
                      finalOptionalData.map((resourceGroup, index) => {
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
                                  {translate(
                                    "OPEN_BANKING_NEW_CONSENT_SELECT_ALL"
                                  )}
                                </AllText>
                              </SaveAccountInfo>
                              <Checkbox
                                type="common"
                                margin="0"
                                checked={checkIfAllStatusData(
                                  resourceGroup.type
                                )}
                                name="switchBox"
                                dataTest="finalOptionalData-switchSaveAccount"
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
                                    dataTest="dataPermissions-actionCard"
                                    text={dataPermission.detail}
                                    actionOnChange={() =>
                                      changeStatusResource(
                                        dataPermission.permissionCode,
                                        resourceGroup.type
                                      )
                                    }
                                    checkBox
                                    checked={
                                      finalDataPermisson[
                                        transIndex(
                                          dataPermission.permissionCode
                                        )
                                      ].status
                                    }
                                    ellipsis
                                  >
                                    <LinkDetails
                                      dataTest="permissions-code-linkdetails"
                                      onClick={() => {
                                        setSelectedDataPermission(
                                          dataPermission
                                        );
                                        changeState(
                                          "selectDataBottomSheet",
                                          true
                                        );
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
                </Fragment>
              </InfoCard>
            )}

            <InfoCard
              title={{
                tl: translate("OPEN_BANKING_NEW_CONSENT_CONSENT_SCOPE"),
                subTitle: true,
                sl: translate("OPEN_BANKING_NEW_CONSENT_TO_BE_CANCEL")
              }}
            >
              <Fragment>
                <SubTitle>
                  {translate("OPEN_BANKING_NEW_CONSENT_CHOSE_SCOPE")}
                </SubTitle>
                <AccountBalance
                  dataTest="accountBalance"
                  onClick={() => changeState("selectDeadLineBottomSheet", true)}
                >
                  <AccountText>
                    {(selectedDeadLine &&
                      `${selectedDeadLine.total} ${translate(
                        "OPEN_BANKING_NEW_CONSENT_MONTHS"
                      )}`) ||
                      (newConsentCreated &&
                        `${newConsentCreated.deadLines[1].total} ${translate(
                          "OPEN_BANKING_NEW_CONSENT_MONTHS"
                        )}`)}
                  </AccountText>
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
                </AccountBalance>
                <SubTitle>{`${translate(
                  "OPEN_BANKING_NEW_CONSENT_EXPIRES_IN"
                )} ${expirationDiff(
                  selectedDeadLine && selectedDeadLine.expirationDateTime
                )}`}</SubTitle>
                {deadLineBottomSheet(
                  false,
                  newConsentCreated && newConsentCreated.deadLines
                )}
              </Fragment>
            </InfoCard>
          </Fragment>
        )}

        <StickyWrapper>
          <BtnWrapper>
            <Button
              type="outline"
              spacing={{ top: "s", bottom: "s", right: "s", left: "xxs" }}
              dataTest="backNewConsentButton"
              onClick={() => goToStep(2)}
            >
              {translate("OPEN_BANKING_CANCEL")}
            </Button>
            <Button
              type="primary"
              spacing={{ top: "s", bottom: "s", right: "s", left: "xxs" }}
              dataTest="continueNewConsentButton"
              onClick={() => goToComfirmStep()}
            >
              {translate("CONTINUE")}
            </Button>
          </BtnWrapper>
        </StickyWrapper>
      </ContainerWrapper>
    )
  );
}

export default ChangeSharingStep;
