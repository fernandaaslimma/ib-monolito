import React, { Fragment, useContext } from "react";
import { translate } from "../../../../utils/i18n";
import {
  GridWrapper,
  Block,
  InnerGridWrapper,
  InnerBlock,
  InnerTitle,
  Item
} from "../styles";
import { validateInputByType } from "../../../../utils/validations/input";
import SectionedFormContent from "../../../common/SectionedFormContent";
import { PERSONAL_REGISTRATION_DETAILS } from "../../../../utils/constants";
import { maritalStatusList } from "../../../../utils/constantLists";
import { Input, AlertMessage, Dropdown } from "react-bocombbm-components";
import { StateContext } from "../RegistrationDataForm";

function PersonalDetails({ onChange, validateSection, disabled }) {
  const { temporaryInvalidFields, isFilled, formModel, closeAll } = useContext(
    StateContext
  );

  const invalidFields = temporaryInvalidFields.personalRegistrationDetails;

  const { personalRegistrationDetails } = formModel.content;

  // specific protection for spouse data
  !personalRegistrationDetails.spouse &&
    (personalRegistrationDetails.spouse = { spouseName: "", spouseCpf: "" });

  const { spouse, maritalStatus } = personalRegistrationDetails;

  maritalStatus !== "married" &&
    maritalStatus !== "stableunion" &&
    (personalRegistrationDetails.spouse = { spouseName: "", spouseCpf: "" });

  !spouse.spouseName && (spouse.spouseName = "");
  !spouse.spouseCpf && (spouse.spouseCpf = "");

  const change = (e, field, innerField) => {
    personalRegistrationDetails[field][innerField] = e.target.value;
    onChange(personalRegistrationDetails, PERSONAL_REGISTRATION_DETAILS);
  };

  const changeStatus = e => {
    personalRegistrationDetails.maritalStatus = e.value;
    onChange(personalRegistrationDetails, PERSONAL_REGISTRATION_DETAILS);
  };

  const renderInvalidMessage = () => {
    const renderGroup = collection => (
      <Fragment>
        {collection.map(item => (
          <Item data-last={translate("ATUCAD_AND")} key={item}>
            {translate(`ATUCAD_${item.toUpperCase()}`)}
          </Item>
        ))}
      </Fragment>
    );
    return (
      <Fragment>
        {invalidFields.spouse && renderGroup(invalidFields.spouse)}
        {invalidFields.maritalStatus &&
          renderGroup(invalidFields.maritalStatus)}
      </Fragment>
    );
  };

  return (
    <SectionedFormContent
      dataTest="SectionedPersonalDetails"
      closedDescription={translate("ATUCAD_PERSONAL_REGISTRATION_DETAILS")}
      openedDescription={translate(
        "ATUCAD_PERSONAL_REGISTRATION_DETAILS"
      ).toUpperCase()}
      valid={isFilled.personalRegistrationDetails}
      close={closeAll}
      callback={() =>
        validateSection(
          personalRegistrationDetails,
          PERSONAL_REGISTRATION_DETAILS
        )
      }
    >
      <GridWrapper>
        {invalidFields && (
          <Block span={[1, 3]}>
            <AlertMessage type="error" icon="Attention">
              {translate("ATUCAD_REQUIRED_FIELDS_OMMITED")}:<br />
              {renderInvalidMessage()}
            </AlertMessage>
          </Block>
        )}
        <Block>
          <InnerGridWrapper IEFractionParts={1}>
            <InnerBlock IEFractionParts={1}>
              <InnerTitle>
                {translate("ATUCAD_MARITAL_STATUS").toUpperCase()}
              </InnerTitle>
            </InnerBlock>
            <InnerBlock IEFractionParts={1} layered={2}>
              <Dropdown
                dataTest="DropdownMaritalStatus"
                classNamePrefix="DropdownMaritalStatus"
                options={maritalStatusList}
                label={translate("ATUCAD_STATUS", "REQUIRED_MARKER")}
                onChange={changeStatus}
                name="maritalStatus"
                value={maritalStatusList.find(
                  item => item.value === maritalStatus
                )}
                valid={() => validateInputByType["default"](maritalStatus)}
                required
                disabled={disabled}
              />
            </InnerBlock>
          </InnerGridWrapper>
        </Block>
        {(maritalStatus === "married" || maritalStatus === "stableunion") && (
          <Block span={[2, 3]}>
            <InnerGridWrapper columns={2}>
              <InnerBlock span={[1, 2]} IEFractionParts={2}>
                <InnerTitle>
                  {translate("ATUCAD_SPOUSE_DATA").toUpperCase()}
                </InnerTitle>
              </InnerBlock>
              <InnerBlock IEFractionParts={2}>
                <Input
                  dataTest="SpouseName"
                  value={spouse.spouseName}
                  label={translate(
                    "ATUCAD_NAME_INPUT_LABEL",
                    "REQUIRED_MARKER"
                  )}
                  valid={validateInputByType["default"](spouse.spouseName)}
                  onChange={e => change(e, "spouse", "spouseName")}
                  required
                  disabled={disabled}
                />
              </InnerBlock>
              <InnerBlock IEFractionParts={2}>
                <Input
                  dataTest="SpouseCPF"
                  maskType="cpf"
                  valid={validateInputByType["cpf"](spouse.spouseCpf)}
                  value={spouse.spouseCpf}
                  label={translate("ATUCAD_CPF", "REQUIRED_MARKER")}
                  onChange={e => change(e, "spouse", "spouseCpf")}
                  required
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

export default PersonalDetails;
