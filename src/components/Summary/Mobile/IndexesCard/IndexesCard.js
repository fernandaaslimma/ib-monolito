import React, { Fragment } from "react";
import { arrayOf, shape, number, string, bool } from "prop-types";

import Card from "../../../common/Card";

import {
  IndexWrapper,
  IndexGrid,
  IndexName,
  Info,
  InfoLabel,
  InfoValue
} from "./styles.js";

import { translate } from "../../../../utils/i18n";
import formatNumber from "../../../../utils/formatNumber";
import { getMonthShortName } from "../../../../utils/formatDate";

function IndexesCard({ indexes }) {
  const year = indexes.length > 0 ? indexes[0].date.split("-")[0] : "";
  const month = indexes.length > 0 ? getMonthShortName(indexes[0].date) : "";
  return (
    <Fragment>
      {indexes.map((index, i) => (
        <IndexWrapper key={`mobileIndexes_${i}`}>
          <Card data-test={`CardIndex-${i}`} key={`CardIndex-${i}`}>
            <IndexGrid>
              <IndexName>{index.index}</IndexName>
              <Info>
                <InfoLabel>{`${month}/${year} (%)`}</InfoLabel>
                <InfoValue>{formatNumber(index.monthAcrrued)}</InfoValue>
              </Info>
              <Info>
                <InfoLabel>{`${translate("YEAR")}/${year} (%)`}</InfoLabel>
                <InfoValue>{formatNumber(index.yearAccrued)}</InfoValue>
              </Info>
            </IndexGrid>
          </Card>
        </IndexWrapper>
      ))}
    </Fragment>
  );
}

IndexesCard.defaultProps = {
  indexes: [],
  loading: false
};

IndexesCard.propTypes = {
  indexes: arrayOf(
    shape({
      index: string,
      monthAcrrued: number,
      yearAccrued: number
    })
  ),
  loading: bool
};

export default IndexesCard;
