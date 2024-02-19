import React from "react";
import PropTypes from "prop-types";

import { useFormikContext } from "formik";

import { Box, Text } from "../../../";

import { Styles } from "./TextArea.styles";

export const TextArea = (props) => {
  const { description, id, label, name, margin, rows } = props;

  const { setFieldValue, values } = useFormikContext();

  const handleChange = (e) => {
    setFieldValue(name, e.target.value);
  };

  return (
    <Box margin={margin}>
      {label && (
        <Text as="label" htmlFor={id} margin="b-4" type="bodySemibold">
          {label}
        </Text>
      )}

      {!!description && (
        <Text color="black_400" margin="b-4" type="captionRegular">
          {description}
        </Text>
      )}

      <Styles.TextArea
        as="textarea"
        disabled={props.disabled}
        id={id}
        name={name}
        onChange={handleChange}
        rows={rows}
        spellcheck="false"
        value={values[name]}
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

TextArea.defaultProps = {
  description: "",
  disabled: false,
  id: "",
  label: "",
  name: "",
  margin: "a-0",
  rows: 5,
};
