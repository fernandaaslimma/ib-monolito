import React from "react";
import DragAndDropFileInput from "../../common/DragAndDropFileInput";

import { InnerBlock } from "./styles";
import { REMMITANCES_UPLOAD_ACCEPTED_FILE_FORMATS } from "../../../utils/constants";
import { translate } from "../../../utils/i18n";

function UploadFile({
  onChange,
  loading,
  title,
  subTitle,
  invalidDragAndDropMessage,
  hideDragAndDrop = false
}) {
  const changeFileAttachments = async (files, OneFile) => {
    let formData = new FormData();
    formData.append("file", files[0], files[0].name);
    onChange(formData, OneFile);
  };

  return (
    <InnerBlock>
      <DragAndDropFileInput
        hideDragAndDrop={hideDragAndDrop}
        progressBar={true}
        uploadMultipleFiles={false}
        acceptedOneFileType={REMMITANCES_UPLOAD_ACCEPTED_FILE_FORMATS}
        labels={{
          title: title,
          mainMessage: subTitle,
          placeholder: translate("REMITTANCES_UPLOAD_PLACEHOLDER"),
          placeholderTwo: translate("REMITTANCES_UPLOAD_PLACEHOLDER_TWO"),
          button: translate("SEARCH_FILE"),
          dragginValue: translate("LOAD_FILES"),
          excededSize: translate("EXCEDED_SIZE_MESSAGE"),
          dragActive: translate("REMITTANCES_UPLOAD_ON_DROP_FILE"),
          dragLimitFiles: translate("REMITTANCES_UPLOAD_ON_DRAG_LIMIT_FILE")
        }}
        spacing={{
          left: "none",
          top: "l",
          right: "none",
          bottom: "none"
        }}
        loading={loading}
        handleInputFiles={changeFileAttachments}
        invalidDragAndDropMessage={invalidDragAndDropMessage}
      />
    </InnerBlock>
  );
}

export default UploadFile;
