import React from "react";
import PropTypes from "prop-types";

import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";

import { WHITE_THEME } from "../../../assets/styles/colors/whiteTheme";
import { BREAKPOINTS, SHADOWS } from "../../../assets/styles/common";

const DEFAULT_PROPS = {
  children: null,
};

export const ThemeDS = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
  };

  const THEME = {
    breakpoints: BREAKPOINTS,
    colors: WHITE_THEME,
    name: "loudLight",
    shadows: SHADOWS,
  };

  return (
    <ThemeProvider theme={THEME}>
      <Helmet>
        <link href="https://fonts.googleapis.com" rel="preconnect" />

        <link crossOrigin href="https://fonts.gstatic.com" rel="preconnect" />

        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+3&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {attrs.children}
    </ThemeProvider>
  );
};

ThemeDS.propTypes = {
  children: PropTypes.node,
};
