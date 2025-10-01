import React from "react";
import { Container, Date, DownloadButton, Title } from "./styles";
import Icon from "../../../../common/Icon";
import { neutral200 } from "../../../../../styles/settings";
import moment from "moment";
import { getDateFieldPlaceholderByLocale } from "../../../../../utils/i18n";
import {
  EXCEL_FILE_FORMAT,
  DEFAULT_FILE_FORMAT
} from "../../../../../utils/constants";

const FileListItem = ({
  file = {},
  download = () => {},
  dataTest = "fileListItem"
}) => {
  return (
    <Container data-test={dataTest}>
      {file.extension && (
        <Icon
          dataTest="icon"
          type={file.extension === "pdf" ? "Pdf" : "Excel"}
        />
      )}
      {file.name && <Title data-test="name">{file.name}</Title>}
      {file.lastWriteTime && (
        <Date data-test="date">
          {moment(file.lastWriteTime).format(getDateFieldPlaceholderByLocale())}
        </Date>
      )}
      {file.extension && file.id && download && (
        <DownloadButton
          data-test={"download" + file.id}
          onClick={() =>
            download(
              file.id,
              file.extension === "pdf"
                ? DEFAULT_FILE_FORMAT
                : EXCEL_FILE_FORMAT,
              file.extension
            )
          }
        >
          <Icon
            type="Download"
            iconColor={neutral200}
            dataTest="downloadIcon"
          />
        </DownloadButton>
      )}
    </Container>
  );
};

export default FileListItem;
