import React from "react";
import PropTypes from "prop-types";

/* context */
import { SelectProvider } from "./SelectContext";

/* components */
import { SelectContent } from "./components";
import { Text } from "../../../";

/* styles */
import { Styles } from "./Select.styles.js";

/* utils */
import { SelectValue } from "./components/SelectValue/SelectValue";
import {
  getWrapperOptionsFilter,
  getContentOptionsFilter,
} from "./utils/propsFilter";

export const Select = (props) => {
  const { displayValue, label, name } = props;

  const wrapperOptions = getWrapperOptionsFilter(props);
  const contentOptions = getContentOptionsFilter(props);

  return (
    <SelectProvider displayValue={displayValue} name={name}>
      <SelectValue name={name} />

      <Styles.Wrapper {...wrapperOptions}>
        {!!label && (
          <Text
            as="label"
            htmlFor={name}
            margin="b-4"
            size="sm"
            weight="semibold"
          >
            {label}
          </Text>
        )}

        <SelectContent {...contentOptions}>{props.children}</SelectContent>
      </Styles.Wrapper>
    </SelectProvider>
  );
};

Select.propTypes = {
  children: PropTypes.node,
  displayValue: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  margin: PropTypes.string,
  maxHeight: PropTypes.string, //? content panel height
};

Select.defaultProps = {
  children: null,
  displayValue: "",
  label: "",
  name: "",
  margin: "",
  maxHeight: "auto",
};
