import React, { useState } from "react";
import { StepSlider } from "react-bocombbm-components";
import { Wrapper } from "./styles";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import { translate } from "../../../utils/i18n";
import Tabs from "../../common/Tabs";
import ItemDetail from "./ItemDetail";
import ExchangeList from "./ExchangeList";
import { Context } from "./exchangeHistoryContext";

const History = ({ getExchangeTransactions, exchangeTransactions, error }) => {
  const steps = [ExchangeList, ItemDetail];
  const [currentItem, setCurrentItem] = useState();

  return (
    <ErrorBoundary errorStatus={error}>
      <Wrapper>
        <Tabs selectedTab={0}>
          <section title={translate("HISTORY")}>
            <Context.Provider
              value={{
                getExchangeTransactions,
                exchangeTransactions,
                currentItem,
                setCurrentItem
              }}
            >
              <StepSlider steps={steps} />
            </Context.Provider>
          </section>
        </Tabs>
      </Wrapper>
    </ErrorBoundary>
  );
};

export default History;
