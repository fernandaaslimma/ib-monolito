import React, { useContext } from "react";
import { IncrementalInput, AlertMessage } from "react-bocombbm-components";
import { translate } from "../../../../utils/i18n";
import { validateInputByType } from "../../../../utils/validations/input";
import deepClone from "../../../../utils/deepClone";
import {
  GridWrapper,
  Block,
  InnerGridWrapper,
  InnerBlock,
  BasicInfo,
  InnerTitle,
  Item
} from "../styles";
import Radio from "../../../common/Radio";
import { ATTORNEYS_IN_FACT } from "../../../../utils/constants";
import SectionedFormContent from "../../../common/SectionedFormContent";
import { StateContext } from "../RegistrationDataForm";

function RepresentationAuthorization({
  onChange,
  originalData,
  validateSection,
  disabled
}) {
  const { temporaryInvalidFields, isFilled, formModel, closeAll } = useContext(
    StateContext
  );
  const invalidFields = temporaryInvalidFields;
  let { representationAuthorization, attorneysInFact } = formModel.content;

  const handleChangeRadio = e => {
    representationAuthorization = e.target.value === "true";

    if (!representationAuthorization) {
      attorneysInFact = deepClone(originalData);
    }
    onChange(representationAuthorization, "representationAuthorization");
    onChange(attorneysInFact, ATTORNEYS_IN_FACT);
  };

  const filledText = representationAuthorization
    ? translate("ATUCAD_I_HAVE")
    : translate("ATUCAD_I_DO_NOT_HAVE");

  const changeIncremental = value => {
    attorneysInFact = value;
    onChange(attorneysInFact, ATTORNEYS_IN_FACT);
  };

  const validate = (item, modelIndex) => {
    const value = attorneysInFact[modelIndex][item];
    return validateInputByType[item](value);
  };

  const checkIfHasItemAndValidate = (item, modelIndex) =>
    attorneysInFact[modelIndex] &&
    attorneysInFact[modelIndex][item] &&
    validate(item, modelIndex);

  const renderInvalidMessage = () =>
    invalidFields.attorneysInFact.map(item => (
      <Item data-last={translate("ATUCAD_AND")} key={item}>
        {translate(`ATUCAD_${item.toUpperCase()}`)}
      </Item>
    ));

  return (
    <SectionedFormContent
      openedDescription={translate(
        "ATUCAD_REPRESENTATION_AUTHORIZATION"
      ).toUpperCase()}
      dataTest="SectionedRepresentationAuthorization"
      closedDescription={`${filledText} ${translate(
        "ATUCAD_ATTORNEYS_SENTENCE"
      )}`}
      valid={representationAuthorization ? isFilled.attorneysInFact : true}
      close={closeAll}
      callback={() => validateSection(attorneysInFact, ATTORNEYS_IN_FACT)}
    >
      <GridWrapper>
        {invalidFields && invalidFields.attorneysInFact && (
          <Block span={[1, 3]}>
            <AlertMessage type="error" icon="Attention">
              {translate("ATUCAD_REQUIRED_FIELDS_OMMITED")}:<br />
              {renderInvalidMessage()}
            </AlertMessage>
          </Block>
        )}
        <Block span={[1, 3]}>
          <InnerGridWrapper columns={2}>
            <InnerBlock IEFractionParts={2}>
              <Radio
                dataTest="RadionIHaveRepresentation"
                label={translate("ATUCAD_I_HAVE")}
                onChange={handleChangeRadio}
                name="authorization"
                value={true}
                checked={representationAuthorization}
                disabled={disabled}
              />
            </InnerBlock>
            <InnerBlock IEFractionParts={2}>
              <Radio
                dataTest="RadionIDoNotHaveRepresentation"
                label={translate("ATUCAD_I_DO_NOT_HAVE")}
                onChange={handleChangeRadio}
                name="authorization"
                value={false}
                checked={!representationAuthorization}
                disabled={disabled}
              />
            </InnerBlock>
            <InnerBlock span={[1, 2]} IEFractionParts={2}>
              <BasicInfo small>
                <b>____________________________</b>
                {` ${translate("ATUCAD_ATTORNEYS_SENTENCE")}`}
              </BasicInfo>
            </InnerBlock>
          </InnerGridWrapper>
        </Block>
        {representationAuthorization && (
          <Block span={[1, 3]}>
            <InnerGridWrapper>
              <InnerBlock span={[1, 3]}>
                <InnerTitle>
                  {translate("ATUCAD_ATTORNEYS_IN_FACT").toUpperCase()}
                </InnerTitle>
              </InnerBlock>
              <InnerBlock span={[1, 3]}>
                <IncrementalInput
                  inputs={[
                    {
                      type: "text",
                      name: "name",
                      label: translate("ATUCAD_NAME_INPUT_LABEL"),
                      required: true,
                      valid: checkIfHasItemAndValidate
                    },
                    {
                      type: "text",
                      name: "cpf",
                      maskType: "cpf",
                      label: translate("ATUCAD_CPF"),
                      required: true,
                      valid: checkIfHasItemAndValidate
                    }
                  ]}
                  dataTest="attorneysInFact"
                  data={attorneysInFact}
                  incrementText={translate("ADD_ONE_MORE_REPRESENTATION")}
                  spacing={{
                    left: "none",
                    top: "none",
                    right: "none",
                    bottom: "none"
                  }}
                  onChange={changeIncremental}
                  disabled={disabled}
                />
              </InnerBlock>
            </InnerGridWrapper>
          </Block>
        )}
      </GridWrapper>
    </SectionedFormContent>
  );
}

export default RepresentationAuthorization;
