import React from "react";
import PropTypes from "prop-types";

import { Flex, Text } from "../../../";

import { Styles } from "./Checkbox.styles";

const DEFAULT_PROPS = {
  id: "",
  description: "",
  disabled: false,
  label: "",
  margin: "a-0",
  name: "",
};

export const Checkbox = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
  };

  const textColor = attrs.disabled ? "black_500" : "black_900";

  return (
    <Flex margin={attrs.margin} vAlign="start">
      <Styles.CustomCheckbox
        disabled={attrs.disabled}
        id={attrs.id}
        name={attrs.name}
        type="checkbox"
      />

      <div style={{ flexGrow: "0" }}>
        <Text
          as="label"
          color={textColor}
          htmlFor={attrs.id}
          margin="b-4"
          type="bodySemibold"
        >
          {attrs.label}
        </Text>

        {attrs.description && (
          <Text color={textColor} type="captionRegular">
            {attrs.description}
          </Text>
        )}
      </div>
    </Flex>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  margin: PropTypes.string,
  name: PropTypes.string,
};
