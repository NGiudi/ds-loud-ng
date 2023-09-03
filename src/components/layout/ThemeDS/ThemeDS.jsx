import React from "react";
import PropTypes from "prop-types";

import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";

import { getTheme } from "./utils/theme";

export const ThemeDS = (props) => {
  const { children, name, theme } = props;

  return (
    <ThemeProvider theme={theme || getTheme(name)}>
      <Helmet>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+3&display=swap"
          rel="stylesheet"
        />
      </Helmet>

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
