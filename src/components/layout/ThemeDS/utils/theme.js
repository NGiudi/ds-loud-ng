/**
 * @param {object} name name of DS theme.
 * @return {object} name of color theme.
 */
export const getColorsTheme = (name) => {
  switch (name) {
    case "loudLight":
    default:
      return "whiteTheme";
  }
};
