import React from "react";
import PropTypes from "prop-types";

import { ThemeProvider } from "styled-components";

import { getTheme } from "./utils/theme";

export const ThemeDS = (props) => {
  const { children, name, theme } = props;

  if (theme) {
    return (
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={getTheme(name)}>
      {children}
    </ThemeProvider>
  );
};

ThemeDS.propTypes = {
  children: PropTypes.node,
  name: PropTypes.oneOf(["loudLight"]),
  theme: PropTypes.object,
};

ThemeDS.defaultProps = {
  children: null,
  name: "loudLight",
  theme: null,
};
