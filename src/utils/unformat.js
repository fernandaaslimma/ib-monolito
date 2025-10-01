export function unformatDocuments(value) {
  value = value.toString();

  value = value.replace(/-/g, "");
  value = value.replace(/\./g, "");
  value = value.replace(/\//g, "");

  return value;
}
