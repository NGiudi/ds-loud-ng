import React from "react";
import PropTypes from "prop-types";

import { ThemeProvider } from "styled-components";

import { loudLight } from "../../../themes/loud";

export const ThemeDS = (props) => {
  const { children, theme } = props;

  const getTheme = (themeName) => {
    let theme;

    switch (themeName) {
      case "loudLight":
      default:
        theme = loudLight;
        break;
    }

    return theme;
  };

  return <ThemeProvider theme={getTheme(theme)}>{children}</ThemeProvider>;
};

ThemeDS.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.oneOf(["loudLight"]),
};

ThemeDS.defaultProps = {
  children: null,
  theme: "loudLight",
};
