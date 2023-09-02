import React from "react";
import { PropTypes } from "prop-types";

import { Text } from "../../..";

import { Styles } from "./PhoneTable.styles";

export const PhoneTable = (props) => {
  const { columns, data, mobileColumns, margin, name, onClick } = props;

  const list =
    mobileColumns.length > 0 ? mobileColumns : columns.length ? columns : [];

  return (
    <Styles.Wrapper $margin={margin}>
      {data.map((row, idx) => (
        <Styles.Row
          key={`table-${name}-row-${idx}`}
          onClick={() => onClick && onClick(row)}
        >
          {list.map((column, idx) => (
            <Styles.Column
              key={`table-${name}-column-${idx}`}
              mobile={column.mobile}
            >
              <Text weight="semibold">{column.label}</Text>

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

PhoneTable.defaultProps = {
  columns: [],
  data: [],
  margin: "a-0",
  mobileColumns: [],
  name: "",
  onClick: null,
};
