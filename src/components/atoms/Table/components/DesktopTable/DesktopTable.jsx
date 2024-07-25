import React from "react";
import PropTypes from "prop-types";

import { Text } from "../../..";

import { Styles } from "./DesktopTable.styles";

const DEFAULT_PROPS = {
  columns: [],
  data: [],
  desktopColumns: [],
  margin: "a-0",
  name: "",
  onClick: () => {},
};

export const DesktopTable = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
  };

  const list =
    attrs.desktopColumns.length > 0
      ? attrs.desktopColumns
      : attrs.columns.length
        ? attrs.columns
        : [];

  return (
    <Styles.Wrapper $margin={attrs.margin}>
      <Styles.Row $isHeader>
        {list.map((column, idxC) => (
          <Styles.Column
            key={`table-${attrs.name}-row-title-column-${idxC}`}
            width={column.width}
          >
            <Text type="bodySemibold">{column.label}</Text>
          </Styles.Column>
        ))}
      </Styles.Row>

      {attrs.data.map((row, idxR) => (
        <Styles.Row
          key={`table-row-${idxR}`}
          onClick={() => attrs.onClick && attrs.onClick(row)}
        >
          {list.map((column, idxC) => (
            <Styles.Column
              key={`table-${attrs.name}-row-${idxR}-column-${idxC}`}
              width={column.width}
            >
              {column.content(row)}
            </Styles.Column>
          ))}
        </Styles.Row>
      ))}
    </Styles.Wrapper>
  );
};

DesktopTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array.isRequired,
  desktopColumns: PropTypes.array,
  margin: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
};
