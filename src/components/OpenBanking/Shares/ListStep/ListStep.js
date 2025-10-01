import React, { useContext } from "react";
import { Icon } from "react-bocombbm-components";
import { Image } from "../../../common/Image/Image";
import DefaultContent from "../../../common/DefaultContent";
import Tabs from "../../../common/Tabs/Tabs";
import Tag from "../../../common/Tag";
import { scrollToTop } from "../../../../utils/dom";
import DefaultShimmerLoading from "../../../common/DefaultShimmerLoading";
import { rem } from "../../../../styles/tools";
import { black30 } from "../../../../styles/settings";
import { translate } from "../../../../utils/i18n";
import { formatDate } from "../../../../utils/openBankingUtils";
import { OpenBankingSharesContext } from "../Shares";
import BankPng from "../../../common/Icon/default_bank100.png";
import { checkIfHasAccess } from "../../../common/CanAccess/CanAccess";
import { APPROVE_CONSENTS } from "../../../../utils/constants";

import {
  Wrapper,
  Card,
  InstitutionName,
  ShareDetails,
  SharedDate,
  InstitutionInfo,
  Title,
  InfoCard,
  UpperWrapper,
  AccessPortal
} from "./styles";

function ListStep({ stepForward }) {
  const {
    state: { selectedTab, loadingCurrentShares },
    props: {
      transmittedCurrentShares,
      receivedCurrentShares,
      institutions,
      userInfo
    },
    tagConf,
    setSelectedTab,
    setSelectedBank
  } = useContext(OpenBankingSharesContext);


  React.useEffect(() => {
    scrollToTop();
  }, []);

  const list = () => {
    const relativeShares =
      selectedTab === 0 ? receivedCurrentShares : transmittedCurrentShares;

    // const sharesInProgress = relativeShares.filter(
    //   share => share.status === "ACTIVE" || share.status === "PENDING"
    // );

    relativeShares.sort(function (a, b) {
      if (new Date(a.lastStatusUpdate) > new Date(b.lastStatusUpdate)) {
        return -1;
      } else {
        return true;
      }
    });

    const sharesInProgressWithLogo =
      selectedTab === 0
        ? relativeShares
        : relativeShares.map(share => {
          const institution = institutions.find(
            institution => institution.OrganisationId === share.organisationId
          );

          return {
            ...share,
            authorisationServer: {
              customerFriendlyLogoUri: institution?.CustomerFriendlyLogoUri || BankPng
            }
          };
        });

    return sharesInProgressWithLogo;
  };


  const PersonImage = ({ profileImageUrl, ...rest }) => (
    <Image src={profileImageUrl} srcOnError={BankPng} {...rest} />
  );

  const renderInstitutions = () => {
    return loadingCurrentShares ? (
      <DefaultShimmerLoading repeat={3} innerRepeat={2} />
    ) : list().length > 0 ? (
      <Wrapper>
        {list().map((item, index) => {
          return (
            <Card
              data-test="card"
              key={index}
              onClick={() => setSelectedBank(item, stepForward)}
            >
              <InstitutionInfo>
                {item && (
                  <PersonImage
                    profileImageUrl={
                      item.authorisationServer.customerFriendlyLogoUri
                    }
                  />
                )}
                <InstitutionName>
                  {item.organisationName ||
                    item.authorisationServer.customerFriendlyName}
                </InstitutionName>
              </InstitutionInfo>
              <ShareDetails>
                {item.status && (
                  <Tag
                    dataTest={`status_${index}`}
                    title={tagConf[item.status.toLowerCase()][2]}
                    color={tagConf[item.status.toLowerCase()][0]}
                    titleColor={tagConf[item.status.toLowerCase()][1]}
                  />
                )}
                <SharedDate>{formatDate(item.lastStatusUpdate)}</SharedDate>
              </ShareDetails>
            </Card>
          );
        })}
      </Wrapper>
    ) : (
      <Wrapper>
        <DefaultContent
          data-test="emptyStatements"
          Icon={() => (
            <Icon
              type={"NoTransactions"}
              color={black30}
              height={rem(66)}
              width={rem(66)}
            />
          )}
          primaryText={translate("OPEN_BANKING_LIST_NO_SHARINGS_MSG_1")}
          secondaryTexts={[translate("OPEN_BANKING_LIST_NO_SHARINGS_MSG_2")]}
        />
      </Wrapper>
    );
  };

  const openCitizenPortal = () => {
    window.open("https://openbankingbrasil.org.br/", "_blank");
  };

  const hasAproveConsents = checkIfHasAccess(userInfo, [APPROVE_CONSENTS]);

  return (
    <UpperWrapper>
      <InfoCard>
        <Title>{translate("OPEN_BANKING_MY_SHARES")}</Title>
      </InfoCard>

      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab}>
        <section title={translate("OPEN_BANKING_RECEIVED")}>
          {renderInstitutions()}
        </section>
        <section
          hide={!hasAproveConsents}
          title={translate("OPEN_BANKING_TRANSMITTED")}
        >
          {renderInstitutions()}
        </section>
      </Tabs>

      <AccessPortal onClick={() => openCitizenPortal()}>
        {translate("OPEN_BANKING_ACCESS_CITIZEN_PORTAL")}
      </AccessPortal>
    </UpperWrapper>
  );
}

export default ListStep;
