import { loud } from "../../../../themes/loud";

import { colors } from "../../../../themes/loud/colors";

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

/**
 * @param {object} name name of DS theme.
 * @return {object} DS theme.
 */
export const getTheme = (name) => {
  const colorTheme = getColorsTheme(name);

  switch (name) {
    case "loudLight":
    default:
      return {
        colors: colors[colorTheme],
        name,
        ...loud,
      };
  }
};
