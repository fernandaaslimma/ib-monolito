import React, { useEffect, useState } from "react";
import {
  Container,
  DateField,
  LinkPortal,
  FileName,
  Header,
  Info,
  InfoContainer,
  ListContainer,
  Message,
  Title
} from "./styles";
import FileListItem from "./FileListItem";
import DefaultShimmerLoading from "../../../common/DefaultShimmerLoading";
import { rem } from "../../../../styles/tools";
import Button from "../../../common/Button";
import MessageBox from "../../../common/MessageBox/MessageBox";
import { translate } from "../../../../utils/i18n";
import moment from "moment";
import NoContent from "../../../common/NoContent/NoContent";

const ShipmentFiles = ({
  files,
  loading = false,
  showMore = false,
  type = "",
  dataTest = "shipmentFiles",
  download = () => { },
  handleList = () => { },
  verifyFiles = () => { }
}) => {
  const [currentFiles, setCurrentFiles] = useState(files);
  const [mostRecentDate, setMostRecentDate] = useState();

  useEffect(() => {
    if (files) {
      if (showMore) {
        setCurrentFiles(files);
      } else {
        let currentMostRecentDate;
        files.forEach(item => {
          if (
            !currentMostRecentDate ||
            item.lastWriteTime > currentMostRecentDate
          ) {
            currentMostRecentDate = item.lastWriteTime;
          }
        });
        setMostRecentDate(currentMostRecentDate);
      }
    }
  }, [showMore]);

  useEffect(() => {
    if (files && mostRecentDate) {
      setCurrentFiles(
        files.filter(
          el =>
            moment(el.lastWriteTime).format("YYYY/MM/DD") ===
            moment(mostRecentDate).format("YYYY/MM/DD")
        )
      );
    }
  }, [mostRecentDate]);

  return (
    <Container data-test={dataTest}>
      {loading ? (
        <div style={{ height: rem(244) }}>
          <DefaultShimmerLoading
            repeat={1}
            innerRepeat={3}
            dataTest="shimmerLoading"
          />
        </div>
      ) : (
        <>
          {!verifyFiles() && verifyFiles(true) && (
            <MessageBox message={translate("NO_REPORTS_FOR_TODAY")} />
          )}
          {(verifyFiles() || verifyFiles(true)) && (
            <>
              <Title data-test="title">{type}</Title>
              <Message data-test="message">
                {translate("LAST_DAYS_REPORTS")}
              </Message>
              <Header data-test="header">
                <FileName data-test="fileName">
                  {translate("FILE_NAME")}
                </FileName>
                <DateField data-test="dataField">
                  {translate("REMITTANCES_DOWNLOAD_DATE")}
                </DateField>
              </Header>
              <ListContainer data-test="listContainer">
                {currentFiles.map((file, index) => (
                  <FileListItem
                    dataTest={`fileListItem${index}`}
                    key={index}
                    file={file}
                    download={download}
                  />
                ))}
              </ListContainer>
            </>
          )}
          {showMore && (
            <InfoContainer data-test="infoContainer">
              <span>
                <Info data-test="info">
                  {translate("LAST_DAYS_REPORTS_REQUEST")}
                </Info>
                <LinkPortal
                  data-test="link_portal"
                  href="https://requestsbocombbm.atlassian.net/servicedesk/customer/portal/29"
                  target="_blank"
                >
                  {translate("LAST_DAYS_REPORTS_REQUEST_PORTAL_LINK")}
                </LinkPortal>
                <Info>
                  {translate("LAST_DAYS_REPORTS_REQUEST_PORTAL")}
                </Info>
              </span>
            </InfoContainer>
          )}
          {files && files.length > 0 ? (
            <Button
              type="outline"
              style={{
                marginTop: rem(24),
                width: rem(154),
                alignSelf: "center"
              }}
              disabled={loading}
              loading={loading}
              onClick={handleList}
              dataTest="handleListBtn"
            >
              {showMore ? translate("SHOW_LESS") : translate("SHOW_MORE")}
            </Button>
          ) : (
            <NoContent
              title={translate("NO_REPORTS")}
              text={
                <span>
                  {translate("LAST_DAYS_REPORTS_REQUEST_PORTAL_EMPTY_LIST")}
                  <LinkPortal
                    href="https://requestsbocombbm.atlassian.net/servicedesk/customer/portal/29"
                    target="_blank"
                  >
                    {translate("LAST_DAYS_REPORTS_REQUEST_PORTAL_LINK")}
                  </LinkPortal>
                  {translate("LAST_DAYS_REPORTS_REQUEST_PORTAL")}
                </span>
              }
              icon="NoTransactions"
            />
          )}
        </>
      )}
    </Container>
  );
};

export default ShipmentFiles;
