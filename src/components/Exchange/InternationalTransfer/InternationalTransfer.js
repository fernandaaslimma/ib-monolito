import React, { useEffect, useState } from "react";
import ActionCard from "../../common/ActionCard";
import { gray200 } from "../../../styles/settings";
import { translate } from "../../../utils/i18n";
import { TYPE_AUTH_FACTOR_TOTP } from "../../../utils/constants";
import { redirect } from "../../../utils/redirect";
import DefaultShimmerLoading from "../../common/DefaultShimmerLoading";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import { Wrapper } from "./styles";
import { rem } from "../../../styles/tools";

const InternationalTransfer = ({ getAuthFactors, authFactors, error }) => {
  const isMobileBrowser = window.matchMedia("(max-width: 760px)").matches;
  const [contentVisible, setContentVisible] = useState(false);

  const updatedNotification = async () => {
    await getAuthFactors();
  };

  useEffect(() => {
    authFactors = null;
    updatedNotification();
  }, []);

  useEffect(() => {
    if (
      authFactors &&
      !authFactors.find(el => el.type === TYPE_AUTH_FACTOR_TOTP)
    ) {
      isMobileBrowser ? redirect("/mfaboardingEx") : redirect("/mfaboarding");
    } else if (authFactors) {
      setContentVisible(true);
    }
  }, [authFactors]);

  return (
    <ErrorBoundary errorStatus={error}>
      {!contentVisible ? (
        <DefaultShimmerLoading repeat={4} innerRepeat={2} />
      ) : (
        <Wrapper>
          <ActionCard
            data-test="sendMoneyCard"
            title={translate("SEND_MONEY")}
            titleStyle={{ color: gray200, marginLeft: rem(12) }}
            cardContentStyle={{ padding: 0 }}
            icon="SendMoney"
            actionClick={() => {
              redirect("/exchanges/international-transfer/send-money");
            }}
          />
          <ActionCard
            data-test="historyCard"
            title={translate("HISTORY")}
            titleStyle={{ color: gray200, marginLeft: rem(12) }}
            cardContentStyle={{ padding: 0 }}
            icon="MenuReports"
            actionClick={() => {
              redirect("/exchanges/international-transfer/history");
            }}
          />
        </Wrapper>
      )}
    </ErrorBoundary>
  );
};

export default InternationalTransfer;
