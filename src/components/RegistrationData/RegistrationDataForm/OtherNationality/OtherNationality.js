import React, { useState, Fragment, useContext } from "react";
import { translate } from "../../../../utils/i18n";
import {
  REGISTRATION_DATA_ATTACHED_FILE_SIZE,
  REGISTRATION_DATA_ACCEPTED_FILE_FORMATS,
  TAX_RESIDENCES,
  DOCUMENTS
} from "../../../../utils/constants";
import {
  GridWrapper,
  Block,
  InnerGridWrapper,
  InnerBlock,
  BasicInfo,
  InnerTitle,
  SmallErrorMessage,
  Item
} from "../styles";
import Radio from "../../../common/Radio";
import SectionedFormContent from "../../../common/SectionedFormContent";
import { checkCollectionEquality } from "../../../../utils/checkEquality";
import deepClone from "../../../../utils/deepClone";
import attachMultipleDocuments from "../../../../utils/attachMultipleDocuments";
import { injectedCountryList } from "../../../../utils/constantLists";
import { StateContext } from "../RegistrationDataForm";

import {
  DragAndDropFileInput,
  IncrementalInput,
  AlertMessage
} from "react-bocombbm-components";

function OtherNationality({
  onChange,
  originalData,
  validateSection,
  disabled
}) {
  const { temporaryInvalidFields, isFilled, formModel, closeAll } = useContext(
    StateContext
  );
  const invalidFields = temporaryInvalidFields;
  const originalTaxResidences = originalData;
  let { documents, taxResidences } = formModel.content;

  const checkIfHasOthersThanBrazil = () =>
    taxResidences.filter(
      el =>
        el.country &&
        el.country.toLowerCase() != "brasil" &&
        el.country.toLowerCase() != "brazil"
    );

  const brasilIndex = taxResidences.findIndex(
    el =>
      (el.country && el.country.toLowerCase() === "brasil") ||
      (el.country && el.country.toLowerCase() === "brazil")
  );
  const indexToOmmit = brasilIndex !== -1 ? brasilIndex : null;

  const hasAnotherNacionality = () => checkIfHasOthersThanBrazil().length > 0;
  const [checked, updateChecked] = useState(hasAnotherNacionality());
  const [duplicated, updateDuplicated] = useState(false);

  const checkModelEquality = () =>
    checkCollectionEquality(taxResidences, originalTaxResidences);

  const equalsOriginalModel = checkModelEquality();

  const deleteDocuments = () => {
    documents.taxResidences && delete documents.taxResidences;
    isFilled.taxResidences && delete isFilled.taxResidences;
  };

  equalsOriginalModel && deleteDocuments();

  const handleRadioChange = e => {
    const value = e.target.value;

    if (value === "false") {
      const hasBrasil = brasilIndex;
      taxResidences =
        hasBrasil !== -1
          ? taxResidences.filter((item, index) => index === hasBrasil)
          : [];

      deleteDocuments();
      updateDuplicated(false);
      updateChecked(false);
    } else {
      taxResidences = deepClone(originalTaxResidences).concat({
        country: null,
        taxIdentificationNumber: null
      });
      updateChecked(true);
      !checkModelEquality() &&
        !documents.taxResidences &&
        onChange({ taxResidences: [] }, DOCUMENTS);
    }

    onChange(taxResidences, TAX_RESIDENCES);
  };

  const changeFileAttachments = async files => {
    const attachedDocuments = await attachMultipleDocuments(files);
    const newDocuments = { ...documents, taxResidences: attachedDocuments };

    onChange(newDocuments, DOCUMENTS);
  };

  const checkDuplicate = value => {
    return value.filter(
      item => item.country === value[value.length - 1].country
    );
  };

  const changeIncremental = value => {
    if (checkDuplicate(value).length > 1) {
      updateDuplicated(true);
    } else {
      updateDuplicated(false);
      onChange(value, TAX_RESIDENCES);

      !checkModelEquality() &&
        !documents.taxResidences &&
        onChange({ ...documents, taxResidences: [] }, DOCUMENTS);
    }
  };

  const validate = (item, modelIndex) =>
    taxResidences[modelIndex] &&
    taxResidences[modelIndex][item] &&
    taxResidences[modelIndex][item].length > 0;

  const isRequired = modelIndex => (indexToOmmit == modelIndex ? false : true);

  const validateSectionAndDocuments = () => {
    validateSection(taxResidences, TAX_RESIDENCES);
    validateSection(documents, DOCUMENTS);
  };

  const renderInvalidMessage = () => {
    const renderGroup = collection =>
      collection.map(item => (
        <Item data-last={translate("ATUCAD_AND")} key={item}>
          {translate(`ATUCAD_${item.toUpperCase()}`)}
        </Item>
      ));
    return (
      <Fragment>
        {invalidFields.taxResidences &&
          renderGroup(invalidFields.taxResidences)}
        {invalidFields.documents &&
          invalidFields.documents.taxResidences === false && (
            <Item data-last={translate("ATUCAD_AND")}>
              {translate("ATUCAD_ID_OR_VISA").toLowerCase()}
            </Item>
          )}
      </Fragment>
    );
  };

  return (
    <SectionedFormContent
      dataTest="SectionedOtherNationality"
      closedDescription={translate("ATUCAD_OTHER_NATIONALITY")}
      openedDescription={translate("ATUCAD_OTHER_NATIONALITY").toUpperCase()}
      callback={() => validateSectionAndDocuments()}
      close={closeAll}
      valid={
        documents.taxResidences
          ? isFilled.taxResidences && isFilled.documents.taxResidences
          : isFilled.taxResidences
      }
    >
      <GridWrapper>
        {(invalidFields.taxResidences ||
          (invalidFields.documents &&
            invalidFields.documents.taxResidences === false)) && (
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
                dataTest="RadioIHave"
                label={translate("ATUCAD_I_HAVE")}
                onChange={handleRadioChange}
                name="other_nationality"
                value={true}
                checked={checked}
                disabled={disabled}
              />
            </InnerBlock>
            <InnerBlock IEFractionParts={2}>
              <Radio
                dataTest="RadioIDoNotHave"
                label={translate("ATUCAD_I_DO_NOT_HAVE")}
                onChange={handleRadioChange}
                name="other_nationality"
                value={false}
                checked={!checked}
                disabled={disabled}
              />
            </InnerBlock>
            <InnerBlock span={[1, 2]} IEFractionParts={2}>
              <BasicInfo small>
                <b>____________________________</b>
                {`${translate(
                  "ATUCAD_OTHER_NATIONALITY_STATEMENT_1"
                )}${translate(
                  "ATUCAD_OTHER_NATIONALITY_STATEMENT_2"
                )} ${translate("ATUCAD_OTHER_NATIONALITY_STATEMENT_3")}`}
              </BasicInfo>
            </InnerBlock>
          </InnerGridWrapper>
        </Block>
        {checked && (
          <Block span={[1, 3]}>
            <InnerGridWrapper columns={1}>
              <InnerBlock>
                <InnerTitle>
                  {translate("ATUCAD_SPECIFY").toUpperCase()}
                </InnerTitle>
              </InnerBlock>
              {duplicated && (
                <InnerBlock>
                  <SmallErrorMessage>
                    {translate("ATUCAD_CANT_SELECT_SAME_COUNTRY")}
                  </SmallErrorMessage>
                </InnerBlock>
              )}
              <InnerBlock IEFractionParts={1} layered={2}>
                <IncrementalInput
                  dataTest="incrementalInput"
                  inputs={[
                    {
                      type: "select",
                      list: injectedCountryList(taxResidences),
                      name: "country",
                      label: translate("ATUCAD_COUNTRY_SELECT_LABEL"),
                      required: true,
                      valid: validate
                    },
                    {
                      type: "text",
                      name: "taxIdentificationNumber",
                      label: translate("ATUCAD_TAX_IDENTIFICATION_NUMBER"),
                      required: isRequired,
                      valid: validate
                    }
                  ]}
                  data={taxResidences}
                  incrementText={translate("ATUCAD_ADD_NATIONALITY")}
                  spacing={{
                    left: "none",
                    top: "none",
                    right: "none",
                    bottom: "none"
                  }}
                  onChange={changeIncremental}
                  dataIndexToOmmit={indexToOmmit}
                  disabled={disabled}
                />
              </InnerBlock>
            </InnerGridWrapper>
          </Block>
        )}
        {!equalsOriginalModel && checked && (
          <Block span={[1, 3]}>
            <InnerGridWrapper columns={1}>
              <InnerBlock IEFractionParts={1}>
                <DragAndDropFileInput
                  handleInputFiles={changeFileAttachments}
                  acceptedFileTypes={REGISTRATION_DATA_ACCEPTED_FILE_FORMATS}
                  fileMaxBytesSize={REGISTRATION_DATA_ATTACHED_FILE_SIZE}
                  isValid={
                    documents &&
                    documents.taxResidences &&
                    documents.taxResidences.length > 0
                  }
                  spacing={{
                    left: "none",
                    top: "none",
                    right: "none",
                    bottom: "none"
                  }}
                  labels={{
                    title: translate("UPLOAD_YOUR_DOCUMENTS"),
                    mainMessage: `${translate("COMPROVE_VERACITY_OF_DATA")}
                      <b style="font-family: Lato Bold">${translate(
                        "ID_OR_VISA"
                      )}</b>
                    `,
                    placeholder: translate("DROP_FILES_HERE"),
                    button: translate("SEARCH_FILE"),
                    dragginValue: translate("LOAD_FILES"),
                    excededSize: translate("EXCEDED_SIZE_MESSAGE")
                  }}
                />
              </InnerBlock>
            </InnerGridWrapper>
          </Block>
        )}
      </GridWrapper>
    </SectionedFormContent>
  );
}

export default OtherNationality;
