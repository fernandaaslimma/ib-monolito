import React from "react";
import {
  ContentContainer,
  HeaderContainer,
  HeaderTitle,
  RequestButton,
  SliderWrapper
} from "../styles";
import { translate } from "../../../utils/i18n";
import { DataTable, Icon } from "react-bocombbm-components";
import {
  getStatusCells,
  investmentsPortabilityTableColumns
} from "../components/investmentsPortabilityTableColumns/investmentsPortabilityTableColumns";
import DefaultContent from "../../common/DefaultContent";
import { redirect } from "../../../utils/redirect";

const Portabilities = ({ normalizedData, loading, rowClick, stepForward }) => {
  return (
    <SliderWrapper>
      <ContentContainer>
        <HeaderContainer>
          <HeaderTitle>{translate("INVESTMENT_PORTABILITY")}</HeaderTitle>
          <RequestButton
            onClick={() => redirect("/investments-portability/portability-request")}
          >{translate("REQUEST_PORTABILITY")}</RequestButton>
        </HeaderContainer>
        {(normalizedData.length > 0 || loading) &&
          <DataTable
            dataTest="portabilities"
            data={normalizedData}
            columns={getStatusCells(investmentsPortabilityTableColumns)}
            loading={loading}
            config={{
              rowClick: param => {
                rowClick(param);
                stepForward();
              }
            }}
          />
        }
      </ContentContainer>
      {normalizedData.length === 0 && !loading && (
        <DefaultContent
          Icon={() => <Icon type="EmptyWallet" />}
          primaryText={translate("NO_PORTABILITY")}
          secondaryTexts={[translate("NO RECORD WAS FOUND")]}
        />
      )}
    </SliderWrapper>
  );
};

export default Portabilities;
