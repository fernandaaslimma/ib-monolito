import React, { Fragment } from "react";
import PropTypes from "prop-types";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import DefaultContent from "../../common/DefaultContent";
import {
  MainContentWrapper,
  Container,
  TitleContainer,
  Title
} from "../../common/misc";
import LocalButton from "../../common/AbstractButton";
import Table from "../../common/AbstractTable";
import { ptBrToIso } from "../../../utils/dateHelpers";
import IconLocal from "../../common/Icon";
import LoadingBar from "../../common/LoadingBar";
import Filters from "../Filters";
import {
  WrapperButtons,
  ViewText,
  CenterButtonWrapper,
  CardDefault,
  FilenameWrapper
} from "./styles";

import { rem } from "../../../styles/tools";
import { black30 } from "../../../styles/settings";

import { Icon } from "react-bocombbm-components";
import Button from "../../common/Button";
import { DateUtils } from "react-day-picker";

import { translate } from "../../../utils/i18n";
import { formatCNPJ } from "../../../utils/formatNumber";
import formatDate from "../../../utils/formatDate";

export const initialState = () => {
  return {
    loading: false,
    getingMore: false,
    dropdowOptions: [
      { id: "10", name: "10" },
      { id: "20", name: "20" },
      { id: "30", name: "30" }
    ],
    shipments: {
      receivables: [],
      pagination: {}
    },
    pageSize: "",
    range: {
      from: "",
      to: ""
    },
    getMoreSize: "",
    dateToApi: "",
    dateFromApi: ""
  };
};
class ReturnShipments extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState();
    this.renderTable = this.renderTable.bind(this);
    this.returnDownload = this.returnDownload.bind(this);
    this.getAllOperations = this.getAllOperations.bind(this);
    this.renderEmptyPage = this.renderEmptyPage.bind(this);
    this.filterOperations = this.filterOperations.bind(this);
    this.handleChangePageItems = this.handleChangePageItems.bind(this);
    this.handleClearPageItems = this.handleClearPageItems.bind(this);
    this.onChangeDateRange = this.onChangeDateRange.bind(this);
    this.onClearDateRange = this.onClearDateRange.bind(this);
    this.formatFileName = this.formatFileName.bind(this);
  }

  async componentDidMount() {
    await this.getAllOperations();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  async getAllOperations(pagination = false, clearFilter = false) {
    this._isMounted = true;
    if (!pagination) {
      this.setState({ loading: true });
    } else {
      this.setState({ getingMore: true });
    }
    const { getReceivables } = this.props;
    const { pageSize, range, getMoreSize } = this.state;
    const newPageSize = pageSize === "" ? 10 : pageSize;
    const gatMorePageSize =
      getMoreSize === "" && pageSize === ""
        ? 10 + 10
        : getMoreSize === ""
        ? parseInt(pageSize) + parseInt(pageSize)
        : pageSize === ""
        ? parseInt(getMoreSize) + 10
        : parseInt(getMoreSize) + parseInt(pageSize);

    const dateTo = range.to === "" ? range.to : ptBrToIso(range.to);
    const dateFrom = range.from === "" ? range.from : ptBrToIso(range.from);

    try {
      await getReceivables(
        1,
        pagination ? gatMorePageSize : clearFilter ? 10 : newPageSize,
        clearFilter ? "" : dateTo,
        clearFilter ? "" : dateFrom
      );
      if (this._isMounted) {
        this.setState({
          dateToApi: clearFilter ? "" : dateTo,
          dateFromApi: clearFilter ? "" : dateFrom,
          shipments: this.props.shipments,
          loading: false,
          getingMore: false,
          getMoreSize: pagination ? gatMorePageSize : newPageSize
        });
      }
    } catch (error) {
      this.setState({
        loading: false
      });
    }
  }

  async filterOperations() {
    await this.getAllOperations();
  }

  handleChangePageItems(event) {
    const { value } = event.target;
    this.setState({ pageSize: value });
  }

  handleClearPageItems(value) {
    const { getMoreSize, dateToApi, dateFromApi } = this.state;
    this.setState({ pageSize: value });
    if (getMoreSize > 10 || dateToApi !== "" || dateFromApi !== "") {
      this.getAllOperations(false, true);
    }
  }

  async returnDownload(receivableId, fileName) {
    const { getReceivableDownloadFile } = this.props;
    await getReceivableDownloadFile(receivableId, fileName);
  }

  formatFileName(fileName) {
    if (fileName.length > 45) {
      const finalName = fileName.substr(0, 36) + "..." + fileName.substr(-6);
      return finalName;
    } else {
      return fileName;
    }
  }

  renderTable() {
    const { loading } = this.state;

    const bodyLoading = (
      <Table.Tbody>
        {[1, 2, 3, 4, 5].map(n => (
          <Table.Tr key={n}>
            <Table.Td width="6%">
              <LoadingBar width="50%" />
            </Table.Td>
            <Table.Td width="40%">
              <LoadingBar width="50%" />
            </Table.Td>
            <Table.Td width="20%">
              <LoadingBar width="50%" />
            </Table.Td>
            <Table.Td width="20%">
              <LoadingBar width="50%" />
            </Table.Td>
            <Table.Td width="20%">
              <LoadingBar width="50%" />
            </Table.Td>
            <Table.Td />
          </Table.Tr>
        ))}
      </Table.Tbody>
    );
    const parsedSetElementDate = formatDate(new Date());
    const body = (
      <Table.Tbody>
        {this.state.shipments.receivables.map(receivable => (
          <Table.Tr key={receivable.id}>
            <Table.Td
              data-test={`RECEIVABLE-RETURN-DATE-${receivable.id}`}
              width="10%"
              settlementDate={parsedSetElementDate}
            >
              {formatDate(receivable.generationDate)}
            </Table.Td>
            <Table.Td
              data-test={`RECEIVABLE-RETURN-COMPANY-NAME${receivable.id}`}
              width="25%"
            >
              {receivable.client.name}
            </Table.Td>
            <Table.Td
              data-test={`RECEIVABLE-RETURN-COMPANYDOCUMEN${receivable.id}`}
              width="20%"
            >
              {formatCNPJ(receivable.client.document)}
            </Table.Td>
            <Table.Td
              data-test={`RECEIVABLE-RETURN-FILENAME${receivable.id}`}
              width="30%"
            >
              <FilenameWrapper>
                {this.formatFileName(receivable.fileName)}
              </FilenameWrapper>
            </Table.Td>
            <Table.Td>
              <WrapperButtons data-test="btn-download-return">
                <LocalButton
                  dataTest={"btn-download-return-" + receivable.id}
                  onClick={() => {
                    this.returnDownload(receivable.id, receivable.fileName);
                  }}
                  noPadding
                  width="30"
                  heightPx="30"
                >
                  <IconLocal type="Download" color="#3976CF" />
                </LocalButton>
                <ViewText
                  onClick={() => {
                    this.returnDownload(receivable.id, receivable.fileName);
                  }}
                >
                  {translate("REMITTANCES_DOWNLOAD_TO_RETURN_ARCHIVE")}
                </ViewText>
              </WrapperButtons>
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    );

    return (
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>{translate("REMITTANCES_DOWNLOAD_DATE")}</Table.Th>
            <Table.Th>{translate("REMITTANCES_DOWNLOAD_COMPANY")}</Table.Th>
            <Table.Th>
              {translate("REMITTANCES_DOWNLOAD_COMPANY_FISCAL_NUMBER")}
            </Table.Th>
            <Table.Th>
              {translate("REMITTANCES_DOWNLOAD_ARCHIVE_NAME")}
            </Table.Th>
            <Table.Th />
          </Table.Tr>
        </Table.Thead>
        {loading ? bodyLoading : body}
      </Table>
    );
  }

  renderEmptyPage() {
    const message =
      this.state.dateToApi === "" || this.state.dateFromApi === ""
        ? translate("REMITTANCES_DOWNLOAD_COMPANY_WITHOUT_ARCHIVE_TO_CONSULT")
        : translate("REMITTANCES_DOWNLOAD_COMPANY_WITHOUT_PERIOD_TO_CONSULT");

    return (
      <Fragment>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>{translate("REMITTANCES_DOWNLOAD_DATE")}</Table.Th>
              <Table.Th>{translate("REMITTANCES_DOWNLOAD_COMPANY")}</Table.Th>
              <Table.Th>
                {translate("REMITTANCES_DOWNLOAD_COMPANY_FISCAL_NUMBER")}
              </Table.Th>
              <Table.Th>
                {translate("REMITTANCES_DOWNLOAD_ARCHIVE_NAME")}
              </Table.Th>
              <Table.Th />
            </Table.Tr>
          </Table.Thead>
        </Table>
        <CardDefault marginTop="8px" height="546px">
          <DefaultContent
            data-test="emptyShipments"
            Icon={() => (
              <Icon
                data-test="icon-emptyShipments"
                type={"NoTransactions"}
                color={black30}
                height={rem(66)}
                width={rem(66)}
              />
            )}
            primaryText={translate("REMITTANCES_DOWNLOAD_COMPANY_NO_RETURN")}
            secondaryTexts={[message]}
          />
        </CardDefault>
      </Fragment>
    );
  }

  onChangeDateRange(day) {
    const { range } = this.state;
    const newRange = DateUtils.addDayToRange(day, range);

    this.setState({
      range: newRange
    });
  }

  onClearDateRange() {
    this.setState({
      range: { from: "", to: "" }
    });
  }

  render() {
    const { loading, pageSize, range } = this.state;
    return (
      <ErrorBoundary errorStatus={this.props.error}>
        <MainContentWrapper>
          <Container>
            <Filters
              onClearDateRange={this.onClearDateRange}
              handleClearPageItems={this.handleClearPageItems}
              onChangeDateRange={this.onChangeDateRange}
              range={range}
              disabled={loading}
              pageSize={pageSize}
              filterOperations={this.filterOperations}
              dropdowOptions={this.state.dropdowOptions}
              handleChangePageItems={this.handleChangePageItems}
            />
            <TitleContainer data-test="pageTitle">
              <Title>
                {translate("REMITTANCES_DOWNLOAD_HEADER_SECOND_SUB_ITEM")}
              </Title>
            </TitleContainer>
            {this.state.shipments.receivables.length === 0 && !loading
              ? this.renderEmptyPage()
              : this.renderTable()}

            <CenterButtonWrapper>
              {this.state.shipments &&
                this.state.shipments.pagination.totalRecords >
                  this.state.shipments.pagination.totalPageSize &&
                !loading && (
                  <Button
                    backgroundLoading="#3175BD"
                    width="214"
                    dataTest="getAllOperations"
                    loading={this.state.getingMore}
                    disabled={this.state.getingMore}
                    onClick={() => this.getAllOperations(true)}
                  >
                    {translate("REMITTANCES_DOWNLOAD_SHOW_MORE")}
                  </Button>
                )}
            </CenterButtonWrapper>
          </Container>
        </MainContentWrapper>
      </ErrorBoundary>
    );
  }
}

ReturnShipments.propTypes = {
  history: PropTypes.object,
  showAlert: PropTypes.func
};

export default ReturnShipments;
