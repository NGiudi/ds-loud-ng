import React, { useContext, useEffect } from "react";
import { PropTypes } from "prop-types";

import { SelectContext } from "../../SelectContext";

import { Field, useFormikContext } from "formik";

const DEFAULT_PROPS = {
  name: "",
};

export const SelectValue = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
  };

  const ctx = useContext(SelectContext);

  const { setFieldValue } = useFormikContext();

  useEffect(() => {
    setFieldValue(attrs.name, ctx.selectedValue.value);
  }, [ctx.selectedValue]); // eslint-disable-line

  return (
    <Field data-cy={`select_${attrs.name}`} name={attrs.name} type="hidden" />
  );
};

SelectValue.propTypes = {
  name: PropTypes.string,
};
