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
import Table from "../../common/AbstractTable";
import { ptBrToIso } from "../../../utils/dateHelpers";
import LoadingBar from "../../common/LoadingBar";
import Filters from "../Filters";
import UploadFile from "../UploadFile";
import { CenterButtonWrapper, CardDefault, FilenameWrapper } from "./styles";

import { rem } from "../../../styles/tools";
import { black30 } from "../../../styles/settings";

import { AlertMessage, Icon } from "react-bocombbm-components";
import Button from "../../common/Button";
import { DateUtils } from "react-day-picker";

import { translate } from "../../../utils/i18n";
import { formatCNPJ } from "../../../utils/formatNumber";
import formatDate, { formatDateTime } from "../../../utils/formatDate";

import { UPLOAD_REMITTANCE_FILES } from "../../../utils/constants";

export const initialState = () => {
  return {
    loading: false,
    getingMore: false,
    dropdowOptions: [
      { id: "10", name: "10" },
      { id: "20", name: "20" },
      { id: "30", name: "30" }
    ],
    remittances: {
      remmitances: [],
      pagination: {}
    },
    pageSize: "",
    range: {
      from: "",
      to: ""
    },
    getMoreSize: "",
    dateToApi: "",
    dateFromApi: "",
    showWarningEndOfYear: false
  };
};

class UploadShipments extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState();
    this.renderTable = this.renderTable.bind(this);
    this.getAllOperations = this.getAllOperations.bind(this);
    this.renderEmptyPage = this.renderEmptyPage.bind(this);
    this.filterOperations = this.filterOperations.bind(this);
    this.handleChangePageItems = this.handleChangePageItems.bind(this);
    this.handleClearPageItems = this.handleClearPageItems.bind(this);
    this.onChangeDateRange = this.onChangeDateRange.bind(this);
    this.onClearDateRange = this.onClearDateRange.bind(this);
    this.formatFileName = this.formatFileName.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
  }

  async componentDidMount() {
    await this.getAllOperations();
    await this.showWarningEndOfYear();
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
    const { getRemittances } = this.props;
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
      await this.props.getRemittancesBasicInfo();
      await getRemittances(
        1,
        pagination ? gatMorePageSize : clearFilter ? 10 : newPageSize,
        clearFilter ? "" : dateTo,
        clearFilter ? "" : dateFrom
      );
      if (this._isMounted) {
        this.setState({
          dateToApi: clearFilter ? "" : dateTo,
          dateFromApi: clearFilter ? "" : dateFrom,
          remittances: this.props.remittances,
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

  formatFileName(fileName) {
    if (fileName.length > 45) {
      const finalName = fileName.substr(0, 36) + "..." + fileName.substr(-6);
      return finalName;
    } else {
      return fileName;
    }
  }

  async showWarningEndOfYear() {
    const DeactivateDateMilliseconds = Number(__DISABLE_DATE_END_OF_YEAR_UTC_MILISECOND__);
    const utcDateMili = Date.now();

    if (DeactivateDateMilliseconds > utcDateMili) {
      this.setState({ showWarningEndOfYear: true })
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
        {this.state.remittances.remmitances.map(remittance => (
          <Table.Tr key={remittance.id}>
            <Table.Td
              data-test={`RECEIVABLE-RETURN-DATE-${remittance.id}`}
              width="10%"
              settlementDate={parsedSetElementDate}
            >
              {formatDateTime(remittance.generationDate)}
            </Table.Td>
            <Table.Td
              data-test={`RECEIVABLE-RETURN-COMPANY-NAME${remittance.id}`}
              width="25%"
            >
              {remittance.client.name}
            </Table.Td>
            <Table.Td
              data-test={`RECEIVABLE-RETURN-COMPANYDOCUMEN${remittance.id}`}
              width="20%"
            >
              {formatCNPJ(remittance.client.document)}
            </Table.Td>
            <Table.Td
              data-test={`RECEIVABLE-RETURN-FILENAME${remittance.id}`}
              width="30%"
            >
              <FilenameWrapper>
                {this.formatFileName(remittance.fileName)}
              </FilenameWrapper>
            </Table.Td>
            <Table.Td></Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    );

    return (
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>{translate("REMITTANCES_UPLOAD_DATE")}</Table.Th>
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
        ? translate("REMITTANCES_UPLOAD_COMPANY_WITHOUT_ARCHIVE_TO_CONSULT")
        : translate("REMITTANCES_UPLOAD_COMPANY_WITHOUT_PERIOD_TO_CONSULT");

    return (
      <Fragment>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>{translate("REMITTANCES_UPLOAD_DATE")}</Table.Th>
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
                type={"NoTransactions"}
                color={black30}
                height={rem(66)}
                width={rem(66)}
              />
            )}
            primaryText={translate("REMITTANCES_UPLOAD_COMPANY_NO_RETURN")}
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

  async uploadFile(formDataFile, progressFunction) {
    progressFunction(true, {}, true);
    await this.props.postRemmitance(
      formDataFile,
      progressFunction,
      this.filterOperations
    );
  }

  shouldShow() {
    if (this.props && this.props.userInfo && this.props.userInfo.roles) {
      return this.props.userInfo.roles.find(
        el => el === UPLOAD_REMITTANCE_FILES
      );
    }
    return false;
  }

  render() {
    const { loading, pageSize, range, showWarningEndOfYear } = this.state;

    return (
      <ErrorBoundary errorStatus={this.props.error}>
        <MainContentWrapper>
          <Container>
            <AlertMessage
              icon="Attention"
              type="warning"
              spacing={{
                top: "l",
                bottom: "none",
                right: "none",
                left: "none"
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ fontWeight: "bold", marginRight: 4 }}>
                  {translate("REMITTANCES_ALERT_MESSAGE")}
                </span>
                {translate("REMITTANCES_ALERT_MESSAGE_2")}
              </div>
            </AlertMessage>
            {showWarningEndOfYear && (
              <AlertMessage
                icon="Attention"
                type="warning"
                spacing={{
                  top: "l",
                  bottom: "none",
                  right: "none",
                  left: "none"
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span dangerouslySetInnerHTML={{ __html: translate("REMITTANCES_ALERT_MESSAGE_END_OF_YEAR") }}>
                  </span>
                </div>
              </AlertMessage>
            )}
            <UploadFile
              hideDragAndDrop={!this.shouldShow()}
              onChange={this.uploadFile}
              loading={loading}
              title={translate("REMITTANCES_UPLOAD_TITLE")}
              invalidDragAndDropMessage={translate("REMITTANCES_UPLOAD_WRONG_EXTENSION")}
              subTitle={`${translate(
                "REMITTANCES_UPLOAD_SUB_TITLE"
              )}<b style="font-family: Lato Bold">.rem</b>${translate(
                "REMITTANCES_UPLOAD_SUB_TITLE_2"
              )}<b style="font-family: Lato Bold">${this.props
                .remittanceBasicInfo &&
              this.props.remittanceBasicInfo.uploadFileLimitSize} MB.</b>`}
            />
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
              <Title>{translate("REMITTANCES_UPLOAD_TITLE_LIST")}</Title>
            </TitleContainer>
            {this.state.remittances.remmitances.length === 0 && !loading
              ? this.renderEmptyPage()
              : this.renderTable()}
            <CenterButtonWrapper>
              {this.state.remittances &&
                this.state.remittances.pagination.totalRecords >
                this.state.remittances.pagination.totalPageSize &&
                !loading && (
                  <Button
                    backgroundLoading="#3175BD"
                    width="214"
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

UploadShipments.propTypes = {
  history: PropTypes.object,
  showAlert: PropTypes.func
};

export default UploadShipments;
