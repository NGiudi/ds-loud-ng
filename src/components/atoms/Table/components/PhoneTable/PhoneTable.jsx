import React from "react";
import { PropTypes } from "prop-types";

/* components */
import { Text } from "../../..";

/* styles */
import { Styles } from "./PhoneTable.styles";

/* utils */
import { getWrapperOptionsFilter } from "../../utils/propsFilter";

export const PhoneTable = (props) => {
  const { columns, data, mobileColumns, onClick } = props;

  const wrapperOptions = getWrapperOptionsFilter(props);

  const list =
    mobileColumns.length > 0 ? mobileColumns : columns.length ? columns : [];

  return (
    <Styles.Wrapper {...wrapperOptions}>
      {data.map((row, idx) => (
        <Styles.Row
          idx={idx}
          key={`table-row-${idx}`}
          onClick={() => onClick && onClick(row)}
        >
          {list.map((column, idx) => (
            <Styles.Column key={`column-title-${idx}`} mobile={column.mobile}>
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
  onClick: PropTypes.func,
};

PhoneTable.defaultProps = {
  columns: [],
  data: [],
  margin: "a-0",
  mobileColumns: [],
  onClick: null,
};
