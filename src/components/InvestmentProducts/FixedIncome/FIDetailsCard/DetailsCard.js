import React, { Fragment } from "react";
import { BRL_CURRENCY } from "../../../../utils/constants";

import formatNumber from "../../../../utils/formatNumber";
import { translate } from "../../../../utils/i18n";
// import { InstanceContext } from "../../FixedIncome/fixedIncomeContext";

import {
  CardTitle,
  CardContent,
  Card,
  Line,
  ItemValue,
  Info,
  Label
} from "./styles";

function DetailsCard({ list, title, dataTest, bottomSpace }) {
  const formatValues = value => formatNumber(Math.abs(value), { digits: 2 });
  const injectCurrency = value => {
    return `${BRL_CURRENCY} ${formatValues(value)}`;
  };

  const itemHandler = key => {
    if (key === "minimumaApplication" || key === "maximumApplication") {
      return list[key] === null
        ? translate("FUNDS_NONE")
        : injectCurrency(list[key]);
    } else if (key === "deadline") {
      return list[key] === null ? translate("FUNDS_NONE") : list[key];
    } else {
      return list[key] === null ? translate("FUNDS_NONE") : list[key];
    }
  };

  const listItems = list => {
    return Object.keys(list).map((key, i) => {
      const handledItem = itemHandler(key);
      if (handledItem === null) {
        return null;
      } else {
        return (
          <Line key={i}>
            <Info>
              <Label>
                {key === "minimumaApplication"
                  ? translate("INVESTMENTS_FI_MINIMUM_APPLICATION")
                  : key === "maximumApplication"
                  ? translate("INVESTMENTS_FI_MAXIMUM_APPLICATION")
                  : key === "Tax"
                  ? translate("INVESTMENTS_FI_TAX")
                  : key === "deadline"
                  ? translate("INVESTMENTS_FI_DEADLINE")
                  : key === "liquidity"
                  ? translate("INVESTMENTS_FI_LIQUIDITY")
                  : translate("INVESTMENTS_INCOME_TAX")}
              </Label>
              <ItemValue
                conclusive={key === "Tax" ? true : false}
                data-test={`value_${i}`}
                key={i}
              >
                {handledItem}
              </ItemValue>
            </Info>
          </Line>
        );
      }
    });
  };

  return (
    <Fragment>
      <Card
        className="DetailsCard"
        bottomSpace={bottomSpace}
        data-test={`${dataTest}`}
      >
        {title && <CardTitle>{title}</CardTitle>}
        <CardContent>{listItems(list)}</CardContent>
      </Card>
    </Fragment>
  );
}

export default DetailsCard;
