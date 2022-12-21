import { loud } from "../../../../themes/loud";

import colors from "../../../../themes/loud/colors";

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
  switch (name) {
    case "loudLight":
    default:
      const colorTheme = getColorsTheme(name);
      const t = {
        colors: colors[colorTheme],
        name,
        ...loud,
      };
      console.log(t);
      return t;
  }
};
