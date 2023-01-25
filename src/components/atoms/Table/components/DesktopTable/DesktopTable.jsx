import React from "react";
import PropTypes from "prop-types";

/* components */
import { Text } from "../../..";

/* styles */
import { Styles } from "./DesktopTable.styles";

/* utils */
import { getWrapperOptionsFilter } from "../../utils/propsFilter";

export const DesktopTable = (props) => {
  const { columns, data, desktopColumns, onClick } = props;

  const wrapperOptions = getWrapperOptionsFilter(props);

  const list =
    desktopColumns.length > 0 ? desktopColumns : columns.length ? columns : [];

  return (
    <Styles.Wrapper {...wrapperOptions}>
      <Styles.Row isHeader>
        {list.map((column, idx) => (
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
          {list.map((column, idx) => (
            <Styles.Column key={`column-title-${idx}`} width={column.width}>
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
  onClick: PropTypes.func,
};

DesktopTable.defaultProps = {
  columns: [],
  data: [],
  desktopColumns: [],
  margin: "a-0",
  onClick: null,
};
