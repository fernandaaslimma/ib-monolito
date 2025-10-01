import React, { useContext } from "react";
import { translate } from "../../../../utils/i18n";
import {
  GridWrapper,
  Block,
  InnerGridWrapper,
  InnerBlock,
  Item,
  BasicInfo
} from "../styles";
import { PURPOSE_WITH_THE_INSTITUTION } from "../../../../utils/constants";

import Checkbox from "../../../common/Checkbox";
import SectionedFormContent from "../../../common/SectionedFormContent";
import { Input, AlertMessage } from "react-bocombbm-components";
import { validateInputByType } from "../../../../utils/validations/input";
import { StateContext } from "../RegistrationDataForm";

function PurposeWithInstitution({ onChange, validateSection, disabled }) {
  const { temporaryInvalidFields, isFilled, formModel, closeAll } = useContext(
    StateContext
  );
  const invalidFields = temporaryInvalidFields.purposeWithTheInstitution;
  const { purposeWithTheInstitution } = formModel.content;

  const getOtherInput = () => {
    const otherItem = purposeWithTheInstitution.find(
      item => item.name === "other"
    );
    return otherItem;
  };

  const handleChangeCheckbox = e => {
    const formItemIndex = purposeWithTheInstitution.findIndex(
      item => item.name === e.target.name
    );

    purposeWithTheInstitution[formItemIndex].value = e.target.checked;
    onChange(purposeWithTheInstitution, PURPOSE_WITH_THE_INSTITUTION);
  };

  const displayPurposes = () => {
    let purposes = purposeWithTheInstitution.map((item, index) => {
      const comma = index !== purposeWithTheInstitution.length - 1 ? "," : "";
      return item.value
        ? `${translate(`ATUCAD_${item.name.toUpperCase()}`)}${comma}`
        : "";
    });

    return purposes.join(" ");
  };

  const change = e => {
    const otherInput = getOtherInput();
    otherInput.aditionalValue = e.target.value;
    otherInput.additionalValue = e.target.value;
    onChange(purposeWithTheInstitution, PURPOSE_WITH_THE_INSTITUTION);
  };

  const renderInvalidMessage = () => {
    const renderGroup = collection => {
      return collection.map(item => (
        <Item data-last={translate("ATUCAD_AND")} key={item}>
          {translate(`ATUCAD_${item.toUpperCase()}`)}
        </Item>
      ));
    };

    const keys = Object.keys(invalidFields);
    return keys.map(item => renderGroup(invalidFields[item]));
  };

  const getAdditionalValue = () =>
    getOtherInput().additionalValue || getOtherInput().aditionalValue;

  return (
    <SectionedFormContent
      dataTest="SectionedPurposeWithInstitution"
      openedDescription={translate(
        "ATUCAD_PURPOSE_OF_MY_BUSINESS"
      ).toUpperCase()}
      closedDescription={`${translate(
        "ATUCAD_PURPOSE_OF_MY_BUSINESS_WITH_INSTITUTION"
      )} ${displayPurposes()}`}
      valid={isFilled.purposeWithTheInstitution}
      callback={() =>
        validateSection(purposeWithTheInstitution, PURPOSE_WITH_THE_INSTITUTION)
      }
      close={closeAll}
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
        <Block span={[1, 3]}>
          <InnerGridWrapper columns={3}>
            <InnerBlock span={[1, 3]}>
              <BasicInfo small>
                {" "}
                {translate("ATUCAD_PURPOSE_OF_MY_BUSINESS")}
              </BasicInfo>
            </InnerBlock>
            {purposeWithTheInstitution.map((item, index) => (
              <InnerBlock key={index}>
                <Checkbox
                  dataTest={`CheckboxPurposeOfBusiness_${index}`}
                  label={translate(`ATUCAD_${item.name.toUpperCase()}`)}
                  onChange={handleChangeCheckbox}
                  name={item.name}
                  checked={item.value}
                  disabled={disabled}
                />
              </InnerBlock>
            ))}
            {getOtherInput() && getOtherInput().value && (
              <InnerBlock span={[1, 3]}>
                <Input
                  dataTest="InputOtherPurpose"
                  onChange={change}
                  value={getAdditionalValue()}
                  name="other"
                  label={translate("ATUCAD_OTHER_PURPOSE")}
                  required
                  valid={validateInputByType["default"](getAdditionalValue())}
                  disabled={disabled}
                />
              </InnerBlock>
            )}
          </InnerGridWrapper>
        </Block>
      </GridWrapper>
    </SectionedFormContent>
  );
}

export default PurposeWithInstitution;
