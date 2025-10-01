import Input from "react-bocombbm-components/dist/Input";
import { AlertMessage } from "react-bocombbm-components";
import React, { Fragment, useContext, useState } from "react";
import LocalInput from "../../../common/Input";
import { InstanceContext } from "../IndividualWireTransfer";
import { formatCPF, formatCNPJ } from "../../../../utils/formatNumber";
import { iconBankName } from "../../../../utils/getIconBankName";
import {
  blue20,
  gray200,
  gray300,
  gray80,
  neutral200,
  blue,
  white,
  gray100
} from "../../../../styles/settings";
import { rem } from "../../../../styles/tools";
import Buttons from "../../../common/Buttons";
import { translate } from "../../../../utils/i18n";
import {
  checkAccount,
  checkAgency,
  checkVerifyDigit
} from "../../../../utils/validations/EFT";
import { checkValidCpfAndCnpj } from "../../../../utils/validations/input";
import Autocomplete from "../../../common/Autocomplete";
import DefaultContent from "../../../common/DefaultContent";
import Icon from "../../../common/Icon";
import Avatar from "../../../common/Avatar";
import Checkbox from "../../../common/Checkbox";
import SearchBar from "../../../common/SearchBar";
import {
  AsteriskMessage,
  AsteriskTitle
} from "../../../InvestmentProducts/Funds/DetailsStep/styles";
import Scheduler from "../Scheduler";
import AnimatedBottonSheet from "../../../../components/common/AnimatedBottomSheet";
import {
  AccTitle,
  EmptyMessage,
  EmptyMessageBold,
  TransferToNewAccountWrapper,
  Upper
} from "../styles";
import {
  AccountInfo,
  Block,
  EmptySavedAccounts,
  Inline,
  TabsWrapper,
  Tab,
  Title,
  Line,
  WrapperFavored,
  CardAccounts,
  WrapperCardAccounts,
  WrapperAccounts,
  TitleAccounts,
  Bold,
  SubtitleAccounts,
  WrapperAgency,
  ChangeAccount,
  LinkChange,
  TitleSelectAccount,
  IconWrapper,
  WrapperPeople,
  Underline,
  AlignTitle,
  PeopleTitle,
  WrapperAnimatedBotton,
  TitleAnimatedBotton,
  Disclaimer,
  SaveAccount,
  SaveAccountInfo,
  Text,
  Space,
  Separator,
  FavoredInfo,
  TextFavored,
  FavoredInfoWrapper,
  WrapperThird,
  InputHelperText,
  BottomAccountInfo
} from "./styles";

function TransferTabs({
  tabs,
  favoredData,
  banksList,
  changeAndCheckBankName,
  changeAndCheckField,
  checkFavoredAccounts,
  loading,
  favoredAccounts,
  setStateValue,
  clearTabsData,
  changeSelectedMenu,
  userInfo,
  changeAndCheckThirdFavoredFullname,
  changeAndCheckThirdFavoredDocument,
  handleIsThirdFavored,
  handleIsFavoredContactList
}) {
  const {
    state: {
      accountStatus,
      showFavoredAccounts,
      positionSelectedTab,
      selectedPeopleData,
      selectedPeopleAccountsData,
      selectedPeople,
      selectedAccounts,
      isThirdFavored,
      validToMoveOn
    },
    changeAccountStatus
  } = useContext(InstanceContext);

  const [isFocusedHelperInputText, setIsFocusedHelperInputText] = useState(false);

  const clearTabs = () => {
    clearTabsData();
  };

  const hasAccessThirdFavored = userInfo.roles.includes(
    "CreateApproveThirdPartyEFT"
  );

  const generateEmptyScreenMessage = () => {
    return (
      <EmptyMessage>
        {translate("TED_FAVORED_EMPTY_SAVED_ACCOUNTS_MESSAGE_1")}
        <EmptyMessageBold>
          {translate("TED_FAVORED_EMPTY_SAVED_ACCOUNTS_MESSAGE_2")}
        </EmptyMessageBold>
        {translate("TED_FAVORED_EMPTY_SAVED_ACCOUNTS_MESSAGE_3")}

        <EmptyMessageBold>
          {translate("TED_FAVORED_EMPTY_SAVED_ACCOUNTS_MESSAGE_4")}
        </EmptyMessageBold>
        {translate("TED_FAVORED_EMPTY_SAVED_ACCOUNTS_MESSAGE_5")}
      </EmptyMessage>
    );
  };

  return (
    <Fragment>
      <TabsWrapper>
        {tabs.map((item, index) => {
          return (
            <Tab
              key={index}
              className="Tabs"
              active={positionSelectedTab === index}
              data-test={item.dataTest}
            >
              <Title
                data-test={item.dataTest + "-tab"}
                active={positionSelectedTab === index}
                onClick={() => {
                  changeSelectedMenu(index);
                  handleIsFavoredContactList(false);
                }}
              >
                {item.title}
              </Title>
            </Tab>
          );
        })}
      </TabsWrapper>
      <Line />

      <section>
        {positionSelectedTab === 0 ? (
          <Fragment>
            {showFavoredAccounts ? (
              <Fragment>
                <WrapperFavored>
                  <ChangeAccount>
                    <TitleSelectAccount>
                      {translate("TED_DATA_OF_FAVORED")}
                    </TitleSelectAccount>
                    <LinkChange
                      data-test="changeFavored"
                      onClick={() => {
                        setStateValue("showFavoredAccounts", false);
                        clearTabs();
                      }}
                    >
                      {translate("TED_CHANGE_FAVORED")}
                    </LinkChange>
                  </ChangeAccount>

                  <CardAccounts
                    data-test="accountSelected"
                    padding={24}
                    cursor="auto"
                  >
                    <WrapperCardAccounts>
                      <Icon type={iconBankName(selectedAccounts.bankCode)} />

                      <WrapperAccounts>
                        <TitleAccounts>
                          {selectedAccounts.bankCode} -{" "}
                          <Bold>{selectedAccounts.bankName}</Bold>
                        </TitleAccounts>
                        <WrapperAgency>
                          <SubtitleAccounts data-test="agencySelected">
                            {translate("SAVE_BANK_ACCOUNT_AGENCY")}{" "}
                            {selectedAccounts.branch}
                          </SubtitleAccounts>
                          <SubtitleAccounts data-test="accountSelected">
                            {selectedAccounts.type} {selectedAccounts.number}-
                            {selectedAccounts.verifyingDigit}
                          </SubtitleAccounts>
                        </WrapperAgency>
                      </WrapperAccounts>

                      {selectedPeopleAccountsData.length > 1 && (
                        <Icon
                          dataTest="icon-selectedPeople"
                          type="Pen"
                          color={neutral200}
                          height={16}
                          width={16}
                          onClick={() => setStateValue("selectedPeople", true)}
                        />
                      )}
                    </WrapperCardAccounts>
                    <Underline />
                    <WrapperPeople>
                      <PeopleTitle>{translate("TED_FULL_NAME")}</PeopleTitle>
                      <AlignTitle>
                        <PeopleTitle>
                          <Bold>{selectedPeopleData.name}</Bold>
                        </PeopleTitle>
                      </AlignTitle>
                      <PeopleTitle data-test="CPForCNPJ">
                        {selectedPeopleData.document.length === 11
                          ? translate("CPF")
                          : translate("CNPJ")}
                      </PeopleTitle>
                      <AlignTitle>
                        <PeopleTitle>
                          <Bold>
                            {selectedPeopleData.document.length === 11
                              ? formatCPF(selectedPeopleData.document)
                              : formatCNPJ(selectedPeopleData.document)}
                          </Bold>
                        </PeopleTitle>
                      </AlignTitle>
                    </WrapperPeople>
                  </CardAccounts>

                  <Scheduler
                    title={`${translate("WHEN")}?`}
                    hideAlert={loading}
                  />
                </WrapperFavored>
              </Fragment>
            ) : (
              <Fragment>
                <WrapperFavored>
                  {favoredAccounts.length === 0 ? (
                    <DefaultContent
                      data-test="emptyResultsFavoreds"
                      Icon={() => (
                        <Icon
                          type="BankSmooth"
                          color={gray300}
                          height={64}
                          width={64}
                        />
                      )}
                      customizedTitle={
                        <EmptySavedAccounts>
                          {translate("TED_FAVORED_EMPTY_SAVED_ACCOUNTS_TITLE")}
                        </EmptySavedAccounts>
                      }
                      customizedMessage={generateEmptyScreenMessage()}
                      paddingTop={40}
                      paddingBottom={64}
                    />
                  ) : (
                    <Fragment>
                      <SearchBar
                        dataTest="Favored"
                        list={favoredAccounts}
                        keysNameToMach={["name"]}
                        placeholder={translate("TED_SEARCH_CONTACT")}
                      >
                        {favoredAccounts.map(peopleAccount => (
                          <CardAccounts
                            data-test="favoredAccountList"
                            key={peopleAccount.document}
                            onClick={
                              peopleAccount.accounts.length > 1
                                ? () => {
                                  setStateValue("selectedPeople", true);
                                  setStateValue(
                                    "selectedPeopleData",
                                    peopleAccount
                                  );
                                  setStateValue(
                                    "selectedPeopleAccountsData",
                                    peopleAccount.accounts
                                  );
                                  handleIsFavoredContactList(
                                    userInfo.document ===
                                      peopleAccount.document
                                      ? false
                                      : true,
                                    peopleAccount.document
                                  );
                                }
                                : () => {
                                  setStateValue("showFavoredAccounts", true);
                                  setStateValue(
                                    "selectedPeopleData",
                                    peopleAccount
                                  );
                                  setStateValue(
                                    "selectedAccounts",
                                    peopleAccount.accounts[0]
                                  );
                                  checkFavoredAccounts(true, {
                                    ...peopleAccount.accounts[0],
                                    isThirdFavored: false,
                                    people: peopleAccount.name,
                                    peopleDocument:
                                      peopleAccount.document.length === 11
                                        ? formatCPF(peopleAccount.document)
                                        : formatCNPJ(peopleAccount.document)
                                  });
                                  handleIsFavoredContactList(
                                    userInfo.document ===
                                      peopleAccount.document
                                      ? false
                                      : true,
                                    peopleAccount.document
                                  );
                                }
                            }
                          >
                            <WrapperCardAccounts>
                              <Avatar
                                background={gray80}
                                color={gray300}
                                fontSize="14px"
                                name={peopleAccount.name}
                                dataTest="icon-name"
                              />

                              <WrapperAccounts>
                                <TitleAccounts>
                                  <Bold>
                                    {peopleAccount.name}{" "}
                                    {userInfo.document ===
                                      peopleAccount.document &&
                                      translate("TED_YOU")}
                                  </Bold>
                                </TitleAccounts>

                                {peopleAccount.accounts.length > 1 ? (
                                  <SubtitleAccounts>
                                    {peopleAccount.accounts.length}{" "}
                                    {translate("TED_ACCOUNTS")}
                                  </SubtitleAccounts>
                                ) : (
                                  <WrapperAgency>
                                    <SubtitleAccounts>
                                      {translate("SAVE_BANK_ACCOUNT_AGENCY")}{" "}
                                      {peopleAccount.accounts[0].branch}
                                    </SubtitleAccounts>
                                    <SubtitleAccounts>
                                      {peopleAccount.accounts[0].type}{" "}
                                      {peopleAccount.accounts[0].number}-
                                      {peopleAccount.accounts[0].verifyingDigit}
                                    </SubtitleAccounts>
                                  </WrapperAgency>
                                )}
                              </WrapperAccounts>
                            </WrapperCardAccounts>
                          </CardAccounts>
                        ))}
                      </SearchBar>
                    </Fragment>
                  )}
                </WrapperFavored>

                {!hasAccessThirdFavored && (
                  <Disclaimer>
                    <AlertMessage
                      icon="Attention"
                      type="neutral"
                      spacing={{
                        top: "m",
                        bottom: "none",
                        right: "s",
                        left: "s"
                      }}
                    >
                      {translate("TED_ONLY_POSSIBLE_TO_SAVE")}
                    </AlertMessage>
                  </Disclaimer>
                )}
              </Fragment>
            )}
          </Fragment>
        ) : (
          <TransferToNewAccountWrapper id="TransferToNewAccountWrapper">
            <AccTitle>{translate("BANK_DATA")}</AccTitle>

            <AccountInfo>
              <Block>
                <Autocomplete
                  list={banksList}
                  change={bank => changeAndCheckBankName(bank)}
                  value={favoredData.name}
                  fieldToFilter="name"
                  noMatchMessage={translate("NO_MATCH_RESULTS")}
                  label={<Upper>{translate("BANK")}</Upper>}
                  dataTest="recipientBank"
                  backgroundColor={blue20}
                  labelColor={gray200}
                />
              </Block>
            </AccountInfo>
            <BottomAccountInfo>
              <Inline grow={2}>
                <Input
                  onChange={e => changeAndCheckField(e, checkAgency)}
                  maxLength={4}
                  type="text"
                  name="agency"
                  valid={() => checkAgency(favoredData.agency)}
                  required
                  value={favoredData.agency}
                  label={<Upper>{translate("AGENCY")}</Upper>}
                  dataTest="bankBranch"
                  backgroundColor={blue20}
                />
              </Inline>
              <Inline grow={2}>
                <Input
                  onChange={e => changeAndCheckField(e, checkAccount)}
                  maxLength={11}
                  type="text"
                  name="account"
                  valid={() => checkAccount(favoredData.account)}
                  required
                  value={favoredData && favoredData.account}
                  label={<Upper>{translate("ACCOUNT")}</Upper>}
                  dataTest="recipientBankAccount"
                  backgroundColor={blue20}
                />
              </Inline>
              <Inline>
                <Input
                  onChange={e => changeAndCheckField(e, checkVerifyDigit)}
                  maxLength={1}
                  type="text"
                  name="verifyDigit"
                  valid={() => checkVerifyDigit(favoredData.verifyDigit)}
                  required
                  value={favoredData && favoredData.verifyDigit}
                  label={<Upper>{translate("VERIFY_DIGIT")}</Upper>}
                  tinyLabels
                  width={7}
                  dataTest="verifyDigit"
                  backgroundColor={blue20}
                  onFocus={() => setIsFocusedHelperInputText(true)}
                  onBlur={() => setIsFocusedHelperInputText(false)}
                />
                {isFocusedHelperInputText &&
                  <InputHelperText>
                    {translate("TED_VERIFY_NUMBER_HELPER_TEXT")}
                  </InputHelperText>
                }
              </Inline>
            </BottomAccountInfo>

            {!hasAccessThirdFavored && (
              <AsteriskMessage>
                <AsteriskTitle data-test="notAllowedSubscriptionsMessage">
                  {translate("OWN_ACCOUNT_ONLY_MESSAGE")}
                </AsteriskTitle>
              </AsteriskMessage>
            )}

            {hasAccessThirdFavored && (
              <FavoredInfo>
                <FavoredInfoWrapper>
                  <TextFavored>{translate("TED_WHO_IS_FAVORED")}</TextFavored>
                </FavoredInfoWrapper>
                <Buttons
                  paddingWrapper={{ t: "16" }}
                  buttons={[
                    {
                      dataTest: "ButtonNewAccountAm",
                      children: translate("TED_ITS_ME"),
                      onClick: () => {
                        handleIsThirdFavored(false);
                        setStateValue("isThirdFavored", false);
                        setStateValue("validToMoveOn", {
                          account: favoredData.account,
                          verifyDigit: favoredData.verifyDigit,
                          agency: favoredData.agency
                        });
                      },
                      background: isThirdFavored ? "none" : `${blue}`,
                      color: isThirdFavored ? `${gray100}` : `${white}`,
                      border: `solid ${rem(1)} ${isThirdFavored ? gray100 : blue
                        }`,
                      noHoverBackground: true,
                      fontSize: "14",
                      borderRadius: { rightTop: "0", rightBottom: "0" },
                      padding: { r: "20", l: "20" }
                    },
                    {
                      dataTest: "ButtonNewAccountOtherRecipient",
                      children: translate("TED_OTHER"),
                      onClick: () => {
                        handleIsThirdFavored(true);
                        setStateValue("isThirdFavored", true);
                        setStateValue("validToMoveOn", {
                          ...validToMoveOn,
                          thirdFavoredFullName:
                            favoredData.thirdFavoredFullName,
                          thirdFavoredDocument: favoredData.thirdFavoredDocument
                        });
                      },
                      background: isThirdFavored ? `${blue}` : "none",
                      color: isThirdFavored ? `${white}` : `${gray100}`,
                      border: `solid ${rem(1)} ${isThirdFavored ? blue : gray100
                        }`,
                      noHoverBackground: true,
                      fontSize: "14",
                      borderRadius: { leftTop: "0", leftBottom: "0" },
                      padding: { r: "20", l: "20" }
                    }
                  ]}
                />
              </FavoredInfo>
            )}

            {isThirdFavored && (
              <WrapperThird>
                <AccountInfo>
                  <Block>
                    <LocalInput
                      onChange={e => changeAndCheckThirdFavoredFullname(e)}
                      type="text"
                      maskType="name"
                      name="thirdFavoredFullName"
                      required
                      value={favoredData.thirdFavoredFullName}
                      label={translate("TED_FULL_NAME")}
                      tinyLabels
                      width="100"
                      dataTest="InputNewAccountFullName"
                      backgroundColor="none"
                    />
                  </Block>
                </AccountInfo>
                <AccountInfo>
                  <Block>
                    <LocalInput
                      onChange={e => changeAndCheckThirdFavoredDocument(e)}
                      type="text"
                      maskType="cpfcnpj"
                      name="thirdFavoredDocument"
                      required
                      value={favoredData.thirdFavoredDocument}
                      valid={() =>
                        checkValidCpfAndCnpj(favoredData.thirdFavoredDocument)
                      }
                      label={translate("TED_CPF_OR_CNPJ")}
                      tinyLabels
                      width="100"
                      dataTest="InputNewAccountDocument"
                      backgroundColor="none"
                    />
                  </Block>
                </AccountInfo>
              </WrapperThird>
            )}

            <SaveAccount>
              <SaveAccountInfo>
                <Text>{translate("SAVE_BANK_ACCOUNT")}</Text>
              </SaveAccountInfo>
              <Checkbox
                Span
                type="switch"
                checked={accountStatus}
                name="switchBox"
                dataTest="switchSaveAccount"
                onChange={() => changeAccountStatus()}
              />
            </SaveAccount>

            <Space>
              <Separator />
            </Space>

            <Scheduler
              title={`${translate("WHEN")}?`}
              id="fill"
              hideAlert={loading}
            />
          </TransferToNewAccountWrapper>
        )}
      </section>
      <AnimatedBottonSheet
        isOpen={selectedPeople}
        fullHeight
        head={{
          title: translate("TED_SELECT_ACCOUNT"),
          close: true
        }}
        velocity={0.3}
        onClickInBack={() => setStateValue("selectedPeople", false)}
      >
        <WrapperAnimatedBotton>
          <TitleAnimatedBotton>
            {translate("TED_SELECT_ACCOUNT_SEND")}
          </TitleAnimatedBotton>

          {selectedPeopleAccountsData.map(account => (
            <CardAccounts
              data-test="listSavedAccounts"
              key={account.number + account.branch}
              onClick={() => {
                setStateValue("showFavoredAccounts", true);
                setStateValue("selectedPeople", false);
                setStateValue("selectedAccounts", account);
                checkFavoredAccounts(true, {
                  ...account,
                  isThirdFavored: false,
                  people: selectedPeopleData.name,
                  peopleDocument:
                    selectedPeopleData.document.length === 11
                      ? formatCPF(selectedPeopleData.document)
                      : formatCNPJ(selectedPeopleData.document)
                });
              }}
            >
              <WrapperCardAccounts>
                <Icon type={iconBankName(account.bankCode)} />

                <WrapperAccounts>
                  <TitleAccounts data-test={`bankName_${account.bankName}`}>
                    {account.bankCode} - <Bold>{account.bankName}</Bold>
                  </TitleAccounts>
                  <WrapperAgency data-test="accountData">
                    <SubtitleAccounts>
                      {translate("SAVE_BANK_ACCOUNT_AGENCY")} {account.branch}
                    </SubtitleAccounts>
                    <SubtitleAccounts>
                      {account.type} {account.number}-{account.verifyingDigit}
                    </SubtitleAccounts>
                  </WrapperAgency>
                </WrapperAccounts>

                <IconWrapper>
                  <Icon
                    type="Arrow"
                    color={neutral200}
                    height={11}
                    width={11}
                  />
                </IconWrapper>
              </WrapperCardAccounts>
            </CardAccounts>
          ))}
        </WrapperAnimatedBotton>
      </AnimatedBottonSheet>
    </Fragment>
  );
}

export default TransferTabs;