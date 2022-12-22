import React from "react";
import PropTypes from "prop-types";

/* import components */
import { FieldItem } from "../FieldItem/FieldItem";

const FieldsGroup = (props) => {
  const { fields } = props;

  return fields.map((field) => {
    const { name } = field;

    return <FieldItem field={field} key={`rulesPanel_${name}`} margin="b-12" />;
  });
};

FieldsGroup.propTypes = {
  fields: PropTypes.array,
};

FieldsGroup.defaultProps = {
  fields: [],
};

export default FieldsGroup;
