import React from "react";
import ShimmerLoading from "../../../common/ShimmerLoading";

import { Content, Fieldset, ButtonWrapper, Button } from "../styles";
import Card from "../../../common/Card";
import { translate } from "../../../../utils/i18n";
import { darkGreen } from "../../../../styles/settings";

function NewTransferShimmerLoading() {
  return (
    <Content>
      <Card BigTitle={translate("NEW_TRANSFER")} titleColor={darkGreen}>
        <Fieldset width={22} loading>
          <ShimmerLoading />
          <ShimmerLoading />
          <ShimmerLoading />
          <ShimmerLoading />
        </Fieldset>
        <Fieldset width={23} loading>
          <ShimmerLoading />
          <ShimmerLoading />
          <ShimmerLoading />
          <ShimmerLoading />
        </Fieldset>
        <Fieldset width={55} loading>
          <ShimmerLoading />
          <ShimmerLoading />
          <ShimmerLoading />
          <ShimmerLoading />
        </Fieldset>
        <ButtonWrapper>
          <Button disabled>
            <ShimmerLoading />
          </Button>
        </ButtonWrapper>
      </Card>
    </Content>
  );
}

export default NewTransferShimmerLoading;
