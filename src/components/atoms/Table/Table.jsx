import React from "react";
import PropTypes from "prop-types";

/*  hooks */
import { useWindowSize } from "../../../hooks/useWindowSize";
import { useTheme } from "styled-components";

/* components */
import { DesktopTable, PhoneTable } from "./components";

export const Table = (props) => {
  const size = useWindowSize();
  const theme = useTheme();

  if (size.width > theme.breakpoints.mobile) {
    return <DesktopTable {...props} />;
  }

  return <PhoneTable {...props} />;
};

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  desktopColumns: PropTypes.array,
  margin: PropTypes.string,
  mobileColumns: PropTypes.array,
  onClick: PropTypes.func,
};

Table.defaultProps = {
  columns: [],
  data: [],
  desktopColumns: [],
  margin: "a-0",
  mobileColumns: [],
  onClick: null,
};
