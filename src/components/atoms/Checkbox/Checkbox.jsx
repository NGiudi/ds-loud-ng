import React from "react";
import PropTypes from "prop-types";

import { Flex, Text } from "../../../";

import { Styles } from "./Checkbox.styles";

export const Checkbox = (props) => {
  const { description, id, label, name } = props;

  return (
    <Flex vAlign="start">
      <Styles.CustomCheckbox id={id} name={name} type="checkbox" />

      <div style={{ flexGrow: "0" }}>
        <Text as="label" htmlFor={id} margin="b-4" type="bodySemibold">
          {label}
        </Text>

        {description && <Text type="captionRegular">{description}</Text>}
      </div>
    </Flex>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
};

Checkbox.defaultProps = {
  id: null,
  description: null,
  label: "",
  name: "",
};
