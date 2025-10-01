import { checkTypeAndValidate } from "../../../utils/validations/input";
import deepClone from "../../../utils/deepClone";
import {
  CONTACTS,
  DOCUMENTS,
  TAX_RESIDENCES,
  FATCA_INFORMATION,
  INVESTMENT_DETAILS,
  POLITICALLY_EXPOSED_PERSON,
  ATTORNEYS_IN_FACT,
  RELATED_PERSON_INFORMATION,
  PERSONAL_REGISTRATION_DETAILS,
  PURPOSE_WITH_THE_INSTITUTION,
  PROFESSIONAL_INFORMATION
  //REPRESENTATION_AUTHORIZATION
} from "../../../utils/constants";
import { emailRegex } from "../../../utils/validations/login";

export const registrationDataFormUsedSections = [
  CONTACTS,
  DOCUMENTS,
  TAX_RESIDENCES,
  FATCA_INFORMATION,
  INVESTMENT_DETAILS,
  POLITICALLY_EXPOSED_PERSON,
  ATTORNEYS_IN_FACT,
  RELATED_PERSON_INFORMATION,
  PERSONAL_REGISTRATION_DETAILS,
  PURPOSE_WITH_THE_INSTITUTION,
  PROFESSIONAL_INFORMATION
];

// optional fields that must not block validation
const registraTionOptionalFields = {
  estimatedEquity: ["exactValue", "rangeOptions"],
  stocks: ["exactValue", "rangeOptions"],
  funds: ["exactValue", "rangeOptions"],
  bonds: ["exactValue", "rangeOptions"],
  savings: ["exactValue", "rangeOptions"],
  realProperty: ["exactValue", "rangeOptions"],
  personalProperty: ["exactValue", "rangeOptions"],
  bonusesAndCommissions: ["exactValue", "rangeOptions"],
  salary: ["exactValue", "rangeOptions"],
  others: ["exactValue", "rangeOptions"],
  addresses: ["complement", "state", "district"],
  personalRegistrationDetails: [
    "birthState",
    "documentType",
    "gender",
    "birthCountry",
    "birthCity",
    "dateOfBirth",
    "parentsNames",
    "fathersName",
    "mothersName",
    "documentIssuingBody",
    "documentDateOfIssue"
  ],
  attorneysInFact: ["endDate", "startDate"],
  commercialAddress: ["complement", "state", "district"]
};

let temporaryInvalidFields = {};

const setInvalidFields = (majorSection, section, key) => {
  if (majorSection === section || section === null) {
    !temporaryInvalidFields[majorSection] &&
      (temporaryInvalidFields[majorSection] = []);

    !temporaryInvalidFields[majorSection].includes(key) &&
      temporaryInvalidFields[majorSection].push(key);
  } else {
    !temporaryInvalidFields[majorSection] &&
      (temporaryInvalidFields[majorSection] = {});
    !temporaryInvalidFields[majorSection][section] &&
      (temporaryInvalidFields[majorSection][section] = []);

    if (!temporaryInvalidFields[majorSection][section].includes(key)) {
      majorSection === DOCUMENTS
        ? (temporaryInvalidFields[majorSection][section] = false)
        : temporaryInvalidFields[majorSection][section].push(key);
    }
  }
};

// TOTO - Bring back the argument "model" when the fields are back from the API
const checkForSectionFillCompletion = (objectToCheck, majorSection) => {
  //default field check
  const defaultFieldValidation = (objectToCheck, section) => {
    const checkEachKey = item => {
      const keys = Object.keys(item);

      const validArray = keys.map(key => {
        if (
          registraTionOptionalFields[section] &&
          registraTionOptionalFields[section].includes(key)
        ) {
          return true;
        }

        if (item[key]) {
          if (typeof item[key] === "object") {
            return defaultFieldValidation(item[key], key);
          }

          const valid = checkTypeAndValidate(key, item[key].toString());
          !valid && setInvalidFields(majorSection, section, key);

          return valid;
        }

        //for full form validation use only
        setInvalidFields(majorSection, section, key);
        return false;
      });

      return !validArray.includes(false);
    };

    if (Array.isArray(objectToCheck)) {
      return (
        objectToCheck.length > 0 &&
        objectToCheck.every(item => checkEachKey(item))
      );
    } else {
      if (Object.keys(objectToCheck).length > 0) {
        return checkEachKey(objectToCheck);
      }
      setInvalidFields(majorSection, section);
      return false;
    }
  };

  // const validateCheckField = () => {
  //   let valid;

  //   const checkCheckboxEmptyness = objectToCheck.every(
  //     item => item.value === false
  //   );

  //   const fieldOther = objectToCheck.find(item => item.name === "other");

  //   checkCheckboxEmptyness &&
  //     setInvalidFields(
  //       PURPOSE_WITH_THE_INSTITUTION,
  //       "purpose",
  //       "MUST_FILL_ONE_VALUE"
  //     );

  //   if (fieldOther.value === true) {
  //     valid =
  //       (fieldOther.additionalValue && fieldOther.additionalValue.length > 0) ||
  //       (fieldOther.aditionalValue && fieldOther.aditionalValue.length > 0);
  //     setInvalidFields(
  //       PURPOSE_WITH_THE_INSTITUTION,
  //       "purpose",
  //       "other_purpose"
  //     );
  //   } else {
  //     valid = true;
  //   }

  //   return checkCheckboxEmptyness ? false : !!valid;
  // };

  //validate the documents inclusion
  const validateDocuments = () => {
    const keys = Object.keys(objectToCheck);
    return keys.reduce((total, current) => {
      const hasLength = objectToCheck[current].length > 0;
      !hasLength && setInvalidFields("documents", current, false);
      return { ...total, [current]: hasLength };
    }, {});
  };

  // const validateFatca = () => {
  //   const isUsResident = objectToCheck.isUsPerson;

  //   if (isUsResident) {
  //     return true;
  //   } else {
  //     const checkCheckboxFulfillment = objectToCheck.questionnaire.some(
  //       item => item.value === true
  //     );

  //     const hasInputs = objectToCheck.questionnaire.find(
  //       item => item.optionNumber === 4 && item.value === true
  //     );

  //     const validateInput =
  //       hasInputs &&
  //       objectToCheck.questionnaire[3].additionalValues.some(
  //         item => Number(item.value) !== 0
  //       );

  //     const validateInputNumber =
  //       hasInputs &&
  //       objectToCheck.questionnaire[3].additionalValues.some(item =>
  //         isNaN(item.value)
  //       );

  //     const inputValidation = hasInputs
  //       ? validateInput && !validateInputNumber
  //       : true;

  //     !checkCheckboxFulfillment &&
  //       setInvalidFields(FATCA_INFORMATION, null, "MUST_FILL_ONE_VALUE");

  //     checkCheckboxFulfillment &&
  //       !inputValidation &&
  //       setInvalidFields(FATCA_INFORMATION, null, "ALL_CANT_BE_ZERO");

  //     return checkCheckboxFulfillment && inputValidation;
  //   }
  // };

  // const validateProfession = () => {
  //   const hasOccupation =
  //     objectToCheck.occupation && objectToCheck.occupation.length > 0;
  //   const hasCompany =
  //     objectToCheck.company &&
  //     objectToCheck.company.name &&
  //     objectToCheck.company.name.length > 0;
  //   const hasOtherActivity =
  //     objectToCheck.otherActivitySpecified &&
  //     objectToCheck.otherActivitySpecified.length > 0;

  //   switch (objectToCheck.activity) {
  //     case "retired": {
  //       !hasOccupation &&
  //         setInvalidFields(
  //           PROFESSIONAL_INFORMATION,
  //           "occupation",
  //           "occupation"
  //         );
  //       return !!hasOccupation;
  //     }
  //     case "privateSectorEmployee":
  //     case "publicSectorEmployee": {
  //       !hasOccupation &&
  //         setInvalidFields(
  //           PROFESSIONAL_INFORMATION,
  //           "occupation",
  //           "occupation"
  //         );
  //       !hasCompany &&
  //         setInvalidFields(PROFESSIONAL_INFORMATION, "company", "company_name");
  //       return !!hasOccupation && !!hasCompany;
  //     }
  //     case "owner": {
  //       !hasCompany &&
  //         setInvalidFields(PROFESSIONAL_INFORMATION, "company", "company_name");
  //       return !!hasCompany;
  //     }
  //     case "selfEmployed":
  //     case "professional":
  //     case "socioOwner":
  //     case "others": {
  //       !hasOtherActivity &&
  //         setInvalidFields(
  //           PROFESSIONAL_INFORMATION,
  //           "otherActivitySpecified",
  //           "kind_of_activity"
  //         );
  //       return !!hasOtherActivity;
  //     }
  //     case "fromHome":
  //       return true;
  //     default: {
  //       setInvalidFields(PROFESSIONAL_INFORMATION, "activity", "activity");
  //       return false;
  //     }
  //   }
  // };

  // const trueOrFalseFieldValidation = majorSection => {
  //   const keys = Object.keys(objectToCheck);
  //   const hasToValidateFields = keys.some(
  //     key =>
  //       typeof objectToCheck[key] === "boolean" && objectToCheck[key] === true
  //   );

  //   let checkableObject = {};
  //   keys.forEach(
  //     key =>
  //       typeof objectToCheck[key] !== "boolean" &&
  //       (checkableObject[key] = objectToCheck[key])
  //   );

  //   return hasToValidateFields
  //     ? defaultFieldValidation(checkableObject, majorSection)
  //     : true;
  // };

  const validateInvestments = () => {
    const collectionToValidate = [
      checkForSectionFillCompletion(
        objectToCheck["estimatedEquity"],
        "estimatedEquity"
      ),
      checkForSectionFillCompletion(
        objectToCheck["liquidAssets"],
        "liquidAssets"
      ),
      checkForSectionFillCompletion(
        objectToCheck["fixedAssets"],
        "fixedAssets"
      ),
      checkForSectionFillCompletion(
        objectToCheck["estimatedAnnualIncome"],
        "estimatedAnnualIncome"
      )
    ];

    return collectionToValidate.every(item => item);
  };

  const validateContacts = () => {
    const { addresses, telephones, emails } = objectToCheck;
    const homeAddressToValidate = addresses.find(item => item.type === "home");

    const commercialAddress = addresses.find(
      item => item.type === "commercial"
    );

    let commercialAddressToValidate;
    const keys = Object.keys(commercialAddress);
    if (
      keys.some(
        key =>
          key !== "type" &&
          key !== "district" &&
          key !== "state" &&
          key !== "complement" &&
          commercialAddress[key].length > 0
      )
    ) {
      commercialAddressToValidate = commercialAddress;
    }

    const telephoneToValidate = telephones.find(
      item => item.type === "cellphone"
    );
    const emailToValidate = emails.find(item => item.type === "personal");
    const commercialEmail = emails.find(item => item.type === "commercial");

    let commerciaEmailToValidate;
    commercialEmail.address.length > 0 &&
      !emailRegex.test(commercialEmail.address) &&
      (commerciaEmailToValidate = { ...commercialEmail });

    const modeledEmais = { ...emailToValidate };

    modeledEmais.email = modeledEmais.address;
    commerciaEmailToValidate &&
      (commerciaEmailToValidate.email = commerciaEmailToValidate.address);
    delete modeledEmais.address;
    commerciaEmailToValidate && delete commerciaEmailToValidate.address;

    const modeledTelephones = {
      type: "cellphone",
      phoneNumber: `${telephoneToValidate.ddd}${telephoneToValidate.number}`
    };

    const validationObject = {
      addresses: homeAddressToValidate,
      telephones: modeledTelephones,
      emails: modeledEmais
    };

    commercialAddressToValidate &&
      (validationObject.commercialAddress = commercialAddressToValidate);

    commerciaEmailToValidate &&
      (validationObject.commercialEmail = commerciaEmailToValidate);

    return defaultFieldValidation(validationObject, majorSection);
  };

  const validatePersonDetails = () => {
    const { maritalStatus } = objectToCheck;

    if (maritalStatus === "married" || maritalStatus === "stableunion") {
      return defaultFieldValidation(objectToCheck, majorSection);
    }
    const hasStatus = maritalStatus.length > 0;

    if (!hasStatus)
      setInvalidFields(majorSection, "maritalStatus", "marital_status");

    return hasStatus;
  };

  // const validateTaxResidences = () => {
  //   objectToCheck = objectToCheck.filter(
  //     item =>
  //       item.country.toLowerCase() !== "brasil" &&
  //       item.country.toLowerCase() !== "brazil"
  //   );

  //   return objectToCheck.length
  //     ? defaultFieldValidation(objectToCheck, majorSection)
  //     : true;
  // };

  // const validateAttourneys = () => {
  //   if (model[REPRESENTATION_AUTHORIZATION]) {
  //     const hasLength = objectToCheck.length;

  //     if (!hasLength) {
  //       return defaultFieldValidation(
  //         [{ name: null, cpf: null }],
  //         majorSection
  //       );
  //     }

  //     return hasLength && defaultFieldValidation(objectToCheck, majorSection);
  //   }
  //   return true;
  // };

  //switch check type accordingly with specific forms
  // IB-851 - TODO - Return validations when the removed fields are returned to the API
  switch (majorSection) {
    case PERSONAL_REGISTRATION_DETAILS:
      return validatePersonDetails();
    case DOCUMENTS:
      return validateDocuments();
    case FATCA_INFORMATION:
      //return validateFatca();
      return true;
    case INVESTMENT_DETAILS:
      return validateInvestments();
    case PURPOSE_WITH_THE_INSTITUTION:
      // return validateCheckField();
      return true;
    case PROFESSIONAL_INFORMATION:
      //return validateProfession();
      return true;
    case RELATED_PERSON_INFORMATION:
    case POLITICALLY_EXPOSED_PERSON:
      // return trueOrFalseFieldValidation(majorSection);
      return true;
    case CONTACTS:
      return validateContacts();
    case TAX_RESIDENCES:
      // return validateTaxResidences();
      return true;
    case ATTORNEYS_IN_FACT:
      // return validateAttourneys();
      return true;
    default:
      return defaultFieldValidation(objectToCheck, majorSection);
  }
};

export const validateAllRegistration = model => {
  temporaryInvalidFields = {};
  let validationObject = {};
  registrationDataFormUsedSections.forEach(item => {
    validationObject[item] = checkForSectionFillCompletion(
      model[item],
      item,
      model
    );
  });

  return {
    isValidatedBySection: validationObject,
    invalidsBySection: deepClone(temporaryInvalidFields)
  };
};

export default checkForSectionFillCompletion;
