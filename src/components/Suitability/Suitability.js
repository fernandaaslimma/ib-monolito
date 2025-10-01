/* eslint-disable react/display-name */
import React, { Fragment, useEffect } from "react";

import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

import { rem } from "../../styles/tools";

import FooterButtons from "../common/FooterButtons";
import {
  Container,
  CurrentProfileLabel,
  ProfilesContainer,
  ProfilesLabel,
  Text
} from "./styles";
import { translate } from "../../utils/i18n";
import DefaultShimmerLoading from "../common/DefaultShimmerLoading";
import { redirect } from "../../utils/redirect";

const Suitability = props => {
  const {
    getInvestorProfile = () => {},
    investorProfile,
    suitabilityError,
    authFactors,
    getAuthFactors = () => {},
    cleanSuitabilityError = () => {}
  } = props;

  const availableProfiles = [
    {
      profileLabel: translate("SUITABILITY_CONSERVATIVE"),
      message: translate("SUITABILITY_CONSERVATIVE_DETAILS")
    },
    {
      profileLabel: translate("SUITABILITY_MODERATE"),
      message: translate("SUITABILITY_MODERATE_DETAILS")
    },
    {
      profileLabel: translate("SUITABILITY_AGRESSIVE"),
      message: translate("SUITABILITY_AGRESSIVE_DETAILS")
    }
  ];

  const getInitialInfo = async () => {
    await cleanSuitabilityError();
    await getInvestorProfile();
    getAuthFactors();
  };

  useEffect(() => {
    getInitialInfo();
  }, []);

  return authFactors ? (
    <Container>
      <ErrorBoundary
        errorStatus={suitabilityError && suitabilityError.status != 404}
        {...props}
      >
        <ProfilesContainer>
          {investorProfile && (
            <Fragment>
              <ProfilesLabel>{translate("SUITABILITY_PROFILE")}</ProfilesLabel>
              <CurrentProfileLabel style={{ fontWeight: "700" }}>
                {
                  availableProfiles.find(
                    el => el.profileLabel === investorProfile
                  ).profileLabel
                }
              </CurrentProfileLabel>
              <Text>
                {
                  availableProfiles.find(
                    el => el.profileLabel === investorProfile
                  ).message
                }
              </Text>
            </Fragment>
          )}

          <ProfilesLabel style={{ marginTop: rem(investorProfile ? 64 : 16) }}>
            {translate("SUITABILITY_AVAILABLE_PROFILES")}
          </ProfilesLabel>
          {availableProfiles.map(
            (item, index) =>
              item.profileLabel !== investorProfile && (
                <Text key={index}>
                  <span style={{ fontWeight: "700" }}>{item.profileLabel}</span>
                  {" - " + item.message}
                </Text>
              )
          )}
        </ProfilesContainer>
      </ErrorBoundary>
      {(!suitabilityError || suitabilityError.status === 404) && (
        <FooterButtons
          style={{ flexDirection: "column-reverse" }}
          margin={{ r: 0 }}
          dataTest="footerButtons"
          showButtons
          secondButton={translate("SUITABILITY_UPDATE_PROFILE")}
          onClickSecond={() => redirect("/suitability/form")}
          onClickFirst={() => history.back()}
          secondButtonStyle={{ marginBottom: rem(8) }}
        />
      )}
    </Container>
  ) : (
    <DefaultShimmerLoading />
  );
};

export default Suitability;
