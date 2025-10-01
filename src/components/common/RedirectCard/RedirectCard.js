import React, { Fragment } from "react";
import { string } from "prop-types";

import Icon from "../Icon";
import { Image } from "../../common/Image/Image";
import BankPng from "../../common/Icon/default_bank100.png";
import { translate } from "../../../utils/i18n";

import {
  Card,
  ReceivingInstitutionInfo,
  ReceivingInstitutionName,
  RedirectionInfo,
  RedirectionText
} from "./styles";

const PersonImage = ({ profileImageUrl, ...rest }) => (
  <Image src={profileImageUrl} srcOnError={BankPng} {...rest} />
);

function RedirectCard({
  flow,
  origin,
  originName,
  destiny,
  destinyName,
  ...props
}) {
  return (
    <Fragment>
      <Card data-test={props.dataTest}>
        <ReceivingInstitutionInfo>
          <Icon type={origin} />
          <ReceivingInstitutionName>{originName}</ReceivingInstitutionName>
        </ReceivingInstitutionInfo>
        <RedirectionInfo>
          <Icon
            type="RedirectArrow"
            width={"16"}
            height={"32"}
            color={"#003B78"}
          />
          <RedirectionText>
            {flow === "tpp"
              ? translate("OPEN_BANKING_REDIRECT_MESSAGE2")
              : translate("OPEN_BANKING_REDIRECT_MESSAGE")}
          </RedirectionText>
        </RedirectionInfo>
        <ReceivingInstitutionInfo>
          {destiny && <PersonImage profileImageUrl={destiny} />}
          <ReceivingInstitutionName>{destinyName}</ReceivingInstitutionName>
        </ReceivingInstitutionInfo>
      </Card>
    </Fragment>
  );
}

RedirectCard.defaultProps = {
  origin: null,
  originName: null,
  destiny: null,
  destinyName: null,
  dataTest: undefined
};

RedirectCard.propTypes = {
  origin: string,
  originName: string,
  destiny: string,
  destinyName: string,
  dataTest: string
};

export default RedirectCard;
