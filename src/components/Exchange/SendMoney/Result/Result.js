import React, { Fragment, useContext, useEffect } from "react";
import { InstanceContext } from "../sendMoneyContext";
import { FooterButtonsContainer } from "../styles";
import { ContainerBlue20 } from "./styles";
import Button from "../../../common/Button";
import { translate } from "../../../../utils/i18n";
import Success from "./Success/Success";
import Error from "./Error/Error";
import { redirect } from "../../../../utils/redirect";

const Result = () => {
  const {
    exchangeData,
    exchangeError,
    cleanExchangeTransaction,
    cleanConfirmExchangeError = () => {}
  } = useContext(InstanceContext);

  const showTitle = () => {
    if (
      exchangeError.showErrorToUser &&
      exchangeError.errors &&
      exchangeError.errors[0] &&
      exchangeError.errors[0].title
    ) {
      return exchangeError.errors[0].title;
    } else {
      return translate("EXCHANGE_TRANSACTION_ERROR");
    }
  };

  const showMessage = () => {
    if (
      exchangeError.showErrorToUser &&
      exchangeError.errors &&
      exchangeError.errors[0] &&
      exchangeError.errors[0].message
    ) {
      return exchangeError.errors[0].message;
    } else {
      return translate("EXCHANGE_TRANSACTION_ERROR_MSG");
    }
  };

  useEffect(() => {
    return () => {
      cleanExchangeTransaction();
      cleanConfirmExchangeError();
    };
  }, []);

  return (
    <Fragment>
      <ContainerBlue20>
        {exchangeError ? (
          <Error mainMessage={showTitle()} secondaryMessage={showMessage()} />
        ) : (
          <Success exchangeData={exchangeData} />
        )}
      </ContainerBlue20>

      <FooterButtonsContainer>
        <Button
          dataTest="CloseBtn"
          actionSecondary
          onClick={() => {
            redirect("/exchanges/international-transfer");
          }}
          style={{ width: "100%" }}
        >
          {translate("CLOSE")}
        </Button>
      </FooterButtonsContainer>
    </Fragment>
  );
};

export default Result;
