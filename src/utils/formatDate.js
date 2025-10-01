import moment from "moment";
import {
  getDateFieldPlaceholderByLocale,
  getLanguage,
  getShortDateByLocale,
  isPtBR
} from "./i18n";
import { EN_US, PT_BR } from "./constants";

const UTC = "UTC";

export default function formatDate(date, dateMask = "YYYY-MM-DD") {
  if (date) {
    return moment(date, dateMask).format(getDateFieldPlaceholderByLocale());
  }
  return "";
}

export function formatDateTime(date) {
  if (date) {
    const newDate = new Date(date);
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    };

    let formattedDate = newDate.toLocaleString(
      isPtBR() ? PT_BR : EN_US,
      options
    );
    const [datePart, timePart] = formattedDate.split(", ");
    const [time, period] = timePart.split(" ");
    return `${datePart} - ${time} ${period}`;
  }
  return "";
}

export function getDateStringFromEpoch(epoch) {
  if (epoch) {
    return moment(epoch)
      .utcOffset(-3)
      .format(getDateFieldPlaceholderByLocale());
  }
  return "";
}

export function getShortDateStringFromEpoch(epoch) {
  if (epoch) {
    const selectedLocale = getLanguage();
    moment.locale(selectedLocale);
    const result = moment(epoch).format(getShortDateByLocale());
    return selectedLocale === "pt-BR"
      ? result.slice(0, -3).concat(
          result
            .slice(-3)
            .charAt(0)
            .toUpperCase(),
          result.slice(-2)
        )
      : result;
  }
  return "";
}

export function formatDateToLocale(date) {
  if (date) {
    return new Date(date).toLocaleDateString(
      getLanguage() ? getLanguage() : "pt-BR",
      {
        timeZone: UTC
      }
    );
  }
  return "";
}

export function formatHour(date) {
  if (date) {
    const splittedDate = date.split("T")[1];

    if (splittedDate) {
      const splittedFullHour = splittedDate.split(":");
      return `${splittedFullHour[0]}:${splittedFullHour[1]}`;
    }

    return "";
  }
  return "";
}

export function formatToQuery(date) {
  if (date) {
    return date.toISOString().split("T")[0];
  }
  return "";
}

export function formatDateWithHour(fullDate) {
  if (fullDate) {
    const date = new Date(fullDate).toLocaleDateString(
      getLanguage() ? getLanguage() : "pt-BR",
      {
        timeZone: UTC
      }
    );
    const hour = formatHour(fullDate);

    return `${date}\u00A0\u00A0\u00A0\u00A0|\u00A0\u00A0\u00A0\u00A0${hour}`;
  }
  return "";
}

export function getMonthShortName(date) {
  if (date) {
    return new Date(date).toLocaleString(
      getLanguage() ? getLanguage() : "pt-BR",
      {
        month: "short"
      }
    );
  }

  return "";
}

export function formatDateForDayPicker(date) {
  if (date) {
    return new Date(date).toLocaleDateString(
      getLanguage() ? getLanguage() : "pt-BR",
      { timeZone: UTC }
    );
  }

  return "";
}

export function unFormatDate(value) {
  value = value.toString().replace(/[^0-9]/g, "");
  return value;
}

export function modelBrazilianTime(formattedHour) {
  if (formattedHour.includes(":00")) {
    formattedHour = formattedHour.slice(0, -3).concat("h");
  } else {
    formattedHour = formattedHour.replace(/:/g, "h");
  }

  return formattedHour;
}
