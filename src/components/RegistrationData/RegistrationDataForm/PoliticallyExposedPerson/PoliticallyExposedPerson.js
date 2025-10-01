import React, { Fragment, useContext } from "react";
import { translate } from "../../../../utils/i18n";
import {
  ShowAndHideDescription,
  Input,
  AlertMessage
} from "react-bocombbm-components";
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
import { POLITICALLY_EXPOSED_PERSON } from "../../../../utils/constants";
import { StateContext } from "../RegistrationDataForm";

function PoliticallyExposedPerson({ onChange, validateSection, disabled }) {
  const { temporaryInvalidFields, isFilled, formModel, closeAll } = useContext(
    StateContext
  );
  const { politicallyExposedPerson } = formModel.content;
  const invalidFields = temporaryInvalidFields.politicallyExposedPerson;

  const handleRadioChange = e => {
    const value = e.target.value;
    politicallyExposedPerson.isPep = value === "true";

    !politicallyExposedPerson.isPep &&
      clearFields(politicallyExposedPerson, [
        "reason",
        "relationship",
        "name",
        "jobTitle",
        "institution"
      ]);

    onChange(politicallyExposedPerson, POLITICALLY_EXPOSED_PERSON);
  };

  const filledText = politicallyExposedPerson.isPep
    ? translate("ATUCAD_I_AM_A_PEP")
    : translate("ATUCAD_I_AM_NOT_A_PEP");

  const checked = () => politicallyExposedPerson.isPep;

  const handleInputChange = (e, prop) => {
    const value = e.target.value;
    politicallyExposedPerson[prop] = value;

    onChange(politicallyExposedPerson, POLITICALLY_EXPOSED_PERSON);
  };

  const renderInvalidMessage = collection =>
    collection.map(item => (
      <Item data-last={translate("ATUCAD_AND")} key={item}>
        {translate(`ATUCAD_${item.toUpperCase()}`)}
      </Item>
    ));

  return (
    <SectionedFormContent
      openedDescription={translate("ATUCAD_PEP").toUpperCase()}
      closedDescription={filledText}
      dataTest="PolliticallyExposedPerson"
      valid={isFilled.politicallyExposedPerson}
      close={closeAll}
      callback={() =>
        validateSection(politicallyExposedPerson, POLITICALLY_EXPOSED_PERSON)
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
          <InnerGridWrapper columns={2}>
            <InnerBlock IEFractionParts={2}>
              <Radio
                dataTest="RadioIAmAPep"
                label={translate("ATUCAD_I_AM_A_PEP")}
                onChange={handleRadioChange}
                name="politically_person"
                value={true}
                checked={checked()}
                disabled={disabled}
              />
            </InnerBlock>
            <InnerBlock IEFractionParts={2}>
              <Radio
                dataTest="RadioIAmNotAPep"
                label={translate("ATUCAD_I_AM_NOT_A_PEP")}
                onChange={handleRadioChange}
                name="politically_person"
                value={false}
                checked={!checked()}
                disabled={disabled}
              />
            </InnerBlock>
          </InnerGridWrapper>
        </Block>

        {checked() && (
          <Fragment>
            <Block span={[1, 3]}>
              <InnerGridWrapper columns={4}>
                <InnerBlock span={[1, 4]} IEFractionParts={4}>
                  <InnerTitle>
                    {translate("ATUCAD_SPECIFY").toUpperCase()}
                  </InnerTitle>
                </InnerBlock>
                <InnerBlock span={[1, 2]} IEFractionParts={4}>
                  <Input
                    dataTest="InputReasonPoliticallyExposedPerson"
                    required={true}
                    label={translate("ATUCAD_REASON")}
                    valid={validateInputByType["default"](
                      politicallyExposedPerson.reason
                    )}
                    value={politicallyExposedPerson.reason}
                    onChange={e => handleInputChange(e, "reason")}
                    disabled={disabled}
                  />
                </InnerBlock>
                <InnerBlock span={[3, 4]} IEFractionParts={4}>
                  <Input
                    dataTest="InputRelationshipPoliticallyExposedPerson"
                    required={true}
                    label={translate("ATUCAD_RELATIONSHIP")}
                    valid={validateInputByType["default"](
                      politicallyExposedPerson.relationship
                    )}
                    value={politicallyExposedPerson.relationship}
                    onChange={e => handleInputChange(e, "relationship")}
                    disabled={disabled}
                  />
                </InnerBlock>
                <InnerBlock span={[1, 2]} IEFractionParts={4}>
                  <Input
                    dataTest="InputNamePoliticallyExposedPerson"
                    required={true}
                    label={translate("NAME_INPUT_LABEL")}
                    valid={validateInputByType["default"](
                      politicallyExposedPerson.name
                    )}
                    value={politicallyExposedPerson.name}
                    onChange={e => handleInputChange(e, "name")}
                    disabled={disabled}
                  />
                </InnerBlock>
                <InnerBlock IEFractionParts={4}>
                  <Input
                    dataTest="InputJobTitlePoliticallyExposedPerson"
                    required={true}
                    label={translate("ATUCAD_JOB_TITLE")}
                    valid={validateInputByType["default"](
                      politicallyExposedPerson.jobTitle
                    )}
                    value={politicallyExposedPerson.jobTitle}
                    onChange={e => handleInputChange(e, "jobTitle")}
                    disabled={disabled}
                  />
                </InnerBlock>

                <InnerBlock IEFractionParts={4}>
                  <Input
                    dataTest="InputInstitutionPoliticallyExposedPerson"
                    required={true}
                    label={translate("ATUCAD_INSTITUTION")}
                    valid={validateInputByType["default"](
                      politicallyExposedPerson.institution
                    )}
                    value={politicallyExposedPerson.institution}
                    onChange={e => handleInputChange(e, "institution")}
                    disabled={disabled}
                  />
                </InnerBlock>
              </InnerGridWrapper>
            </Block>
          </Fragment>
        )}

        <Block span={[1, 3]}>
          <InnerGridWrapper>
            <InnerBlock IEFractionParts={1}>
              <ShowAndHideDescription
                texts={{
                  button: translate("WHAT_IS_PEP"),
                  description: translate("PEP_EXPLANATION")
                }}
              />
            </InnerBlock>
          </InnerGridWrapper>
        </Block>
      </GridWrapper>
    </SectionedFormContent>
  );
}

export default PoliticallyExposedPerson;
