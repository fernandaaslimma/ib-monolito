import React, { useEffect, useState } from "react";
import AlternativeTabs from "../../common/AlternativeTabs";
import { Container } from "./styles";
import ShipmentFiles from "./ShipmentFiles";
import moment from "moment";
import { translate } from "../../../utils/i18n";

const ShipmentsReports = ({
  shipmentFiles,
  getShipmentFiles = () => {},
  downloadDocument = () => {}
}) => {
  const [showMore, setShowMore] = useState(false);

  const tabs = [
    {
      typeId: "linkedShipment",
      title: translate("LINKED_SHIPMENT"),
      Content: () => handleContent(translate("LINKED_SHIPMENT_REPORTS"), 'linkedShipment')
    },
    {
      typeId: "simpleShipment",
      title: translate("SIMPLE_SHIPMENT"),
      Content: () => handleContent(translate("SIMPLE_SHIPMENT_REPORTS"), 'simpleShipment')
    }
  ];

  const [loading, setLoading] = useState(true);

  const linkedShipment = "Cobrança Vinculada";
  const simpleShipment = "Cobrança Simples";

  const verifyFiles = (otherDay = false) => {
    const today = moment().format("YYYY/MM/DD");

    if (shipmentFiles && shipmentFiles.length > 0)
      if (otherDay) {
        return true;
      } else if (
        shipmentFiles.find(
          item => moment(item.lastWriteTime).format("YYYY/MM/DD") === today
        )
      ) {
        return true;
      }

    return false;
  };

  const handleContent = (type, dataTest) => (
    <ShipmentFiles
      dataTest={dataTest}
      files={shipmentFiles}
      loading={loading}
      download={(id, format, extension) => {
        downloadDocument(id, format, extension);
      }}
      showMore={showMore}
      handleList={() => {
        setShowMore(!showMore);
      }}
      verifyFiles={verifyFiles}
      type={type}
    />
  );

  const handleReports = typeId => {
    setLoading(true);
    setShowMore(false);
    getShipmentFiles(
      typeId === "linkedShipment" ? linkedShipment : simpleShipment
    );
  };

  useEffect(() => {
    if (shipmentFiles) {
      setLoading(false);
      if (!verifyFiles() && verifyFiles(true)) {
        setShowMore(true);
      }
    }
  }, [shipmentFiles]);

  return (
    <Container data-test="reportsContainer">
      <AlternativeTabs
        dataTest="reportsAlternativeTabs"
        setSelectedTab={val => {
          handleReports(tabs[val].typeId);
        }}
        tabs={tabs}
      />
    </Container>
  );
};

export default ShipmentsReports;
