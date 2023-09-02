import React, { useContext, useEffect } from "react";
import { PropTypes } from "prop-types";

/* context */
import { SelectContext } from "../../SelectContext";

/* external components */
import { Field, useFormikContext } from "formik";

export const SelectValue = (props) => {
  const { name } = props;

  const ctx = useContext(SelectContext);

  const { setFieldValue } = useFormikContext();

  useEffect(() => {
    setFieldValue(name, ctx.selectedValue);
  }, [ctx.selectedValue]); // eslint-disable-line

  return <Field name={name} type="hidden" />;
};

SelectValue.propTypes = {
  name: PropTypes.string,
};

SelectValue.defaultProps = {
  name: "",
};
