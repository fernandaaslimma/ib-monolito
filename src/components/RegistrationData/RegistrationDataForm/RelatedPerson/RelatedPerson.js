import React, { useContext } from "react";
import { translate } from "../../../../utils/i18n";
import {
  GridWrapper,
  Block,
  InnerGridWrapper,
  InnerBlock,
  InnerTitle,
  Item
} from "../styles";
import Radio from "../../../common/Radio";
import SectionedFormContent from "../../../common/SectionedFormContent";
import {
  validateInputByType,
  clearFields
} from "../../../../utils/validations/input";
import { Input, AlertMessage } from "react-bocombbm-components";
import { RELATED_PERSON_INFORMATION } from "../../../../utils/constants";
import { StateContext } from "../RegistrationDataForm";

function RelatedPerson({ onChange, validateSection, disabled }) {
  const { temporaryInvalidFields, isFilled, formModel, closeAll } = useContext(
    StateContext
  );
  const invalidFields = temporaryInvalidFields.relatedPersonInformation;
  const { relatedPersonInformation } = formModel.content;

  const handleChangeRadio = e => {
    relatedPersonInformation.isRelated = e.target.value === "true";

    !relatedPersonInformation.isRelated &&
      clearFields(relatedPersonInformation, [
        "relationship",
        "name",
        "jobTitle",
        "institution"
      ]);

    onChange(relatedPersonInformation, RELATED_PERSON_INFORMATION);
  };

  const handleChangeInput = (e, prop) => {
    const value = e.target.value;
    relatedPersonInformation[prop] = value;

    onChange(relatedPersonInformation, RELATED_PERSON_INFORMATION);
  };

  const filledText = relatedPersonInformation.isRelated
    ? translate("ATUCAD_I_AM_A_RELATED_PERSON")
    : translate("ATUCAD_I_AM_NOT_A_RELATED_PERSON");

  const renderInvalidMessage = collection =>
    collection.map(item => (
      <Item data-last={translate("ATUCAD_AND")} key={item}>
        {translate(`ATUCAD_${item.toUpperCase()}`)}
      </Item>
    ));

  return (
    <SectionedFormContent
      openedDescription={translate("ATUCAD_RELATED_PERSON").toUpperCase()}
      closedDescription={filledText}
      dataTest="SectionedRelatedPersonInformation"
      valid={isFilled.relatedPersonInformation}
      close={closeAll}
      callback={() =>
        validateSection(relatedPersonInformation, RELATED_PERSON_INFORMATION)
      }
    >
      <GridWrapper>
        {invalidFields && (
          <Block span={[1, 3]}>
            <AlertMessage type="error" icon="Attention">
              {translate("ATUCAD_REQUIRED_FIELDS_OMMITED")}:<br />
              {renderInvalidMessage(invalidFields)}
            </AlertMessage>
          </Block>
        )}
        <Block span={[1, 3]}>
          <InnerGridWrapper columns={1}>
            <InnerBlock IEFractionParts={1}>
              <Radio
                dataTest="RadioIAmARelatedPerson"
                label={translate("ATUCAD_I_AM_A_RELATED_PERSON")}
                onChange={handleChangeRadio}
                name="related_person"
                value={true}
                checked={relatedPersonInformation.isRelated}
                disabled={disabled}
              />
            </InnerBlock>
            <InnerBlock IEFractionParts={1}>
              <Radio
                dataTest="RadioIAmNotARelatedPerson"
                label={translate("ATUCAD_I_AM_NOT_A_RELATED_PERSON")}
                onChange={handleChangeRadio}
                name="related_person"
                value={false}
                checked={!relatedPersonInformation.isRelated}
                disabled={disabled}
              />
            </InnerBlock>
          </InnerGridWrapper>
        </Block>
        {relatedPersonInformation.isRelated && (
          <Block span={[1, 3]}>
            <InnerGridWrapper columns={2}>
              <InnerBlock span={[1, 2]} IEFractionParts={2}>
                <InnerTitle>
                  {translate("ATUCAD_SPECIFY").toUpperCase()}
                </InnerTitle>
              </InnerBlock>
              <InnerBlock IEFractionParts={2}>
                <Input
                  dataTest="InputRelationshipRelatedPerson"
                  label={translate("ATUCAD_RELATIONSHIP")}
                  onChange={e => handleChangeInput(e, "relationship")}
                  name="relationship"
                  type="text"
                  required
                  valid={validateInputByType["default"](
                    relatedPersonInformation.relationship
                  )}
                  value={relatedPersonInformation.relationship}
                  disabled={disabled}
                />
              </InnerBlock>
              <InnerBlock IEFractionParts={2}>
                <Input
                  dataTest="InputNameRelatedPerson"
                  label={translate("ATUCAD_NAME_INPUT_LABEL")}
                  onChange={e => handleChangeInput(e, "name")}
                  name="name"
                  type="text"
                  required
                  valid={validateInputByType["default"](
                    relatedPersonInformation.name
                  )}
                  value={relatedPersonInformation.name}
                  disabled={disabled}
                />
              </InnerBlock>
              <InnerBlock IEFractionParts={2}>
                <Input
                  dataTest="InputJobTitleRelatedPerson"
                  label={translate("ATUCAD_JOB_TITLE")}
                  onChange={e => handleChangeInput(e, "jobTitle")}
                  name="jobTitle"
                  type="text"
                  required
                  valid={validateInputByType["default"](
                    relatedPersonInformation.jobTitle
                  )}
                  value={relatedPersonInformation.jobTitle}
                  disabled={disabled}
                />
              </InnerBlock>
              <InnerBlock IEFractionParts={2}>
                <Input
                  dataTest="InputInstitutionRelatedPerson"
                  label={translate("ATUCAD_INSTITUTION")}
                  onChange={e => handleChangeInput(e, "institution")}
                  name="institution"
                  type="text"
                  required
                  valid={validateInputByType["default"](
                    relatedPersonInformation.institution
                  )}
                  value={relatedPersonInformation.institution}
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

export default RelatedPerson;
