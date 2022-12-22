import React from "react";
import PropTypes from "prop-types";

import { Styles } from "./Flex.styles";

import { getWrapperOptionsFilter } from "./utils/propsFilter";

export const Flex = (props) => {
  const wrapperOptions = getWrapperOptionsFilter(props);

  return <Styles.Wrapper {...wrapperOptions}>{props.children}</Styles.Wrapper>;
};

Flex.propTypes = {
  children: PropTypes.node,
  hAlign: PropTypes.oneOf([
    "center",
    "end",
    "space-around",
    "space-between",
    "start",
  ]),
  margin: PropTypes.string,
  vAlign: PropTypes.oneOf(["center", "end", "start"]),
};

Flex.defaultProps = {
  children: null,
  hAlign: "start",
  margin: "a-0",
  vAlign: "center",
};
