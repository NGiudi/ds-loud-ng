import React from "react";
import PropTypes from "prop-types";

/* components */
import { Text } from "../../../";

/* styles */
import { Styles } from "./Table.styles";

/* utils */
import { getWrapperOptionsFilter } from "./utils/propsFilter";

export const Table = (props) => {
  const { columns, data, onClick } = props;

  const wrapperOptions = getWrapperOptionsFilter(props);

  return (
    <Styles.Wrapper {...wrapperOptions}>
      <Styles.Row isHeader>
        {columns.map((column, idx) => (
          <Styles.Column key={`column-title-${idx}`} width={column.width}>
            <Text weight="semibold">{column.label}</Text>
          </Styles.Column>
        ))}
      </Styles.Row>

      {data.map((row, idx) => (
        <Styles.Row
          idx={idx}
          key={`table-row-${idx}`}
          onClick={() => onClick && onClick(row)}
        >
          {columns.map((column, idx) => (
            <Styles.Column key={`column-title-${idx}`} width={column.width}>
              {column.content(row)}
            </Styles.Column>
          ))}
        </Styles.Row>
      ))}
    </Styles.Wrapper>
  );
};

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  margin: PropTypes.string,
  onClick: PropTypes.func,
};

Table.defaultProps = {
  columns: [],
  data: [],
  margin: "a-0",
  onClick: null,
};
