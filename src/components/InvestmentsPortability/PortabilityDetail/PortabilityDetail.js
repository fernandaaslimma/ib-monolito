import React from "react";
import {
  getStatusCells,
  investmentsPortabilityDetailsTableColumns,
  statusNameToId
} from "../components/investmentsPortabilityTableColumns/investmentsPortabilityTableColumns";
import { translate } from "../../../utils/i18n";
import {
  BackButton,
  ContentContainer,
  DetailsHeader,
  FooterActions,
  IconContainer,
  InfoContent,
  InfoContentResponse,
  InfoGroup,
  InfoTitle,
  InfoTitleRequest,
  InstitutionRow,
  SliderWrapper,
  StatusCell
} from "../styles";
import { DataTable } from "react-bocombbm-components";
import Icon from "../../common/Icon";
import { rem } from "../../../styles/tools";

const PortabilityDetail = ({
  selectedItem,
  selectedDetails,
  backToMainTable,
  stepBack
}) => {
  return (
    <SliderWrapper>
      <ContentContainer>
        <DetailsHeader>
          <InstitutionRow>
            <InfoGroup>
              <InfoTitle>{translate("ORIGIN")}:</InfoTitle>
              <InfoContent>{selectedItem?.originInstitution}</InfoContent>
            </InfoGroup>
            <IconContainer>
              <Icon type="ArrowRight2" />
            </IconContainer>
            <InfoGroup>
              <InfoTitle>{translate("DESTINATION")}:</InfoTitle>
              <InfoContent>{selectedItem?.destinationInstitution}</InfoContent>
            </InfoGroup>
            <StatusCell
              style={{ marginLeft: "auto" }}
              statusId={statusNameToId[JSON.parse(selectedItem.status).code]}
            >
              {JSON.parse(selectedItem.status).name}
            </StatusCell>
          </InstitutionRow>
          <InstitutionRow style={{ marginTop: rem(24) }}>
            <InfoGroup>
              <InfoTitleRequest>{translate("REQUESTED_IN")}:</InfoTitleRequest>
              <InfoContentResponse>
                {new Date(selectedItem?.date).toLocaleDateString("pt-BR")}
              </InfoContentResponse>
            </InfoGroup>
            <InfoGroup>
              <InfoTitleRequest>
                {translate("QUANTITY_ITEMS")}:
              </InfoTitleRequest>
              <InfoContentResponse>
                {selectedDetails?.length} {translate("ITEMS")}
              </InfoContentResponse>
            </InfoGroup>
          </InstitutionRow>
        </DetailsHeader>
        <DataTable
          data={selectedDetails}
          columns={getStatusCells(investmentsPortabilityDetailsTableColumns)}
          dataTest="portabilitiesDetail"
        />
        <FooterActions>
          <BackButton
            onClick={() => {
              backToMainTable();
              stepBack();
            }}
            data-test="backButton"
          >
            {translate("BACK")}
          </BackButton>
        </FooterActions>
      </ContentContainer>
    </SliderWrapper>
  );
};

export default PortabilityDetail;
