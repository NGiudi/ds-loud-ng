import React from "react";
import PropTypes from "prop-types";

import { useWindowSize } from "../../../hooks/useWindowSize";
import { useTheme } from "styled-components";

import { DesktopTable, PhoneTable } from "./components";

const DEFAULT_PROPS = {
  columns: [],
  data: [],
  desktopColumns: [],
  margin: "a-0",
  mobileColumns: [],
  name: "",
  onClick: () => {},
};

export const Table = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
  };

  const size = useWindowSize();
  const theme = useTheme();

  if (size.width > theme.breakpoints.mobile) {
    return (
      <DesktopTable
        columns={attrs.columns}
        data={attrs.data}
        desktopColumns={attrs.desktopColumns}
        margin={attrs.margin}
        name={attrs.name}
        onClick={attrs.onClick}
      />
    );
  }

  return (
    <PhoneTable
      columns={attrs.columns}
      data={attrs.data}
      margin={attrs.margin}
      mobileColumns={attrs.mobileColumns}
      name={attrs.name}
      onClick={attrs.onClick}
    />
  );
};

Table.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array.isRequired,
  desktopColumns: PropTypes.array,
  margin: PropTypes.string,
  mobileColumns: PropTypes.array,
  name: PropTypes.string,
  onClick: PropTypes.func,
};