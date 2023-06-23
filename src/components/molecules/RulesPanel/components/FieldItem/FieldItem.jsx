import React from "react";
import PropTypes from "prop-types";

/* import components */
import { Input, Select, SelectOption } from "../../../../../";

export const FieldItem = (props) => {
  const { field } = props;

  switch (field.type) {
    case "select":
      const { label, name, options, props } = field;

      return (
        <Select
          label={label}
          margin="b-24"
          name={name}
          options={options}
          {...props}
        />
      );
    default:
      return <Input margin="b-4" {...field} />;
  }
};

FieldItem.propTypes = {
  field: PropTypes.object,
};

FieldItem.defaultProps = {
  field: null,
};
