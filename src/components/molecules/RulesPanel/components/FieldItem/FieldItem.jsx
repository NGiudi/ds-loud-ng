import React from "react";
import PropTypes from "prop-types";

/* import components */
import { Input } from "../../../../../";

const FieldItem = (props) => {
  const { field, margin } = props;
  const { name, options, type } = field;

  switch (type) {
    case "select":
      //TODO: cambiar este select por el componente select cuando lo haga.
      return (
        <select>
          {options &&
            options.map((opc) => (
              <option key={`rulesPanel_${name}_${opc}`} value={opc}>
                {opc}
              </option>
            ))}
        </select>
      );
    default:
      return <Input margin={margin} {...field} />;
  }
};

FieldItem.propTypes = {
  field: PropTypes.array,
  margin: PropTypes.string,
};

FieldItem.propTypes = {
  field: [],
  margin: "a-0",
};

export default FieldItem;
