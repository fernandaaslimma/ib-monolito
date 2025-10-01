import React from "react";
import { docObfuscation } from "../../../utils/formatNumber";
import { translate } from "../../../utils/i18n";
import Tag from "../../common/Tag";
import {
  AuthorizerDocument,
  AuthorizerFieldLabel,
  AuthorizerName,
  LabelSection,
  SquareCard,
  SquareCardTitle,
  TitleSection
} from "../Consent/ResumeStep/styles";

// import { Container } from './styles';

function ApproverCard({ item, Name, tagConf, title }) {
  return (
    <SquareCard data-test="pendentApprovers">
      <TitleSection>
        <SquareCardTitle>{title}</SquareCardTitle>
        {item.status ? (
          <Tag
            title={tagConf[item.status][2]}
            color={tagConf[item.status][0]}
            titleColor={tagConf[item.status][1]}
          />
        ) : null}
      </TitleSection>
      <LabelSection>
        <AuthorizerFieldLabel>
          {translate("OPEN_BANKING_NAME")}
        </AuthorizerFieldLabel>
        <AuthorizerName>{Name}</AuthorizerName>
      </LabelSection>
      <LabelSection className="LabelSection">
        <AuthorizerFieldLabel>
          {translate("OPEN_BANKING_CPF")}
        </AuthorizerFieldLabel>
        <AuthorizerDocument>{docObfuscation(item.Cpf)}</AuthorizerDocument>
      </LabelSection>
    </SquareCard>
  );
}

export default ApproverCard;
