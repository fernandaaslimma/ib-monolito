// import moment from "moment";
import * as REGISTRATION_API from "../../services/registration";
import formatNumber from "../../utils/formatNumber";
import { translate } from "../../utils/i18n";
import deepClone from "../../utils/deepClone";
import checkFormDataHoles, {
  minimumAcceptableForm
} from "../../utils/checkFormDataHoles";
import { isValueNullOrUndefined } from "../../utils/validations/input";

const setMinimumForm = section =>
  deepClone(minimumAcceptableForm.contacts[section]);

const checkAndSetPhones = telephones => {
  const { contacts } = minimumAcceptableForm;
  const getType = phone => phone.type;
  const types = contacts.telephones.map(getType);

  const filteredValidFields = telephones.filter(item =>
    types.includes(item.type)
  );

  if (filteredValidFields.length === 0) {
    return setMinimumForm("telephones");
  } else if (filteredValidFields.length >= 1) {
    const apiTypes = filteredValidFields.map(getType);
    const diffTypes = types.filter(type => !apiTypes.includes(type));

    const diff = diffTypes.map(type =>
      contacts.telephones.find(phone => phone.type === type)
    );

    const telephoneCompleted = [...filteredValidFields, ...diff];
    telephones = deepClone(telephoneCompleted);
    return telephones;
  }
};

const checkAndSetAddresses = addresses => {
  const filteredValidFields = addresses.filter(
    item => item.type === "home" || item.type === "commercial"
  );

  if (filteredValidFields.length === 0) {
    return setMinimumForm("addresses");
  } else if (filteredValidFields.length === 1) {
    const address = filteredValidFields[0];
    const addressCompleted = [
      address,
      {
        ...minimumAcceptableForm.contacts.addresses[0],
        type: address.type === "commercial" ? "home" : "commercial"
      }
    ];

    addresses = deepClone(addressCompleted);
    return addresses;
  } else {
    return filteredValidFields;
  }
};

const checkAndSetEmails = emails => {
  const filteredValidFields = emails.filter(
    item => item.type === "personal" || item.type === "commercial"
  );

  if (filteredValidFields.length === 0) {
    return setMinimumForm("emails");
  } else if (filteredValidFields.length === 1) {
    const email = filteredValidFields[0];
    const emailsCompleted = [
      email,
      {
        ...minimumAcceptableForm.contacts.emails[0],
        type: email.type === "commercial" ? "personal" : "commercial"
      }
    ];

    emails = deepClone(emailsCompleted);

    return emails;
  } else {
    return filteredValidFields;
  }
};

const removeDuplicates = collection =>
  collection.reduce((acc, current) => {
    const alreadyHave = acc.find(item => item.type === current.type);
    if (!alreadyHave) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

export default () => ({
  getRegistrationFormData: async () => {
    try {
      const raw = await REGISTRATION_API.getRegistrationFormData();
      let registrationFormData = await raw.json();

      // protection case a displayable form comes as null
      registrationFormData.content = checkFormDataHoles(
        registrationFormData.content
      );

      const modelRangeOptions = list => {
        list = list.map(item => {
          if (item.max === 0) {
            return {
              ...item,
              name: translate("ATUCAD_I_DO_NOT_HAVE"),
              value: item.id
            };
          } else if (item.max === null) {
            return {
              ...item,
              name: `${translate("ATUCAD_BIGGER_THAN")}${formatNumber(
                item.min,
                {
                  digits: 2
                }
              )}`,
              value: item.id
            };
          }
          return {
            ...item,
            name: `${formatNumber(item.min, {
              digits: 2
            })} - ${formatNumber(item.max, { digits: 2 })}`,
            value: item.id
          };
        });

        list.sort((current, prev) => {
          return current.min - prev.min;
        });

        return list;
      };

      const findRangeOptions = (prop, object) => {
        if (typeof object !== "object") return;

        const keys = Object.keys(object);
        keys.forEach(key =>
          object[key].hasOwnProperty(prop)
            ? (object[key][prop] = modelRangeOptions(object[key][prop]))
            : key === "liquidAssets" ||
              key === "fixedAssets" ||
              key === "estimatedAnnualIncome"
            ? findRangeOptions(prop, object[key])
            : null
        );

        return object;
      };

      findRangeOptions(
        "rangeOptions",
        registrationFormData.content.investmentDetails
      );

      const {
        contacts,
        personalRegistrationDetails
      } = registrationFormData.content;

      contacts.addresses = contacts.addresses
        ? checkAndSetAddresses(contacts.addresses)
        : setMinimumForm("addresses");
      contacts.telephones = contacts.telephones
        ? checkAndSetPhones(contacts.telephones)
        : setMinimumForm("telephones");
      contacts.emails = contacts.emails
        ? checkAndSetEmails(contacts.emails)
        : setMinimumForm("emails");

      contacts.telephones = contacts.telephones.map(index => ({
        ...index,
        fullTelephone: `${index.ddd}${index.number}`
      }));

      //remmove API response duplications
      contacts.emails = removeDuplicates(contacts.emails);
      contacts.telephones = removeDuplicates(contacts.telephones);
      contacts.addresses = removeDuplicates(contacts.addresses);

      isValueNullOrUndefined(personalRegistrationDetails.maritalStatus) &&
        (registrationFormData.content.personalRegistrationDetails.maritalStatus =
          "");

      return {
        registrationFormData
      };
    } catch (error) {
      return { error };
    }
  },

  postConfirmRegistrationFormData: async () => {
    try {
      const dataPersonalRegistrationConfirm = await REGISTRATION_API.postConfirmRegistrationFormData();
      const dataPersonalRegistrationConfirmSerialized = await dataPersonalRegistrationConfirm.json();

      return {
        dataPersonalRegistration:
          dataPersonalRegistrationConfirmSerialized.content
      };
    } catch (error) {
      return { error };
    }
  },

  putConfirmRegistrationFormData: async (store, isConfirmed) => {
    try {
      const body = {
        isConfirmed: isConfirmed,
        confirmationToken: store.dataPersonalRegistration.confirmationToken,
        message: {
          payload: store.mfaTokenParams.payload,
          messageAuthenticationCode: store.mfaTokenParams.key
        }
      };

      await REGISTRATION_API.putConfirmRegistrationFormData(body);
    } catch (error) {
      throw error;
    }
  },

  postUpdateRegistrationFormData: async (_, form) => {
    try {
      const body = deepClone(form);

      // Removes fullTelephone by creating a new array
      body.contacts.telephones = body.contacts.telephones.map(
        // eslint-disable-next-line no-unused-vars
        ({ fullTelephone, ...obj }) => obj
      );

      // body.attorneysInFact = body.attorneysInFact.map(item => ({
      //   ...item,
      //   startDate:
      //     item.startDate &&
      //     moment(item.startDate, getDateFieldPlaceholderByLocale()).valueOf(),
      //   endDate:
      //     item.endDate &&
      //     moment(item.endDate, getDateFieldPlaceholderByLocale()).valueOf()
      // }));

      const commercialAddress = body.contacts.addresses.find(
        item => item.type === "commercial"
      );

      const keys = Object.keys(commercialAddress);
      if (
        keys.some(
          key =>
            key !== "type" &&
            key !== "district" &&
            key !== "state" &&
            key !== "complement" &&
            commercialAddress[key].length === 0
        )
      ) {
        body.contacts.addresses = body.contacts.addresses.filter(
          item => item.type !== "commercial"
        );
      }

      body.contacts.emails = body.contacts.emails.filter(email => {
        const emailKeys = Object.keys(email);
        return emailKeys.every(key => email[key].length > 0);
      });

      body.contacts.telephones = body.contacts.telephones.filter(phone => {
        const phoneKeys = Object.keys(phone);
        return phoneKeys.every(key => phone[key].length > 0);
      });

      const dataPersonalRegistrationConfirm = await REGISTRATION_API.postUpdateRegistrationFormData(
        body
      );
      const dataPersonalRegistrationConfirmSerialized = await dataPersonalRegistrationConfirm.json();

      return {
        dataPersonalRegistration:
          dataPersonalRegistrationConfirmSerialized.content
      };
    } catch (error) {
      return { error };
    }
  },

  putUpdateRegistrationFormData: async store => {
    try {
      const body = {
        updateToken: store.dataPersonalRegistration.updateToken,
        message: {
          payload: store.mfaTokenParams.payload,
          messageAuthenticationCode: store.mfaTokenParams.key
        }
      };

      await REGISTRATION_API.putUpdateRegistrationFormData(body);
    } catch (error) {
      throw error;
    }
  },

  getCountries: async () => {
    try {
      const rawCountries = await REGISTRATION_API.getCountries();
      let responseCountries = await rawCountries.json();

      responseCountries = responseCountries.filter(
        el =>
          el.name.toLowerCase() != "brasil" && el.name.toLowerCase() != "brazil"
      );

      responseCountries = responseCountries.map(country => ({
        label: country.name,
        value: country.name
          .split(" ")
          .join("_")
          .toLowerCase(),
        code: country.code
      }));

      return {
        countries: responseCountries
      };
    } catch (error) {
      return { error };
    }
  }
});
