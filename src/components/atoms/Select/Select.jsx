import React from "react";
import PropTypes from "prop-types";

/* import components */
import { Text } from "../../../";

/* import styles */
import Styles from "./Select.styles.js";

/* import utils */
import {
  getSelectOptionsFilter,
  getWrapperOptionsFilter,
} from "./utils/propsFilter";

export const Select = (props) => {
  const selectOptions = getSelectOptionsFilter(props);
  const wrapperOptions = getWrapperOptionsFilter(props);

  return (
    <Styles.Wrapper {...wrapperOptions}>
      {/* label */}
      <Text as="label" htmlFor={props.name} weight="semibold">
        {props.label}
      </Text>

      <Styles.SelectWrapper margin="t-4" component="select" {...selectOptions}>
        {props.children}
      </Styles.SelectWrapper>
    </Styles.Wrapper>
  );
};

Select.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  name: PropTypes.string,
};

Select.defaultProps = {
  children: null,
  label: "",
  name: "",
};
