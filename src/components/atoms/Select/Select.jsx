import React from "react";
import PropTypes from "prop-types";

import { SelectProvider } from "./SelectContext";

import { SelectValue } from "./components/SelectValue/SelectValue";
import { SelectContent } from "./components";
import { Text } from "../../../";

import { Styles } from "./Select.styles.js";

const DEFAULT_PROPS = {
  disabled: false,
  isLoading: false,
  label: "",
  margin: "",
  maxHeight: "auto",
  name: "",
  onSearchInputChange: null,
  options: [],
};

export const Select = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <SelectProvider
      name={attrs.name}
      options={attrs.options}
    >
      <SelectValue name={attrs.name} />

      <Styles.Wrapper $margin={attrs.margin}>
        {!!attrs.label && (
          <Text
            as="label"
            htmlFor={attrs.name}
            margin="b-4"
            type="bodySemibold"
          >
            {attrs.label}
          </Text>
        )}

        <SelectContent
          disabled={attrs.disabled}
          isLoading={attrs.isLoading}
          maxHeight={attrs.maxHeight}
          onSearchInputChange={attrs.onSearchInputChange}
        />
      </Styles.Wrapper>
    </SelectProvider>
  );
};

Select.propTypes = {
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  label: PropTypes.string,
  margin: PropTypes.string,
  maxHeight: PropTypes.string, //? content panel height
  name: PropTypes.string,
  onSearchInputChange: PropTypes.func,
  options: PropTypes.array,
};