import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Dropdown, Icon, AlertMessage } from "react-bocombbm-components";
import copy from "copy-to-clipboard";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import UploadFile from "../UploadFile";
import { MODAL_TYPES } from "../../common/Modal/Modal";
import LoadingBar from "../../common/LoadingBar";
import { formatCNPJ } from "../../../utils/formatNumber";
import { downloadFromBlob } from "../../../utils/downloadFile";
import formatDate from "../../../utils/formatDate";
import {
  MainContentWrapper,
  Container,
  Title,
  FirstTitle,
  FirstThird
} from "../../common/misc";
import Button from "../../common/Button";
import {
  ReturnValidationContainer,
  CenterButtonWrapper,
  InfoError,
  InnerBlock,
  WrapperIcon,
  MessagesContainer,
  TitleMessage,
  TitleModal,
  ContentModal,
  Description,
  FileInformation,
  WrapperInformation,
  Label,
  Value,
  WrapperContent,
  LinkText
} from "./styles";

import { translate } from "../../../utils/i18n";
export const initialState = () => {
  return {
    loading: false,
    fileTypes: [],
    fileTypeSelected: "",
    showReturnValidation: false,
    statusMessageReturn: false,
    FileCopied: false
  };
};

const openManualCNAB = url => {
  window.open(`${url}`, "_blank");
};
class FileValidation extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState();
    this.renderValidation = this.renderValidation.bind(this);
    this.setShowReturnValidation = this.setShowReturnValidation.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.closeMessageReturn = this.closeMessageReturn.bind(this);
    this.copyErrorMessages = this.copyErrorMessages.bind(this);
    this.parseListErros = this.parseListErros.bind(this);
    this.downloadErrorMessages = this.downloadErrorMessages.bind(this);
  }

  async componentDidMount() {
    this.setState({ loading: true });
    await this.props.getRemmitanceValidationLayouts();
    const fileTypes = this.props.cnabLayouts;
    this.setState({
      fileTypes,
      fileTypeSelected: fileTypes[0],
      loading: false
    });
  }

  renderValidation() {
    const { RemmitanceValidationResponse } = this.props;
    return (
      <Fragment>
        {RemmitanceValidationResponse && (
          <Fragment>
            <FirstThird data-test="pageTitle">
              <Title>{translate("REMITTANCES_UPLOAD_VALIDATION_RETURN")}</Title>
              <WrapperIcon onClick={() => this.closeMessageReturn()}>
                <Icon type={"Close"} color="#27445F" height={20} width={20} />
              </WrapperIcon>
            </FirstThird>
            <ReturnValidationContainer id="error_messages_contaniner">
              <WrapperContent>
                <MessagesContainer>
                  <Fragment>
                    <InfoError>
                      {translate("REMITTANCES_UPLOAD_VALIDATION_COMPANY_NAME")}
                      &nbsp;{RemmitanceValidationResponse.cnabInfo.companyName}
                    </InfoError>
                    <InfoError>
                      {translate("REMITTANCES_UPLOAD_VALIDATION_COMPANY_CODE")}
                      &nbsp;{RemmitanceValidationResponse.cnabInfo.companyCode}
                    </InfoError>
                    <InfoError>
                      {translate("REMITTANCES_UPLOAD_VALIDATION_COMPANY_CNPJ")}
                      &nbsp;
                      {formatCNPJ(RemmitanceValidationResponse.cnabInfo.cnpj)}
                    </InfoError>
                    <InfoError>
                      {translate(
                        "REMITTANCES_UPLOAD_VALIDATION_COMPANY_SHIPMMENTS_NUMBER"
                      )}
                      &nbsp;
                      {
                        RemmitanceValidationResponse.cnabInfo
                          .sequentialRemittanceNumber
                      }
                    </InfoError>
                    <InfoError>
                      {translate(
                        "REMITTANCES_UPLOAD_VALIDATION_COMPANY_GENERATED_AT"
                      )}
                      &nbsp;
                      {formatDate(
                        RemmitanceValidationResponse.cnabInfo.generatedAt,
                        "DD-MM-YY"
                      )}
                    </InfoError>
                    <InfoError>
                      {translate(
                        "REMITTANCES_UPLOAD_VALIDATION_COMPANY_TICKET_EMIT"
                      )}
                      &nbsp;
                      {RemmitanceValidationResponse.cnabInfo.issueTicket
                        ? translate(
                            "REMITTANCES_UPLOAD_VALIDATION_COMPANY_TICKET_EMIT_YES"
                          )
                        : translate(
                            "REMITTANCES_UPLOAD_VALIDATION_COMPANY_TICKET_EMIT_NO"
                          )}
                    </InfoError>
                  </Fragment>
                </MessagesContainer>
                {Object.entries(RemmitanceValidationResponse).map(
                  (scopeError, index) => {
                    const str = scopeError[0];
                    const capitalizedScopeError =
                      str[0].toUpperCase() + str.substr(1);
                    return (
                      <Fragment key={index}>
                        {scopeError[0] !== "cnabInfo" &&
                          scopeError[0] !== "validFile" &&
                          scopeError[1] !== null &&
                          scopeError[1].length !== 0 && (
                            <TitleMessage id="title_message_error">
                              <br />
                              {capitalizedScopeError}
                            </TitleMessage>
                          )}
                        <MessagesContainer key={index}>
                          {this.parseListErros(scopeError).map(error => {
                            return <InfoError key={index}>{error}</InfoError>;
                          })}
                        </MessagesContainer>
                      </Fragment>
                    );
                  }
                )}
              </WrapperContent>
            </ReturnValidationContainer>
            <CenterButtonWrapper>
              <Button
                background="none"
                backgroundLoading="none"
                noHoverBackground={true}
                width="160"
                height="48"
                loading={this.state.loading}
                disabled={false}
                onClick={() => this.copyErrorMessages()}
                withIcon={
                  this.state.FileCopied
                    ? false
                    : { name: "CopyAndPaste", width: 25, height: 28 }
                }
              >
                {this.state.FileCopied
                  ? translate("REMITTANCES_UPLOAD_VALIDATION_FILE_COPIED")
                  : translate("REMITTANCES_UPLOAD_VALIDATION_FILE_COPY")}
              </Button>
              <Button
                actionSecondary
                margin={{ l: "29" }}
                backgroundLoading="#3976CF"
                width="160"
                height="48"
                loading={this.state.loading}
                disabled={false}
                onClick={() => this.downloadErrorMessages()}
                withIcon={{ name: "Download", width: 26, height: 28 }}
                dataTest="downloadButton"
              >
                {translate("REMITTANCES_UPLOAD_VALIDATION_FILE_DOWNLOAD")}
              </Button>
            </CenterButtonWrapper>
          </Fragment>
        )}
      </Fragment>
    );
  }

  setShowReturnValidation(status) {
    this.setState({
      showReturnValidation: status ? status : !this.state.showReturnValidation
    });
  }

  async uploadFile(formDataFile, progressFunction) {
    this.setState({
      statusMessageReturn: false
    });
    progressFunction(true, {}, true);
    const callbackSuccessValidation = RemmitanceValidationResponse => {
      this.props.openModal({
        type: MODAL_TYPES.CUSTOM,
        width: "670px",
        overwriteDefaultButtons: true,
        children: () => (
          <Fragment>
            <TitleModal data-test="title">
              {translate("REMITTANCES_UPLOAD_VALIDATION_FILE_VALID")}
            </TitleModal>
            <ContentModal>
              <Description>
                {translate("REMITTANCES_UPLOAD_VALIDATION_FILE_DESCRIPTION")}
              </Description>
              <FileInformation>
                {RemmitanceValidationResponse && (
                  <Fragment>
                    <WrapperInformation>
                      <Label>
                        {translate(
                          "REMITTANCES_UPLOAD_VALIDATION_COMPANY_NAME"
                        )}
                        &nbsp;
                      </Label>
                      <Value>
                        {RemmitanceValidationResponse.cnabInfo.companyName}
                      </Value>
                    </WrapperInformation>
                    <WrapperInformation>
                      <Label>
                        {translate(
                          "REMITTANCES_UPLOAD_VALIDATION_COMPANY_CODE"
                        )}
                        &nbsp;
                      </Label>
                      <Value>
                        {RemmitanceValidationResponse.cnabInfo.companyCode}
                      </Value>
                    </WrapperInformation>
                    <WrapperInformation>
                      <Label>
                        {translate(
                          "REMITTANCES_UPLOAD_VALIDATION_COMPANY_TICKET_EMIT"
                        )}
                        &nbsp;
                      </Label>
                      <Value>
                        {RemmitanceValidationResponse.cnabInfo.issueTicket
                          ? translate(
                              "REMITTANCES_UPLOAD_VALIDATION_COMPANY_TICKET_EMIT_YES"
                            )
                          : translate(
                              "REMITTANCES_UPLOAD_VALIDATION_COMPANY_TICKET_EMIT_NO"
                            )}
                      </Value>
                    </WrapperInformation>
                    <WrapperInformation>
                      <Label>
                        {translate(
                          "REMITTANCES_UPLOAD_VALIDATION_COMPANY_CNPJ"
                        )}
                        &nbsp;
                      </Label>
                      <Value>
                        {formatCNPJ(RemmitanceValidationResponse.cnabInfo.cnpj)}
                      </Value>
                    </WrapperInformation>
                  </Fragment>
                )}
              </FileInformation>
              <Button
                actionSecondary
                backgroundLoading="#3976CF"
                width="106"
                height="48"
                fontSize="13"
                loading={this.state.loading}
                disabled={false}
                onClick={() => this.props.closeModal()}
              >
                {translate("UNDERSTOOD")}
              </Button>
            </ContentModal>
          </Fragment>
        )
      });
    };
    const callbackErrorValidation = () => {
      setTimeout(() => {
        this.setState({ statusMessageReturn: true });
      }, 1200);
    };

    // Layout definition
    const selectedCnabLayout = this.state.fileTypeSelected.value;
    await this.props.postRemmitanceValidation(
      selectedCnabLayout,
      formDataFile,
      progressFunction,
      callbackSuccessValidation,
      callbackErrorValidation
    );
  }

  changeStatus(e) {
    this.setState({ fileTypeSelected: e });
  }

  closeMessageReturn() {
    this.setState({ statusMessageReturn: false });
  }

  parseListErros(scopeError) {
    const errorLine = scopeError[1] && scopeError[1].errorLine;

    if (scopeError[0] === "cnabInfo" || scopeError[0] === "validFile") {
      return [];
    } else if (scopeError[0] !== "titles") {
      const listErrors =
        scopeError[1] &&
        scopeError[1].errorMessages.map(error => {
          return errorLine
            ? `${translate(
                "REMITTANCES_UPLOAD_VALIDATION_RETURN_LINE"
              )} ${errorLine}, ${error}`
            : `${error}`;
        });
      return !scopeError[1] ? [] : listErrors;
    } else {
      let errorsList = [];
      scopeError[1].map(subScopeError => {
        subScopeError.errorMessages.map(error => {
          errorsList = [
            ...errorsList,
            subScopeError.errorLine
              ? `${translate("REMITTANCES_UPLOAD_VALIDATION_RETURN_LINE")} ${
                  subScopeError.errorLine
                }, ${error}`
              : `${error}`
          ];
        });
      });
      return errorsList;
    }
  }

  copyErrorMessages() {
    const copyDivErrorMessages = document.getElementById(
      "error_messages_contaniner"
    ).innerText;
    copy(copyDivErrorMessages);
    this.setState({ FileCopied: true });
    setTimeout(() => {
      this.setState({ FileCopied: false });
    }, 1000);
  }

  downloadErrorMessages() {
    const copyDivErrorMessages = document.getElementById(
      "error_messages_contaniner"
    ).innerText;
    downloadFromBlob(
      copyDivErrorMessages,
      `${translate("REMITTANCES_UPLOAD_VALIDATION_DOWNLOAD_NAME")}.txt`,
      "text/*"
    );
  }

  render() {
    const { loading, fileTypeSelected, fileTypes } = this.state;
    const { RemmitanceValidationResponse } = this.props;
    const selectedOption = fileTypes.find(
      item => item.value === fileTypeSelected.value
    );

    return (
      <ErrorBoundary errorStatus={this.props.error}>
        <MainContentWrapper>
          <Container>
            <Fragment>
              <FirstTitle data-test="pageTitle">
                <Title>
                  {translate("REMITTANCES_UPLOAD_VALIDATION_TITLE")}
                </Title>
              </FirstTitle>
              <InnerBlock IEFractionParts={1} layered={2}>
                {loading ? (
                  <Fragment>
                    <LoadingBar height="45px" borderRadius="none" />
                    <br />
                    <br />
                  </Fragment>
                ) : (
                  <Dropdown
                    classNamePrefix="DropdownFileType"
                    options={fileTypes}
                    label={translate(
                      "REMITTANCES_UPLOAD_VALIDATION_PLACEHOLDER"
                    )}
                    onChange={this.changeStatus}
                    name="fileType"
                    value={selectedOption}
                    valid={true}
                    disabled={loading}
                  />
                )}
              </InnerBlock>
            </Fragment>
            {loading ? (
              <LoadingBar height="73px" borderRadius="none" />
            ) : (
              <AlertMessage
                icon="Attention"
                type="neutral"
                spacing={{
                  top: "l",
                  bottom: "none",
                  right: "none",
                  left: "none"
                }}
              >
                {translate("REMITTANCES_UPLOAD_VALIDATION_EXPLANATION")}
                <br />
                {translate("REMITTANCES_UPLOAD_VALIDATION_EXPLANATION_2")}
                <LinkText
                  onClick={() =>
                    openManualCNAB(this.state.fileTypeSelected.layoutManualUrl)
                  }
                >
                  {`${this.state.fileTypeSelected.label}`}
                </LinkText>
                .
              </AlertMessage>
            )}
            <UploadFile
              onChange={this.uploadFile}
              loading={loading}
              title={translate("REMITTANCES_UPLOAD_VALIDATION_UPLOAD_FILE")}
              subTitle={translate(
                "REMITTANCES_UPLOAD_VALIDATION_UPLOAD_FILE_2"
              )}
              invalidDragAndDropMessage={translate(
                "REMITTANCES_UPLOAD_EXTENSION_NOT_PERMITED_VALIDATION"
              )}
            />
            {RemmitanceValidationResponse &&
              !RemmitanceValidationResponse.validFile &&
              this.state.statusMessageReturn &&
              this.renderValidation()}
          </Container>
        </MainContentWrapper>
      </ErrorBoundary>
    );
  }
}

FileValidation.propTypes = {
  history: PropTypes.object,
  showAlert: PropTypes.func
};

export default FileValidation;
