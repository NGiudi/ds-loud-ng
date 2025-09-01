import React from "react";
import PropTypes from "prop-types";

import { ThemeProvider } from "styled-components";
import { Toaster } from "react-hot-toast";

import { WHITE_THEME } from "../../../assets/styles/white_theme.consts";
import { BREAKPOINTS, SHADOWS } from "../../../assets/styles/common.consts";

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
      <link href="https://fonts.googleapis.com" rel="preconnect" />

      <link href="https://fonts.gstatic.com" rel="preconnect" />

      <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+3&display=swap"
        rel="stylesheet"
      />

      {attrs.children}

      <Toaster position="bottom-right" />
    </ThemeProvider>
  );
};

ThemeDS.propTypes = {
  children: PropTypes.node,
};