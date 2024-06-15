import React from "react";
import PropTypes from "prop-types";

import { Text } from "../../..";

import { Styles } from "./DesktopTable.styles";

export const DesktopTable = (props) => {
  const { columns, data, desktopColumns, margin, name, onClick } = props;

  const list =
    desktopColumns.length > 0 ? desktopColumns : columns.length ? columns : [];

  return (
    <Styles.Wrapper $margin={margin}>
      <Styles.Row $isHeader>
        {list.map((column, idxC) => (
          <Styles.Column
            key={`table-${name}-row-title-column-${idxC}`}
            width={column.width}
          >
            <Text type="bodySemibold">{column.label}</Text>
          </Styles.Column>
        ))}
      </Styles.Row>

      {data.map((row, idxR) => (
        <Styles.Row
          key={`table-row-${idxR}`}
          onClick={() => onClick && onClick(row)}
        >
          {list.map((column, idxC) => (
            <Styles.Column
              key={`table-${name}-row-${idxR}-column-${idxC}`}
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

DesktopTable.defaultProps = {
  columns: [],
  data: [],
  desktopColumns: [],
  margin: "a-0",
  name: "",
  onClick: () => {},
};
