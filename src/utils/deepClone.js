export default function deepClone(inObject) {
  let outObject, value, key;

  if (typeof inObject !== "object" || inObject === null) {
    return inObject;
  }

  outObject = Array.isArray(inObject) ? [] : {};

  for (key in inObject) {
    value = inObject[key];

    outObject[key] = deepClone(value);
  }

  return outObject;
}
