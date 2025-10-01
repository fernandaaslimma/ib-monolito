import React, { Fragment } from "react";
import { bool, number, func } from "prop-types";
import {
  Navigation,
  Item,
  Separator,
  Marker,
  Progress,
  Bar,
  StepInfo,
  ProgressContainer
} from "./styles";
import Hide from "../Hide";
import { translate } from "../../../utils/i18n";

function NavigationBySteps({ length, navigable, goToStep, active }) {
  return (
    <Fragment>
      <Hide below="md">
        <Navigation length={length} active={active}>
          <Marker />
          {[...Array(length)].map((item, index) => {
            const position = index + 1;
            return (
              <Fragment key={`item_${index}`}>
                <Item
                  active={index + 1 === active}
                  isPrevious={index + 1 < active}
                  navigable={navigable}
                  onClick={() => navigable && goToStep(position)}
                >
                  {position}
                </Item>
                {position > 0 && position < length && <Separator />}
              </Fragment>
            );
          })}
        </Navigation>
      </Hide>
      <Hide above="md">
        <ProgressContainer>
          <Progress>
            <Bar length={length} active={active}>
              <StepInfo>{`${translate("STEP")} ${active}/${length}`}</StepInfo>
            </Bar>
          </Progress>
        </ProgressContainer>
      </Hide>
    </Fragment>
  );
}

NavigationBySteps.propTypes = {
  length: number.isRequired,
  active: number.isRequired,
  goToStep: func.isRequired,
  navigable: bool
};

export default NavigationBySteps;
