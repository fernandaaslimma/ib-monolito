import React, { useCallback, useState, useEffect, Fragment } from "react";
import { useDropzone } from "react-dropzone";
import { func, string, shape, number, bool } from "prop-types";
import Button from "../Button";
import { Icon } from "react-bocombbm-components";
import store from "../../../utils/store";
import { translate } from "../../../utils/i18n";
import ProgressBar from "../../common/ProgressBar/ProgressBar";
import LoadingBar from "../../common/LoadingBar";
import {
  DropFilesWrapper,
  SelecFileWrapper,
  Text,
  Wrapper,
  FilesList,
  File,
  Remove,
  Title,
  Message,
  TextParagraphBlue,
  TextParagraphGray,
  ProgressWrapper,
  ProgressBarTextWrapper,
  PercentageWrapper,
  ButtonWrapper,
  LoadingBarContainer
} from "./styles";

function DragAndDropFileInput({
  openToastr,
  handleInputFiles,
  acceptedFileTypes,
  acceptedOneFileType = null,
  labels,
  spacing,
  fileMaxBytesSize,
  dataTest,
  isValid,
  progressBar = false,
  filesUploaded,
  uploadMultipleFiles = true,
  numberOfFilesPerDrag = 1,
  loading,
  invalidDragAndDropMessage,
  hideDragAndDrop = false
}) {
  const [filesState, updateFilesState] = useState({
    valid: [],
    invalid: [],
    pristine: true
  });
  const [indexToRemove, updateIndexToRemove] = useState(null);
  const [acceptedFilesState, setAcceptedFilesState] = useState([]);
  const [progresUpload, setProgresUpload] = useState(0);
  const [statusCalledApi, setstatusCalledApi] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const { calledAPI, messageAPI, statusAPI, toastRCall } = store.getState();
      if (progresUpload > 0 && calledAPI) {
        OneFile(true, {});
      } else if (progresUpload === 100 && !calledAPI) {
        OneFile(false, {
          status: statusAPI || 200,
          toastR: toastRCall,
          message: messageAPI || translate("REMITTANCES_UPLOAD_API_SUCCESS")
        });
      }
    }, 200);
  }, [progresUpload]);

  const { valid, invalid, pristine } = filesState;

  const accept = acceptedFileTypes;
  const onDrop = useCallback(
    (acceptedFiles, rejectedFiles) => {
      const extension =
        acceptedFiles.length > 0 && acceptedFiles[0].name.substr(-4);
      if (rejectedFiles.length > numberOfFilesPerDrag) {
        setTimeout(() => {
          openToastr({
            text: translate("REMITTANCES_UPLOAD_ONLY_ONE_FILE"),
            error: true,
            timeout: 3000
          });
        }, 100);
        return null;
      }
      if (
        (acceptedOneFileType &&
          (extension !== acceptedOneFileType &&
            extension !== acceptedOneFileType.toUpperCase()))
      ) {
        setTimeout(() => {
          openToastr({
            text:
              invalidDragAndDropMessage ||
              translate("REMITTANCES_UPLOAD_EXTENSION_NOT_PERMITED"),
            error: true,
            timeout: 3000
          });
        }, 100);
        return null;
      }
      let currentAddeddFiles = filesState.valid;
      let revogedBySizeFiles = [];
      setAcceptedFilesState(acceptedFiles);
      fileMaxBytesSize
        ? acceptedFiles.forEach(file => {
          file.size > fileMaxBytesSize
            ? revogedBySizeFiles.push(file)
            : currentAddeddFiles.push(file);
        })
        : (currentAddeddFiles = filesState.valid.concat(acceptedFiles));
      if (acceptedFiles.length > 0) {
        !progressBar
          ? handleInputFiles(
            uploadMultipleFiles ? currentAddeddFiles : acceptedFiles
          )
          : handleInputFiles(
            !uploadMultipleFiles ? acceptedFiles : currentAddeddFiles,
            OneFile
          );
      }
      updateIndexToRemove(null);
      updateFilesState({
        valid: currentAddeddFiles,
        invalid: revogedBySizeFiles,
        pristine: false
      });
    },
    [filesState]
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject
  } = useDropzone({
    onDrop,
    accept,
    maxFiles: numberOfFilesPerDrag,
    useFsAccessApi: false,
  });

  const remove = (indexToRemove, id) => {
    const fileToKeep = valid.filter((file, index) => index !== indexToRemove);

    updateIndexToRemove(id);
    setTimeout(() => {
      handleInputFiles(fileToKeep);
      updateFilesState({ valid: fileToKeep, invalid: [], pristine: false });
    }, 150);
  };

  const OneFile = (
    fileLoaging = false,
    { status, toastR = true, message = null, toastRMode = null },
    firstCall = false
  ) => {
    progresUpload < 100 && setstatusCalledApi(true);
    if (!fileLoaging && status === 200) {
      store.setState({
        messageAPI: message,
        statusAPI: status,
        toastRCall: toastR
      });
      if (progresUpload === 100) {
        if (toastR) {
          setTimeout(() => {
            openToastr({
              text:
                message ||
                translate("REMITTANCES_UPLOAD_VALIDATION_TOAST_SUCCESS"),
              error: false,
              timeout: 2000
            });
          }, 100);
        }
        setTimeout(() => {
          setstatusCalledApi(false);
        }, 3200);
      } else {
        const { progresUploadState } = store.getState();
        setProgresUpload(progresUploadState + (100 - progresUploadState));
      }
    } else if (!fileLoaging && status === 400) {
      if (toastR) {
        setTimeout(() => {
          openToastr({
            text:
              message ||
              translate("REMITTANCES_UPLOAD_VALIDATION_TOAST_FAILED"),
            [toastRMode || "error"]: true,
            timeout: 4000
          });
        }, 100);
      }
      setTimeout(() => {
        setstatusCalledApi(false);
      }, 5000);
    } else if (fileLoaging && {}) {
      store.setState({ calledAPI: true });
      if (progresUpload < 90 && fileLoaging) {
        setProgresUpload(firstCall ? 0 + 10 : progresUpload + 10);
        store.setState({ progresUploadState: progresUpload + 10 });
      }
    }
  };

  const renderDropFileWrapper = () => {
    const { calledAPI } = store.getState();
    return (
      <DropFilesWrapper
        onDragFile={isDragActive}
        rejectDragFile={isDragReject}
        calledAPI={calledAPI}
        statusCalledApi={statusCalledApi}
        {...getRootProps({
          className: "dropzone",
          refKey: "innerRef",
          onClick: event => event.stopPropagation(),
          role: "button"
        })}
      >
        {isProgressbar() ? (
          <LoadingBar width="100%" height="113px" borderRadius="none" />
        ) : (
          <Fragment>
            <input {...getInputProps()} />
            <SelecFileWrapper>
              {isDragActive && !calledAPI && !statusCalledApi ? (
                <Text>
                  {isDragReject ? labels.dragLimitFiles : labels.dragActive}
                </Text>
              ) : progressBar && (calledAPI || statusCalledApi) ? (
                <ProgressWrapper>
                  <ProgressBarTextWrapper>
                    <TextParagraphGray marginLeft="0" marginRight="5">
                      {translate("SENDING")}
                    </TextParagraphGray>
                    {acceptedFilesState.length} {translate("FILE")}
                    <TextParagraphBlue></TextParagraphBlue>
                  </ProgressBarTextWrapper>
                  <ProgressBar
                    percentage={
                      uploadMultipleFiles
                        ? (filesUploaded / acceptedFilesState.length) * 100
                        : progresUpload.toFixed(0)
                    }
                  />
                  <PercentageWrapper>
                    {uploadMultipleFiles
                      ? (filesUploaded / acceptedFilesState.length) * 100
                      : progresUpload.toFixed(0)}{" "}
                    %
                  </PercentageWrapper>
                </ProgressWrapper>
              ) : (
                <Fragment>
                  <Text>
                    {labels.placeholder}&nbsp;&nbsp;&nbsp;&nbsp;
                    {labels.placeholderTwo}&nbsp;&nbsp;&nbsp;&nbsp;
                  </Text>
                  <ButtonWrapper>
                    <Button
                      {...getRootProps({
                        onClick: event => event,
                        refKey: "innerRef"
                      })}
                      dataTest="ButtonSearchFile"
                      actionSecondary
                      width="173"
                      height="48"
                      padding
                      paddingSize="0"
                      margin
                    >
                      {labels.button}
                    </Button>
                  </ButtonWrapper>
                </Fragment>
              )}
            </SelecFileWrapper>
          </Fragment>
        )}
      </DropFilesWrapper>
    );
  };

  const renderFilesList = (files, validFiles = false) => (
    <Fragment>
      {!validFiles && files.length > 0 && (
        <Text warn>{`${labels.excededSize} ${fileMaxBytesSize /
          1000000}Mb:`}</Text>
      )}
      <FilesList warn={!validFiles}>
        {files.length >= 1 &&
          files.map((file, index) => {
            if (index > 0 && !uploadMultipleFiles) {
              return null;
            }
            const id = `${file.name}_${index}`;
            return (
              <File
                key={id}
                isRemoving={id === indexToRemove}
                animateHeight={indexToRemove === null}
              >
                {file.name}
                {validFiles && (
                  <Remove onClick={() => remove(index, id)}>
                    <Icon type="BorderedClose" width="10" height="10" />
                  </Remove>
                )}
              </File>
            );
          })}
      </FilesList>
    </Fragment>
  );

  const isProgressbar = () => {
    const { calledAPI } = store.getState();
    if (loading && !(progressBar && (calledAPI || statusCalledApi))) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Wrapper spacing={spacing} data-test={dataTest}>
      <Title isValid={isValid} pristine={pristine}>
        {!isValid && !pristine && (
          <Icon
            type="Attention"
            width="24"
            height="24"
            spacing={{ right: "xxs" }}
          />
        )}
        {labels.title}
      </Title>
      {isProgressbar() ? (
        <LoadingBarContainer>
          <LoadingBar width="55%" height="15px" borderRadius="3px" />
        </LoadingBarContainer>
      ) : (
        <Message
          isValid={isValid}
          pristine={pristine}
          dangerouslySetInnerHTML={{ __html: labels.mainMessage }}
        />
      )}
      {!hideDragAndDrop && renderDropFileWrapper()}

      {!progressBar && !loading && renderFilesList(valid, true)}
      {!progressBar && !loading && renderFilesList(invalid)}
    </Wrapper>
  );
}

DragAndDropFileInput.defaultProps = {
  dataTest: "DragAndDropFileInput",
  spacing: { top: "xxs", bottom: "xxs", right: "xxs", left: "xxs" },
  isValid: true,
  labels: {
    title: "Upload your documents",
    mainMessage: "Please, select one or more documents",
    placeholder: "Drag and drop documents here or",
    button: "Search a File",
    dragginValue: "Load File(s)...",
    excededSize:
      "The below files did not uploaded because exceded the limit size of"
  }
};

DragAndDropFileInput.propTypes = {
  handleInputFiles: func.isRequired,
  acceptedFileTypes: string.isRequired,
  isValid: bool,
  labels: shape({
    title: string,
    mainMessage: string,
    placeholder: string,
    placeholderTwo: string,
    button: string,
    dragginValue: string,
    excededSize: string
  }),
  spacing: shape({ top: string, left: string, right: string, bottom: string }),
  fileMaxBytesSize: number,
  dataTest: string
};

export default DragAndDropFileInput;
