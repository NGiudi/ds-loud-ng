import React from "react";
import PropTypes from "prop-types";

import { Text } from "../";

import { Styles } from "./Badge.styles";

import { getWrapperOptionsFilter } from "./utils/propsFilter";

export const Badge = (props) => {
  const wrapperOptions = getWrapperOptionsFilter(props);

  return (
    <Styles.Wrapper {...wrapperOptions}>
      <Text weight="semibold" size="sm">
        {props.children}
      </Text>
    </Styles.Wrapper>
  );
};

Badge.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  margin: PropTypes.string,
};

Badge.defaultProps = {
  children: null,
  color: "orange",
  margin: "a-0",
};
