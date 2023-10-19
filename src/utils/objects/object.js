/**
 * Takes an object and an array, and returns a new object that contains only the
 * properties whose names are present in the array.
 *
 * @param {object} obj original object.
 * @param {array} fields properties to get.
 * @return {object} new object with filtered fields.
 */
export const pick = (obj, fields) => {
  const newObj = {};

  /* cause an error if received null value */
  if (!fields) fields = [];

  for (const property in obj) {
    if (fields.includes(property)) {
      newObj[property] = obj[property];
    }
  }

  return newObj;
};

/**
 * Takes an object and an array, and returns a new object that contains all properties
 * from the original object except for those whose names are included in the array.
 *
 * @param {object} obj original object.
 * @param {array} fields properties to get out.
 * @return {object} new object with filtered fields.
 */
export const omit = (obj, fields) => {
  const newObj = {};

  /* cause an error if received null value */
  if (!fields) fields = [];

  for (const property in obj) {
    if (!fields.includes(property)) {
      newObj[property] = obj[property];
    }
  }

  return newObj;
};
