export const checkCollectionEquality = (collection, base) => {
  if (collection.length !== base.length) {
    return false;
  }

  return collection.every((item, index) => {
    const keys = Object.keys(item);
    return keys.every(key => item[key] === base[index][key]);
  });
};

export const checkObjectEquality = (object, base) => {
  if (object) {
    const keys = Object.keys(object);
    return keys.every(key => object[key] === base[key]);
  }
  return false;
};
