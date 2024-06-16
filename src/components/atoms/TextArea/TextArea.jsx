import React from "react";
import PropTypes from "prop-types";

import { useFormikContext } from "formik";

import { Box, Text } from "../../../";

import { Styles } from "./TextArea.styles";

const defaultProps = {
  description: "",
  disabled: false,
  id: "",
  label: "",
  name: "",
  margin: "a-0",
  rows: 5,
};

export const TextArea = (props) => {
  const attrs = {
    ...defaultProps,
    ...props,
  };

  const { setFieldValue, values } = useFormikContext();

  const handleChange = (e) => {
    setFieldValue(attrs.name, e.target.value);
  };

  return (
    <Box margin={attrs.margin}>
      {attrs.label && (
        <Text as="label" htmlFor={attrs.id} margin="b-4" type="bodySemibold">
          {attrs.label}
        </Text>
      )}

      {!!attrs.description && (
        <Text color="black_400" margin="b-4" type="captionRegular">
          {attrs.description}
        </Text>
      )}

      <Styles.TextArea
        as="textarea"
        disabled={props.disabled}
        id={attrs.id}
        name={attrs.name}
        onChange={handleChange}
        rows={attrs.rows}
        spellCheck="false"
        value={values[attrs.name]}
      />
    </Box>
  );
};

TextArea.propTypes = {
  description: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  margin: PropTypes.string,
  rows: PropTypes.number,
};
