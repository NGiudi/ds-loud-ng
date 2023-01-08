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
import { getWrapperOptionsFilter } from "./utils/propsFilter";
import { SelectValue } from "./components/SelectValue/SelectValue";

export const Select = (props) => {
  const { label } = props;

  const wrapperOptions = getWrapperOptionsFilter(props);

  return (
    <SelectProvider>
      <SelectValue name={props.name} />

      <Styles.Wrapper {...wrapperOptions}>
        {!!label && (
          <Text
            as="label"
            htmlFor={props.name}
            margin="b-4"
            size="sm"
            weight="semibold"
          >
            {label}
          </Text>
        )}

        <SelectContent>{props.children}</SelectContent>
      </Styles.Wrapper>
    </SelectProvider>
  );
};

Select.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  name: PropTypes.string,
  margin: PropTypes.string,
};

Select.defaultProps = {
  children: null,
  label: "",
  name: "",
  margin: "",
};
