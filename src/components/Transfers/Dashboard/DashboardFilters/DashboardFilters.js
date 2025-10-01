import React, { Fragment } from "react";
import { func } from "prop-types";

import { Filter } from "react-bocombbm-components";
import Dropdown from "../../../common/Dropdown";
import { translate } from "../../../../utils/i18n";
import { Label, FormItem } from "./styles";

import {
  PENDENCIES,
  SCHEDULED_TRANSFERS,
  ALL_TRANSFERS,
  HISTORY
} from "../../../../utils/constants";

function DashboardFilters({ onFilter, defaultFilter }) {
  const componentLabels = {
    filterButton: translate("APPLY"),
    filterLabel: translate("FILTER_BY")
  };
  return (
    <Fragment data-test="DashboardFilters">
      <Filter
        onFilter={onFilter}
        defaultFilterState={defaultFilter}
        componentLabels={componentLabels}
      >
        {(changeFunc, state) => {
          return (
            <Fragment>
              <FormItem>
                <Label>{translate("CATEGORY")}</Label>
                <Dropdown
                  onChange={changeFunc}
                  name="type"
                  list={[
                    {
                      name: translate(ALL_TRANSFERS.toUpperCase()),
                      value: ALL_TRANSFERS
                    },
                    {
                      name: translate(PENDENCIES.toUpperCase()),
                      value: PENDENCIES
                    },
                    {
                      name: translate(SCHEDULED_TRANSFERS.toUpperCase()),
                      value: SCHEDULED_TRANSFERS
                    },
                    { name: translate(HISTORY.toUpperCase()), value: HISTORY }
                  ]}
                  value={state && state.filter["type"]}
                  dataTest="DashboardCategoryFilter"
                  width={100}
                  noEmptySelection
                />
              </FormItem>
              {state && state.filter["type"] === HISTORY && (
                <FormItem>
                  <Label>{translate("PERIOD")}</Label>
                  <Dropdown
                    onChange={changeFunc}
                    name="range"
                    list={[
                      { name: translate("LAST_FIFTEEN"), value: 15 },
                      { name: translate("LAST_THIRTY"), value: 30 },
                      { name: translate("LAST_SIXTY"), value: 60 }
                    ]}
                    value={state && state.filter["range"]}
                    dataTest="DashboardRangeFilter"
                    width={100}
                    noEmptySelection
                  />
                </FormItem>
              )}
            </Fragment>
          );
        }}
      </Filter>
    </Fragment>
  );
}

DashboardFilters.propTypes = {
  onFilter: func.isRequired
};

export default DashboardFilters;
