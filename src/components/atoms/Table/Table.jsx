import React from "react";
import PropTypes from "prop-types";

import { useWindowSize } from "../../../hooks/useWindowSize";
import { useTheme } from "styled-components";

import { DesktopTable, PhoneTable } from "./components";

export const Table = (props) => {
  const size = useWindowSize();
  const theme = useTheme();

  if (size.width > theme.breakpoints.mobile) {
    return (
      <DesktopTable
        columns={props.columns}
        data={props.data}
        desktopColumns={props.desktopColumns}
        margin={props.margin}
        name={props.name}
        onClick={props.onClick}
      />
    );
  }

  return (
    <PhoneTable
      columns={props.columns}
      data={props.data}
      margin={props.margin}
      mobileColumns={props.mobileColumns}
      name={props.name}
      onClick={props.onClick}
    />
  );
};

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  desktopColumns: PropTypes.array,
  margin: PropTypes.string,
  mobileColumns: PropTypes.array,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

Table.defaultProps = {
  columns: [],
  data: [],
  desktopColumns: [],
  margin: "a-0",
  mobileColumns: [],
  name: "",
  onClick: () => {},
};
