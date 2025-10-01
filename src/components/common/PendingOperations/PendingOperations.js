import React, { Fragment, useState } from "react";
import Icon from "react-bocombbm-components/dist/Icon";

import { neutral200 } from "../../../styles/settings";
import AnimatedBottonSheet from "../../common/AnimatedBottomSheet";

import {
  InProgressMovements,
  HowManyMovements,
  RotateComponent,
  ClicableItem
} from "./styles";

function PendingOperations({
  mode,
  children,
  boxTitle,
  bottomSheetTitle,
  withoutIcon,
  printContext = false,
  dataTest
}) {
  const [bottomSheetState, changeBottomSheetState] = useState(false);

  return (
    <Fragment>
      <InProgressMovements
        data-test={`${dataTest}`}
        mode={mode}
        onClick={() => changeBottomSheetState(true)}
        withoutIcon={withoutIcon}
      >
        {!withoutIcon && (
          <Icon type="ClockFilled" width={20} height={20} color={neutral200} />
        )}
        <HowManyMovements mode={mode} withoutIcon={true}>
          {boxTitle}
        </HowManyMovements>
        <RotateComponent angle={270}>
          <ClicableItem>
            <Icon type="Arrow" height={20} width={20} color={neutral200} />
          </ClicableItem>
        </RotateComponent>
      </InProgressMovements>

      {!printContext && (
        <AnimatedBottonSheet
          isOpen={bottomSheetState}
          velocity={0.2}
          fullHeight
          dataTest={"animatedBottomSheet"}
          head={{ title: bottomSheetTitle, close: true, icon: "BorderedClose" }}
          onClickInBack={() => changeBottomSheetState(false)}
        >
          {children}
        </AnimatedBottonSheet>
      )}
    </Fragment>
  );
}

export default PendingOperations;
