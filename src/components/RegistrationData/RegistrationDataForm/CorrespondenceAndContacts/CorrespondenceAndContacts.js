import React, { Fragment, useContext } from "react";
import { translate } from "../../../../utils/i18n";
import {
  REGISTRATION_DATA_ATTACHED_FILE_SIZE,
  REGISTRATION_DATA_ACCEPTED_FILE_FORMATS,
  CONTACTS,
  DOCUMENTS
} from "../../../../utils/constants";
import { extractNumber } from "../../../../utils/formatNumber";
import {
  GridWrapper,
  Block,
  InnerGridWrapper,
  InnerBlock,
  InnerTitle,
  Item
} from "../styles";

import SectionedFormContent from "../../../common/SectionedFormContent";
import {
  DragAndDropFileInput,
  Input,
  AlertMessage,
  Dropdown
} from "react-bocombbm-components";

import attachMultipleDocuments from "../../../../utils/attachMultipleDocuments";
import { checkObjectEquality } from "../../../../utils/checkEquality";
import {
  validateInputByType,
  isValueNullOrUndefined
} from "../../../../utils/validations/input";
import { injectedCountryList } from "../../../../utils/constantLists";
import { StateContext } from "../RegistrationDataForm";

function CorrespondenceAndContacts({
  onChange,
  originalData,
  validateSection,
  disabled
}) {
  const { temporaryInvalidFields, isFilled, formModel, closeAll } = useContext(
    StateContext
  );
  let { contacts, documents } = formModel.content;

  const { addresses } = contacts;
  const invalidFields = temporaryInvalidFields;
  const list = injectedCountryList(addresses);

  const checkModelEquality = () =>
    checkObjectEquality(
      addresses.find(item => item.type === "home"),
      originalData.addresses.find(item => item.type === "home")
    );

  const equalsOriginalModel = checkModelEquality();

  const deleteDocuments = () => {
    documents.addresses && delete documents.addresses;
    isFilled.contacts && delete isFilled.contacts;
  };

  equalsOriginalModel && deleteDocuments();

  //for grid correct displacement in I.E the prop IEFractionParts must be passed to the <Block> and <InnerBlock> tags.
  //It reflects the columns property passed to the upper <GridWrapper> and <InnerGridWrapper>.
  const getNumberBytype = type => {
    const result = contacts.telephones.find(c => c.type === type);

    if (!result) {
      return;
    }

    return result.fullTelephone;
  };

  const getEmailByType = type => {
    const result = contacts.emails.find(c => c.type === type);

    if (!result) {
      return;
    }

    return result.address;
  };

  const changeAddress = (e, index) => {
    const field = e.target;

    contacts.addresses[index][field.name] = field.value;
    onChange(contacts, CONTACTS);

    !checkModelEquality() &&
      !documents.addresses &&
      onChange({ addresses: [] }, DOCUMENTS);
  };

  const changeCountryAddress = (item, index) => {
    contacts.addresses[index].country = item.value;
    onChange(contacts, CONTACTS);

    !checkModelEquality() &&
      !documents.addresses &&
      onChange({ addresses: [] }, DOCUMENTS);
  };

  const changePhone = (e, type) => {
    const value = extractNumber(e.target.value);

    const result = contacts.telephones.find(c => c.type === type);

    const ddd = value.substring(0, 2);
    const number = value.substring(2);
    const fullTelephone = e.target.value;

    if (result) {
      result.ddd = ddd;
      result.number = number;
      result.fullTelephone = fullTelephone;
    } else {
      contacts.telephones.push({
        type,
        ddd,
        number,
        fullTelephone
      });
    }

    onChange(contacts, CONTACTS);
  };

  const changeEmail = (e, type) => {
    const value = e.target.value;
    const result = contacts.emails.find(c => c.type === type);

    if (result) {
      result.address = value;
    } else {
      contacts.emails.push({
        type,
        address: value
      });
    }

    onChange(contacts, CONTACTS);
  };

  const isCommercialEmailRequired = email => {
    if (isValueNullOrUndefined(email) || email.length === 0) return false;
    if (email.length > 0) return true;
  };

  const changeFileAttachments = async files => {
    const attachedDocuments = await attachMultipleDocuments(files);
    documents = { ...documents, addresses: attachedDocuments };

    onChange(documents, DOCUMENTS);
  };

  const validateSectionAndDocuments = () => {
    validateSection(contacts, CONTACTS);
    validateSection(documents, DOCUMENTS);
  };

  const getCountry = country =>
    country &&
    list.find(
      item =>
        item.value.toUpperCase() === country.toUpperCase() ||
        item.altValue.toUpperCase() === country.toUpperCase()
    );

  const renderInvalidMessage = () => {
    const renderGroup = (collection, text) =>
      collection.map(item => (
        <Item data-last={translate("ATUCAD_AND")} key={item}>
          {translate(`ATUCAD_${item.toUpperCase()}`)} (
          {translate(text).toLowerCase()})
        </Item>
      ));
    return (
      <Fragment>
        {invalidFields.contacts &&
          invalidFields.contacts.addresses &&
          renderGroup(invalidFields.contacts.addresses, "ATUCAD_HOME")}
        {invalidFields.contacts &&
          invalidFields.contacts.commercialAddress &&
          renderGroup(
            invalidFields.contacts.commercialAddress,
            "ATUCAD_COMMERCIAL"
          )}
        {invalidFields.contacts &&
          invalidFields.contacts.telephones &&
          renderGroup(
            invalidFields.contacts.telephones,
            "ATUCAD_PERSONAL_CELL_PHONE"
          )}
        {invalidFields.contacts &&
          invalidFields.contacts.emails &&
          renderGroup(invalidFields.contacts.emails, "ATUCAD_PERSONAL_EMAIL")}
        {invalidFields.contacts &&
          invalidFields.contacts.commercialEmail &&
          renderGroup(
            invalidFields.contacts.commercialEmail,
            "ATUCAD_COMMERCIAL_EMAIL"
          )}
        {invalidFields.documents &&
          invalidFields.documents.addresses === false && (
            <Item data-last={translate("ATUCAD_AND")}>
              {translate("ATUCAD_ADDRESS_OF_LAST_90_DAYS").toLowerCase()}
            </Item>
          )}
      </Fragment>
    );
  };

  const checkRequiredAddress = address => {
    if (address.type === "home") {
      return true;
    }
    const keys = Object.keys(address);
    return keys.some(
      key =>
        key !== "type" &&
        key !== "district" &&
        key !== "state" &&
        key !== "complement" &&
        address[key].length > 0
    );
  };

  return (
    <Fragment>
      {contacts && (
        <SectionedFormContent
          dataTest="SectionedCorrespondenceAndContacts"
          valid={
            documents.addresses
              ? isFilled.contacts && isFilled.documents.addresses
              : isFilled.contacts
          }
          close={closeAll}
          callback={() => validateSectionAndDocuments()}
          closedDescription={translate(
            "ATUCAD_CORRESPONDENCE_AND_CONTACT_ADDRESSES"
          )}
          openedDescription={translate(
            "ATUCAD_CORRESPONDENCE_AND_CONTACT_ADDRESSES"
          ).toUpperCase()}
        >
          <GridWrapper>
            {(invalidFields.contacts ||
              (invalidFields.documents &&
                invalidFields.documents.addresses === false)) && (
              <Block span={[1, 3]}>
                <AlertMessage type="error" icon="Attention">
                  {translate("ATUCAD_REQUIRED_FIELDS_OMMITED")}:<br />
                  {renderInvalidMessage()}
                </AlertMessage>
              </Block>
            )}
            {contacts.addresses.map((address, index) => {
              const isRequired = checkRequiredAddress(address);
              const HAS_MARKER = isRequired && "REQUIRED_MARKER";
              return (
                <Block span={[1, 3]} key={index}>
                  <InnerGridWrapper columns={5}>
                    <InnerBlock span={[1, 5]} IEFractionParts={5}>
                      <InnerTitle>
                        {translate(
                          `ATUCAD_${address.type.toUpperCase()}`
                        ).toUpperCase()}
                      </InnerTitle>
                    </InnerBlock>
                    <InnerBlock span={[1, 3]} IEFractionParts={5}>
                      <Input
                        dataTest={`InputAddress_${address.type}`}
                        onChange={e => changeAddress(e, index)}
                        value={address.address}
                        name={"address"}
                        label={translate("ATUCAD_ADDRESS", HAS_MARKER)}
                        required={isRequired}
                        valid={validateInputByType["default"](address.address)}
                        disabled={disabled}
                      />
                    </InnerBlock>
                    <InnerBlock IEFractionParts={5}>
                      <Input
                        dataTest={`InputNumber_${address.type}`}
                        onChange={e => changeAddress(e, index)}
                        value={address.number}
                        name="number"
                        label={translate("ATUCAD_NUMBER", HAS_MARKER)}
                        required={isRequired}
                        valid={validateInputByType["default"](address.number)}
                        disabled={disabled}
                      />
                    </InnerBlock>
                    <InnerBlock IEFractionParts={5}>
                      <Input
                        dataTest={`InputComplement_${address.type}`}
                        onChange={e => changeAddress(e, index)}
                        value={address.complement}
                        name="complement"
                        label={translate("ATUCAD_COMPLEMENT")}
                        valid={validateInputByType["default"](
                          address.complement
                        )}
                        disabled={disabled}
                      />
                    </InnerBlock>

                    <InnerBlock IEFractionParts={5}>
                      <Input
                        dataTest={`InputCep_${address.type}`}
                        onChange={e => changeAddress(e, index)}
                        value={address.cep}
                        name="cep"
                        label={translate("ATUCAD_CEP", HAS_MARKER)}
                        required={isRequired}
                        valid={validateInputByType["default"](address.cep)}
                        disabled={disabled}
                      />
                    </InnerBlock>
                    <InnerBlock span={[2, 3]} IEFractionParts={5}>
                      <Input
                        dataTest={`InputCity_${address.type}`}
                        onChange={e => changeAddress(e, index)}
                        value={address.city}
                        name="city"
                        label={translate("ATUCAD_CITY", HAS_MARKER)}
                        required={isRequired}
                        valid={validateInputByType["default"](address.city)}
                        disabled={disabled}
                      />
                    </InnerBlock>
                    <InnerBlock IEFractionParts={5}>
                      <Input
                        dataTest={`InputState_${address.type}`}
                        onChange={e => changeAddress(e, index)}
                        value={address.state}
                        type="text"
                        name="state"
                        label={translate("ATUCAD_STATE")}
                        valid={validateInputByType["default"](address.state)}
                        disabled={disabled}
                      />
                    </InnerBlock>
                    <InnerBlock IEFractionParts={5} layered={5 - index}>
                      <Dropdown
                        classNamePrefix={`DropdownCountry_${address.type}`}
                        options={list}
                        label={translate(
                          "ATUCAD_COUNTRY_SELECT_LABEL",
                          HAS_MARKER
                        )}
                        onChange={value => changeCountryAddress(value, index)}
                        name="country"
                        value={getCountry(address.country)}
                        disabled={disabled}
                        dataTest="InputContry"
                      />
                    </InnerBlock>
                  </InnerGridWrapper>

                  {!equalsOriginalModel && address.type === "home" && (
                    <InnerBlock>
                      <DragAndDropFileInput
                        handleInputFiles={changeFileAttachments}
                        acceptedFileTypes={
                          REGISTRATION_DATA_ACCEPTED_FILE_FORMATS
                        }
                        fileMaxBytesSize={REGISTRATION_DATA_ATTACHED_FILE_SIZE}
                        isValid={
                          documents &&
                          documents.addresses &&
                          documents.addresses.length > 0
                        }
                        spacing={{
                          left: "none",
                          top: "l",
                          right: "none",
                          bottom: "none"
                        }}
                        labels={{
                          title: translate("UPLOAD_YOUR_DOCUMENTS"),
                          mainMessage: `${translate(
                            "COMPROVE_VERACITY_OF_DATA"
                          )}
                      <b style="font-family: Lato Bold">${translate(
                        "ADDRESS_OF_LAST_90_DAYS"
                      )}</b>
                    `,
                          placeholder: translate("DROP_FILES_HERE"),
                          button: translate("SEARCH_FILE"),
                          dragginValue: translate("LOAD_FILES"),
                          excededSize: translate("EXCEDED_SIZE_MESSAGE")
                        }}
                      />
                    </InnerBlock>
                  )}
                </Block>
              );
            })}

            <Block span={[1, 3]}>
              <InnerGridWrapper columns={2}>
                <InnerBlock span={[1, 2]} IEFractionParts={2}>
                  <InnerTitle>
                    {translate("ATUCAD_CONTACT_INFO").toUpperCase()}
                  </InnerTitle>
                </InnerBlock>
                <InnerBlock IEFractionParts={2}>
                  <InnerGridWrapper>
                    <InnerBlock span={[1, 3]}>
                      <Input
                        dataTest="InputPersonalPhone"
                        onChange={e => changePhone(e, "home")}
                        value={getNumberBytype("home")}
                        maskType="telephone"
                        name="personal_phone"
                        label={translate("ATUCAD_DDD_PERSONAL_PHONE")}
                        disabled={disabled}
                      />
                    </InnerBlock>
                  </InnerGridWrapper>
                </InnerBlock>
                <InnerBlock IEFractionParts={2}>
                  <InnerGridWrapper>
                    <InnerBlock span={[1, 3]}>
                      <Input
                        dataTest="InputPersonalEmail"
                        onChange={e => changeEmail(e, "personal")}
                        value={getEmailByType("personal")}
                        name="personal_email"
                        label={translate(
                          "ATUCAD_PERSONAL_EMAIL",
                          "REQUIRED_MARKER"
                        )}
                        required
                        valid={validateInputByType["email"](
                          getEmailByType("personal")
                        )}
                        disabled={disabled}
                      />
                    </InnerBlock>
                  </InnerGridWrapper>
                </InnerBlock>
                <InnerBlock IEFractionParts={2}>
                  <InnerGridWrapper>
                    <InnerBlock span={[1, 3]}>
                      <Input
                        dataTest="InpuCommercialPhone"
                        onChange={e => changePhone(e, "commercial")}
                        value={getNumberBytype("commercial")}
                        maskType="telephone"
                        name="commercial_phone"
                        label={translate("ATUCAD_DDD_COMMERCIAL_PHONE")}
                        disabled={disabled}
                      />
                    </InnerBlock>
                  </InnerGridWrapper>
                </InnerBlock>
                <InnerBlock IEFractionParts={2}>
                  <InnerGridWrapper>
                    <InnerBlock span={[1, 3]}>
                      <Input
                        dataTest="InputCommercialEmail"
                        onChange={e => changeEmail(e, "commercial")}
                        value={getEmailByType("commercial")}
                        name="commercial_email"
                        label={translate("ATUCAD_COMMERCIAL_EMAIL")}
                        required={isCommercialEmailRequired(
                          getEmailByType("commercial")
                        )}
                        disabled={disabled}
                        valid={
                          isCommercialEmailRequired
                            ? validateInputByType["email"](
                                getEmailByType("commercial")
                              )
                            : true
                        }
                      />
                    </InnerBlock>
                  </InnerGridWrapper>
                </InnerBlock>
                <InnerBlock IEFractionParts={2}>
                  <InnerGridWrapper>
                    <InnerBlock span={[1, 3]}>
                      <Input
                        dataTest="InputCellPhone"
                        onChange={e => changePhone(e, "cellphone")}
                        value={getNumberBytype("cellphone")}
                        maskType="telephone"
                        name="cellphone_phone"
                        label={translate(
                          "ATUCAD_DDD_PERSONAL_CELL_PHONE",
                          "REQUIRED_MARKER"
                        )}
                        disabled={disabled}
                        valid={validateInputByType["telephone"](
                          getNumberBytype("cellphone")
                        )}
                        required
                      />
                    </InnerBlock>
                  </InnerGridWrapper>
                </InnerBlock>
              </InnerGridWrapper>
            </Block>
          </GridWrapper>
        </SectionedFormContent>
      )}
    </Fragment>
  );
}

export default CorrespondenceAndContacts;
