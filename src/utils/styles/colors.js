/**
 * @param {object} theme theme used in this moment.
 * @param {string} colorString color coded.
 * @return {string} decoded color.
 */
export const getColor = (theme, colorString) => {
  if (colorString.includes("_")) {
    const colorArray = colorString.split("_");

    const color = colorArray[0];
    const tone = `_${colorArray[1]}`;

    return theme.colors[color][tone];
  }

  return colorString;
};
