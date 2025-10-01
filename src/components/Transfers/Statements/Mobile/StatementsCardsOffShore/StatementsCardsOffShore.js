import React, { Fragment, useState } from "react";
import moment from "moment";
import formatNumber from "../../../../../utils/formatNumber";
import { translate } from "../../../../../utils/i18n";

import {
    CardTitle,
    CardContent,
    Card,
    AvailableAmountHeader,
    AmountsContent,
    AmountsValue,
    Line,
    ItemDescription,
    ItemValue,
    CounterPart,
    StatementInfo
} from "./styles";
import AnimatedBottonSheet from "../../../../common/AnimatedBottomSheet";
import DefaultShimmerLoading from "../../../../common/DefaultShimmerLoading";
import TransferDetails from "../../TransferDetails";

function StatementsCardsOffShore({
    item,
    maskValues,
    formatTitle,
    defaultCurrency,
    loading
}) {
    const [isOpenDetailedBottomSheet, setIsOpenDetailedBottomSheet] = useState(
        false
    );

    const [transferContent, setTransferContent] = useState({
        transferInfo: {},
        receiverInfo: {},
        senderInfo: {},
        transferType: ""
    });
        
    const daysFromToday = moment().diff(item.date, "days");

    const formatValues = value => formatNumber(Math.abs(value), { digits: 2 });

    const triggerModal = transferData => {
        setTransferContent({
            transferInfo: transferData,
            receiverInfo:
            {
                ...transferData.counterparty,
                name:
                    transferData?.counterparty?.name?.length
                        ? transferData.counterparty.name
                        : ""
            }
        });
        setIsOpenDetailedBottomSheet(true);
        return;
    };

    const injectCurrency = value => {
        return `${Math.sign(value) === -1 ? "-" : "+"
            } ${defaultCurrency} ${formatValues(value)}`;
    };

    const renderCounterPartName = (item) => item.counterparty?.name?.length ? item.counterparty.name : "";

    const renderVoucher = () => {
        setIsOpenDetailedBottomSheet(false);
    };

    return loading ? (
        <DefaultShimmerLoading repeat={2} innerRepeat={3} />
    ) : (
        <Fragment>
            <Card data-test="cardOffshore">
                <CardTitle data-test="cardDateOffShore">
                    {item.date && formatTitle(item.date)}
                </CardTitle>
                <CardContent>
                    {item && daysFromToday >= 1 && (
                        <AvailableAmountHeader>
                            <AmountsContent>{translate("DAY_BALANCE")}</AmountsContent>
                            &nbsp;
                            <AmountsValue data-test="amountValueOffShore">
                                {item.finalTotalAmount &&
                                    `${defaultCurrency} ${maskValues(
                                        formatValues(item.finalTotalAmount)
                                    )}`}
                            </AmountsValue>
                        </AvailableAmountHeader>
                    )}

                    {item.transactions &&
                        item.transactions.map((event, i) => {
                            const finalValue = injectCurrency(event.amount);
                            return (
                                <Line
                                    data-test={`cardStatementOffShore${i}`}
                                    isFuture={false}
                                    key={i}
                                    onClick={() => triggerModal(event)}
                                >
                                    <StatementInfo data-test={`cardTransactionTypeOffShore${i}`}>
                                        <ItemDescription value={event.amount}>
                                            {event.description && event.description.toUpperCase()}
                                        </ItemDescription>
                                        <CounterPart>{renderCounterPartName(event)}</CounterPart>
                                    </StatementInfo>
                                    <ItemValue data-test={`cardValueOffShore${i}`} value={event.amount}>
                                        {maskValues(finalValue)}
                                    </ItemValue>
                                </Line>
                            );
                        })}
                </CardContent>
            </Card>
            <AnimatedBottonSheet
                isOpen={
                    isOpenDetailedBottomSheet && Object.keys(transferContent).length > 0
                }
                velocity={0.2}
                head={{ title: transferContent.transferInfo.description }}
                onClickInBack={() => setIsOpenDetailedBottomSheet(false)}
                zIndex={3000}
                dataTest={"BottomSheetTitleOffShore"}
            >
                <TransferDetails
                    transferContent={transferContent}
                    maskValues={maskValues}
                    injectCurrency={injectCurrency}
                    renderVoucher={renderVoucher}
                    closeVoucher={() => setIsOpenDetailedBottomSheet(false)}
                />
            </AnimatedBottonSheet>
        </Fragment>
    );
}

export default StatementsCardsOffShore;
