import React from "react";
import PropTypes from "prop-types";

import { Flex, Text } from "../../../";

import { Styles } from "./Checkbox.styles";

export const Checkbox = (props) => {
  const { id, label, name } = props;

  return (
    <Flex vAlign="start">
      <Styles.CustomCheckbox id={id} name={name} type="checkbox" />

      <div style={{ flexGrow: "0" }}>
        <Text as="label" margin="l-4 t-2" htmlFor={id}>
          {label}
        </Text>
      </div>
    </Flex>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
};

Checkbox.defaultProps = {
  id: "default_checkbox",
  label: "",
  name: "",
};
