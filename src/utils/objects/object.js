/**
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
