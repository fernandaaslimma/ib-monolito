import React, { Fragment } from "react";
import {
  translate,
  getDateFieldPlaceholderByLocale
} from "../../../../utils/i18n";
import { Icon } from "react-bocombbm-components";
import moment from "moment";
import { DEFAULT_API_RESPONSE_DATE_FORMAT } from "../../../../utils/constants";
import DefaultContent from "../../../common/DefaultContent";
import formatNumber from "../../../../utils/formatNumber";
import { darkGreen, black30 } from "../../../../styles/settings";

import {
  Events,
  DefaultWrapper,
  AccountInfoLabel,
  AccountInfoContent,
  PrintCardWrapper,
  PrintLine,
  PrintHeader,
  PrintModel,
  PrintFooter,
  LineSeparator,
  HeaderWrapper,
  PrintWrapper,
  FooterWrapper,
  PrintTextWraper,
  PrintStatementTitle,
  PrintStatementsInfo,
  PrintStatementsRange,
  PrintAccountInformation,
  PrinAccountInfoItem,
  PrintAtualBalance,
  ContentCardPrint,
  PrintCounterPart,
  PrintDescriptionItem,
  PrintDescriptionTextItem,
  PrintAmountTextItem,
  PrintBalance,
  PrintResume,
  PrintResumeItems,
  PrintTotalAmounts,
  PrintFooterSpace,
  PrintHeaderSpace,
  PrintContent,
  PrintHeaderTr,
  PrintFooterTr,
  PrintHeaderTd,
  PrintFooterTd
} from "./styles";

import CardPrint from "../../../../components/common/CardPrint";
import { isIndividualUser } from "../../../../utils/roles";

function PrintView({
  balanceHistoryParams,
  balanceAndEventsHistory,
  isEmptyEvents,
  currentAccount,
  printCurrency
}) {
  const reorderedItems = [...balanceAndEventsHistory].reverse();

  let accountInformation = [
    {
      label: isIndividualUser() ? translate("CLIENT") : translate("STATEMENTS_PRINT_VIEW_CORPORATE_NAME"),
      content: currentAccount.name
    },
    {
      label: translate("STATEMENTS_PRINT_VIEW_ACCOUNT_INFO"),
      content: currentAccount.accountNumber
    }
  ];

  const PrintValues = ({ children }) => {
    return (
      <PrintTotalAmounts atualValue={children}>
        {`${printCurrency} ${formatNumber(children, { digits: 2 })}`}
      </PrintTotalAmounts>
    );
  };

  const lastTotalAmount = !isEmptyEvents
    ? balanceAndEventsHistory[0].totalAmount
    : 0;
  const firstInitialTotalAmount = !isEmptyEvents
    ? balanceAndEventsHistory[balanceAndEventsHistory.length - 1]
        .initialTotalAmount
    : 0;

  const {
    range: { from, to }
  } = balanceHistoryParams;

  const resolveDate = date => {
    return date
      ? moment
          .utc(date, DEFAULT_API_RESPONSE_DATE_FORMAT)
          .format(getDateFieldPlaceholderByLocale())
      : moment.utc().format(getDateFieldPlaceholderByLocale());
  };

  return (
    <PrintWrapper>
      <PrintHeader>
        <HeaderWrapper>
          <Icon type="BrandLogo" />
          <PrintTextWraper>{`${translate(
            "STATEMENTS_PRINT_VIEW_GENERATED_IN"
          )} ${resolveDate()}`}</PrintTextWraper>
        </HeaderWrapper>
        <LineSeparator />
      </PrintHeader>
      <PrintModel>
        <PrintHeaderSpace>
          <PrintHeaderTr>
            <PrintHeaderTd></PrintHeaderTd>
          </PrintHeaderTr>
        </PrintHeaderSpace>

        <PrintContent>
          <tr>
            <td>
              <PrintAccountInformation>
                <PrinAccountInfoItem>
                  <AccountInfoLabel>
                    {accountInformation[0].label}
                  </AccountInfoLabel>
                  <AccountInfoContent>
                    {accountInformation[0].content}
                  </AccountInfoContent>
                </PrinAccountInfoItem>
                <PrinAccountInfoItem>
                  <AccountInfoLabel>
                    {accountInformation[1].label}
                  </AccountInfoLabel>
                  <AccountInfoContent>
                    {accountInformation[1].content}
                  </AccountInfoContent>
                </PrinAccountInfoItem>
              </PrintAccountInformation>
              <LineSeparator />
              <PrintStatementsInfo>
                <PrintStatementTitle>
                  {translate("STATEMENTS_PRINT_VIEW_TITLE")}
                </PrintStatementTitle>
                <PrintStatementsRange>
                  {`${translate(
                    "STATEMENTS_PRINT_VIEW_FROM_DAY"
                  )} ${resolveDate(from)} ${translate(
                    "STATEMENTS_PRINT_VIEW_TO_DAY"
                  )} ${resolveDate(to)}`}
                </PrintStatementsRange>
              </PrintStatementsInfo>
              <PrintAtualBalance>
                <div>{translate("STATEMENTS_PRINT_VIEW_PREVIOUS_BALANCE")}</div>
                <PrintValues>{firstInitialTotalAmount}</PrintValues>
              </PrintAtualBalance>

              {isEmptyEvents && (
                <DefaultWrapper>
                  <DefaultContent
                    data-test="Empty_Statements"
                    Icon={() => <Icon type="NoResults" color={black30} />}
                    primaryText={translate("NO_RESULTS")}
                    secondaryTexts={[translate("NO_RESULTS_PERIOD")]}
                  />
                </DefaultWrapper>
              )}
              {!isEmptyEvents &&
                reorderedItems.map((item, index) => {
                  return (
                    item.events !== null &&
                    item.events.length !== 0 && (
                      <Fragment key={index}>
                        <PrintCardWrapper className="print">
                          <CardPrint
                            title={moment
                              .utc(item.date, DEFAULT_API_RESPONSE_DATE_FORMAT)
                              .format(getDateFieldPlaceholderByLocale())}
                            icon="Calendar"
                            titleColor={darkGreen}
                          >
                            <ContentCardPrint data-test="cardStatement">
                              <Events>
                                <PrintLine>
                                  <PrintDescriptionTextItem>
                                    {translate(
                                      "STATEMENTS_PRINT_VIEW_DESCRIPTION"
                                    )}
                                  </PrintDescriptionTextItem>
                                  <PrintDescriptionTextItem>
                                    {translate(
                                      "STATEMENTS_PRINT_VIEW_CONTRAPART"
                                    )}
                                  </PrintDescriptionTextItem>
                                  <PrintAmountTextItem>
                                    {`${translate(
                                      "STATEMENTS_PRINT_VIEW_AMOUNT"
                                    )}`}
                                  </PrintAmountTextItem>
                                </PrintLine>
                                {item.events.map((item, i) => (
                                  <PrintLine key={i} className="transferLine">
                                    <PrintDescriptionItem data-test="cardTransactionType">
                                      {item.description}
                                    </PrintDescriptionItem>
                                    {item.counterParty &&
                                    item.counterParty.partyName.length ? (
                                      <PrintCounterPart>
                                        {item.counterParty.partyName.toUpperCase()}
                                      </PrintCounterPart>
                                    ) : (
                                      <PrintCounterPart>---</PrintCounterPart>
                                    )}
                                    <PrintValues>{item.amount}</PrintValues>
                                  </PrintLine>
                                ))}
                              </Events>
                              <PrintBalance>
                                {item.blockedAmount > 0 && (
                                  <PrintResume>
                                    <PrintResumeItems>
                                      <span>
                                        {translate(
                                          "STATEMENTS_PRINT_VIEW_FINAL_BLOCKED_AMOUNT"
                                        )}
                                      </span>
                                      <PrintValues>
                                        {item.blockedAmount}
                                      </PrintValues>
                                    </PrintResumeItems>
                                    <LineSeparator />
                                  </PrintResume>
                                )}

                                {item.blockedAmount > 0 && (
                                  <PrintResume>
                                    <PrintResumeItems>
                                      <span>
                                        {translate(
                                          "STATEMENTS_PRINT_VIEW_AVAILABLE_FINAL_BALANCE"
                                        )}
                                      </span>
                                      <PrintValues>
                                        {item.availableAmount}
                                      </PrintValues>
                                    </PrintResumeItems>
                                    <LineSeparator />
                                  </PrintResume>
                                )}

                                <PrintResume>
                                  <PrintResumeItems>
                                    <span>
                                      {translate(
                                        "STATEMENTS_PRINT_VIEW_FINAL_TOTAL_BALANCE"
                                      )}
                                    </span>
                                    <PrintValues>
                                      {item.totalAmount}
                                    </PrintValues>
                                  </PrintResumeItems>
                                </PrintResume>
                              </PrintBalance>
                            </ContentCardPrint>
                          </CardPrint>
                        </PrintCardWrapper>
                      </Fragment>
                    )
                  );
                })}
              <PrintAtualBalance>
                <div>{translate("STATEMENTS_PRINT_VIEW_FINAL_BALANCE")}</div>
                <PrintValues>{lastTotalAmount}</PrintValues>
              </PrintAtualBalance>
            </td>
          </tr>
        </PrintContent>
        <PrintFooterSpace>
          <PrintFooterTr>
            <PrintFooterTd></PrintFooterTd>
          </PrintFooterTr>
        </PrintFooterSpace>
      </PrintModel>
      <PrintFooter>
        <FooterWrapper>
          <PrintTextWraper>
            <span>{translate("STATEMENTS_PRINT_VIEW_FOOTER_TEXT_1")}</span>
            <span>{translate("STATEMENTS_PRINT_VIEW_FOOTER_TEXT_2")}</span>
          </PrintTextWraper>
          <div />
        </FooterWrapper>
      </PrintFooter>
    </PrintWrapper>
  );
}

export default PrintView;
