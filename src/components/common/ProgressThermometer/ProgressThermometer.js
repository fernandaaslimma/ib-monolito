import React from "react";
import { number, string } from "prop-types";
import { Progress, Value, Bar, Fill, BackFillBars } from "./styles";
import { translate } from "../../../utils/i18n";

function ProgressThermometer({ steps, fill, dataTest, msDelay }) {
  const fillment = (fill * 100) / steps;
  return (
    <Progress data-test={dataTest ? dataTest : ProgressThermometer.displayName}>
      <Value>{`${fill} ${translate("OF")} ${steps}`}</Value>
      <Bar>
        {[...Array(steps)].map((step, index) => {
          return (
            <BackFillBars
              key={index}
              fillment={fillment}
              position={(index * 100) / steps}
              delay={msDelay}
            />
          );
        })}
        <Fill width={fillment} delay={msDelay} />
      </Bar>
    </Progress>
  );
}

ProgressThermometer.displayName = "ProgressThermometer";

ProgressThermometer.propTypes = {
  dataTest: string,
  steps: number,
  fill: number,
  msDelay: number //in milisseconds
};

export default ProgressThermometer;
