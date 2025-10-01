export default function resetObjectFields(props, objectToCheck) {
  // props => array of values to be reset
  let keys = Object.keys(objectToCheck);

  keys = keys.filter(item => props.includes(item));

  const resetObjectOrArrayValuestoEmptyString = info => {
    if (Array.isArray(info)) return;
    if (info === null || info === undefined) return;
    else if (typeof info === "object") {
      Object.keys(info).forEach(key => {
        if (typeof info[key] === "object" || Array.isArray(info[key])) {
          resetObjectOrArrayValuestoEmptyString(info[key]);
        } else if (typeof info[key] === "string") {
          info[key] = "";
        } else if (typeof info[key] === "boolean") {
          info[key] = false;
        } else if (typeof info[key] === "number") {
          info[key] = 0;
        } else return;
      });
    }
    return info;
  };

  keys.forEach(item => {
    if (objectToCheck[item] === null || objectToCheck[item] === undefined)
      return;
    if (
      typeof objectToCheck[item] === "object" ||
      Array.isArray(objectToCheck[item])
    ) {
      resetObjectOrArrayValuestoEmptyString(objectToCheck[item]);
    } else if (typeof objectToCheck[item] === "string") {
      objectToCheck[item] = "";
    } else if (typeof objectToCheck[item] === "boolean") {
      objectToCheck[item] = false;
    } else if (typeof objectToCheck[item] === "number") {
      objectToCheck[item] = 0;
    } else return;
  });

  return objectToCheck;
}
