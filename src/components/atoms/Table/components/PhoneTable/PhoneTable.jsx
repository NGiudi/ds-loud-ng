import React from "react";
import { PropTypes } from "prop-types";

import { Text } from "../../..";

import { Styles } from "./PhoneTable.styles";

const DEFAULT_PROPS = {
  columns: [],
  data: [],
  margin: "a-0",
  mobileColumns: [],
  name: "",
  onClick: () => {},
};

export const PhoneTable = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
  };

  const list =
    attrs.mobileColumns.length > 0
      ? attrs.mobileColumns
      : attrs.columns.length
        ? attrs.columns
        : [];

  return (
    <Styles.Wrapper $margin={attrs.margin}>
      {attrs.data.map((row, idx) => (
        <Styles.Row
          key={`table-${attrs.name}-row-${idx}`}
          onClick={() => attrs.onClick && attrs.onClick(row)}
        >
          {list.map((column, idx) => (
            <Styles.Column
              key={`table-${attrs.name}-column-${idx}`}
              mobile={column.mobile}
            >
              <Text type="bodySemibold">{column.label}</Text>

              {column.content(row)}
            </Styles.Column>
          ))}
        </Styles.Row>
      ))}
    </Styles.Wrapper>
  );
};

PhoneTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  margin: PropTypes.string,
  mobileColumns: PropTypes.array,
  name: PropTypes.string,
  onClick: PropTypes.func,
};
