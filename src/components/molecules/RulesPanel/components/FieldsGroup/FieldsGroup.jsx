import React from "react";
import PropTypes from "prop-types";

/* import components */
import { FieldItem } from "../FieldItem/FieldItem";

export const FieldsGroup = (props) => {
  const { fields } = props;

  return fields.map((field) => {
    const { name } = field;

    return <FieldItem field={field} key={`rulesPanel_${name}`} />;
  });
};

FieldsGroup.propTypes = {
  fields: PropTypes.array,
};

FieldsGroup.defaultProps = {
  fields: [],
};
