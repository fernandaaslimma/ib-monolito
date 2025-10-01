import React, { Fragment, useContext, useEffect, useState } from "react";
import {
  AccountContainer,
  CoinContainer,
  CoinOption,
  CoinOptionContainer,
  Container,
  Option,
  OptionContainer
} from "./styles";
import { rem } from "../../../styles/tools";
import Icon from "../Icon";
import { neutral200, white } from "../../../styles/settings";
import { Context } from "./offshoreContext";
import { translate } from "../../../utils/i18n";
import { checkIfHasAccess } from "../CanAccess/CanAccess";
import { OFFSHORE } from "../../../utils/constants";
import { redirect } from "../../../utils/redirect";
import { isCorporationUser } from "../../../utils/roles";

const OffshoreSelect = ({ userInfo, fullWidth }) => {
  const options = [
    { label: translate("OFFSHORE_BRAZIL"), icon: "BrasilFlag" },
    { label: translate("OFFSHORE_GLOBAL"), icon: "GlobalFlag" }
  ];

  const [coinOptions, setCoinOptions] = useState([]);

  const coinFlags = [
    { code: "USD", icon: "FlagUSD" },
    { code: "CNY", icon: "FlagCNY" },
    { code: "EUR", icon: "FlagEUR" }
  ];

  const {
    isGlobalMode,
    setIsGlobalMode,
    currentCoin,
    setCurrentCoin,
    offshoreAccount
  } = useContext(Context);

  useEffect(() => {
    if (offshoreAccount?.length > 0) {

      const currentOptions = offshoreAccount.flatMap(accounts =>
        accounts?.currencies?.map(currency => ({
          label: currency.code,
          icon: coinFlags.find(el => el.code === currency.code)?.icon
        })));

      const uniqueOptions = Array.from(new Set(currentOptions?.map(opt => opt.label)))
        .map(label => currentOptions?.find(opt => opt.label === label));

      setCoinOptions(uniqueOptions);
    }
  }, [offshoreAccount]);

  const verifyIfisGlobalMode = mode => {
    if (isGlobalMode && mode === translate("OFFSHORE_GLOBAL")) {
      return true;
    }
    if (!isGlobalMode && mode === translate("OFFSHORE_BRAZIL")) {
      return true;
    }

    return false;
  };

  const verifyOffshorePermission = () => {
    if (
      offshoreAccount &&
      offshoreAccount.length > 0 &&
      checkIfHasAccess(userInfo, [OFFSHORE])
    ) {
      return true;
    }

    return false;
  };

  return verifyOffshorePermission() ? (
    <Container fullWidth={fullWidth}>
      <AccountContainer data-test="offshoreOptions">
        {options.map((item, index) => (
          <OptionContainer
            data-test={item.icon + "Option"}
            current={verifyIfisGlobalMode(item.label)}
            onClick={() => {
              if (item.label === translate("OFFSHORE_GLOBAL")) {
                localStorage.setItem("isGlobalMode", true);
                setCurrentCoin(offshoreAccount?.[0]?.currencies?.[0]?.code);
                setIsGlobalMode(true);
              } else {
                localStorage.setItem("isGlobalMode", false);
                setIsGlobalMode(false);
              }
              isCorporationUser() ?  redirect("/cashaccounts/statements") : redirect("/investments/overview");
            }}
            key={index}
            style={{ marginLeft: rem(index > 0 ? 12 : 0) }}
          >
            <Icon
              iconColor={verifyIfisGlobalMode(item.label) ? white : neutral200}
              type={item.icon}
            />
            <Option current={verifyIfisGlobalMode(item.label)}>
              {item.label}
            </Option>
          </OptionContainer>
        ))}
      </AccountContainer>
      {isGlobalMode && (
        <CoinContainer data-test="offshoreCoins">
          {coinOptions.map((item, index) => (
            <CoinOptionContainer
              data-test={item.label + "Coin"}
              current={currentCoin === item.label}
              onClick={() => {
                setCurrentCoin(item.label);
              }}
              key={index}
              style={{ marginLeft: rem(index > 0 ? 8 : 0) }}
            >
              <Icon type={item.icon} />
              <CoinOption current={currentCoin === item.label}>
                {item.label}
              </CoinOption>
            </CoinOptionContainer>
          ))}
        </CoinContainer>
      )}
    </Container>
  ) : (
    <Fragment />
  );
};

export default OffshoreSelect;
