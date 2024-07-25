import React from "react";
import PropTypes from "prop-types";

import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";

import { getTheme } from "./utils/theme";

const DEFAULT_PROPS = {
  children: null,
  name: "loudLight",
  theme: null,
};

export const ThemeDS = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <ThemeProvider theme={attrs.theme || getTheme(attrs.name)}>
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
  name: PropTypes.oneOf(["loudLight"]),
  theme: PropTypes.object,
};
