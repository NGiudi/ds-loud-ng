import React from "react";
import PropTypes from "prop-types";

/* import components */
import { Input, Select } from "../../../../../";

export const FieldItem = (props) => {
  const { field, margin } = props;
  const { label, name, options, type } = field;

  switch (type) {
    case "select":
      return (
        <Select label={label} margin={margin} name={name}>
          {options &&
            options.map((opc) => (
              <option key={`rulesPanel_${name}_${opc}`} value={opc}>
                {opc}
              </option>
            ))}
        </Select>
      );
    default:
      return <Input margin={margin} {...field} />;
  }
};

FieldItem.propTypes = {
  field: PropTypes.object,
  margin: PropTypes.string,
};

FieldItem.defaultProps = {
  field: null,
  margin: "a-0",
};
