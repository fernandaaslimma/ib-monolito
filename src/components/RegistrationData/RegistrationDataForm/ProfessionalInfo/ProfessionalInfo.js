import React, { Fragment, useContext } from "react";
import { translate } from "../../../../utils/i18n";
import { validateInputByType } from "../../../../utils/validations/input";
import SectionedFormContent from "../../../common/SectionedFormContent";
import { Dropdown, Input, AlertMessage } from "react-bocombbm-components";
import {
  GridWrapper,
  InnerGridWrapper,
  Block,
  InnerBlock,
  Item
} from "../styles";
import { PROFESSIONAL_INFORMATION } from "../../../../utils/constants";
import { professionList } from "../../../../utils/constantLists";
import { StateContext } from "../RegistrationDataForm";
import resetObjectFields from "../../../../utils/resetObjectFields";

function ProfessionalInfo({ onChange, validateSection, disabled }) {
  const { temporaryInvalidFields, isFilled, formModel, closeAll } = useContext(
    StateContext
  );
  const invalidFields = temporaryInvalidFields.professionalInformation;
  let { professionalInformation } = formModel.content;

  const { activity } = professionalInformation;

  if (activity === "retired") {
    resetObjectFields(
      ["company", "otherActivitySpecified", "admissionDate"],
      professionalInformation
    );
  } else if (
    activity === "privateSectorEmployee" ||
    activity === "publicSectorEmployee"
  ) {
    resetObjectFields(
      ["otherActivitySpecified", "admissionDate"],
      professionalInformation
    );
  } else if (
    activity === "selfEmployed" ||
    activity === "others" ||
    activity === "professional" ||
    activity === "socioOwner"
  ) {
    resetObjectFields(
      ["company", "occupation", "admissionDate"],
      professionalInformation
    );
  } else if (activity === "fromHome") {
    resetObjectFields(
      ["company", "otherActivitySpecified", "occupation", "admissionDate"],
      professionalInformation
    );
  } else if (activity === "owner") {
    resetObjectFields(
      ["otherActivitySpecified", "occupation", "admissionDate"],
      professionalInformation
    );
  }

  const changeActivity = e => {
    const value = e.value;
    professionalInformation.activity = value;

    onChange(professionalInformation, PROFESSIONAL_INFORMATION);
  };

  const changeInput = (e, field, fieldDeep) => {
    const value = e.target.value;

    fieldDeep
      ? (professionalInformation[field][fieldDeep] = value)
      : (professionalInformation[field] = value);

    onChange(professionalInformation, PROFESSIONAL_INFORMATION);
  };

  const defineClosedDescription = activity => {
    switch (activity) {
      case "retired":
        return `${translate(`${activity}_DESCRIPTION`.toUpperCase())} ${
          professionalInformation.occupation
        }`;
      case "privateSectorEmployee":
        return `${translate(`${activity}_DESCRIPTION`.toUpperCase())} ${
          professionalInformation.occupation
        } ${translate("AT_COMPANY")} ${professionalInformation.company.name}`;
      case "publicSectorEmployee":
        return `${translate(`${activity}_DESCRIPTION`.toUpperCase())} ${
          professionalInformation.occupation
        } ${translate("AT_COMPANY")} ${professionalInformation.company.name}`;
      case "selfEmployed":
        return `${translate(`${activity}_DESCRIPTION`.toUpperCase())}`;
      case "fromHome":
        return `${translate(`${activity}_DESCRIPTION`.toUpperCase())}`;
      case "owner":
        return `${translate(`${activity}_DESCRIPTION`.toUpperCase())} ${
          professionalInformation.company.name
        }`;
      case "others":
      case "professional":
      case "socioOwner":
        return `${translate("OTHERS_DESCRIPTION")} ${
          professionalInformation.otherActivitySpecified !== null
            ? professionalInformation.otherActivitySpecified
            : ""
        }`;
      default:
        return translate("PROFESSIONAL_INFO");
    }
  };

  const renderInvalidMessage = () => {
    const renderGroup = collection =>
      collection.map(item => (
        <Item data-last={translate("ATUCAD_AND")} key={item}>
          {translate(item.toUpperCase())}
        </Item>
      ));
    const keys = Object.keys(invalidFields);
    return keys.map(item => renderGroup(invalidFields[item]));
  };

  return (
    <SectionedFormContent
      openedDescription={translate("PROFESSIONAL_INFO").toUpperCase()}
      dataTest="SectionedProfessionalInfo"
      closedDescription={defineClosedDescription(
        professionalInformation.activity
      )}
      callback={() =>
        validateSection(professionalInformation, PROFESSIONAL_INFORMATION)
      }
      valid={isFilled.professionalInformation}
      close={closeAll}
    >
      <GridWrapper>
        {invalidFields && (
          <Block span={[1, 3]}>
            <AlertMessage type="error" icon="Attention">
              {translate("REQUIRED_FIELDS_OMMITED")}:<br />
              {renderInvalidMessage()}
            </AlertMessage>
          </Block>
        )}
        <Block span={[1, 3]}>
          <InnerGridWrapper columns={2}>
            <InnerBlock IEFractionParts={2} layered={2}>
              <Dropdown
                classNamePrefix="DropdownActivity"
                onChange={changeActivity}
                name="Activities"
                options={professionList}
                value={professionList.find(
                  item => item.value === professionalInformation.activity
                )}
                label={translate("ACTIVITY")}
                dataTest="activitySelection"
                disabled={disabled}
              />
            </InnerBlock>
            {professionalInformation.activity === "retired" && (
              <InnerBlock IEFractionParts={2}>
                <Input
                  dataTest="InputOccupation"
                  onChange={e => changeInput(e, "occupation")}
                  value={professionalInformation.occupation}
                  label={translate("OCCUPATION")}
                  required
                  valid={validateInputByType["default"](
                    professionalInformation.occupation
                  )}
                  disabled={disabled}
                />
              </InnerBlock>
            )}

            {professionalInformation.activity === "owner" && (
              <InnerBlock IEFractionParts={2}>
                <Input
                  dataTest="InputCompanyName"
                  onChange={e => changeInput(e, "company", "name")}
                  value={professionalInformation.company.name}
                  label={translate("COMPANY")}
                  required
                  valid={validateInputByType["default"](
                    professionalInformation.company.name
                  )}
                  disabled={disabled}
                />
              </InnerBlock>
            )}

            {(professionalInformation.activity === "others" ||
              professionalInformation.activity === "selfEmployed" ||
              professionalInformation.activity === "professional" ||
              professionalInformation.activity === "socioOwner") && (
              <InnerBlock IEFractionParts={2}>
                <Input
                  dataTest="InputActivitySpecified"
                  onChange={e => changeInput(e, "otherActivitySpecified")}
                  value={
                    professionalInformation.otherActivitySpecified
                      ? professionalInformation.otherActivitySpecified
                      : ""
                  }
                  valid={validateInputByType["default"](
                    professionalInformation.otherActivitySpecified
                  )}
                  required
                  label={translate("KIND_OF_ACTIVITY")}
                  disabled={disabled}
                />
              </InnerBlock>
            )}

            {(professionalInformation.activity === "privateSectorEmployee" ||
              professionalInformation.activity === "publicSectorEmployee") && (
              <Fragment>
                <InnerBlock IEFractionParts={2}>
                  <Input
                    dataTest="InputOccupation"
                    onChange={e => changeInput(e, "occupation")}
                    value={professionalInformation.occupation}
                    label={translate("OCCUPATION")}
                    required
                    valid={validateInputByType["default"](
                      professionalInformation.occupation
                    )}
                    disabled={disabled}
                  />
                </InnerBlock>
                <InnerBlock span={[1, 2]} IEFractionParts={2}>
                  <Input
                    dataTest="InputCompanyName"
                    onChange={e => changeInput(e, "company", "name")}
                    value={professionalInformation.company.name}
                    required
                    label={translate("COMPANY")}
                    valid={validateInputByType["default"](
                      professionalInformation.company.name
                    )}
                    disabled={disabled}
                  />
                </InnerBlock>
              </Fragment>
            )}
          </InnerGridWrapper>
        </Block>
      </GridWrapper>
    </SectionedFormContent>
  );
}

export default ProfessionalInfo;
