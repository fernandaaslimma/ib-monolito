import React, { Fragment, useState } from "react";
import moment from "moment";
import * as htmlToImage from "html-to-image";

import formatNumber from "../../../../../utils/formatNumber";
import { translate } from "../../../../../utils/i18n";
import { shareFromBase64 } from "../../../../../utils/downloadFile";
import createLogError from "../../../../../utils/createLogError";
import { Button } from "react-bocombbm-components";

import {
  CardTitle,
  CardContent,
  Card,
  AvailableAmountHeader,
  BlockedAmountFooter,
  AmountsContent,
  AmountsValue,
  Line,
  ItemDescription,
  ItemValue,
  CounterPart,
  StatementInfo,
  VoucherLine,
  VoucherWrapper,
  Disclaimer,
  TearedVoucher,
  ShareArea,
  ContentNotShared
} from "./styles";
import { DEFAULT_VALUE, FILE_FORMAT_PNG } from "../../../../../utils/constants";
import AnimatedBottonSheet from "../../../../common/AnimatedBottomSheet";
import DefaultShimmerLoading from "../../../../common/DefaultShimmerLoading";
import TransferDetails from "../../TransferDetails";
import Voucher from "../../Voucher";

function StatementsCards({
  item,
  maskValues,
  formatTitle,
  defaultCurrency,
  isFuture = false,
  getBank,
  loading,
  account
}) {
  const [isOpenDetailedBottomSheet, setIsOpenDetailedBottomSheet] = useState(
    false
  );
  const [isOpenVoucherBottomSheet, setIsOpenVoucherBottomSheet] = useState(
    false
  );
  const [loadingVoucher, setLoadingVoucher] = useState(false);

  const [transferContent, setTransferContent] = useState({
    transferInfo: {},
    receiverInfo: {},
    senderInfo: {},
    transferType: ""
  });

  const ref = React.useRef(null);

  const daysFromToday = moment().diff(item.date, "days");

  const formatValues = value => formatNumber(Math.abs(value), { digits: 2 });

  const mountCashAccount = (transferData, key) => {
    const number =
      transferData[key].number && transferData[key].number.length
        ? transferData[key].number
        : transferData[key].accountNumber &&
          transferData[key].accountNumber.length
        ? transferData[key].accountNumber
        : "X";

    const getVD = () => {
      if (
        transferData[key].accountVerifyingDigit &&
        transferData[key].accountVerifyingDigit.length
      ) {
        return transferData[key].accountVerifyingDigit;
      } else if (
        transferData[key].verifyingDigit &&
        transferData[key].verifyingDigit.legth
      ) {
        return transferData[key].verifyingDigit;
      } else return "X";
    };

    return `${number}-${getVD()}`;
  };

  const triggerModal = transferData => {
    setTransferContent({
      transferInfo: transferData,
      receiverInfo: !isFuture
        ? {
            ...transferData.counterParty,
            name:
              transferData.counterParty &&
              transferData.counterParty.partyName.length
                ? transferData.counterParty.partyName
                : "",
            document: transferData.counterParty
              ? transferData.counterParty.partyDocument
              : "",
            branch: transferData.counterParty
              ? transferData.counterParty.accountBranch
              : "",
            cashAccount: transferData.counterParty
              ? mountCashAccount(transferData, "counterParty")
              : "",
            bankName: transferData.counterParty
              ? getBankName(transferData.counterParty.bankISPB)
              : ""
          }
        : {
            ...transferData.recipient,
            cashAccount: mountCashAccount(transferData, "recipient")
          },
      senderInfo: {
        ...account,
        bankName: getBankName(account.bankISPB),
        cashAccount: `${account.number}-${account.verifyingDigit}`
      },
      transferType: transferData.eventClass
    });
    setIsOpenDetailedBottomSheet(true);
    return;
  };

  const injectCurrency = value => {
    return `${
      Math.sign(value) === -1 ? "-" : "+"
    } ${defaultCurrency} ${formatValues(value)}`;
  };

  const renderCounterPartName = item => {
    if (!isFuture) {
      return item.counterParty && item.counterParty.partyName.length
        ? item.counterParty.partyName
        : DEFAULT_VALUE;
    } else {
      return item.recipient && item.recipient.name.length
        ? item.recipient.name
        : DEFAULT_VALUE;
    }
  };

  const renderVoucher = () => {
    setIsOpenDetailedBottomSheet(false);
    setIsOpenVoucherBottomSheet(true);
  };

  const getBankName = ispb => {
    const bankName = getBank(ispb);
    return bankName;
  };

  const shareAction = () => {
    setLoadingVoucher(true);
    htmlToImage
      .toJpeg(ref.current, { quality: 0.7 })
      .then(async function(dataUrl) {
        const strImage = dataUrl.replace(/^data:image\/[a-z]+;base64,/, "");
        setLoadingVoucher(false);

        await shareFromBase64(
          strImage,
          translate("VOUCHER") + ".png",
          FILE_FORMAT_PNG
        );
      })
      .catch(function(error) {
        createLogError({
          message: error.message,
          customMessage:
            "This error was originated when trying to share voucher",
          status: ""
        });
      });
    if (loadingVoucher === true) {
      setLoadingVoucher(false);
    }
  };

  return loading ? (
    <DefaultShimmerLoading repeat={2} innerRepeat={3} />
  ) : (
    <Fragment>
      <Card data-test="card">
        <CardTitle data-test="cardDate">
          {item.date && formatTitle(item.date)}
        </CardTitle>
        <CardContent>
          {item && !isFuture && daysFromToday >= 1 && (
            <AvailableAmountHeader>
              <AmountsContent>{translate("DAY_BALANCE")}</AmountsContent>
              &nbsp;
              <AmountsValue>
                {!isFuture &&
                  item.availableAmount &&
                  `${defaultCurrency} ${maskValues(
                    formatValues(item.availableAmount)
                  )}`}
              </AmountsValue>
            </AvailableAmountHeader>
          )}

          {item.events &&
            item.events.map((event, i) => {
              const finalValue = injectCurrency(event.amount);
              return (
                <Line
                  data-test="cardStatement"
                  isFuture={isFuture}
                  key={i}
                  onClick={() => !isFuture && triggerModal(event)}
                >
                  <StatementInfo data-test="cardTransactionType">
                    <ItemDescription value={event.amount}>
                      {event.description && event.description.toUpperCase()}
                    </ItemDescription>
                    <CounterPart>{renderCounterPartName(event)}</CounterPart>
                  </StatementInfo>
                  <ItemValue data-test="cardValue" value={event.amount}>
                    {maskValues(finalValue)}
                  </ItemValue>
                </Line>
              );
            })}
          {item && !isFuture && item.blockedAmount != 0 && (
            <BlockedAmountFooter>
              <AmountsContent>{translate("STATEMENTS_BLOCKED")}</AmountsContent>
              &nbsp;
              <AmountsValue>
                {!isFuture &&
                  `${defaultCurrency} ${maskValues(
                    formatValues(item.blockedAmount)
                  )}`}
              </AmountsValue>
            </BlockedAmountFooter>
          )}
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
        dataTest={"BottomSheetTitle"}
      >
        <TransferDetails
          transferContent={transferContent}
          maskValues={maskValues}
          injectCurrency={injectCurrency}
          renderVoucher={renderVoucher}
          closeVoucher={() => setIsOpenDetailedBottomSheet(false)}
        />
      </AnimatedBottonSheet>
      <AnimatedBottonSheet
        isOpen={isOpenVoucherBottomSheet}
        velocity={0.2}
        fullHeight
        fromLeft
        head={{ title: translate("VOUCHER"), close: true }}
        onClickInBack={() => setIsOpenVoucherBottomSheet(false)}
        datTest={"BottomSheetTitle"}
      >
        <VoucherWrapper dataTest={"VoucherWrapper"}>
          <div ref={ref} dataTest={"VoucherToShare"}>
            <Voucher
              transferContent={transferContent}
              defaultCurrency={defaultCurrency}
              isOpenVoucherBottomSheet={isOpenVoucherBottomSheet}
              downloadMode={false}
            />
          </div>
          <ContentNotShared>
            <VoucherLine />

            <Disclaimer>{translate("VOUCHER_CONTACT_YOUR_BANKER")}</Disclaimer>
          </ContentNotShared>

          <TearedVoucher />
          <ShareArea>
            <Button
              dataTest="shareVoucherButton"
              type="outline"
              onClick={() => shareAction()}
              loading={loadingVoucher}
              disabled={loadingVoucher}
            >
              {translate("VOUCHER_SHARE")}
            </Button>
          </ShareArea>
        </VoucherWrapper>
      </AnimatedBottonSheet>
    </Fragment>
  );
}

export default StatementsCards;
