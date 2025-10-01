import {
  translate,
  getDateFieldPlaceholderByLocale,
  getSufixFormatHourByLocate
} from "../../../../utils/i18n";
import moment from "moment";
import {
  DateTimeCell,
  DateText,
  TimeText,
  StatusCell,
  DefaultCell
} from "../../styles";
import React from "react";

const defaultCell = item => <DefaultCell>{item}</DefaultCell>;

export const investmentsPortabilityTableColumns = [
  {
    title: translate("REQUEST_DATE_TIME"),
    field: "date",
    align: "left",
    cellRender: item => {
      const date = moment(item).format(getDateFieldPlaceholderByLocale());
      const time = moment(item).format(getSufixFormatHourByLocate());
      return (
        <DateTimeCell>
          <DateText>{date}</DateText>
          <TimeText>{time}</TimeText>
        </DateTimeCell>
      );
    }
  },
  {
    cellRender: defaultCell,
    title: translate("SOURCE_INSTITUTION"),
    field: "originInstitution",
    align: "left"
  },
  {
    cellRender: defaultCell,
    title: translate("DESTINATION_INSTITUTION"),
    field: "destinationInstitution",
    align: "left"
  },
  {
    cellRender: defaultCell,
    title: translate("REQUEST_CHANNEL"),
    field: "channel",
    align: "left"
  },
  {
    cellRender: defaultCell,
    title: translate("TOTAL_PORTABILITY"),
    field: "totalPortabilityIndicator",
    align: "left"
  },
  {
    cellRender: defaultCell,
    title: translate("STATUS"),
    field: "status",
    align: "left"
  }
];

export const investmentsPortabilityDetailsTableColumns = [
  {
    cellRender: defaultCell,
    title: translate("ACCOUNT_TYPE"),
    field: "accountType",
    align: "left"
  },
  {
    cellRender: defaultCell,
    title: translate("SOURCE_CUSTODIAN_ACCOUNT"),
    field: "sourceCustodianAccount",
    align: "left"
  },
  {
    cellRender: defaultCell,
    title: translate("DESTINATION_CUSTODIAN_ACCOUNT"),
    field: "destinationCustodianAccount",
    align: "left"
  },
  {
    cellRender: defaultCell,
    title: translate("ALL_ASSETS"),
    field: "allAssets",
    align: "left"
  },
  {
    cellRender: defaultCell,
    title: translate("ASSET"),
    field: "assetCode",
    align: "left"
  },
  {
    cellRender: defaultCell,
    title: translate("QUANTITY_TO_TRANSFER"),
    field: "quantityTransfer",
    align: "left"
  },
  {
    cellRender: defaultCell,
    title: translate("ESTIMATE"),
    field: "estimate",
    align: "left"
  },
  {
    cellRender: defaultCell,
    title: translate("STATUS"),
    field: "status",
    align: "left"
  },
  {
    cellRender: defaultCell,
    title: translate("LAST_UPDATE"),
    field: "lastUpdate",
    align: "left"
  },
  {
    cellRender: defaultCell,
    title: translate("NOTES"),
    field: "notes",
    align: "left"
  }
];

export const statusNameToId = {
  WaitingAuthorization: 1,
  Processing: 2,
  Concluded: 3,
  Analysing: 4,
  Refused: 5,
  Cancelled: 6
};

export const getStatusCells = columns => {
  return columns.map(column => {
    if (column.field === "status") {
      return {
        ...column,
        cellRender: item => {
          const statusId = statusNameToId[JSON.parse(item).code] || 0;
          return (
            <StatusCell statusId={statusId}>{JSON.parse(item).name}</StatusCell>
          );
        }
      };
    }
    return column;
  });
};
