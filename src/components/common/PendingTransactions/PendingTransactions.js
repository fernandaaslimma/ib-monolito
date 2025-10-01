import React, { Fragment, useState } from "react";
import { Icon } from "react-bocombbm-components";
import moment from "moment";

import { getShortDateStringFromEpoch } from "../../../utils/formatDate";
import { translate } from "../../../utils/i18n";
import formatNumber from "../../../utils/formatNumber";
import { neutral200 } from "../../../styles/settings";
import AnimatedBottonSheet from "../../common/AnimatedBottomSheet";

import { BRL_CURRENCY } from "../../../utils/constants";

import {
  InProgressMovements,
  HowManyMovements,
  TransactionsWrapper,
  TransaciontionTitle,
  ItemWrapper,
  RotateComponent,
  ContainerWrapper,
  FullInfoWrapper
} from "./styles";

import {
  Section,
  Info,
  FundsInfo,
  Modality,
  Label,
  Value
} from "../../InvestmentProducts/Funds/ListStep/styles";
import ShimmerLoading from "../ShimmerLoading";

function PendingTransactions({
  pendingTransactions,
  mode,
  backgroundColor,
  margins,
  loading = false
}) {
  const manipulateByDate = pendingTransactions => {
    return pendingTransactions.reduce((acc, current) => {
      if (!acc[current["transactionDate"]]) {
        acc[current["transactionDate"]] = [];
      }
      acc[current["transactionDate"]].push(current);
      return acc;
    }, {});
  };

  const sortObject = arr => {
    return Object.keys(arr)
      .sort()
      .reverse()
      .reduce((acc, current) => {
        acc[current] = arr[current];
        return acc;
      }, {});
  };

  const manipulatedByDatePendingTransactions = sortObject(
    manipulateByDate(pendingTransactions.reverse())
  );

  const formatTitle = (value, type = false) => {
    const yearsFromToday = moment().diff(value, "years");
    const daysFromToday = moment().diff(value, "days");

    if (type === false) {
      if (daysFromToday === 0) {
        return translate("TODAY");
      } else if (daysFromToday === 1) {
        return translate("YESTERDAY");
      }
    }

    return `${getShortDateStringFromEpoch(value)} ${
      yearsFromToday === 0 ? "" : moment(value).format("YYYY")
    }`;
  };

  const [bottomSheetState, changeBottomSheetState] = useState(false);

  return (
    <Fragment>
      <InProgressMovements
        backgroundColor={backgroundColor}
        data-test="movementsInProgress"
        mode={mode}
        onClick={() => changeBottomSheetState(true)}
        margins={margins}
      >
        {loading ? (
          <ShimmerLoading height={14} />
        ) : (
          <React.Fragment>
            <Icon
              type="ClockFilled"
              width={20}
              height={20}
              color={neutral200}
            />
            <HowManyMovements
              data-test="countMovementsInProgress"
              mode={mode}
            >{`${pendingTransactions.length} ${
              pendingTransactions.length > 1
                ? translate("PENDING_TRANSACTIONS")
                : translate("PENDING_TRANSACTION")
            }`}</HowManyMovements>
            <RotateComponent angle={270}>
              <Icon type="Arrow" height={20} width={20} color={neutral200} />
            </RotateComponent>
          </React.Fragment>
        )}
      </InProgressMovements>

      <AnimatedBottonSheet
        isOpen={bottomSheetState}
        velocity={0.2}
        fullHeight
        head={{ title: translate("PENDING_TRANSACTION_TITLE"), close: true }}
        onClickInBack={() => changeBottomSheetState(false)}
      >
        {" "}
        <ContainerWrapper>
          <TransactionsWrapper data-test="listFunds">
            {manipulatedByDatePendingTransactions &&
              Object.keys(manipulatedByDatePendingTransactions).map(
                (item, index) => {
                  return (
                    <FullInfoWrapper key={index} data-test={`card_${index}`}>
                      <TransaciontionTitle data-test="dateMovements">
                        {formatTitle(item)}
                      </TransaciontionTitle>
                      {manipulatedByDatePendingTransactions[item].map(
                        (card, index) => (
                          <ItemWrapper data-test={`fund_${index}`} key={index}>
                            <Section data-test={`nameFund_${index}`}>
                              <Info>
                                <FundsInfo>
                                  <Modality>
                                    {card.product.classTypeLabel}
                                  </Modality>
                                </FundsInfo>
                                <Value fundName>{card.product.name}</Value>
                              </Info>
                            </Section>
                            <br />
                            <Section>
                              <Info>
                                <Label>{translate("AMOUNT_REDEEMED")}</Label>
                                <Value
                                  data-test={`rentabilityInitial_${card.id}`}
                                >
                                  {`${BRL_CURRENCY} ${formatNumber(
                                    card.transactionValue,
                                    {
                                      digits: 2
                                    }
                                  )}`}
                                </Value>
                              </Info>
                              <Info>
                                <Label>{translate("OPERATION")}</Label>
                                <Value
                                  data-test={`rentabilityRedemption_${card.id}`}
                                >
                                  {card.typeLabel}
                                </Value>
                              </Info>
                            </Section>
                          </ItemWrapper>
                        )
                      )}
                    </FullInfoWrapper>
                  );
                }
              )}
          </TransactionsWrapper>
        </ContainerWrapper>
      </AnimatedBottonSheet>
    </Fragment>
  );
}

export default PendingTransactions;
