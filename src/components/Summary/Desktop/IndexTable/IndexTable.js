import React from "react";
import { string, arrayOf, shape, number } from "prop-types";

import Table from "../../../common/Table";
import { translate } from "../../../../utils/i18n";
import formatNumber from "../../../../utils/formatNumber";
import { getMonthShortName } from "../../../../utils/formatDate";

import { EmptyBox } from "./styles";

const buildRows = rows =>
  rows.map(b => ({
    index: <span>{b.index}</span>,
    monthAcrrued: <span>{formatNumber(b.monthAcrrued)}</span>,
    yearAccrued: <span>{formatNumber(b.yearAccrued)}</span>
  }));

function IndexTable({ indexes }) {
  const year = indexes.length > 0 ? indexes[0].date.split("-")[0] : "";
  const month = indexes.length > 0 ? getMonthShortName(indexes[0].date) : "";

  return (
    <div data-test="Index_Table">
      <Table
        title={translate("INDEX")}
        headers={[
          { title: translate("INDEX"), field: "index" },
          {
            title: `${month}/${year}`,
            field: "monthAcrrued",
            percent: true,
            align: "right"
          },
          {
            title: `${translate("YEAR")}/${year}`,
            field: "yearAccrued",
            percent: true,
            align: "right"
          }
        ]}
        data={buildRows(indexes)}
        zebra
        withBackground
        render={<EmptyBox />}
      />
    </div>
  );
}

IndexTable.defaultProps = {
  indexes: []
};

IndexTable.propTypes = {
  indexes: arrayOf(
    shape({
      index: string,
      monthAcrrued: number,
      yearAccrued: number
    })
  )
};

export default IndexTable;
