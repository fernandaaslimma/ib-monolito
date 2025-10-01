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

function PrintViewOffShore({
    balanceHistoryParams,
    balanceAndEventsHistory,
    isEmptyEvents,
    AccountOffShore,
    currentCurrency,
    userName
}) {
    const reorderedItems = [...balanceAndEventsHistory].reverse();

    const PrintValues = ({ children, dataTest }) => {
        return (
            <PrintTotalAmounts atualValue={children} data-test={dataTest}>
                {`${currentCurrency} ${formatNumber(children, { digits: 2 })}`}
            </PrintTotalAmounts>
        );
    };

    const lastTotalAmount = !isEmptyEvents
        ? balanceAndEventsHistory[0].finalTotalAmount
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
                <HeaderWrapper data-test="HeaderPrintViewOffshore">
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
                                    <AccountInfoLabel data-test="clientNameLabelTest">
                                        {translate("CLIENT")}
                                    </AccountInfoLabel>
                                    <AccountInfoContent>
                                        {userName}
                                    </AccountInfoContent>
                                </PrinAccountInfoItem>
                                <PrinAccountInfoItem>
                                    <AccountInfoLabel data-test="clientNameTest">
                                        {translate("ACCOUNT_NUMBER")}
                                    </AccountInfoLabel>
                                    <AccountInfoContent data-test="accountNumberTest">
                                        {AccountOffShore.accountNumber}
                                    </AccountInfoContent>
                                </PrinAccountInfoItem>
                            </PrintAccountInformation>
                            <LineSeparator />
                            <PrintStatementsInfo>
                                <PrintStatementTitle data-test="titleLabelTest">
                                    {translate("STATEMENTS_PRINT_VIEW_TITLE")}
                                </PrintStatementTitle>
                                <PrintStatementsRange data-test="rangeDateLabalTest">
                                    {`${translate(
                                        "STATEMENTS_PRINT_VIEW_FROM_DAY"
                                    )} ${resolveDate(from)} ${translate(
                                        "STATEMENTS_PRINT_VIEW_TO_DAY"
                                    )} ${resolveDate(to)}`}
                                </PrintStatementsRange>
                            </PrintStatementsInfo>
                            <PrintAtualBalance>
                                <div>{translate("STATEMENTS_PRINT_VIEW_PREVIOUS_BALANCE")}</div>
                                <PrintValues dataTest="initialAmountTest">{firstInitialTotalAmount}</PrintValues>
                            </PrintAtualBalance>

                            {isEmptyEvents && (
                                <DefaultWrapper>
                                    <DefaultContent
                                        data-test="emptyDataTest"
                                        Icon={() => <Icon type="NoResults" color={black30} />}
                                        primaryText={translate("NO_RESULTS")}
                                        secondaryTexts={[translate("NO_RESULTS_PERIOD")]}
                                    />
                                </DefaultWrapper>
                            )}
                            {!isEmptyEvents &&
                                reorderedItems.map((item, index) => {                                    
                                    return (
                                        item.transactions?.length > 0 && (                                            
                                            <Fragment key={index}>
                                                <PrintCardWrapper className="print">
                                                    <CardPrint
                                                        title={moment
                                                            .utc(item.date, DEFAULT_API_RESPONSE_DATE_FORMAT)
                                                            .format(getDateFieldPlaceholderByLocale())}
                                                        icon="Calendar"
                                                        titleColor={darkGreen}
                                                        dataTest={`titleDateTest${index}`}
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
                                                                {item.transactions.map((item, i) => (
                                                                    <PrintLine key={i} className="transferLine">
                                                                        <PrintDescriptionItem data-test={`itemDescriptionTest${i}`}>
                                                                            {item.description}
                                                                        </PrintDescriptionItem>
                                                                        {item.counterparty?.name?.length > 0 ? (
                                                                            <PrintCounterPart data-test={`itemPartyNameTest${i}`}>
                                                                                {item.counterparty.name.toUpperCase()}
                                                                            </PrintCounterPart>
                                                                        ) : (
                                                                            <PrintCounterPart>---</PrintCounterPart>
                                                                        )}
                                                                        <PrintValues>{item.amount}</PrintValues>
                                                                    </PrintLine>
                                                                ))}
                                                            </Events>
                                                            <PrintBalance>

                                                                <PrintResume>
                                                                    <PrintResumeItems>
                                                                        <span>
                                                                            {translate(
                                                                                "STATEMENTS_PRINT_VIEW_FINAL_TOTAL_BALANCE"
                                                                            )}
                                                                        </span>
                                                                        <PrintValues>
                                                                            {item.finalTotalAmount}
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
                                <PrintValues dataTest="lastAmountTest">{lastTotalAmount}</PrintValues>
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
                    <PrintTextWraper data-test="footerLabelTest">
                        <span>{translate("STATEMENTS_PRINT_VIEW_FOOTER_TEXT_1")}</span>
                        <span>{translate("STATEMENTS_PRINT_VIEW_FOOTER_TEXT_2")}</span>
                    </PrintTextWraper>
                    <div />
                </FooterWrapper>
            </PrintFooter>
        </PrintWrapper>
    );
}

export default PrintViewOffShore;