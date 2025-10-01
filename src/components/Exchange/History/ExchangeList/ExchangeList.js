import React, { useContext, useEffect, useState } from "react";
import { Button, Icon } from "react-bocombbm-components";
import moment from "moment";
import { FilterContainer } from "./styles";
import { Context } from "../exchangeHistoryContext";
import DefaultShimmerLoading from "../../../common/DefaultShimmerLoading";
import FilterDate from "../../../common/FilterDate";
import FooterButtons from "../../../common/FooterButtons";
import ListItem from "../../../common/ListItem";
import { getShortDateStringFromEpoch } from "../../../../utils/formatDate";
import { redirect } from "../../../../utils/redirect";
import { rem } from "../../../../styles/tools";
import { translate } from "../../../../utils/i18n";
import formatNumber from "../../../../utils/formatNumber";
import DefaultContent from "../../../common/DefaultContent";
import { black30 } from "../../../../styles/settings";

const ExchangeList = ({ stepForward }) => {
  const [loading, setLoading] = useState(true);
  const [showFilter, setShowFilter] = useState(false);
  const [currentPeriod, setCurrentPeriod] = useState(false);

  const {
    getExchangeTransactions,
    exchangeTransactions,
    setCurrentItem
  } = useContext(Context);

  const getHistory = async filterParam => {
    setLoading(true);
    await getExchangeTransactions(filterParam);
    setLoading(false);
  };

  useEffect(() => {
    const today = new Date();
    const targetDate = moment(today).subtract(60, "days");

    getHistory({
      dateFrom: moment(targetDate).format("YYYY-MM-DD"),
      dateTo: moment(today).format("YYYY-MM-DD")
    });
  }, []);


  const formatTitle = (value, type = false) => {
    const daysFromToday = moment
      .utc()
      .startOf("day")
      .diff(
        moment(value)
          .utc()
          .startOf("day"),
        "days"
      );

    if (type === false) {
      if (daysFromToday === 0) {
        return translate("TODAY");
      } else if (daysFromToday === 1) {
        return translate("YESTERDAY");
      } else if (daysFromToday === -1) {
        return translate("TOMORROW");
      }
    }

    return `${getShortDateStringFromEpoch(value, true)} ${moment(value).format("YYYY")}`;
  };

  return (
    <div>
      <FilterContainer data-test="filterButtonContainer">
        <Button
          type={currentPeriod ? "primary" : "outline"}
          withIcon={{ name: "CalendarEmpty", position: "left" }}
          spacing={{
            top: "none",
            bottom: "none",
            right: "none",
            left: "none"
          }}
          disabled={loading}
          loading={loading}
          onClick={() => setShowFilter(true)}
          dataTest="openFilterButton"
        >
          {currentPeriod ? currentPeriod : translate("PERIOD")}
        </Button>
      </FilterContainer>
      {loading ? (
        <div style={{ height: rem(244) }}>
          <DefaultShimmerLoading
            repeat={1}
            innerRepeat={3}
            dataTest="shimmerLoading"
          />
        </div>
      ) : exchangeTransactions && exchangeTransactions.length > 0 ? (
        exchangeTransactions.map((item, index) => (
          <ListItem
            dataTest="listItem"
            key={index}
            stepForward={() => {
              setCurrentItem(item);
              stepForward();
            }}
            date={formatTitle(item.transactionDate)}
            title={translate("EXCHANGE_HISTORY_BENEFICIARY")}
            subTitle={item.target.name}
            label={translate("AMOUNT_PAID")}
            info={`${item.origin.currency} ${formatNumber(item.origin.total, {
              digits: 2
            })}`}
            secondLabel={translate("CONVERTED_VALUE")}
            secondInfo={`${item.target.currency} ${formatNumber(
              item.target.total,
              { digits: 2 }
            )}`}
          />
        ))
      ) : (
        <DefaultContent
          Icon={() => <Icon type="NoTransactions" color={black30} />}
          primaryText={translate("EXCHANGE_NO_HISTORY")}
          secondaryTexts={[translate("EXCHANGE_NO_HISTORY_MSG")]}
        />
      )}
      <FooterButtons
        dataTest="footerButtons"
        showButtons={!loading}
        secondButton={translate("SEND_MONEY")}
        onClickFirst={() => redirect("/exchanges/international-transfer")}
        onClickSecond={() =>
          redirect("/exchanges/international-transfer/send-money")
        }
      />
      <FilterDate
        dataTest="filterModal"
        showFilter={showFilter}
        closeFilter={() => setShowFilter(false)}
        onFilter={params => {
          setShowFilter(false);
          setCurrentPeriod(
            `${getShortDateStringFromEpoch(params.dateFrom)} ${translate(
              "TO"
            )} ${getShortDateStringFromEpoch(params.dateTo)}`
          );
          getHistory(params);
        }}
      />
    </div>
  );
};

export default ExchangeList;
