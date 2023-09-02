import React from "react";
import PropTypes from "prop-types";

/* import components */
import { Input, Select } from "../../../../../";

export const FieldItem = (props) => {
  const { field } = props;

  switch (field.type) {
    case "select":
      return (
        <Select
          label={field.label}
          margin="b-24"
          name={field.name}
          options={field.options}
          {...field.props}
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
