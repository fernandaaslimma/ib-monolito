import React, { Fragment, useContext } from "react";
import SectionedFormContent from "../../../common/SectionedFormContent";
import {
  FatcaForm,
  Option,
  BasicInfo,
  InputMargin,
  DragAndDropArea,
  InnerGridWrapper,
  InnerBlock,
  Block,
  GridWrapper,
  SmallErrorMessage,
  Item
} from "../styles";
import Radio from "../../../common/Radio";
import Checkbox from "../../../common/Checkbox";
import { translate } from "../../../../utils/i18n";
import {
  REGISTRATION_DATA_ATTACHED_FILE_SIZE,
  REGISTRATION_DATA_ACCEPTED_FILE_FORMATS,
  FATCA_INFORMATION,
  DOCUMENTS
} from "../../../../utils/constants";
import attachMultipleDocuments from "../../../../utils/attachMultipleDocuments";
import {
  Input,
  DragAndDropFileInput,
  AlertMessage
} from "react-bocombbm-components";
import { StateContext } from "../RegistrationDataForm";

function ForeignAccountTaxCA({
  onChange,
  originalData,
  validateSection,
  disabled
}) {
  const originalFatcaInformation = originalData;
  const { temporaryInvalidFields, isFilled, formModel, closeAll } = useContext(
    StateContext
  );
  const invalidFields = temporaryInvalidFields;
  let { fatcaInformation, documents } = formModel.content;

  const checkModelEquality = () =>
    JSON.stringify(
      fatcaInformation.questionnaire.filter(
        obj =>
          obj.optionNumber === 5 ||
          obj.optionNumber === 6 ||
          obj.optionNumber === 8
      )
    ) ===
    JSON.stringify(
      originalFatcaInformation.questionnaire.filter(
        obj =>
          obj.optionNumber === 5 ||
          obj.optionNumber === 6 ||
          obj.optionNumber === 8
      )
    );

  const equalsOriginalModel = checkModelEquality();

  const deleteDocuments = () => {
    documents.fatcaInformation && delete documents.fatcaInformation;
    isFilled.documents &&
      isFilled.documents.fatcaInformation &&
      delete isFilled.documents.fatcaInformation;
  };

  const getOtherInput = () => {
    const otherItem = fatcaInformation.questionnaire.find(
      item => item.optionNumber === 4 && item.value === true
    );

    if (
      otherItem &&
      fatcaInformation.questionnaire[3].additionalValues.length === 0
    ) {
      // Adiciona valores vazios igual ao mock
      fatcaInformation.questionnaire[3].additionalValues = [
        {
          order: 1,
          value: 0
        },
        {
          order: 2,
          value: 0
        },
        {
          order: 3,
          value: 0
        }
      ];
    } else if (!otherItem) {
      // altera para array vazio
      fatcaInformation.questionnaire[3].additionalValues = [];
    }

    return otherItem;
  };

  const showDragAndDrop = () => {
    let filesItems = fatcaInformation.questionnaire.some(
      item =>
        (item.optionNumber === 5 && item.value === true) ||
        (item.optionNumber === 6 && item.value === true) ||
        (item.optionNumber === 8 && item.value === true)
    );

    filesItems &&
      !equalsOriginalModel &&
      !documents.fatcaInformation &&
      onChange({ ...documents, fatcaInformation: [] }, DOCUMENTS);

    return filesItems;
  };

  (fatcaInformation.isUsPerson || !showDragAndDrop()) && deleteDocuments(); // caso nenhuma opção vier selecionada
  equalsOriginalModel && showDragAndDrop() && deleteDocuments(); // caso uma opção vier selecionada

  const handleRadioChange = e => {
    fatcaInformation.isUsPerson = e.target.value === "true";

    fatcaInformation.isUsPerson &&
      fatcaInformation.questionnaire.forEach(item => (item.value = false)) &&
      (fatcaInformation.questionnaire[3].additionalValues = []);

    onChange(fatcaInformation, FATCA_INFORMATION);
  };

  const isInputContentValid = () => {
    const additionalValuesExists =
      fatcaInformation.questionnaire[3].additionalValues.length > 0;

    const checkZeroFill =
      additionalValuesExists &&
      fatcaInformation.questionnaire[3].additionalValues.some(
        item => Number(item.value) !== 0
      );

    const invalidInputChar =
      additionalValuesExists &&
      fatcaInformation.questionnaire[3].additionalValues.some(item =>
        isNaN(item.value)
      );

    return checkZeroFill && !invalidInputChar;
  };

  const handleChangeCheckbox = e => {
    const formItemIndex = fatcaInformation.questionnaire.findIndex(
      item => item.optionNumber === Number(e.target.name)
    );
    fatcaInformation.questionnaire[formItemIndex].value = e.target.checked;
    onChange(fatcaInformation, FATCA_INFORMATION);
  };

  const change = (e, index) => {
    getOtherInput().additionalValues[index].value = Number(e.target.value);
    onChange(fatcaInformation, FATCA_INFORMATION);
  };

  const changeFileAttachments = async files => {
    const attachedDocuments = await attachMultipleDocuments(files);
    documents = { ...documents, fatcaInformation: attachedDocuments };

    onChange(documents, DOCUMENTS);
  };

  const validateSectionAndDocuments = () => {
    validateSection(fatcaInformation, FATCA_INFORMATION);
    validateSection(documents, DOCUMENTS);
  };

  const renderInvalidMessage = () => {
    const renderGroup = collection =>
      collection.map(item => (
        <Item data-last={translate("ATUCAD_AND")} key={item}>
          {translate(item.toUpperCase())}
        </Item>
      ));
    return (
      <Fragment>
        {invalidFields.fatcaInformation &&
          renderGroup(invalidFields.fatcaInformation)}
        {invalidFields.documents &&
          invalidFields.documents.fatcaInformation === false && (
            <Item data-last={translate("ATUCAD_AND")}>
              {translate("PROOF_OF_VERACITY").toLowerCase()}
            </Item>
          )}
      </Fragment>
    );
  };

  return (
    <SectionedFormContent
      openedDescription={translate("FATCA").toUpperCase()}
      dataTest="SectionedForeignAccountTaxCA"
      closedDescription={translate("FATCA")}
      callback={() => validateSectionAndDocuments()}
      close={closeAll}
      valid={
        documents.fatcaInformation
          ? isFilled.fatcaInformation && isFilled.documents.fatcaInformation
          : isFilled.fatcaInformation
      }
    >
      <GridWrapper>
        {(invalidFields.fatcaInformation ||
          (invalidFields.documents &&
            invalidFields.documents.fatcaInformation === false)) && (
          <Block span={[1, 3]}>
            <AlertMessage type="error" icon="Attention">
              {translate("REQUIRED_FIELDS_OMMITED")}:<br />
              {renderInvalidMessage()}
            </AlertMessage>
          </Block>
        )}

        <Block span={[1, 3]}>
          <InnerGridWrapper columns={2}>
            <InnerBlock IEFractionParts={2}>
              <Radio
                dataTest="RadioIAmUSAResident"
                label={translate("I_AM_USA_RESIDENT")}
                onChange={handleRadioChange}
                name="fatca_information"
                value={true}
                checked={fatcaInformation.isUsPerson}
                disabled={disabled}
              />
            </InnerBlock>
            <InnerBlock IEFractionParts={2}>
              <Radio
                dataTest="RadioIAmDoNotUSAResident"
                label={translate("I_AM_NOT_USA_RESIDENT")}
                onChange={handleRadioChange}
                name="fatca_information"
                value={false}
                checked={!fatcaInformation.isUsPerson}
                disabled={disabled}
              />
            </InnerBlock>
            <InnerBlock span={[1, 3]}>
              {fatcaInformation.isUsPerson ? (
                <BasicInfo small>
                  {translate("FACTA_INTRO_IS_US_RESIDENT")}
                  <b>____________________________</b>
                </BasicInfo>
              ) : (
                <BasicInfo small>
                  {translate("FACTA_INTRO_1")}
                  <b>____________________________</b>
                  {translate("FACTA_INTRO_2")}
                </BasicInfo>
              )}
            </InnerBlock>
          </InnerGridWrapper>

          <InnerGridWrapper columns={1}>
            {!fatcaInformation.isUsPerson && (
              <FatcaForm>
                {fatcaInformation.questionnaire.map((item, index) => (
                  <InnerBlock key={index}>
                    <Option>
                      <Checkbox
                        dataTest={`CheckboxForeignAccountTaxCA_${index}`}
                        label={`${item.optionNumber}. ${item.text}`}
                        onChange={handleChangeCheckbox}
                        name={item.optionNumber}
                        checked={item.value}
                        disabled={disabled}
                      />
                    </Option>
                    {index === 3 && getOtherInput() && (
                      <InputMargin>
                        <InnerGridWrapper columns={3}>
                          <InnerBlock IEFractionParts={3}>
                            <Input
                              dataTest="InputDaysThisYear"
                              onChange={e => change(e, 0)}
                              value={getOtherInput().additionalValues[0].value.toString()}
                              label={translate(`INPUT_LABEL_${0}`)}
                              disabled={disabled}
                            />
                          </InnerBlock>
                          <InnerBlock IEFractionParts={3}>
                            <Input
                              dataTest="InputDaysLastYear"
                              onChange={e => change(e, 1)}
                              value={getOtherInput().additionalValues[1].value.toString()}
                              label={translate(`INPUT_LABEL_${1}`)}
                              disabled={disabled}
                            />
                          </InnerBlock>
                          <InnerBlock IEFractionParts={3}>
                            <Input
                              dataTest="InputDaysBeforeYear"
                              onChange={e => change(e, 2)}
                              value={getOtherInput().additionalValues[2].value.toString()}
                              label={translate(`INPUT_LABEL_${2}`)}
                              disabled={disabled}
                            />
                          </InnerBlock>
                          {getOtherInput() && !isInputContentValid() && (
                            <InnerBlock span={[1, 3]} IEFractionParts={3}>
                              <SmallErrorMessage>
                                {translate("ALL_CANT_BE_ZERO")}
                              </SmallErrorMessage>
                            </InnerBlock>
                          )}
                        </InnerGridWrapper>
                      </InputMargin>
                    )}
                  </InnerBlock>
                ))}
              </FatcaForm>
            )}
          </InnerGridWrapper>
          {!fatcaInformation.isUsPerson &&
            showDragAndDrop() &&
            !equalsOriginalModel && (
              <DragAndDropArea>
                <DragAndDropFileInput
                  data-test="DragAndDropFileInput"
                  handleInputFiles={changeFileAttachments}
                  acceptedFileTypes={REGISTRATION_DATA_ACCEPTED_FILE_FORMATS}
                  fileMaxBytesSize={REGISTRATION_DATA_ATTACHED_FILE_SIZE}
                  isValid={
                    documents &&
                    documents.fatcaInformation &&
                    documents.fatcaInformation.length > 0
                  }
                  spacing={{
                    left: "none",
                    top: "none",
                    right: "none",
                    bottom: "none"
                  }}
                  labels={{
                    title: translate("UPLOAD_YOUR_DOCUMENTS"),
                    mainMessage: `${translate("FACTA_FILES_DESCRIPTION")}
                      <b style="font-family: Lato Bold; font-size: 14px">${translate(
                        "FACTA_FIELDS"
                      )}</b>
                    `,
                    placeholder: translate("DROP_FILES_HERE"),
                    button: translate("SEARCH_FILE"),
                    dragginValue: translate("LOAD_FILES"),
                    excededSize: translate("EXCEDED_SIZE_MESSAGE")
                  }}
                />
              </DragAndDropArea>
            )}
        </Block>
      </GridWrapper>
    </SectionedFormContent>
  );
}

export default ForeignAccountTaxCA;
