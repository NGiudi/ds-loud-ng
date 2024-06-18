/**
 * Converts an array of file types into a flat array of MIME types.
 *
 * @param {string[]} array - Array of file types ("csv", "pdf", "image").
 * @returns {string[]} Array of corresponding MIME types.
 */
const listOfFileTypes = (array) => {
  return array.map((type) => {
    switch(type) {
      case "csv":
        return "text/csv"
      case "pdf":
        return "application/pdf";
      case "image":
        return ["image/jpeg", "image/png", "image/gif", "image/bmp", "image/svg+xml", "image/webp", "image/tiff", "image/x-icon"];
      default:
        return "";
    }
  }).flat();
};

/**
 * Converts bytes to kilobytes or megabytes as appropriate.
 * If the value is greater than or equal to 1024kb, it converts to megabytes.
 *
 * @param {number} value - The value in bytes to be converted.
 * @returns {string} The converted value in kilobytes (KB) or megabytes (MB) with two decimal places.
 */
export const convertBytes = (value) => {
  const kilobytes = value / 1024;
  const megabytes = kilobytes / 1024;

  if (kilobytes >= 1024) {
      return megabytes.toFixed(2) + ' MB';
  } else {
      return kilobytes.toFixed(2) + ' KB';
  }
}

/**
 * Converts an array of file types into a comma-separated string of MIME types.
 *
 * @param {string[]} array - Array of file types ("csv", "pdf", "image").
 * @returns {string} Comma-separated string of corresponding MIME types.
 */
export const fileTypesString = (array) => {
  return listOfFileTypes(array).join();
};

/**
 * Validates if a file's MIME type matches any of the specified valid types.
 *
 * @param {File} file - File object to validate.
 * @param {string[]} validTypes - Array of valid MIME types to check against.
 * @returns {boolean} True if the file's MIME type matches any of the valid types, false otherwise.
 */
export const validateTypeFile = (file, validTypes) => {
  validTypes = listOfFileTypes(validTypes);
  
  return validTypes.length === 0 || validTypes.includes(file.type);
}

/**
 * Validates the size of a file against a maximum allowed size.
 * 
 * @param {Object} file - The file object to be validated.
 * @param {number} maxSize - The maximum allowed size for the file in bytes. A value of 0 indicates no size limit.
 * @returns {boolean} - Returns true if the file size is within the allowed limit or if maxSize is 0, otherwise false.
 */
export const validateSizeFile = (file, maxSize) => {
  return maxSize === 0 || file.size <= maxSize;
}