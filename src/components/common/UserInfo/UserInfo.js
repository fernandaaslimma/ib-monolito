import React, { Fragment, useContext, useEffect } from "react";
import { userIsLoaded } from "../../../utils/user";
import DefaultShimmerLoading from "../DefaultShimmerLoading";
import { Context } from "../OffshoreSelect/offshoreContext";
import { OFFSHORE } from "../../../utils/constants";
import { checkIfHasAccess } from "../CanAccess/CanAccess";

const UserInfo = ({
  getUserInfo,
  getOffshoreAccount,
  setIsGlobalMode,
  offshoreAccount,
  children,
  userInfo
}) => {
  const { setOffshoreAccount, setCurrentCoin } = useContext(Context);

  useEffect(() => {
    if (!userIsLoaded()) {
      getUserInfo();
    }
  }, []);

  useEffect(() => {
    if (userInfo && checkIfHasAccess(userInfo, [OFFSHORE])) getOffshoreAccount();
  }, [userInfo]);

  useEffect(() => {
    if(offshoreAccount) setCurrentCoin(offshoreAccount?.[0]?.currencies?.[0]?.code);
    setOffshoreAccount(offshoreAccount);
    const isGlobalMode = localStorage.getItem("isGlobalMode");
    if (!isGlobalMode) {
      localStorage.setItem("isGlobalMode", false);
    }

    setIsGlobalMode(
      localStorage.getItem("isGlobalMode") === "true" ? true : false
    );
  }, [offshoreAccount]);

  return (
    <Fragment>
      {userInfo && !userInfo.document ? (
        <DefaultShimmerLoading repeat={1} innerRepeat={4} />
      ) : (
        children
      )}
    </Fragment>
  );
};

export default UserInfo;
