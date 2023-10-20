import React from "react";
import PropTypes from "prop-types";

import { SelectProvider } from "./SelectContext";

import { SelectValue } from "./components/SelectValue/SelectValue";
import { SelectContent } from "./components";
import { Text } from "../../../";

import { Styles } from "./Select.styles.js";

export const Select = (props) => {
  const { disabled, label, margin, maxHeight, name, options } = props;

  return (
    <SelectProvider name={name} options={options}>
      <SelectValue name={name} />

      <Styles.Wrapper $margin={margin}>
        {!!label && (
          <Text as="label" htmlFor={name} margin="b-4" type="bodySemibold">
            {label}
          </Text>
        )}

        <SelectContent disabled={disabled} maxHeight={maxHeight} />
      </Styles.Wrapper>
    </SelectProvider>
  );
};

Select.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  margin: PropTypes.string,
  maxHeight: PropTypes.string, //? content panel height
  options: PropTypes.array,
};

Select.defaultProps = {
  disabled: false,
  label: "",
  name: "",
  margin: "",
  maxHeight: "auto",
  options: [],
};
